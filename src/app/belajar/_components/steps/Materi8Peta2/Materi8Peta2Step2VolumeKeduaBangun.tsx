import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta2Step2VolumeKeduaBangun({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarKubus = await getPageImage("M8-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />
      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Perhatikan Volume Kedua Bangun
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <EditablePageImage
            imageKey="M8-P2-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarKubus}
            alt="Kubus kecil dan kubus besar hasil skala k = 2"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-xl mx-auto overflow-hidden"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "volume_kubus_kecil", judul: "Kubus kecil" },
              { name: "volume_kubus_besar", judul: "Kubus besar (hasil skala k = 2)" },
            ].map((v) => (
              <div key={v.name} className="flex flex-col gap-2 rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] p-4">
                <label htmlFor={v.name} className="text-sm font-bold text-[#1E3A8A]">
                  {v.judul}
                </label>
                <div className="flex items-center gap-2 text-sm text-[#374151]">
                  Volume =
                  <input
                    id={v.name}
                    name={`answers.${v.name}`}
                    defaultValue={getValue(v.name)}
                    inputMode="decimal"
                    required
                    className="w-24 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                  />
                  cm³
                </div>
                <span className="text-xs text-[#6B7280]">(hitunglah sendiri)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
            </svg>
            <h3 className="m-0 text-base font-extrabold text-[#92400E]">Pertanyaan</h3>
          </div>
          <label htmlFor="volume_sama_panjang" className="text-sm font-semibold text-[#111827] leading-[1.6]">
            Menurutmu, apakah perubahan volume sama dengan perubahan ukuran panjang setiap bangun? Jelaskan dugaanmu.
          </label>
          <textarea
            id="volume_sama_panjang"
            name="answers.volume_sama_panjang"
            defaultValue={getValue("volume_sama_panjang")}
            rows={3}
            placeholder="Ketik dugaanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y bg-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
