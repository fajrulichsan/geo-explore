import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const rows = [
  { key: "langkah", label: "Langkah penyelesaian", highlight: false },
  { key: "konsep", label: "Konsep yang digunakan", highlight: false },
  { key: "perhitungan", label: "Perhitungan", highlight: false },
  { key: "alasan", label: "Alasan matematis", highlight: true },
  { key: "kelebihan", label: "Kelebihan", highlight: false },
  { key: "kekurangan", label: "Kekurangan", highlight: false },
] as const;

export default async function Materi5Peta9Step3BandingkanStrategi({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const bannerImage = await getPageImage("M5-P9-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Terbuka
        </h1>
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
        <EditablePageImage
          imageKey="M5-P9-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={bannerImage}
          alt="Tiga siswa berdiskusi menyelesaikan tantangan terbuka dengan bangun ruang di meja"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Strategimu
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Lengkapilah tabel berikut untuk membandingkan Strategi 1 dan Strategi 2 yang kamu
            gunakan.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#BFDBFE]">
            <div className="min-w-[560px] grid grid-cols-[150px_1fr_1fr]">
              <div className="bg-[#1E3A8A] text-white text-xs font-bold p-3">Hal yang Dibandingkan</div>
              <div className="bg-[#1E3A8A] text-white text-xs font-bold p-3 border-l border-white/20">Strategi 1</div>
              <div className="bg-[#1E3A8A] text-white text-xs font-bold p-3 border-l border-white/20">Strategi 2</div>
              {rows.map((r) => (
                <div key={r.key} className="contents">
                  <div
                    className={`p-3 text-xs font-semibold border-t border-[#BFDBFE] bg-[#F9FAFB] ${
                      r.highlight ? "text-[#2563EB] font-bold" : "text-[#374151]"
                    }`}
                  >
                    {r.label}
                  </div>
                  {[1, 2].map((n) => (
                    <div key={n} className="p-2 border-t border-l border-[#BFDBFE]">
                      <textarea
                        aria-label={`${r.label} strategi ${n}`}
                        name={`answers.banding_${r.key}_${n}`}
                        defaultValue={getValue(`banding_${r.key}_${n}`)}
                        rows={2}
                        required
                        className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2 text-xs text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#2563EB" className="flex-shrink-0">
              <path d="M4 3h16a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4v-4a2 2 0 01-2-2V5a2 2 0 012-2z" />
              <circle cx="8" cy="10" r="1.2" fill="#fff" />
              <circle cx="12" cy="10" r="1.2" fill="#fff" />
              <circle cx="16" cy="10" r="1.2" fill="#fff" />
            </svg>
            <label htmlFor="strategiEfisien" className="text-sm font-bold text-[#1E3A8A]">
              Strategi mana yang menurutmu lebih efisien?
            </label>
          </div>
          <textarea
            id="strategiEfisien"
            name="answers.strategi_efisien"
            defaultValue={getValue("strategi_efisien")}
            rows={2}
            required
            placeholder="Strategi 1 / Strategi 2..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
          <label htmlFor="alasanEfisien" className="text-sm font-bold text-[#1E3A8A]">
            Mengapa?
          </label>
          <textarea
            id="alasanEfisien"
            name="answers.alasan_efisien"
            defaultValue={getValue("alasan_efisien")}
            rows={4}
            required
            placeholder="Jelaskan alasanmu..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
