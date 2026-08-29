import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const checklist = [
  { key: "yakin_mengelompokkan_berbagai_sifat", text: "mengelompokkan bangun ruang berdasarkan berbagai sifat." },
  {
    key: "yakin_menjelaskan_alasan_matematis",
    text: "menjelaskan alasan matematis dari pengelompokan yang saya buat.",
  },
  { key: "yakin_mendiskusikan_strategi", text: "mendiskusikan strategi pengelompokan dengan teman." },
  {
    key: "yakin_menyampaikan_pendapat",
    text: "menyampaikan dan mempertahankan pendapat dengan alasan yang tepat.",
  },
  {
    key: "yakin_memperbaiki_jawaban",
    text: "memperbaiki jawaban apabila menemukan bukti atau alasan yang lebih kuat.",
  },
  {
    key: "yakin_menerapkan_cara_berpikir_baru",
    text: "menggunakan cara berpikir ini untuk mengelompokkan bangun ruang pada masalah yang berbeda.",
  },
];

export default function Peta8Step3KeyakinanDiriku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            3
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Keyakinan Diriku</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Centang setiap pernyataan yang sesuai dengan keyakinanmu saat ini.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB] w-fit">
          Saya yakin dapat ...
        </div>

        <div className="flex flex-col gap-3">
          {checklist.map((c) => (
            <label
              key={c.key}
              className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#2563EB] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${c.key}`}
                value="true"
                defaultChecked={getValue(c.key) === "true"}
                data-require-group="peta7step3"
                className="peer sr-only"
              />
              <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#374151] group-hover:text-[#2563EB] transition-colors">
                {c.text}
              </span>
            </label>
          ))}
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto jurnal refleksimu (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
