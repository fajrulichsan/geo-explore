import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "2", label: "2" },
  { key: "3", label: "3" },
  { key: "0_5", label: "1/2" },
];

export default async function Materi5Peta5Step3CariPola({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M5-P5-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Hubungan Skala dan Luas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#7C3AED]">Cari Pola</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">Tuliskan pola yang kamu temukan.</p>

        <div className="mx-6 mt-4 bg-[#F5F3FF] border border-dashed border-[#C4B5FD] rounded-xl px-4 py-3 text-sm text-[#5B21B6]">
          Tuliskan hubungan berdasarkan hasil pengamatan kelompokmu.
        </div>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[420px]">
            <thead>
              <tr className="bg-[#7C3AED] text-white text-sm font-bold">
                <th className="px-4 py-3 rounded-tl-lg w-36">Faktor Skala (k)</th>
                <th className="px-4 py-3 border-l border-white/20 rounded-tr-lg">Hubungan dengan Luas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE9FE]">
              {baris.map((b) => (
                <tr key={b.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827]">{b.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.hubungan_k${b.key}`}
                      defaultValue={getValue(`hubungan_k${b.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#EDE9FE] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#7C3AED]">Pertanyaan</p>
          <label htmlFor="hubungan_skala_luas" className="text-sm text-[#374151]">
            Apa hubungan antara faktor skala dan perubahan luas permukaan?
          </label>
          <textarea
            id="hubungan_skala_luas"
            name="answers.hubungan_skala_luas"
            defaultValue={getValue("hubungan_skala_luas")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#DDD6FE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M5-P5-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Siswa berpikir dengan gelembung lampu ide"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex-1 flex flex-col gap-2">
            <p className="m-0 text-base font-bold text-[#1E3A8A]">Refleksi Mini</p>
            <label htmlFor="refleksi_mini" className="text-sm text-[#374151]">
              Hari ini aku mulai memahami bahwa...
            </label>
            <textarea
              id="refleksi_mini"
              name="answers.refleksi_mini"
              defaultValue={getValue("refleksi_mini")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-bold text-[#92400E]">Ingat!</p>
            <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
              Jangan langsung menggunakan rumus. Temukan dahulu pola hubungan berdasarkan data hasil pengamatan.
            </p>
          </div>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#FBBF24" stroke="#D97706" strokeWidth="1.2" className="flex-shrink-0">
            <path d="M9 21h6M10 17h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
          </svg>
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
