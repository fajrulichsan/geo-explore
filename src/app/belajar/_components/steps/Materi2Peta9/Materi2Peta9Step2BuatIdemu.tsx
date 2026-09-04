import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import PhotoUpload from "@/components/PhotoUpload";

const jaringColors = [
  { badge: "bg-[#7C3AED]", chip: "bg-[#F5F3FF] text-[#7C3AED]" },
  { badge: "bg-[#2563EB]", chip: "bg-[#EFF4FF] text-[#2563EB]" },
  { badge: "bg-[#16A34A]", chip: "bg-[#EFFDF4] text-[#16A34A]" },
  { badge: "bg-[#D97706]", chip: "bg-[#FFF7ED] text-[#D97706]" },
];

export default function Materi2Peta9Step2BuatIdemu({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Buat dan Tampilkan Idemu
          </div>
          <p className="m-0 text-xs text-[#6B7280]">
            Tampilkan ide sebanyak-banyaknya. Kamu bebas menggunakan gambar, sketsa, atau simbol.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n, i) => {
            const c = jaringColors[i];
            return (
              <div
                key={n}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full ${c.badge} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                    {n}
                  </span>
                  <span className="text-sm font-bold text-[#111827]">Jaring {n}</span>
                </div>

                <textarea
                  name={`answers.jaring_${n}_sketsa`}
                  defaultValue={getValue(`jaring_${n}_sketsa`)}
                  rows={4}
                  required
                  placeholder="Jelaskan susunan/sketsa jaring-jaringmu di sini..."
                  className="w-full rounded-xl border border-dashed border-[#D1D5DB] bg-[#F9FAFB] p-3 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />

                <PhotoUpload
                  name={`answers.jaring_${n}_foto`}
                  label="Foto sketsa (opsional)"
                  defaultValue={getValue(`jaring_${n}_foto`)}
                  materi={materi}
                  peta={peta}
                />

                <div className="flex items-center gap-4 text-xs font-semibold text-[#374151]">
                  <span>Valid?</span>
                  {["Ya", "Tidak"].map((o) => (
                    <label key={o} className={`flex items-center gap-1.5 rounded-full py-1 px-3 cursor-pointer ${c.chip} has-[:checked]:ring-2 has-[:checked]:ring-offset-1`}>
                      <input
                        type="radio"
                        name={`answers.jaring_${n}_valid`}
                        value={o.toLowerCase()}
                        defaultChecked={getValue(`jaring_${n}_valid`) === o.toLowerCase()}
                        required
                        className="accent-current"
                      />
                      {o}
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor={`jaring${n}Alasan`} className="text-xs font-semibold text-[#111827]">
                    Alasan:
                  </label>
                  <textarea
                    id={`jaring${n}Alasan`}
                    name={`answers.jaring_${n}_alasan`}
                    defaultValue={getValue(`jaring_${n}_alasan`)}
                    rows={2}
                    required
                    placeholder="Alasanmu..."
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <label htmlFor="jaringLain" className="text-sm font-bold text-[#111827]">
            Adakah jaring-jaring lain yang berbeda dari keempat jaring di atas? Gambarkan dan
            jelaskan.
          </label>
          <textarea
            id="jaringLain"
            name="answers.jaring_lain"
            defaultValue={getValue("jaring_lain")}
            rows={3}
            placeholder="Jawabanmu (opsional)..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
