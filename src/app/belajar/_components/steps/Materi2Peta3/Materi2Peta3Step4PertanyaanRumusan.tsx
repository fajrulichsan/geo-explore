import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const opsiPertanyaan = [
  { key: "susunan_lipat", label: "Mengapa ada susunan bidang datar yang dapat dilipat menjadi bangun ruang?" },
  { key: "susunan_tidak_lipat", label: "Mengapa ada susunan bidang datar yang tidak dapat dilipat menjadi bangun ruang?" },
  { key: "lebih_dari_satu", label: "Mengapa satu bangun ruang dapat memiliki lebih dari satu jaring-jaring?" },
  { key: "enam_persegi", label: "Apakah semua susunan enam persegi dapat menjadi jaring kubus?" },
];

export default async function Materi2Peta3Step4PertanyaanRumusan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getBool = (key: string) => answers[key] === "on" || answers[key] === true;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Sekarang, mari kita merumuskan masalah dan membuat dugaan kelompok. Pertanyaan-pertanyaan
          ini akan kita buktikan pada tahap berikutnya!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Menyusun Pertanyaan Penyelidikan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Centang pertanyaan yang menurut kelompokmu paling ingin diketahui.
            </p>
            {opsiPertanyaan.map((o) => (
              <label
                key={o.key}
                className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.pertanyaan_${o.key}`}
                  defaultChecked={getBool(`pertanyaan_${o.key}`)}
                  data-require-group="pertanyaan-penyelidikan"
                  className="mt-0.5 accent-[#2563EB]"
                />
                <span className="text-sm font-semibold text-[#374151]">{o.label}</span>
              </label>
            ))}
            <div className="flex flex-col gap-1.5 pt-1">
              <label className="text-xs font-semibold text-[#6B7280]">Pertanyaan lain (opsional)</label>
              <input
                type="text"
                name="answers.pertanyaan_lain"
                defaultValue={getValue("pertanyaan_lain")}
                placeholder="Tuliskan pertanyaan lain jika ada..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Rumusan Masalah Kelompok
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Berdasarkan hasil diskusi kelompokmu, tuliskan satu rumusan masalah utama yang ingin
              diselesaikan melalui eksplorasi menggunakan GeoGebra 3D dan Augmented Reality.
            </p>
            <textarea
              name="answers.rumusan_masalah"
              defaultValue={getValue("rumusan_masalah")}
              rows={5}
              placeholder="Tuliskan rumusan masalah kelompokmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
            <div className="bg-[#EFF4FF] rounded-xl p-4">
              <p className="m-0 text-xs font-bold text-[#1D4ED8] mb-1">Contoh:</p>
              <p className="m-0 text-xs italic text-[#374151] leading-[1.6]">
                &ldquo;Bagaimana menentukan apakah suatu susunan bidang datar merupakan jaring-jaring
                yang valid?&rdquo;
              </p>
            </div>
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
