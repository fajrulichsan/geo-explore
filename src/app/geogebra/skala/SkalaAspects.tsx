import { useState } from "react";
import Recorder from "../shared/Recorder";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import { fmt, K_OPTIONS, kLabel } from "./data";
import KChips from "./KChips";
import MeasureFlow, { DataList } from "./MeasureFlow";
import type { AspectId, SkalaContext } from "./types";

type Props = { ctx: SkalaContext };

const targetName = (ctx: SkalaContext) =>
  ctx.mode === "luas" ? "luas permukaan" : "volume";

function UkuranAwal({ ctx }: Props) {
  const [step, setStep] = useState<"measure" | "check">("measure");
  return (
    <>
      <StageTitle>Selidiki Ukuran Awal Bangun</StageTitle>
      {step === "measure" ? (
        <MeasureFlow ctx={ctx} onEnough={() => setStep("check")} />
      ) : (
        <>
          <StageTitle>Periksa Data Ukuranmu</StageTitle>
          <DataList ctx={ctx} />
          <Recorder
            prompt="Informasi ukuran apa yang kamu peroleh ketika k = 1?"
            instruction="Catat data ukuran yang kamu peroleh pada Catatan Hasil Eksplorasi di e-module."
            doneMessage="Data Ukuran Awal Sudah Dicatat"
            onRecorded={() => ctx.addResult("ukuran")}
            nav={[
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
          />
        </>
      )}
    </>
  );
}

function FaktorSkala({ ctx }: Props) {
  const [step, setStep] = useState<"pick" | "observe" | "compare" | "record">("pick");
  const [hint, setHint] = useState(false);
  return (
    <>
      <StageTitle>Selidiki Perubahan Faktor Skala</StageTitle>
      {step === "pick" && (
        <>
          <Prompt>
            Amati ukuran bangun pada kondisi awal. Kemudian ubah faktor skala
            dan perhatikan perubahan yang terjadi pada model.
          </Prompt>
          <Note>Geser slider untuk memilih faktor skala yang ingin kamu amati.</Note>
          <KChips value={ctx.k} onPick={(k) => { ctx.setK(k); setStep("observe"); }} />
        </>
      )}
      {step === "observe" && (
        <>
          <KChips value={ctx.k} onPick={ctx.setK} />
          <Prompt>Amati model setelah faktor skalanya diubah. Perubahan apa yang kamu lihat?</Prompt>
          <BtnRow>
            {ctx.k !== 1 && (
              <Btn
                onClick={() => {
                  ctx.openPair(1, ctx.k);
                  setStep("compare");
                }}
              >
                Bandingkan dengan Model Awal
              </Btn>
            )}
            <Btn variant="primary" onClick={() => setStep("record")}>
              Lanjut Catat Temuan
            </Btn>
          </BtnRow>
        </>
      )}
      {step === "compare" && (
        <>
          <Note>Model Awal ↔ Model Baru (k = {kLabel(ctx.k)})</Note>
          <Prompt>Amati model awal dan model setelah faktor skala diubah. Apa yang kamu temukan?</Prompt>
          <div>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
          </div>
          {hint && <Hint>Perhatikan bentuk dan ukuran model sebelum dan setelah faktor skala diubah.</Hint>}
          <div>
            <Btn
              variant="primary"
              onClick={() => {
                ctx.closePair();
                setStep("observe");
              }}
            >
              Kembali ke Model Baru
            </Btn>
          </div>
        </>
      )}
      {step === "record" && (
        <Recorder
          prompt="Apa yang kamu temukan setelah faktor skala diubah?"
          nav={[
            { label: "Coba Faktor Skala Lain", onClick: () => setStep("pick") },
            { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
            { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
          ]}
        />
      )}
    </>
  );
}

function ComparableSizes({ ctx, onDone }: { ctx: SkalaContext; onDone: () => void }) {
  const ks = K_OPTIONS.filter((k) => k !== ctx.k && ctx.revealed(k).length > 0);
  const [other, setOther] = useState<number | null>(null);
  const shared = (other === null ? [] : ctx.revealed(other)).filter((p) =>
    ctx.revealed(ctx.k).some((r) => r.id === p.id),
  );
  return (
    <>
      <StageTitle>Bandingkan Data Ukuran</StageTitle>
      <div className="flex flex-wrap gap-2">
        {ks.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setOther(k)}
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700"
          >
            k = {kLabel(ctx.k)} ↔ k = {kLabel(k)}
          </button>
        ))}
      </div>
      {other !== null && (
        <>
          <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
            {shared.map((p) => (
              <p key={p.id}>
                {p.label}: k = {kLabel(ctx.k)} → {fmt(p.value * ctx.k)} cm; k = {kLabel(other)} → {fmt(p.value * other)} cm
              </p>
            ))}
          </div>
          <Recorder
            prompt="Bandingkan ukuran yang kamu peroleh pada kedua faktor skala tersebut. Apa yang kamu temukan?"
            nav={[
              { label: "Coba Faktor Skala Lain", onClick: onDone },
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
          />
        </>
      )}
    </>
  );
}

function UkuranSkala({ ctx }: Props) {
  const [step, setStep] = useState<"measure" | "check" | "cmp" | "choose">("measure");
  const canCompare = K_OPTIONS.some(
    (k) =>
      k !== ctx.k &&
      ctx.revealed(k).some((p) => ctx.revealed(ctx.k).some((r) => r.id === p.id)),
  );
  return (
    <>
      <StageTitle>Selidiki Ukuran Setelah Diskalakan</StageTitle>
      {(step === "measure" || step === "choose") && (
        <KChips value={ctx.k} onPick={ctx.setK} />
      )}
      {step === "measure" && (
        <MeasureFlow key={ctx.k} ctx={ctx} onEnough={() => setStep("check")} />
      )}
      {step === "choose" && (
        <Btn variant="primary" onClick={() => setStep("measure")}>
          Ukur pada k = {kLabel(ctx.k)}
        </Btn>
      )}
      {step === "check" && (
        <>
          <StageTitle>Periksa Data Ukuranmu</StageTitle>
          <DataList ctx={ctx} />
          <Recorder
            prompt="Informasi ukuran apa yang kamu peroleh pada faktor skala ini?"
            instruction="Catat data ukuran yang kamu peroleh pada e-module."
            doneMessage="Data ukuran dicatat"
            onRecorded={() => ctx.addResult("ukuran")}
            nav={[
              ...(canCompare
                ? [{ label: "Bandingkan Ukuran", onClick: () => setStep("cmp") }]
                : []),
              { label: "Coba Faktor Skala Lain", onClick: () => setStep("choose") },
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
          />
        </>
      )}
      {step === "cmp" && <ComparableSizes ctx={ctx} onDone={() => setStep("choose")} />}
    </>
  );
}

function Target({ ctx }: Props) {
  const name = targetName(ctx);
  const [step, setStep] = useState<
    "intro" | "have" | "lengkapi" | "measure" | "use" | "choose" | "cmp"
  >("intro");
  const [hint, setHint] = useState(false);
  const [lookedUp, setLookedUp] = useState(false);
  const [cmpPair, setCmpPair] = useState<[number, number] | null>(null);
  const recordedKs = Array.from(
    new Set(
      ctx.results
        .filter((r) => r.kind === "target" && r.solidId === ctx.solidId)
        .map((r) => r.k),
    ),
  );
  const pairs = recordedKs.flatMap((a, i) =>
    recordedKs.slice(i + 1).map((b): [number, number] => [a, b]),
  );
  const title = ctx.mode === "luas" ? "Selidiki Luas Permukaan" : "Selidiki Volume Bangun";

  function begin() {
    setHint(false);
    setStep(ctx.revealed(ctx.k).length > 0 ? "have" : "lengkapi");
  }

  return (
    <>
      <StageTitle>{title}</StageTitle>
      <Note>
        {ctx.solid.label} · faktor skala k = {kLabel(ctx.k)}
      </Note>
      {step === "intro" && (
        <>
          <Prompt>
            Gunakan informasi ukuran yang telah kamu peroleh untuk menentukan{" "}
            {name} bangun pada faktor skala ini.
          </Prompt>
          <div>
            <Btn variant="primary" onClick={begin}>
              Mulai Menyelidiki
            </Btn>
          </div>
        </>
      )}
      {step === "have" && (
        <>
          <StageTitle>Data Ukuran Sudah Tersedia</StageTitle>
          <Note>Kamu sudah memperoleh data ukuran untuk bangun pada faktor skala ini.</Note>
          <DataList ctx={ctx} />
          <BtnRow>
            <Btn variant="primary" onClick={() => setStep("use")}>
              Gunakan Data Sebelumnya
            </Btn>
            <Btn
              onClick={() => {
                ctx.clearMeasured();
                setStep("measure");
              }}
            >
              Ukur Kembali
            </Btn>
          </BtnRow>
        </>
      )}
      {step === "lengkapi" && (
        <>
          <StageTitle>Lengkapi Data Ukuran</StageTitle>
          <Note>Masih ada ukuran yang kamu perlukan. Lengkapi pengukuran terlebih dahulu.</Note>
          <div>
            <Btn variant="primary" onClick={() => setStep("measure")}>
              Lengkapi Pengukuran
            </Btn>
          </div>
        </>
      )}
      {step === "measure" && (
        <MeasureFlow ctx={ctx} startAtMeasuring onEnough={() => setStep("use")} />
      )}
      {step === "use" && (
        <>
          <StageTitle>Gunakan Data yang Kamu Peroleh</StageTitle>
          <DataList ctx={ctx} />
          <Prompt>
            Gunakan data ukuran yang kamu peroleh untuk menghitung {name} bangun
            pada faktor skala ini.
          </Prompt>
          <Note>Lakukan perhitungan pada tempat yang disediakan di e-module / catatan kelompok.</Note>
          <BtnRow>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
            {hint && <Btn onClick={() => setLookedUp(true)}>Lihat Data Ukuran</Btn>}
          </BtnRow>
          {hint && (
            <Hint>Perhatikan kembali bentuk sisi-sisi bangun dan ukuran yang telah kamu peroleh.</Hint>
          )}
          {lookedUp && <DataList ctx={ctx} />}
          <Recorder
            title="Catat Hasilmu"
            prompt={`Catat ${name} yang kamu peroleh untuk faktor skala ini.`}
            instruction={`Catat ${name} yang kamu peroleh untuk faktor skala ini pada Catatan Hasil Eksplorasi di e-module.`}
            doneMessage={`Data ${ctx.mode === "luas" ? "Luas Permukaan" : "Volume"} Sudah Dicatat`}
            onRecorded={() => ctx.addResult("target")}
            nav={[
              ...(pairs.length > 0 || recordedKs.length >= 1
                ? [{ label: "Bandingkan Hasil", onClick: () => setStep("cmp") }]
                : []),
              { label: "Coba Faktor Skala Lain", onClick: () => setStep("choose") },
              { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
              { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
            ]}
          />
        </>
      )}
      {step === "choose" && (
        <>
          <StageTitle>Pilih Faktor Skala</StageTitle>
          <Note>Pilih faktor skala lain yang ingin kamu selidiki.</Note>
          <KChips
            value={ctx.k}
            onPick={(k) => {
              ctx.setK(k);
              setStep("intro");
              setLookedUp(false);
              setHint(false);
            }}
          />
        </>
      )}
      {step === "cmp" && (
        <>
          <StageTitle>Bandingkan Hasil Eksplorasimu</StageTitle>
          {pairs.length === 0 ? (
            <Hint>
              Belum ada dua faktor skala yang dicatat. Coba faktor skala lain
              terlebih dahulu.
            </Hint>
          ) : (
            <>
              <Note>Pilih dua hasil perubahan skala yang ingin kamu bandingkan.</Note>
              <div className="flex flex-wrap gap-2">
                {pairs.map(([a, b]) => (
                  <button
                    key={`${a}:${b}`}
                    type="button"
                    onClick={() => {
                      setCmpPair([a, b]);
                      ctx.openPair(a, b);
                    }}
                    className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700"
                  >
                    k = {kLabel(a)} ↔ k = {kLabel(b)}
                  </button>
                ))}
              </div>
            </>
          )}
          {cmpPair && (
            <>
              <DataList ctx={ctx} k={cmpPair[0]} />
              <DataList ctx={ctx} k={cmpPair[1]} />
              <Recorder
                title="Catat Hasil Perbandinganmu"
                prompt={`Bandingkan ukuran dan ${name} yang kamu peroleh pada kedua faktor skala tersebut. Apa persamaan atau perbedaan yang kamu temukan?`}
                instruction="Catat hasil perbandingan yang kamu temukan pada e-module."
                nav={[
                  {
                    label: "Bandingkan Hasil Lain",
                    onClick: () => {
                      ctx.closePair();
                      setCmpPair(null);
                    },
                  },
                  {
                    label: "Kembali ke Aspek Pengamatan",
                    onClick: () => {
                      ctx.closePair();
                      ctx.toMenu();
                    },
                  },
                  {
                    label: "Periksa Kecukupan Data",
                    onClick: () => {
                      ctx.closePair();
                      ctx.toSufficiency();
                    },
                    primary: true,
                  },
                ]}
              />
            </>
          )}
          {!cmpPair && (
            <div>
              <Btn onClick={() => setStep("use")}>Kembali</Btn>
            </div>
          )}
        </>
      )}
    </>
  );
}

function InfoLain({ ctx }: Props) {
  const [step, setStep] = useState<"start" | "free" | "record">("start");
  const [showOriginal, setShowOriginal] = useState(false);
  const [measuring, setMeasuring] = useState(false);
  return (
    <>
      <StageTitle>Temukan Informasi Lainnya</StageTitle>
      {step === "start" && (
        <>
          <Prompt>Amati kembali perubahan model. Adakah informasi lain yang kamu temukan?</Prompt>
          <Note>Jelajahi bagian yang menurutmu menarik atau dapat melengkapi informasi yang sudah kamu peroleh.</Note>
          <div>
            <Btn variant="primary" onClick={() => setStep("free")}>
              Mulai Eksplorasi Bebas
            </Btn>
          </div>
        </>
      )}
      {step === "free" && (
        <>
          <KChips value={ctx.k} onPick={ctx.setK} />
          <BtnRow>
            <Btn
              onClick={() => {
                const next = !showOriginal;
                setShowOriginal(next);
                if (next) ctx.openPair(1, ctx.k);
                else ctx.closePair();
              }}
            >
              {showOriginal ? "Sembunyikan Model Awal" : "Tampilkan Model Awal"}
            </Btn>
            <Btn
              onClick={() => {
                ctx.setMeasureOn(!measuring);
                setMeasuring(!measuring);
              }}
            >
              {measuring ? "Selesai Mengukur" : "Ukur Bagian Tertentu"}
            </Btn>
          </BtnRow>
          {measuring && (
            <div className="flex flex-wrap gap-2">
              {ctx.parts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => ctx.reveal(p.id)}
                  className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700"
                >
                  Ukur {p.label}
                </button>
              ))}
            </div>
          )}
          <DataList ctx={ctx} />
          <div>
            <Btn
              variant="primary"
              onClick={() => {
                ctx.closePair();
                ctx.setMeasureOn(false);
                setShowOriginal(false);
                setMeasuring(false);
                setStep("record");
              }}
            >
              Saya Menemukan Sesuatu
            </Btn>
          </div>
        </>
      )}
      {step === "record" && (
        <Recorder
          prompt="Informasi lain apa yang kamu temukan dari hasil pengamatanmu?"
          instruction="Catat hasil pengamatanmu pada e-module."
          nav={[
            { label: "Lanjut Eksplorasi Bebas", onClick: () => setStep("free") },
            { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu },
            { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
          ]}
        />
      )}
    </>
  );
}

const VIEWS: Record<AspectId, (p: Props) => React.ReactElement> = {
  "ukuran-awal": UkuranAwal,
  "faktor-skala": FaktorSkala,
  "ukuran-skala": UkuranSkala,
  target: Target,
  "info-lain": InfoLain,
};

export default function SkalaAspect({
  aspect,
  ctx,
}: {
  aspect: AspectId;
  ctx: SkalaContext;
}) {
  const View = VIEWS[aspect];
  return <View ctx={ctx} />;
}
