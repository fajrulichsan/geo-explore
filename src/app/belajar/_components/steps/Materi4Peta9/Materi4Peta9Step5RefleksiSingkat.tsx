import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { n: 1, label: "Saya menemukan lebih dari satu cara untuk menyelesaikan masalah ini." },
  { n: 2, label: "Saya dapat menjelaskan alasan matematis dari setiap strategi yang saya gunakan." },
  { n: 3, label: "Saya dapat membandingkan strategi dan menentukan strategi yang paling efektif menurut saya." },
  { n: 4, label: "Saya percaya diri menjelaskan jawaban saya kepada teman atau guru." },
  { n: 5, label: "Saya memahami bahwa berbagai strategi dapat menghasilkan hasil yang sama jika didasarkan pada konsep yang benar." },
];

const opsi = [
  { value: "sangat_setuju", label: "Sangat Setuju" },
  { value: "setuju", label: "Setuju" },
  { value: "cukup_setuju", label: "Cukup Setuju" },
  { value: "belum_setuju", label: "Belum Setuju" },
];

const setelah = [
  "Periksa kembali jawaban dan alasanmu.",
  "Yakinlah bahwa setiap langkahmu logis dan jelas.",
  "Simpan hasil kerja terbaikmu.",
];

export default async function Materi4Peta9Step5RefleksiSingkat({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const siswaImage = await getPageImage("M4-P9-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#1E3A8A]">Tantangan Open-Ended</h1>
          <span className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1 px-3 text-xs font-bold">
            Submateri 4 · Halaman 2 dari 2
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">F</div>
          <div className="bg-white border border-[#DDD6FE] rounded-full py-2 px-5 text-sm font-bold text-[#6D28D9]">Refleksi Singkat</div>
          <p className="m-0 text-xs text-[#6B7280]">Berilah tanda centang (✓) pada kolom yang sesuai dengan pengalamanmu setelah menyelesaikan tantangan ini.</p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          {pernyataan.map((p) => (
            <div key={p.n} className="flex flex-col gap-3 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0">
              <p className="m-0 text-sm font-semibold text-[#374151]">
                {p.n}. {p.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {opsi.map((o) => (
                  <label
                    key={o.value}
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#F5F3FF] has-[:checked]:border-[#7C3AED] has-[:checked]:text-[#6D28D9] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.refleksi_${p.n}`}
                      value={o.value}
                      defaultChecked={getValue(`refleksi_${p.n}`) === o.value}
                      required
                      className="accent-[#7C3AED]"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <p className="m-0 text-base font-extrabold text-[#B45309]">🏆 Kamu Hebat!</p>
            <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
              Teruslah berpikir kreatif, kritis, dan percaya diri. Setiap strategi yang kamu gunakan adalah langkah menuju
              pemahaman yang lebih mendalam!
            </p>
          </div>
          <EditablePageImage
            imageKey="M4-P9-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={siswaImage}
            alt="Tiga siswa mengepalkan tangan tanda semangat"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[220px] flex-shrink-0"
          />
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#1E3A8A]">Setelah menyelesaikan halaman ini</p>
          <ul className="m-0 pl-4 flex flex-col gap-1">
            {setelah.map((t) => (
              <li key={t} className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 text-xs font-semibold text-[#78350F] leading-[1.6]">
        Setiap cara adalah berharga, setiap alasan membuatmu luar biasa! Selanjutnya, bacalah Rangkuman Submateri 4.
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
