import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  {
    n: 1,
    key: "final_bangun_lebih_dari_satu_cara",
    label: "Pertanyaan Pertama",
    text: "Apakah satu bangun ruang dapat dikelompokkan dengan lebih dari satu cara? Jelaskan.",
    placeholder: "Tuliskan jawaban diskusi kelompokmu di sini...",
    span: "md:col-span-2",
  },
  {
    n: 2,
    key: "final_pengaruh_dasar_pengelompokan",
    label: "Pertanyaan Kedua",
    text: "Bagaimana dasar pengelompokan memengaruhi kelompok bangun ruang yang terbentuk?",
    placeholder: "Tuliskan analisis kelompokmu di sini...",
    span: "",
  },
  {
    n: 3,
    key: "final_syarat_cara_pengelompokan_diterima",
    label: "Pertanyaan Ketiga",
    text: "Apa syarat agar suatu cara pengelompokan bangun ruang dapat diterima?",
    placeholder: "Tuliskan kesimpulan kelompokmu di sini...",
    span: "",
  },
];

export default function Peta7Step9PertanyaanGeneralisasiFinal({
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
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Diskusikan bersama kelompokmu. Gunakan data dan hasil verifikasi untuk menjawab.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          I
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Pertanyaan Generalisasi
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pertanyaan.map((p) => (
          <div
            key={p.n}
            className={`${p.span} bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                {p.n}
              </div>
              <span className="text-sm font-bold text-[#2563EB]">{p.label}</span>
            </div>
            <p className="m-0 text-sm text-[#374151]">{p.text}</p>
            <textarea
              name={`answers.${p.key}`}
              defaultValue={getValue(p.key)}
              rows={4}
              placeholder={p.placeholder}
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/8`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
