import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

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


const poinPenting = [
  <>Skala memengaruhi ukuran panjang setiap sisi.</>,
  <>Luas permukaan berubah sebesar kuadrat faktor skala (<b className="text-[#DC2626]"><i>k</i>²</b>).</>,
  <>Hubungan ini berlaku pada semua bangun ruang sisi datar yang sebangun.</>,
  <>Satu masalah dapat diselesaikan menggunakan berbagai strategi.</>,
  <>Jawaban harus disertai alasan matematis yang logis dan benar.</>,
];

const kataKunci = [
  { icon: "📏", label: "Skala" },
  { icon: "↔️", label: "Faktor Skala k" },
  { icon: "🧊", label: "Bangun Sebangun" },
  { icon: "↔️", label: "Ukuran Panjang" },
  { icon: "▦", label: "Luas Permukaan" },
  { icon: "🔄", label: "Perubahan Luas" },
  { icon: "k²", label: "Kuadrat Faktor Skala" },
  { icon: "💡", label: "Penskalaan Seragam" },
  { icon: "⇕", label: "Perubahan Ukuran" },
  { icon: "📋", label: "Kewajaran Hasil" },
];

export default async function Materi5Peta10Step4PetaKonsepKataKunci({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const luasImage = await getPageImage("M5-P10-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman: Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <SectionTitle letter="G" title="Peta Konsep Mini" />
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-2 flex-1">
            <div className="rounded-xl border-2 border-[#6366F1] bg-[#EEF2FF] text-[#3730A3] font-bold text-sm px-6 py-2">SKALA</div>
            <div className="w-px h-4 bg-[#6366F1]" />
            <div className="rounded-xl border border-[#86EFAC] bg-[#DCFCE7] text-[#14532D] text-sm font-semibold px-5 py-2.5 text-center">
              Faktor Skala (<i>k</i>)<br />
              <span className="text-xs font-medium">(Setiap ukuran panjang menjadi <i>k</i> kali)</span>
            </div>
            <div className="w-px h-4 bg-[#6366F1]" />
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-3 text-center text-xs font-semibold text-[#7C2D12]">
                Setiap Ukuran Panjang menjadi <b className="text-[#DC2626]"><i>k</i></b> kali
              </div>
              <div className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-3 text-center text-xs font-semibold text-[#7C2D12]">
                Luas Permukaan menjadi <b className="text-[#DC2626]"><i>k</i>²</b> kali
              </div>
            </div>
            <div className="w-px h-4 bg-[#6366F1]" />
            <div className="rounded-xl border border-[#C4B5FD] bg-[#F5F3FF] p-3 text-center text-sm text-[#1F2937] font-medium w-full">
              Jika setiap ukuran panjang suatu bangun ruang dikalikan dengan faktor skala <i>k</i>,
              maka luas permukaannya menjadi <b className="text-[#DC2626]"><i>k</i>²</b> kali luas
              permukaan semula.
            </div>
            <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-xl px-4 py-2.5 flex items-start gap-2 w-full">
              <span className="flex-shrink-0">💡</span>
              <p className="m-0 text-xs text-[#785900] leading-[1.5]">
                <b>Catatan:</b> berlaku untuk semua nilai <i>k</i> &gt; 0, baik 0 &lt; <i>k</i> &lt; 1
                (pengecilan) maupun <i>k</i> &gt; 1 (pembesaran).
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle letter="H" title="Poin Penting" />
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1 justify-center">
            {poinPenting.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5">✓</span>
                <p className="m-0 text-sm text-[#374151] leading-[1.5]">{p}</p>
              </div>
            ))}
            <div className="self-end text-4xl">🎯</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="I" title="Kata Kunci" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {kataKunci.map((k) => (
            <div key={k.label} className="rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col items-center justify-between gap-2 text-center min-h-24">
              <p className="m-0 text-[11px] font-bold text-[#374151] leading-[1.3]">{k.label}</p>
              <span className={`text-2xl ${k.icon === "k²" ? "font-serif italic font-bold text-[#DC2626]" : ""}`}>{k.icon}</span>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-5 rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col items-center gap-2 text-center">
            <p className="m-0 text-[11px] font-bold text-[#374151]">Luas Awal (L) dan Luas Baru (L′)</p>
            <EditablePageImage
              imageKey="M5-P10-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={luasImage}
              alt="Kotak hijau 2×2 menjadi kotak hijau 4×4"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-40 h-20"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
