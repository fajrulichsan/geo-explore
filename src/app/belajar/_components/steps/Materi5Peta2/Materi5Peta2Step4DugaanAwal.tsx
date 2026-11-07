import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  { key: "pola_panjang_rusuk", label: "Bagaimana perubahan panjang rusuk kubus kecil menjadi kubus besar?" },
  { key: "pola_luas_sisi", label: "Bagaimana perubahan luas salah satu sisi kubus kecil menjadi kubus besar?" },
  { key: "pola_hubungan", label: "Apa hubungan yang kamu temukan antara perubahan panjang rusuk dan luas salah satu sisi kubus?" },
];

export default async function Materi5Peta2Step4DugaanAwal({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const tahukahImage = await getPageImage("M5-P2-L4-1");
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={9} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengidentifikasi Pola Awal
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Berdasarkan pengamatanmu terhadap kubus kecil dan kubus besar dengan faktor skala{" "}
            <span className="font-bold text-[#2563EB]">k = 2</span>, jawablah pertanyaan berikut.
          </p>
          {pertanyaan.map((p, i) => (
            <div key={p.key} className="flex flex-col gap-2">
              <label htmlFor={p.key} className="flex items-start gap-3 text-sm font-bold text-[#111827] leading-[1.5]">
                <span className="w-6 h-6 rounded-full bg-[#FFEDD5] text-[#C2410C] text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {p.label}
              </label>
              <textarea
                id={p.key}
                name={`answers.${p.key}`}
                defaultValue={getValue(p.key)}
                rows={2}
                required
                placeholder="Tuliskan hasil pengamatanmu..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
          ))}
          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-4 flex flex-col gap-2">
            <label htmlFor="dugaan_alasan" className="text-sm font-bold text-[#111827]">
              Alasan berdasarkan hasil pengamatan
            </label>
            <p className="m-0 text-xs text-[#4B5563]">
              Jelaskan alasanmu berdasarkan ukuran dan luas sisi kedua kubus yang kamu amati.
            </p>
            <textarea
              id="dugaan_alasan"
              name="answers.dugaan_alasan"
              defaultValue={getValue("dugaan_alasan")}
              rows={4}
              required
              placeholder="Tuliskan alasanmu..."
              className="w-full rounded-xl border border-[#FED7AA] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="rounded-[24px] overflow-hidden border border-[#F5E3A0]">
          <EditablePageImage
            imageKey="M5-P2-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={tahukahImage}
            alt="Tahukah Kamu? Banyak benda di sekitar kita menggunakan prinsip skala, misalnya maket rumah, miniatur gedung, model jembatan, dan lainnya"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
