import Image from "next/image";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkah = [
  "Buka GeoGebra 3D.",
  "Pilih model bangun ruang yang akan kamu amati.",
  "Putar model dari berbagai arah.",
  "Perbesar bagian yang diperlukan.",
  "Catat informasi yang kamu temukan.",
];

const tips = [
  "Putar model untuk melihat setiap sisi.",
  "Perbesar bagian tertentu.",
  "Amati semua sisi, rusuk, dan titik sudut.",
  "Perhatikan hubungan antarbidang.",
];

export default async function Peta4Step2EksplorasiGeoGebra({ materi, peta, editFoto }: StepComponentProps) {
  const [qr, layar] = await Promise.all([getPageImage("qr-geogebra"), getPageImage("M1-P4-L2-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengeksplorasi dengan GeoGebra 3D
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Menggunakan GeoGebra 3D
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-5 items-start">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-4">
              <a
                href="/geogebra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka GeoGebra 3D"
                className="relative w-28 h-28 flex-shrink-0 rounded-xl border border-[#E5E7EB] bg-white p-1.5"
              >
                <Image src={qr} alt="Kode QR untuk membuka GeoGebra 3D" fill sizes="112px" className="object-contain p-1.5" />
              </a>
              <a
                href="/geogebra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-xl py-2 px-3 text-xs font-bold leading-snug"
              >
                Scan atau klik untuk membuka GeoGebra 3D
              </a>
            </div>
            <ol className="m-0 p-0 list-none flex flex-col gap-2.5">
              {langkah.map((teks, i) => (
                <li key={teks} className="flex items-start gap-3 text-sm text-[#374151] leading-[1.5]">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {teks}
                </li>
              ))}
            </ol>
          </div>

          <EditablePageImage
            imageKey="M1-P4-L2-2"
            materi={materi}
            peta={peta}
            step="2"
            urutan="2"
            src={layar}
            alt="Laptop menampilkan GeoGebra 3D Calculator dengan model kubus hijau"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-2xl overflow-hidden"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex flex-col gap-3">
          <div className="text-sm font-extrabold text-[#92400E]">Tips Eksplorasi</div>
          <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {tips.map((teks) => (
              <li key={teks} className="flex items-start gap-2.5 text-sm text-[#78350F] leading-[1.5]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
                {teks}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-2xl p-4 text-[#1E3A8A] leading-[1.6]">
            <b>Tujuan kita:</b> mengumpulkan informasi yang diperlukan untuk menyelidiki dugaan kelompokmu.
          </div>
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-2xl p-4 text-[#1E3A8A] leading-[1.6]">
            Model dapat diputar, diperbesar, atau digeser dengan klik atau menggunakan fitur putar, zoom, dan geser.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
