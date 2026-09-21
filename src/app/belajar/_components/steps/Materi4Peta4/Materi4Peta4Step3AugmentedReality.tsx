import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkah = [
  "Pindai QR Code AR.",
  "Amati model limas secara virtual di atas meja.",
  "Pilih satu per satu sisi limas.",
  "Amati ukuran yang diperlukan pada setiap sisi yang dipilih.",
  "Bandingkan luas alas dengan luas seluruh sisi tegak.",
  "Amati bagaimana luas alas dan semua sisi tegak membentuk luas permukaan limas.",
];

const yangDiamati = [
  "Alas limas.",
  "Semua sisi tegak.",
  "Hubungan antar sisi.",
  "Ukuran yang diperlukan pada setiap sisi.",
  "Luas alas.",
  "Luas seluruh sisi tegak.",
  "Luas alas dan tiap sisi tegak.",
];

const istilah = [
  { label: "Tinggi sisi tegak (apotema)", desc: "= tinggi segitiga", color: "#2563EB" },
  { label: "Tinggi limas (t)", desc: "berbeda dari tinggi sisi tegak", color: "#DC2626" },
  { label: "Panjang sisi alas (s)", desc: "ukuran sisi pada alas limas", color: "#16A34A" },
];

export default async function Materi4Peta4Step3AugmentedReality({ materi, peta, step = "3", editFoto }: StepComponentProps) {
  const [gambarLimas, gambarQr] = await Promise.all([getPageImage("M4-P4-L3-1"), getPageImage("qr-ar")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
          Eksplorasi Menggunakan Augmented Reality (AR)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
          <EditablePageImage
            imageKey="M4-P4-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarLimas}
            alt="Model limas segiempat pada tampilan AR"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[220px] mx-auto"
          />
          <div className="flex flex-col gap-3">
            {istilah.map((i) => (
              <div key={i.label} className="border-l-4 pl-3" style={{ borderColor: i.color }}>
                <p className="m-0 text-sm font-bold" style={{ color: i.color }}>
                  {i.label}
                </p>
                <p className="m-0 text-xs text-[#6B7280]">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col items-center justify-center gap-3">
          <span className="text-sm font-bold text-[#16A34A]">Scan QR Code AR</span>
          <EditablePageImage
            imageKey="qr-ar"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarQr}
            alt="QR code menuju model AR limas"
            editable={editFoto}
            imageClassName="object-contain p-2"
            containerClassName="relative w-32 h-32 rounded-xl overflow-hidden bg-white border border-[#BBF7D0]"
          />
          <span className="text-xs font-bold text-[#16A34A] tracking-wide">TERSEDIA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
          <span className="text-sm font-bold text-[#111827]">Langkah Kegiatan</span>
          {langkah.map((l, i) => (
            <div key={l} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                {i + 1}
              </div>
              <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <span className="text-sm font-bold text-[#16A34A]">Yang Diamati (AR)</span>
          {yangDiamati.map((y) => (
            <div key={y} className="flex items-center gap-2.5 text-sm text-[#374151]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0">
                <rect x="3" y="3" width="18" height="18" rx="4" />
              </svg>
              {y}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-3.5 px-[18px] flex flex-col gap-1.5">
        <p className="m-0 text-base font-extrabold text-[#D97706]">Ingat!</p>
        <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
          GeoGebra 3D dan AR membantumu mengumpulkan informasi dengan lebih baik. Jangan langsung membuat rumus.
          Gunakan hasil pengamatanmu sebagai dasar untuk menemukan pola pada tahap berikutnya.
        </p>
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
