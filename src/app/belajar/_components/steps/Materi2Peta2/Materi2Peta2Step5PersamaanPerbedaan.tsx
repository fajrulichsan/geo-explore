import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const aspek = [
  { n: 1, label: "Jumlah Bidang Datar (Sisi)" },
  { n: 2, label: "Bentuk Bidang Datar" },
  { n: 3, label: "Hubungan Antar Bidang Datar" },
  { n: 4, label: "Perkiraan Hasil Saat Dilipat (Kemungkinan dapat dilipat)" },
];

export default async function Materi2Peta2Step5PersamaanPerbedaan({
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
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Cari Persamaan dan Perbedaan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            <p className="m-0 text-sm text-[#4B5563]">
              Lengkapi setiap aspek berikut berdasarkan pengamatanmu.
            </p>
            {aspek.map((a) => (
              <div key={a.n} className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {a.n}
                  </div>
                  <span className="text-sm font-bold text-[#111827]">{a.label}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-[38px]">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#16A34A]">Persamaan (Apa yang sama?)</label>
                    <input
                      type="text"
                      name={`answers.aspek_${a.n}_persamaan`}
                      defaultValue={getValue(`aspek_${a.n}_persamaan`)}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#DC2626]">Perbedaan (Apa yang berbeda?)</label>
                    <input
                      type="text"
                      name={`answers.aspek_${a.n}_perbedaan`}
                      defaultValue={getValue(`aspek_${a.n}_perbedaan`)}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-6">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Sementara
            </div>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-4">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Berdasarkan hasil pengamatanmu pada kedua halaman, menurutmu seperti apakah ciri-ciri
              susunan bidang datar yang dapat dilipat menjadi bangun ruang? Tuliskan dugaan
              sementaramu!
            </p>
            <textarea
              name="answers.dugaan_sementara"
              defaultValue={getValue("dugaan_sementara")}
              rows={6}
              placeholder="Ketik dugaan sementaramu di sini..."
              required
              className="w-full rounded-2xl border border-[#F5E3A0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
