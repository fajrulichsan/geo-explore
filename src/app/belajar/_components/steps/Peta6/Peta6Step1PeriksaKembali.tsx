import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import Peta6Step1PeriksaKembaliForm from "./Peta6Step1PeriksaKembaliForm";

const ingat = [
  "Periksa kembali menggunakan data yang telah kamu kumpulkan.",
  "Bandingkan alasanmu dengan kelompok lain.",
  "Revisi hanya jika ditemukan alasan matematis yang lebih kuat.",
  "Pada tahap ini kita belum membuat kesimpulan akhir.",
];

export default async function Peta6Step1PeriksaKembali({ materi, peta, step = "1", editFoto, initialAnswers }: StepComponentProps) {
  const maskot = await getPageImage("M1-P6-L1-1");

  return (
    <Peta6Step1PeriksaKembaliForm
      materi={materi}
      peta={peta}
      initialAnswers={initialAnswers ?? {}}
      header={
        <>
      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
            SUBMATERI 1
          </div>
          <div className="inline-flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border border-[#DBE5FB] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Tahap 5 dari 6 &ndash; Discovery Learning
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
            className="flex-shrink-0"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        </div>
      </div>

        </>
      }
      ingat={
        <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        <div className="md:col-span-6 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex gap-4 items-start">
          <div className="bg-[#D97706] text-white rounded-full p-2 flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
          </div>
          <div>
            <h3 className="m-0 mb-1.5 text-sm font-bold text-[#111827]">Ingat!</h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {ingat.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-1">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-6 bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center">
          <EditablePageImage
            imageKey="M1-P6-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Tiga maskot siswa berdiskusi: apakah klasifikasi kita benar-benar didukung oleh data?"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-[14px] overflow-hidden"
          />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-3xl">
          Pada Tahap 4 kamu telah menemukan beberapa pola dan membuat klasifikasi bangun ruang. Sekarang{" "}
          <strong className="text-[#2563EB]">periksalah kembali</strong> apakah hasil tersebut benar-benar didukung
          oleh data hasil pengamatan GeoGebra 3D, Augmented Reality (AR), dan hasil diskusi kelompok.
        </p>
      </div>

        </>
      }
    />
  );
}
