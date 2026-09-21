import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Menjelaskan hubungan antara bangun ruang sisi datar dan jaring-jaringnya;",
  "Menentukan jaring-jaring yang valid dan tidak valid;",
  "Menemukan lebih dari satu bentuk jaring-jaring untuk bangun ruang tertentu;",
  "Membandingkan dan memperbaiki alternatif jaring-jaring;",
  "Memberikan alasan matematis atas pilihannya; dan",
  "Menunjukkan keyakinan diri dalam mencoba, menjelaskan, dan mempertahankan strategi penyelesaian masalah jaring-jaring bangun ruang.",
];

const pengingat = [
  "Perhatikan apakah susunan sisi dapat dilipat menjadi bangun ruang tanpa ada sisi yang saling bertumpuk.",
  "Periksa jumlah sisi dan kesesuaian bentuk setiap bidang.",
  "Amati bagian-bagian yang perlu dipotong dan dilipat ketika bangun ruang dibuka menjadi jaring-jaring.",
];

export default async function Materi2Peta1Step2EksplorasiTujuan({ materi, peta, editFoto }: StepComponentProps) {
  const [gambarGeoGebra, gambarAR, kubus, balok, prisma, limas] = await Promise.all([
    getPageImage("M2-P1-L2-1"),
    getPageImage("M2-P1-L2-2"),
    getPageImage("M2-P1-L2-3"),
    getPageImage("M2-P1-L2-4"),
    getPageImage("M2-P1-L2-5"),
    getPageImage("M2-P1-L2-6"),
  ]);

  const bangunRuang = [
    { key: "M2-P1-L2-3", urutan: "3", src: kubus, alt: "Kubus" },
    { key: "M2-P1-L2-4", urutan: "4", src: balok, alt: "Balok" },
    { key: "M2-P1-L2-5", urutan: "5", src: prisma, alt: "Prisma segitiga" },
    { key: "M2-P1-L2-6", urutan: "6", src: limas, alt: "Limas segiempat" },
  ] as const;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
          2. Jaring-Jaring Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Seru dengan GeoGebra 3D dan Augmented Reality (AR)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <EditablePageImage
              imageKey="M2-P1-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={gambarGeoGebra}
              alt="Laptop menampilkan GeoGebra 3D dengan jaring-jaring kubus"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-[14px] overflow-hidden"
            />
            <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              GeoGebra 3D
            </div>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Buka bangun ruang menjadi jaring-jaring, putar model 3D, dan amati hubungan antara sisi secara
              interaktif.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <EditablePageImage
              imageKey="M2-P1-L2-2"
              materi={materi}
              peta={peta}
              step="2"
              urutan="2"
              src={gambarAR}
              alt="Ponsel menampilkan jaring-jaring kubus dalam Augmented Reality"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[220px] mx-auto rounded-[14px] overflow-hidden"
            />
            <div className="inline-flex items-center gap-2 bg-[#166534] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5" />
              </svg>
              Augmented Reality (AR)
            </div>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Amati proses melipat jaring-jaring menjadi bangun ruang secara virtual dan periksa apakah lipatannya
              benar.
            </p>
          </div>
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

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm font-bold text-[#1D4ED8]">
            Setelah mempelajari submateri ini, kamu diharapkan mampu:
          </p>
          <ol className="m-0 p-0 list-none flex flex-col gap-3">
            {tujuanPembelajaran.map((tujuan, i) => (
              <li key={tujuan} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm leading-[1.6] text-[#374151] pt-0.5">{tujuan}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat!
          </div>
        </div>
        <div className="bg-[#FCE9A8] rounded-2xl p-6">
          <ul className="m-0 pl-5 flex flex-col gap-2 text-sm text-[#374151] leading-[1.6] list-disc marker:text-[#EA580C]">
            {pengingat.map((teks) => (
              <li key={teks}>{teks}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-white border border-[#DBE7FF] p-6 flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <path d="M5 19c-1 1-2 1-3 1 0-1 0-2 1-3M9 15l-3-3c1-4 4-8 13-9 0 9-5 12-9 12l-1-0zM14 9h.01" />
          </svg>
          <div>
            <p className="m-0 text-lg font-extrabold text-[#111827]">Siap Mengeksplorasi?</p>
            <p className="m-0 mt-1 text-xs text-[#4B5563] leading-[1.6]">
              Gunakan pengetahuan, logika, dan kreativitasmu untuk menemukan berbagai jaring-jaring bangun ruang sisi
              datar melalui kegiatan seru dan eksplorasi seru ini!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {bangunRuang.map((b) => (
            <EditablePageImage
              key={b.key}
              imageKey={b.key}
              materi={materi}
              peta={peta}
              step="2"
              urutan={b.urutan}
              src={b.src}
              alt={b.alt}
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[4/3]"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
