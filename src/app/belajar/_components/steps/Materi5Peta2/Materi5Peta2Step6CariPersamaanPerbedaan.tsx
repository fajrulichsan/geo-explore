import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const aspek = [
  { key: "bentuk_bangun", label: "Bentuk bangun" },
  { key: "jumlah_sisi", label: "Jumlah sisi" },
  { key: "ukuran_panjang", label: "Ukuran panjang (sisi, rusuk, tinggi, panjang prisma, apotema, dll.)" },
];

const textareaClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

export default async function Materi5Peta2Step6CariPersamaanPerbedaan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={9} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Cari Persamaan dan Perbedaan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berdasarkan hasil pengamatanmu!</p>

        <div className="flex flex-col gap-4">
          {aspek.map((a) => (
            <div key={a.key} className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="m-0 bg-[#1E3A8A] text-white text-sm font-bold py-2.5 px-5">{a.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${a.key}_sama`} className="text-xs font-bold text-[#16A34A]">
                    Persamaan (sama)
                  </label>
                  <textarea
                    id={`${a.key}_sama`}
                    name={`answers.${a.key}_sama`}
                    defaultValue={getValue(`${a.key}_sama`)}
                    rows={3}
                    required
                    className={textareaClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${a.key}_beda`} className="text-xs font-bold text-[#EA580C]">
                    Perbedaan (berbeda)
                  </label>
                  <textarea
                    id={`${a.key}_beda`}
                    name={`answers.${a.key}_beda`}
                    defaultValue={getValue(`${a.key}_beda`)}
                    rows={3}
                    required
                    className={textareaClass}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4">
          <p className="m-0 text-sm font-bold text-[#2563EB] leading-[1.6]">
            Dugaan perubahan luas permukaan (<span className="italic">k</span> = 2)
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="answers.dugaan_perubahan_luas"
              defaultValue={getValue("dugaan_perubahan_luas")}
              required
              aria-label="Dugaan perubahan luas permukaan"
              placeholder="Dugaanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white py-2.5 px-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none"
            />
            <label htmlFor="alasan_dugaan_perubahan" className="text-sm font-bold text-[#78350F]">
              Alasan dugaan (bukti pengamatan)
            </label>
            <textarea
              id="alasan_dugaan_perubahan"
              name="answers.alasan_dugaan_perubahan"
              defaultValue={getValue("alasan_dugaan_perubahan")}
              rows={3}
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-y"
            />
          </div>
        </div>

        <p className="m-0 flex items-start gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl py-3 px-4 text-sm text-[#374151]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l3 3 5-6" />
          </svg>
          <span>
            <span className="font-bold text-[#16A34A]">Tips:</span> Sebelum ke tahap berikutnya, pastikan kamu
            telah melengkapi tabel dengan pengamatanmu sendiri.
          </span>
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
