import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta1Step3BuatDugaan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarDugaan, gambarMaskot] = await Promise.all([
    getPageImage("M7-P1-L3-1"),
    getPageImage("M7-P1-L3-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
          >
            <path d="M12 2l9 5v10l-9 5-9-5V7z" />
            <path d="M3 7l9 5 9-5M12 12v10" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Volume Limas
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
            Buat Dugaan!
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-2">
          <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
            Volume satu limas kira-kira berapa bagian dari volume prisma?
          </p>
          <p className="m-0 text-[15px] font-bold leading-[1.6] text-[#DC2626]">
            Amati gambar berikut, kemudian tuliskan dugaanmu dan alasan
            awalmu!
          </p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M7-P1-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarDugaan}
            alt="Tiga limas dengan luas alas L dan tinggi t yang sama dibandingkan dengan satu prisma dengan luas alas L dan tinggi t yang sama"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <label
            htmlFor="dugaan_volume"
            className="text-sm font-bold text-[#111827]"
          >
            Dugaanku: volume satu limas adalah ... bagian dari volume prisma.
          </label>
          <textarea
            id="dugaan_volume"
            name="answers.dugaan_volume"
            defaultValue={getValue("dugaan_volume")}
            rows={2}
            placeholder="Ketik dugaanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
          <label
            htmlFor="alasan_dugaan"
            className="text-sm font-bold text-[#111827]"
          >
            Alasan awalku:
          </label>
          <textarea
            id="alasan_dugaan"
            name="answers.alasan_dugaan"
            defaultValue={getValue("alasan_dugaan")}
            rows={3}
            placeholder="Ketik alasanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8 flex items-center gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">
              Siap Bereksplorasi?
            </h2>
          </div>
          <p className="m-0 text-sm text-white/90 max-w-xl">
            Mari, amati, diskusikan, dan temukan sendiri rumus volume limas
            melalui kegiatan pada e-module ini!
          </p>
        </div>
        <EditablePageImage
          imageKey="M7-P1-L3-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambarMaskot}
          alt="Maskot siswa laki-laki mengepalkan tangan dengan tulisan Ayo, mulai!"
          editable={editFoto}
          containerClassName="relative w-32 h-36 rounded-2xl overflow-hidden bg-white flex-shrink-0 hidden sm:block"
          imageClassName="object-contain"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.6"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
