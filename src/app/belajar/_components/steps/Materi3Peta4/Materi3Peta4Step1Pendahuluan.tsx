import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alurEksplorasi = [
  { n: 1, label: "GeoGebra 3D", desc: "Amati perubahan bangun ruang menjadi jaring-jaring." },
  { n: 2, label: "AR", desc: "Amati ukuran setiap sisi pada model bangun ruang secara nyata." },
  { n: 3, label: "Catatan Hasil", desc: "Tuliskan semua informasi penting yang kamu temukan." },
];

const langkahKegiatan = [
  "Scan QR Code.",
  "Pilih bangun ruang (Kubus, Balok, Prisma).",
  "Putar bangun ruang hingga dapat diamati dari berbagai arah.",
  "Buka menjadi jaring-jaring.",
  "Amati ukuran setiap sisi.",
  "Catat hasil pengamatan.",
];

const yangDiamati = [
  "Banyak sisi",
  "Bentuk setiap sisi",
  "Ukuran setiap sisi",
  "Luas setiap sisi",
  "Sisi-sisi yang sama bentuk dan ukurannya",
  "Hubungan ukuran antar sisi",
];

export default async function Materi3Peta4Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambarSiswa = await getPageImage("M3-P4-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={8} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 3 &middot; Tahap 3 &middot; Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-white">Ayo Bereksplorasi</h1>
            </div>
            <p className="m-0 text-sm sm:text-base font-bold text-white/95">
              Temukan Hubungan Jaring-Jaring dengan Luas Permukaan
            </p>
            <p className="m-0 text-sm sm:text-[15px] leading-[1.6] text-white/90 max-w-xl">
              Sekarang saatnya mengumpulkan informasi untuk memeriksa dugaan kelompokmu. Gunakan
              GeoGebra 3D dan Augmented Reality (AR) untuk mengamati setiap sisi bangun ruang.
              Catat semua informasi penting yang kamu temukan sebagai bahan untuk tahap berikutnya.
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P4-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Tiga siswa berdiskusi mengamati bangun ruang di laptop dan tablet"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 h-32 sm:w-52 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-white/10"
          />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {alurEksplorasi.map((a, i) => (
            <div key={a.n} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1.5 min-w-[130px] max-w-[150px]">
                <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {a.n}
                </div>
                <p className="m-0 text-center text-xs font-bold text-[#111827]">{a.label}</p>
                <p className="m-0 text-center text-[11px] text-[#6B7280] leading-[1.4]">{a.desc}</p>
              </div>
              {i < alurEksplorasi.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
            <span className="text-sm font-bold text-[#111827]">Langkah Kegiatan</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {langkahKegiatan.map((l, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-sm font-bold text-[#111827]">Yang Diamati</span>
          </div>
          <p className="m-0 text-xs text-[#6B7280]">Perhatikan setiap informasi berikut selama kamu bereksplorasi.</p>
          <div className="flex flex-col gap-2">
            {yangDiamati.map((y) => (
              <div key={y} className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                </svg>
                <span className="text-sm text-[#374151]">{y}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          MULAI EKSPLORASI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
