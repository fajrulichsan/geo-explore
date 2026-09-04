import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaanYaBelum = [
  {
    key: "ukuran_sama",
    label: "Apakah kamu sudah menemukan sisi-sisi yang memiliki ukuran sama?",
    lanjutan: "Jika belum, bagian mana yang masih perlu dicari?",
  },
  {
    key: "ukuran_tercatat",
    label: "Apakah ukuran setiap sisi sudah tercatat?",
    lanjutan: "Jika belum, sisi mana yang belum diukur?",
  },
  {
    key: "luas_diperoleh",
    label: "Apakah luas setiap sisi sudah diperoleh?",
    lanjutan: "Jika belum, sisi mana yang belum dihitung luasnya?",
  },
];

export default async function Materi3Peta4Step6PeriksaKelengkapan({
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
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={8} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Periksa Kelengkapan Data
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut untuk memastikan datamu lengkap.</p>

        <div className="flex flex-col gap-4">
          {pertanyaanYaBelum.map((q, i) => (
            <div
              key={q.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 flex-1 text-[15px] font-bold text-[#111827] pt-0.5">{q.label}</p>
              </div>
              <div className="flex gap-3 pl-[46px]">
                {(["ya", "belum"] as const).map((v) => (
                  <label
                    key={v}
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-4 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.${q.key}`}
                      value={v}
                      defaultChecked={getValue(q.key) === v}
                      required
                      className="accent-[#2563EB]"
                    />
                    {v === "ya" ? "Ya" : "Belum"}
                  </label>
                ))}
              </div>
              <div className="pl-[46px]">
                <label htmlFor={`${q.key}_catatan`} className="text-xs text-[#6B7280] mb-1.5 block">
                  {q.lanjutan}
                </label>
                <input
                  id={`${q.key}_catatan`}
                  type="text"
                  name={`answers.${q.key}_catatan`}
                  defaultValue={getValue(`${q.key}_catatan`)}
                  placeholder="Tulis di sini bila ada (kosongkan bila sudah lengkap)..."
                  className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                />
              </div>
            </div>
          ))}

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                4
              </div>
              <label htmlFor="info_lengkapi" className="flex-1 text-[15px] font-bold text-[#111827] pt-0.5">
                Informasi apa yang masih perlu kamu lengkapi sebelum mengolah data?
              </label>
            </div>
            <textarea
              id="info_lengkapi"
              name="answers.info_lengkapi"
              defaultValue={getValue("info_lengkapi")}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
