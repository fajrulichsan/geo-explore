import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const sikap = [
  { key: "sikap_dengar", text: "mendengarkan pendapat teman." },
  { key: "sikap_hargai", text: "menghargai perbedaan jawaban." },
  { key: "sikap_perbaiki", text: "mau memperbaiki jawaban." },
  { key: "sikap_berusaha", text: "tetap berusaha ketika mengalami kesulitan." },
  { key: "sikap_berani", text: "berani menyampaikan pendapat." },
];

export default async function Materi2Peta8Step3SikapTarget({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const teamworkImage = await getPageImage("M2-P8-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Refleksi Sikap</p>
          </div>
          <div className="inline-flex items-center bg-[#F0FDFA] text-[#0D9488] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Selama pembelajaran saya...
          </div>

          <div className="flex flex-col gap-2.5">
            {sikap.map((c) => (
              <label
                key={c.key}
                className="group flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-3 px-4 cursor-pointer hover:border-[#0D9488] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  className="peer sr-only"
                />
                <span className="w-5 h-5 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#0D9488] peer-checked:border-[#0D9488] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
              </label>
            ))}
          </div>

          <EditablePageImage
            imageKey="M2-P8-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={teamworkImage}
            alt="Ilustrasi siswa berdiskusi"
            editable={editFoto}
            imageClassName="object-cover"
            containerClassName="relative w-full h-28 rounded-2xl overflow-hidden bg-[#F0FDFA]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                F
              </div>
              <p className="m-0 text-sm font-bold text-[#111827]">Target Belajar Berikutnya</p>
            </div>
            <label htmlFor="p8-target" className="text-sm font-semibold text-[#111827]">
              Tuliskan satu targetmu pada pembelajaran berikutnya.
            </label>
            <textarea
              id="p8-target"
              name="answers.target_berikutnya"
              defaultValue={getValue("target_berikutnya")}
              rows={3}
              placeholder="Pada materi berikutnya saya ingin..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DB2777] focus:outline-none transition-colors"
            />
          </div>

          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#FFF7E6] to-[#FDE68A]/50 border border-[#FDE68A] p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2">
                <path d="M12 2l2.6 5.4 6 .8-4.3 4.1 1 5.9-5.3-2.8-5.3 2.8 1-5.9-4.3-4.1 6-.8z" />
              </svg>
            </div>
            <div>
              <p className="m-0 text-sm font-extrabold text-[#92400E] mb-1">Kotak Motivasi — Hebat!</p>
              <p className="m-0 text-xs leading-[1.6] text-[#78350F]">
                Kemampuan matematika berkembang bukan karena selalu langsung benar, tetapi karena mau
                berpikir, mencoba, memeriksa kembali, dan memperbaiki jawaban berdasarkan alasan yang
                logis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TANTANGAN OPEN-ENDED
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
