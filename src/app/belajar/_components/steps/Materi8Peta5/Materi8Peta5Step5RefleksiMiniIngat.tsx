import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta5Step5RefleksiMiniIngat({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarSiswa = await getPageImage("M8-P5-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengolah Informasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5 items-center">
          <EditablePageImage
            imageKey="M8-P5-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Siswa berpikir dengan gelembung lampu ide"
            editable={editFoto}
            natural
            containerClassName="relative w-40 sm:w-full mx-auto overflow-hidden"
          />
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-lg font-extrabold text-[#111827]">Refleksi Mini</h2>
            <label htmlFor="refleksi_mini" className="text-sm text-[#374151] leading-[1.5]">
              Hari ini aku mulai memahami bahwa …
            </label>
            <textarea
              id="refleksi_mini"
              name="answers.refleksi_mini"
              defaultValue={getValue("refleksi_mini")}
              rows={3}
              placeholder="Lanjutkan kalimat di atas..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-1.5">
          <h3 className="m-0 text-sm font-extrabold text-[#92400E]">Ingat!</h3>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">Jangan langsung menggunakan rumus. Temukan terlebih dahulu pola hubungan berdasarkan data hasil pengamatanmu.</p>
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-1.5">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Catatan:</h3>
          <p className="m-0 text-sm text-[#1E40AF] leading-[1.6]">Pola dan data yang kamu olah akan menjadi dasar penting untuk menyusun hubungan matematis sementara sebelum dilakukan pembuktian pada tahap berikutnya!</p>
          <p className="m-0 text-xs font-bold text-[#2563EB]">Data yang baik menghasilkan dugaan yang kuat!</p>
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
