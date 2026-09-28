import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const evaluasi = [
  { name: "i_pola_penting", teks: "Pola atau informasi penting apa yang kamu temukan setelah mengolah data?", warna: "bg-[#15803D]" },
  { name: "i_bantuan_data", teks: "Bagaimana data membantu kamu menentukan cara pengelompokan?", warna: "bg-[#6D28D9]" },
  { name: "i_perlu_diperbaiki", teks: "Bagian mana dari caramu yang masih perlu diperbaiki sebelum diperiksa pada tahap berikutnya?", warna: "bg-[#EA580C]" },
];

const pastikan = ["Berdasarkan data pengamatan.", "Menunjukkan pola/ciri yang jelas.", "Dapat digunakan untuk menyusun klasifikasi."];

export default async function Peta5Step8EvaluasiHasilSementara({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Evaluasi Proses Pengolahan Data
          </div>
        </div>
          {evaluasi.map((e, i) => (
            <div key={e.name} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className={`w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold flex-shrink-0 ${e.warna}`}>{i + 1}</span>
                <label htmlFor={e.name} className="text-sm leading-[1.6] font-bold text-[#111827] cursor-pointer pt-1">
                  {e.teks}
                </label>
              </div>
              <textarea
                id={e.name}
                name={`answers.${e.name}`}
                defaultValue={getValue(e.name)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hasil Pengolahan Sementara
          </div>
        </div>
          <p className="m-0 text-sm font-semibold text-[#374151]">
            Tuliskan hasil sementara berdasarkan pola yang kamu temukan. Hasil ini akan diperiksa pada Tahap 5.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <label htmlFor="j_hasil_sementara" className="text-sm font-bold text-[#111827] cursor-pointer">
              Hasil Pengolahan Sementara Kelompok Kami
            </label>
            <textarea
              id="j_hasil_sementara"
              name="answers.j_hasil_sementara"
              defaultValue={getValue("j_hasil_sementara")}
              rows={8}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" className="flex-shrink-0">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#92400E]">Pastikan hasilmu:</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {pastikan.map((teks) => (
                <li key={teks} className="flex items-center gap-3 text-sm text-[#374151]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" className="flex-shrink-0">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <path d="M8 12.5l3 3 5-6" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/7`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
