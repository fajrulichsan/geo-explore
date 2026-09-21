import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const yakin = [
  { key: "yakin_tentukan_valid", text: "menentukan jaring-jaring yang valid." },
  { key: "yakin_lebih_dari_satu", text: "menemukan lebih dari satu jaring-jaring untuk bangun ruang yang sama." },
  { key: "yakin_alasan_matematis", text: "menjelaskan alasan matematis untuk mendukung jawaban saya." },
  { key: "yakin_diskusi", text: "berdiskusi dan mempertahankan pendapat menggunakan alasan matematika." },
  { key: "yakin_perbaiki_jawaban", text: "memperbaiki jawaban apabila menemukan bukti yang lebih baik." },
];

export default async function Materi2Peta8Step3KeyakinanDiriku({ materi, peta, step = "3", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const anak = await getPageImage("M2-P8-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#1E3A8A]">
          Keyakinan Diriku
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-[20px] p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full flex flex-col gap-3">
          <p className="m-0 text-sm text-[#1E3A8A]">
            Berilah tanda centang (✓) pada pernyataan berikut. <strong>Saya yakin dapat...</strong>
          </p>
          {yakin.map((c) => (
            <label
              key={c.key}
              className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl py-3 px-4 cursor-pointer hover:border-[#2563EB] has-[:checked]:border-[#2563EB] transition-colors"
            >
              <input type="checkbox" name={`answers.${c.key}`} value="true" defaultChecked={getValue(c.key) === "true"} className="peer sr-only" />
              <span className="w-5 h-5 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
            </label>
          ))}
        </div>
        <EditablePageImage
          imageKey="M2-P8-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={anak}
          alt="Siswa mengacungkan jempol dengan bintang di gelembung pikiran"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-36 h-44 md:w-44 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden bg-white"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
