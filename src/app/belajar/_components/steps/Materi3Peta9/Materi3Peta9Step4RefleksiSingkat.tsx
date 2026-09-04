import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "lebih_dari_satu_cara", label: "Saya menemukan lebih dari satu cara menghitung luas permukaan." },
  { key: "alasan_matematis", label: "Saya dapat menjelaskan alasan matematis dari strategi yang saya gunakan." },
  { key: "membandingkan_strategi", label: "Saya membandingkan beberapa strategi sebelum memilih yang paling efektif." },
  { key: "percaya_diri", label: "Saya percaya diri menjelaskan jawaban saya kepada teman." },
];

const ingat = [
  "Open-Ended berarti membuka kesempatan munculnya berbagai strategi.",
  "Yang dinilai bukan hanya hasil akhir, tetapi juga cara berpikir,",
  "alasan matematis, kemampuan membandingkan strategi,",
  "dan kemampuan memperbaiki penyelesaian.",
];

export default async function Materi3Peta9Step4RefleksiSingkat({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const girlImage = await getPageImage("M3-P9-L4-1");
  const trophyImage = await getPageImage("M3-P9-L4-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
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
          <p className="m-0 text-xs text-[#6B7280]">Centang sesuai dengan pengalamanmu.</p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-start gap-5">
          <div className="flex-1 flex flex-col gap-3">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#16A34A] has-[:checked]:bg-[#EFFDF4] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${p.key}`}
                  value="ya"
                  defaultChecked={getValue(`refleksi_${p.key}`) === "ya"}
                  required
                  data-require-group={`refleksi_${p.key}`}
                  className="mt-0.5 w-4 h-4 accent-[#16A34A] flex-shrink-0"
                />
                <span className="text-sm text-[#374151] leading-[1.5]">{p.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M3-P9-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={girlImage}
            alt="Siswa memberi jempol setelah refleksi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 sm:w-32 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFFDF4] hidden sm:block"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FEF2F2] border border-[#FBCACA] rounded-2xl p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M3-P9-L4-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={trophyImage}
            alt="Siswa bersemangat merayakan usahanya"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#DC2626]">Semangat!</p>
            <p className="m-0 text-xs font-semibold text-[#991B1B] leading-[1.5]">
              Setiap strategi yang kamu temukan merupakan hasil proses berpikir matematis.
              Teruslah berpikir kreatif, berikan alasan matematis, dan jangan ragu membandingkan
              berbagai strategi untuk menemukan penyelesaian yang paling tepat.
            </p>
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M11 15h2v2h-2zM11 7h2v6h-2z" />
            <path d="M12 2l10 18H2z" />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
            <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.5]">
              {ingat.join(" ")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M3 11l18-7-7 18-3-8-8-3z" />
        </svg>
        <p className="m-0 text-xs font-semibold text-[#1E3A8A] leading-[1.6]">
          Hebat! Kamu telah mencoba berbagai strategi untuk menentukan luas permukaan.
          Selanjutnya, bacalah Rangkuman Submateri 3 untuk memperkuat konsep-konsep penting yang
          telah kamu temukan.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
