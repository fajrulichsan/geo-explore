import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { HiddenStepFields, StepFooter, StepTitle, SUBTITLE, TipBox, cardClass } from "./Materi8Peta9Parts";

const STEP = 1;

const petunjuk = [
  "Pilih salah satu faktor skala yang tersedia (2, 3, atau ½).",
  "Gunakan sedikitnya dua strategi berbeda untuk menentukan volume model baru.",
  "Tuliskan langkah, perhitungan, dan alasan matematis pada Panel B.",
  "Jika masih ada waktu, kamu dapat mencoba faktor skala lainnya. Bandingkan hasil dan strategimu.",
];

export default async function Materi8Peta9Step1Pengantar({ materi, peta, editFoto }: StepComponentProps) {
  const hero = await getPageImage("M8-P9-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <EditablePageImage
        imageKey="M8-P9-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa berdiskusi dengan laptop: tidak hanya satu cara benar, ada banyak strategi yang bisa kamu coba"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className={`${cardClass} flex flex-col gap-3`}>
        <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Pengantar</h2>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Kamu telah menemukan hubungan antara faktor skala dan perubahan volume bangun ruang.
        </p>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Sekarang gunakan pengetahuan tersebut untuk menyelesaikan sebuah masalah terbuka. Tidak hanya satu strategi yang benar. Yang terpenting adalah bagaimana kamu menjelaskan alasan matematis dari strategi yang digunakan dan membandingkan dengan strategi lain.
        </p>
        <TipBox>“Cobalah berpikir fleksibel, kreatif, dan runtut!”</TipBox>
      </div>

      <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-3">
        <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Petunjuk Pengerjaan</h2>
        <ol className="m-0 p-0 list-none flex flex-col gap-2.5">
          {petunjuk.map((t, i) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
