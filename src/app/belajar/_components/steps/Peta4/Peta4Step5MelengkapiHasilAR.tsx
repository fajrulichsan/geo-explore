import Image from "next/image";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { key: "M1-P4-L5-2" as const, urutan: "2", label: "Scan QR Code.", alt: "Ponsel memindai kode QR" },
  { key: "M1-P4-L5-3" as const, urutan: "3", label: "Arahkan kamera ke marker.", alt: "Ponsel diarahkan ke marker AR" },
  { key: "M1-P4-L5-4" as const, urutan: "4", label: "Putar, perbesar, atau geser model.", alt: "Ponsel menampilkan model yang dapat diputar" },
  { key: "M1-P4-L5-5" as const, urutan: "5", label: "Lengkapi hasil pengamatan.", alt: "Papan catatan dan pensil" },
];

const tips = [
  "Putar model untuk melihat setiap sisi.",
  "Perhatikan sisi yang sebelumnya belum terlihat.",
  "Geser perangkat jika ada bagian yang terhalang.",
  "Perbesar bagian yang diperlukan untuk melihat detail.",
  "Amati sisi, rusuk, titik sudut, dan pasangan bidang sejajar.",
  "Pastikan bagian yang belum terlihat pada GeoGebra dapat diamati melalui AR.",
];

const diamati = [
  "Bentuk sisi",
  "Susunan sisi",
  "Pasangan bidang sejajar",
  "Bentuk alas",
  "Jumlah sisi",
  "Jumlah rusuk",
  "Jumlah titik sudut",
  "Informasi tambahan",
];

export default async function Peta4Step5MelengkapiHasilAR({ materi, peta, editFoto }: StepComponentProps) {
  const [maskot, qrAr, ...gambarAlur] = await Promise.all([
    getPageImage("M1-P4-L5-1"),
    getPageImage("qr-ar"),
    ...alur.map((a) => getPageImage(a.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M12 8l3 1.7v3.6L12 15l-3-1.7V9.7L12 8z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengeksplorasi dengan Augmented Reality (AR)
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#92400E]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
            </svg>
            Ingat!
          </div>
          <p className="m-0 text-sm leading-[1.7] text-[#78350F]">
            Gunakan bangun ruang yang sama seperti yang kamu amati menggunakan GeoGebra 3D pada halaman sebelumnya.
          </p>
        </div>
        <EditablePageImage
          imageKey="M1-P4-L5-1"
          materi={materi}
          peta={peta}
          step="5"
          urutan="1"
          src={maskot}
          alt="Guru dan siswa belajar bangun ruang dengan AR di dalam kelas"
          editable={editFoto}
          imageClassName="object-cover"
          containerClassName="relative w-full md:w-[380px] aspect-[3/2] flex-shrink-0 rounded-2xl overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Melengkapi Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.7] text-[#374151] max-w-2xl">
          Gunakan Augmented Reality (AR) untuk melengkapi informasi tentang bangun ruang yang telah kamu amati
          menggunakan GeoGebra 3D.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-5 items-stretch">
          <div className="flex flex-col items-center gap-3 bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <a
              href="https://ar.geo-explore.my.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka Augmented Reality"
              className="relative w-full max-w-[260px] aspect-square rounded-xl border border-[#E5E7EB] bg-white"
            >
              <Image
                src={qrAr}
                alt="Kode QR untuk membuka Augmented Reality"
                fill
                sizes="260px"
                unoptimized
                className="object-contain p-2"
              />
            </a>
            <a
              href="https://ar.geo-explore.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1E3A8A] text-white rounded-xl py-2.5 px-4 text-sm font-bold leading-snug w-full max-w-[260px] text-center"
            >
              Scan atau klik untuk membuka AR
            </a>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="text-sm font-extrabold text-[#1E3A8A]">Langkah Menggunakan AR</div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {alur.map((a, i) => (
                <div key={a.key} className="flex flex-col items-center gap-2 text-center">
                  <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <EditablePageImage
                    imageKey={a.key}
                    materi={materi}
                    peta={peta}
                    step="5"
                    urutan={a.urutan}
                    src={gambarAlur[i]}
                    alt={a.alt}
                    editable={editFoto}
                    imageClassName="object-contain"
                    containerClassName="relative w-full aspect-[4/3]"
                  />
                  <p className="m-0 text-xs sm:text-sm text-[#374151] leading-snug">{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="text-sm font-extrabold text-[#92400E]">Tips Eksplorasi AR</div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
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

          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="text-sm font-extrabold text-[#1E3A8A]">Hal yang Diamati</div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {diamati.map((teks, i) => (
                <li key={teks} className="flex items-center gap-2.5 text-sm text-[#1E3A8A]">
                  <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
