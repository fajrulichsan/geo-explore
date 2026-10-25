import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkah = [
  "Scan QR Code.",
  "Pilih bangun ruang (Kubus, Balok, Prisma).",
  "Putar bangun ruang hingga dapat diamati dari berbagai arah.",
  "Buka menjadi jaring-jaring.",
  "Amati ukuran setiap sisi.",
  "Catat hasil pengamatan.",
];

export default async function Materi3Peta4Step1AyoBereksplorasi({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [gambarSiswa, gambarAlur, gambarLangkah] = await Promise.all([
    getPageImage("M3-P4-L1-1"),
    getPageImage("M3-P4-L1-2"),
    getPageImage("M3-P4-L1-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={8} />
        <div className="flex items-center gap-3.5 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
          <div className="basis-full"><span className="rounded-full bg-[#EFF4FF] text-[#2563EB] text-xs font-bold py-1 px-3">Tahap 3 dari 6</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 items-center bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-[24px] p-6 sm:p-8 text-white">
        <div className="flex flex-col gap-4">
          <p className="m-0 text-sm font-semibold text-white/80">Temukan Hubungan Jaring-Jaring dengan Luas Permukaan</p>
          <p className="m-0 text-xl sm:text-2xl font-extrabold leading-[1.3]">
            Sekarang saatnya mengumpulkan informasi untuk memeriksa dugaan kelompokmu.
          </p>
          <p className="m-0 text-sm leading-[1.7] text-white/90">
            Gunakan GeoGebra 3D dan Augmented Reality (AR) untuk mengamati setiap sisi bangun ruang.
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
          alt="Tiga siswa bereksplorasi dengan laptop GeoGebra 3D dan tablet AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-[18px] overflow-hidden bg-white"
        />
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB] bg-white">
        <EditablePageImage
          imageKey="M3-P4-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambarAlur}
          alt="Alur kegiatan: GeoGebra 3D, AR, lalu Catatan Hasil"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[20px] p-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center">
        <div>
        <p className="m-0 mb-4 text-base font-extrabold text-[#111827]">Langkah Kegiatan</p>
        <ol className="m-0 p-0 list-none flex flex-col gap-3">
          {langkah.map((l, i) => (
            <li key={l} className="flex items-start gap-3">
              <span className="w-[26px] h-[26px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-sm text-[#374151] leading-[1.6] pt-0.5">{l}</span>
            </li>
          ))}
        </ol>
        </div>
        <EditablePageImage
          imageKey="M3-P4-L1-3"
          materi={materi}
          peta={peta}
          step={step}
          urutan="3"
          src={gambarLangkah}
          alt="Kubus dibuka menjadi jaring-jaring"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
