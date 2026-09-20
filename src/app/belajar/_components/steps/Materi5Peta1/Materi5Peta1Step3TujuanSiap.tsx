import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Menjelaskan hubungan faktor skala dan perubahan panjang.",
  "Menemukan pola perubahan luas permukaan.",
  "Menentukan luas permukaan setelah diskalakan.",
  "Menggunakan lebih dari satu strategi penyelesaian.",
  "Menjelaskan dan membandingkan alasan matematis.",
  "Lebih yakin menyelesaikan masalah skala dan luas secara logis.",
];

const ingatPoin = [
  "Perubahan ukuran panjang memengaruhi luas permukaan.",
  "Hubungan tersebut dapat ditemukan melalui pengamatan.",
  "Rumus diperoleh dari pola yang ditemukan melalui pengamatan, bukan sekadar dihafal.",
];

export default async function Materi5Peta1Step3TujuanSiap({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const [gambarMaskot, gambarKacaPembesar, gambarSiap] = await Promise.all([
    getPageImage("M5-P1-L3-1"),
    getPageImage("M5-P1-L3-2"),
    getPageImage("M5-P1-L3-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="10" width="7" height="7" rx="1" />
            <rect x="14" y="4" width="10" height="10" rx="1" />
            <path d="M14 20h7" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Skala dan Luas Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-5 items-center bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 sm:p-6">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">
              Setelah mempelajari submateri ini, kamu diharapkan dapat:
            </p>
            {tujuanPembelajaran.map((tujuan, i) => (
              <div key={tujuan} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm leading-[1.5] text-[#374151]">{tujuan}</p>
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M5-P1-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMaskot}
            alt="Siswa laki-laki mengukur balok biru dengan penggaris sambil mencatat"
            editable={editFoto}
            imageClassName="object-contain mix-blend-multiply"
            containerClassName="relative w-40 h-40 md:w-full md:h-56 mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
            Ingat!
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-5 items-center bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6">
          <div className="flex flex-col gap-3">
            {ingatPoin.map((poin) => (
              <div key={poin} className="flex items-start gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#374151] leading-[1.5]">{poin}</span>
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M5-P1-L3-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarKacaPembesar}
            alt="Kaca pembesar di atas kubus biru"
            editable={editFoto}
            imageClassName="object-contain mix-blend-multiply"
            containerClassName="relative w-36 h-36 md:w-full md:h-44 mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Mengeksplorasi?
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M5-P1-L3-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarSiap}
            alt="Kubus, balok, prisma segitiga, dan limas segiempat diperbesar dengan k = 2: bentuk sama, ukuran berubah"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
