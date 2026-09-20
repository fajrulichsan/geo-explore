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
} from "./Materi7Peta7Parts";

const STEP = 6;

const petunjuk = [
  "gunakan hasil verifikasi bahwa tiga kali isi satu limas dapat mengisi satu prisma;",
  "perhatikan perbandingan volume satu limas dan prisma;",
  "hubungkan dengan luas alas dan tinggi yang sama;",
  "jelaskan bagaimana hubungan tersebut menghasilkan rumus volume limas.",
];

const kesimpulan = [
  { key: "akhir_sepertiga", label: "Volume satu limas = ⅓ × volume prisma yang memiliki luas alas dan tinggi yang sama." },
  { key: "akhir_diperoleh", label: "Rumus volume limas diperoleh dari hasil verifikasi pengisian satu limas yang dilakukan berulang tiga kali hingga memenuhi prisma yang memiliki luas alas dan tinggi yang sama." },
  { key: "akhir_sehari", label: "Volume satu limas dapat digunakan untuk menyelesaikan masalah dalam kehidupan sehari-hari." },
  { key: "akhir_jelaskan", label: "Saya dapat menjelaskan alasan rumus volume satu limas dengan kata-kata saya sendiri." },
];

export default async function Materi7Peta7Step6AlasanKesimpulan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const [laki, perempuan, hebat] = await Promise.all([
    getPageImage("M7-P7-L3-1"),
    getPageImage("M7-P7-L3-2"),
    getPageImage("M7-P7-L6-1"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menuliskan Rumus Umum Volume Limas" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Mengapa Rumus Itu Benar?" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan alasanmu berdasarkan hasil verifikasi pada Tahap 5. Gunakan petunjuk berikut jika perlu:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-5 items-center">
          <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-[20px] p-5 flex flex-col gap-2">
            <h3 className="m-0 text-sm font-extrabold text-[#BE185D]">Petunjuk:</h3>
            <ul className="m-0 pl-5 list-disc text-sm text-[#374151] leading-[1.6]">
              {petunjuk.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <EditablePageImage
            imageKey="M7-P7-L3-1"
            materi={materi}
            peta={peta}
            step="3"
            urutan="1"
            src={laki}
            alt="Maskot laki-laki: Gunakan data, pola, atau gambar untuk menjelaskan alasanmu!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 sm:w-full aspect-[357/567] mx-auto"
          />
        </div>
        <div className={cardClass}>
          <TextAreaField
            name="alasan_rumus_umum"
            label="Mengapa rumus umum volume limas tersebut benar?"
            value={getValue("alasan_rumus_umum")}
            rows={5}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Kesimpulan" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan seluruh pembahasan pada halaman ini, beri tanda centang (✓) pada pernyataan yang sesuai dengan dirimu.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-5 items-center">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {kesimpulan.map((k) => (
              <CheckItem key={k.key} name={k.key} label={k.label} checked={getChecked(k.key)} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P7-L3-2"
            materi={materi}
            peta={peta}
            step="3"
            urutan="2"
            src={perempuan}
            alt="Maskot perempuan: Kesimpulan ini akan kita gunakan pada tahap berikutnya!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 sm:w-full aspect-[340/607] mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-4 items-center bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] px-5 py-4">
        <div className="text-sm text-[#92400E] leading-[1.6] flex flex-col gap-2">
          <p className="m-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1.5 -mt-1" aria-hidden>
              <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
            </svg>
            <span className="font-extrabold text-lg">Hebat! </span>
            Kamu telah berhasil menuliskan rumus umum volume limas dengan sangat baik!
          </p>
          <p className="m-0">
            <span className="font-extrabold text-lg">Lanjut ke Tantangan </span>
            Sekarang kamu siap menyelesaikan berbagai masalah yang lebih menantang!
          </p>
        </div>
        <EditablePageImage
          imageKey="M7-P7-L6-1"
          materi={materi}
          peta={peta}
          step="6"
          urutan="1"
          src={hebat}
          alt="Maskot laki-laki bersemangat mengepalkan tangan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 aspect-[555/595] mx-auto"
        />
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
