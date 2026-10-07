"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import ShapeDropdown from "../ShapeDropdown";
import { SHAPES, type ShapeId } from "../shapes";

type GgbApi = {
  evalCommand: (cmd: string) => void;
  newConstruction: () => void;
  getAllObjectNames: () => string[];
  getObjectType: (name: string) => string;
  getColor: (name: string) => string;
  getFilling: (name: string) => number;
  getLineThickness: (name: string) => number;
  getVisible: (name: string) => boolean;
  setColor: (name: string, hex: string) => void;
  setFilling: (name: string, filling: number) => void;
  setLineThickness: (name: string, thickness: number) => void;
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

type ObjectKind = "segment" | "polygon";

type BaseStyle = {
  kind: ObjectKind;
  color: string;
  filling: number;
  thickness: number;
};

type AspectId = 1 | 2 | 3 | 4 | 5;

const ASPECTS: {
  id: AspectId;
  label: string;
  target: ObjectKind | null;
  prompt: string;
  scaffolding: string;
}[] = [
  {
    id: 1,
    label: "Hubungan antar sisi",
    target: "polygon",
    prompt:
      "Pilih dua sisi pada jaring-jaring. Amati posisi kedua sisi tersebut sebelum dan setelah dilipat.",
    scaffolding: "Apa hubungan yang kamu temukan antara dua sisi yang kamu pilih?",
  },
  {
    id: 2,
    label: "Posisi sisi",
    target: "polygon",
    prompt: "Pilih salah satu sisi. Sorotannya akan tetap ada selama animasi lipatan.",
    scaffolding: "Amati posisinya pada jaring-jaring, lalu perhatikan ke mana sisi itu berpindah ketika dilipat.",
  },
  {
    id: 3,
    label: "Proses lipatan",
    target: null,
    prompt: "Gunakan slider atau tombol Buka/Lipat untuk menjalankan animasi secara bertahap.",
    scaffolding: "Amati bagaimana sisi-sisi bergerak ketika jaring-jaring dilipat.",
  },
  {
    id: 4,
    label: "Sisi bertumpuk atau tidak",
    target: null,
    prompt: "Lipat bangun hingga selesai, lalu putar hasilnya dari berbagai arah.",
    scaffolding: "Perhatikan posisi akhir setiap sisi. Apakah ada sisi yang saling bertumpuk, atau bagian yang belum tertutup?",
  },
  {
    id: 5,
    label: "Pola / sifat lainnya",
    target: null,
    prompt: "Mode bebas: coba buka dan lipat berulang kali, putar, dan amati keseluruhan bangun.",
    scaffolding: "Adakah pola atau sifat lain yang menurutmu penting untuk menyelidiki dugaan kelompokmu?",
  },
];

const BASE_COLORS: Record<ObjectKind, string> = {
  polygon: "#60A5FA",
  segment: "#1F2937",
};
const BASE_FACE_FILLING = 0.25;

const COLORS = {
  flash: "#FACC15",
  picked: "#7C3AED",
} as const;

const FLASH_MS = 1400;
const APPLET_ID = "geogebra-jaring-jaring-applet";
const ANIMATE_MS = 2200;

function kindOf(type: string): ObjectKind | null {
  const t = type.toLowerCase();
  if (t.includes("point")) return null;
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

export default function JaringJaringExplorer({
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
  const flashTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const rafRef = useRef<number | null>(null);
  const tRef = useRef(0);

  const [scriptReady, setScriptReady] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const [aspect, setAspect] = useState<AspectId>(1);
  const [flashed, setFlashed] = useState<ReadonlySet<string>>(new Set());
  const [pickedSides, setPickedSides] = useState<ReadonlySet<string>>(new Set());
  const [tValue, setTValue] = useState(0);
  const [playing, setPlaying] = useState(false);

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
          flash(name);
          break;
        case 2:
          setPickedSides((prev) => toggled(prev, name));
          break;
      }
    },
    [flash],
  );

  useEffect(() => {
    clickRef.current = handleClick;
  }, [handleClick]);

  const stopAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setPlaying(false);
  }, []);

  const animateTo = useCallback(
    (target: number) => {
      const api = apiRef.current;
      if (!api) return;
      stopAnimation();
      const start = tRef.current;
      const distance = Math.abs(target - start);
      if (distance < 0.001) return;
      const startTime = performance.now();
      const duration = ANIMATE_MS * distance;
      setPlaying(true);

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const value = start + (target - start) * progress;
        tRef.current = value;
        setTValue(value);
        api.evalCommand(`SetValue(t,${value})`);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          setPlaying(false);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [stopAnimation],
  );

  const captureBase = useCallback((api: GgbApi) => {
    const base = new Map<string, BaseStyle>();
    api.getAllObjectNames().forEach((name) => {
      const kind = kindOf(api.getObjectType(name));
      if (!kind) return;
      base.set(name, {
        kind,
        color: BASE_COLORS[kind],
        filling: kind === "polygon" ? BASE_FACE_FILLING : api.getFilling(name),
        thickness: api.getLineThickness(name),
      });
    });
    baseRef.current = base;
  }, []);

  const buildShape = useCallback(
    (api: GgbApi) => {
      api.newConstruction();
      SHAPES.find((s) => s.id === shapeId)?.commands.forEach((c) => api.evalCommand(c));

      const solidName = api
        .getAllObjectNames()
        .find((name) => api.getObjectType(name).toLowerCase().includes("polyhedron"));
      if (!solidName) return;

      api.evalCommand("t=Slider(0,1,0.01)");
      api.evalCommand("SetValue(t,0)");
      api.evalCommand(`jaring=Net(${solidName},t)`);
      api.setVisible(solidName, false);
      if (api.getAllObjectNames().includes("poly1")) api.setVisible("poly1", false);
      tRef.current = 0;
      setTValue(0);
      captureBase(api);
    },
    [shapeId, captureBase],
  );

  useEffect(() => {
    if (!scriptReady) return;
    const container = containerRef.current;
    const GGBApplet = (window as unknown as { GGBApplet?: GgbAppletCtor }).GGBApplet;
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

  useEffect(() => stopAnimation, [stopAnimation]);

  useEffect(() => {
    const api = apiRef.current;
    if (!apiReady || !api) return;

    baseRef.current.forEach((base, name) => {
      let color = base.color;
      let filling = base.filling;
      const thickness = base.thickness;

      if (base.kind === "polygon") {
        if (flashed.has(name)) {
          color = COLORS.flash;
          filling = 0.7;
        } else if (pickedSides.has(name)) {
          color = COLORS.picked;
          filling = 0.6;
        }
      }

      api.setColor(name, color);
      if (base.kind === "polygon") api.setFilling(name, filling);
      if (base.kind === "segment") api.setLineThickness(name, thickness);
    });
  }, [apiReady, flashed, pickedSides]);

  function handleSelectShape(id: ShapeId) {
    handleResetProgress();
    setShapeId(id);
  }

  function handleSelectAspect(id: AspectId) {
    clearFlash();
    setAspect(id);
  }

  function handleResetProgress() {
    stopAnimation();
    clearFlash();
    setPickedSides(new Set());
    tRef.current = 0;
    setTValue(0);
    apiRef.current?.evalCommand("SetValue(t,0)");
  }

  function handleSlider(value: number) {
    stopAnimation();
    tRef.current = value;
    setTValue(value);
    apiRef.current?.evalCommand(`SetValue(t,${value})`);
  }

  const current = ASPECTS.find((a) => a.id === aspect) ?? ASPECTS[0];
  const shapeLabel = SHAPES.find((s) => s.id === shapeId)?.label ?? "";

  return (
    <div className="flex h-full w-full flex-col gap-4 lg:flex-row">
      <Script
        src="https://www.geogebra.org/apps/deployggb.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <aside className="flex w-full shrink-0 flex-col gap-4 lg:w-80">
        <Link
          href="/geogebra"
          className="text-xs font-semibold text-[#2563EB] hover:underline"
        >
          ← Eksplorasi Model 3D
        </Link>

        <div
          role="note"
          className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs font-medium text-sky-900"
        >
          Ingat! Kamu sedang mengumpulkan informasi. Belum saatnya menentukan kesimpulan akhir.
        </div>

        <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            aria-expanded={panelOpen}
            className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900"
          >
            Bangun ruang &amp; aspek
            <span className={`transition-transform ${panelOpen ? "rotate-180" : ""}`}>▾</span>
          </button>

          {panelOpen && (
            <div className="flex flex-col gap-3 border-t border-gray-200 p-3">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">Bangun ruang</span>
                <ShapeDropdown selected={shapeId} onSelect={handleSelectShape} />
              </div>

              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">Apa yang ingin kamu selidiki?</span>
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
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3">
          <div className="flex items-center justify-between text-xs font-medium text-gray-500">
            <span>{shapeLabel} 3D</span>
            <span>Jaring-jaring 2D</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={tValue}
            onChange={(e) => handleSlider(Number(e.target.value))}
            className="w-full accent-[#2563EB]"
          />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button
              type="button"
              onClick={() => animateTo(1)}
              disabled={playing}
              className="rounded-md bg-[#2563EB] px-2 py-1.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] disabled:opacity-50"
            >
              ▶ Buka
            </button>
            <button
              type="button"
              onClick={stopAnimation}
              disabled={!playing}
              className="rounded-md border border-gray-300 px-2 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              ⏸ Jeda
            </button>
            <button
              type="button"
              onClick={() => animateTo(0)}
              disabled={playing}
              className="rounded-md border border-gray-300 px-2 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              ↶ Lipat Kembali
            </button>
            <button
              type="button"
              onClick={() => {
                handleSlider(0);
                animateTo(1);
              }}
              className="rounded-md border border-gray-300 px-2 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
            >
              ↻ Ulangi
            </button>
          </div>
        </div>

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
