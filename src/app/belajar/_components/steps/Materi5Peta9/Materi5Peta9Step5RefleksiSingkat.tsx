import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "lebih_dari_satu_strategi", label: "Saya menemukan lebih dari satu strategi." },
  { key: "alasan_matematis", label: "Saya dapat menjelaskan alasan matematis." },
  { key: "membandingkan_strategi", label: "Saya dapat membandingkan strategi penyelesaian." },
  { key: "konsep_situasi_baru", label: "Saya dapat menggunakan konsep skala pada situasi baru." },
  { key: "percaya_diri", label: "Saya percaya diri menjelaskan jawaban saya kepada teman." },
];

const intiOpenEnded = [
  "menggunakan berbagai strategi;",
  "memberikan alasan matematis;",
  "membandingkan efektivitas strategi;",
  "memperbaiki strategi apabila diperlukan;",
  "menerapkan konsep pada situasi baru.",
];

export default async function Materi5Peta9Step5RefleksiSingkat({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [celebrateImage, kreatifImage] = await Promise.all([
    getPageImage("M5-P9-L5-1"),
    getPageImage("M5-P9-L5-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Singkat
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Centang (✓) semua pernyataan yang sesuai dengan pengalamanmu saat menyelesaikan
              Tantangan Open-Ended.
            </p>
            <div className="flex flex-col gap-2.5">
              {pernyataan.map((p) => (
                <label
                  key={p.key}
                  className="flex items-start gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-2.5 px-3.5 text-sm font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFFDF4] has-[:checked]:border-[#16A34A] transition-colors"
                >
                  <input
                    type="checkbox"
                    name={`answers.refleksi_${p.key}`}
                    value="ya"
                    defaultChecked={getValue(`refleksi_${p.key}`) === "ya"}
                    className="mt-0.5 accent-[#16A34A]"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </div>
          <EditablePageImage
            imageKey="M5-P9-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={celebrateImage}
            alt="Dua siswa mengepalkan tangan merayakan keberhasilan"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[280px] mx-auto md:mx-0 flex-shrink-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#C2410C]">Teruslah berpikir kreatif!</p>
            <p className="m-0 text-xs font-semibold text-[#9A3412] leading-[1.6]">
              Dalam matematika, satu masalah dapat diselesaikan dengan berbagai strategi yang
              sama-sama benar apabila didukung oleh alasan matematis yang logis.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P9-L5-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={kreatifImage}
            alt="Siswi menunjuk ke atas dengan lampu ide"
            editable={editFoto}
            natural
            containerClassName="relative w-24 sm:w-28 flex-shrink-0 rounded-xl overflow-hidden"
          />
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#1E3A8A]">Inti Open-Ended</p>
          <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
            Open-Ended bukan sekadar mencari jawaban. Yang paling penting adalah:
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-1">
            {intiOpenEnded.map((t) => (
              <li key={t} className="flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" className="flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
