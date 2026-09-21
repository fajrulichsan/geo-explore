import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangunTabs = ["Kubus", "Balok", "Prisma"] as const;

const tahapan: { key: PageImageKey; label: string; alt: string }[] = [
  { key: "M3-P4-L2-1", label: "1. Bangun ruang (3D)", alt: "Kubus utuh pada GeoGebra 3D" },
  { key: "M3-P4-L2-2", label: "2. Sebagian terbuka", alt: "Kubus sebagian terbuka" },
  { key: "M3-P4-L2-3", label: "3. Lebih terbuka", alt: "Kubus lebih terbuka" },
  { key: "M3-P4-L2-4", label: "4. Jaring-jaring (2D)", alt: "Jaring-jaring kubus" },
];

const diamati = [
  { key: "diamati_banyak_sisi", label: "Banyak sisi" },
  { key: "diamati_bentuk_sisi", label: "Bentuk setiap sisi" },
  { key: "diamati_ukuran_sisi", label: "Ukuran setiap sisi" },
  { key: "diamati_luas_sisi", label: "Luas setiap sisi" },
  { key: "diamati_sisi_sama", label: "Sisi-sisi yang sama bentuk dan ukurannya" },
  { key: "diamati_hubungan", label: "Hubungan ukuran antar sisi" },
];

export default async function Materi3Peta4Step2EksplorasiGeoGebra({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "true" || answers[key] === "on";

  const [gambarTahapan, gambarQr] = await Promise.all([
    Promise.all(tahapan.map((t) => getPageImage(t.key))),
    getPageImage("qr-geogebra"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <div className="flex items-center gap-3.5 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
          <span className="rounded-full bg-[#EFF4FF] text-[#2563EB] text-xs font-bold py-1 px-3">Tahap 3 dari 6</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Menggunakan GeoGebra 3D
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Amati perubahan bangun ruang menjadi jaring-jaring.</p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-[#111827]">Pilih Bangun:</span>
            <div className="inline-flex bg-[#F3F4F6] rounded-full p-1 gap-1">
              {bangunTabs.map((b, i) => (
                <span
                  key={b}
                  className={`rounded-full py-1.5 px-4 text-xs font-bold ${
                    i === 0 ? "bg-white text-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.06)]" : "text-[#6B7280]"
                  }`}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <p className="m-0 text-center text-sm font-bold text-[#1D4ED8]">Transisi Bangun &rarr; Jaring-Jaring</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tahapan.map((t, i) => (
              <div key={t.key} className="flex flex-col items-center gap-2">
                <EditablePageImage
                  imageKey={t.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 1)}
                  src={gambarTahapan[i]}
                  alt={t.alt}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full aspect-square"
                />
                <p className="m-0 text-xs font-semibold text-[#6B7280] text-center">{t.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#92400E] leading-[1.5]">
              Gunakan fitur putar (drag) untuk melihat setiap sisi. Buka menjadi jaring-jaring untuk
              mengamati bentuk dan ukuran tiap sisi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-stretch">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#2563EB]">Scan GeoGebra 3D</span>
            <EditablePageImage
              imageKey="qr-geogebra"
              materi={materi}
              peta={peta}
              step={step}
              urutan="5"
              src={gambarQr}
              alt="QR code menuju model GeoGebra 3D"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-36 h-36 bg-white"
            />
            <p className="m-0 text-center text-xs text-[#6B7280]">Scan untuk membuka model interaktif.</p>
          </div>

          <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-[20px] p-5 flex flex-col gap-3">
            <p className="m-0 text-base font-extrabold text-[#1D4ED8]">Yang Diamati</p>
            <p className="m-0 text-sm text-[#4B5563]">Centang setiap informasi yang kamu temukan.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {diamati.map((d) => (
                <label
                  key={d.key}
                  className="flex items-center gap-2.5 bg-white border border-[#E5E7EB] rounded-xl py-2.5 px-3.5 text-sm text-[#374151] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
                >
                  <input
                    type="checkbox"
                    name={`answers.${d.key}`}
                    defaultChecked={isChecked(d.key)}
                    className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                  />
                  {d.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
