import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta4Step2EksplorasiGeoGebra3D({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const gambar1 = await getPageImage("M8-P4-L2-1");
  const gambar2 = await getPageImage("M8-P4-L2-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Bereksplorasi
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Eksplorasi Menggunakan GeoGebra 3D
        </div>
      </div>
      <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
        Ikuti langkah-langkah berikut untuk setiap bangun ruang (kubus, balok, prisma, dan limas).
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5">
        <div className="flex flex-col items-center self-start gap-3 bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-4">
          <p className="m-0 text-sm font-bold text-[#1E3A8A] text-center">Scan QR Code GeoGebra 3D</p>
          <EditablePageImage
            imageKey="M8-P4-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar1}
            alt="QR code untuk membuka GeoGebra 3D"
            editable={editFoto}
            natural
            containerClassName="relative w-32 overflow-hidden rounded-xl bg-white"
          />
          <span className="rounded-full bg-[#1E3A8A] text-white text-xs font-bold py-1.5 px-4">Buka GeoGebra 3D</span>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#DBEAFE] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="m-0 w-fit rounded-full bg-[#1E3A8A] text-white text-xs font-bold py-1.5 px-4">Langkah kegiatan</p>
        <ol className="m-0 p-0 list-none flex flex-col gap-3">
          <li className="flex items-start gap-3 text-sm text-[#1E3A8A] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
            <span>Buka model bangun ruang pada GeoGebra 3D.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1E3A8A] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
            <span>Pilih bangun ruang (kubus, balok, prisma, atau limas).</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1E3A8A] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
            <span>Ubah faktor skala (<span className="italic">k</span>) menggunakan slider: <span className="italic">k</span> = 1/2, 1, 2, 3.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1E3A8A] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
            <span>Amati perubahan ukuran (panjang rusuk, panjang, lebar, tinggi, atau ukuran alas sesuai bangunnya).</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1E3A8A] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
            <span>Hitung volume bangun.</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1E3A8A] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
            <span>Ulangi langkah 2–5 untuk keempat bangun ruang, lalu catat hasilnya pada tabel.</span>
          </li>
        </ol>
          <EditablePageImage
            imageKey="M8-P4-L2-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar2}
            alt="Tampilan GeoGebra 3D kubus dengan k = 2 dan volume 64"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[260px] overflow-hidden rounded-xl bg-white self-center"
          />
        </div>
      </div>

      <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="m-0 px-4 pt-4 text-sm font-bold text-[#1E3A8A]">Tabel Pengamatan GeoGebra (Contoh untuk Kubus)</p>
        <table className="w-full min-w-[420px] border-collapse mt-3 text-center text-sm">
          <thead>
            <tr className="bg-[#1E3A8A] text-white text-xs sm:text-sm">
              <th className="p-3 font-bold">Faktor Skala (k)</th>
              <th className="p-3 font-bold">Ukuran Bangun (cm) (sisi)</th>
              <th className="p-3 font-bold">Volume (cm³)</th>
            </tr>
          </thead>
          <tbody className="text-[#374151]">
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">1/2</td><td className="p-2">1</td><td className="p-2">1³ = 1</td></tr>
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">1</td><td className="p-2">2 cm</td><td className="p-2">8</td></tr>
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">2</td><td className="p-2">4</td><td className="p-2">64</td></tr>
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">3</td><td className="p-2">6</td><td className="p-2">216</td></tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-1.5 bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl px-5 py-4">
        <p className="m-0 text-sm font-bold text-[#92400E]">Catatan:</p>
        <ul className="m-0 pl-5 list-disc text-sm text-[#78350F] leading-[1.6] flex flex-col gap-1">
          <li>Nilai pada <span className="italic">k</span> = 1 digunakan sebagai volume awal.</li>
          <li>Tuliskan ukuran yang diamati sesuai jenis bangun ruang (misal: balok = p × l × t).</li>
          <li>Catat volume untuk setiap faktor skala dengan teliti.</li>
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/4/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
