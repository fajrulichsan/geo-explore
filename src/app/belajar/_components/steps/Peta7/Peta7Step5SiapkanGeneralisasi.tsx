import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const checklist = [
  { key: "checklist_dasar_pengelompokan", label: "Dasar pengelompokan yang dapat digunakan" },
  {
    key: "checklist_alasan_lebih_dari_satu_kelompok",
    label: "Alasan mengapa satu bangun dapat masuk lebih dari satu kelompok",
  },
  { key: "checklist_syarat_klasifikasi_diterima", label: "Syarat agar klasifikasi dapat diterima" },
];

export default function Peta7Step5SiapkanGeneralisasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "on" || answers[key] === true;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Sekarang kamu telah memiliki bahan untuk menyusun generalisasi kelompok. Pada halaman
          berikutnya, bandingkan pemikiran anggota kelompok dan rumuskan kesimpulan akhir bersama.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          E
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Siapkan Generalisasi Kelompokmu
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 max-w-xl">
        <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-4">
          <div className="w-10 h-10 rounded-full bg-white text-[#111827] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <h2 className="m-0 text-base font-bold text-[#111827]">Hal yang perlu kami sepakati:</h2>
        </div>
        <div className="flex flex-col gap-3">
          {checklist.map((c) => (
            <label key={c.key} className="flex items-start gap-3 p-1 cursor-pointer">
              <input
                type="checkbox"
                name={`answers.${c.key}`}
                defaultChecked={isChecked(c.key)}
                data-require-group={c.key}
                required
                className="mt-1 w-4 h-4 accent-[#2563EB] flex-shrink-0"
              />
              <span className="text-sm text-[#374151]">{c.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE HALAMAN SELANJUTNYA
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
