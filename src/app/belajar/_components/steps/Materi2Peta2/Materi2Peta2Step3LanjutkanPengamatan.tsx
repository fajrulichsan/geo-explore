import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const susunan = [
  { letter: "A", imageKey: "M2-P2-L3-2", urutan: "2" },
  { letter: "B", imageKey: "M2-P2-L3-3", urutan: "3" },
  { letter: "C", imageKey: "M2-P2-L3-4", urutan: "4" },
  { letter: "D", imageKey: "M2-P2-L3-5", urutan: "5" },
  { letter: "E", imageKey: "M2-P2-L3-6", urutan: "6" },
  { letter: "F", imageKey: "M2-P2-L3-7", urutan: "7" },
  { letter: "G", imageKey: "M2-P2-L3-8", urutan: "8" },
  { letter: "H", imageKey: "M2-P2-L3-9", urutan: "9" },
  { letter: "I", imageKey: "M2-P2-L3-10", urutan: "10" },
  { letter: "J", imageKey: "M2-P2-L3-11", urutan: "11" },
] satisfies { letter: string; imageKey: PageImageKey; urutan: string }[];

export default async function Materi2Peta2Step3LanjutkanPengamatan({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const [mascotImage, ...susunanImages] = await Promise.all([
    getPageImage("M2-P2-L3-1"),
    ...susunan.map((s) => getPageImage(s.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-[24px] bg-[#EFF4FF] p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M2-P2-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Siswa laki-laki memegang kaca pembesar"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-32 flex-shrink-0"
          />
          <p className="m-0 text-sm leading-[1.7] text-[#1E3A8A]">
            Masih ingat pengamatanmu pada halaman sebelumnya? Sekarang amati susunan yang berbeda, lalu bandingkan
            persamaan dan <span className="font-bold text-[#DC2626]">perbedaannya</span>.
          </p>
        </div>
        <div className="rounded-[24px] bg-[#FEF9E7] border border-[#FDE68A] p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#B45309] font-extrabold text-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6L5.7 21l1.5-7L2 9.3l7-.8z" />
            </svg>
            Ingat!
          </div>
          <ul className="m-0 pl-5 text-sm leading-[1.7] text-[#78350F] flex flex-col gap-1">
            <li>Perhatikan jumlah bidang, posisi setiap bidang, dan hubungan antarbidang.</li>
            <li>Perubahan kecil pada susunan dapat membuat hasil lipatan berbeda.</li>
          </ul>
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
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan kembali sepuluh susunan bidang datar berikut ini.</p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {susunan.map((s, i) => (
            <div
              key={s.letter}
              className="bg-white border border-[#E5E7EB] rounded-[18px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-2"
            >
              <EditablePageImage
                imageKey={s.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={s.urutan}
                src={susunanImages[i]}
                alt={`Susunan bidang datar ${s.letter}`}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-[4/3]"
              />
              <span className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center text-sm font-extrabold">
                {s.letter}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-[#FEF9E7] rounded-2xl py-3.5 px-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            <span className="font-bold text-[#1E3A8A]">Petunjuk: </span>
            Amati setiap gambar dengan saksama, kemudian temukan persamaan dan perbedaannya sebelum mengisi tabel pada
            bagian berikutnya.
          </p>
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
