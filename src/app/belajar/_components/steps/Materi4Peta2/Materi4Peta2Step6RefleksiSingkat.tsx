import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { n: 1, label: "Saya dapat membedakan alas dan sisi tegak pada berbagai limas." },
  { n: 2, label: "Saya memahami bahwa luas permukaan berkaitan dengan seluruh sisi." },
  { n: 3, label: "Saya menemukan hal yang ingin saya selidiki lebih lanjut tentang luas permukaan limas." },
] as const;

const opsi = [
  { value: "ya", label: "Ya" },
  { value: "ragu", label: "Ragu" },
  { value: "belum", label: "Belum" },
] as const;

export default async function Materi4Peta2Step6RefleksiSingkat({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M4-P2-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengamati dan Berpikir
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <p className="m-0 text-xs text-[#6B7280] -mt-2">
          Beri tanda centang sesuai dengan yang kamu rasakan.
        </p>

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
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFF6FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.refleksi_${p.n}`}
                      value={o.value}
                      defaultChecked={getValue(`refleksi_${p.n}`) === o.value}
                      required
                      className="accent-[#2563EB]"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-4 items-start">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M12 17.5a1 1 0 100-2 1 1 0 000 2z" />
            <path d="M6 9a6 6 0 1112 0c0 3-2.5 3.5-2.5 6h-7c0-2.5-2.5-3-2.5-6z" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
            <ul className="m-0 pl-4 flex flex-col gap-1">
              <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
                Pengamatan hari ini belum menghasilkan rumus.
              </li>
              <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
                Kamu baru mengumpulkan informasi yang akan digunakan untuk menjawab pertanyaan
                yang lebih mendalam pada tahap berikutnya.
              </li>
            </ul>
          </div>
        </div>
        <EditablePageImage
          imageKey="M4-P2-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa yang telah selesai mengamati bangun ruang limas"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full h-32 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
