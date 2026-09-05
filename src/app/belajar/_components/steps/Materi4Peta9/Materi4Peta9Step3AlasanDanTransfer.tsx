import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta9Step3AlasanDanTransfer({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const boyImage = await getPageImage("M4-P9-L3-1");

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
              Mengapa <span className="font-bold">kedua strategi</span> yang kamu gunakan
              menghasilkan luas permukaan yang sama? Gunakan alasan matematis yang kuat dan
              jelaskan dengan bahasamu sendiri.
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
          <EditablePageImage
            imageKey="M4-P9-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={boyImage}
            alt="Siswa berpikir menjelaskan alasan matematis"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 sm:w-32 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF] hidden sm:block"
          />
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
              Sekarang, tentukan luas permukaan limas segiempat tegak berikut:
            </p>
            <ul className="m-0 pl-4 flex flex-col gap-1">
              <li className="text-sm text-[#374151]">
                Sisi alas berbentuk persegi dengan panjang sisi = <span className="font-bold text-[#16A34A]">12 cm</span>.
              </li>
              <li className="text-sm text-[#374151]">
                Tinggi sisi tegak (apotema) = <span className="font-bold text-[#16A34A]">15 cm</span>.
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <svg width="150" height="120" viewBox="0 0 150 120" fill="none">
                <path d="M75 12l52 30-52 22-52-22z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M75 64L23 42l52 68 52-68z" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M75 12v52" stroke="#16A34A" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M75 12L23 42" stroke="#DC2626" strokeWidth="1.2" strokeDasharray="3 3" />
                <text x="52" y="24" fontSize="9" fill="#DC2626" fontWeight="700">
                  15 cm
                </text>
                <text x="40" y="104" fontSize="9" fill="#111827" fontWeight="700">
                  12 cm
                </text>
              </svg>
            </div>
            <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-4 flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
                <path d="M12 2a4 4 0 00-4 4c0 2.5 2 3 2 5h4c0-2 2-2.5 2-5a4 4 0 00-4-4z" />
                <path d="M10 20h4" />
              </svg>
              <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.5]">
                Ini adalah tantangan transfer konsep. Tunjukkan bahwa strategimu dapat digunakan
                pada ukuran yang berbeda!
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Apakah strategi yang kamu gunakan sebelumnya masih dapat digunakan? Jelaskan alasan
              matematisnya.
            </p>
            <textarea
              name="answers.transfer_konsep"
              defaultValue={getValue("transfer_konsep")}
              rows={7}
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
