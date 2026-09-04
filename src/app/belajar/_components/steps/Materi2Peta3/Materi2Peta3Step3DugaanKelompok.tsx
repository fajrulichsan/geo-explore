import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi2Peta3Step3DugaanKelompok({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [gambarGeoGebra, gambarAR] = await Promise.all([
    getPageImage("M2-P1-L2-2"),
    getPageImage("M2-P1-L2-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Kelompok
            </div>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-4">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Berdasarkan hasil diskusi, tuliskan dugaan kelompokmu.
            </p>
            <div className="flex items-start gap-2">
              <span className="text-sm font-semibold text-[#374151] pt-3">&ldquo;Menurut kelompok kami, suatu susunan bidang datar dapat menjadi jaring-jaring apabila</span>
            </div>
            <textarea
              name="answers.dugaan_kelompok"
              defaultValue={getValue("dugaan_kelompok")}
              rows={5}
              placeholder="Ketik dugaan kelompokmu di sini..."
              required
              className="w-full rounded-2xl border border-[#F5E3A0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-6">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kotak Ingat
            </div>
          </div>
          <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-6 flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.6] text-[#5B21B6]">
              Tidak semua kelompok harus memiliki dugaan yang sama. Yang terpenting adalah dugaan
              tersebut memiliki alasan yang logis berdasarkan hasil pengamatan.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#16A34A] to-[#15803D] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <div className="w-[34px] h-[34px] rounded-full bg-white text-[#16A34A] flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Menuju Tahap Berikutnya
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90 mb-5">
          Hasil diskusi ini akan diuji menggunakan GeoGebra 3D dan Augmented Reality pada tahap
          berikutnya.
        </p>
        <div className="relative grid grid-cols-2 gap-3 max-w-sm">
          <EditablePageImage
            imageKey="M2-P1-L2-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarGeoGebra}
            alt="Ilustrasi GeoGebra 3D"
            editable={editFoto}
            containerClassName="relative w-full aspect-video rounded-xl overflow-hidden bg-white/10"
          />
          <EditablePageImage
            imageKey="M2-P1-L2-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarAR}
            alt="Ilustrasi Augmented Reality"
            editable={editFoto}
            containerClassName="relative w-full aspect-video rounded-xl overflow-hidden bg-white/10"
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
