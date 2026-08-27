import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const checklist = [
  { key: "paham_cara_mengelompokkan", text: "Saya dapat menjelaskan berbagai cara mengelompokkan bangun ruang sisi datar." },
  { key: "paham_alasan_matematis", text: "Saya dapat memberikan alasan matematis terhadap hasil klasifikasi yang saya buat." },
  {
    key: "paham_hubungan_dasar_kelompok",
    text: "Saya memahami hubungan antara dasar pengelompokan dengan kelompok bangun ruang yang terbentuk.",
  },
  {
    key: "paham_syarat_diterima",
    text: "Saya dapat menjelaskan syarat agar suatu cara pengelompokan bangun ruang dapat diterima.",
  },
  { key: "paham_gunakan_data", text: "Saya menggunakan data hasil pengamatan untuk mendukung alasan saya." },
  {
    key: "paham_bandingkan_strategi",
    text: "Saya membandingkan strategi saya dengan strategi teman dan memilih alasan yang lebih kuat.",
  },
  {
    key: "paham_transfer_cara_berpikir",
    text: "Saya dapat menggunakan cara berpikir ini pada masalah atau situasi yang berbeda.",
  },
];

export default function Peta7Step1RefleksiPemahaman({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            1
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Refleksi Pemahaman</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Centang setiap pernyataan yang sesuai dengan pemahamanmu setelah belajar hari ini.
        </p>
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
              data-require-group="peta7step1"
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

      <div className="relative bg-[#EFF4FF] border border-[#DBE4FF] rounded-[20px] py-5 px-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.6]">
          Semakin banyak yang kamu pahami, semakin kuat kemampuan matematikmu!
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto jurnal refleksimu (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-end">
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
