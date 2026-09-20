import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CheckItem,
  HiddenStepFields,
  PengantarPanel,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta7Parts";

const STEP = 1;

const pernyataan = [
  { key: "hubungan_alas", label: "Volume satu limas dipengaruhi oleh luas alas." },
  { key: "hubungan_tinggi", label: "Volume satu limas dipengaruhi oleh tinggi limas." },
  { key: "hubungan_keduanya", label: "Volume satu limas ditentukan oleh luas alas dan tinggi limas." },
];

export default async function Materi7Peta7Step1MenyimpulkanHubungan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const hero = await getPageImage("M7-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menyusun Rumus Volume Limas Berdasarkan Hasil Verifikasi" />

      <EditablePageImage
        imageKey="M7-P7-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa bertanya tentang rumus volume limas dengan GeoGebra 3D dan AR"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PengantarPanel
          intro="Pada Tahap 5 kamu telah memverifikasi bahwa tiga kali isi satu limas dapat memenuhi satu prisma yang memiliki luas alas dan tinggi yang sama. Sekarang kita akan menggunakan hasil verifikasi tersebut untuk menemukan sendiri rumus volume limas. Ayo, berpikir lebih dalam!"
          items={[]}
        />
        <RememberList
          title="Langkah Hari Ini"
          items={[
            "Mengingat hasil verifikasi Tahap 5.",
            "Menghubungkan volume limas dan prisma.",
            "Menuliskan rumus volume limas.",
            "Menjelaskan alasan rumus tersebut.",
          ]}
        />
      </div>

      <TipBox>Ingat! Limas dan prisma yang dibandingkan memiliki luas alas dan tinggi yang sama.</TipBox>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Menyimpulkan Hubungan Volume" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan hasil verifikasi pada Tahap 5, beri tanda centang (✓) pada semua pernyataan yang benar.
        </p>
        <div className={`${cardClass} flex flex-col gap-3`}>
          {pernyataan.map((p) => (
            <CheckItem key={p.key} name={p.key} label={p.label} checked={getChecked(p.key)} />
          ))}
        </div>
        <div className={cardClass}>
          <TextAreaField
            name="hubungan_volume"
            label="Tuliskan hubungan volume satu limas terhadap volume prisma berdasarkan hasil verifikasi."
            value={getValue("hubungan_volume")}
            rows={4}
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
