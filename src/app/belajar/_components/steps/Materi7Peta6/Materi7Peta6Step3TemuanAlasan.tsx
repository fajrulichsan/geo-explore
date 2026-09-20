import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
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

const STEP = 3;

const temuan = [
  { key: "temuan_sesuai", label: "Hasil perhitungan sesuai dengan nilai pada model." },
  { key: "temuan_rasio", label: "Rasio volume satu limas terhadap volume prisma menunjukkan nilai yang sama pada setiap percobaan." },
  { key: "temuan_tiga", label: "Tiga kali volume satu limas sesuai dengan volume prisma pada pasangan bangun yang diuji (dengan luas alas dan tinggi yang sama)." },
  { key: "temuan_beda", label: "Terdapat perbedaan hasil pada beberapa percobaan sehingga dugaan perlu diperiksa kembali." },
];

export default async function Materi7Peta6Step3TemuanAlasan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Memverifikasi Hubungan Volume Satu Limas dan Volume Prisma" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Apa yang Kamu Temukan?" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan data pada tabel dan model, pilih pernyataan yang sesuai dengan hasil percobaanmu. (Boleh lebih dari satu jawaban.)
        </p>
        <div className={`${cardClass} flex flex-col gap-3`}>
          {temuan.map((t) => (
            <CheckItem key={t.key} name={t.key} label={t.label} checked={getChecked(t.key)} />
          ))}
        </div>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold">Catatan: </span>
          Gunakan kata &ldquo;pada percobaan yang dilakukan&rdquo;, karena kesimpulan umum akan dibahas pada Tahap 6.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Alasan Sementara" color="green" />
        <div className={`${cardClass} flex flex-col gap-4`}>
          <TextAreaField
            name="alasan_sementara"
            label="Tuliskan alasan mengapa kamu memilih pernyataan di atas. Gunakan data, pola, dan hasil eksplorasi sebagai dasar jawabanmu."
            value={getValue("alasan_sementara")}
            rows={5}
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
