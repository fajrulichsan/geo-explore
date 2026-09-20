import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta2Step6RefleksiPertanyaan({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => Boolean(answers[key]);

  const [gambarMaskotPerempuan, gambarPertanyaan, gambarMaskotLaki] = await Promise.all([
    getPageImage("M7-P2-L6-1"),
    getPageImage("M7-P2-L6-2"),
    getPageImage("M7-P2-L6-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
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
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Singkat
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563]">
          Centang (✓) sesuai dengan pemahaman dan pengalamanmu pada Tahap 1 ini.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-5 items-end">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {[
              { key: "refleksi_1", label: "Saya dapat mengamati bahwa ketiga limas memiliki bentuk dan ukuran yang sama." },
              { key: "refleksi_2", label: "Saya dapat mengamati bahwa ketiga limas mempunyai luas alas yang sama." },
              { key: "refleksi_3", label: "Saya dapat mengamati bahwa ketiga limas mempunyai tinggi yang sama." },
              { key: "refleksi_4", label: "Saya dapat mengamati bahwa satu atau dua kali penuangan belum memenuhi prisma." },
              { key: "refleksi_5", label: "Saya dapat menjelaskan alasan awal dari dugaan tersebut." },
            ].map((r) => (
              <label key={r.key} className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" name={`answers.${r.key}`} defaultChecked={getChecked(r.key)} className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]" />
                <span className="text-sm text-[#374151] leading-[1.5]">{r.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P2-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMaskotPerempuan}
            alt="Maskot siswa perempuan menunjuk ke atas: Setiap langkah pengamatan hari ini membawa kita lebih memahami hubungan volume!"
            editable={editFoto}
            containerClassName="relative w-36 h-44 sm:w-full sm:h-56 mx-auto"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-4">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Pertanyaan untuk Kita Selidiki</h2>
        </div>
        <div className="relative bg-white rounded-2xl p-3 sm:p-4">
          <EditablePageImage
            imageKey="M7-P2-L6-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarPertanyaan}
            alt="Tiga limas identik dibandingkan dengan satu prisma dengan tanda tanya"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-20 overflow-hidden"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <p className="m-0 flex-1 text-sm text-white/90 leading-[1.6]">
            Jika luas alas dan tinggi serta prisma sama, bagaimana hubungan volume satu limas dengan
            volume satu prisma? <span className="font-bold text-white">Simpan dugaanmu, kita akan mengujinya pada Tahap 2!</span>
          </p>
          <EditablePageImage
            imageKey="M7-P2-L6-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarMaskotLaki}
            alt="Maskot siswa laki-laki tersenyum menunjuk ke atas"
            editable={editFoto}
            containerClassName="relative w-24 h-28 sm:w-32 sm:h-40 rounded-2xl overflow-hidden bg-white flex-shrink-0"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
