import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta7Step5MengapaAturanBenar({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const gambar = await getPageImage("M8-P7-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengapa Aturan Itu Benar?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.65]">
          Jelaskan alasan matematis mengapa volume berubah sebesar faktor <span className="italic">k</span><sup>3</sup>. Gunakan hasil pengamatan, tabel, perhitungan, maupun ilustrasi bangun ruang sebagai dasar penjelasanmu.
        </p>
        <textarea
          name="answers.alasan_matematis"
          defaultValue={getValue("alasan_matematis")}
          rows={8}
          required
          aria-label="Alasan matematis volume berubah sebesar k pangkat tiga"
          className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-4 sm:p-6 flex flex-col gap-3">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Ilustrasi Perubahan Skala dan Volume</h3>
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan tiga keadaan berikut.</p>
        <EditablePageImage
          imageKey="M8-P7-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambar}
          alt="Kubus dengan k = ½, k = 1, dan k = 2 beserta volume hasil skalanya"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-xl bg-white"
        />
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3 text-sm text-[#166534] leading-[1.5]">
          Setiap perubahan ukuran panjang yang bersesuaian terhadap bangun awal mengakibatkan volume berubah dengan faktor <span className="italic font-bold">k</span><sup>3</sup>.
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] px-5 py-4">
        <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">?</span>
        <div className="flex flex-col gap-1">
          <p className="m-0 text-sm font-bold text-[#1E3A8A]">Bagaimana menentukan faktor perubahan volumenya?</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">Tuliskan terlebih dahulu alasanmu pada kolom di atas, lalu bandingkan dengan tiga keadaan pada ilustrasi.</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
