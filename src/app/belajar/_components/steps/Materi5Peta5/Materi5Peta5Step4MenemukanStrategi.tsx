import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { n: 1, label: "Cari Pola" },
  { n: 2, label: "Susun Strategi" },
  { n: 3, label: "Hubungan Matematika" },
];

export default async function Materi5Peta5Step4MenemukanStrategi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const studentsImage = await getPageImage("M5-P5-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Susun strategi untuk menjelaskan hubungan antara faktor skala dan luas.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4">
        {alur.map((a, i) => (
          <div key={a.n} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                  a.n === 2 ? "bg-[#16A34A] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
                }`}
              >
                {a.n}
              </div>
              <span className={`text-sm font-bold ${a.n === 2 ? "text-[#16A34A]" : "text-[#6B7280]"}`}>
                {a.label}
              </span>
            </div>
            {i < alur.length - 1 && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Menemukan Strategi</h2>
        </div>
        <p className="m-0 text-sm text-[#374151]">
          Tuliskan dua cara menjelaskan hubungan antara faktor skala dan luas.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {(["1", "2"] as const).map((n) => (
            <div key={n} className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-4 flex flex-col gap-2">
              <p className="m-0 inline-flex items-center gap-2 bg-[#DB2777] text-white text-xs font-bold rounded-full px-3 py-1.5 w-fit">
                Strategi {n}
              </p>
              <textarea
                name={`answers.strategi_${n}`}
                defaultValue={getValue(`strategi_${n}`)}
                rows={4}
                required={n === "1"}
                placeholder="Ketik di sini..."
                className="w-full rounded-lg border border-[#FBCFE8] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DB2777] focus:outline-none transition-colors resize-y"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#374151]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M6 21h12M8 21V9a4 4 0 118 0v12M6 9h12" />
            </svg>
            Bandingkan
          </p>
          <label htmlFor="strategi_mudah" className="text-xs text-[#4B5563]">
            Strategi mana yang menurut kelompokmu paling mudah dipahami? Mengapa?
          </label>
          <textarea
            id="strategi_mudah"
            name="answers.strategi_mudah"
            defaultValue={getValue("strategi_mudah")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DB2777] focus:outline-none transition-colors resize-y"
          />
          <div className="relative w-full h-28 mt-1 rounded-xl overflow-hidden bg-[#EFF4FF]">
            <EditablePageImage
              imageKey="M5-P5-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={studentsImage}
              alt="Tiga siswa membandingkan strategi"
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
