import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta9Parts";

const STEP = 6;

const diskusi = [
  "Apakah jawaban kalian sama?",
  "Jika berbeda, apakah semuanya benar?",
  "Mengapa demikian?",
  "Apa yang dapat disimpulkan tentang hubungan luas alas, tinggi, dan volume limas?",
];

export default async function Materi7Peta9Step6DiskusiOpenEnded({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const scene = await getPageImage("M7-P9-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Saatnya Menunjukkan Berbagai Strategimu!" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Diskusi Open-Ended" color="green" />
        <EditablePageImage
          imageKey="M7-P9-L6-1"
          materi={materi}
          peta={peta}
          step="6"
          urutan="1"
          src={scene}
          alt="Tiga siswa berdiskusi: setiap strategi mungkin berbeda, tetapi semua tetap benar selama memenuhi syarat volume"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-[20px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4">
          <div className={`${cardClass} flex flex-col gap-4`}>
            <p className="m-0 text-sm font-bold text-[#111827]">Diskusikan bersama temanmu.</p>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5] list-disc">
              {diskusi.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <TextAreaField name="kesimpulan_kelompok" label="Tuliskan kesimpulan kelompok." value={getValue("kesimpulan_kelompok")} rows={4} />
          </div>
          <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 text-sm text-[#92400E] leading-[1.6]">
            <span className="block font-extrabold text-base mb-1">Ingat!</span>
            Tidak ada satu <strong>jawaban tunggal</strong> pada soal terbuka. Lebih dari satu jawaban dapat benar selama memenuhi semua syarat pada masalah.
          </div>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
