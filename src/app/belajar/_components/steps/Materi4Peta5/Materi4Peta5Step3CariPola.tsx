import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const contoh = [
  { key: "limas1", label: "Limas Segiempat 1", required: true },
  { key: "limas2", label: "Limas Segiempat 2", required: true },
  { key: "limas3", label: "Limas Segitiga (Opsional)", required: false },
];

const kolom = [
  { key: "luas_alas", label: "Luas Alas (cm²)" },
  { key: "luas_tegak", label: "Luas Seluruh Sisi Tegak (cm²)" },
  { key: "luas_permukaan", label: "Luas Permukaan (cm²)" },
  { key: "hubungan", label: "Hubungan Luas Alas, Sisi Tegak, dan Permukaan" },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors";

export default async function Materi4Peta5Step3CariPola({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarIngat = await getPageImage("M4-P5-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#EA580C]">Cari Pola</span>
          <span className="text-xs text-[#6B7280]">
            Gunakan hasil perhitunganmu untuk menemukan pola dan hubungan.
          </span>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-2">
          <thead>
            <tr className="text-xs font-bold text-white">
              <th className="bg-[#C2410C] rounded-xl p-3 text-left">Contoh Limas</th>
              {kolom.map((k) => (
                <th key={k.key} className="bg-[#C2410C] rounded-xl p-3">
                  {k.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contoh.map((c) => (
              <tr key={c.key}>
                <td className="p-2 align-middle text-sm font-bold text-[#111827]">{c.label}</td>
                {kolom.map((k) => (
                  <td key={k.key} className="align-middle">
                    <input
                      name={`answers.${c.key}_${k.key}`}
                      defaultValue={getValue(`${c.key}_${k.key}`)}
                      required={c.required}
                      aria-label={`${c.label} ${k.label}`}
                      className={inputClass}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#EA580C] transition-colors">
        <label htmlFor="hubungan_limas" className="flex items-start gap-3 text-sm font-bold text-[#7C2D12] leading-[1.5]">
          <span className="w-6 h-6 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs flex-shrink-0">
            ?
          </span>
          Menurutmu, bagaimana hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas?
        </label>
        <textarea
          id="hubungan_limas"
          name="answers.hubungan_limas"
          defaultValue={getValue("hubungan_limas")}
          rows={3}
          placeholder="Tulis jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#FED7AA] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" className="flex-shrink-0" aria-hidden="true">
            <path d="M9 21h6M10 17h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <span className="text-base font-extrabold text-[#D97706]">Ingat!</span>
            <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
              Luas permukaan berkaitan dengan seluruh sisi yang membatasi limas. Gunakan hasil perhitunganmu untuk
              menemukan hubungan antara luas alas dan sisi-sisi tegaknya.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M4-P5-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarIngat}
          alt="Limas sama dengan alas persegi ditambah empat sisi tegak segitiga"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[520px] mx-auto rounded-2xl overflow-hidden bg-white"
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
