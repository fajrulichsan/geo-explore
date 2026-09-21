import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const contoh = [
  { key: "2", faktor: "2", kali: "2" },
  { key: "3", faktor: "3", kali: "3" },
  { key: "0_5", faktor: "1/2", kali: "1/2" },
];

const inputKecil =
  "w-24 rounded-lg border border-[#BFDBFE] bg-white px-2.5 py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Hubungan Skala dan Luas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h2 className="m-0 text-lg font-bold text-[#2563EB]">Hubungan Matematika Sementara</h2>
        </div>

        <div className="bg-[#FEF2F2] border border-dashed border-[#FCA5A5] rounded-xl px-4 py-3 text-sm text-[#991B1B]">
          Gunakan pola yang telah kamu temukan pada halaman sebelumnya untuk melengkapi kalimat berikut.
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2 text-sm leading-[2] text-[#111827]">
          <p className="m-0 font-semibold">Menurut kelompok kami,</p>
          <p className="m-0">
            jika setiap ukuran panjang bangun diubah dengan faktor skala <em>k</em>, maka setiap ukuran panjang
            dikalikan dengan <em>k</em>, maka luas permukaan menjadi dikalikan dengan{" "}
            <input
              type="text"
              name="answers.luas_dikalikan"
              defaultValue={getValue("luas_dikalikan")}
              required
              placeholder="..."
              aria-label="Luas permukaan dikalikan dengan"
              className={inputKecil}
            />
            .
          </p>
        </div>

        <div className="rounded-2xl border border-[#BFDBFE] overflow-hidden">
          <p className="m-0 bg-[#EFF4FF] text-center text-sm font-bold text-[#1D4ED8] py-2">Contoh Perubahan</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[440px]">
              <thead>
                <tr className="bg-[#1D4ED8] text-white text-xs font-bold">
                  <th className="px-4 py-2.5">Faktor Skala (k)</th>
                  <th className="px-4 py-2.5 border-l border-white/20">Setiap Ukuran Panjang Menjadi</th>
                  <th className="px-4 py-2.5 border-l border-white/20">Luas Menjadi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DBEAFE]">
                {contoh.map((c) => (
                  <tr key={c.key}>
                    <td className="px-4 py-3 text-sm font-bold text-[#111827]">{c.faktor}</td>
                    <td className="px-4 py-3 text-sm text-[#374151]">
                      <span className="inline-flex items-center gap-2">
                        <input
                          type="text"
                          name={`answers.panjang_awal_k${c.key}`}
                          defaultValue={getValue(`panjang_awal_k${c.key}`)}
                          required
                          placeholder="..."
                          aria-label={`Ukuran panjang awal untuk k = ${c.faktor}`}
                          className={inputKecil}
                        />
                        × {c.kali}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        name={`answers.luas_menjadi_k${c.key}`}
                        defaultValue={getValue(`luas_menjadi_k${c.key}`)}
                        required
                        placeholder="..."
                        aria-label={`Luas menjadi untuk k = ${c.faktor}`}
                        className={inputKecil}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#2563EB]">Pertanyaan</p>
          <label htmlFor="simpulan_tabel" className="text-sm text-[#374151]">
            Berdasarkan tabel di atas, apa yang dapat kamu simpulkan tentang hubungan antara faktor skala (k) dan
            perubahan luas?
          </label>
          <textarea
            id="simpulan_tabel"
            name="answers.simpulan_tabel"
            defaultValue={getValue("simpulan_tabel")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
