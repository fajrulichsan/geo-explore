import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { value: "membedakan", label: "Saya dapat membedakan perubahan ukuran panjang dan perubahan volume." },
  { value: "menemukan", label: "Saya mulai menemukan hubungan antara faktor skala dan volume." },
  { value: "membuktikan", label: "Saya masih ingin membuktikan dugaan saya." },
];

export default async function Materi8Peta2Step8RefleksiSingkat({
  materi,
  peta,
  step = "8",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarSiswa = await getPageImage("M8-P2-L8-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={8} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-5 items-center">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang (✓) sesuai kondisi dirimu.</p>
            {refleksi.map((r) => (
              <label key={r.value} className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
                <input
                  type="checkbox"
                  name={`answers.refleksi_${r.value}`}
                  value="ya"
                  defaultChecked={getValue(`refleksi_${r.value}`) === "ya"}
                  className="mt-0.5 accent-[#2563EB]"
                />
                {r.label}
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M8-P2-L8-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Siswa laki-laki mengacungkan jempol"
            editable={editFoto}
            containerClassName="relative w-28 h-40 sm:w-full sm:h-52 mx-auto overflow-hidden"
            imageClassName="object-contain"
          />
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-6 sm:px-9 flex flex-col gap-1.5">
          <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
          <h2 className="relative m-0 text-lg font-extrabold text-white">Motivasi</h2>
          <p className="relative m-0 text-sm text-white/90 leading-[1.6]">
            Dugaanmu sudah sangat baik! Pada tahap selanjutnya, kamu akan terus menguji dan membuktikan dugaanmu hingga eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR) bersama teman sekelompokmu.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/7`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
