import { useState } from "react";
import Recorder from "../shared/Recorder";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";

export type Record6 = { size: number; value: number };

export type Ctx6 = {
  label: string;
  cubesCounted: number;
  size: number;
  setSize: (n: number) => void;
  sizes: readonly number[];
  highlightTop: boolean;
  setHighlightTop: (b: boolean) => void;
  exploded: boolean;
  setExploded: (b: boolean) => void;
  setCountOn: (b: boolean) => void;
  clearCounted: () => void;
  layerData: number | null;
  setLayerData: (n: number) => void;
  records: Record6[];
  addRecord: (value: number) => void;
  pair: [number, number] | null;
  openPair: (a: number, b: number) => void;
  closePair: () => void;
  pos: number;
  setPos: (t: number) => void;
  sections: "none" | "single" | "multi";
  setSections: (m: "none" | "single" | "multi") => void;
  area: number;
  seenArea: boolean;
  markArea: () => void;
  seenSizes: readonly number[];
  markSize: () => void;
  toMenu: () => void;
  toSufficiency: () => void;
};

type Props = { ctx: Ctx6 };
export type Aspect6 = "lapisan" | "jumlah-lapisan" | "volume" | "info" | "penampang" | "panjang" | "volume-prisma";

export const STACK_ASPECTS: { id: Aspect6; label: string }[] = [
  { id: "lapisan", label: "Susunan kubus satuan pada satu lapisan" },
  { id: "jumlah-lapisan", label: "Perubahan jumlah lapisan" },
  { id: "volume", label: "Volume bangun" },
  { id: "info", label: "Informasi lainnya" },
];
export const PRISM_ASPECTS: { id: Aspect6; label: string }[] = [
  { id: "penampang", label: "Penampang sejajar alas" },
  { id: "panjang", label: "Perubahan panjang prisma" },
  { id: "volume-prisma", label: "Volume prisma" },
  { id: "info", label: "Informasi lainnya" },
];

function Chips({ ctx, unit, onPick }: { ctx: Ctx6; unit: string; onPick?: (n: number) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {ctx.sizes.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => (onPick ? onPick(n) : ctx.setSize(n))}
          className={`rounded-md border px-3 py-1 text-sm font-semibold ${n === ctx.size ? "border-[#2563EB] bg-blue-50 text-[#1D4ED8]" : "border-gray-300 bg-white text-gray-700"}`}
        >
          {n} {unit}
        </button>
      ))}
    </div>
  );
}

function ComparePanel({ ctx, noun, back }: { ctx: Ctx6; noun: string; back: () => void }) {
  const recs = ctx.records;
  const [picked, setPicked] = useState<[Record6, Record6] | null>(null);
  return (
    <>
      <StageTitle>Bandingkan Hasil Eksplorasimu</StageTitle>
      <Note>Pilih dua hasil pengamatan yang ingin kamu bandingkan.</Note>
      <div className="flex flex-wrap gap-2">
        {recs.flatMap((a, i) =>
          recs.slice(i + 1).map((b) => (
            <button key={`${a.size}-${b.size}`} type="button" onClick={() => setPicked([a, b])} className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700">
              {a.size} {noun} ↔ {b.size} {noun}
            </button>
          )),
        )}
      </div>
      {picked && (
        <>
          {picked.map((r) => (
            <p key={r.size} className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
              {noun === "lapisan" ? `Jumlah lapisan = ${r.size}; banyak kubus satuan = ${r.value}` : `Panjang prisma = ${r.size}; volume yang kamu catat = ${r.value}`}
            </p>
          ))}
          <Recorder
            title="Catat Hasil Perbandinganmu"
            prompt={noun === "lapisan" ? "Bandingkan jumlah lapisan dan volume yang kamu peroleh pada kedua kondisi. Apa persamaan atau perbedaan yang kamu temukan?" : "Bandingkan panjang prisma dan volume yang kamu peroleh pada kedua kondisi. Apa persamaan atau perbedaan yang kamu temukan?"}
            instruction="Catat persamaan atau perbedaan yang kamu temukan pada e-module."
            nav={[{ label: "Bandingkan Hasil Lain", onClick: () => setPicked(null) }, { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu }, { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true }]}
          />
        </>
      )}
      <div>
        <Btn onClick={back}>Kembali</Btn>
      </div>
    </>
  );
}

function Lapisan({ ctx }: Props) {
  const [mode, setMode] = useState<"choose" | "susunan" | "hitung">("choose");
  return (
    <>
      <StageTitle>Amati Satu Lapisan</StageTitle>
      <Prompt>Amati satu lapisan kubus satuan. Informasi apa yang ingin kamu ketahui?</Prompt>
      <BtnRow>
        <Btn onClick={() => { setMode("susunan"); ctx.setHighlightTop(true); ctx.setCountOn(false); }}>Amati Susunan</Btn>
        <Btn onClick={() => { setMode("hitung"); ctx.setHighlightTop(true); ctx.setCountOn(true); }}>Hitung Kubus Satuan</Btn>
      </BtnRow>
      {mode === "susunan" && <Prompt>Bagaimana kubus-kubus satuan tersusun pada lapisan ini?</Prompt>}
      {mode === "hitung" && (
        <>
          <Prompt>Hitung banyak kubus satuan yang terdapat pada lapisan yang disorot. Ketuk kubus satu per satu.</Prompt>
          <p className="rounded-lg border border-gray-200 bg-white p-3 text-sm font-semibold">
            Data yang kamu peroleh: banyak kubus satuan pada lapisan yang diamati = {ctx.cubesCounted}
          </p>
        </>
      )}
      <Recorder
        prompt="Informasi apa yang kamu peroleh dari satu lapisan bangun tersebut?"
        instruction="Catat hasil pengamatanmu pada Catatan Hasil Eksplorasi di e-module."
        disabled={mode === "choose" || (mode === "hitung" && ctx.cubesCounted === 0)}
        onRecorded={() => { if (mode === "hitung") ctx.setLayerData(ctx.cubesCounted); ctx.setCountOn(false); }}
        nav={[
          { label: "Amati Lapisan Lain", onClick: () => { ctx.clearCounted(); setMode("choose"); } },
          { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
          { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
        ]}
      />
    </>
  );
}

function JumlahLapisan({ ctx }: Props) {
  const [step, setStep] = useState<"pick" | "compare" | "count" | "record" | "cmp">("pick");
  const [hint, setHint] = useState(false);
  const prev = ctx.seenSizes.filter((n) => n !== ctx.size);
  if (step === "cmp") return <ComparePanel ctx={ctx} noun="lapisan" back={() => setStep("pick")} />;
  return (
    <>
      <StageTitle>Selidiki Perubahan Jumlah Lapisan</StageTitle>
      {step !== "count" && step !== "record" && (
        <>
          <Hint>Pertahankan susunan kubus satuan pada setiap lapisan, lalu ubah jumlah lapisannya.</Hint>
          <Prompt>Pilih jumlah lapisan yang ingin kamu amati.</Prompt>
          <Chips ctx={ctx} unit="lapisan" onPick={(n) => { ctx.setSize(n); ctx.markSize(); ctx.setExploded(false); }} />
        </>
      )}
      {step === "pick" && (
        <>
          <Prompt>Amati bangun setelah jumlah lapisannya berubah. Perubahan apa yang kamu lihat?</Prompt>
          <BtnRow>
            <Btn onClick={() => ctx.setHighlightTop(!ctx.highlightTop)}>Sorot Satu Lapisan</Btn>
            {prev.length > 0 && <Btn onClick={() => { ctx.openPair(prev[prev.length - 1], ctx.size); setStep("compare"); }}>Bandingkan dengan Kondisi Sebelumnya</Btn>}
            <Btn variant="primary" onClick={() => { ctx.setHighlightTop(false); ctx.setExploded(true); ctx.setCountOn(true); ctx.clearCounted(); setStep("count"); }}>Hitung Seluruh Kubus Satuan</Btn>
          </BtnRow>
        </>
      )}
      {step === "compare" && ctx.pair && (
        <>
          <Note>Kondisi A ({ctx.pair[0]} lapisan) ↔ Kondisi B ({ctx.pair[1]} lapisan)</Note>
          <Prompt>Bandingkan kedua susunan tersebut. Apa persamaan dan perbedaan yang kamu temukan?</Prompt>
          <div>
            <Btn variant="primary" onClick={() => { ctx.closePair(); setStep("pick"); }}>Kembali ke Kondisi Aktif</Btn>
          </div>
        </>
      )}
      {step === "count" && (
        <>
          <Note>Tampilan dipisah per lapisan agar semua kubus satuan dapat diketuk.</Note>
          <Prompt>Amati atau hitung banyak kubus satuan keseluruhan pada {ctx.size} lapisan.</Prompt>
          <p className="rounded-lg border border-gray-200 bg-white p-3 text-sm font-semibold">
            Jumlah lapisan = {ctx.size} · Banyak kubus satuan seluruhnya = {ctx.cubesCounted}
          </p>
          <Prompt>Data apa yang kamu peroleh pada kondisi ini?</Prompt>
          <div>
            <Btn variant="primary" disabled={ctx.cubesCounted === 0} onClick={() => { ctx.addRecord(ctx.cubesCounted); ctx.setCountOn(false); ctx.setExploded(false); setStep("record"); }}>
              Selesai Menghitung
            </Btn>
          </div>
        </>
      )}
      {step === "record" && (
        <Recorder
          prompt="Data apa yang kamu peroleh pada kondisi ini?"
          instruction="Catat jumlah lapisan dan banyak kubus satuan yang kamu peroleh pada e-module."
          nav={[
            { label: "Coba Jumlah Lapisan Lain", onClick: () => { ctx.clearCounted(); setStep("pick"); } },
            ...(ctx.records.length >= 2 ? [{ label: "Bandingkan Hasil", onClick: () => setStep("cmp") }] : []),
            { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
            { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
          ]}
        />
      )}
      {step === "pick" && (
        <>
          <div>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
          </div>
          {hint && <Hint>Perhatikan susunan kubus satuan pada tiap lapisan dan jumlah lapisannya.</Hint>}
        </>
      )}
    </>
  );
}

function Volume({ ctx }: Props) {
  const [step, setStep] = useState<"check" | "layer" | "all" | "record" | "cmp">("check");
  if (step === "cmp") return <ComparePanel ctx={ctx} noun="lapisan" back={() => setStep("record")} />;
  return (
    <>
      <StageTitle>Selidiki Volume Bangun</StageTitle>
      <Note>{ctx.label} · {ctx.size} lapisan</Note>
      {step === "check" && ctx.layerData !== null && (
        <>
          <StageTitle>Data Satu Lapisan Sudah Tersedia</StageTitle>
          <Note>Banyak kubus satuan pada satu lapisan = {ctx.layerData}</Note>
          <BtnRow>
            <Btn variant="primary" onClick={() => { ctx.setExploded(true); ctx.setCountOn(true); ctx.clearCounted(); setStep("all"); }}>Gunakan Data Sebelumnya</Btn>
            <Btn onClick={() => { ctx.setHighlightTop(true); ctx.setCountOn(true); ctx.clearCounted(); setStep("layer"); }}>Amati Kembali</Btn>
          </BtnRow>
        </>
      )}
      {step === "check" && ctx.layerData === null && (
        <>
          <StageTitle>Data Satu Lapisan Belum Tersedia</StageTitle>
          <Prompt>Amati satu lapisan terlebih dahulu untuk melengkapi data yang kamu perlukan.</Prompt>
          <div>
            <Btn variant="primary" onClick={() => { ctx.setHighlightTop(true); ctx.setCountOn(true); ctx.clearCounted(); setStep("layer"); }}>Amati Satu Lapisan</Btn>
          </div>
        </>
      )}
      {step === "layer" && (
        <>
          <Prompt>Ketuk kubus satuan pada lapisan yang disorot.</Prompt>
          <p className="text-sm font-semibold">Kubus satuan pada satu lapisan = {ctx.cubesCounted}</p>
          <div>
            <Btn variant="primary" disabled={ctx.cubesCounted === 0} onClick={() => { ctx.setLayerData(ctx.cubesCounted); ctx.setHighlightTop(false); ctx.setExploded(true); ctx.setCountOn(true); ctx.clearCounted(); setStep("all"); }}>
              Data Lapisan Sudah Cukup
            </Btn>
          </div>
        </>
      )}
      {step === "all" && (
        <>
          <StageTitle>Amati Seluruh Susunan</StageTitle>
          <Note>Banyak kubus satuan pada satu lapisan = {ctx.layerData} · Jumlah lapisan = {ctx.size}</Note>
          <Prompt>Amati seluruh susunan kubus satuan. Berapa banyak kubus satuan yang membentuk bangun pada kondisi ini?</Prompt>
          <p className="text-sm font-semibold">Kubus satuan yang sudah dihitung = {ctx.cubesCounted}</p>
          <div>
            <Btn variant="primary" disabled={ctx.cubesCounted === 0} onClick={() => { ctx.addRecord(ctx.cubesCounted); ctx.setCountOn(false); ctx.setExploded(false); setStep("record"); }}>
              Selesai Menghitung
            </Btn>
          </div>
        </>
      )}
      {step === "record" && (
        <>
          <Chips ctx={ctx} unit="lapisan" onPick={(n) => { ctx.setSize(n); ctx.markSize(); }} />
          <Recorder
            title="Catat Hasilmu"
            prompt="Catat volume bangun yang kamu peroleh."
            instruction="Catat volume bangun yang kamu peroleh pada Catatan Hasil Eksplorasi di e-module."
            nav={[
              { label: "Coba Jumlah Lapisan Lain", onClick: () => { ctx.clearCounted(); ctx.setExploded(true); ctx.setCountOn(true); setStep("all"); } },
              ...(ctx.records.length >= 2 ? [{ label: "Bandingkan Hasil", onClick: () => setStep("cmp") }] : []),
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
          />
        </>
      )}
    </>
  );
}

function Penampang({ ctx }: Props) {
  const [shown, setShown] = useState(false);
  return (
    <>
      <StageTitle>Amati Penampang Prisma</StageTitle>
      <Prompt>Amati penampang yang sejajar dengan alas. Geser penampang tersebut sepanjang prisma.</Prompt>
      <label className="flex flex-col gap-1 text-sm text-gray-700">
        Posisi penampang
        <input type="range" min={0} max={1} step={0.01} value={ctx.pos} onChange={(e) => { ctx.setSections("single"); ctx.setPos(Number(e.target.value)); }} className="w-full accent-[#2563EB]" />
      </label>
      <Prompt>Amati penampang pada beberapa posisi. Apa yang kamu temukan?</Prompt>
      <div>
        <Btn onClick={() => { setShown(true); ctx.markArea(); ctx.markSize(); }}>Amati Ukuran Penampang</Btn>
      </div>
      {shown && <p className="text-sm font-semibold">Luas penampang = {ctx.area} satuan²</p>}
      <Recorder
        prompt="Informasi apa yang kamu peroleh tentang penampang pada beberapa posisi sepanjang prisma?"
        instruction="Catat hasil pengamatanmu pada e-module."
        nav={[{ label: "Amati Posisi Lain", onClick: () => ctx.setPos(Math.random()) }, { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu }, { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true }]}
      />
    </>
  );
}

function Panjang({ ctx }: Props) {
  const [step, setStep] = useState<"pick" | "compare" | "cmp">("pick");
  const [hint, setHint] = useState(false);
  const [round, setRound] = useState(0);
  const prev = ctx.seenSizes.filter((n) => n !== ctx.size);
  if (step === "cmp") return <ComparePanel ctx={ctx} noun="panjang" back={() => setStep("pick")} />;
  return (
    <>
      <StageTitle>Selidiki Perubahan Panjang Prisma</StageTitle>
      <Hint>Pada eksplorasi ini penampang sejajar alas tetap. Ubah hanya panjang prisma.</Hint>
      {step === "pick" && (
        <>
          <Prompt>Pilih panjang prisma yang ingin kamu amati.</Prompt>
          <Chips ctx={ctx} unit="satuan" onPick={(n) => { ctx.setSize(n); ctx.markSize(); ctx.setSections("single"); }} />
          <Prompt>Amati prisma setelah panjangnya diubah. Perubahan apa yang kamu lihat?</Prompt>
          {prev.length > 0 && (
            <div>
              <Btn onClick={() => { ctx.openPair(prev[prev.length - 1], ctx.size); setStep("compare"); }}>Bandingkan dengan Kondisi Sebelumnya</Btn>
            </div>
          )}
          <div>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
          </div>
          {hint && <Hint>Perhatikan penampang sejajar alas dan panjang prisma pada kedua kondisi.</Hint>}
          <Recorder
            key={round}
            prompt="Apa yang kamu temukan setelah panjang prisma diubah?"
            nav={[
              { label: "Coba Panjang Prisma Lain", onClick: () => { setRound((r) => r + 1); setHint(false); } },
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
            doneMessage="Data Perubahan Panjang Prisma Sudah Dicatat"
          />
        </>
      )}
      {step === "compare" && ctx.pair && (
        <>
          <Note>Panjang = {ctx.pair[0]} ↔ Panjang = {ctx.pair[1]}</Note>
          <Prompt>Bandingkan kedua kondisi tersebut. Apa persamaan dan perbedaan yang kamu temukan?</Prompt>
          <div>
            <Btn variant="primary" onClick={() => { ctx.closePair(); setStep("pick"); }}>Kembali ke Kondisi Aktif</Btn>
          </div>
        </>
      )}
    </>
  );
}

function VolumePrisma({ ctx }: Props) {
  const [step, setStep] = useState<"check" | "complete" | "show" | "cmp">("check");
  const [round, setRound] = useState(0);
  const have = ctx.seenArea && ctx.seenSizes.includes(ctx.size);
  if (step === "cmp") return <ComparePanel ctx={ctx} noun="panjang" back={() => setStep("show")} />;
  return (
    <>
      <StageTitle>Selidiki Volume Prisma</StageTitle>
      <Note>{ctx.label} · panjang {ctx.size} satuan</Note>
      {step === "check" && (
        <>
          <Prompt>Gunakan informasi tentang penampang sejajar alas dan panjang prisma untuk memperoleh data volume pada kondisi ini.</Prompt>
          {have ? (
            <>
              <StageTitle>Data Penampang Sudah Tersedia</StageTitle>
              <Note>Luas penampang = {ctx.area} satuan² · Panjang prisma = {ctx.size} satuan</Note>
              <BtnRow>
                <Btn variant="primary" onClick={() => { ctx.setSections("multi"); setStep("show"); }}>Gunakan Data Sebelumnya</Btn>
                <Btn onClick={() => { ctx.setSections("single"); setStep("complete"); }}>Amati Kembali</Btn>
              </BtnRow>
            </>
          ) : (
            <>
              <StageTitle>Lengkapi Data yang Diperlukan</StageTitle>
              <div>
                <Btn variant="primary" onClick={() => { ctx.setSections("single"); setStep("complete"); }}>Amati Penampang & Panjang Prisma</Btn>
              </div>
            </>
          )}
        </>
      )}
      {step === "complete" && (
        <>
          <BtnRow>
            <Btn onClick={ctx.markArea}>Amati Penampang</Btn>
            <Btn onClick={ctx.markSize}>Amati Panjang Prisma</Btn>
          </BtnRow>
          <Chips ctx={ctx} unit="satuan" onPick={(n) => { ctx.setSize(n); ctx.markSize(); }} />
          {ctx.seenArea && <p className="text-sm font-semibold">Luas penampang = {ctx.area} satuan²</p>}
          <div>
            <Btn variant="primary" disabled={!ctx.seenArea} onClick={() => { ctx.markSize(); ctx.setSections("multi"); setStep("show"); }}>Data Sudah Cukup</Btn>
          </div>
        </>
      )}
      {step === "show" && (
        <>
          <Prompt>Amati bagaimana penampang yang sama tersusun sepanjang prisma. Informasi apa yang kamu peroleh tentang volume prisma pada kondisi ini?</Prompt>
          <Chips ctx={ctx} unit="satuan" onPick={(n) => { ctx.setSize(n); ctx.markSize(); ctx.setSections("multi"); }} />
          <Recorder
            key={round}
            title="Catat Hasilmu"
            prompt="Catat luas penampang, panjang prisma, dan volume yang kamu peroleh."
            instruction="Catat luas penampang, panjang prisma, dan volume yang kamu peroleh pada Catatan Hasil Eksplorasi di e-module."
            onRecorded={() => ctx.addRecord(Math.round(ctx.area * ctx.size * 100) / 100)}
            nav={[
              { label: "Coba Panjang Lain", onClick: () => setRound((r) => r + 1) },
              ...(ctx.records.length >= 2 ? [{ label: "Bandingkan Hasil", onClick: () => setStep("cmp") }] : []),
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
          />
        </>
      )}
    </>
  );
}

function Info({ ctx, prism }: Props & { prism: boolean }) {
  const [step, setStep] = useState<"start" | "free" | "found">("start");
  return (
    <>
      <StageTitle>Temukan Informasi Lainnya</StageTitle>
      {step === "start" && (
        <>
          <Prompt>
            {prism
              ? "Amati kembali penampang sejajar alas dan perubahan panjang prisma. Adakah informasi lain yang ingin kamu selidiki?"
              : "Amati kembali susunan kubus satuan dan perubahan jumlah lapisan. Adakah informasi lain yang ingin kamu selidiki?"}
          </Prompt>
          <Note>Jelajahi bagian yang menurutmu dapat melengkapi informasi yang sudah kamu peroleh.</Note>
          <div>
            <Btn variant="primary" onClick={() => setStep("free")}>Mulai Eksplorasi Bebas</Btn>
          </div>
        </>
      )}
      {step === "free" && (
        <>
          <Chips ctx={ctx} unit={prism ? "satuan" : "lapisan"} />
          <BtnRow>
            {prism ? (
              <>
                <Btn onClick={() => ctx.setSections(ctx.sections === "single" ? "none" : "single")}>Sorot Penampang</Btn>
                <Btn onClick={() => ctx.setSections("multi")}>Tampilkan Semua Penampang</Btn>
                <Btn onClick={ctx.markArea}>Tampilkan Ukuran</Btn>
              </>
            ) : (
              <>
                <Btn onClick={() => ctx.setHighlightTop(!ctx.highlightTop)}>Sorot Satu Lapisan</Btn>
                <Btn onClick={() => { ctx.setExploded(!ctx.exploded); ctx.setCountOn(!ctx.exploded); }}>Hitung Kubus Satuan</Btn>
              </>
            )}
          </BtnRow>
          {prism && (
            <input type="range" min={0} max={1} step={0.01} value={ctx.pos} onChange={(e) => { ctx.setSections("single"); ctx.setPos(Number(e.target.value)); }} className="w-full accent-[#2563EB]" />
          )}
          {prism && ctx.seenArea && <p className="text-sm font-semibold">Luas penampang = {ctx.area} satuan²</p>}
          {!prism && <p className="text-sm font-semibold">Kubus satuan yang dihitung = {ctx.cubesCounted}</p>}
          <div>
            <Btn variant="primary" onClick={() => { ctx.setCountOn(false); ctx.setExploded(false); setStep("found"); }}>Saya Menemukan Sesuatu</Btn>
          </div>
        </>
      )}
      {step === "found" && (
        <Recorder
          prompt="Informasi lain apa yang kamu temukan dari hasil pengamatanmu?"
          instruction="Catat hasil pengamatanmu pada e-module."
          nav={[{ label: "Lanjut Eksplorasi Bebas", onClick: () => setStep("free") }, { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu }, { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true }]}
        />
      )}
    </>
  );
}

export default function Panel({ aspect, ctx }: { aspect: Aspect6; ctx: Ctx6 }) {
  switch (aspect) {
    case "lapisan":
      return <Lapisan ctx={ctx} />;
    case "jumlah-lapisan":
      return <JumlahLapisan ctx={ctx} />;
    case "volume":
      return <Volume ctx={ctx} />;
    case "penampang":
      return <Penampang ctx={ctx} />;
    case "panjang":
      return <Panjang ctx={ctx} />;
    case "volume-prisma":
      return <VolumePrisma ctx={ctx} />;
    case "info":
      return <Info ctx={ctx} prism={ctx.sizes.length === 4} />;
  }
}
