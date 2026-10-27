import { useState } from "react";
import { aspectLabel } from "../content";
import type { Face } from "../../shared/geometry";
import type { AspectContext, AspectId } from "../types";
import MeasurePanel, { measuredSummary } from "./MeasurePanel";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../../shared/ui";

const faceByKey = (ctx: AspectContext, key: string | undefined) =>
  ctx.faces.find((f) => f.key === key);

const hasData = (ctx: AspectContext, face: Face) =>
  (ctx.measured.get(face.key)?.size ?? 0) > 0;

function summaryOf(ctx: AspectContext, face: Face) {
  const parts = measuredSummary(face, ctx.measured.get(face.key));
  return `${face.label} (${face.shape})${parts.length ? ": " + parts.join(", ") : ""}`;
}

function AfterRecord({
  ctx,
  extra,
}: {
  ctx: AspectContext;
  extra?: { label: string; onClick: () => void };
}) {
  return (
    <>
      <p className="text-sm font-semibold text-green-700">✓ Temuan dicatat.</p>
      <BtnRow>
        {extra && <Btn onClick={extra.onClick}>{extra.label}</Btn>}
        <Btn onClick={ctx.toMenu}>Amati Aspek Lain</Btn>
        {ctx.canCompare && <Btn onClick={ctx.toCompare}>Bandingkan Temuan</Btn>}
        <Btn variant="primary" onClick={ctx.toSufficiency}>
          Periksa Kecukupan Data
        </Btn>
      </BtnRow>
    </>
  );
}

function RecordRow({
  ctx,
  disabled,
  details,
  recorded,
  onRecorded,
  label = "Catat Temuan",
}: {
  ctx: AspectContext;
  disabled?: boolean;
  details: string[];
  recorded: boolean;
  onRecorded: () => void;
  label?: string;
}) {
  if (recorded) return null;
  return (
    <BtnRow>
      <Btn
        variant="primary"
        disabled={disabled}
        onClick={() => {
          ctx.record(details);
          onRecorded();
        }}
      >
        {label}
      </Btn>
      <Btn onClick={ctx.toMenu}>Apa yang Ingin Kamu Selidiki</Btn>
    </BtnRow>
  );
}

function RecordNote() {
  return (
    <Note>Catat hasil pengamatanmu pada Catatan Hasil Eksplorasi di e-module.</Note>
  );
}

function DataCheck({
  ctx,
  faces,
  onUse,
  onMeasure,
}: {
  ctx: AspectContext;
  faces: Face[];
  onUse: () => void;
  onMeasure: () => void;
}) {
  const ready = faces.every((f) => hasData(ctx, f));
  return ready ? (
    <>
      <StageTitle>Data Ukuran Sudah Tersedia</StageTitle>
      <Note>
        Kamu sudah memperoleh data ukuran untuk sisi ini. Gunakan kembali data
        tersebut atau lakukan pengukuran kembali jika diperlukan.
      </Note>
      <BtnRow>
        <Btn variant="primary" onClick={onUse}>
          Gunakan Data Sebelumnya
        </Btn>
        <Btn
          onClick={() => {
            faces.forEach((f) => ctx.clearEdges(f.key));
            onMeasure();
          }}
        >
          Ukur Kembali
        </Btn>
      </BtnRow>
    </>
  ) : (
    <>
      <StageTitle>Data Ukuran Belum Tersedia</StageTitle>
      <Prompt>
        Ukuran apa yang kamu perlukan untuk membantu menentukan luas sisi ini?
      </Prompt>
      <div>
        <Btn variant="primary" onClick={onMeasure}>
          Mulai Mengukur
        </Btn>
      </div>
    </>
  );
}

function BanyakSisi({ ctx }: { ctx: AspectContext }) {
  const [recorded, setRecorded] = useState(false);
  const total = ctx.counted.length;
  return (
    <>
      <StageTitle>Selidiki Banyak Sisi</StageTitle>
      <Prompt>
        Putar model dari berbagai arah. Klik setiap sisi yang kamu temukan agar
        tidak terhitung dua kali.
      </Prompt>
      <Note>
        Sisi yang sudah diklik ditandai dengan nomor: Sisi 1 → Sisi 2 → Sisi 3 …
      </Note>
      <p className="text-sm font-semibold text-gray-900">
        Berapa banyak sisi yang kamu temukan? ({total} sisi ditandai)
      </p>
      {recorded && <AfterRecord ctx={ctx} />}
      <RecordRow
        ctx={ctx}
        disabled={total === 0}
        details={[`Sisi yang kamu tandai: ${total}`]}
        recorded={recorded}
        onRecorded={() => setRecorded(true)}
      />
      {recorded && <RecordNote />}
    </>
  );
}

function BentukSisi({ ctx }: { ctx: AspectContext }) {
  const [recorded, setRecorded] = useState(false);
  const face = faceByKey(ctx, ctx.picks[0]);
  return (
    <>
      <StageTitle>Selidiki Bentuk Setiap Sisi</StageTitle>
      <Prompt>Pilih salah satu sisi pada bangun atau jaring-jaring.</Prompt>
      {face ? (
        <Prompt>Bentuk bangun datar apa yang kamu amati pada sisi tersebut?</Prompt>
      ) : (
        <Note>Klik sebuah sisi pada model.</Note>
      )}
      {recorded && <AfterRecord ctx={ctx} />}
      <RecordRow
        ctx={ctx}
        disabled={!face}
        details={face ? [`${face.label}: ${face.shape}`] : []}
        recorded={recorded}
        onRecorded={() => setRecorded(true)}
      />
      {recorded && <RecordNote />}
    </>
  );
}

function UkuranSisi({ ctx }: { ctx: AspectContext }) {
  const [recorded, setRecorded] = useState(false);
  const face = faceByKey(ctx, ctx.picks[0]);
  return (
    <>
      <StageTitle>Selidiki Ukuran Sisi</StageTitle>
      <Prompt>Pilih salah satu sisi yang ingin kamu ukur.</Prompt>
      {face && (
        <>
          <MeasurePanel
            face={face}
            revealed={ctx.measured.get(face.key)}
            onReveal={(edges) => ctx.revealEdges(face.key, edges)}
          />
          <Prompt>Informasi ukuran apa yang kamu peroleh dari sisi ini?</Prompt>
        </>
      )}
      {recorded && <AfterRecord ctx={ctx} />}
      <RecordRow
        ctx={ctx}
        disabled={!face || !hasData(ctx, face)}
        details={face ? [summaryOf(ctx, face)] : []}
        recorded={recorded}
        onRecorded={() => setRecorded(true)}
      />
      {recorded && <RecordNote />}
    </>
  );
}

function SisiSama({ ctx }: { ctx: AspectContext }) {
  const [recorded, setRecorded] = useState(false);
  const a = faceByKey(ctx, ctx.picks[0]);
  const b = faceByKey(ctx, ctx.picks[1]);
  return (
    <>
      <StageTitle>Bandingkan Sisi</StageTitle>
      <Prompt>
        Pilih satu sisi, kemudian cari sisi lain yang menurutmu mempunyai bentuk
        dan ukuran yang sama.
      </Prompt>
      <Note>
        Sisi A: {a ? a.label : "belum dipilih"} · Sisi B: {b ? b.label : "belum dipilih"}
      </Note>
      {a && b && <Prompt>Apa yang kamu temukan dari kedua sisi tersebut?</Prompt>}
      {recorded && <AfterRecord ctx={ctx} />}
      <RecordRow
        ctx={ctx}
        disabled={!a || !b}
        details={a && b ? [`${a.label} dan ${b.label} dibandingkan`] : []}
        recorded={recorded}
        onRecorded={() => setRecorded(true)}
      />
      {recorded && <RecordNote />}
    </>
  );
}

function LuasSisi({ ctx }: { ctx: AspectContext }) {
  const [step, setStep] = useState<"check" | "measure" | "use">("check");
  const [recorded, setRecorded] = useState(false);
  const face = faceByKey(ctx, ctx.picks[0]);

  if (!face) {
    return (
      <>
        <StageTitle>Selidiki Luas Setiap Sisi</StageTitle>
        <Prompt>
          Pilih salah satu sisi pada bangun atau jaring-jaring yang ingin kamu
          selidiki.
        </Prompt>
      </>
    );
  }

  const another = {
    label: "Pilih Sisi Lain",
    onClick: () => {
      ctx.clearPicks();
      setStep("check");
      setRecorded(false);
    },
  };

  return (
    <>
      <StageTitle>Selidiki Luas Setiap Sisi</StageTitle>
      <Prompt>
        Amati bentuk sisi yang kamu pilih. Bentuk bangun datar apa yang kamu
        amati pada sisi tersebut?
      </Prompt>
      {step === "check" && (
        <DataCheck
          ctx={ctx}
          faces={[face]}
          onUse={() => setStep("use")}
          onMeasure={() => setStep("measure")}
        />
      )}
      {step === "measure" && (
        <>
          <Note>Klik bagian sisi yang ingin kamu ukur. Kamu hanya mendapat data ukuran, bukan luasnya.</Note>
          <MeasurePanel
            face={face}
            revealed={ctx.measured.get(face.key)}
            onReveal={(edges) => ctx.revealEdges(face.key, edges)}
          />
          <div>
            <Btn
              variant="primary"
              disabled={!hasData(ctx, face)}
              onClick={() => setStep("use")}
            >
              Data ukuran sudah cukup
            </Btn>
          </div>
        </>
      )}
      {step === "use" && (
        <>
          <StageTitle>Gunakan Data yang Kamu Peroleh</StageTitle>
          <MeasurePanel
            face={face}
            revealed={ctx.measured.get(face.key)}
            onReveal={(edges) => ctx.revealEdges(face.key, edges)}
          />
          <Prompt>
            Berdasarkan bentuk dan ukuran sisi tersebut, bagaimana kamu dapat
            menentukan luasnya?
          </Prompt>
          {recorded ? (
            <AfterRecord ctx={ctx} extra={another} />
          ) : (
            <>
              <Note>
                Catat bentuk, ukuran, dan luas sisi yang kamu peroleh pada
                Catatan Hasil Eksplorasi di e-module.
              </Note>
              <RecordRow
                ctx={ctx}
                details={[summaryOf(ctx, face)]}
                recorded={recorded}
                onRecorded={() => setRecorded(true)}
              />
            </>
          )}
        </>
      )}
    </>
  );
}

function Hubungan3D({ ctx }: { ctx: AspectContext }) {
  const [asked, setAsked] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const face = faceByKey(ctx, ctx.picks[0]);

  function toggle() {
    ctx.animateFold(ctx.folded ? 1 : 0);
    setAsked(true);
  }

  return (
    <>
      <StageTitle>Hubungkan Sisi 3D dengan Jaring-Jaring</StageTitle>
      {!face && (
        <Prompt>Klik salah satu sisi pada bangun 3D atau pada jaring-jaring.</Prompt>
      )}
      {face && (
        <>
          <Prompt>
            {ctx.folded
              ? "Amati sisi yang kamu pilih. Menurutmu, di manakah posisi sisi ini ketika bangun dibuka menjadi jaring-jaring?"
              : "Amati sisi yang kamu pilih. Menurutmu, di manakah sisi ini akan berada ketika jaring-jaring dilipat menjadi bangun ruang?"}
          </Prompt>
          <div>
            <Btn variant="primary" onClick={toggle}>
              {ctx.folded ? "Buka Bangun" : "Lipat Bangun"}
            </Btn>
          </div>
          {asked && (
            <>
              <Prompt>
                Perhatikan posisi sisi yang kamu pilih. Apakah posisinya sesuai
                dengan dugaanmu?
              </Prompt>
              <Prompt>
                Apa yang kamu temukan tentang hubungan sisi-sisi pada bangun 3D
                dengan sisi-sisi pada jaring-jaring?
              </Prompt>
            </>
          )}
        </>
      )}
      {recorded && <AfterRecord ctx={ctx} />}
      {face && !recorded && (
        <BtnRow>
          <Btn onClick={ctx.clearPicks}>Pilih Sisi Lain</Btn>
          <Btn
            variant="primary"
            disabled={!asked}
            onClick={() => {
              ctx.record([`${face.label} dilacak dari bangun 3D ke jaring-jaring`]);
              setRecorded(true);
            }}
          >
            Catat Temuan
          </Btn>
        </BtnRow>
      )}
    </>
  );
}

function HubunganUkuran({ ctx }: { ctx: AspectContext }) {
  const [step, setStep] = useState<"check" | "measure" | "compare">("check");
  const [hint, setHint] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const a = faceByKey(ctx, ctx.picks[0]);
  const b = faceByKey(ctx, ctx.picks[1]);

  if (!a || !b) {
    return (
      <>
        <StageTitle>Selidiki Hubungan Ukuran Antar Sisi</StageTitle>
        <Prompt>Pilih dua sisi yang ingin kamu bandingkan.</Prompt>
        <Note>
          Sisi A: {a ? a.label : "belum dipilih"} · Sisi B: {b ? b.label : "belum dipilih"}
        </Note>
      </>
    );
  }

  return (
    <>
      <StageTitle>Selidiki Hubungan Ukuran Antar Sisi</StageTitle>
      {step === "check" && (
        <DataCheck
          ctx={ctx}
          faces={[a, b]}
          onUse={() => setStep("compare")}
          onMeasure={() => setStep("measure")}
        />
      )}
      {step === "measure" && (
        <>
          {[a, b].map((f) => (
            <MeasurePanel
              key={f.key}
              face={f}
              revealed={ctx.measured.get(f.key)}
              onReveal={(edges) => ctx.revealEdges(f.key, edges)}
            />
          ))}
          <div>
            <Btn
              variant="primary"
              disabled={!hasData(ctx, a) || !hasData(ctx, b)}
              onClick={() => setStep("compare")}
            >
              Bandingkan Kedua Sisi
            </Btn>
          </div>
        </>
      )}
      {step === "compare" && (
        <>
          <StageTitle>Bandingkan Kedua Sisi</StageTitle>
          {[a, b].map((f) => (
            <Note key={f.key}>{summaryOf(ctx, f)}</Note>
          ))}
          <Prompt>Bandingkan ukuran kedua sisi tersebut. Apa yang kamu temukan?</Prompt>
          <BtnRow>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
            <Btn onClick={() => ctx.animateFold(ctx.folded ? 1 : 0)}>
              {ctx.folded ? "Lihat pada Jaring-Jaring" : "Lihat pada Bangun 3D"}
            </Btn>
          </BtnRow>
          {hint && (
            <Hint>Perhatikan ukuran bagian-bagian yang bersesuaian pada kedua sisi.</Hint>
          )}
          <Prompt>
            Apa informasi yang kamu peroleh setelah membandingkan ukuran kedua
            sisi tersebut?
          </Prompt>
          {recorded ? (
            <AfterRecord
              ctx={ctx}
              extra={{
                label: "Bandingkan Sisi Lain",
                onClick: () => {
                  ctx.clearPicks();
                  setStep("check");
                  setHint(false);
                  setRecorded(false);
                },
              }}
            />
          ) : (
            <RecordRow
              ctx={ctx}
              details={[`${summaryOf(ctx, a)} ↔ ${summaryOf(ctx, b)}`]}
              recorded={recorded}
              onRecorded={() => setRecorded(true)}
            />
          )}
        </>
      )}
    </>
  );
}

function PolaLain({ ctx }: { ctx: AspectContext }) {
  const [hint, setHint] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const picked = ctx.picks
    .map((k) => faceByKey(ctx, k)?.label)
    .filter((l): l is string => Boolean(l));
  return (
    <>
      <StageTitle>Temukan Informasi Lainnya</StageTitle>
      <Prompt>
        Amati kembali bangun ruang dan jaring-jaringnya. Adakah informasi, pola,
        atau sifat lain yang kamu temukan?
      </Prompt>
      <Note>
        Eksplorasi bebas: putar model, buka/lipat bangun, pilih dan sorot sisi
        (maksimal dua), lalu ulangi animasi.
      </Note>
      {picked.length > 0 && (
        <Prompt>Apa yang kamu perhatikan? Adakah informasi atau hubungan yang kamu temukan?</Prompt>
      )}
      <div>
        <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
      </div>
      {hint && (
        <Hint>
          Coba perhatikan kembali bentuk, ukuran, posisi, atau hubungan antara
          sisi-sisi pada bangun dan jaring-jaringnya.
        </Hint>
      )}
      <Prompt>
        Informasi, pola, atau sifat lain apa yang kamu temukan dari hasil
        pengamatanmu?
      </Prompt>
      {recorded && <AfterRecord ctx={ctx} />}
      <RecordRow
        ctx={ctx}
        details={[picked.length ? `Sisi yang diamati: ${picked.join(", ")}` : "Pengamatan bebas"]}
        recorded={recorded}
        onRecorded={() => setRecorded(true)}
      />
      {recorded && <RecordNote />}
    </>
  );
}

const VIEWS: Record<AspectId, (props: { ctx: AspectContext }) => React.ReactElement> = {
  "banyak-sisi": BanyakSisi,
  "bentuk-sisi": BentukSisi,
  "ukuran-sisi": UkuranSisi,
  "sisi-sama": SisiSama,
  "luas-sisi": LuasSisi,
  "hubungan-3d": Hubungan3D,
  "hubungan-ukuran": HubunganUkuran,
  "pola-lain": PolaLain,
};

export default function AspectStage({
  aspect,
  ctx,
}: {
  aspect: AspectId;
  ctx: AspectContext;
}) {
  const View = VIEWS[aspect];
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {ctx.solid.label} · {aspectLabel(aspect)}
      </p>
      <View ctx={ctx} />
    </>
  );
}
