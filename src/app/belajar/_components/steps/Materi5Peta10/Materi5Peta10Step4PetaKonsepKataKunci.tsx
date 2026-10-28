import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
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
  const [luasImage, petaKonsepImage, poinImage] = await Promise.all([
    getPageImage("M5-P10-L4-1"),
    getPageImage("M5-P10-L4-2"),
    getPageImage("M5-P10-L4-3"),
  ]);

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

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Peta Konsep Mini" />
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M5-P10-L4-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={petaKonsepImage}
            alt="Peta konsep skala: faktor skala k, setiap ukuran panjang menjadi k kali, luas permukaan menjadi k kuadrat kali"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-md mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Poin Penting" />
        <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
          <EditablePageImage
            imageKey="M5-P10-L4-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={poinImage}
            alt="Poin penting: skala memengaruhi ukuran panjang, luas permukaan berubah k kuadrat kali, berlaku pada bangun ruang sisi datar yang sebangun, satu masalah dapat diselesaikan dengan berbagai strategi, jawaban disertai alasan matematis"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
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

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
