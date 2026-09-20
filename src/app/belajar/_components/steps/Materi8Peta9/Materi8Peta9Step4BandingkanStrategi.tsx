import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { CellInput, HiddenStepFields, SectionTitle, StepFooter, StepTitle, SUBTITLE, TextAreaField, cardClass, readAnswers } from "./Materi8Peta9Parts";

const STEP = 4;

const baris = [
  { key: "langkah", label: "Langkah penyelesaian" },
  { key: "konsep", label: "Konsep yang digunakan" },
  { key: "hitung", label: "Perhitungan" },
  { key: "alasan", label: "Alasan matematis" },
  { key: "lebih", label: "Kelebihan" },
  { key: "kurang", label: "Kekurangan" },
];

export default async function Materi8Peta9Step4BandingkanStrategi({ materi, peta, initialAnswers }: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Bandingkan Strategimu" />
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">Lengkapilah tabel berikut untuk dua strategi yang kamu pilih di Langkah sebelumnya.</p>

        <div className={`${cardClass} !p-0 overflow-x-auto`}>
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left font-bold px-4 py-3 w-[34%]">Hal yang Dibandingkan</th>
                <th className="text-left font-bold px-4 py-3">Strategi 1</th>
                <th className="text-left font-bold px-4 py-3">Strategi 2</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((b) => (
                <tr key={b.key} className="border-t border-[#E5E7EB]">
                  <th scope="row" className="text-left font-bold text-[#111827] px-4 py-2.5 align-top">{b.label}</th>
                  <td className="px-2 py-2 align-top">
                    <CellInput name={`banding_${b.key}_1`} label={`${b.label} strategi 1`} value={getValue(`banding_${b.key}_1`)} />
                  </td>
                  <td className="px-2 py-2 align-top">
                    <CellInput name={`banding_${b.key}_2`} label={`${b.label} strategi 2`} value={getValue(`banding_${b.key}_2`)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={cardClass}>
          <TextAreaField name="strategi_efisien" label="Strategi mana yang menurutmu lebih efisien? Mengapa?" value={getValue("strategi_efisien")} rows={4} />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
