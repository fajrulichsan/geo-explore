import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import {
  BANGUN,
  BangunLabel,
  Foto,
  HiddenFields,
  Nav,
  Pengantar,
  SectionTitle,
  TahapHeader,
  YaTidak,
  answerText,
  cardCls,
  inputCls,
} from "./Materi6Peta6Parts";

const kolom = [
  { key: "luas", label: "Luas alas / luas penampang sejajar alas (satuan²)" },
  { key: "tinggi", label: "Tinggi kubus/balok atau panjang prisma (satuan)" },
  { key: "volume", label: "Volume (satuan³)" },
  { key: "model", label: "Hasil pada Model (GeoGebra 3D/AR)" },
];

export default async function Materi6Peta6Step5RekapHasil({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={5} />
      <TahapHeader materi={materi} step={5} />

      <Pengantar
        kutipan="Cermati, bandingkan, dan temukan polanya!"
        hero={
          <Foto
            k="M6-P6-L5-1"
            src={img["M6-P6-L5-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa merekap hasil verifikasi kubus, balok, dan prisma segitiga"
            className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
          />
        }
      >
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Kita sudah memverifikasi dugaan hubungan volume pada kubus, balok, dan prisma segitiga. Sekarang saatnya kita
          merekap seluruh hasil verifikasi dan mencari pola yang sama dari ketiga bangun tersebut.
        </p>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Gunakan hasil pengamatanmu untuk menjawab pertanyaan dan menarik temuan penting sebelum kita menyusun rumus
          umum pada tahap berikutnya.
        </p>
      </Pengantar>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="I"
          judul="Rekap Hasil Verifikasi"
          hint="Lengkapilah tabel berikut berdasarkan seluruh hasil pengujian yang telah kamu lakukan pada halaman 1 dan 2."
          warna="#166534"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BANGUN.map((b) => (
            <div key={b.nama} className={`${cardCls} flex flex-col gap-3`} style={{ borderColor: b.border }}>
              <BangunLabel b={b} icons={img} ctx={ctx} />
              {kolom.map((k) => (
                <label key={k.key} className="flex flex-col gap-1.5 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                  <span className="text-xs font-bold leading-[1.4]" style={{ color: b.warna }}>
                    {k.label}
                  </span>
                  <input
                    name={`answers.rekap_${b.nama}_${k.key}`}
                    defaultValue={answerText(initialAnswers, `rekap_${b.nama}_${k.key}`)}
                    placeholder="..."
                    required
                    className={inputCls}
                  />
                </label>
              ))}
              <YaTidak name={`answers.rekap_${b.nama}_sama`} value={answerText(initialAnswers, `rekap_${b.nama}_sama`)} label="Sama?" />
            </div>
          ))}
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={5} />
    </form>
  );
}
