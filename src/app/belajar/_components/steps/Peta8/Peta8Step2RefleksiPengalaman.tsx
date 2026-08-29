import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const fields = [
  {
    key: "pemahaman_hari_ini",
    label: "Hari ini saya memahami bahwa ...",
    placeholder: "Tulis pemahamanmu di sini...",
  },
  {
    key: "kegiatan_paling_membantu",
    label: "Kegiatan yang paling membantuku belajar adalah ... karena ...",
    placeholder: "Ceritakan kegiatan tersebut...",
  },
  {
    key: "ingin_tahu_lebih_lanjut",
    label: "Saya masih ingin mengetahui lebih banyak tentang ...",
    placeholder: "Apa yang ingin kamu pelajari lebih lanjut?",
  },
];

export default function Peta8Step2RefleksiPengalaman({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            2
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Refleksi Pengalaman Belajar</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Tuliskan pengalaman belajarmu hari ini dengan jujur dan terbuka.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {fields.map((f) => (
          <div
            key={f.key}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <label className="text-sm font-bold text-[#111827]">{f.label}</label>
            <textarea
              name={`answers.${f.key}`}
              defaultValue={getValue(f.key)}
              rows={3}
              placeholder={f.placeholder}
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>
        ))}

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
          href={`/belajar/${materi}/${peta}/1`}
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
