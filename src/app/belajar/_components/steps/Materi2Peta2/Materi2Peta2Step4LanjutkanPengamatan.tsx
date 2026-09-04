import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const tints = [
  "bg-[#EFF4FF]",
  "bg-[#F0FDF4]",
  "bg-[#FEF9E7]",
  "bg-[#FDF2F8]",
  "bg-[#F5F3FF]",
];

const susunan = [
  { letter: "A", imageKey: "M2-P2-L1-1" },
  { letter: "B", imageKey: "M2-P2-L1-2" },
  { letter: "C", imageKey: "M2-P2-L1-3" },
  { letter: "D", imageKey: "M2-P2-L1-4" },
  { letter: "E", imageKey: "M2-P2-L1-5" },
  { letter: "F", imageKey: "M2-P2-L1-6" },
  { letter: "G", imageKey: "M2-P2-L1-7" },
  { letter: "H", imageKey: "M2-P2-L1-8" },
  { letter: "I", imageKey: "M2-P2-L1-9" },
  { letter: "J", imageKey: "M2-P2-L1-10" },
] satisfies { letter: string; imageKey: PageImageKey }[];

const ingatItems = [
  "Perhatikan jumlah bidang, posisi setiap bidang, dan hubungan antarbidang.",
  "Perubahan kecil pada susunan dapat membuat hasil lipatan berbeda.",
];

export default async function Materi2Peta2Step4LanjutkanPengamatan({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const [susunanImages, mascotImage] = await Promise.all([
    Promise.all(susunan.map((s) => getPageImage(s.imageKey))),
    getPageImage("M2-P2-L4-1"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <EditablePageImage
          imageKey="M2-P2-L4-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot mengamati (lanjutkan pengamatan)"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 self-center lg:self-stretch rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-[22px] bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Masih ingat pengamatanmu pada halaman sebelumnya? Sekarang amati susunan yang berbeda,
              lalu bandingkan <span className="text-[#2563EB] font-bold">persamaan</span> dan{" "}
              <span className="text-[#DC2626] font-bold">perbedaannya</span>.
            </p>
          </div>

          <div className="rounded-[22px] bg-[#FEF9E7] border border-[#F5E3A0] p-6 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M12 17.3L6.2 21l1.4-6.5L2.5 9.9l6.6-.6L12 3l2.9 6.3 6.6.6-5.1 4.6 1.4 6.5z" />
              </svg>
            </div>
            <div>
              <h3 className="m-0 mb-2 text-base font-bold text-[#92400E]">Ingat!</h3>
              <ul className="m-0 pl-4 flex flex-col gap-1 text-sm text-[#374151] leading-[1.6] list-disc">
                {ingatItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Lanjutkan Pengamatanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan kembali sepuluh susunan bidang datar berikut ini.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {susunan.map((s, i) => (
            <div
              key={s.letter}
              className={`relative border border-[#E5E7EB] rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${tints[i % tints.length]}`}
            >
              <EditablePageImage
                imageKey={s.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 1)}
                src={susunanImages[i]}
                alt={`Susunan bidang datar ${s.letter}`}
                editable={editFoto}
                containerClassName="relative w-full aspect-square"
              />
              <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <span className="text-xs font-extrabold text-[#2563EB]">{s.letter}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl py-3.5 px-5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            <span className="font-bold">Petunjuk:</span> Amati setiap gambar dengan saksama, kemudian
            temukan persamaan dan perbedaannya sebelum mengisi tabel pada bagian berikutnya.
          </p>
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
