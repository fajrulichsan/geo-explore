import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const faktorSkala = [
  { value: "k2", label: "k = 2" },
  { value: "k3", label: "k = 3" },
  { value: "k_setengah", label: "k = 1/2" },
] as const;

const strategiFields = [
  { key: "cara", label: "Cara yang saya gunakan", rows: 2 },
  { key: "perhitungan", label: "Perhitungan", rows: 3 },
  { key: "alasan", label: "Alasan mengapa strategi ini benar", rows: 2 },
] as const;

export default async function Materi5Peta9Step1MasalahDanStrategi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M5-P9-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 16.5V7.5a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 7.5v9a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z" />
            <path d="M3.27 6.96L12 12l8.73-5.04M12 22V12" />
          </svg>
          Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
              Tantangan Open-Ended
            </h1>
            <p className="m-0 text-sm font-bold text-[#2563EB]">
              Saatnya menunjukkan berbagai strategimu!
            </p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Kamu telah menemukan hubungan antara{" "}
              <span className="font-bold text-[#16A34A]">faktor skala</span> dan luas permukaan.
              Sekarang gunakan pengetahuan tersebut untuk menyelesaikan sebuah masalah terbuka.
              Tidak hanya satu strategi yang benar — yang terpenting adalah bagaimana kamu
              menjelaskan alasan matematisnya.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P9-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa berdiskusi strategi menyelesaikan tantangan open-ended"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-64 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-white/60"
          />
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
        <div className="flex flex-col gap-1.5">
          <p className="m-0 text-sm font-bold text-[#92400E]">Petunjuk Pengerjaan</p>
          <ol className="m-0 pl-4 flex flex-col gap-1 list-decimal">
            <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
              Gunakan lebih dari satu strategi jika memungkinkan.
            </li>
            <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
              Jelaskan alasan matematis pada setiap strategi.
            </li>
            <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
              Bandingkan strategi yang kamu gunakan.
            </li>
            <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
              Pilih strategi yang menurutmu paling efisien beserta alasannya.
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Masalah Open-Ended
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Sebuah <span className="font-bold">miniatur limas segiempat</span> mempunyai panjang
              sisi alas <span className="font-bold">8 cm</span> dengan luas permukaan{" "}
              <span className="font-bold">320 cm²</span>. Miniatur tersebut akan{" "}
              <span className="font-bold text-[#2563EB]">diskalakan/diubah ukurannya</span> dengan
              salah satu faktor skala (k) berikut.
            </p>

            <div className="flex items-center justify-center gap-2 flex-wrap py-2">
              <div className="flex flex-col items-center gap-1.5">
                <svg width="52" height="46" viewBox="0 0 52 46" fill="none">
                  <path d="M26 6l22 13-22 9-22-9z" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1.5" />
                  <path d="M26 28L4 19l22 24 22-24z" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5" />
                </svg>
                <span className="text-[10px] font-bold text-[#6B21A8] bg-[#F3E8FF] rounded-full py-1 px-2.5">
                  Model awal (miniatur)
                </span>
              </div>
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" className="flex-shrink-0">
                <path d="M2 8h20M16 2l6 6-6 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-full bg-[#EFF4FF] border-2 border-[#2563EB] flex items-center justify-center font-bold text-lg text-[#2563EB]">
                  k
                </div>
                <span className="text-[10px] font-bold text-[#1D4ED8] bg-[#EFF4FF] rounded-full py-1 px-2.5 text-center">
                  Pilih faktor skala
                </span>
              </div>
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" className="flex-shrink-0">
                <path d="M2 8h20M16 2l6 6-6 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col items-center gap-1.5">
                <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
                  <path d="M32 4l30 18-30 12-30-12z" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1.5" />
                  <path d="M32 34L2 22l30 30 30-30z" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5" />
                </svg>
                <span className="text-[10px] font-bold text-[#6B21A8] bg-[#F3E8FF] rounded-full py-1 px-2.5">
                  Model hasil penskalaan
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {faktorSkala.map((f) => (
                <div
                  key={f.value}
                  className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-2 px-4 text-sm font-bold text-[#92400E]"
                >
                  {f.label}
                </div>
              ))}
            </div>

            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-1.5">
              <p className="m-0 text-xs font-bold text-[#5B21B6]">Keterangan:</p>
              <ul className="m-0 pl-4 flex flex-col gap-0.5">
                <li className="text-xs font-semibold text-[#6B21A8] leading-[1.5]">
                  Jika k &gt; 1, model hasil menjadi lebih besar.
                </li>
                <li className="text-xs font-semibold text-[#6B21A8] leading-[1.5]">
                  Jika 0 &lt; k &lt; 1, model hasil menjadi lebih kecil.
                </li>
                <li className="text-xs font-semibold text-[#6B21A8] leading-[1.5]">
                  Ukuran model hasil tergantung pada nilai k yang dipilih.
                </li>
              </ul>
            </div>

            <p className="m-0 text-sm font-bold text-[#111827]">
              Tentukan luas permukaan model baru untuk k = 2, k = 3, dan k = 1/2. Tidak harus
              menghitung dengan satu cara saja — jelaskan alasan matematis pada setiap strategi
              yang kamu gunakan.
            </p>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="catatanPenting" className="text-xs font-semibold text-[#374151]">
                Catatan: tuliskan semua informasi penting yang kamu gunakan selama proses berpikir
                dan perhitungan.
              </label>
              <textarea
                id="catatanPenting"
                name="answers.catatan_penting"
                defaultValue={getValue("catatan_penting")}
                rows={3}
                placeholder="Jawabanmu (opsional)..."
                className="w-full rounded-xl border border-dashed border-[#D1D5DB] bg-[#F9FAFB] p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Tampilkan Strategimu
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              {[1, 2].map((n) => (
                <div key={n} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full text-white flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        n === 1 ? "bg-[#2563EB]" : "bg-[#16A34A]"
                      }`}
                    >
                      {n}
                    </div>
                    <p className="m-0 text-sm font-bold text-[#111827]">Strategi {n}</p>
                  </div>
                  {strategiFields.map((f) => (
                    <div key={f.key} className="flex flex-col gap-1">
                      <label htmlFor={`strategi${n}${f.key}`} className="text-xs font-semibold text-[#374151]">
                        {f.label}:
                      </label>
                      <textarea
                        id={`strategi${n}${f.key}`}
                        name={`answers.strategi_${n}_${f.key}`}
                        defaultValue={getValue(`strategi_${n}_${f.key}`)}
                        rows={f.rows}
                        required
                        placeholder="Jawabanmu..."
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" className="flex-shrink-0">
                  <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
                </svg>
                <p className="m-0 text-sm font-bold text-[#111827]">Strategi Lain (jika ada)</p>
              </div>
              {strategiFields.map((f) => (
                <div key={f.key} className="flex flex-col gap-1">
                  <label htmlFor={`strategiLain${f.key}`} className="text-xs font-semibold text-[#374151]">
                    {f.label}:
                  </label>
                  <textarea
                    id={`strategiLain${f.key}`}
                    name={`answers.strategi_lain_${f.key}`}
                    defaultValue={getValue(`strategi_lain_${f.key}`)}
                    rows={f.rows}
                    placeholder="Jawabanmu (opsional)..."
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex items-start gap-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M12 17.5a1 1 0 100-2 1 1 0 000 2z" />
          <path d="M6 9a6 6 0 1112 0c0 3-2.5 3.5-2.5 6h-7c0-2.5-2.5-3-2.5-6z" />
        </svg>
        <div className="flex flex-col gap-1.5">
          <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.5]">
            Tidak hanya satu strategi yang benar. Yang dinilai adalah cara berpikir, alasan
            matematis, dan kemampuan membandingkan strategi.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
