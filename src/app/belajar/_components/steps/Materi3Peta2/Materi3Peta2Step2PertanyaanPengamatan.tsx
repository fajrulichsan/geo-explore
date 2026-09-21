import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const questions = [
  "Apa yang terjadi ketika bangun ruang pada gambar dibuka?",
  "Apa yang tampak pada jaring-jaring setiap bangun ruang?",
  "Menurutmu, bagian mana yang nantinya akan dihitung jika ingin mengetahui luas seluruh permukaan bangun ruang?",
  "Apakah seluruh sisi pada setiap bangun ruang memiliki bentuk yang sama? Mengapa demikian?",
];

export default async function Materi3Peta2Step2PertanyaanPengamatan({
  materi,
  peta,
  step = "2",
  initialAnswers,
  editFoto,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M3-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
          <span className="rounded-full bg-[#2563EB] text-white text-xs font-bold px-3 py-1">Tahap 1 dari 6</span>
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

      <div className="grid lg:grid-cols-[1fr_220px] gap-6 items-start">
        <ol className="m-0 p-0 list-none flex flex-col gap-5 rounded-[24px] bg-[#FEF9E7] border border-[#F5E3A0] p-6">
          {questions.map((q, i) => (
            <li key={q} className="flex flex-col gap-2">
              <label htmlFor={`pengamatan_${i + 1}`} className="flex items-start gap-3 text-sm font-semibold text-[#1E3A8A] leading-[1.6]">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {q}
              </label>
              <textarea
                id={`pengamatan_${i + 1}`}
                name={`answers.pengamatan_${i + 1}`}
                defaultValue={getValue(`pengamatan_${i + 1}`)}
                rows={3}
                required
                placeholder="Ketik jawabanmu di sini..."
                className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-y"
              />
            </li>
          ))}
        </ol>
        <EditablePageImage
          imageKey="M3-P2-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={maskot}
          alt="Siswi berhijab berpikir dengan gelembung tanya"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-44 h-44 lg:w-full lg:h-56 mx-auto"
        />
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
