import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta5Step1Pengantar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [gambarHero, gambarAlur] = await Promise.all([
    getPageImage("M8-P5-L1-1"),
    getPageImage("M8-P5-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengolah Informasi
          </h1>
        </div>
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
        <EditablePageImage
          imageKey="M8-P5-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa mengolah data di depan laptop dengan buku Kubus, Balok, Prisma, dan Limas"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg font-extrabold text-white">Pengantar</h2>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">Sekarang kamu akan mengolah informasi yang telah dikumpulkan. Gunakan pola, data, atau grafik yang kamu temukan untuk menyusun strategi dan membuat hubungan matematis sementara antara faktor skala dan perubahan volume.</p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">Kelompokkan hasil pengamatanmu, bandingkan perubahan ukuran dan volume, kemudian temukan pola hubungan antara faktor skala dan perubahan volume.</p>
          <div className="rounded-xl bg-white/15 px-4 py-3 text-sm text-white leading-[1.55]">
            <span className="font-bold">Ingat:</span> Kita belum menggunakan rumus. Kamu akan menemukan pola berdasarkan data.
          </div>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="m-0 text-xs font-extrabold tracking-[0.04em] uppercase text-[#92400E]">Alur Tahap 4</h3>
        <EditablePageImage
          imageKey="M8-P5-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambarAlur}
          alt="Alur Tahap 4: Kelompokkan Data, Bandingkan Perubahan, Cari Pola"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/4/9`} />
        <NextStepButton />
      </div>
    </form>
  );
}
