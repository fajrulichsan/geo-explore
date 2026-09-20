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
} from "./Materi7Peta6Parts";

const STEP = 5;

const pilihan = [
  { v: "terbukti", l: "Dugaan tersebut sudah terbukti benar." },
  { v: "diperbaiki", l: "Dugaan tersebut perlu diperbaiki." },
  { v: "ditolak", l: "Dugaan tersebut ditolak." },
];

export default async function Materi7Peta6Step5KesimpulanVerifikasi({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const hero = await getPageImage("M7-P6-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menarik Kesimpulan Verifikasi" />

      <EditablePageImage
        imageKey="M7-P6-L5-1"
        materi={materi}
        peta={peta}
        step="5"
        urutan="1"
        src={hero}
        alt="Dua siswa menyimpulkan hasil verifikasi hubungan volume limas dan prisma"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Kesimpulan Verifikasi" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan seluruh hasil verifikasi pada Tahap 5, dugaan hubungan volume satu limas dan volume prisma yang kamu susun pada Tahap 4 adalah ...
        </p>
        <div className={`${cardClass} flex flex-col gap-5`}>
          <div className="flex flex-col gap-1">
            {pilihan.map((p) => (
              <label key={p.v} className="flex items-center gap-2.5 py-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="answers.kesimpulan_pilihan"
                  value={p.v}
                  defaultChecked={getValue("kesimpulan_pilihan") === p.v}
                  required
                  className="w-4 h-4 accent-[#2563EB]"
                />
                <span className="text-sm text-[#374151]">{p.l}</span>
              </label>
            ))}
          </div>
          <TextAreaField
            name="kesimpulan_alasan"
            label="Jelaskan alasanmu berdasarkan data dan analisis:"
            value={getValue("kesimpulan_alasan")}
            rows={5}
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
