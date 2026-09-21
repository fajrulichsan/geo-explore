import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tips = [
  "Pilih model bangun",
  "Ubah skala secara bertahap",
  "Ukur semua ukuran yang diminta",
  "Hitung luas permukaan",
  "Catat semua hasil dengan teliti",
  "Bandingkan hasil GeoGebra 3D dan AR",
];

export default async function Materi5Peta4Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambar = await getPageImage("M5-P4-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-5 sm:p-7 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center">
        <div className="flex flex-col gap-4 text-white">
          <span className="inline-flex w-fit bg-white/15 rounded-full py-1 px-3 text-xs font-bold">Tahap 3</span>
          <h2 className="m-0 text-xl sm:text-2xl font-extrabold leading-[1.3]">
            Kumpulkan Data Perubahan Skala dan Luas Permukaan
          </h2>
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 text-[#374151]">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
                <path d="M3 11v2a1 1 0 001 1h3l6 4V6L7 10H4a1 1 0 00-1 1zM17 9a4 4 0 010 6" />
              </svg>
              <span className="text-sm font-bold text-[#111827]">Pengantar</span>
            </div>
            <p className="m-0 text-sm leading-[1.6]">Sekarang saatnya menguji dugaan kelompokmu.</p>
            <p className="m-0 text-sm leading-[1.6]">
              Gunakan GeoGebra 3D dan Augmented Reality (AR) untuk mengubah faktor skala bangun ruang.
            </p>
            <p className="m-0 text-sm leading-[1.6]">
              Amati perubahan ukuran setiap sisi, hitung luas permukaan, lalu catat data yang digunakan untuk{" "}
              <strong className="text-[#2563EB]">menguji dugaanmu.</strong>
            </p>
          </div>
        </div>

        <EditablePageImage
          imageKey="M5-P4-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambar}
          alt="Tiga siswa mengamati bangun ruang pada laptop dan tablet sambil mengisi tabel pengamatan"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
        />
      </div>

      <div className="bg-[#FEF9E7] rounded-2xl py-4 px-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
          </svg>
          <span className="text-sm font-bold text-[#92400E]">Tips Eksplorasi</span>
        </div>
        <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {tips.map((t, i) => (
            <li key={t} className="flex items-center gap-2.5 text-xs text-[#78350F] leading-[1.5]">
              <span className="w-5 h-5 rounded-full bg-[#F59E0B] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center">
        
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
