import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const contohPerubahan = [
  { key: "2", label: "2", kali: "2" },
  { key: "3", label: "3", kali: "3" },
  { key: "0_5", label: "1/2", kali: "1/2" },
];

export default async function Materi5Peta5Step5HubunganMatematika({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Lengkapi kalimat hubungan matematika sementara berdasarkan pola yang kamu temukan.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#0891B2] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Hubungan Matematika Sementara</h2>
        </div>

        <div className="bg-[#ECFEFF] border border-[#A5F3FC] rounded-2xl px-4 py-3 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0891B2" className="flex-shrink-0">
            <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
          </svg>
          <p className="m-0 text-xs font-semibold text-[#0E7490]">
            Gunakan pola yang telah kamu temukan pada halaman sebelumnya untuk melengkapi kalimat
            berikut.
          </p>
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col items-center gap-1.5 text-center">
          <p className="m-0 text-sm text-[#374151]">Menurut kelompok kami,</p>
          <p className="m-0 text-sm text-[#374151]">
            jika setiap ukuran panjang bangun diubah dengan faktor skala <em>k</em>,
          </p>
          <p className="m-0 text-sm text-[#374151]">
            maka setiap ukuran panjang dikalikan dengan <em>k</em>,
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#374151]">
            <span>maka luas permukaan menjadi dikalikan dengan</span>
            <input
              type="text"
              name="answers.dikalikan_dengan"
              defaultValue={getValue("dikalikan_dengan")}
              placeholder="..."
              required
              className="w-24 rounded-lg border border-[#0891B2] bg-white px-3 py-1.5 text-sm font-bold text-[#0E7490] text-center placeholder:font-normal placeholder:text-[#9CA3AF] focus:outline-none"
            />
            <span>.</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <p className="m-0 mb-2 text-sm font-bold text-[#111827] text-center">Contoh Perubahan</p>
          <table className="w-full text-left border-collapse min-w-[480px]">
            <thead>
              <tr>
                <th className="bg-[#0891B2] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-28">
                  Faktor Skala
                </th>
                <th className="bg-[#0891B2] text-white text-sm font-bold px-4 py-3 border-l border-white/20">
                  Setiap Ukuran Panjang Menjadi
                </th>
                <th className="bg-[#0891B2] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Luas Menjadi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {contohPerubahan.map((c) => (
                <tr key={c.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{c.label}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        name={`answers.panjang_isian_k${c.key}`}
                        defaultValue={getValue(`panjang_isian_k${c.key}`)}
                        placeholder="..."
                        required
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#0891B2] focus:outline-none focus:bg-white transition-colors"
                      />
                      <span className="text-sm text-[#6B7280] flex-shrink-0">&times; {c.kali}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_isian_k${c.key}`}
                      defaultValue={getValue(`luas_isian_k${c.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#0891B2] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#ECFEFF] border border-[#A5F3FC] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#0891B2]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="simpulan_skala_luas" className="text-sm text-[#374151]">
            Berdasarkan tabel di atas, apa yang dapat kamu simpulkan tentang hubungan antara faktor
            skala (k) dan perubahan luas?
          </label>
          <textarea
            id="simpulan_skala_luas"
            name="answers.simpulan_skala_luas"
            defaultValue={getValue("simpulan_skala_luas")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#A5F3FC] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#0891B2] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
