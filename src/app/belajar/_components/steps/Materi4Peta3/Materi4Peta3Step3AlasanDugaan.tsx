import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Dugaan yang baik harus disertai alasan.",
  "Tidak masalah apabila dugaanmu masih belum tepat.",
  "Semua dugaan akan dibuktikan menggunakan GeoGebra 3D dan Augmented Reality (AR) pada tahap berikutnya.",
];

export default async function Materi4Peta3Step3AlasanDugaan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const perangkat = await getPageImage("M4-P3-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Halaman 1 dari 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#EA580C]">
            Alasan Dugaan
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 focus-within:border-[#EA580C] transition-colors">
          <label htmlFor="alasan_dugaan" className="text-sm font-bold text-[#111827]">
            Tuliskan alasan kelompokmu memiliki dugaan tersebut berdasarkan hasil pengamatan pada Tahap 1.
          </label>
          <textarea
            id="alasan_dugaan"
            name="answers.alasan_dugaan"
            defaultValue={getValue("alasan_dugaan")}
            rows={6}
            placeholder="Tuliskan alasan kelompokmu..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
              <span className="text-base font-bold text-[#92400E]">Kotak Ingat</span>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-[#78350F] leading-[1.5]">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="mt-px flex-shrink-0">
                    <circle cx="12" cy="12" r="10" fill="#16A34A" />
                    <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <EditablePageImage
            imageKey="M4-P3-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={perangkat}
            alt="Laptop dan ponsel menampilkan limas pada GeoGebra 3D dan AR"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-44 aspect-[4/3] flex-shrink-0"
          />
        </div>

        <div className="lg:col-span-2 bg-[#EFF4FF] border border-[#DBE4FF] rounded-[20px] p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.4" />
              <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 1.5 6 5.5" />
            </svg>
            <span className="text-base font-bold text-[#1E3A8A]">Langkah Selanjutnya</span>
          </div>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Setelah dugaan dan alasan disusun, bandingkan dengan kelompok lain pada halaman berikutnya
            untuk menyempurnakan hipotesis sebelum tahap eksplorasi.
          </p>
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
