import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "shape-kubus", label: "Kubus" },
  { key: "shape-balok", label: "Balok" },
  { key: "shape-prisma", label: "Prisma Segitiga" },
] as const;

export default async function Materi3Peta1Step2EksplorasiProses({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarGeoGebra, gambarAR, gambarMaskot, ...gambarBangun] = await Promise.all([
    getPageImage("M3-P1-L2-1"),
    getPageImage("M3-P1-L2-2"),
    getPageImage("M3-P1-L2-3"),
    ...bangunRuang.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M9 3v4M15 3v4M4 8h16M6 8v11a1 1 0 001 1h10a1 1 0 001-1V8" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Eksplorasi Proses &amp; Alat Digital
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan GeoGebra 3D &amp; Augmented Reality (AR)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              GeoGebra 3D
            </div>
            <EditablePageImage
              imageKey="M3-P1-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarGeoGebra}
              alt="Ilustrasi eksplorasi GeoGebra 3D"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <ul className="m-0 pl-5 self-stretch flex flex-col gap-1 text-sm text-[#4B5563] leading-[1.6] list-disc text-left">
              <li>Putar bangun ruang 360°.</li>
              <li>Buka menjadi jaring-jaring.</li>
              <li>Lihat ukuran setiap sisi.</li>
              <li>Ubah ukuran secara dinamis.</li>
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2B3D44] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Augmented Reality (AR)
            </div>
            <EditablePageImage
              imageKey="M3-P1-L2-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambarAR}
              alt="Ilustrasi eksplorasi Augmented Reality"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <ul className="m-0 pl-5 self-stretch flex flex-col gap-1 text-sm text-[#4B5563] leading-[1.6] list-disc text-left">
              <li>Lihat bangun ruang 3D.</li>
              <li>Pilih setiap sisi.</li>
              <li>Ketahui ukuran dan luasnya.</li>
              <li>Cocokkan dengan jaring-jaring.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat!
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5 items-start">
          <EditablePageImage
            imageKey="M3-P1-L2-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarMaskot}
            alt="Maskot siswa menunjuk catatan"
            editable={editFoto}
            containerClassName="relative w-full aspect-square rounded-[20px] overflow-hidden bg-[#EFF4FF] hidden lg:block"
            imageClassName="object-contain"
          />
          <div className="bg-[#FCE9A8] rounded-2xl p-6 flex flex-col gap-3">
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
              <li>Luas permukaan adalah jumlah luas seluruh sisi bangun ruang.</li>
              <li>Jaring-jaring membantu melihat seluruh sisi secara utuh.</li>
              <li>Setiap sisi harus dihitung tepat satu kali, bukan sekadar dihafal.</li>
              <li>Rumus luas permukaan berasal dari sifat-sifat bangun ruang itu sendiri.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Mengeksplorasi?
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-[20px] p-6 flex flex-col gap-5 text-white">
          <p className="m-0 text-sm leading-[1.6] text-white/90">
            Gunakan pengamatan, logika, GeoGebra 3D, dan AR untuk menemukan bagaimana rumus luas
            permukaan terbentuk. Ayo mulai perjalanan penemuanmu!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {bangunRuang.map((bangun, i) => (
              <div key={bangun.key} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center overflow-hidden">
                  <img src={gambarBangun[i]} alt={bangun.label} className="w-full h-full object-contain" />
                </div>
                <p className="m-0 text-xs font-bold">{bangun.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          MULAI TAHAP 1
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
