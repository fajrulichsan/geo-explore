import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CheckItem,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta6Parts";

const STEP = 7;

const petunjuk = [
  "bandingkan semua percobaan;",
  "perhatikan rasio volume;",
  "hubungkan dengan visualisasi pengisian satu limas yang dilakukan berulang hingga prisma penuh.",
];

const refleksi = [
  { key: "ref_verifikasi", label: "Saya dapat memverifikasi dugaan hubungan volume limas dan prisma menggunakan data dan pola." },
  { key: "ref_faktor", label: "Saya memahami bahwa volume satu limas dipengaruhi oleh luas alas dan tinggi." },
  { key: "ref_jelaskan", label: "Saya dapat menjelaskan hasil verifikasi dengan kata-kata saya sendiri." },
  { key: "ref_percaya", label: "Saya lebih percaya diri dalam menarik kesimpulan berdasarkan data." },
  { key: "ref_siap", label: "Saya siap melanjutkan ke tahap berikutnya." },
];

export default async function Materi7Peta6Step7DasarRefleksi({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const [laki, perempuan] = await Promise.all([getPageImage("M7-P6-L7-1"), getPageImage("M7-P6-L7-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menarik Kesimpulan Verifikasi" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="I" title="Apa Dasar Kesimpulanmu?" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">
          Gunakan seluruh hasil verifikasi sebagai dasar penjelasanmu. Tuliskan jawabanmu dengan runtut dan jelas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-5 items-end">
          <div className="flex flex-col gap-4">
            <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
              <span className="font-extrabold">Petunjuk:</span>
              <ul className="m-0 mt-1 pl-5 list-disc">
                {petunjuk.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className={cardClass}>
              <TextAreaField name="dasar_penjelasan" label="Penjelasan:" value={getValue("dasar_penjelasan")} rows={5} />
            </div>
          </div>
          <EditablePageImage
            imageKey="M7-P6-L7-1"
            materi={materi}
            peta={peta}
            step="7"
            urutan="1"
            src={laki}
            alt="Maskot laki-laki: Gunakan data, pola, dan model untuk menjelaskan alasanmu!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[384/558] mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="J" title="Refleksi" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">Beri tanda centang pada pernyataan yang sesuai dengan dirimu.</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {refleksi.map((r) => (
              <CheckItem key={r.key} name={r.key} label={r.label} checked={getChecked(r.key)} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P6-L7-2"
            materi={materi}
            peta={peta}
            step="7"
            urutan="2"
            src={perempuan}
            alt="Maskot perempuan: Terus semangat! Kemampuan berpikir ilmiahmu semakin berkembang!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[381/577] mx-auto"
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
