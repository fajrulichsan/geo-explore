import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  NumberedQuestion,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 1;

const pertanyaan = [
  "Apa yang terjadi pada volume limas dan prisma jika luas alas diperbesar atau diperkecil?",
  "Apa yang terjadi pada volume limas dan prisma jika tinggi diperbesar atau diperkecil?",
  "Berapa kali isi satu limas diperlukan untuk memenuhi prisma ketika luas alas dan tingginya sama?",
  "Bagaimana hubungan volume satu limas dengan volume prisma yang memiliki luas alas dan tinggi yang sama?",
  "Apakah rasio V_l / V_p tetap pada setiap percobaan?",
  "Faktor apa saja yang memengaruhi volume limas?",
];

const pilihanDugaan = [
  { v: "lebih_besar", l: "V_l selalu lebih besar" },
  { v: "lebih_kecil", l: "V_l selalu lebih kecil" },
  { v: "sama", l: "Sama besar" },
  { v: "lainnya", l: "Lainnya" },
];

export default async function Materi7Peta4Step1PengantarHipotesis({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const [gambarHero, ...gambarKotak] = await Promise.all([
    getPageImage("M7-P4-L1-1"),
    getPageImage("M7-P4-L1-2"),
    getPageImage("M7-P4-L1-3"),
    getPageImage("M7-P4-L1-4"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB] bg-white">
        <EditablePageImage
          imageKey="M7-P4-L1-1"
          materi={materi}
          peta={peta}
          step="1"
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa berdiskusi di depan laptop GeoGebra 3D dengan prisma dan tiga limas di atas meja"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex flex-col gap-3 bg-[#EFF4FF] border border-[#DBE7FF] rounded-[20px] p-5 sm:p-6">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Pengantar</h3>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">Pada tahap ini kamu akan mengeksplorasi hubungan volume limas dan volume prisma menggunakan GeoGebra 3D. Ubah luas alas dan tinggi untuk melihat bagaimana volume keduanya berubah ketika alas dan tingginya sama.</p>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">Catat semua hasil pengamatanmu pada tabel, lalu temukan pola dan buat dugaan awal.</p>
        <TipBoxFokus />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { t: "Model yang digunakan", key: "M7-P4-L1-2" as const, d: "Satu prisma dan satu limas dengan bentuk serta luas alas yang sama dan tinggi yang sama." },
          { t: "Tujuan eksplorasi", key: "M7-P4-L1-3" as const, d: "Menyelidiki hubungan volume satu limas dengan volume prisma yang memiliki luas alas dan tinggi yang sama." },
          { t: "Hasil pengamatan", key: "M7-P4-L1-4" as const, d: "Catat semua hasil pengamatanmu pada tabel dan gunakan untuk menjawab pertanyaan berikutnya." },
        ].map((k, i) => (
          <div key={k.t} className={`${cardClass} !p-4 flex flex-col gap-1.5`}>
            <EditablePageImage
              imageKey={k.key}
              materi={materi}
              peta={peta}
              step="1"
              urutan={String(i + 2)}
              src={gambarKotak[i]}
              alt={k.t}
              editable={editFoto}
              containerClassName="relative w-full aspect-[4/3] overflow-hidden"
              imageClassName="object-contain"
            />
            <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">{k.t}</h3>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">{k.d}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Pertanyaan yang Akan Dieksplorasi" />
        <div className={`${cardClass} flex flex-col gap-4`}>
          {pertanyaan.map((q, i) => (
            <NumberedQuestion key={q} n={i + 1}>
              <span className="font-semibold">{q.replace("V_l / V_p", "Vₗ / Vₚ")}</span>
            </NumberedQuestion>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Dugaan Awal (Hipotesis)" color="amber" />
        <div className={`${cardClass} flex flex-col gap-5`}>
          <p className="m-0 text-sm font-semibold text-[#111827] leading-[1.6]">
            Menurutmu, bagaimana hubungan volume satu limas dengan volume prisma jika luas alas dan tingginya sama?
          </p>
          <div className="flex flex-wrap gap-2">
            {pilihanDugaan.map((o) => (
              <label key={o.v} className="cursor-pointer">
                <input type="radio" name="answers.dugaan_awal" value={o.v} defaultChecked={getValue("dugaan_awal") === o.v} required className="peer sr-only" />
                <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#4B5563] peer-checked:border-[#2563EB] peer-checked:bg-[#EFF4FF] peer-checked:text-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB]/40 transition-colors">
                  {o.l.replace("V_l", "Vₗ")}
                </span>
              </label>
            ))}
          </div>
          <TextAreaField name="alasan_dugaan" label="Alasan dugaanmu:" value={getValue("alasan_dugaan")} />
        </div>
      </div>

      <RememberList
        items={[
          "Ubah satu variabel saja setiap percobaan (luas alas atau tinggi).",
          "Amati nilai volume prisma dan volume limas pada panel GeoGebra 3D.",
          "Catat semua hasil pengamatan pada tabel.",
          "Dugaan awal dapat berbeda-beda; semua jawaban perlu didukung alasan.",
        ]}
      />

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}

function TipBoxFokus() {
  return (
    <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
      <span className="font-extrabold">Fokus Eksplorasi: </span>
      Amati bentuk, posisi, dan kesesuaian limas serta prisma yang memiliki luas alas dan tinggi yang sama.
    </div>
  );
}
