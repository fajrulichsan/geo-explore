import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alurKonsep = [
  { icon: "🧊", label: "Bangun Ruang" },
  { icon: "✚", label: "Jaring-jaring (representasi)" },
  { icon: "📏", label: "Hitung luas setiap sisi" },
  { icon: "∑", label: "Jumlahkan luas seluruh sisi" },
  { icon: "🎯", label: "Luas Permukaan" },
];

export default async function Materi3Peta10Step1HeroKonsepDasar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const heroImage = await getPageImage("M3-P10-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Kubus, Balok, dan Prisma
        </h1>
      </div>

      <div className="rounded-[20px] bg-[#FEF9E7] border border-[#F5E6A8] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#FACC15] flex items-center justify-center text-xl flex-shrink-0">
              📖
            </div>
            <h2 className="m-0 text-lg font-extrabold text-[#1E3A8A]">Apa yang telah kamu pelajari?</h2>
          </div>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Pada submateri ini kamu telah menemukan bahwa luas permukaan suatu bangun ruang
            diperoleh dari menjumlahkan luas seluruh sisi yang membatasi bangun tersebut.
          </p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Melalui pengamatan jaring-jaring, eksplorasi menggunakan GeoGebra 3D dan Augmented
            Reality (AR), diskusi, serta verifikasi, kamu menyusun sendiri cara menentukan luas
            permukaan kubus, balok, dan prisma.
          </p>
          <div className="bg-white border border-[#F5E6A8] rounded-2xl px-4 py-3 flex items-start gap-3">
            <span className="text-lg flex-shrink-0">⭐</span>
            <p className="m-0 text-sm text-[#1E3A8A]">
              <span className="font-extrabold">Inti pembelajaran:</span> luas permukaan suatu bangun
              ruang diperoleh dengan menjumlahkan luas{" "}
              <span className="font-extrabold">seluruh sisi yang membatasi bangun tersebut.</span>
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M3-P10-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa mempresentasikan luas permukaan bangun ruang menggunakan GeoGebra 3D dan AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Konsep Dasar — Hubungan Jaring-Jaring dengan Luas Permukaan
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-center gap-3">
            {alurKonsep.map((a, i) => (
              <div key={a.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-2 w-24 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] flex items-center justify-center text-2xl font-bold">
                    {a.icon}
                  </div>
                  <p className="m-0 text-[11px] font-semibold text-[#374151] leading-[1.3]">{a.label}</p>
                </div>
                {i < alurKonsep.length - 1 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0 hidden sm:block">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#2563EB] rounded-[20px] p-5 flex flex-col gap-2 lg:w-64 justify-center">
            <p className="m-0 text-sm font-extrabold text-white flex items-center gap-2">
              <span>⭐</span> Inti Konsep
            </p>
            <p className="m-0 text-sm text-white/95 leading-[1.6] font-semibold">
              Luas permukaan adalah jumlah luas seluruh sisi bangun ruang.
            </p>
          </div>
        </div>
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
