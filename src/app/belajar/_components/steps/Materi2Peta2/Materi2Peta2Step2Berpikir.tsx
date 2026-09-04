import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const questions = [
  {
    n: 1,
    label: "Menurutmu, gambar manakah yang dapat dilipat menjadi bangun ruang?",
    placeholder: "Ketik jawabanmu di sini...",
    rows: 3,
  },
  {
    n: 2,
    label: "Gambar manakah yang menurutmu tidak dapat dilipat?",
    placeholder: "Ketik jawabanmu di sini...",
    rows: 3,
  },
  {
    n: 3,
    label: "Apakah semua gambar memiliki jumlah sisi yang sama?",
    placeholder: "Ketik jawabanmu di sini...",
    rows: 3,
  },
  {
    n: 4,
    label: "Apa perbedaan susunan bidang datar pada setiap gambar?",
    placeholder: "Ketik jawabanmu di sini...",
    rows: 3,
  },
];

export default async function Materi2Peta2Step2Berpikir({
  materi,
  peta,
  step = "2",
  initialAnswers,
  editFoto,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const berpikirImage = await getPageImage("M2-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Pertanyaan Pengamatan
        </div>
      </div>

      <div className="relative rounded-[24px] bg-[#FEF9E7] border border-[#F5E3A0] px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center gap-6">
        <EditablePageImage
          imageKey="M2-P2-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={berpikirImage}
          alt="Maskot menunjuk (Ayo Berpikir)"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-white/50 order-first"
        />
        <div className="flex-1 flex items-start gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-1 flex-shrink-0">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <div>
            <h3 className="m-0 mb-1.5 text-lg font-bold text-[#92400E]">Ayo Berpikir!</h3>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Perhatikan kembali semua susunan yang telah kamu amati. Menurutmu, apa yang menentukan
              apakah suatu susunan dapat dilipat menjadi bangun ruang? Tidak ada jawaban yang salah!
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 pl-[19px] sm:pl-6">
        <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-[#E5E7EB]" />
        {questions.map((q) => (
          <div key={q.n} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="absolute -left-[19px] sm:-left-6 top-0 w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0 ring-4 ring-white">
              {q.n}
            </div>
            <div className="flex-1 pl-[24px] sm:pl-9 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors">
              <label htmlFor={`q${q.n}`} className="block mb-3 text-base font-bold text-[#111827] cursor-pointer">
                {q.label}
              </label>
              <textarea
                id={`q${q.n}`}
                name={`answers.jawaban_${q.n}`}
                defaultValue={getValue(`jawaban_${q.n}`)}
                rows={q.rows}
                placeholder={q.placeholder}
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-[#E5E7EB]">
        <div className="pt-6">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil pengamatan (opsional)"
            defaultValue={getValue("foto_bukti")}
            materi={materi}
            peta={peta}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
