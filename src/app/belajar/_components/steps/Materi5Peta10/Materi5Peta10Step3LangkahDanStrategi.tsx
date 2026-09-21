import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

function SectionTitle({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
        {letter}
      </div>
      <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
        {title}
      </div>
    </div>
  );
}


const langkah = [
  { icon: "🔍", text: <>Tentukan faktor skala <i>k</i>.</>, box: "bg-[#EFF6FF] border-[#BFDBFE]", num: "bg-[#2563EB]" },
  { icon: "▦", text: <>Tentukan luas permukaan awal <i>L</i>.</>, box: "bg-[#F0FDF4] border-[#BBF7D0]", num: "bg-[#16A34A]" },
  { icon: "k²", text: <>Tentukan kuadrat faktor skala, yaitu <b className="text-[#DC2626]"><i>k</i>²</b>.</>, box: "bg-[#FFF7ED] border-[#FED7AA]", num: "bg-[#F97316]" },
  { icon: "✏️", text: <>Hitung luas permukaan baru dengan <b className="text-[#DC2626]">L′ = <i>k</i>² L</b>.</>, box: "bg-[#FAF5FF] border-[#E9D5FF]", num: "bg-[#7C3AED]" },
  { icon: "🧮", text: <>Periksa kembali hasil dan kewajarannya.</>, box: "bg-[#EFF6FF] border-[#BFDBFE]", num: "bg-[#1D4ED8]" },
];

const strategi = [
  { icon: "🔗", judul: "Hubungan Langsung", desc: <>Menggunakan hubungan langsung antara faktor skala dan luas permukaan (<b className="text-[#DC2626]"><i>k</i>²</b>).</>, box: "bg-[#EFF6FF] border-[#BFDBFE]" },
  { icon: "🧮", judul: "Hitung Bertahap", desc: <>Menghitung luas setiap sisi setelah semua ukuran panjang diskalakan, kemudian menjumlahkannya.</>, box: "bg-[#F0FDF4] border-[#BBF7D0]" },
  { icon: "🖥️", judul: "Model / Visualisasi", desc: <>Gunakan GeoGebra 3D untuk memeriksa nilai/perhitungan dan AR untuk memvisualisasikan perubahan skala.</>, box: "bg-[#FFF1F0] border-[#FECACA]" },
  { icon: "⚖️", judul: "Bandingkan Beberapa Cara", desc: <>Membandingkan beberapa strategi dan memilih yang paling efisien, serta memberikan alasan.</>, box: "bg-[#FAF5FF] border-[#E9D5FF]" },
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
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman: Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <SectionTitle letter="E" title="Langkah Menyelesaikan Masalah Skala dan Luas" />
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2 flex-1">
            {langkah.map((l, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 ${l.box}`}>
                  <span className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0 ${l.num}`}>{i + 1}</span>
                  <span className="text-xl w-8 text-center flex-shrink-0 font-bold text-[#DC2626]">{l.icon}</span>
                  <p className="m-0 text-sm text-[#1F2937] font-medium">{l.text}</p>
                </div>
                {i < langkah.length - 1 && (
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" stroke="#1D4ED8" strokeWidth="2.2">
                    <path d="M8 1v14M2 10l6 6 6-6" />
                  </svg>
                )}
              </div>
            ))}
            <div className="rounded-xl bg-[#FFFBEB] border border-[#FDE68A] px-4 py-3 mt-2 flex items-start gap-3">
              <span className="flex-shrink-0">💡</span>
              <p className="m-0 text-sm text-[#785900]">
                <span className="font-extrabold text-[#DC2626]">Ingat!</span> Pada penskalaan seragam,
                luas permukaan menjadi <b className="text-[#DC2626]"><i>k</i>²</b> kali luas permukaan
                semula, bukan <b className="text-[#DC2626]"><i>k</i></b> kali.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle letter="F" title="Strategi Penyelesaian" />
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1">
            <p className="m-0 text-sm text-[#4B5563]">
              Suatu masalah skala dapat diselesaikan dengan berbagai cara, misalnya:
            </p>
            {strategi.map((s, i) => (
              <div key={s.judul} className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${s.box}`}>
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <p className="m-0 text-sm font-extrabold text-[#1D4ED8]">Strategi {i + 1}</p>
                  <p className="m-0 text-sm font-bold text-[#1E3A8A]">{s.judul}</p>
                  <p className="m-0 mt-1 text-xs text-[#4B5563] leading-[1.5]">{s.desc}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl bg-[#FFFBEB] border border-[#FDE68A] px-4 py-3 flex items-center gap-3">
              <span className="text-xl flex-shrink-0">⭐</span>
              <p className="m-0 text-sm text-[#785900]">
                Semua strategi dapat digunakan apabila disertai alasan matematis yang tepat.
              </p>
            </div>
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
