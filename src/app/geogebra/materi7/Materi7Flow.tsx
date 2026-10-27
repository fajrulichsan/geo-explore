"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import DoneStage from "../shared/DoneStage";
import IntroStage from "../shared/IntroStage";
import { polyhedron, type Vec3 } from "../shared/geometry";
import Recorder from "../shared/Recorder";
import SufficiencyStage from "../shared/SufficiencyStage";
import { POLYGON_N_DEFAULT } from "../shared/solids";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import { useGeoGebra, type FacePaint, type Overlay } from "../shared/useGeoGebra";
import { AREA_OPTIONS, BASE_TYPES, HEIGHT_OPTIONS, pairSolids, volumes, type BaseType } from "./pair";

const GAP = 14;
type Stage = "intro" | "pick" | "observe" | "aspects" | "aspect" | "sufficiency" | "compare" | "done";
type AspectId = "awal" | "luas" | "tinggi" | "volume" | "info";
type Exp = { type: BaseType; n: number; area: number; height: number; prisma: boolean; limas: boolean };

const ASPECTS: { id: AspectId; label: string }[] = [
  { id: "awal", label: "Kondisi Awal Kedua Bangun" },
  { id: "luas", label: "Perubahan Luas Alas" },
  { id: "tinggi", label: "Perubahan Tinggi" },
  { id: "volume", label: "Volume Kedua Bangun" },
  { id: "info", label: "Informasi Lainnya" },
];

const expKey = (e: Pick<Exp, "type" | "n" | "area" | "height">) => `${e.type}|${e.n}|${e.area}|${e.height}`;

function Chips({ options, value, disabled, onPick, suffix }: { options: readonly number[]; value: number; disabled?: boolean; onPick: (v: number) => void; suffix: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          disabled={disabled}
          onClick={() => onPick(o)}
          className={`rounded-md border px-3 py-1 text-sm font-semibold disabled:opacity-40 ${o === value ? "border-[#2563EB] bg-blue-50 text-[#1D4ED8]" : "border-gray-300 bg-white text-gray-700"}`}
        >
          {o} {suffix}
        </button>
      ))}
    </div>
  );
}

export default function Materi7Flow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [type, setType] = useState<BaseType>("segiempat");
  const [n, setN] = useState(POLYGON_N_DEFAULT);
  const [area, setArea] = useState(6);
  const [height, setHeight] = useState(4);
  const [aspect, setAspect] = useState<AspectId | null>(null);
  const [showBase, setShowBase] = useState(false);
  const [showHeight, setShowHeight] = useState(false);
  const [exps, setExps] = useState<ReadonlyMap<string, Exp>>(new Map());
  const [lastVar, setLastVar] = useState<"luas" | "tinggi" | null>(null);
  const [freeVar, setFreeVar] = useState<"luas" | "tinggi">("luas");
  const [cmp, setCmp] = useState<[string, string] | null>(null);
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [finished, setFinished] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [step, setStep] = useState("vary");
  const [seen, setSeen] = useState<"alas" | "tinggi" | null>(null);
  const [hint, setHint] = useState(false);
  const [measured, setMeasured] = useState(false);

  const solids = useMemo(() => pairSolids(type, n, area, height), [type, n, area, height]);
  const sceneKey = `${type}|${n}|${area}|${height}`;
  const { containerRef, apiReady, markScriptReady, loadScene, paint, setOverlays } = useGeoGebra(() => {});

  useEffect(() => {
    if (!apiReady) return;
    loadScene(solids, { compact: true, gap: GAP });
  }, [apiReady, sceneKey, solids, loadScene]);

  useEffect(() => {
    if (!apiReady) return;
    const faces = new Map<string, FacePaint>();
    if (showBase) {
      faces.set("0:bottom", { tone: "alas" });
      faces.set("1:bottom", { tone: "alas" });
    }
    paint({ faces });
    const items: Overlay[] = [];
    if (showHeight) {
      solids.forEach((s, i) => {
        const poly = polyhedron(s);
        const m = s.base.length;
        const c: Vec3 = [
          s.base.reduce((a, p) => a + p[0], 0) / m + i * GAP,
          s.base.reduce((a, p) => a + p[1], 0) / m,
          0,
        ];
        const top: Vec3 = s.kind === "limas" ? [poly.vertices[m][0] + i * GAP, poly.vertices[m][1], s.height] : [c[0], c[1], s.height];
        items.push({ points: [c, top], color: "#DC2626", thickness: 8, dashed: true, caption: `${height} satuan` });
      });
    }
    setOverlays(items);
  }, [apiReady, sceneKey, showBase, showHeight, solids, height, paint, setOverlays]);

  const cur = exps.get(expKey({ type, n, area, height }));
  const vol = volumes(area, height);
  const complete = [...exps.values()].filter((e) => e.prisma && e.limas);
  const label = BASE_TYPES.find((b) => b.id === type)?.label ?? "";

  function touch(patch: Partial<Pick<Exp, "prisma" | "limas">>) {
    const key = expKey({ type, n, area, height });
    setExps((prev) => {
      const next = new Map(prev);
      next.set(key, { type, n, area, height, prisma: false, limas: false, ...prev.get(key), ...patch });
      return next;
    });
  }

  function resetView() {
    setShowBase(false);
    setShowHeight(false);
  }

  const toMenu = () => {
    resetView();
    setStage("aspects");
  };
  const toSufficiency = () => {
    resetView();
    setSufficiencyStep("check");
    setStage("sufficiency");
  };
  const selectAspect = (id: AspectId) => {
    resetView();
    setAspect(id);
    setStep(id === "volume" ? "intro" : id === "info" ? "start" : "vary");
    setSeen(null);
    setHint(false);
    setMeasured(false);
    setNonce((x) => x + 1);
    setStage("aspect");
  };

  const compareNav = complete.length >= 2 ? [{ label: "Bandingkan Hasil", onClick: () => setStage("compare") }] : [];
  const navBase = [
    { label: "Kembali ke Aspek Pengamatan", onClick: toMenu },
    { label: "Periksa Kecukupan Data", onClick: toSufficiency, primary: true },
  ];

  const volumeBlock = (
    <>
      <StageTitle>Ukur Volume Kedua Bangun</StageTitle>
      <Prompt>Pilih volume bangun yang ingin kamu ketahui.</Prompt>
      <BtnRow>
        <Btn onClick={() => touch({ prisma: true })}>Volume Prisma</Btn>
        <Btn onClick={() => touch({ limas: true })}>Volume Limas</Btn>
      </BtnRow>
      {cur?.prisma && <p className="text-sm font-semibold">Volume prisma = {vol.prisma} satuan³</p>}
      {cur?.limas && <p className="text-sm font-semibold">Volume limas = {vol.limas} satuan³</p>}
    </>
  );

  const dataBlock = (
    <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
      <p className="font-semibold">Pasangan: Prisma {label} ↔ Limas {label}</p>
      <p>Luas alas = {area} satuan²</p>
      <p>Tinggi = {height} satuan</p>
      {cur?.prisma && <p>Volume prisma = {vol.prisma} satuan³</p>}
      {cur?.limas && <p>Volume limas = {vol.limas} satuan³</p>}
    </div>
  );

  function variableAspect(variable: "luas" | "tinggi") {
    const isArea = variable === "luas";
    return (
      <>
        <StageTitle>{isArea ? "Selidiki Perubahan Luas Alas" : "Selidiki Perubahan Tinggi"}</StageTitle>
        <Hint>
          {isArea
            ? `Pada eksplorasi ini tinggi kedua bangun tetap (${height} satuan). Ubah hanya luas alasnya.`
            : `Pada eksplorasi ini luas alas kedua bangun tetap (${area} satuan²). Ubah hanya tingginya.`}
        </Hint>
        <Chips options={isArea ? AREA_OPTIONS : HEIGHT_OPTIONS} value={isArea ? area : height} onPick={isArea ? setArea : setHeight} suffix={isArea ? "satuan²" : "satuan"} />
        <Prompt>Amati kedua bangun setelah {isArea ? "luas alasnya" : "tingginya"} diubah. Perubahan apa yang kamu lihat?</Prompt>
        <BtnRow>
          <Btn onClick={() => setShowBase((v) => !v)}>Sorot Alas</Btn>
          <Btn onClick={() => setShowHeight((v) => !v)}>Tampilkan Tinggi</Btn>
        </BtnRow>
        {step === "vary" && (
          <div>
            <Btn
              variant="primary"
              onClick={() => {
                touch({});
                setLastVar(variable);
                setStep("saved");
              }}
            >
              Gunakan Kondisi Ini
            </Btn>
          </div>
        )}
        {step === "saved" && (
          <div>
            <Btn variant="primary" onClick={() => setStep("volume")}>
              Ukur Volume
            </Btn>
          </div>
        )}
        {step === "volume" && (
          <>
            {volumeBlock}
            <Prompt>Apakah kamu masih memerlukan volume bangun lainnya?</Prompt>
            <BtnRow>
              <Btn variant="primary" onClick={() => setStep("data")}>
                Data Volume Sudah Cukup
              </Btn>
            </BtnRow>
          </>
        )}
        {step === "data" && (
          <>
            <StageTitle>Periksa Data Percobaanmu</StageTitle>
            {dataBlock}
            <Recorder
              prompt="Informasi apa yang kamu peroleh pada kondisi ini?"
              instruction="Catat data luas alas, tinggi, dan volume yang kamu peroleh pada Catatan Hasil Eksplorasi di e-module."
              nav={[
                { label: isArea ? "Coba Luas Alas Lain" : "Coba Tinggi Lain", onClick: () => setStep("vary") },
                ...compareNav,
                ...navBase,
              ]}
            />
          </>
        )}
      </>
    );
  }

  function volumeAspect() {
    return (
      <>
        <StageTitle>Selidiki Volume Kedua Bangun</StageTitle>
        <Note>Kondisi aktif: luas alas {area} satuan², tinggi {height} satuan.</Note>
        {step === "intro" && (
          <>
            <Prompt>Gunakan kondisi bangun yang sedang aktif untuk memperoleh data volume yang kamu perlukan.</Prompt>
            <div>
              <Btn variant="primary" onClick={() => { touch({}); setStep("measure"); }}>
                Mulai Mengukur Volume
              </Btn>
            </div>
          </>
        )}
        {step === "measure" && (
          <>
            {volumeBlock}
            <Prompt>Apakah kamu masih memerlukan volume bangun lainnya pada kondisi yang sama?</Prompt>
            <div>
              <Btn variant="primary" onClick={() => setStep("data")}>
                Data Volume Sudah Cukup
              </Btn>
            </div>
          </>
        )}
        {step === "data" && (
          <>
            <StageTitle>Periksa Data Volumemu</StageTitle>
            {dataBlock}
            <Recorder
              prompt="Data volume apa yang kamu peroleh pada kondisi ini?"
              instruction="Catat data yang kamu peroleh pada e-module."
              nav={[{ label: "Coba Kondisi Lain", onClick: () => selectAspect("luas") }, ...compareNav, ...navBase]}
            />
          </>
        )}
      </>
    );
  }

  function awalAspect() {
    return (
      <>
        <StageTitle>Amati Kondisi Awal</StageTitle>
        <Prompt>Bagian apa yang ingin kamu periksa pada kedua bangun?</Prompt>
        <BtnRow>
          <Btn onClick={() => { setSeen("alas"); setShowBase(true); setShowHeight(false); }}>Periksa Alas</Btn>
          <Btn onClick={() => { setSeen("tinggi"); setShowHeight(true); setShowBase(false); }}>Periksa Tinggi</Btn>
        </BtnRow>
        {seen === "alas" && (
          <>
            <p className="text-sm font-semibold">Luas alas prisma = {area} satuan²</p>
            <p className="text-sm font-semibold">Luas alas limas = {area} satuan²</p>
            <Prompt>Apa yang kamu amati pada alas kedua bangun?</Prompt>
          </>
        )}
        {seen === "tinggi" && (
          <>
            <p className="text-sm font-semibold">Tinggi prisma = {height} satuan</p>
            <p className="text-sm font-semibold">Tinggi limas = {height} satuan</p>
            <Prompt>Apa yang kamu amati pada tinggi kedua bangun?</Prompt>
          </>
        )}
        <Recorder prompt="Informasi apa yang kamu peroleh tentang alas dan tinggi kedua bangun?" instruction="Catat informasi tentang alas dan tinggi kedua bangun yang kamu peroleh pada e-module." disabled={!seen} nav={navBase} />
      </>
    );
  }

  function infoAspect() {
    return (
      <>
        <StageTitle>Temukan Informasi Lainnya</StageTitle>
        {step === "start" && (
          <>
            <Prompt>Amati kembali kedua bangun dan data yang sudah kamu peroleh. Adakah informasi lain yang ingin kamu selidiki?</Prompt>
            <Note>Jelajahi bagian yang menurutmu dapat melengkapi informasi yang sudah kamu peroleh.</Note>
            <div>
              <Btn variant="primary" onClick={() => setStep("free")}>Mulai Eksplorasi Bebas</Btn>
            </div>
          </>
        )}
        {step === "free" && (
          <>
            <Hint>Satu variabel diubah pada satu percobaan: saat {freeVar === "luas" ? "luas alas diubah, tinggi dikunci" : "tinggi diubah, luas alas dikunci"}.</Hint>
            <BtnRow>
              <Btn onClick={() => setFreeVar("luas")}>Ubah Luas Alas</Btn>
              <Btn onClick={() => setFreeVar("tinggi")}>Ubah Tinggi</Btn>
            </BtnRow>
            <Chips options={AREA_OPTIONS} value={area} disabled={freeVar !== "luas"} onPick={setArea} suffix="satuan²" />
            <Chips options={HEIGHT_OPTIONS} value={height} disabled={freeVar !== "tinggi"} onPick={setHeight} suffix="satuan" />
            <BtnRow>
              <Btn onClick={() => setShowBase((v) => !v)}>Sorot Alas</Btn>
              <Btn onClick={() => setShowHeight((v) => !v)}>Tampilkan Tinggi</Btn>
              <Btn onClick={() => { touch({ prisma: true, limas: true }); setMeasured(true); }}>Ukur Volume</Btn>
              <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
            </BtnRow>
            {hint && <Hint>Coba perhatikan kembali alas, tinggi, atau data volume kedua bangun pada kondisi yang kamu pilih.</Hint>}
            {measured && dataBlock}
            <Prompt>{freeVar === "luas" ? "Setelah luas alas diubah, informasi apa yang kamu peroleh?" : "Setelah tinggi diubah, informasi apa yang kamu peroleh?"}</Prompt>
            <div>
              <Btn variant="primary" onClick={() => setStep("found")}>Saya Menemukan Sesuatu</Btn>
            </div>
          </>
        )}
        {step === "found" && (
          <Recorder
            prompt="Informasi lain apa yang kamu temukan?"
            instruction="Catat hasil pengamatanmu pada e-module."
            nav={[{ label: "Lanjut Eksplorasi Bebas", onClick: () => setStep("free") }, ...navBase]}
          />
        )}
      </>
    );
  }

  const views: Record<AspectId, () => React.ReactElement> = {
    awal: awalAspect,
    luas: () => variableAspect("luas"),
    tinggi: () => variableAspect("tinggi"),
    volume: volumeAspect,
    info: infoAspect,
  };

  const moreOptions = [
    ...(lastVar === "luas" ? [{ label: "Coba Luas Alas Lain", onClick: () => selectAspect("luas") }] : []),
    ...(lastVar === "tinggi" ? [{ label: "Coba Tinggi Lain", onClick: () => selectAspect("tinggi") }] : []),
    { label: "Pilih Pasangan Bangun Lain", onClick: () => setStage("pick") },
    { label: "Kembali ke Aspek Pengamatan", onClick: toMenu },
  ];
  const Active = aspect ? views[aspect] : null;
  const cmpExps = cmp ? cmp.map((k) => exps.get(k)).filter((e): e is Exp => Boolean(e)) : [];

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-4 lg:flex-row lg:overflow-hidden">
      <Script src="https://www.geogebra.org/apps/deployggb.js" strategy="afterInteractive" onReady={markScriptReady} />
      <aside className="order-2 flex w-full shrink-0 flex-col gap-3 lg:order-1 lg:w-96 lg:overflow-y-auto lg:pr-1">
        {stage === "intro" && (
          <IntroStage
            prompt="Amati satu prisma dan satu limas yang memiliki bentuk serta luas alas dan tinggi yang sama. Ubah ukuran yang diperlukan, lalu kumpulkan data volumenya."
            startLabel="Mulai Eksplorasi"
            onStart={() => setStage("pick")}
          />
        )}
        {stage === "pick" && (
          <>
            <StageTitle>Pilih Pasangan Bangun</StageTitle>
            <div className="grid grid-cols-2 gap-2">
              {BASE_TYPES.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => { setType(b.id); setArea(6); setHeight(4); resetView(); setStage("observe"); }}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm font-semibold hover:bg-gray-50"
                >
                  {b.label}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              Nilai n untuk segi-n:
              <input type="number" min={3} max={12} value={n} onChange={(e) => setN(Math.min(12, Math.max(3, Number(e.target.value) || 6)))} className="w-16 rounded-md border border-gray-300 px-2 py-1" />
            </label>
            <Note>Siswa memilih jenis alas yang sama untuk prisma dan limas.</Note>
          </>
        )}
        {stage === "observe" && (
          <>
            <StageTitle>Prisma {label} ↔ Limas {label}</StageTitle>
            <Note>Bentuk alas sama · luas alas sama · tinggi sama</Note>
            <Prompt>Amati bentuk, alas, dan tinggi kedua bangun dari berbagai arah. Pastikan prisma dan limas memiliki bentuk alas, luas alas, dan tinggi yang sama.</Prompt>
            <BtnRow>
              <Btn onClick={() => setShowBase((v) => !v)}>Sorot Alas</Btn>
              <Btn onClick={() => setShowHeight((v) => !v)}>Tampilkan Tinggi</Btn>
            </BtnRow>
            <div>
              <Btn variant="primary" onClick={toMenu}>Lanjutkan Eksplorasi</Btn>
            </div>
          </>
        )}
        {stage === "aspects" && (
          <>
            <StageTitle>Apa yang Ingin Kamu Selidiki?</StageTitle>
            <ul className="flex flex-col gap-2">
              {ASPECTS.map((a) => (
                <li key={a.id}>
                  <button type="button" onClick={() => selectAspect(a.id)} className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm font-medium text-gray-800 hover:bg-gray-50">
                    ☐ {a.label}
                  </button>
                </li>
              ))}
            </ul>
            <Note>Pilih informasi yang kamu perlukan untuk menyelidiki hubungan volume prisma dan limas yang memiliki alas dan tinggi yang sama. Kamu tidak harus mengamati semua aspek.</Note>
            <BtnRow>
              <Btn onClick={toSufficiency}>Periksa Kecukupan Data</Btn>
              <Btn onClick={() => setStage("pick")}>Pilih Pasangan Bangun Lain</Btn>
            </BtnRow>
          </>
        )}
        {stage === "aspect" && Active && <div key={`${aspect}:${nonce}`} className="flex flex-col gap-3">{Active()}</div>}
        {stage === "compare" && (
          <>
            <StageTitle>Bandingkan Hasil Eksplorasimu</StageTitle>
            <Note>Pilih dua hasil pengamatan yang ingin kamu bandingkan.</Note>
            <div className="flex flex-wrap gap-2">
              {complete.flatMap((a, i) =>
                complete.slice(i + 1).map((b) => (
                  <button key={`${expKey(a)}-${expKey(b)}`} type="button" onClick={() => setCmp([expKey(a), expKey(b)])} className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700">
                    A={a.area}/{a.height} ↔ B={b.area}/{b.height}
                  </button>
                )),
              )}
            </div>
            {cmpExps.map((e, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
                <p className="font-semibold">Percobaan {i === 0 ? "A" : "B"}</p>
                <p>Luas alas = {e.area} satuan²</p>
                <p>Tinggi = {e.height} satuan</p>
                <p>Volume prisma = {volumes(e.area, e.height).prisma} satuan³</p>
                <p>Volume limas = {volumes(e.area, e.height).limas} satuan³</p>
              </div>
            ))}
            {cmp && (
              <Recorder
                title="Catat Hasil Perbandinganmu"
                prompt="Bandingkan data luas alas, tinggi, serta volume prisma dan limas pada kedua percobaan. Apa persamaan dan perbedaan yang kamu temukan?"
                instruction="Catat persamaan atau perbedaan yang kamu temukan pada e-module."
                nav={[{ label: "Bandingkan Hasil Lain", onClick: () => setCmp(null) }, { label: "Coba Kondisi Lain", onClick: toMenu }, ...navBase]}
              />
            )}
            <div>
              <Btn onClick={toMenu}>Kembali ke Aspek Pengamatan</Btn>
            </div>
          </>
        )}
        {stage === "sufficiency" && (
          <SufficiencyStage
            step={sufficiencyStep}
            question="Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki hubungan volume prisma dan limas yang memiliki bentuk serta luas alas dan tinggi yang sama?"
            onEnough={() => setStage("done")}
            onNeedMore={() => setSufficiencyStep("more")}
            onMoreAspect={toMenu}
            onOtherSolid={() => setStage("pick")}
            moreOptions={moreOptions}
          />
        )}
        {stage === "done" && (
          <DoneStage
            body="Pastikan data luas alas, tinggi, serta volume prisma dan limas yang kamu perlukan telah dicatat pada Catatan Hasil Eksplorasi di e-module."
            next="Gunakan data tersebut pada tahap berikutnya untuk mengolah informasi tentang hubungan volume prisma dan limas."
            finished={finished}
            onFinish={() => setFinished(true)}
          />
        )}
      </aside>
      <div className="order-1 flex min-h-[70vh] w-full flex-1 flex-col gap-3 lg:order-2 lg:min-h-0">
        <div ref={containerRef} className="min-h-[360px] w-full flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white" />
      </div>
    </div>
  );
}
