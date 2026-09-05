import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const perhitungan = [
  { key: "luas_alas", label: "Luas alas (persegi)", formula: "= ....... × .......", hasil: "= ........................... cm²" },
  { key: "luas_sisi_tegak", label: "Luas satu sisi tegak (segitiga)", formula: "= ½ × ....... × .......", hasil: "= ........................... cm²" },
  { key: "luas_seluruh_sisi_tegak", label: "Luas seluruh sisi tegak (4 sisi)", formula: "= ....... × ...................", hasil: "= ........................... cm²" },
  { key: "luas_permukaan_limas", label: "Luas permukaan limas (LP)", formula: "= Lₐ + Lₛ", hasil: "= ........................... + ...........................\n= ........................... cm²" },
];

export default async function Materi4Peta7Step3ContohPenerapan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const limasImage = await getPageImage("M4-P7-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Contoh Penerapan</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Sebuah limas segiempat memiliki alas berbentuk persegi dengan sisi 8 cm. Setiap sisi
            tegaknya berbentuk segitiga sama kaki dengan alas 8 cm dan tinggi sisi tegak 10 cm.
          </p>

          <div className="grid sm:grid-cols-[minmax(0,180px)_1fr] gap-5 items-start">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#EFF4FF]">
              <EditablePageImage
                imageKey="M4-P7-L3-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={limasImage}
                alt="Limas segiempat dengan sisi alas 8 cm dan tinggi sisi tegak 10 cm"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-3">
              <p className="m-0 text-sm font-bold text-[#111827]">Lengkapi perhitungan berikut.</p>
              {perhitungan.map((p, i) => (
                <div key={p.key} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3.5 flex flex-col gap-1.5">
                  <label htmlFor={p.key} className="text-xs font-bold text-[#0284C7]">
                    {i + 1}. {p.label}
                  </label>
                  <p className="m-0 text-xs text-[#6B7280] whitespace-pre-line">{p.formula}</p>
                  <textarea
                    id={p.key}
                    name={`answers.${p.key}`}
                    defaultValue={getValue(p.key)}
                    rows={p.hasil.includes("\n") ? 2 : 1}
                    required
                    placeholder={p.hasil}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#0284C7] focus:outline-none transition-colors resize-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Temuan Utama</h2>
          </div>
          <label htmlFor="temuan_utama" className="text-sm text-[#4B5563]">
            Berdasarkan kegiatan yang telah kamu lakukan, tuliskan temuan utama tentang cara
            menentukan luas permukaan limas.
          </label>
          <textarea
            id="temuan_utama"
            name="answers.temuan_utama"
            defaultValue={getValue("temuan_utama")}
            rows={8}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
