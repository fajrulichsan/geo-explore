import Link from "next/link";
import Image from "next/image";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

const checklist = [
  { key: "yakin_luas_permukaan_kubus_balok_prisma", text: "menentukan luas permukaan kubus, balok, dan berbagai prisma." },
  { key: "yakin_menjelaskan_asal_rumus", text: "menjelaskan asal-usul rumus luas permukaan." },
  { key: "yakin_lebih_dari_satu_strategi", text: "menggunakan lebih dari satu strategi penyelesaian." },
  { key: "yakin_mempertahankan_alasan", text: "mempertahankan alasan matematis ketika berdiskusi." },
  { key: "yakin_memperbaiki_jawaban", text: "memperbaiki jawaban setelah memperoleh masukan." },
];

export default async function Materi3Peta8Step3KeyakinanDiriku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarMaskot = await getPageImage("M3-P8-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">C. Keyakinan Diriku</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Centang (✓) sesuai keyakinanmu saat ini.</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex-1 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB] w-fit">
            Saya yakin dapat ...
          </div>

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
                data-require-group="materi3peta8step3"
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

        <div className="w-full md:w-[140px] flex-shrink-0 flex md:flex-col items-center justify-center gap-3 bg-[#EFF4FF] border border-[#DBE4FF] rounded-[20px] p-5">
          <div className="relative w-20 h-28 flex-shrink-0">
            <Image src={gambarMaskot} alt="Maskot memberi jempol" fill className="object-contain" />
          </div>
          <p className="m-0 text-center text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
            Percaya pada kemampuanmu!
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto jurnal refleksimu (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
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
