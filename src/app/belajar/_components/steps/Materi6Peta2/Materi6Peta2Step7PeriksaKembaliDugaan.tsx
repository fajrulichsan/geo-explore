import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  "Apakah dugaanmu tentang kubus dan balok berubah? Jelaskan alasannya.",
  "Apakah dugaanmu tentang prisma (penampang sejajar alas) berubah? Jelaskan alasannya.",
  "Data atau hasil pengamatan apa yang mendukung dugaanmu?",
  "Apa pertanyaan baru yang ingin kamu cari jawabannya pada tahap berikutnya?",
];

export default async function Materi6Peta2Step7PeriksaKembaliDugaan({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarMaskot = await getPageImage("M6-P2-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1
        </div>
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Periksa Kembali Dugaanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Setelah menuliskan dugaanmu, periksa kembali pemikiranmu.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-5 items-end">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            {pertanyaan.map((p, i) => (
              <div key={p} className="flex flex-col gap-2">
                <label className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs flex-shrink-0">
                    {i + 1}
                  </span>
                  {p}
                </label>
                <textarea
                  name={`answers.periksa_${i + 1}`}
                  defaultValue={getValue(`periksa_${i + 1}`)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M6-P2-L7-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMaskot}
            alt="Maskot siswa berhijab memegang pensil dengan lampu ide"
            editable={editFoto}
            containerClassName="relative w-32 h-44 lg:w-full lg:h-56 mx-auto"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
        <p className="m-0 text-sm text-[#374151] leading-[1.5]">
          <span className="font-bold text-[#111827]">Catat dugaanmu dengan jelas.</span> Pada Tahap
          2, kamu akan membandingkan dan mencari pola dari hasil pengamatanmu.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
