import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "menemukan hubungan antara jaring-jaring dan luas permukaan kubus, balok, dan prisma;",
  "menentukan luas permukaan berdasarkan jumlah luas seluruh sisinya;",
  "menemukan rumus luas permukaan kubus, balok, dan prisma melalui jaring-jaring;",
  "mencoba dan membandingkan lebih dari satu strategi dalam menentukan luas permukaan;",
  "menjelaskan alasan matematis serta memperbaiki strategi jika diperlukan; dan",
  "menunjukkan keyakinan diri dalam menyelesaikan masalah luas permukaan.",
];

export default async function Materi3Peta1Step4TujuanPembelajaran({ materi, peta, step = "4", editFoto }: StepComponentProps) {
  const gambarMaskot = await getPageImage("M3-P1-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 12h16M12 4v16" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Pendahuluan: Luas Permukaan Kubus, Balok, dan Prisma
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran: setelah mempelajari submateri ini, kamu diharapkan mampu
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-5 items-end">
          <ol className="m-0 p-0 list-none flex flex-col gap-3">
            {tujuanPembelajaran.map((tujuan, i) => (
              <li
                key={tujuan}
                className="bg-white border border-[#E5E7EB] rounded-2xl py-3.5 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-3.5"
              >
                <span className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <p className="m-0 text-sm leading-[1.6] text-[#374151] pt-1">{tujuan}</p>
              </li>
            ))}
          </ol>
          <EditablePageImage
          imageKey="M3-P1-L4-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarMaskot}
          alt="Siswi berhijab menunjuk ke atas sambil membaca buku jaring-jaring"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[280px] mx-auto lg:max-w-none"
        />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
