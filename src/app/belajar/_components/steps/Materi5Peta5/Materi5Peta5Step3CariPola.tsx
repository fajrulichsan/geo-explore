import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const faktorSkala = [
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
  const refleksiImage = await getPageImage("M5-P5-L3-1");

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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Gunakan hasil pengamatan kelompokmu untuk menemukan pola hubungan skala dan luas.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Cari Pola</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">Tuliskan pola yang kamu temukan.</p>

        <div className="mx-6 mt-4 bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl px-4 py-3 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#7C3AED" className="flex-shrink-0">
            <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
          </svg>
          <p className="m-0 text-xs font-semibold text-[#5B21B6]">
            Tuliskan hubungan berdasarkan hasil pengamatan kelompokmu.
          </p>
        </div>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[440px]">
            <thead>
              <tr>
                <th className="bg-[#7C3AED] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-32">
                  Faktor Skala (k)
                </th>
                <th className="bg-[#7C3AED] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Hubungan dengan Luas
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {faktorSkala.map((f) => (
                <tr key={f.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{f.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.hubungan_luas_k${f.key}`}
                      defaultValue={getValue(`hubungan_luas_k${f.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#7C3AED]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
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

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#EFF4FF] flex-shrink-0 relative overflow-hidden">
              <EditablePageImage
                imageKey="M5-P5-L3-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={refleksiImage}
                alt="Maskot berpikir untuk refleksi mini"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Refleksi Mini</p>
          </div>
          <label htmlFor="refleksi_mini" className="text-xs text-[#4B5563]">
            Hari ini aku mulai memahami bahwa...
          </label>
          <textarea
            id="refleksi_mini"
            name="answers.refleksi_mini"
            defaultValue={getValue("refleksi_mini")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-5 flex flex-col gap-1.5">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDE68A">
              <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
            </svg>
            Ingat!
          </p>
          <p className="m-0 text-xs leading-[1.6] text-white/90">
            Jangan langsung menggunakan rumus. Temukan dahulu pola hubungan berdasarkan data hasil
            pengamatan.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE HALAMAN 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
