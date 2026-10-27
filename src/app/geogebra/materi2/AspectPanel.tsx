import { useState } from "react";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import { aspectLabel, FOLD_HINT, type AspectId } from "./content";
import RecordBlock from "./RecordBlock";

export type PanelContext = {
  solidLabel: string;
  picks: string[];
  faceLabel: (key: string) => string;
  folded: boolean;
  flat: boolean;
  moving: boolean;
  animate: (target: 0 | 1) => void;
  clearPicks: () => void;
  arrangement: number;
  arrangementTotal: number;
  tested: number[];
  chooseArrangement: (index: number) => void;
  markTested: () => void;
  toMenu: () => void;
  toSufficiency: () => void;
  toCompareArrangements: () => void;
};

type Props = { ctx: PanelContext };

function Hubungan({ ctx }: Props) {
  const [tried, setTried] = useState(false);
  const [a, b] = ctx.picks;
  return (
    <>
      <StageTitle>Selidiki hubungan sisi</StageTitle>
      <Prompt>
        Pilih dua sisi pada jaring-jaring. Amati posisi kedua sisi tersebut
        sebelum dan setelah dilipat. Apa hubungan yang kamu temukan?
      </Prompt>
      <Note>
        Sisi 1: {a ? ctx.faceLabel(a) : "belum dipilih"} · Sisi 2:{" "}
        {b ? ctx.faceLabel(b) : "belum dipilih"}
      </Note>
      {a && b && (
        <div>
          <Btn
            variant="primary"
            disabled={ctx.moving}
            onClick={() => {
              ctx.animate(ctx.flat ? 0 : 1);
              setTried(true);
            }}
          >
            {ctx.flat ? "Lipat" : "Buka Kembali"}
          </Btn>
        </div>
      )}
      <RecordBlock
        disabled={!tried}
        onMenu={ctx.toMenu}
        onSufficiency={ctx.toSufficiency}
      />
    </>
  );
}

function Posisi({ ctx }: Props) {
  const [tried, setTried] = useState(false);
  const [face] = ctx.picks;
  return (
    <>
      <StageTitle>Selidiki posisi sisi</StageTitle>
      <Prompt>
        Pilih salah satu sisi. Amati posisinya pada jaring-jaring dan perhatikan
        ke mana sisi tersebut berpindah ketika dilipat.
      </Prompt>
      <Note>Sorotan sisi dipertahankan selama animasi.</Note>
      {face && (
        <>
          <p className="text-sm font-semibold text-gray-900">
            Sisi dipilih: {ctx.faceLabel(face)}
          </p>
          <div>
            <Btn
              variant="primary"
              disabled={ctx.moving}
              onClick={() => {
                ctx.animate(ctx.flat ? 0 : 1);
                setTried(true);
              }}
            >
              {ctx.flat ? "Lipat" : "Buka Kembali"}
            </Btn>
          </div>
          {tried && (
            <Prompt>Ke mana sisi yang kamu pilih berpindah setelah dilipat?</Prompt>
          )}
        </>
      )}
      <RecordBlock
        disabled={!tried}
        onMenu={ctx.toMenu}
        onSufficiency={ctx.toSufficiency}
      />
    </>
  );
}

function Proses({ ctx }: Props) {
  return (
    <>
      <StageTitle>Selidiki proses lipatan</StageTitle>
      <Prompt>Amati bagaimana sisi-sisi bergerak ketika jaring-jaring dilipat.</Prompt>
      <Note>Gunakan slider atau tombol animasi di bawah model untuk melipat bertahap.</Note>
      <RecordBlock onMenu={ctx.toMenu} onSufficiency={ctx.toSufficiency} />
    </>
  );
}

function Bertumpuk({ ctx }: Props) {
  const [hint, setHint] = useState(false);
  return (
    <>
      <StageTitle>Sisi bertumpuk atau tidak</StageTitle>
      <Prompt>
        Lipat jaring-jaring hingga selesai, lalu putar hasilnya dari berbagai
        arah. Apakah ada sisi yang saling bertumpuk?
      </Prompt>
      <BtnRow>
        <Btn disabled={ctx.moving} onClick={() => ctx.animate(ctx.flat ? 0 : 1)}>
          {ctx.flat ? "Lipat" : "Buka Kembali"}
        </Btn>
        <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
      </BtnRow>
      {hint && <Hint>{FOLD_HINT}</Hint>}
      <RecordBlock onMenu={ctx.toMenu} onSufficiency={ctx.toSufficiency} />
    </>
  );
}

function Hasil({ ctx }: Props) {
  const [step, setStep] = useState<"predict" | "observe">("predict");
  const [hint, setHint] = useState(false);
  return (
    <>
      <StageTitle>Selidiki Hasil Lipatan Jaring-Jaring</StageTitle>
      <Prompt>Menurutmu, apa yang akan terjadi ketika seluruh sisinya dilipat?</Prompt>
      {step === "predict" ? (
        <div>
          <Btn
            variant="primary"
            disabled={ctx.moving}
            onClick={() => {
              ctx.animate(0);
              setStep("observe");
            }}
          >
            Mulai Melipat
          </Btn>
        </div>
      ) : (
        <>
          <Note>2D → sisi mulai terangkat → semakin terlipat → posisi akhir. Amati hasilnya dari berbagai arah.</Note>
          <Prompt>Apa yang kamu temukan setelah seluruh sisi dilipat?</Prompt>
          <div>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
          </div>
          {hint && (
            <Hint>
              Perhatikan posisi setiap sisi. Apakah seluruh sisi menempati
              posisinya dengan tepat? Adakah sisi yang saling bertumpuk atau
              bagian yang belum tertutup?
            </Hint>
          )}
          <RecordBlock
            disabled={!ctx.folded}
            prompt="Apa yang kamu temukan setelah seluruh sisi dilipat?"
            extra={[
              {
                label: "Ulangi Lipatan",
                onClick: () => {
                  ctx.animate(1);
                  setStep("predict");
                  setHint(false);
                },
              },
            ]}
            onMenu={ctx.toMenu}
            onSufficiency={ctx.toSufficiency}
          />
        </>
      )}
    </>
  );
}

function PolaLain({ ctx }: Props) {
  const [hint, setHint] = useState(false);
  return (
    <>
      <StageTitle>Temukan Informasi Lainnya</StageTitle>
      <Prompt>
        Amati kembali susunan sisi dan proses lipatannya. Adakah pola atau sifat
        lain yang menurutmu penting?
      </Prompt>
      <Note>Eksplorasi bebas: putar, lipat, sorot sisi (maksimal dua), dan ubah sudut pandang.</Note>
      <div>
        <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
      </div>
      {hint && (
        <Hint>
          Perhatikan kembali susunan sisi sebelum dilipat dan posisi setiap sisi
          setelah dilipat.
        </Hint>
      )}
      <RecordBlock onMenu={ctx.toMenu} onSufficiency={ctx.toSufficiency} />
    </>
  );
}

function Susunan({ ctx }: Props) {
  const [step, setStep] = useState<"start" | "arrange" | "folded">("start");
  const [hint, setHint] = useState(false);
  const [recorded, setRecorded] = useState(false);

  function tryNext() {
    const next = (ctx.arrangement + 1) % ctx.arrangementTotal;
    ctx.chooseArrangement(next);
    setStep("arrange");
    setHint(false);
    setRecorded(false);
  }

  if (step === "start") {
    return (
      <>
        <StageTitle>Eksplorasi bentuk jaring-jaring</StageTitle>
        <Prompt>
          Coba susunan sisi yang berbeda tanpa mengubah jumlah dan bentuk
          sisinya. Apa yang terjadi ketika susunan tersebut dilipat?
        </Prompt>
        <Note>Susunan sekarang: Susunan {ctx.arrangement + 1}.</Note>
        <div>
          <Btn variant="primary" onClick={tryNext}>
            Coba Susunan
          </Btn>
        </div>
      </>
    );
  }

  const canCompare = ctx.tested.length >= 2;
  return (
    <>
      <StageTitle>Coba Susunan Jaring-Jaring Lain</StageTitle>
      <Prompt>
        Sekarang coba susunan sisi yang berbeda dari susunan sebelumnya. Amati
        apa yang terjadi ketika susunan tersebut dilipat.
      </Prompt>
      <p className="text-sm font-semibold text-gray-900">
        Susunan {ctx.arrangement + 1}
      </p>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: ctx.arrangementTotal }, (_, i) => (
          <button
            key={i}
            type="button"
            disabled={ctx.moving}
            onClick={() => {
              ctx.chooseArrangement(i);
              setStep("arrange");
              setRecorded(false);
            }}
            className={`rounded-md border px-2 py-1 text-xs font-semibold disabled:opacity-50 ${
              i === ctx.arrangement
                ? "border-[#2563EB] bg-blue-50 text-[#1D4ED8]"
                : "border-gray-300 bg-white text-gray-700"
            }`}
          >
            Susunan {i + 1}
          </button>
        ))}
      </div>
      <BtnRow>
        <Btn disabled={ctx.moving} onClick={tryNext}>
          Susunan Berikutnya
        </Btn>
      </BtnRow>
      <Prompt>
        Amati susunan ini sebelum dilipat. Menurutmu, apa yang akan terjadi
        ketika seluruh sisinya dilipat?
      </Prompt>
      <div>
        <Btn
          variant="primary"
          disabled={ctx.moving}
          onClick={() => {
            ctx.animate(ctx.flat ? 0 : 1);
            if (ctx.flat) {
              ctx.markTested();
              setStep("folded");
            }
          }}
        >
          {ctx.flat ? "Lipat" : "Buka Kembali"}
        </Btn>
      </div>
      {step === "folded" && (
        <>
          <Prompt>Apa yang kamu amati setelah seluruh sisi dilipat?</Prompt>
          <div>
            <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
          </div>
          {hint && <Hint>{FOLD_HINT}</Hint>}
          {recorded ? (
            <>
              <Prompt>Apa yang kamu temukan setelah susunan ini dilipat?</Prompt>
              <Hint>Catat hasil pengamatanmu pada Tabel Hasil Pengamatan di e-module.</Hint>
              <BtnRow>
                <Btn onClick={tryNext}>Coba Susunan Lain</Btn>
                {canCompare && (
                  <Btn onClick={ctx.toCompareArrangements}>Bandingkan Susunan</Btn>
                )}
                <Btn onClick={ctx.toMenu}>Kembali ke Aspek Pengamatan</Btn>
                <Btn variant="primary" onClick={ctx.toSufficiency}>
                  Periksa Kecukupan Data
                </Btn>
              </BtnRow>
            </>
          ) : (
            <BtnRow>
              <Btn variant="primary" disabled={!ctx.folded} onClick={() => setRecorded(true)}>
                Catat Temuan
              </Btn>
              <Btn onClick={tryNext}>Coba Susunan Lain</Btn>
            </BtnRow>
          )}
        </>
      )}
    </>
  );
}

const VIEWS: Record<AspectId, (p: Props) => React.ReactElement> = {
  susunan: Susunan,
  hubungan: Hubungan,
  posisi: Posisi,
  proses: Proses,
  bertumpuk: Bertumpuk,
  hasil: Hasil,
  "pola-lain": PolaLain,
};

export default function AspectPanel({
  aspect,
  ctx,
}: {
  aspect: AspectId;
  ctx: PanelContext;
}) {
  const View = VIEWS[aspect];
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {ctx.solidLabel} · {aspectLabel(aspect)}
      </p>
      <View ctx={ctx} />
    </>
  );
}
