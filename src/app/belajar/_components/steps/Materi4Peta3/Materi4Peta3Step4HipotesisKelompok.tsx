import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta3Step4HipotesisKelompok({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [geogebraArImage, limasImage] = await Promise.all([
    getPageImage("M4-P3-L2-2"),
    getPageImage("M4-P3-L4-1"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-4 text-sm font-bold text-[#2563EB]">
              Persamaan &amp; Perbedaan
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Rangkum hasil diskusimu.</p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="persamaan" className="text-sm font-bold text-[#16A34A]">
              Persamaan
            </label>
            <textarea
              id="persamaan"
              name="answers.persamaan"
              defaultValue={getValue("persamaan")}
              rows={3}
              placeholder="Jawabanmu..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="perbedaan" className="text-sm font-bold text-[#DC2626]">
              Perbedaan
            </label>
            <textarea
              id="perbedaan"
              name="answers.perbedaan"
              defaultValue={getValue("perbedaan")}
              rows={3}
              placeholder="Jawabanmu..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-4 text-sm font-bold text-[#16A34A]">
              Hipotesis Kelompok
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Setelah membandingkan dugaan, susun hipotesis kelompok yang akan dibuktikan pada Tahap 3
            menggunakan GeoGebra 3D dan Augmented Reality (AR).
          </p>
          <label htmlFor="hipotesis_kelompok" className="text-sm font-bold text-[#111827]">
            Hipotesis kami:
          </label>
          <textarea
            id="hipotesis_kelompok"
            name="answers.hipotesis_kelompok"
            defaultValue={getValue("hipotesis_kelompok")}
            rows={3}
            placeholder="Jawabanmu..."
            required
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
          <div className="relative rounded-2xl overflow-hidden bg-[#EFFDF4] w-full aspect-video mt-auto">
            <EditablePageImage
              imageKey="M4-P3-L2-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={geogebraArImage}
              alt="Ilustrasi laptop dan ponsel menampilkan GeoGebra 3D dan Augmented Reality"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-4 text-sm font-bold text-[#F97316]">
              Dugaan Hubungan
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Bagaimana menurut kelompokmu luas alas dan luas sisi-sisi tegak digunakan untuk menentukan
            luas permukaan limas? Jelaskan dugaanmu.
          </p>
          <textarea
            id="dugaan_hubungan"
            name="answers.dugaan_hubungan"
            defaultValue={getValue("dugaan_hubungan")}
            rows={3}
            placeholder="Jawabanmu..."
            required
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#F97316] focus:outline-none transition-colors resize-y"
          />
          <div className="relative rounded-2xl overflow-hidden bg-[#FFF7ED] w-full aspect-video mt-auto">
            <EditablePageImage
              imageKey="M4-P3-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={limasImage}
              alt="Ilustrasi bangun ruang limas"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
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
