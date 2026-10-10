import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Analisis data dengan teliti.",
  "Cari pola yang muncul.",
  "Pastikan dugaanmu berdasarkan data, bukan sekadar perkiraan."
];

const kolom = [
  { key: "kelompokku", label: "Kelompokmu", warna: "bg-[#15803D]" },
  { key: "lain1", label: "Kelompok Lain 1", warna: "bg-[#1D4ED8]" },
  { key: "lain2", label: "Kelompok Lain 2", warna: "bg-[#6D28D9]" },
];

const rows = [
  { key: "bentuk_sisi", label: "Bentuk sisi" },
  { key: "susunan_sisi", label: "Susunan sisi" },
  { key: "pasangan_sejajar", label: "Pasangan bidang sisi sejajar" },
  { key: "bentuk_alas", label: "Bentuk sisi yang dipilih sebagai alas" },
  { key: "jumlah_sisi", label: "Jumlah sisi" },
  { key: "jumlah_rusuk", label: "Jumlah rusuk" },
  { key: "jumlah_titik_sudut", label: "Jumlah titik sudut" },
];

export default async function Peta5Step5BandingkanHasilKelompok({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const siswa = await getPageImage("M1-P5-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" className="flex-shrink-0">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </svg>
              <p className="m-0 text-base font-extrabold text-[#92400E]">Ingat!</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((teks) => (
                <li key={teks} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
          <EditablePageImage
            imageKey="M1-P5-L5-1"
            materi={materi}
            peta={peta}
            step="5"
            urutan="1"
            src={siswa}
            alt="Tiga siswa berdiskusi sambil menulis di buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[280px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-white"
          />
        </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatan Kelompokmu
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Bandingkan data hasil pengamatan kelompokmu dengan dua kelompok lain. Tuliskan persamaan, perbedaan, dan alasan yang mendukung setiap hasil pengamatan.
        </p>

        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="text-xs font-semibold text-[#6B7280]">Model yang sudah diamati:</span>
            <select
              name="answers.f_model_diamati"
              defaultValue={getValue("f_model_diamati")}
              required
              className="bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3 border-none focus:outline-none cursor-pointer"
            >
              <option value="" disabled>
                Pilih Bangun
              </option>
              <option>Kubus</option>
              <option>Balok</option>
              <option>Prisma Segitiga</option>
              <option>Limas Segiempat</option>
              <option>Limas Segitiga</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 items-start">
          <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="bg-[#1E3A8A] text-white">
                  <th className="text-left text-sm font-bold py-3 px-4">Hasil Pengamatan</th>
                  {kolom.map((k) => (
                    <th key={k.key} className={`text-sm font-bold py-3 px-2 ${k.warna}`}>{k.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.key} className="border-t border-[#E5E7EB]">
                    <th scope="row" className="text-left text-[13px] font-bold text-[#1E3A8A] py-2.5 px-4">{r.label}</th>
                    {kolom.map((k) => (
                      <td key={k.key} className="py-2 px-2">
                        <input
                          name={`answers.f_${r.key}_${k.key}`}
                          defaultValue={getValue(`f_${r.key}_${k.key}`)}
                          type="text"
                          required
                          aria-label={`${r.label} ${k.label}`}
                          placeholder="..."
                          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
                <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Catatan / Hasil Perbandingan</p>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="f_persamaan" className="text-sm font-bold text-[#111827] cursor-pointer">Apa persamaan hasil pengamatan kalian?</label>
                <textarea
                  id="f_persamaan"
                  name="answers.f_persamaan"
                  defaultValue={getValue("f_persamaan")}
                  rows={4}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="f_perbedaan" className="text-sm font-bold text-[#111827] cursor-pointer">Apa perbedaannya?</label>
                <textarea
                  id="f_perbedaan"
                  name="answers.f_perbedaan"
                  defaultValue={getValue("f_perbedaan")}
                  rows={4}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
