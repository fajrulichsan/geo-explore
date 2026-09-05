import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pemandu = [
  "Mengapa luas alas dihitung satu kali?",
  "Mengapa luas seluruh sisi tegak harus dijumlahkan?",
  "Apa hubungan jaring-jaring limas dengan penjumlahan luas alas dan semua sisi tegaknya?",
];

export default async function Materi4Peta7Step4MengapaRumusBenar({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const diagramImage = await getPageImage("M4-P7-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Mengapa Rumus Itu Benar?</h2>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Jelaskan alasan matematis mengapa luas permukaan limas dapat dinyatakan dengan rumus LP =
          L&#8320; + L&#8347;.
        </p>

        <div className="grid sm:grid-cols-[minmax(0,180px)_1fr] gap-5 items-start">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#EFF4FF]">
            <EditablePageImage
              imageKey="M4-P7-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={diagramImage}
              alt="Diagram limas berubah menjadi jaring-jaring limas"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
              <p className="m-0 text-xs font-bold text-[#0284C7]">Pertanyaan pemandu</p>
              <ul className="m-0 pl-4 flex flex-col gap-1 list-disc">
                {pemandu.map((item) => (
                  <li key={item} className="text-xs text-[#374151]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              name="answers.alasan_matematis"
              defaultValue={getValue("alasan_matematis")}
              rows={6}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#0284C7] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex items-start gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M12 17.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM12 3a9 9 0 00-9 9c0 4.6 4 8.5 9 9 5-.5 9-4.4 9-9a9 9 0 00-9-9z" />
          </svg>
          <p className="m-0 text-xs text-[#1D4ED8] leading-[1.5]">
            <span className="font-bold">Ingat:</span> hanya ada satu alas, sedangkan limas memiliki
            beberapa sisi tegak yang semuanya merupakan bagian dari permukaan luar.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
