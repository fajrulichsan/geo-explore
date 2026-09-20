"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import ShapeDropdown from "./ShapeDropdown";
import { SHAPES, type ShapeId } from "./shapes";

type GgbApi = {
  evalCommand: (cmd: string) => void;
  newConstruction: () => void;
  getAllObjectNames: () => string[];
  getObjectType: (name: string) => string;
  getColor: (name: string) => string;
  getFilling: (name: string) => number;
  getLineThickness: (name: string) => number;
  getPointSize: (name: string) => number;
  getVisible: (name: string) => boolean;
  setColor: (name: string, hex: string) => void;
  setFilling: (name: string, filling: number) => void;
  setLineThickness: (name: string, thickness: number) => void;
  setPointSize: (name: string, size: number) => void;
  setVisible: (name: string, visible: boolean) => void;
  registerClickListener: (listener: (name: string) => void) => void;
  unregisterClickListener: (listener: (name: string) => void) => void;
  setSize: (width: number, height: number) => void;
};

type GgbApplet = {
  inject: (id: string) => void;
};

type GgbAppletCtor = new (
  parameters: Record<string, unknown>,
  version: string,
) => GgbApplet;

type ObjectKind = "point" | "segment" | "polygon";

type BaseStyle = {
  kind: ObjectKind;
  color: string;
  filling: number;
  thickness: number;
  pointSize: number;
  visible: boolean;
};

type AspectId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const ASPECTS: {
  id: AspectId;
  label: string;
  target: ObjectKind | null;
  prompt: string;
  scaffolding: string;
}[] = [
  {
    id: 1,
    label: "Pasangan bidang sejajar",
    target: "polygon",
    prompt:
      "Klik sebuah bidang (sisi). Bidang akan menyala sebentar — cari bidang lain yang sejajar dengannya.",
    scaffolding:
      "Putar model dan amati bidang-bidang sisinya. Adakah dua bidang sisi yang sejajar?",
  },
  {
    id: 2,
    label: "Jumlah rusuk",
    target: "segment",
    prompt:
      "Klik setiap rusuk satu per satu. Rusuk yang sudah dihitung berubah hijau dan tidak dihitung dua kali.",
    scaffolding:
      "Amati model dari berbagai arah. Telusuri rusuk-rusuknya dan tentukan jumlahnya.",
  },
  {
    id: 3,
    label: "Bentuk sisi",
    target: "polygon",
    prompt:
      "Klik sebuah sisi untuk menyorotnya, lalu amati bangun datar apa yang terbentuk.",
    scaffolding:
      "Putar model dan amati sisi-sisinya dari berbagai arah. Bentuk apa saja yang kamu temukan pada sisi bangun tersebut?",
  },
  {
    id: 4,
    label: "Susunan sisi",
    target: "polygon",
    prompt:
      "Pilih beberapa sisi bergantian untuk disorot. Klik lagi untuk melepas sorotan, lalu amati susunannya.",
    scaffolding:
      "Amati bagaimana sisi-sisi bangun tersusun dan saling berhubungan. Apa yang kamu temukan dari susunan sisi tersebut?",
  },
  {
    id: 5,
    label: "Sisi sebagai alas",
    target: "polygon",
    prompt:
      "Klik satu sisi untuk dijadikan alas (merah muda). Memilih sisi lain akan memindahkan alasnya.",
    scaffolding:
      "Pilih salah satu sisi yang akan kamu amati sebagai alas. Amati bentuk sisi tersebut. Berbentuk apakah sisi yang kamu pilih?",
  },
  {
    id: 6,
    label: "Jumlah sisi",
    target: "polygon",
    prompt:
      "Klik setiap sisi satu per satu. Sisi yang sudah dihitung berubah oranye dan tidak dihitung dua kali.",
    scaffolding:
      "Putar model dari berbagai arah dan telusuri seluruh sisinya. Berapa banyak sisi yang dapat kamu temukan?",
  },
  {
    id: 7,
    label: "Jumlah titik sudut",
    target: "point",
    prompt:
      "Klik setiap titik sudut satu per satu. Titik yang sudah dihitung berubah merah. Gunakan tombol untuk menampilkan atau menyembunyikan semua titik.",
    scaffolding:
      "Amati seluruh titik sudut pada model. Telusuri satu per satu dan tentukan berapa banyak titik sudut yang kamu temukan.",
  },
  {
    id: 8,
    label: "Sifat / pola lain",
    target: null,
    prompt:
      "Mode bebas: putar dan perbesar bangun ruang untuk menemukan sifat atau pola lain.",
    scaffolding:
      "Amati kembali model secara keseluruhan. Adakah sifat atau pola lain yang menurutmu penting untuk membantu menyelidiki dugaan kelompokmu?",
  },
];

const BASE_COLORS: Record<ObjectKind, string> = {
  polygon: "#60A5FA",
  segment: "#1F2937",
  point: "#1F2937",
};

const BASE_FACE_FILLING = 0.25;

const COLORS = {
  flash: "#FACC15",
  base: "#DB2777",
  picked: "#7C3AED",
  edge: "#16A34A",
  face: "#EA580C",
  vertex: "#DC2626",
} as const;

const FLASH_MS = 1200;
const APPLET_ID = "geogebra-explorer-applet";

function kindOf(type: string): ObjectKind | null {
  const t = type.toLowerCase();
  if (t.includes("point")) return "point";
  if (t.includes("polyhedron")) return null;
  if (/polygon|quadrilateral|triangle|face/.test(t)) return "polygon";
  if (/segment|line|ray/.test(t)) return "segment";
  return null;
}

function toggled(set: ReadonlySet<string>, name: string) {
  const next = new Set(set);
  if (!next.delete(name)) next.add(name);
  return next;
}

function added(set: ReadonlySet<string>, name: string) {
  return set.has(name) ? (set as Set<string>) : new Set(set).add(name);
}

export default function GeoGebraExplorer({
  initialShapeId = "kubus",
}: {
  initialShapeId?: ShapeId;
}) {
  const [shapeId, setShapeId] = useState<ShapeId>(initialShapeId);
  const [panelOpen, setPanelOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<GgbApi | null>(null);
  const appletRef = useRef<GgbApplet | null>(null);
  const baseRef = useRef<Map<string, BaseStyle>>(new Map());
  const clickRef = useRef<(name: string) => void>(() => {});
  const flashTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const [scriptReady, setScriptReady] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const [aspect, setAspect] = useState<AspectId>(1);
  const [flashed, setFlashed] = useState<ReadonlySet<string>>(new Set());
  const [pickedSides, setPickedSides] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [countedEdges, setCountedEdges] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [countedFaces, setCountedFaces] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [countedVertices, setCountedVertices] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [verticesVisible, setVerticesVisible] = useState(true);
  const [totals, setTotals] = useState({ edges: 0, faces: 0, vertices: 0 });

  const aspectRef = useRef(aspect);
  useEffect(() => {
    aspectRef.current = aspect;
  }, [aspect]);

  const clearFlash = useCallback(() => {
    flashTimers.current.forEach((timer) => clearTimeout(timer));
    flashTimers.current.clear();
    setFlashed(new Set());
  }, []);

  const flash = useCallback((name: string) => {
    const existing = flashTimers.current.get(name);
    if (existing) clearTimeout(existing);
    setFlashed((prev) => added(prev, name));
    flashTimers.current.set(
      name,
      setTimeout(() => {
        flashTimers.current.delete(name);
        setFlashed((prev) => {
          const next = new Set(prev);
          next.delete(name);
          return next;
        });
      }, FLASH_MS),
    );
  }, []);

  const handleClick = useCallback(
    (name: string) => {
      const api = apiRef.current;
      if (!api) return;
      const kind = kindOf(api.getObjectType(name));
      const current = ASPECTS.find((a) => a.id === aspectRef.current);
      if (!kind || kind !== current?.target) return;

      switch (aspectRef.current) {
        case 1:
        case 3:
          flash(name);
          break;
        case 2:
          setCountedEdges((prev) => added(prev, name));
          break;
        case 4:
          setPickedSides((prev) => toggled(prev, name));
          break;
        case 5:
          setSelectedBase(name);
          break;
        case 6:
          setCountedFaces((prev) => added(prev, name));
          break;
        case 7:
          setCountedVertices((prev) => added(prev, name));
          break;
      }
    },
    [flash],
  );

  useEffect(() => {
    clickRef.current = handleClick;
  }, [handleClick]);

  const captureBase = useCallback((api: GgbApi) => {
    const base = new Map<string, BaseStyle>();
    const counts = { edges: 0, faces: 0, vertices: 0 };
    api.getAllObjectNames().forEach((name) => {
      const kind = kindOf(api.getObjectType(name));
      if (!kind) return;
      base.set(name, {
        kind,
        color: BASE_COLORS[kind],
        filling: kind === "polygon" ? BASE_FACE_FILLING : api.getFilling(name),
        thickness: api.getLineThickness(name),
        pointSize: api.getPointSize(name),
        visible: api.getVisible(name),
      });
      if (kind === "segment") counts.edges++;
      else if (kind === "polygon") counts.faces++;
      else counts.vertices++;
    });
    baseRef.current = base;
    setTotals(counts);
  }, []);

  const buildShape = useCallback(
    (api: GgbApi) => {
      api.newConstruction();
      SHAPES.find((s) => s.id === shapeId)?.commands.forEach((c) =>
        api.evalCommand(c),
      );
      captureBase(api);
    },
    [shapeId, captureBase],
  );

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

    const listener = (name: string) => clickRef.current(name);
    let registeredApi: GgbApi | null = null;

    const applet = new GGBApplet(
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
          buildShape(api);
          api.registerClickListener(listener);
          setApiReady(true);
        },
      },
      "6.0",
    );
    appletRef.current = applet;
    applet.inject(APPLET_ID);

    const observer = new ResizeObserver(() => {
      apiRef.current?.setSize(container.clientWidth, container.clientHeight);
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      registeredApi?.unregisterClickListener(listener);
      apiRef.current = null;
      appletRef.current = null;
      setApiReady(false);
    };
  }, [scriptReady, buildShape]);

  useEffect(() => {
    const timers = flashTimers.current;
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const api = apiRef.current;
    if (!apiReady || !api) return;

    baseRef.current.forEach((base, name) => {
      let color = base.color;
      let filling = base.filling;
      let thickness = base.thickness;
      let pointSize = base.pointSize;

      if (base.kind === "point") {
        api.setVisible(name, verticesVisible && base.visible);
        if (countedVertices.has(name)) {
          color = COLORS.vertex;
          pointSize = base.pointSize + 2;
        }
      } else if (base.kind === "segment") {
        if (countedEdges.has(name)) {
          color = COLORS.edge;
          thickness = base.thickness + 4;
        }
      } else if (flashed.has(name)) {
        color = COLORS.flash;
        filling = 0.7;
      } else if (name === selectedBase) {
        color = COLORS.base;
        filling = 0.7;
      } else if (pickedSides.has(name)) {
        color = COLORS.picked;
        filling = 0.6;
      } else if (countedFaces.has(name)) {
        color = COLORS.face;
        filling = 0.5;
      }

      api.setColor(name, color);
      if (base.kind === "polygon") api.setFilling(name, filling);
      if (base.kind === "segment") api.setLineThickness(name, thickness);
      if (base.kind === "point") api.setPointSize(name, pointSize);
    });
  }, [
    apiReady,
    flashed,
    pickedSides,
    selectedBase,
    countedEdges,
    countedFaces,
    countedVertices,
    verticesVisible,
  ]);

  function handleSelectShape(id: ShapeId) {
    handleResetProgress();
    setShapeId(id);
  }

  function handleSelectAspect(id: AspectId) {
    clearFlash();
    setAspect(id);
  }

  function handleResetProgress() {
    clearFlash();
    setPickedSides(new Set());
    setSelectedBase(null);
    setCountedEdges(new Set());
    setCountedFaces(new Set());
    setCountedVertices(new Set());
    setVerticesVisible(true);
  }

  const current = ASPECTS.find((a) => a.id === aspect) ?? ASPECTS[0];
  const metrics = [
    {
      label: "Rusuk",
      value: countedEdges.size,
      total: totals.edges,
      tone: "bg-green-600",
    },
    {
      label: "Sisi",
      value: countedFaces.size,
      total: totals.faces,
      tone: "bg-orange-600",
    },
    {
      label: "Titik sudut",
      value: countedVertices.size,
      total: totals.vertices,
      tone: "bg-red-600",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-4 lg:flex-row">
      <Script
        src="https://www.geogebra.org/apps/deployggb.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <aside className="flex w-full shrink-0 flex-col gap-4 lg:w-80">
        <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            aria-expanded={panelOpen}
            className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900"
          >
            Bangun ruang &amp; aspek
            <span className={`transition-transform ${panelOpen ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>

          {panelOpen && (
            <div className="flex flex-col gap-3 border-t border-gray-200 p-3">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">Bangun ruang</span>
                <ShapeDropdown selected={shapeId} onSelect={handleSelectShape} />
              </div>

              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">Aspek</span>
                <select
                  value={aspect}
                  onChange={(e) => handleSelectAspect(Number(e.target.value) as AspectId)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md"
                >
                  {ASPECTS.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.id}. {a.label}
                    </option>
                  ))}
                </select>
              </label>

              <div
                role="note"
                className="mx-auto w-full rounded-xl border border-sky-200 bg-sky-50 p-4 text-center text-sm font-medium text-sky-900"
              >
                {current.scaffolding}
              </div>
            </div>
          )}
        </section>

        <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm text-gray-800">
          <p className="mb-1 font-semibold">{current.label}</p>
          <p>{current.prompt}</p>
          {aspect === 5 && (
            <p className="mt-2 font-medium">
              Alas: {selectedBase ? selectedBase : "belum dipilih"}
            </p>
          )}
          {aspect === 7 && (
            <button
              type="button"
              onClick={() => setVerticesVisible((v) => !v)}
              className="mt-2 rounded-md bg-red-600 px-3 py-1.5 text-white hover:bg-red-700"
            >
              {verticesVisible ? "Sembunyikan" : "Tampilkan"} semua titik sudut
            </button>
          )}
        </div>

        <dl className="grid grid-cols-3 gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-gray-200 bg-white p-2 text-center"
            >
              <dt className="text-xs text-gray-500">{m.label}</dt>
              <dd className="mt-1 text-lg font-bold text-gray-900">
                {m.value}
                <span className="text-sm font-normal text-gray-500">
                  /{m.total}
                </span>
              </dd>
              <div className="mt-1 h-1.5 overflow-hidden rounded bg-gray-200">
                <div
                  className={`h-full ${m.tone}`}
                  style={{
                    width: `${m.total ? (m.value / m.total) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </dl>

        <button
          type="button"
          onClick={handleResetProgress}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
          Reset progres
        </button>
      </aside>

      <div
        ref={containerRef}
        className="min-h-[420px] w-full flex-1 overflow-hidden rounded-lg border border-gray-200"
      />
    </div>
  );
}
