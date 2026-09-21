import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const fields = [
  { key: "cara", label: "Cara yang saya gunakan", rows: 3 },
  { key: "perhitungan", label: "Perhitungan", rows: 5 },
  { key: "alasan", label: "Mengapa strategi ini benar?", rows: 3 },
] as const;

const ingat = [
  "Gunakan berbagai cara berpikir untuk menemukan jawaban.",
  "Tuliskan alasan matematis yang mendukung setiap strategi.",
  "Bandingkan strategi yang kamu gunakan.",
  "Jangan ragu memperbaiki atau mengubah strategi jika perlu.",
];

export default async function Materi4Peta9Step2TampilkanStrategi({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const semangatImage = await getPageImage("M4-P9-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#1E3A8A]">Tantangan Open-Ended</h1>
          <span className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1 px-3 text-xs font-bold">
            Submateri 4 · Halaman 1 dari 2
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">B</div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">Tampilkan Strategimu</div>
          <p className="m-0 text-xs text-[#6B7280]">Tuliskan dan jelaskan strategi yang kamu gunakan!</p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[1, 2].map((n) => (
              <div key={n} className="rounded-2xl border border-[#BFDBFE] overflow-hidden flex flex-col">
                <p className="m-0 bg-[#EFF4FF] py-2.5 text-center text-sm font-bold text-[#1E3A8A]">Strategi {n}</p>
                <div className="p-4 flex flex-col gap-4">
                  {fields.map((f, i) => (
                    <div key={f.key} className="flex flex-col gap-1.5">
                      <label htmlFor={`s${n}${f.key}`} className="text-xs font-bold text-[#1E3A8A]">
                        {i + 1}. {f.label}
                      </label>
                      <textarea
                        id={`s${n}${f.key}`}
                        name={`answers.strategi_${n}_${f.key}`}
                        defaultValue={getValue(`strategi_${n}_${f.key}`)}
                        rows={f.rows}
                        required
                        placeholder="Jawabanmu..."
                        className="w-full rounded-xl border border-[#D1D5DB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl border border-[#BFDBFE] p-4">
            <label htmlFor="strategiLain" className="text-xs font-bold text-[#1E3A8A]">
              Strategi lain (jika ada)
            </label>
            <textarea
              id="strategiLain"
              name="answers.strategi_lain"
              defaultValue={getValue("strategi_lain")}
              rows={3}
              placeholder="Jawabanmu (opsional)..."
              className="w-full rounded-xl border border-[#D1D5DB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#92400E]">⭐ Ingat!</p>
          <ul className="m-0 pl-4 flex flex-col gap-1">
            {ingat.map((t) => (
              <li key={t} className="text-xs font-semibold text-[#78350F] leading-[1.5]">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <p className="m-0 text-base font-extrabold text-[#BE185D]">Semangat!</p>
            <p className="m-0 text-xs font-semibold text-[#831843] leading-[1.6]">
              Setiap cara yang kamu gunakan adalah langkah berharga untuk menjadi pemikir matematis yang hebat!
            </p>
          </div>
          <EditablePageImage
            imageKey="M4-P9-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={semangatImage}
            alt="Siswa laki-laki mengepalkan tangan memberi semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 flex-shrink-0"
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
