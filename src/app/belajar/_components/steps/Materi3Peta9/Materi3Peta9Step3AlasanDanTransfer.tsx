import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ukuranBaru = [
  { label: "Panjang", value: "24 cm" },
  { label: "Lebar", value: "16 cm" },
  { label: "Tinggi", value: "10 cm" },
];

export default async function Materi3Peta9Step3AlasanDanTransfer({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const boyImage = await getPageImage("M3-P9-L3-1");

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
              Jawablah pertanyaan berikut. Mengapa semua strategi yang kamu gunakan menghasilkan
              luas permukaan yang sama?
            </p>
            <textarea
              name="answers.alasan_hasil_sama"
              defaultValue={getValue("alasan_hasil_sama")}
              rows={4}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <EditablePageImage
            imageKey="M3-P9-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={boyImage}
            alt="Siswa bertanya mengapa hasilnya sama"
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
              Ukuran balok berubah menjadi:
            </p>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1.5">
                {ukuranBaru.map((u) => (
                  <div key={u.label} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0" />
                    <span className="text-[#374151]">{u.label} =</span>
                    <span className="font-bold text-[#16A34A]">{u.value}</span>
                  </div>
                ))}
              </div>
              <svg width="88" height="72" viewBox="0 0 88 72" fill="none" className="flex-shrink-0">
                <path d="M10 22L44 8l34 14-34 14z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M10 22v32l34 14V36z" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M78 22v32L44 68V36z" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.5" />
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
              Gunakan salah satu strategi yang telah kamu temukan sebelumnya untuk menentukan luas
              permukaan balok dengan ukuran baru tersebut. Apakah strategi yang sama tetap dapat
              digunakan? Jelaskan alasanmu.
            </p>
            <textarea
              name="answers.transfer_konsep"
              defaultValue={getValue("transfer_konsep")}
              rows={6}
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
