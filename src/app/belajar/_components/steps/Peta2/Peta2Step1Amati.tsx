import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const thumbnails = [
  { n: 1, label: "Rumah", imageKey: "M1-P2-L1-1" },
  { n: 2, label: "Tenda Limas Segiempat", tag: "1.8m", imageKey: "M1-P2-L1-2" },
  { n: 3, label: "Akuarium", imageKey: "M1-P2-L1-3" },
  { n: 4, label: "Rubik", imageKey: "M1-P2-L1-4" },
  { n: 5, label: "Tenda Prisma Segitiga", imageKey: "M1-P2-L1-5" },
  { n: 6, label: "Kotak Susu", imageKey: "M1-P2-L1-6" },
  { n: 7, label: "Kotak Sepatu", imageKey: "M1-P2-L1-7" },
  { n: 8, label: "Lemari", imageKey: "M1-P2-L1-8" },
  { n: 9, label: "Gazebo", imageKey: "M1-P2-L1-9" },
  { n: 10, label: "Piramida", imageKey: "M1-P2-L1-10" },
] satisfies { n: number; label: string; tag?: string; imageKey: PageImageKey }[];

export default async function Peta2Step1Amati({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const thumbnailImages = await Promise.all(thumbnails.map((t) => getPageImage(t.imageKey)));
  const gambarLangkah1 = await getPageImage("M1-P2-L1-11");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
            className="flex-shrink-0"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tahukah Kamu?
          </div>
        </div>

        <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2">
          <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
          </div>
          <p className="m-0 mb-3 text-[15px] leading-[1.6] text-[#374151]">
            Di sekitar kita terdapat banyak benda yang memiliki bentuk berbeda-beda. Perhatikan{" "}
            <span className="text-[#2563EB] font-bold">bentuk dominan atau bagian utama</span> setiap
            benda.
          </p>
          <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
            Pernahkah kamu memperhatikan bahwa benda-benda tersebut sebenarnya memiliki bentuk bangun
            ruang tertentu?
          </p>
          <div className="mt-4 bg-[#FCE9A8] rounded-xl py-3.5 px-[18px]">
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Menurutmu, apakah semua benda tersebut dapat dikelompokkan dengan cara yang sama?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {thumbnails.map((t, i) => (
            <div
              key={t.n}
              className="bg-white border border-[#E5E7EB] rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] bg-[#F3F4F6]">
                <EditablePageImage
                  imageKey={t.imageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 1)}
                  src={thumbnailImages[i]}
                  alt={t.label}
                  editable={editFoto}
                  containerClassName="absolute inset-0"
                />
                {t.tag && (
                  <div className="absolute bottom-1.5 right-1.5 bg-[rgba(17,24,39,0.75)] text-white text-[10px] font-semibold py-0.5 px-1.5 rounded">
                    {t.tag}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1.5 py-2.5 px-2.5">
                <div className="w-[18px] h-[18px] rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {t.n}
                </div>
                <span className="text-xs font-semibold text-[#374151]">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Langkah 1 – Amati
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 sm:justify-between shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 rounded-xl bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>
            <div>
              <p className="m-0 mb-1.5 text-base font-bold text-[#111827]">
                Amatilah setiap benda di atas dengan saksama.
              </p>
              <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
                Perhatikan bentuk umum setiap benda{" "}
                <span className="text-[#DC2626] font-bold">tanpa menghitung</span> banyak sisi, rusuk,
                ataupun titik sudutnya.
              </p>
            </div>
          </div>
          <EditablePageImage
            imageKey="M1-P2-L1-11"
            materi={materi}
            peta={peta}
            step={step}
            urutan="11"
            src={gambarLangkah1}
            alt="Ilustrasi langkah 1 - Amati"
            editable={editFoto}
            containerClassName="relative w-full sm:w-[180px] h-[120px] flex-shrink-0 rounded-[14px] overflow-hidden bg-[#F3F4F6]"
          />
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
