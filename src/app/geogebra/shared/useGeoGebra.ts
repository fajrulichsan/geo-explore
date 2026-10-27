"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  arrangementCount,
  faceEdgeKey,
  foldFaces,
  polyhedron,
  type Vec3,
} from "./geometry";
import type { Solid } from "./solids";

export type GgbApi = {
  deleteObject: (name: string) => void;
  exists: (name: string) => boolean;
  setLineStyle: (name: string, style: number) => void;
  evalCommand: (cmd: string) => void;
  newConstruction: () => void;
  getAllObjectNames: () => string[];
  getObjectType: (name: string) => string;
  setCoords: (name: string, x: number, y: number, z: number) => void;
  setPointSize: (name: string, size: number) => void;
  setColor: (name: string, r: number, g: number, b: number) => void;
  setFilling: (name: string, filling: number) => void;
  setLineThickness: (name: string, thickness: number) => void;
  setVisible: (name: string, visible: boolean) => void;
  setFixed: (name: string, fixed: boolean, selectable: boolean) => void;
  setLabelVisible: (name: string, visible: boolean) => void;
  setLabelStyle: (name: string, style: number) => void;
  setCaption: (name: string, caption: string) => void;
  setRepaintingActive: (active: boolean) => void;
  setCoordSystem: (
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    zmin: number,
    zmax: number,
  ) => void;
  registerClickListener: (listener: (name: string) => void) => void;
  unregisterClickListener: (listener: (name: string) => void) => void;
  setSize: (width: number, height: number) => void;
};

type GgbAppletCtor = new (
  parameters: Record<string, unknown>,
  version: string,
) => { inject: (id: string) => void };

export type FaceTone =
  | "base"
  | "dim"
  | "focus"
  | "counted"
  | "a"
  | "b"
  | "alas"
  | "orange";

export type FacePaint = { tone: FaceTone; label?: string };

export type SceneClick =
  | { kind: "face"; solid: number; face: string }
  | { kind: "edge"; solid: number; face: string; edge: number; edgeKey: string }
  | { kind: "vertex"; solid: number; index: number }
  | { kind: "custom"; tag: string };

export type Overlay = {
  points: Vec3[];
  color: string;
  thickness?: number;
  filling?: number;
  dashed?: boolean;
  caption?: string;
};

export type ScenePaint = {
  faces?: ReadonlyMap<string, FacePaint>;
  edgeCaptions?: ReadonlyMap<string, string>;
  countedEdges?: ReadonlySet<string>;
  countedVertices?: ReadonlySet<string>;
  verticesVisible?: boolean;
};

export type SceneOptions = {
  arrangements?: number[];
  vertices?: boolean;
  compact?: boolean;
  allArrangements?: boolean;
  scales?: number[];
  fitScale?: number;
  gap?: number;
};

type FaceObjects = {
  face: string;
  polygon: string;
  points: string[];
  edges: string[];
  edgeKeys: string[];
};

type SceneState = {
  solids: Solid[];
  objects: FaceObjects[][];
  arrangements: number[];
  folds: number[];
  vertexNames: string[][];
  scales: number[];
  gap: number;
};

const APPLET_ID = "geogebra-flow-applet";
export const SOLID_GAP = 32;

const FACE_STYLE: Record<FaceTone, { color: string; filling: number }> = {
  base: { color: "#60A5FA", filling: 0.3 },
  dim: { color: "#94A3B8", filling: 0.06 },
  focus: { color: "#FBBF24", filling: 0.6 },
  counted: { color: "#16A34A", filling: 0.55 },
  a: { color: "#F97316", filling: 0.75 },
  b: { color: "#7C3AED", filling: 0.75 },
  alas: { color: "#DB2777", filling: 0.7 },
  orange: { color: "#EA580C", filling: 0.55 },
};

const EDGE_COLOR = "#1F2937";
const EDGE_MEASURED_COLOR = "#DC2626";
const EDGE_COUNTED_COLOR = "#16A34A";
const VERTEX_COLOR = "#1F2937";
const VERTEX_COUNTED_COLOR = "#DC2626";

export function faceObjectName(solid: number, face: string) {
  return `S${solid}${face}`;
}

const setHex = (api: GgbApi, name: string, hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  api.setColor(name, (n >> 16) & 255, (n >> 8) & 255, n & 255);
};

const clean = (v: number) => Math.round(v * 1e6) / 1e6 + 0;

export function useGeoGebra(onClick: (click: SceneClick) => void) {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<GgbApi | null>(null);
  const sceneRef = useRef<SceneState>({
    solids: [],
    objects: [],
    arrangements: [],
    folds: [],
    vertexNames: [],
    scales: [],
    gap: SOLID_GAP,
  });
  const overlayNames = useRef<string[]>([]);
  const lookupRef = useRef<Map<string, SceneClick>>(new Map());
  const clickRef = useRef(onClick);
  const pendingRef = useRef<{ solids: Solid[]; options: SceneOptions } | null>(
    null,
  );
  const [scriptReady, setScriptReady] = useState(false);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    clickRef.current = onClick;
  }, [onClick]);

  const writeFold = useCallback((api: GgbApi, solid: number, t: number) => {
    const { solids, objects, arrangements, folds, scales, gap } = sceneRef.current;
    const def = solids[solid];
    if (!def) return;
    folds[solid] = t;
    const faces = foldFaces(def, t, arrangements[solid] ?? 0);
    const dx = solid * gap;
    const k = scales[solid] ?? 1;
    faces.forEach((corners: Vec3[], f) => {
      corners.forEach((p, j) => {
        api.setCoords(objects[solid][f].points[j], p[0] * k + dx, p[1] * k, p[2] * k);
      });
    });
  }, []);

  const loadScene = useCallback((solids: Solid[], options: SceneOptions = {}) => {
    const api = apiRef.current;
    if (!api) {
      pendingRef.current = { solids, options };
      return;
    }
    const arrangements = solids.map((_, i) => options.arrangements?.[i] ?? 0);
    const scales = solids.map((_, i) => options.scales?.[i] ?? 1);
    const gap = options.gap ?? SOLID_GAP;
    api.setRepaintingActive(false);
    api.newConstruction();
    api.evalCommand('SetPerspective("T")');
    api.evalCommand("SetViewDirection(Vector((0.35,1,-1)))");
    const lookup = new Map<string, SceneClick>();
    const objects: FaceObjects[][] = [];
    const vertexNames: string[][] = [];

    solids.forEach((def, s) => {
      const poly = polyhedron(def);
      const faces = foldFaces(def, 0, arrangements[s]);
      const row: FaceObjects[] = [];
      faces.forEach((corners, f) => {
        const face = poly.faces[f].key;
        const points = corners.map((p, j) => {
          const name = `${faceObjectName(s, face)}P${j}`;
          api.evalCommand(
            `${name}=(${clean(p[0] * scales[s] + s * gap)},${clean(p[1] * scales[s])},${clean(p[2] * scales[s])})`,
          );
          api.setVisible(name, false);
          return name;
        });
        const before = new Set(api.getAllObjectNames());
        const polygon = faceObjectName(s, face);
        api.evalCommand(`${polygon}=Polygon(${points.join(",")})`);
        const created = api
          .getAllObjectNames()
          .filter((n) => !before.has(n) && n !== polygon);
        const edges = created.filter(
          (n) => api.getObjectType(n).toLowerCase() === "segment",
        );
        api.setLabelVisible(polygon, false);
        api.setFixed(polygon, true, true);
        lookup.set(polygon, { kind: "face", solid: s, face });
        const edgeKeys = edges.map((edge, e) => {
          const key = faceEdgeKey(poly.faces[f].verts, e);
          api.setLabelVisible(edge, false);
          api.setFixed(edge, true, true);
          setHex(api, edge, EDGE_COLOR);
          api.setLineThickness(edge, 5);
          lookup.set(edge, { kind: "edge", solid: s, face, edge: e, edgeKey: key });
          return key;
        });
        row.push({ face, polygon, points, edges, edgeKeys });
      });
      objects.push(row);

      const names: string[] = [];
      if (options.vertices) {
        poly.vertices.forEach((p, i) => {
          const name = `S${s}V${i}`;
          api.evalCommand(
            `${name}=(${clean(p[0] + s * gap)},${clean(p[1])},${clean(p[2])})`,
          );
          api.setLabelVisible(name, false);
          api.setFixed(name, true, true);
          api.setPointSize(name, 5);
          setHex(api, name, VERTEX_COLOR);
          lookup.set(name, { kind: "vertex", solid: s, index: i });
          names.push(name);
        });
      }
      vertexNames.push(names);
    });

    sceneRef.current = {
      solids,
      objects,
      arrangements,
      folds: solids.map(() => 0),
      vertexNames,
      scales,
      gap,
    };
    lookupRef.current = lookup;

    const points = solids.flatMap((d, s) =>
      (options.compact ? [0] : [0, 1]).flatMap((t) =>
        (options.compact
          ? [0]
          : options.allArrangements
            ? Array.from({ length: arrangementCount(d) }, (_, k) => k)
            : [arrangements[s]]
        ).flatMap((k) =>
          foldFaces(d, t, k)
            .flat()
            .map((p): Vec3 => [
              p[0] * (options.fitScale ?? 1) + s * gap,
              p[1] * (options.fitScale ?? 1),
              p[2] * (options.fitScale ?? 1),
            ]),
        ),
      ),
    );
    const range = (axis: 0 | 1 | 2) => {
      const values = points.map((p) => p[axis]);
      return [Math.min(...values), Math.max(...values)];
    };
    const [x0, x1] = range(0);
    const [y0, y1] = range(1);
    const [z0, z1] = range(2);
    const half = Math.max(x1 - x0, y1 - y0, z1 - z0) * 0.6;
    const cz = (z0 + z1) / 2;
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    api.evalCommand("ShowAxes(3,false)");
    api.evalCommand("ShowGrid(3,false)");
    api.setVisible("xOyPlane", false);
    api.setCoordSystem(cx - half, cx + half, cy - half, cy + half, cz - half, cz + half);
    api.setRepaintingActive(true);
  }, []);

  const setArrangement = useCallback(
    (solid: number, arrangement: number) => {
      const api = apiRef.current;
      if (!api) return;
      sceneRef.current.arrangements[solid] = arrangement;
      api.setRepaintingActive(false);
      writeFold(api, solid, sceneRef.current.folds[solid] ?? 0);
      api.setRepaintingActive(true);
    },
    [writeFold],
  );

  const setScale = useCallback(
    (solid: number, k: number) => {
      const api = apiRef.current;
      if (!api) return;
      sceneRef.current.scales[solid] = k;
      api.setRepaintingActive(false);
      writeFold(api, solid, sceneRef.current.folds[solid] ?? 0);
      api.setRepaintingActive(true);
    },
    [writeFold],
  );

  const setOverlays = useCallback((items: Overlay[]) => {
    const api = apiRef.current;
    if (!api) return;
    api.setRepaintingActive(false);
    overlayNames.current.forEach((name) => {
      if (api.exists(name)) api.deleteObject(name);
    });
    overlayNames.current = [];
    items.forEach((item, i) => {
      const name = `Ov${i}`;
      const pts = item.points
        .map((p) => `(${clean(p[0])},${clean(p[1])},${clean(p[2])})`)
        .join(",");
      const before = new Set(api.getAllObjectNames());
      api.evalCommand(
        `${name}=${item.points.length === 2 ? "Segment" : "Polygon"}(${pts})`,
      );
      overlayNames.current.push(name);
      api.getAllObjectNames().forEach((n) => {
        if (!before.has(n) && n !== name) overlayNames.current.push(n);
      });
      setHex(api, name, item.color);
      if (item.points.length === 2) {
        api.setLineThickness(name, item.thickness ?? 7);
        if (item.dashed) api.setLineStyle(name, 1);
      } else {
        api.setFilling(name, item.filling ?? 0.5);
      }
      api.setFixed(name, true, false);
      if (item.caption) {
        api.setCaption(name, item.caption);
        api.setLabelStyle(name, 3);
        api.setLabelVisible(name, true);
      } else {
        api.setLabelVisible(name, false);
      }
    });
    api.setRepaintingActive(true);
  }, []);

  const loadCustom = useCallback(
    (
      build: (
        api: GgbApi,
        register: (name: string, tag: string) => void,
      ) => void,
    ) => {
      const api = apiRef.current;
      if (!api) return;
      api.setRepaintingActive(false);
      api.newConstruction();
      api.evalCommand('SetPerspective("T")');
      api.evalCommand("SetViewDirection(Vector((0.35,1,-1)))");
      api.evalCommand("ShowAxes(3,false)");
      api.evalCommand("ShowGrid(3,false)");
      api.setVisible("xOyPlane", false);
      overlayNames.current = [];
      sceneRef.current = {
        solids: [],
        objects: [],
        arrangements: [],
        folds: [],
        vertexNames: [],
        scales: [],
        gap: SOLID_GAP,
      };
      const lookup = new Map<string, SceneClick>();
      build(api, (name, tag) => lookup.set(name, { kind: "custom", tag }));
      lookupRef.current = lookup;
      api.setRepaintingActive(true);
    },
    [],
  );

  const withApi = useCallback((fn: (api: GgbApi) => void) => {
    const api = apiRef.current;
    if (!api) return;
    api.setRepaintingActive(false);
    fn(api);
    api.setRepaintingActive(true);
  }, []);

  const setFold = useCallback(
    (solid: number, t: number) => {
      const api = apiRef.current;
      if (!api) return;
      api.setRepaintingActive(false);
      writeFold(api, solid, t);
      api.setRepaintingActive(true);
    },
    [writeFold],
  );

  const paint = useCallback((input: ScenePaint) => {
    const api = apiRef.current;
    if (!api) return;
    const { faces, edgeCaptions, countedEdges, countedVertices } = input;
    api.setRepaintingActive(false);
    sceneRef.current.objects.forEach((row, s) =>
      row.forEach((obj) => {
        const paintFor = faces?.get(`${s}:${obj.face}`);
        const style = FACE_STYLE[paintFor?.tone ?? "base"];
        setHex(api, obj.polygon, style.color);
        api.setFilling(obj.polygon, style.filling);
        if (paintFor?.label) {
          api.setCaption(obj.polygon, paintFor.label);
          api.setLabelStyle(obj.polygon, 3);
        }
        api.setLabelVisible(obj.polygon, Boolean(paintFor?.label));
        obj.edges.forEach((edge, e) => {
          const caption = edgeCaptions?.get(`${s}:${obj.face}:${e}`);
          const counted = countedEdges?.has(`${s}:${obj.edgeKeys[e]}`);
          setHex(
            api,
            edge,
            caption ? EDGE_MEASURED_COLOR : counted ? EDGE_COUNTED_COLOR : EDGE_COLOR,
          );
          api.setLineThickness(edge, caption || counted ? 9 : 5);
          if (caption) {
            api.setCaption(edge, caption);
            api.setLabelStyle(edge, 3);
          }
          api.setLabelVisible(edge, Boolean(caption));
        });
      }),
    );
    sceneRef.current.vertexNames.forEach((names, s) =>
      names.forEach((name, i) => {
        const counted = countedVertices?.has(`${s}:${i}`);
        api.setVisible(name, input.verticesVisible ?? true);
        setHex(api, name, counted ? VERTEX_COUNTED_COLOR : VERTEX_COLOR);
        api.setPointSize(name, counted ? 9 : 5);
      }),
    );
    api.setRepaintingActive(true);
  }, []);

  useEffect(() => {
    if (!scriptReady) return;
    const container = containerRef.current;
    const GGBApplet = (window as unknown as { GGBApplet?: GgbAppletCtor })
      .GGBApplet;
    if (!container || !GGBApplet) return;

    container.innerHTML = "";
    const mount = document.createElement("div");
    mount.id = APPLET_ID;
    container.appendChild(mount);

    const listener = (name: string) => {
      const hit = lookupRef.current.get(name);
      if (hit) clickRef.current(hit);
    };
    let registeredApi: GgbApi | null = null;

    new GGBApplet(
      {
        appName: "3d",
        width: container.clientWidth,
        height: container.clientHeight,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        showResetIcon: false,
        enableRightClick: false,
        enableLabelDrags: false,
        perspective: "T",
        language: "en",
        appletOnLoad: (api: GgbApi) => {
          apiRef.current = api;
          registeredApi = api;
          api.registerClickListener(listener);
          setApiReady(true);
          if (pendingRef.current) {
            loadScene(pendingRef.current.solids, pendingRef.current.options);
            pendingRef.current = null;
          }
        },
      },
      "6.0",
    ).inject(APPLET_ID);

    const observer = new ResizeObserver(() => {
      apiRef.current?.setSize(container.clientWidth, container.clientHeight);
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      registeredApi?.unregisterClickListener(listener);
      apiRef.current = null;
      setApiReady(false);
    };
  }, [scriptReady, loadScene]);

  return {
    containerRef,
    apiReady,
    markScriptReady: () => setScriptReady(true),
    loadScene,
    setFold,
    setArrangement,
    setScale,
    setOverlays,
    loadCustom,
    withApi,
    paint,
  };
}
