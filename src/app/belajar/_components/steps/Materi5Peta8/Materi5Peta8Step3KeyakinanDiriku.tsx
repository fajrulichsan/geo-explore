import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const checklist = [
  { key: "yakin_tentukan_luas_setelah_skala", text: "menentukan luas permukaan bangun ruang setelah mengalami perubahan skala." },
  { key: "yakin_jelaskan_alasan_kuadrat_skala", text: "menjelaskan alasan mengapa luas berubah sebesar kuadrat faktor skala." },
  { key: "yakin_lebih_dari_satu_strategi", text: "menggunakan lebih dari satu strategi penyelesaian." },
  { key: "yakin_pertahankan_alasan_matematis", text: "mempertahankan alasan matematis ketika berdiskusi." },
  { key: "yakin_perbaiki_jawaban_temukan_kesalahan", text: "memperbaiki jawaban apabila menemukan kesalahan." },
];

export default function Materi5Peta8Step3KeyakinanDiriku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

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
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
              <path d="M6.5 15.5a3.5 3.5 0 010-7c.2-1.9 1.9-3.5 4-3.5 1.7 0 3.2 1 3.8 2.5.4-.2.8-.3 1.2-.3a3 3 0 013 3c0 .4-.1.8-.2 1.1a3.5 3.5 0 01-1.3 6.7" />
              <path d="M12 5v14M9 19h6" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">C. Keyakinan Diriku</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Centang (✓) sesuai keyakinanmu saat ini.</p>
      </div>

      <div className="flex flex-col gap-3">
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
              data-require-group="materi5peta8step3"
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
