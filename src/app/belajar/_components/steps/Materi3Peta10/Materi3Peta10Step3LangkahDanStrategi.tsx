import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const langkah = [
  { icon: "👁️", teks: "Amati bangun ruang." },
  { icon: "➕", teks: "Representasikan bangun melalui jaring-jaring (jika diperlukan)." },
  { icon: "📏", teks: "Tentukan ukuran setiap sisi." },
  { icon: "🧮", teks: "Hitung luas masing-masing sisi secara bertahap." },
  { icon: "∑", teks: "Jumlahkan luas seluruh sisi." },
  { icon: "🎯", teks: "Diperoleh Luas Permukaan." },
];

const strategi = [
  { no: 1, icon: "➕", teks: "Menggunakan jaring-jaring bangun ruang." },
  { no: 2, icon: "▭", teks: "Mengelompokkan sisi-sisi yang kongruen." },
  { no: 3, icon: "🧮", teks: "Menghitung luas setiap sisi secara bertahap." },
  { no: 4, icon: "𝑓𝑥", teks: "Menggunakan rumus yang telah ditemukan." },
  { no: 5, icon: "✏️", teks: "Membuat atau memilih jaring-jaring yang membantu perhitungan." },
  { no: 6, icon: "⚖️", teks: "Membandingkan beberapa strategi penyelesaian." },
];

export default async function Materi3Peta10Step3LangkahDanStrategi({
  materi,
  peta,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Kubus, Balok, dan Prisma
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Langkah Menentukan Luas Permukaan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1">
            <div className="flex flex-col">
              {langkah.map((l, i) => (
                <div key={l.teks} className="flex items-start gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    {i < langkah.length - 1 && <div className="w-px flex-1 min-h-[18px] bg-[#D1D5DB]" />}
                  </div>
                  <div className="flex items-center gap-2 pb-4 pt-1.5">
                    <span className="text-base flex-shrink-0">{l.icon}</span>
                    <p className="m-0 text-sm text-[#374151] font-medium leading-[1.4]">{l.teks}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#F9FAFB] rounded-xl px-4 py-3 flex items-start gap-2 mt-1">
              <span className="flex-shrink-0">💡</span>
              <p className="m-0 text-xs text-[#6B7280] leading-[1.5]">
                Langkah ini dapat dilakukan dengan berbagai cara atau strategi.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Strategi Menentukan Luas Permukaan
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Siswa dapat menentukan luas permukaan dengan berbagai cara. Misalnya:
          </p>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {strategi.map((s) => (
              <div key={s.no} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center text-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {s.no}
                </div>
                <span className="text-lg">{s.icon}</span>
                <p className="m-0 text-[11px] text-[#4B5563] leading-[1.4]">{s.teks}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-3.5 flex items-start gap-2.5">
            <span className="flex-shrink-0">💡</span>
            <p className="m-0 text-sm text-[#785900]">
              Satu masalah dapat diselesaikan dengan lebih dari satu strategi. Pilih cara yang
              paling kamu pahami dan efektif bagimu!
            </p>
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
