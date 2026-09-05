import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const contohLimas = [
  { key: "segiempat_1", label: "Limas Segiempat 1" },
  { key: "segiempat_2", label: "Limas Segiempat 2" },
  { key: "segitiga", label: "Limas Segitiga (Opsional)", optional: true },
];

export default async function Materi4Peta5Step3CariPola({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const equationImage = await getPageImage("M4-P5-L3-1");

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
          Gunakan hasil perhitunganmu untuk menemukan pola dan hubungan.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Cari Pola</h2>
        </div>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="bg-[#EA580C] text-white text-sm font-bold px-4 py-3 rounded-l-lg">
                  Contoh Limas
                </th>
                <th className="bg-[#EA580C] text-white text-sm font-bold px-4 py-3 border-l border-white/20 w-28">
                  Luas Alas (cm&sup2;)
                </th>
                <th className="bg-[#EA580C] text-white text-sm font-bold px-4 py-3 border-l border-white/20 w-32">
                  Luas Seluruh Sisi Tegak (cm&sup2;)
                </th>
                <th className="bg-[#EA580C] text-white text-sm font-bold px-4 py-3 border-l border-white/20 w-28">
                  Luas Permukaan (cm&sup2;)
                </th>
                <th className="bg-[#EA580C] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Hubungan antara Luas Alas, Luas Seluruh Sisi Tegak, dan Luas Permukaan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {contohLimas.map((c) => (
                <tr key={c.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{c.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_alas_${c.key}`}
                      defaultValue={getValue(`luas_alas_${c.key}`)}
                      placeholder="..."
                      required={!c.optional}
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_sisi_tegak_${c.key}`}
                      defaultValue={getValue(`luas_sisi_tegak_${c.key}`)}
                      placeholder="..."
                      required={!c.optional}
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_permukaan_${c.key}`}
                      defaultValue={getValue(`luas_permukaan_${c.key}`)}
                      placeholder="..."
                      required={!c.optional}
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.hubungan_${c.key}`}
                      defaultValue={getValue(`hubungan_${c.key}`)}
                      placeholder="..."
                      required={!c.optional}
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#EA580C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="hubungan_luas_permukaan" className="text-sm text-[#374151]">
            Menurutmu, bagaimana hubungan antara luas alas, luas seluruh sisi tegak, dan luas
            permukaan limas?
          </label>
          <textarea
            id="hubungan_luas_permukaan"
            name="answers.hubungan_luas_permukaan"
            defaultValue={getValue("hubungan_luas_permukaan")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#FED7AA] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-5 flex items-center gap-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDE68A">
              <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
            </svg>
            Ingat!
          </p>
          <p className="m-0 text-xs leading-[1.6] text-white/90">
            Luas permukaan berkaitan dengan seluruh sisi yang membatasi limas. Gunakan hasil
            perhitunganmu untuk menemukan hubungan antara luas alas dan sisi-sisi tegaknya.
          </p>
        </div>
        <div className="relative w-20 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
          <EditablePageImage
            imageKey="M4-P5-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={equationImage}
            alt="Ilustrasi limas sama dengan alas ditambah sisi-sisi tegak"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full"
          />
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
