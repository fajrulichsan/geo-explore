import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkah = [
  { icon: "👁️", text: "Amati bangun ruang." },
  { icon: "✚", text: "Representasikan bangun melalui jaring-jaring (jika diperlukan)." },
  { icon: "📏", text: "Tentukan ukuran setiap sisi." },
  { icon: "🔢", text: "Hitung luas masing-masing sisi secara bertahap." },
  { icon: "∑", text: "Jumlahkan luas seluruh sisi." },
  { icon: "🎯", text: "Diperoleh Luas Permukaan." },
];

const strategi = [
  { icon: "✚", text: "Menggunakan jaring-jaring bangun ruang." },
  { icon: "▬", text: "Mengelompokkan sisi-sisi yang kongruen." },
  { icon: "🔢", text: "Menghitung luas setiap sisi secara bertahap." },
  { icon: "𝑓𝑥", text: "Menggunakan rumus yang telah ditemukan." },
  { icon: "✏️", text: "Membuat atau memilih jaring-jaring yang membantu perhitungan." },
  { icon: "⚖️", text: "Membandingkan beberapa strategi penyelesaian." },
];

export default async function Materi3Peta10Step3LangkahStrategi({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const jaringImage = await getPageImage("M3-P10-L3-1");

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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#166534] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#166534]">
            Langkah Menentukan Luas Permukaan
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col">
          {langkah.map((l, i) => (
            <div key={l.text} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#166534] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                {i < langkah.length - 1 && <div className="w-0.5 flex-1 bg-[#BBF7D0] my-1" />}
              </div>
              <div className="flex items-center gap-3 pb-4 flex-1">
                <span className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-xl flex-shrink-0">
                  {l.icon}
                </span>
                <p className={`m-0 text-sm text-[#374151] leading-[1.5] ${i === langkah.length - 1 ? "font-extrabold text-[#166534]" : ""}`}>
                  {l.text}
                </p>
              </div>
            </div>
          ))}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="text-lg">💡</span>
            <p className="m-0 text-sm text-[#374151]">
              Langkah ini dapat dilakukan dengan berbagai cara atau strategi.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Strategi Menentukan Luas Permukaan
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <p className="m-0 text-sm text-[#374151]">
            Siswa dapat menentukan luas permukaan dengan berbagai cara. Misalnya:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {strategi.map((s, i) => (
              <div
                key={s.text}
                className="relative rounded-2xl border border-[#DBEAFE] bg-[#F8FAFF] p-4 pt-5 flex flex-col items-center gap-3 text-center"
              >
                <div className="absolute left-3 top-3 w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                {i === 0 ? (
                  <EditablePageImage
                    imageKey="M3-P10-L3-1"
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan="1"
                    src={jaringImage}
                    alt="Jaring-jaring bangun ruang"
                    editable={editFoto}
                    imageClassName="object-contain mix-blend-multiply"
                    containerClassName="relative w-24 h-16"
                  />
                ) : (
                  <span className="h-16 flex items-center text-4xl text-[#1E3A8A]">{s.icon}</span>
                )}
                <p className="m-0 text-xs font-semibold text-[#374151] leading-[1.45]">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="text-lg">💡</span>
            <p className="m-0 text-sm font-semibold text-[#2563EB] leading-[1.5]">
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
