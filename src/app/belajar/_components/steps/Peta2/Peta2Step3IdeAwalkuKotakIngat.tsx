import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const cara = [
  { n: 1, badge: "bg-[#2563EB]", border: "border-[#DBE5FB]" },
  { n: 2, badge: "bg-[#16A34A]", border: "border-[#CDEBD5]" },
];

const ingat = [
  "Setiap orang dapat memiliki cara pengelompokan yang berbeda.",
  "Yang terpenting, setiap pendapat disertai alasan yang logis.",
  "Ide-ide yang kamu tulis akan membantu saat berdiskusi bersama temanmu.",
];

const fieldClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Peta2Step3IdeAwalkuKotakIngat({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M1-P2-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Langkah 1.3 Ide Awalmu
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Tuliskan paling sedikit dua cara berbeda yang menurutmu dapat digunakan untuk mengelompokkan benda-benda
          pada halaman sebelumnya beserta alasannya.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cara.map((c) => (
            <div
              key={c.n}
              className={`bg-white border ${c.border} rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4`}
            >
              <span className={`${c.badge} text-white rounded-full py-1 px-4 text-xs font-bold w-fit`}>Cara {c.n}</span>
              <div className="flex flex-col gap-1.5">
                <label htmlFor={`cara_${c.n}_dasar`} className="text-[13px] font-bold text-[#111827]">
                  Dasar pengelompokan (atau kriteria)
                </label>
                <input
                  id={`cara_${c.n}_dasar`}
                  name={`answers.cara_${c.n}_dasar`}
                  defaultValue={getValue(`cara_${c.n}_dasar`)}
                  placeholder="Tuliskan kriterianya..."
                  required
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor={`cara_${c.n}_anggota`} className="text-[13px] font-bold text-[#111827]">
                  Anggota kelompok (benda yang termasuk)
                </label>
                <textarea
                  id={`cara_${c.n}_anggota`}
                  name={`answers.cara_${c.n}_anggota`}
                  defaultValue={getValue(`cara_${c.n}_anggota`)}
                  rows={2}
                  placeholder="Sebutkan benda-benda dalam kelompok..."
                  required
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor={`cara_${c.n}_alasan`} className="text-[13px] font-bold text-[#111827]">
                  Alasan
                </label>
                <textarea
                  id={`cara_${c.n}_alasan`}
                  name={`answers.cara_${c.n}_alasan`}
                  defaultValue={getValue(`cara_${c.n}_alasan`)}
                  rows={2}
                  placeholder="Mengapa benda-benda itu kamu kelompokkan demikian?"
                  required
                  className={fieldClass}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kotak Ingat
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-center gap-5">
          <ul className="m-0 p-0 list-none flex flex-col gap-3 flex-1">
            {ingat.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#374151]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-1 flex-shrink-0">
                  <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <EditablePageImage
            imageKey="M1-P2-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Siswi berhijab menunjuk ke atas"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 bg-white rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
