import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import {
  BANGUN,
  BangunLabel,
  Foto,
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

const temuan = [
  { key: "temuan_komponen", tanya: "Komponen apa yang selalu digunakan dalam perhitungan volume ketiga bangun?" },
  { key: "temuan_pola", tanya: "Pola hubungan apa yang mulai terlihat antara komponen tersebut dan volume?" },
];

const periksa = [
  "luas alas atau luas penampang segitiga,",
  "tinggi kubus/balok atau panjang prisma,",
  "satuan yang digunakan,",
  "banyak satuan volume pada model (gunakan fitur tampilan satuan).",
];

export default async function Materi6Peta6Step4BandingkanPola({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={4} />
      <TahapHeader materi={materi} step={4} />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="F"
          judul="Membandingkan Pola Perhitungan Ketiga Bangun"
          hint="Berdasarkan hasil verifikasi pada kubus (halaman 1), balok (halaman 1), dan prisma segitiga (halaman ini), lengkapi tabel berikut."
          warna="#166534"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BANGUN.map((b) => (
            <div key={b.nama} className={`${cardCls} flex flex-col gap-3`} style={{ borderColor: b.border }}>
              <BangunLabel b={b} icons={img} ctx={ctx} />
              <label className="flex flex-col gap-1.5 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                <span className="text-xs font-bold" style={{ color: b.warna }}>
                  Perhitungan volume yang digunakan
                </span>
                <input
                  name={`answers.bandingkan_${b.nama}_rumus`}
                  defaultValue={answerText(initialAnswers, `bandingkan_${b.nama}_rumus`)}
                  placeholder="Ketik jawabanmu..."
                  required
                  className={inputCls}
                />
              </label>
              <YaTidak
                name={`answers.bandingkan_${b.nama}_sesuai`}
                value={answerText(initialAnswers, `bandingkan_${b.nama}_sesuai`)}
                label="Sesuai dengan model?"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle huruf="G" judul="Apa yang Kamu Temukan?" />
          <div className={`${cardCls} flex flex-col gap-4`}>
            {temuan.map((t, i) => (
              <div key={t.key} className="flex flex-col gap-2">
                <label htmlFor={t.key} className="flex items-start gap-3 text-sm text-[#374151] leading-[1.5]">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {t.tanya}
                </label>
                <textarea
                  id={t.key}
                  name={`answers.${t.key}`}
                  defaultValue={answerText(initialAnswers, t.key)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className={`${inputCls} resize-y`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle huruf="H" judul="Jika Berbeda" warna="#B45309" />
          <div className={`${cardCls} flex flex-col gap-3`}>
            <label htmlFor="jika_berbeda" className="text-sm text-[#374151] leading-[1.5]">
              Jika hasil perhitunganmu berbeda dengan model, apa yang perlu diperbaiki?
            </label>
            <textarea
              id="jika_berbeda"
              name="answers.jika_berbeda"
              defaultValue={answerText(initialAnswers, "jika_berbeda")}
              rows={4}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
            <div className="rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] px-4 py-3 flex flex-col gap-1.5">
              <span className="text-sm font-bold text-[#166534]">Periksa kembali:</span>
              <ul className="m-0 p-0 list-none flex flex-col gap-1">
                {periksa.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                    <span className="text-[#16A34A] font-bold">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-center">
        <div className="flex flex-col gap-4">
          <Hebat>
            Kamu telah menguji dugaan hubungan volume pada prisma segitiga dan membandingkannya dengan kubus serta balok.
            Pada halaman berikutnya, kita akan menyusun kesimpulan bersama.
          </Hebat>
          <p className="m-0 rounded-2xl bg-[#EFF4FF] border border-[#BFDBFE] px-5 py-3.5 text-sm text-[#374151] leading-[1.5]">
            <span className="font-bold text-[#1E3A8A]">Lanjut ke Halaman 3.</span> Gunakan seluruh hasil verifikasi untuk
            menuliskan kesimpulanmu pada halaman berikutnya.
          </p>
        </div>
        <Foto
          k="M6-P6-L4-1"
          src={img["M6-P6-L4-1"]}
          ctx={ctx}
          urutan="1"
          natural
          alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut ke halaman berikutnya"
          className="relative w-56 mx-auto lg:w-full min-h-24 overflow-hidden"
        />
      </div>

      <Nav materi={materi} peta={peta} step={4} />
    </form>
  );
}
