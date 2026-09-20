import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  ChoiceTable,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  cardClass,
  readAnswers,
} from "./Materi7Peta8Parts";

const STEP = 1;

const pernyataan = [
  "Saya memahami hubungan antara volume satu limas dan volume prisma yang memiliki luas alas dan tinggi yang sama.",
  "Saya dapat menjelaskan mengapa volume satu limas adalah 1/3 volume prisma yang memiliki luas alas dan tinggi yang sama.",
  "Saya dapat menuliskan rumus umum volume limas dengan benar.",
  "Saya dapat menggunakan rumus volume limas untuk menyelesaikan soal dalam berbagai konteks.",
];

const pilihan = [
  { v: "ya", l: "Ya" },
  { v: "perlu_latihan", l: "Masih Perlu Latihan" },
  { v: "belum", l: "Belum Memahami" },
];

export default async function Materi7Peta8Step1RefleksiPemahaman({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const hero = await getPageImage("M7-P8-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} />

      <EditablePageImage
        imageKey="M7-P8-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa di perpustakaan memegang Lembar Refleksi Diri dengan model limas dan tablet AR"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className={`${cardClass} flex flex-col gap-3`}>
        <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Pengantar</h2>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Selamat! Kamu telah berhasil menemukan sendiri rumus <strong>volume limas</strong> melalui proses mengamati,
          berdiskusi, mengeksplorasi, <strong className="text-[#2563EB]">memverifikasi</strong>, dan menyimpulkan hubungan antara{" "}
          <strong className="text-[#2563EB]">volume satu limas</strong> dan volume prisma yang memiliki luas alas dan tinggi yang sama.
        </p>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Sekarang, luangkan waktu sejenak untuk merefleksikan <strong className="text-[#2563EB]">pemahamanmu</strong>, tentang hubungan
          volume limas dan prisma, <strong className="text-[#2563EB]">strategi belajar</strong> yang paling membantumu,
          tingkat <strong className="text-[#2563EB]">keyakinanmu</strong>, serta <strong className="text-[#2563EB]">target belajarmu</strong> selanjutnya.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Refleksi Pemahaman" />
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Berilah tanda centang (✓) pada jawaban yang paling sesuai.</p>
        <ChoiceTable prefix="pemahaman" rows={pernyataan} options={pilihan} getValue={getValue} />
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
