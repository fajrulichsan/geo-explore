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

const STEP = 3;

const petunjuk = [
  "gunakan hasil verifikasi bahwa tiga kali isi satu limas dapat mengisi satu prisma;",
  "perhatikan perbandingan volume limas dan prisma;",
  "hubungkan dengan luas alas dan tinggi yang sama;",
  "jelaskan bagaimana hubungan tersebut menghasilkan rumus volume limas.",
];

const kesimpulan = [
  { key: "sementara_sepertiga", label: "Volume satu limas = ⅓ volume prisma yang memiliki luas alas dan tinggi yang sama." },
  { key: "sementara_diperoleh", label: "Volume satu limas dapat diperoleh dari hubungan tersebut." },
  { key: "sementara_pengaruh", label: "Volume satu limas dipengaruhi oleh luas alas dan tinggi." },
];

export default async function Materi7Peta7Step3AlasanKesimpulanSementara({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const [laki, perempuan] = await Promise.all([getPageImage("M7-P7-L3-1"), getPageImage("M7-P7-L3-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menyusun Rumus Volume Limas Berdasarkan Hasil Verifikasi" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Mengapa Rumus Itu Benar?" color="amber" />
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
            name="alasan_rumus"
            label="Mengapa rumus volume limas tersebut benar?"
            value={getValue("alasan_rumus")}
            rows={5}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Kesimpulan Sementara" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan seluruh pembahasan di atas, beri tanda centang (✓) pada pernyataan yang sesuai.
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
            alt="Maskot perempuan: Kesimpulan ini akan kita gunakan pada halaman berikutnya!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 sm:w-full aspect-[340/607] mx-auto"
          />
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
        <span className="font-extrabold text-lg">Hebat! </span>
        Kamu telah menggunakan hasil verifikasi untuk menyusun rumus volume limas dengan sangat baik! Selanjutnya, kita akan menggunakan rumus ini pada berbagai contoh dan situasi nyata.
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
