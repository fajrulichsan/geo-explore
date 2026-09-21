import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const textareaClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Materi4Peta3Step5HipotesisKelompok({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const perangkat = await getPageImage("M4-P3-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Halaman 2 dari 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Persamaan dan Perbedaan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">Rangkum hasil diskusimu.</p>
            <div className="flex flex-col gap-2">
              <label htmlFor="persamaan" className="text-sm font-bold text-[#15803D]">
                Persamaan
              </label>
              <textarea
                id="persamaan"
                name="answers.persamaan"
                defaultValue={getValue("persamaan")}
                rows={4}
                placeholder="Tuliskan persamaan..."
                required
                className={textareaClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="perbedaan" className="text-sm font-bold text-[#DC2626]">
                Perbedaan
              </label>
              <textarea
                id="perbedaan"
                name="answers.perbedaan"
                defaultValue={getValue("perbedaan")}
                rows={4}
                placeholder="Tuliskan perbedaan..."
                required
                className={textareaClass}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#15803D] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#15803D]">
              Hipotesis Kelompok
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Setelah membandingkan dugaan, susun hipotesis kelompok yang akan dibuktikan pada Tahap 3
              menggunakan GeoGebra 3D dan Augmented Reality (AR).
            </p>
            <EditablePageImage
              imageKey="M4-P3-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={perangkat}
              alt="Laptop dan ponsel menampilkan limas pada GeoGebra 3D dan AR"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[16/9]"
            />
            <label htmlFor="hipotesis" className="text-sm font-bold text-[#15803D]">
              Hipotesis kami:
            </label>
            <textarea
              id="hipotesis"
              name="answers.hipotesis"
              defaultValue={getValue("hipotesis")}
              rows={4}
              placeholder="Tuliskan hipotesis kelompokmu..."
              required
              className={textareaClass}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#EA580C]">
            Dugaan Hubungan
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-5 sm:items-start">
          <div className="flex-1 flex flex-col gap-3">
            <label htmlFor="dugaan_hubungan" className="text-sm font-bold text-[#111827] leading-[1.5]">
              Bagaimana menurut kelompokmu luas alas dan luas sisi-sisi tegak digunakan untuk menentukan
              luas permukaan limas? Jelaskan dugaanmu.
            </label>
            <textarea
              id="dugaan_hubungan"
              name="answers.dugaan_hubungan"
              defaultValue={getValue("dugaan_hubungan")}
              rows={5}
              placeholder="Jelaskan dugaanmu..."
              required
              className={textareaClass}
            />
          </div>
          <svg width="120" height="120" viewBox="0 0 120 120" className="flex-shrink-0 self-center" aria-hidden="true">
            <polygon points="60,10 108,98 12,98" fill="#86C062" stroke="#3F6B22" strokeWidth="2.5" />
            <polygon points="60,10 108,98 78,104" fill="#6FAF4A" stroke="#3F6B22" strokeWidth="2.5" />
            <path d="M60 10 L60 98" stroke="#3F6B22" strokeWidth="2" strokeDasharray="5 4" />
          </svg>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
