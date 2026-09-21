import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const faktorSkala = ["2", "3", "½"];

const cellInput =
  "w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors";
const textArea =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-none";

export default async function Materi5Peta6Step3UjiHubunganAlasan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M5-P6-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hubungan Skala dan Luas</p>
      </div>

      <div className="grid md:grid-cols-5 gap-5 items-center">
        <div className="md:col-span-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-2">
          <h2 className="m-0 text-lg font-bold text-[#1D4ED8]">Pengantar</h2>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Sekarang lakukan pemeriksaan terakhir terhadap hubungan yang telah kamu temukan. Pastikan
            hubungan tersebut benar berdasarkan seluruh bukti yang telah dikumpulkan.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P6-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa memeriksa kembali hasil penemuan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative md:col-span-2 w-full aspect-[5/4] max-h-56 bg-white rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
              Uji Hubungan Skala dan Luas
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut.</p>

          <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-3.5 flex items-start gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
            </svg>
            <p className="m-0 text-xs text-[#5B21B6] leading-[1.6]">
              Gunakan hasil verifikasi GeoGebra dan AR untuk memeriksa apakah hubungan tersebut konsisten
              pada bangun dan faktor skala yang telah diamati.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[440px]">
              <thead>
                <tr className="bg-[#7C3AED] text-white text-xs font-bold">
                  <th className="px-3 py-3 rounded-l-lg">Faktor Skala (k)</th>
                  <th className="px-3 py-3 border-l border-white/20">Luas Awal (cm²)</th>
                  <th className="px-3 py-3 border-l border-white/20">Luas Baru (cm²)</th>
                  <th className="px-3 py-3 border-l border-white/20 rounded-r-lg">Apakah Luas = k² × Luas Awal? (✓/✗)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {faktorSkala.map((k, idx) => (
                  <tr key={k}>
                    <td className="px-3 py-3 text-sm font-bold text-[#111827]">{k}</td>
                    {(["luas_awal", "luas_baru"] as const).map((field) => (
                      <td key={field} className="px-3 py-3">
                        <input
                          type="text"
                          name={`answers.${field}_${idx}`}
                          defaultValue={getValue(`${field}_${idx}`)}
                          required
                          placeholder="..."
                          className={cellInput}
                        />
                      </td>
                    ))}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-4">
                        {(["sesuai", "tidak_sesuai"] as const).map((opt) => (
                          <label key={opt} className="flex items-center gap-1.5 cursor-pointer text-sm font-semibold text-[#374151]">
                            <input
                              type="radio"
                              name={`answers.uji_sesuai_${idx}`}
                              value={opt}
                              defaultChecked={getValue(`uji_sesuai_${idx}`) === opt}
                              required
                              className="accent-[#7C3AED]"
                            />
                            {opt === "sesuai" ? "✓" : "✗"}
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold">?</div>
              <p className="m-0 text-sm font-bold text-[#1D4ED8]">Pertanyaan</p>
            </div>
            <label htmlFor="temuan_pemeriksaan" className="text-sm font-semibold text-[#374151]">
              Apa yang kamu temukan setelah melakukan pemeriksaan ini?
            </label>
            <textarea
              id="temuan_pemeriksaan"
              name="answers.temuan_pemeriksaan"
              defaultValue={getValue("temuan_pemeriksaan")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className={textArea}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Jelaskan Alasan Matematis
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <label htmlFor="alasan_matematis" className="text-sm leading-[1.7] text-[#374151]">
              Mengapa perubahan setiap ukuran panjang dengan faktor skala <span className="italic font-semibold">k</span>{" "}
              menyebabkan perubahan luas permukaan seperti yang kamu peroleh? Jelaskan menggunakan hasil
              pengamatan, perhitungan, dan data hasil verifikasimu.
            </label>
            <textarea
              id="alasan_matematis"
              name="answers.alasan_matematis"
              defaultValue={getValue("alasan_matematis")}
              rows={8}
              required
              placeholder="Tuliskan penjelasanmu..."
              className={textArea}
            />
          </div>
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
