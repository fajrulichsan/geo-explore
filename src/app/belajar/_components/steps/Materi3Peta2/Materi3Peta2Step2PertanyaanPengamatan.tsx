import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const questions = [
  { n: 1, label: "Apa yang terjadi ketika bangun ruang pada gambar dibuka?" },
  { n: 2, label: "Apa yang tampak pada jaring-jaring setiap bangun ruang?" },
  {
    n: 3,
    label: "Menurutmu, bagian mana yang nantinya akan dihitung jika ingin mengetahui luas seluruh permukaan bangun ruang?",
  },
  { n: 4, label: "Apakah seluruh sisi pada setiap bangun ruang memiliki bentuk yang sama? Mengapa demikian?" },
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
  const mascotImage = await getPageImage("M3-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="relative rounded-[24px] bg-[#FEF9E7] border border-[#F5E3A0] px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center gap-6">
        <EditablePageImage
          imageKey="M3-P2-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot berpikir dengan gelembung tanya"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-white/50 order-first"
        />
        <div className="flex-1 flex items-start gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div>
            <h3 className="m-0 mb-1.5 text-lg font-bold text-[#92400E]">Pertanyaan Pengamatan</h3>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Jawablah pertanyaan berikut berdasarkan hasil pengamatanmu terhadap jaring-jaring bangun
              ruang.
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
              <label htmlFor={`pengamatan${q.n}`} className="block mb-3 text-base font-bold text-[#111827] cursor-pointer">
                {q.label}
              </label>
              <textarea
                id={`pengamatan${q.n}`}
                name={`answers.pengamatan_${q.n}`}
                defaultValue={getValue(`pengamatan_${q.n}`)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          </div>
        ))}
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
