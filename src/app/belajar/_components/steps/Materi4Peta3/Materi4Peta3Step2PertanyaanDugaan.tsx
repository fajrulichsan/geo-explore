import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  { key: "q1", label: "Bagian mana saja yang menurut kelompokmu harus dihitung untuk menentukan luas permukaan limas?" },
  { key: "q2", label: "Apakah luas alas cukup dihitung satu kali? Mengapa?" },
  { key: "q3", label: "Mengapa semua sisi tegak perlu diperhitungkan?" },
  { key: "q4", label: "Apakah luas permukaan limas dapat ditentukan dengan cara yang sama seperti prisma? Jelaskan dugaan kelompokmu." },
];

const textareaClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Materi4Peta3Step2PertanyaanDugaan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascot = await getPageImage("M4-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Halaman 1 dari 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Diskusi
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Diskusikan pertanyaan berikut bersama kelompokmu.</p>

          <div className="flex flex-col">
            {pertanyaan.map((p, i) => (
              <div key={p.key} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < pertanyaan.length - 1 && <div className="w-0.5 flex-1 bg-[#DBE4FF] my-1" />}
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pb-6">
                  <label htmlFor={p.key} className="text-sm font-bold text-[#111827] leading-[1.5]">
                    {p.label}
                  </label>
                  <textarea
                    id={p.key}
                    name={`answers.${p.key}`}
                    defaultValue={getValue(p.key)}
                    rows={3}
                    placeholder="Tuliskan jawaban kelompokmu..."
                    required
                    className={textareaClass}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Dugaan Kelompok
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 lg:sticky lg:top-6">
            <EditablePageImage
              imageKey="M4-P3-L1-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascot}
              alt="Tiga siswa berdiskusi di meja belajar"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[16/9]"
            />
            <p className="m-0 text-sm text-[#4B5563]">Lengkapi kalimat berikut.</p>
            <label htmlFor="dugaan_kelompok" className="text-sm font-bold text-[#111827]">
              Menurut kelompok kami, luas permukaan limas diperoleh dengan ....
            </label>
            <textarea
              id="dugaan_kelompok"
              name="answers.dugaan_kelompok"
              defaultValue={getValue("dugaan_kelompok")}
              rows={4}
              placeholder="Lanjutkan kalimat di atas..."
              required
              className={textareaClass}
            />
          </div>
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
