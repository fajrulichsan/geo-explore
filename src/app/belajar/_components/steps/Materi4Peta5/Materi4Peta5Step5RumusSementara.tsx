import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta5Step5RumusSementara({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const limasImage = await getPageImage("M4-P5-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Berdasarkan strategi dan pola yang kamu temukan, tuliskan rumus sementara luas permukaan
          limas dalam bentuk kalimat.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Rumus Sementara</h2>
          </div>

          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
            <label htmlFor="rumus_sementara" className="text-sm font-semibold text-[#111827]">
              Rumus sementara luas permukaan limas
            </label>
            <textarea
              id="rumus_sementara"
              name="answers.rumus_sementara"
              defaultValue={getValue("rumus_sementara")}
              rows={4}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-4 flex flex-col gap-2">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#EA580C]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16.5v.01" />
              </svg>
              Pertanyaan
            </p>
            <label htmlFor="berlaku_semua_limas" className="text-sm text-[#374151]">
              Apakah menurutmu cara tersebut berlaku untuk semua jenis limas? Jelaskan alasanmu
              berdasarkan hasil pengamatan dan keterkaitan yang kamu temukan.
            </label>
            <textarea
              id="berlaku_semua_limas"
              name="answers.berlaku_semua_limas"
              defaultValue={getValue("berlaku_semua_limas")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#FED7AA] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#111827]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              Catatan
            </p>
            <p className="m-0 text-xs leading-[1.7] text-[#4B5563]">
              Tuliskan dalam bentuk kalimat terlebih dahulu, belum menggunakan simbol matematika.
            </p>
          </div>

          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 text-xs leading-[1.7] text-[#2563EB] font-semibold">
              Bagaimana hubungan antara luas alas, seluruh sisi tegak, dan luas permukaan limas
              menurutmu?
            </p>
            <div className="relative w-full h-32 rounded-xl overflow-hidden bg-white">
              <EditablePageImage
                imageKey="M4-P5-L5-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={limasImage}
                alt="Ilustrasi limas segiempat"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
            <p className="m-0 text-xs text-center text-[#2563EB] font-semibold">
              Tuliskan rumus sementaramu pada kolom di samping.
            </p>
          </div>
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
