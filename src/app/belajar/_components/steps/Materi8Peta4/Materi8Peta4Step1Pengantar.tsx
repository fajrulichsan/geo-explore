import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta4Step1Pengantar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambar1 = await getPageImage("M8-P4-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
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

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_340px] gap-5 items-center">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <p className="m-0 text-xs font-bold tracking-[0.04em] text-[#FDE68A]">
            KUMPULKAN DATA PERUBAHAN FAKTOR SKALA DAN VOLUME BANGUN RUANG
          </p>
          <h2 className="m-0 text-lg font-extrabold text-white">Pengantar</h2>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Sekarang saatnya mengumpulkan data untuk menguji dugaan kelompokmu.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Gunakan GeoGebra 3D dan <span className="italic">Augmented Reality</span> (AR) untuk mengubah faktor skala pada kubus, balok, prisma, dan limas.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Amati perubahan ukuran setiap bangun, hitung volumenya, kemudian catat semua hasil pengamatan sebagai data yang akan digunakan pada tahap berikutnya untuk mengolah dan menguji dugaanmu.
          </p>
        </div>
        <EditablePageImage
            imageKey="M8-P4-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar1}
            alt="Tiga siswa bereksplorasi dengan GeoGebra 3D dan AR di meja berisi bangun ruang dan tabel pengamatan"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
          />
      </div>

      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl px-4 py-3.5">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
        </svg>
        <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
          <span className="font-bold">Ingat:</span> Faktor skala <span className="italic">k</span> = 2 berarti setiap ukuran panjang menjadi 2 kali semula.
        </p>
      </div>

      <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="m-0 px-4 pt-4 text-sm font-bold text-[#1E3A8A]">Tabel Pengamatan (Contoh untuk Kubus)</p>
        <table className="w-full min-w-[420px] border-collapse mt-3 text-center text-sm">
          <thead>
            <tr className="bg-[#2563EB] text-white text-xs sm:text-sm">
              <th className="p-3 font-bold">Faktor Skala (k)</th>
              <th className="p-3 font-bold">Ukuran Bangun (cm) (sisi)</th>
              <th className="p-3 font-bold">Volume (cm³)</th>
            </tr>
          </thead>
          <tbody className="text-[#374151]">
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">1/2</td><td className="p-2">1</td><td className="p-2">1³ = 1</td></tr>
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">1</td><td className="p-2">2 cm</td><td className="p-2">8 cm³</td></tr>
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">2</td><td className="p-2">4</td><td className="p-2">64</td></tr>
            <tr className="border-t border-[#DBEAFE]"><td className="p-2 font-bold">3</td><td className="p-2">6</td><td className="p-2">216</td></tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/3/9`}
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
