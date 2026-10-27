import { useState } from "react";
import type { Face } from "../shared/geometry";
import Recorder from "../shared/Recorder";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import MeasurePanel from "../materi3/stages/MeasurePanel";

export type AspectId =
  | "bentuk-alas"
  | "bentuk-sisi"
  | "banyak-sisi"
  | "ukuran-alas"
  | "ukuran-sisi"
  | "luas-alas"
  | "luas-sisi"
  | "hubungan"
  | "pola-lain";

export const ASPECTS: { id: AspectId; label: string }[] = [
  { id: "bentuk-alas", label: "Bentuk alas" },
  { id: "bentuk-sisi", label: "Bentuk setiap sisi tegak" },
  { id: "banyak-sisi", label: "Banyak sisi tegak" },
  { id: "ukuran-alas", label: "Ukuran alas" },
  { id: "ukuran-sisi", label: "Ukuran yang diperlukan pada sisi tegak" },
  { id: "luas-alas", label: "Luas alas" },
  { id: "luas-sisi", label: "Luas setiap sisi tegak" },
  { id: "hubungan", label: "Hubungan alas dan sisi-sisi tegak" },
  { id: "pola-lain", label: "Pola/sifat lainnya" },
];

export type SideData = { base: boolean; height: boolean };

export type Ctx = {
  solidLabel: string;
  faces: Face[];
  picks: string[];
  counted: string[];
  folded: boolean;
  flat: boolean;
  moving: boolean;
  animate: (target: 0 | 1) => void;
  setPicks: (faces: string[]) => void;
  hub: "none" | "alas" | "sisi";
  setHub: (mode: "none" | "alas" | "sisi") => void;
  baseRevealed: ReadonlySet<number> | undefined;
  revealBase: (edges: number[]) => void;
  sideData: (face: string) => SideData;
  markSide: (face: string, key: keyof SideData) => void;
  clearSide: (face: string) => void;
  slantOf: (face: string) => number;
  overlay: "none" | "base" | "height" | "compare";
  setOverlay: (mode: "none" | "base" | "height" | "compare") => void;
  comparePair: (a: string, b: string) => void;
  toMenu: () => void;
  toSufficiency: () => void;
  toCompareLimas: () => void;
  canCompareLimas: boolean;
};

type Props = { ctx: Ctx };
const bottomFace = (ctx: Ctx) => ctx.faces.find((f) => f.key === "bottom")!;
const labelOf = (ctx: Ctx, key: string) => ctx.faces.find((f) => f.key === key)?.label ?? key;

function nav(ctx: Ctx, extra: { label: string; onClick: () => void }[] = []) {
  return [
    ...extra,
    { label: "Amati Aspek Lain", onClick: ctx.toMenu },
    ...(ctx.canCompareLimas ? [{ label: "Bandingkan Limas", onClick: ctx.toCompareLimas }] : []),
    { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true },
  ];
}

function BentukAlas({ ctx }: Props) {
  const alas = ctx.picks.includes("bottom");
  return (
    <>
      <StageTitle>Selidiki Bentuk Alas</StageTitle>
      <Prompt>
        Amati model limas dari berbagai arah. Identifikasi sisi yang menjadi
        alas limas. Berbentuk apakah alas tersebut?
      </Prompt>
      <Note>Klik alas limas agar disorot. Sorotan tetap melekat saat limas dibuka.</Note>
      {alas && (
        <div>
          <Btn disabled={ctx.moving} onClick={() => ctx.animate(ctx.flat ? 0 : 1)}>
            {ctx.flat ? "Lipat Limas" : "Buka Limas"}
          </Btn>
        </div>
      )}
      <Recorder
        prompt="Apa informasi yang kamu peroleh dari limas ini?"
        disabled={!alas}
        nav={nav(ctx)}
      />
    </>
  );
}

function BentukSisi({ ctx }: Props) {
  const [step, setStep] = useState<"pick" | "compare">("pick");
  const [a, b] = ctx.picks;
  if (step === "compare" && a && b) {
    return (
      <>
        <StageTitle>Bandingkan Sisi Tegak</StageTitle>
        <Note>
          {labelOf(ctx, a)} ↔ {labelOf(ctx, b)}
        </Note>
        <Prompt>Bandingkan kedua sisi tegak tersebut. Apa persamaan dan perbedaan yang kamu temukan?</Prompt>
        <Prompt>Apakah bentuknya sama? Apakah ukurannya sama atau berbeda?</Prompt>
        <Recorder prompt="Apa yang kamu temukan dari kedua sisi tegak?" nav={nav(ctx)} />
      </>
    );
  }
  return (
    <>
      <StageTitle>Selidiki Sisi-Sisi Tegak</StageTitle>
      <Prompt>Amati sisi-sisi tegak limas. Pilih salah satu sisi tegak dan perhatikan bentuknya.</Prompt>
      <Note>Sisi dipilih: {ctx.picks.map((p) => labelOf(ctx, p)).join(", ") || "belum ada"}</Note>
      {ctx.picks.length >= 1 && ctx.picks.length < 2 && (
        <Note>Amati Sisi Tegak Lain: klik sisi tegak kedua pada model.</Note>
      )}
      {ctx.picks.length >= 2 && (
        <div>
          <Btn variant="primary" onClick={() => setStep("compare")}>
            Bandingkan Sisi Tegak
          </Btn>
        </div>
      )}
      <Recorder prompt="Bentuk apa yang kamu temukan pada sisi-sisi tegak?" disabled={ctx.picks.length === 0} nav={nav(ctx)} />
    </>
  );
}

function BanyakSisi({ ctx }: Props) {
  return (
    <>
      <StageTitle>Selidiki Sisi Tegak</StageTitle>
      <Prompt>
        Amati sisi-sisi yang bertemu pada titik puncak. Telusuri satu per satu.
        Berapa banyak sisi tegak yang kamu temukan?
      </Prompt>
      <Note>Klik setiap sisi tegak: sisi tegak 1 → 2 → 3 … Sisi yang sudah diklik disorot agar tidak dihitung dua kali.</Note>
      <p className="text-sm font-semibold">Sisi tegak yang sudah ditandai: {ctx.counted.length}</p>
      <Recorder prompt="Berapa banyak sisi tegak yang kamu temukan?" disabled={ctx.counted.length === 0} nav={nav(ctx)} />
    </>
  );
}

function UkuranAlas({ ctx }: Props) {
  const [shown, setShown] = useState(false);
  return (
    <>
      <StageTitle>Selidiki Ukuran Alas</StageTitle>
      <Prompt>Amati alas limas. Ukuran apa yang diperlukan untuk menentukan luas alas tersebut?</Prompt>
      {!shown ? (
        <div>
          <Btn
            variant="primary"
            onClick={() => {
              ctx.setPicks(["bottom"]);
              setShown(true);
            }}
          >
            Tampilkan Ukuran yang Dipilih
          </Btn>
        </div>
      ) : (
        <MeasurePanel face={bottomFace(ctx)} revealed={ctx.baseRevealed} onReveal={ctx.revealBase} />
      )}
      <Recorder
        prompt="Ukuran apa saja yang kamu peroleh dari alas limas?"
        disabled={!ctx.baseRevealed || ctx.baseRevealed.size === 0}
        nav={nav(ctx)}
      />
    </>
  );
}

function SideMeasure({ ctx, face, overlay }: { ctx: Ctx; face: string; overlay: boolean }) {
  const d = ctx.sideData(face);
  const slant = Math.round(ctx.slantOf(face) * 10) / 10;
  const baseLen = ctx.faces.find((f) => f.key === face)?.edgeLengths[0] ?? 0;
  return (
    <>
      <Note>Amati sisi tegak yang kamu pilih. Klik bagian yang ingin kamu ukur.</Note>
      <BtnRow>
        <Btn
          onClick={() => {
            ctx.markSide(face, "base");
            if (overlay) ctx.setOverlay("base");
          }}
        >
          Ukur Alas Segitiga
        </Btn>
        <Btn
          onClick={() => {
            ctx.markSide(face, "height");
            if (overlay) ctx.setOverlay("height");
          }}
        >
          Ukur Tinggi Segitiga
        </Btn>
      </BtnRow>
      {d.base && <p className="text-sm font-semibold">Panjang alas segitiga = {baseLen} cm</p>}
      {d.height && <p className="text-sm font-semibold">Tinggi segitiga pada sisi tegak = {slant} cm</p>}
    </>
  );
}

function UkuranSisi({ ctx }: Props) {
  const [step, setStep] = useState<"measure" | "compare">("measure");
  const face = ctx.picks[0];
  const d = face ? ctx.sideData(face) : { base: false, height: false };
  return (
    <>
      <StageTitle>Selidiki Ukuran Sisi Tegak</StageTitle>
      <Prompt>Pilih salah satu sisi tegak. Amati bentuknya. Ukuran apa yang diperlukan untuk menentukan luas sisi tersebut?</Prompt>
      {face && step === "measure" && <SideMeasure ctx={ctx} face={face} overlay />}
      {face && d.base && d.height && step === "measure" && (
        <>
          <Prompt>Bagaimana kedua ukuran tersebut dapat membantumu menemukan luas sisi tegak yang kamu amati?</Prompt>
          <BtnRow>
            <Btn
              onClick={() => {
                ctx.setPicks([]);
                ctx.setOverlay("none");
              }}
            >
              Amati Sisi Tegak Lain
            </Btn>
            <Btn
              variant="primary"
              onClick={() => {
                ctx.animate(0);
                ctx.setOverlay("compare");
                setStep("compare");
              }}
            >
              Bandingkan Tinggi
            </Btn>
            <Btn onClick={ctx.toMenu}>Kembali ke Aspek Pengamatan</Btn>
          </BtnRow>
        </>
      )}
      {step === "compare" && (
        <>
          <Note>Garis merah putus-putus: tinggi limas (tegak lurus alas). Garis biru: tinggi segitiga pada sisi tegak.</Note>
          <Prompt>
            Perhatikan kedua ruas garis tersebut. Apakah tinggi limas sama dengan
            tinggi segitiga pada sisi tegak? Jelaskan berdasarkan posisi kedua
            ruas tersebut.
          </Prompt>
          <Recorder
            prompt="Apa yang kamu temukan tentang kedua ruas tinggi tersebut?"
            nav={[
              {
                label: "Amati Sisi Tegak Lain",
                onClick: () => {
                  ctx.setPicks([]);
                  ctx.setOverlay("none");
                  setStep("measure");
                },
              },
              ...nav(ctx),
            ]}
          />
        </>
      )}
    </>
  );
}

function LuasAlas({ ctx }: Props) {
  const alas = ctx.picks.includes("bottom");
  return (
    <>
      <StageTitle>Selidiki Luas Alas</StageTitle>
      <Prompt>Pilih alas limas. Amati bentuk dan ukurannya.</Prompt>
      {alas && (
        <>
          <MeasurePanel face={bottomFace(ctx)} revealed={ctx.baseRevealed} onReveal={ctx.revealBase} />
          <Prompt>Berdasarkan bentuk dan ukuran tersebut, bagaimana kamu dapat menentukan luas alas?</Prompt>
        </>
      )}
      <Recorder prompt="Apa yang kamu peroleh tentang luas alas?" disabled={!alas} nav={nav(ctx)} />
    </>
  );
}

function LuasSisi({ ctx }: Props) {
  const [phase, setPhase] = useState<"check" | "measure" | "use">("check");
  const face = ctx.picks[0];
  if (!face) {
    return (
      <>
        <StageTitle>Selidiki Luas Sisi Tegak</StageTitle>
        <Prompt>Pilih satu sisi tegak yang ingin kamu selidiki.</Prompt>
      </>
    );
  }
  const d = ctx.sideData(face);
  const has = d.base && d.height;
  const another = {
    label: "Pilih Sisi Tegak Lain",
    onClick: () => {
      ctx.setPicks([]);
      setPhase("check");
    },
  };
  return (
    <>
      <StageTitle>Selidiki Luas Sisi Tegak</StageTitle>
      <Note>Sisi dipilih: {labelOf(ctx, face)}</Note>
      {phase === "check" && has && (
        <>
          <Prompt>Kamu sudah memperoleh data ukuran sisi tegak ini. Gunakan kembali data tersebut atau lakukan pengukuran kembali.</Prompt>
          <BtnRow>
            <Btn variant="primary" onClick={() => setPhase("use")}>
              Gunakan Data Ukuran Sebelumnya
            </Btn>
            <Btn
              onClick={() => {
                ctx.clearSide(face);
                setPhase("measure");
              }}
            >
              Ukur Kembali
            </Btn>
          </BtnRow>
        </>
      )}
      {phase === "check" && !has && (
        <div>
          <Btn variant="primary" onClick={() => setPhase("measure")}>
            Mulai Mengukur
          </Btn>
        </div>
      )}
      {phase === "measure" && (
        <>
          <SideMeasure ctx={ctx} face={face} overlay={false} />
          {has && (
            <div>
              <Btn variant="primary" onClick={() => setPhase("use")}>
                Data Ukuran Sudah Cukup
              </Btn>
            </div>
          )}
        </>
      )}
      {phase === "use" && (
        <>
          <SideMeasure ctx={ctx} face={face} overlay={false} />
          <Prompt>Berdasarkan bentuk dan ukuran sisi tegak tersebut, bagaimana kamu dapat menentukan luasnya?</Prompt>
          <Recorder prompt="Catat bentuk, ukuran, dan luas sisi tegak yang kamu peroleh." nav={[another, { label: "Kembali ke Aspek Pengamatan", onClick: ctx.toMenu }, { label: "Periksa Kecukupan Data", onClick: ctx.toSufficiency, primary: true }]} />
        </>
      )}
    </>
  );
}

function Hubungan({ ctx }: Props) {
  return (
    <>
      <StageTitle>Hubungan Alas dan Sisi-Sisi Tegak</StageTitle>
      <Prompt>Amati seluruh bagian jaring-jaring. Bagian apa saja yang bersama-sama membentuk seluruh permukaan limas?</Prompt>
      <BtnRow>
        <Btn onClick={() => ctx.setHub("alas")}>Sorot Alas</Btn>
        <Btn onClick={() => ctx.setHub("sisi")}>Sorot Sisi-Sisi Tegak</Btn>
      </BtnRow>
      <Prompt>
        Informasi apa yang kamu peroleh tentang alas dan sisi-sisi tegak sebagai
        bagian dari seluruh permukaan limas?
      </Prompt>
      <Recorder prompt="Apa informasi yang kamu peroleh dari limas ini?" disabled={ctx.hub === "none"} nav={nav(ctx)} />
    </>
  );
}

function PolaLain({ ctx }: Props) {
  const [hint, setHint] = useState(false);
  return (
    <>
      <StageTitle>Temukan Informasi Lainnya</StageTitle>
      <Prompt>Adakah informasi atau pola lain yang dapat membantumu memahami luas seluruh permukaan limas?</Prompt>
      <Note>Eksplorasi bebas: putar, buka/lipat limas, dan sorot sisi.</Note>
      <div>
        <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
      </div>
      {hint && <Hint>Coba perhatikan kembali alas, sisi-sisi tegak, dan ukurannya pada jaring-jaring.</Hint>}
      <Recorder prompt="Apa informasi yang kamu peroleh dari limas ini?" nav={nav(ctx)} />
    </>
  );
}

const VIEWS: Record<AspectId, (p: Props) => React.ReactElement> = {
  "bentuk-alas": BentukAlas,
  "bentuk-sisi": BentukSisi,
  "banyak-sisi": BanyakSisi,
  "ukuran-alas": UkuranAlas,
  "ukuran-sisi": UkuranSisi,
  "luas-alas": LuasAlas,
  "luas-sisi": LuasSisi,
  hubungan: Hubungan,
  "pola-lain": PolaLain,
};

export default function AspectPanel({ aspect, ctx }: { aspect: AspectId; ctx: Ctx }) {
  const View = VIEWS[aspect];
  return <View ctx={ctx} />;
}
