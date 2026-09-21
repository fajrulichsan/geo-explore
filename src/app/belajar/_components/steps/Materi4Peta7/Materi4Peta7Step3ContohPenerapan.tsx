import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

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
        <StepHeader materi={materi} currentStep={3} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

<div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Contoh Penerapan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Sebuah limas segiempat memiliki alas berbentuk persegi dengan sisi 8 cm. Setiap sisi tegaknya berbentuk segitiga sama kaki dengan alas 8 cm dan tinggi sisi tegak 10 cm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-4">
          <EditablePageImage
            imageKey="M4-P7-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={limasImage}
            alt="Limas segiempat dengan alas 8 cm dan tinggi sisi tegak 10 cm"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#E5E7EB]"
          />
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-4">
            <p className="m-0 text-sm font-bold text-[#111827]">Lengkapi perhitungan berikut.</p>
            <div className="flex flex-col gap-1.5">
              <p className="m-0 text-sm font-semibold text-[#374151]">1. Luas alas (persegi)</p>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.luas_alas_sisi1"
            defaultValue={getValue("luas_alas_sisi1")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-20 text-center"
          /> × <input
            type="text"
            name="answers.luas_alas_sisi2"
            defaultValue={getValue("luas_alas_sisi2")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-20 text-center"
          /></div>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.luas_alas_hasil"
            defaultValue={getValue("luas_alas_hasil")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-28 text-center"
          /> cm²</div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="m-0 text-sm font-semibold text-[#374151]">2. Luas satu sisi tegak (segitiga)</p>
              <div className="flex items-center gap-2 flex-wrap">= ½ × <input
            type="text"
            name="answers.segitiga_alas"
            defaultValue={getValue("segitiga_alas")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-20 text-center"
          /> × <input
            type="text"
            name="answers.segitiga_tinggi"
            defaultValue={getValue("segitiga_tinggi")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-20 text-center"
          /></div>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.segitiga_hasil"
            defaultValue={getValue("segitiga_hasil")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-28 text-center"
          /> cm²</div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="m-0 text-sm font-semibold text-[#374151]">3. Luas seluruh sisi tegak (4 sisi)</p>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.seluruh_banyak"
            defaultValue={getValue("seluruh_banyak")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-20 text-center"
          /> × <input
            type="text"
            name="answers.seluruh_luas"
            defaultValue={getValue("seluruh_luas")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-20 text-center"
          /></div>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.seluruh_hasil"
            defaultValue={getValue("seluruh_hasil")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-28 text-center"
          /> cm²</div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="m-0 text-sm font-semibold text-[#374151]">4. Luas permukaan limas (LP)</p>
              <div className="flex items-center gap-2 flex-wrap">= L<sub>a</sub> + L<sub>s</sub></div>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.lp_alas"
            defaultValue={getValue("lp_alas")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-24 text-center"
          /> + <input
            type="text"
            name="answers.lp_tegak"
            defaultValue={getValue("lp_tegak")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-24 text-center"
          /></div>
              <div className="flex items-center gap-2 flex-wrap">= <input
            type="text"
            name="answers.lp_hasil"
            defaultValue={getValue("lp_hasil")}
            required
            placeholder="..."
            className="rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors w-28 text-center"
          /> cm²</div>
            </div>
          </div>
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
