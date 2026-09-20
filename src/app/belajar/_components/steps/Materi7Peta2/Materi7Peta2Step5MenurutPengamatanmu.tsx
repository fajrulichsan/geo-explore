import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta2Step5MenurutPengamatanmu({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarSatu, gambarDua, gambarTiga, gambarMaskot] = await Promise.all([
    getPageImage("M7-P2-L5-1"),
    getPageImage("M7-P2-L5-2"),
    getPageImage("M7-P2-L5-3"),
    getPageImage("M7-P2-L5-4"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
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
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Menurut Pengamatanmu
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563]">Diskusikan bersama temanmu, kemudian isilah.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <label htmlFor="alasan_1" className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
              Mengapa satu limas belum memenuhi prisma?
            </label>
            <textarea id="alasan_1" name="answers.alasan_1" defaultValue={getValue("alasan_1")} rows={4} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
            <EditablePageImage
              imageKey="M7-P2-L5-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarSatu}
              alt="Prisma berisi pasir setinggi sebagian setelah satu kali penuangan, masih ada ruang kosong"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
            <p className="m-0 text-xs font-semibold text-[#DC2626]">Masih ada ruang kosong.</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <label htmlFor="alasan_2" className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs flex-shrink-0">2</span>
              Mengapa dua limas juga belum memenuhi prisma?
            </label>
            <textarea id="alasan_2" name="answers.alasan_2" defaultValue={getValue("alasan_2")} rows={4} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
            <EditablePageImage
              imageKey="M7-P2-L5-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambarDua}
              alt="Prisma berisi pasir lebih tinggi setelah dua kali penuangan, masih ada ruang kosong"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
            <p className="m-0 text-xs font-semibold text-[#DC2626]">Masih ada ruang kosong.</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <label htmlFor="alasan_3" className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs flex-shrink-0">3</span>
              Berdasarkan pengamatanmu, berapa kali isi limas diperlukan agar prisma penuh? Jelaskan alasanmu.
            </label>
            <textarea id="alasan_3" name="answers.alasan_3" defaultValue={getValue("alasan_3")} rows={4} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
            <EditablePageImage
              imageKey="M7-P2-L5-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={gambarTiga}
              alt="Prisma yang terisi penuh dengan pasir dan tanda tanya merah"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#EFF4FF] border border-[#DBE7FF] rounded-[20px] p-4 sm:p-5">
          <EditablePageImage
            imageKey="M7-P2-L5-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={gambarMaskot}
            alt="Maskot siswa laki-laki berpikir: Apakah setelah tiga kali tuang, prisma akan penuh? Mengapa ya?"
            editable={editFoto}
            containerClassName="relative w-40 h-44 sm:w-52 sm:h-56 flex-shrink-0"
            imageClassName="object-contain"
          />
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Apakah setelah tiga kali tuang, prisma akan penuh? <span className="font-bold text-[#2563EB]">Mengapa ya?</span>
          </p>
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
