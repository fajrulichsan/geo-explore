import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { label: "GeoGebra 3D", desc: "Amati perubahan limas menjadi jaring-jaring secara interaktif.", color: "#2563EB" },
  { label: "Augmented Reality (AR)", desc: "Amati ukuran yang diperlukan pada model limas secara nyata.", color: "#16A34A" },
  { label: "Catatan Hasil", desc: "Tuliskan semua informasi penting yang kamu temukan.", color: "#7C3AED" },
];

export default async function Materi4Peta4Step1AyoBereksplorasi({
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
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 3
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center rounded-[28px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-9">
        <div className="flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-white">Ayo Bereksplorasi</h1>
          <p className="m-0 text-sm sm:text-base font-bold text-white/95">
            Temukan Hubungan Jaring-Jaring dengan Luas Permukaan Limas
          </p>
          <p className="m-0 text-sm sm:text-[15px] leading-[1.7] text-white/90">
            Sekarang saatnya mengumpulkan bukti untuk memeriksa dugaan kelompokmu. Gunakan GeoGebra 3D dan Augmented
            Reality (AR) untuk mengamati limas dari berbagai sudut pandang. Bukalah limas menjadi jaring-jaring, amati
            setiap sisinya, lalu catat informasi yang kamu temukan sebagai bekal menentukan cara memperoleh luas
            permukaan limas.
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
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {alur.map((a, i) => (
          <div key={a.label} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-2">
            <div
              className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm"
              style={{ backgroundColor: a.color }}
            >
              {i + 1}
            </div>
            <span className="text-sm font-bold" style={{ color: a.color }}>
              {a.label}
            </span>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">{a.desc}</p>
          </div>
        ))}
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
