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
  const gambarLimas = await getPageImage("M4-P5-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          E
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#EA580C]">Rumus Sementara</span>
          <span className="text-xs text-[#6B7280]">
            Berdasarkan strategi dan pola yang kamu temukan, tuliskan rumus sementara luas permukaan limas dalam bentuk
            kalimat.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
        <div className="flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#EA580C] transition-colors">
            <label htmlFor="rumus_sementara" className="text-sm font-bold text-[#111827]">
              Rumus sementaraku
            </label>
            <textarea
              id="rumus_sementara"
              name="answers.rumus_sementara"
              defaultValue={getValue("rumus_sementara")}
              rows={4}
              placeholder="Tuliskan rumus sementara dalam bentuk kalimat..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-1.5">
            <span className="text-sm font-extrabold text-[#D97706]">Catatan</span>
            <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
              Tuliskan dalam bentuk kalimat terlebih dahulu, belum menggunakan simbol matematika.
            </p>
          </div>

          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#EA580C] transition-colors">
            <label htmlFor="berlaku_semua" className="flex items-start gap-3 text-sm font-bold text-[#7C2D12] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs flex-shrink-0">
                ?
              </span>
              Apakah menurutmu cara tersebut berlaku untuk semua jenis limas? Jelaskan alasanmu berdasarkan hasil
              pengamatan dan keterkaitan awal yang kamu temukan.
            </label>
            <textarea
              id="berlaku_semua"
              name="answers.berlaku_semua"
              defaultValue={getValue("berlaku_semua")}
              rows={3}
              placeholder="Tulis jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#FED7AA] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5">
          <p className="m-0 text-sm font-semibold text-[#2563EB] text-center leading-[1.5]">
            Bagaimana hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas menurutmu?
          </p>
          <EditablePageImage
            imageKey="M4-P5-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarLimas}
            alt="Limas segiempat dengan alas dan sisi tegak berwarna hijau"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[220px] rounded-2xl overflow-hidden bg-white"
          />
          <p className="m-0 text-xs text-[#2563EB] text-center">Tuliskan rumus sementaramu pada kolom di samping.</p>
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
