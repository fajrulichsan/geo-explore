import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta7Step3KesimpulanKelompok({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const groupImage = await getPageImage("M3-P7-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Konsep Luas Permukaan Bangun Ruang</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Mengapa Rumus Itu Benar?</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Jelaskan alasan matematisnya.</p>
        <div className="flex items-start gap-4">
          <label htmlFor="alasan_matematis" className="sr-only">
            Jelaskan alasan matematisnya
          </label>
          <textarea
            id="alasan_matematis"
            name="answers.alasan_matematis"
            defaultValue={getValue("alasan_matematis")}
            rows={5}
            required
            placeholder="Jelaskan alasan matematisnya..."
            className="flex-1 w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#FDE68A" stroke="#D97706" strokeWidth="1.4" className="flex-shrink-0 hidden sm:block">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2V16h6v-1.8A6 6 0 0012 3z" />
          </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 items-center bg-gradient-to-br from-[#EFF4FF] to-white border border-[#DBE7FF] rounded-[20px] p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <circle cx="8" cy="9" r="3" />
                <circle cx="16" cy="9" r="3" />
                <path d="M2 19c0-3 3-5 6-5s6 2 6 5M12 19c0-2 2-4 4-4s6 1 6 4" />
              </svg>
            </div>
            <h2 className="m-0 text-lg font-bold text-[#1E3A8A]">Kesimpulan Kelompok</h2>
          </div>
          <p className="m-0 text-sm text-[#374151]">
            Tuliskan kesimpulan umum kelompokmu tentang cara menentukan luas permukaan kubus, balok, dan
            prisma.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="kesimpulan_kelompok" className="text-sm font-semibold text-[#111827]">
              Kami menyimpulkan bahwa ...
            </label>
            <textarea
              id="kesimpulan_kelompok"
              name="answers.kesimpulan_kelompok"
              defaultValue={getValue("kesimpulan_kelompok")}
              rows={5}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>
        <EditablePageImage
          imageKey="M3-P7-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={groupImage}
          alt="Tiga siswa berdiskusi menyusun kesimpulan kelompok"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden"
        />
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
