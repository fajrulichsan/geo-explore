import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import {
  BANGUN,
  BangunLabel,
  Hebat,
  HiddenFields,
  Nav,
  SectionTitle,
  TahapHeader,
  YaTidak,
  answerText,
  cardCls,
  inputCls,
} from "./Materi6Peta6Parts";

const kolom = [
  { key: "luas", label: "Luas alas (satuan²)" },
  { key: "tinggi", label: "Tinggi (satuan)" },
  { key: "hitung", label: "Hasil perhitungan (volume, satuan³)" },
  { key: "model", label: "Hasil pada model (satuan³)" },
];

export default async function Materi6Peta6Step2HasilSementaraRefleksi({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={2} />
      <TahapHeader materi={materi} step={2} />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="C"
          judul="Hasil Verifikasi Sementara"
          hint="Lengkapilah tabel berikut berdasarkan hasil verifikasimu pada kubus dan balok."
          warna="#166534"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {BANGUN.slice(0, 2).map((b) => (
            <div key={b.nama} className={`${cardCls} flex flex-col gap-3`} style={{ borderColor: b.border }}>
              <BangunLabel b={b} icons={img} ctx={ctx} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kolom.map((k) => (
                  <label key={k.key} className="flex flex-col gap-1.5 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                    <span className="text-xs font-bold leading-[1.4]" style={{ color: b.warna }}>
                      {k.label}
                    </span>
                    <input
                      name={`answers.sementara_${b.nama}_${k.key}`}
                      defaultValue={answerText(initialAnswers, `sementara_${b.nama}_${k.key}`)}
                      placeholder="..."
                      required
                      className={inputCls}
                    />
                  </label>
                ))}
              </div>
              <YaTidak name={`answers.sementara_${b.nama}_sama`} value={answerText(initialAnswers, `sementara_${b.nama}_sama`)} label="Sama?" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle huruf="D" judul="Refleksi" warna="#B45309" />
          <div className={`${cardCls} flex flex-col gap-2.5`}>
            <label htmlFor="refleksi_faktor" className="text-sm text-[#374151] leading-[1.5]">
              Berdasarkan hasil verifikasi kubus dan balok, faktor apa yang tampaknya berkaitan dengan volume?
            </label>
            <textarea
              id="refleksi_faktor"
              name="answers.refleksi_faktor"
              defaultValue={answerText(initialAnswers, "refleksi_faktor")}
              rows={5}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
          </div>
        </div>
        <Hebat>
          Kamu telah memverifikasi dugaan volume pada kubus dan balok. Pada halaman selanjutnya, kita akan memverifikasi
          apakah pola yang sama juga berlaku pada prisma segitiga.
        </Hebat>
      </div>

      <Nav materi={materi} peta={peta} step={2} />
    </form>
  );
}
