import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import PhotoUpload from "@/components/PhotoUpload";

const jaringTema = [
  { badge: "bg-[#7C3AED]", text: "text-[#7C3AED]", ring: "border-[#DDD6FE]" },
  { badge: "bg-[#2563EB]", text: "text-[#2563EB]", ring: "border-[#BFDBFE]" },
  { badge: "bg-[#16A34A]", text: "text-[#16A34A]", ring: "border-[#BBF0D3]" },
  { badge: "bg-[#F97316]", text: "text-[#F97316]", ring: "border-[#FED7AA]" },
];

export default function Materi2Peta9Step2RancangJaring({
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
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Buat dan Tampilkan Idemu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tampilkan ide sebanyak-banyaknya. Kamu bebas menggunakan gambar, sketsa, atau simbol.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jaringTema.map((t, i) => {
            const n = i + 1;
            return (
              <div
                key={n}
                className={`bg-white border ${t.ring} rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-8 h-8 rounded-full ${t.badge} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                    {n}
                  </span>
                  <span className={`text-base font-extrabold ${t.text}`}>Jaring {n}</span>
                </div>

                <PhotoUpload
                  name={`answers.jaring_${n}_foto`}
                  label="Gambar / foto sketsa jaring-jaringmu"
                  defaultValue={getValue(`jaring_${n}_foto`)}
                  materi={materi}
                  peta={peta}
                />

                <textarea
                  name={`answers.jaring_${n}_sketsa`}
                  defaultValue={getValue(`jaring_${n}_sketsa`)}
                  rows={2}
                  placeholder="Atau jelaskan susunan persegi jaring-jaringmu..."
                  className="w-full rounded-xl border border-dashed border-[#D1D5DB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />

                <div className="flex items-center gap-2 text-sm font-semibold text-[#374151]">
                  <span className="mr-1">Valid?</span>
                  {["Ya", "Tidak"].map((o) => (
                    <label
                      key={o}
                      className="flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white py-1 px-3.5 cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB]"
                    >
                      <input
                        type="radio"
                        name={`answers.jaring_${n}_valid`}
                        value={o.toLowerCase()}
                        defaultChecked={getValue(`jaring_${n}_valid`) === o.toLowerCase()}
                        required
                        className="accent-[#2563EB]"
                      />
                      {o}
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor={`jaring${n}Alasan`} className="text-sm font-semibold text-[#111827]">
                    Alasan:
                  </label>
                  <textarea
                    id={`jaring${n}Alasan`}
                    name={`answers.jaring_${n}_alasan`}
                    defaultValue={getValue(`jaring_${n}_alasan`)}
                    rows={3}
                    required
                    placeholder="Mengapa jaring ini valid / tidak valid?"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-3">
          <label htmlFor="jaringLain" className="text-sm font-bold text-[#1E3A8A]">
            Adakah jaring-jaring lain yang berbeda dari keempat jaring di atas? Gambarkan dan
            jelaskan.
          </label>
          <PhotoUpload
            name="answers.jaring_lain_foto"
            label="Gambar jaring-jaring lain (opsional)"
            defaultValue={getValue("jaring_lain_foto")}
            materi={materi}
            peta={peta}
          />
          <textarea
            id="jaringLain"
            name="answers.jaring_lain"
            defaultValue={getValue("jaring_lain")}
            rows={3}
            placeholder="Jawabanmu (opsional)..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
