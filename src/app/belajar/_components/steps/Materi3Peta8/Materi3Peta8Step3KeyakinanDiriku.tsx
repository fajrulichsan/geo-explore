import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const checklist = [
  { key: "yakin_luas_permukaan_kubus_balok_prisma", text: "Saya yakin dapat menentukan luas permukaan kubus, balok, dan berbagai prisma." },
  { key: "yakin_menjelaskan_asal_rumus", text: "Saya yakin dapat menjelaskan asal-usul rumus luas permukaan." },
  { key: "yakin_lebih_dari_satu_strategi", text: "Saya yakin dapat menggunakan lebih dari satu strategi penyelesaian." },
  { key: "yakin_mempertahankan_alasan", text: "Saya yakin dapat mempertahankan alasan matematis ketika berdiskusi." },
  { key: "yakin_memperbaiki_jawaban", text: "Saya yakin dapat memperbaiki jawaban setelah memperoleh masukan." },
];

export default async function Materi3Peta8Step3KeyakinanDiriku({ materi, peta, step = "3", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarMaskot = await getPageImage("M3-P8-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-3">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <p className="m-0 text-[15px] font-semibold text-[#2563EB]">Apa yang Sudah Kamu Pelajari Hari Ini?</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#6D28D9]">
            Keyakinan Diriku
          </div>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Centang (✓) sesuai keyakinanmu saat ini.</p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-end">
          <div className="flex flex-col gap-3">
            {checklist.map((c) => (
              <label
                key={c.key}
                className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#7C3AED] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  data-require-group="materi3peta8step3"
                  className="peer sr-only"
                />
                <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#7C3AED] peer-checked:border-[#7C3AED] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M3-P8-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMaskot}
            alt="Maskot siswi berjilbab memberi jempol"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-36 md:w-32 md:h-44 mx-auto flex-shrink-0"
          />
        </div>
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
