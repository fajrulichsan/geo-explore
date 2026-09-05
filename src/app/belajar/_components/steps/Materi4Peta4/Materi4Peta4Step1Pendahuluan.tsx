import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alurEksplorasi = [
  { n: 1, label: "GeoGebra 3D", desc: "Amati perubahan limas menjadi jaring-jaring secara interaktif." },
  { n: 2, label: "Augmented Reality (AR)", desc: "Amati ukuran yang diperlukan pada model limas secara nyata." },
  { n: 3, label: "Catatan Hasil", desc: "Tuliskan semua informasi penting yang kamu temukan." },
];

export default async function Materi4Peta4Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambarSiswa = await getPageImage("M4-P4-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 4 &middot; Tahap 3 &middot; Ayo Bereksplorasi
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
              Temukan Hubungan Jaring-Jaring dengan Luas Permukaan Limas
            </p>
            <p className="m-0 text-sm sm:text-[15px] leading-[1.6] text-white/90 max-w-xl">
              Sekarang saatnya mengumpulkan bukti untuk memeriksa dugaan kelompokmu. Gunakan
              GeoGebra 3D dan Augmented Reality (AR) untuk mengamati limas dari berbagai sudut
              pandang. Bukalah limas menjadi jaring-jaring, amati setiap sisinya, lalu catat
              informasi yang kamu temukan sebagai bekal menentukan cara memperoleh luas permukaan
              limas.
            </p>
          </div>
          <EditablePageImage
            imageKey="M4-P4-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Tiga siswa berdiskusi mengamati limas di laptop dan tablet"
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
              <div className="flex flex-col items-center gap-1.5 min-w-[130px] max-w-[160px]">
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
