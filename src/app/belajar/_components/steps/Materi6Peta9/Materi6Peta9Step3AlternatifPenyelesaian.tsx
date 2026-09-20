import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { BANGUN, HiddenFields, Isi, Nav, SectionTitle, TahapHeader, Tulis, answerText, cardCls, inputCls } from "./Materi6Peta9Parts";

export default async function Materi6Peta9Step3AlternatifPenyelesaian({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const dipilih = answerText(initialAnswers, "alt_bangun");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={3} />
      <TahapHeader materi={materi} step={3} />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="D"
          judul="Alternatif Penyelesaian"
          hint="Tuliskan satu alternatif jawaban lain yang berbeda dari jawaban pertama."
          warna="#1E3A8A"
        />
        <div className={`${cardCls} flex flex-col gap-4`}>
          <fieldset className="m-0 border-0 p-0 flex flex-wrap gap-3">
            <legend className="mb-2 text-sm font-bold text-[#1E3A8A]">Bangun</legend>
            {BANGUN.map((b) => (
              <label
                key={b.nama}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold cursor-pointer has-[:checked]:ring-2"
                style={{ backgroundColor: b.bg, borderColor: b.border, color: b.warna }}
              >
                <input
                  type="radio"
                  name="answers.alt_bangun"
                  value={b.nama}
                  defaultChecked={dipilih === b.nama}
                  required
                  style={{ accentColor: b.warna }}
                />
                {b.judul}
              </label>
            ))}
          </fieldset>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1E3A8A]">
              Ukuran
              <Isi name="alt_ukuran" answers={initialAnswers} label="Ukuran bangun alternatif" placeholder="Contoh: 6 cm × 6 cm × 6 cm" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1E3A8A]">
              Volume (cm³)
              <input
                name="answers.alt_volume"
                defaultValue={answerText(initialAnswers, "alt_volume")}
                placeholder="..."
                required
                className={`${inputCls} text-center`}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1E3A8A]">
            Alasan
            <Tulis name="alt_alasan" answers={initialAnswers} rows={4} label="Alasan memilih alternatif ini" />
          </label>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={3} />
    </form>
  );
}
