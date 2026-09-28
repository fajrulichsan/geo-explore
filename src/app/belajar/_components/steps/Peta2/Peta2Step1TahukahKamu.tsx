import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const benda = [
  { imageKey: "M1-P2-L1-1", label: "Rumah" },
  { imageKey: "M1-P2-L1-2", label: "Tenda Limas Segiempat" },
  { imageKey: "M1-P2-L1-3", label: "Akuarium" },
  { imageKey: "M1-P2-L1-4", label: "Rubik" },
  { imageKey: "M1-P2-L1-5", label: "Tenda Prisma Segitiga" },
  { imageKey: "M1-P2-L1-6", label: "Kotak Susu" },
  { imageKey: "M1-P2-L1-7", label: "Kotak Sepatu" },
  { imageKey: "M1-P2-L1-8", label: "Lemari" },
  { imageKey: "M1-P2-L1-9", label: "Gazebo" },
  { imageKey: "M1-P2-L1-10", label: "Piramida" },
] satisfies { imageKey: PageImageKey; label: string }[];

export default async function Peta2Step1TahukahKamu({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const images = await Promise.all(benda.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Tahukah Kamu?
        </div>
      </div>

      <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-6 pb-6 sm:px-8 flex flex-col gap-3">
        <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
          Di sekitar kita terdapat banyak benda yang memiliki bentuk berbeda-beda. Perhatikan{" "}
          <span className="font-bold text-[#2563EB]">bentuk dominan atau bagian utama</span> setiap benda.
        </p>
        <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
          Pernahkah kamu memperhatikan bahwa benda-benda tersebut sebenarnya memiliki bentuk bangun ruang tertentu?
        </p>
        <p className="m-0 text-[15px] leading-[1.7] font-bold text-[#2563EB]">
          Menurutmu, apakah semua benda tersebut dapat dikelompokkan dengan cara yang sama?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {benda.map((b, i) => (
          <div
            key={b.imageKey}
            className="bg-white border border-[#DBE5FB] rounded-[18px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3"
          >
            <EditablePageImage
              imageKey={b.imageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={String(i + 1)}
              src={images[i]}
              alt={b.label}
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[4/5]"
            />
            <div className="flex items-start gap-2 w-full">
              <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-[13px] font-bold leading-tight text-[#1E3A8A] pt-1">{b.label}</span>
            </div>
          </div>
        ))}
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
