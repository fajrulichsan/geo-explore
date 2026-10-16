import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta3Step1Pengantar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambarHero = await getPageImage("M8-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_320px] gap-5 items-center">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg font-extrabold text-white">Pengantar</h2>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Diskusikan hasil pengamatan yang telah kamu lakukan pada Tahap 1 bersama teman sekelompokmu.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Bandingkan hasil perhitungan volume setiap bangun.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Jika terdapat perbedaan jawaban atau dugaan, jelaskan alasan berdasarkan hasil pengamatan yang telah dilakukan.
          </p>
        </div>
        <EditablePageImage
          imageKey="M8-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa berdiskusi di meja dengan bangun ruang dan tabel hasil pengamatan"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/2/8`} />
        <NextStepButton />
      </div>
    </form>
  );
}
