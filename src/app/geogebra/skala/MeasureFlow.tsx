import { useState } from "react";
import { Btn, BtnRow, Note, Prompt } from "../shared/ui";
import { fmt, kLabel } from "./data";
import type { SkalaContext } from "./types";

export function DataList({ ctx, k }: { ctx: SkalaContext; k?: number }) {
  const factor = k ?? ctx.k;
  const parts = ctx.revealed(factor);
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-800">
      <p className="font-semibold">
        {ctx.solid.label} · faktor skala k = {kLabel(factor)}
      </p>
      {parts.length === 0 ? (
        <p className="text-gray-500">Belum ada ukuran yang kamu peroleh.</p>
      ) : (
        parts.map((p) => (
          <p key={p.id}>
            {p.label} = {fmt(p.value * factor)} cm
          </p>
        ))
      )}
    </div>
  );
}

export default function MeasureFlow({
  ctx,
  startAtMeasuring = false,
  onEnough,
}: {
  ctx: SkalaContext;
  startAtMeasuring?: boolean;
  onEnough: () => void;
}) {
  const [started, setStarted] = useState(startAtMeasuring);
  const [another, setAnother] = useState(false);
  const revealed = ctx.revealed(ctx.k);

  if (!started) {
    return (
      <>
        <Prompt>
          Bangun sekarang menggunakan faktor skala k = {kLabel(ctx.k)}. Pilih
          bagian yang ingin kamu ukur.
        </Prompt>
        <div>
          <Btn
            variant="primary"
            onClick={() => {
              ctx.setMeasureOn(true);
              setStarted(true);
            }}
          >
            Mulai Mengukur
          </Btn>
        </div>
      </>
    );
  }

  return (
    <>
      <Prompt>
        {another || revealed.length === 0
          ? "Klik bagian bangun yang ingin kamu ukur, atau pilih di bawah ini."
          : "Apakah kamu masih memerlukan ukuran bagian lain dari bangun ini?"}
      </Prompt>
      <div className="flex flex-wrap gap-2">
        {ctx.parts.map((p) => {
          const shown = revealed.some((r) => r.id === p.id);
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                ctx.reveal(p.id);
                setAnother(false);
              }}
              className={`rounded-md border px-2 py-1 text-xs font-semibold ${
                shown
                  ? "border-red-300 bg-red-50 text-red-700"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {shown ? `${p.label}: ${fmt(p.value * ctx.k)} cm` : `Ukur ${p.label}`}
            </button>
          );
        })}
      </div>
      {revealed.length > 0 && (
        <BtnRow>
          <Btn onClick={() => setAnother(true)}>Ukur Bagian Lain</Btn>
          <Btn
            variant="primary"
            onClick={() => {
              ctx.setMeasureOn(false);
              onEnough();
            }}
          >
            Data Ukuran Sudah Cukup
          </Btn>
        </BtnRow>
      )}
      <Note>Hanya ukuran yang kamu pilih yang ditampilkan.</Note>
    </>
  );
}
