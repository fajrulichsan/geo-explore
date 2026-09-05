import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const langkah = [
  { icon: "🔍", teks: "Tentukan faktor skala k." },
  { icon: "▦", teks: "Tentukan luas permukaan awal L." },
  { icon: "🔢", teks: "Tentukan kuadrat faktor skala, yaitu k²." },
  { icon: "🧮", teks: "Hitung luas permukaan baru dengan L' = k²L." },
  { icon: "🖩", teks: "Periksa kembali hasil dan kewajarannya." },
];

const strategi = [
  { no: 1, icon: "🔗", judul: "Hubungan Langsung", teks: "Menggunakan hubungan langsung antara faktor skala dan luas permukaan (k²)." },
  { no: 2, icon: "🧮", judul: "Hitung Bertahap", teks: "Menghitung luas setiap sisi setelah semua ukuran panjang diskalakan, kemudian menjumlahkannya." },
  { no: 3, icon: "💻", judul: "Model / Visualisasi", teks: "Gunakan GeoGebra 3D untuk memeriksa nilai/perhitungan dan AR untuk memvisualisasikan perubahan skala." },
  { no: 4, icon: "⚖️", judul: "Bandingkan Beberapa Cara", teks: "Membandingkan beberapa strategi dan memilih yang paling efisien, serta memberikan alasan." },
];

export default async function Materi5Peta10Step3LangkahDanStrategi({
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
          Rangkuman Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Langkah Menyelesaikan Masalah Skala dan Luas
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
            <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-xl px-4 py-3 flex items-start gap-2 mt-1">
              <span className="flex-shrink-0">💡</span>
              <p className="m-0 text-xs text-[#785900] leading-[1.5]">
                Pada penskalaan seragam, luas permukaan menjadi k² kali luas permukaan semula,
                bukan k kali.
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
              Strategi Penyelesaian
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Suatu masalah skala dapat diselesaikan dengan berbagai cara, misalnya:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
            {strategi.map((s) => (
              <div key={s.no} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {s.no}
                  </div>
                  <span className="text-base flex-shrink-0">{s.icon}</span>
                  <p className="m-0 text-xs font-extrabold text-[#111827]">{s.judul}</p>
                </div>
                <p className="m-0 text-[11px] text-[#4B5563] leading-[1.4]">{s.teks}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#DBEAFE] border border-[#BFDBFE] rounded-2xl px-5 py-3.5 flex items-start gap-2.5">
            <span className="flex-shrink-0">⭐</span>
            <p className="m-0 text-sm text-[#1D4ED8] font-semibold">
              Semua strategi dapat digunakan apabila disertai alasan matematis yang tepat.
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
