import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Materi5Peta9Step3AlasanDanTransfer({
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
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Jelaskan Alasan Matematis
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-start gap-5">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Mengapa <span className="font-bold">Strategi 1</span> dan{" "}
              <span className="font-bold">Strategi 2</span> dapat menghasilkan jawaban yang sama?
              Jelaskan hubungan antara faktor skala dan luas permukaan menggunakan alasan
              matematis atau ilustrasi yang kamu buat.
            </p>
            <textarea
              name="answers.alasan_hasil_sama"
              defaultValue={getValue("alasan_hasil_sama")}
              rows={5}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col items-center gap-3 flex-shrink-0 w-full sm:w-40">
            <div className="flex items-center gap-2">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none">
                <rect x="4" y="10" width="24" height="24" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M4 10l6-6h24l-6 6z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M28 10l6-6v24l-6 6z" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.5" />
              </svg>
              <span className="text-xs font-bold text-[#16A34A]">× k</span>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M1 7h14M11 2l6 5-6 5" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <svg width="56" height="50" viewBox="0 0 56 50" fill="none">
                <rect x="6" y="14" width="30" height="30" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M6 14l8-8h30l-8 8z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M36 14l8-8v30l-8 8z" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.5" />
              </svg>
            </div>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <rect x="24" y="0" width="24" height="24" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.3" />
              <rect x="0" y="24" width="24" height="24" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.3" />
              <rect x="24" y="24" width="24" height="24" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.3" />
              <rect x="48" y="24" width="24" height="24" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.3" />
              <rect x="24" y="48" width="24" height="24" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-start gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M12 2a4 4 0 00-4 4c0 2.5 2 3 2 5h4c0-2 2-2.5 2-5a4 4 0 00-4-4z" />
            <path d="M10 20h4" />
          </svg>
          <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.5]">
            Petunjuk Visual: gunakan gambar kubus atau jaring-jaring di samping apabila dapat
            membantu menjelaskan alasanmu.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Tantangan Lanjutan (Transfer Konsep)
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Perhatikan situasi berikut. Sebuah{" "}
              <span className="font-bold">prisma segitiga</span>,{" "}
              <span className="font-bold">balok</span>, dan{" "}
              <span className="font-bold">limas segiempat</span> masing-masing diperbesar dengan
              faktor skala <span className="font-bold text-[#16A34A]">4</span>.
            </p>
            <div className="flex items-center justify-center gap-4 py-2">
              <svg width="46" height="42" viewBox="0 0 46 42" fill="none">
                <path d="M23 4l19 11-19 11L4 15z" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1.4" />
                <path d="M23 26L4 15v12l19 11z" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.4" />
                <path d="M23 26l19-11v12l-19 11z" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1.4" />
              </svg>
              <svg width="46" height="40" viewBox="0 0 46 40" fill="none">
                <rect x="6" y="10" width="26" height="24" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.4" />
                <path d="M6 10l8-8h26l-8 8z" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.4" />
                <path d="M32 10l8-8v24l-8 8z" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.4" />
              </svg>
              <svg width="40" height="42" viewBox="0 0 40 42" fill="none">
                <path d="M20 4l16 10-16 6-16-6z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.4" />
                <path d="M20 20L4 14l16 22 16-22z" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.4" />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[#7C3AED] font-bold text-sm">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M1 6h14M10 1l6 5-6 5" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              × 4
            </div>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Tanpa menghitung satu per satu luas seluruh sisinya, jelaskan bagaimana kamu dapat
              menentukan luas permukaan ketiga bangun tersebut.
            </p>
            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
              </svg>
              <p className="m-0 text-xs font-semibold text-[#5B21B6] leading-[1.5]">
                Ini adalah tantangan transfer konsep. Tunjukkan bahwa strategimu berlaku untuk
                berbagai bentuk bangun ruang!
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Apakah strategi yang kamu gunakan tetap sama? Jelaskan alasanmu.
            </p>
            <textarea
              name="answers.transfer_konsep"
              defaultValue={getValue("transfer_konsep")}
              rows={9}
              required
              placeholder="Jawabanmu..."
              className="w-full flex-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
