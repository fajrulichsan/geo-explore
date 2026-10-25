import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages } from "@/lib/pageImages";

const konsep = [
  {
    text: "Satu bangun ruang dapat mempunyai lebih dari satu jaring-jaring.",
    box: "bg-[#F0FDF4] border-[#BBF7D0]",
    imageKey: "M2-P7-L3-1",
    urutan: "1",
    alt: "Enam susunan jaring-jaring berbeda mengelilingi kubus",
  },
  {
    text: "Tidak semua susunan bidang datar merupakan jaring-jaring.",
    box: "bg-[#FDF2F8] border-[#FBCFE8]",
    imageKey: "M2-P7-L3-2",
    urutan: "2",
    alt: "Susunan bidang datar yang dicoret karena bukan jaring-jaring",
  },
  {
    text: "Seluruh sisi harus saling terhubung dengan benar.",
    box: "bg-[#EFF6FF] border-[#BFDBFE]",
    imageKey: "M2-P7-L3-3",
    urutan: "3",
    alt: "Susunan bidang datar biru yang saling terhubung",
  },
  {
    text: "Saat dilipat tidak boleh ada sisi yang bertumpuk.",
    box: "bg-[#FFFBEB] border-[#FDE68A]",
    imageKey: "M2-P7-L3-4",
    urutan: "4",
    alt: "Dua persegi oranye dengan panah lipatan",
  },
  {
    text: "Seluruh sisi harus menutup bangun ruang dengan tepat.",
    box: "bg-[#F5F3FF] border-[#DDD6FE]",
    imageKey: "M2-P7-L3-5",
    urutan: "5",
    alt: "Kubus ungu",
  },
] as const;

export default async function Materi2Peta7Step3IngatKembali({ materi, peta, step = "3", editFoto }: StepComponentProps) {
  const img = await getPageImages();

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">E</div>
          <h2 className="m-0 text-lg font-bold text-[#92400E]">Ingat Kembali – Konsep Penting</h2>
        </div>
        <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {konsep.map((k) => (
            <li key={k.text} className={`border rounded-2xl p-4 flex flex-col items-center gap-3 text-center ${k.box}`}>
              <EditablePageImage
                imageKey={k.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={k.urutan}
                src={img[k.imageKey]}
                alt={k.alt}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-24"
              />
              <p className="m-0 text-xs font-semibold leading-[1.5] text-[#374151]">{k.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
