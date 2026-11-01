import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { BANGUN, Foto, Hebat, HiddenFields, Isi, Mascot, Nav, SectionTitle, TahapHeader, Tulis, answerText, cardCls, inputCls } from "./Materi6Peta9Parts";

const pernyataan = [
  { key: "cek_lebih_satu_jawaban", teks: "Saya dapat menghasilkan lebih dari satu jawaban." },
  { key: "cek_lebih_satu_strategi", teks: "Saya dapat menggunakan lebih dari satu strategi." },
  { key: "cek_strategi_sesuai", teks: "Saya dapat memilih strategi yang paling sesuai." },
  { key: "cek_alasan", teks: "Saya dapat menjelaskan alasan terhadap jawaban saya." },
];

const perasaan = [
  { nilai: "sangat-senang", emoji: "😄", label: "Saya sangat senang!" },
  { nilai: "senang", emoji: "🙂", label: "Saya senang!" },
  { nilai: "cukup-menantang", emoji: "😐", label: "Cukup menantang!" },
  { nilai: "perlu-berlatih", emoji: "😕", label: "Saya harus lebih berlatih." },
  { nilai: "kesulitan", emoji: "😟", label: "Saya masih kesulitan." },
];

const analisis = [
  { key: "analisis_efisien", tanya: "Strategi mana yang menurutmu paling efisien? Jelaskan alasan matematisnya.", rows: 3 },
  { key: "analisis_perbedaan", tanya: "Apa perbedaan langkah penyelesaian dari kedua strategi yang kamu gunakan?", rows: 3 },
  { key: "analisis_kelebihan", tanya: "Apa kelebihan dan keterbatasan masing-masing strategi? Jelaskan berdasarkan hasil penyelesaianmu.", rows: 3 },
];

export default async function Materi6Peta9Step2AlternatifDiskusi({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const dipilih = answerText(initialAnswers, "alt_bangun");
  const perasaanDipilih = answerText(initialAnswers, "perasaan");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={2} />
      <TahapHeader materi={materi} step={2} />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="A"
          judul="Alternatif Penyelesaian"
          hint="Tuliskan satu alternatif jawaban lain yang berbeda dari jawaban pertama."
          warna="#1E3A8A"
        />
        <div className={`${cardCls} flex flex-col gap-4`}>
          <fieldset className="m-0 border-0 p-0 flex flex-wrap gap-3">
            <legend className="mb-2 text-sm font-bold text-[#1E3A8A]">Bangun</legend>
            {BANGUN.map((b) => (
              <label
                key={b.nama}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold cursor-pointer has-[:checked]:ring-2"
                style={{ backgroundColor: b.bg, borderColor: b.border, color: b.warna }}
              >
                <input
                  type="radio"
                  name="answers.alt_bangun"
                  value={b.nama}
                  defaultChecked={dipilih === b.nama}
                  required
                  style={{ accentColor: b.warna }}
                />
                {b.judul}
              </label>
            ))}
          </fieldset>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1E3A8A]">
              Ukuran
              <Isi name="alt_ukuran" answers={initialAnswers} label="Ukuran bangun alternatif" placeholder="Contoh: 6 cm × 6 cm × 6 cm" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1E3A8A]">
              Volume (cm³)
              <input
                name="answers.alt_volume"
                defaultValue={answerText(initialAnswers, "alt_volume")}
                placeholder="..."
                required
                className={`${inputCls} text-center`}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1E3A8A]">
            Alasan
            <Tulis name="alt_alasan" answers={initialAnswers} rows={4} label="Alasan memilih alternatif ini" />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="B" judul="Analisis Strategi" warna="#1E3A8A" />
        <div className={`${cardCls} grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-6 items-start`}>
          <Foto
            k="M6-P9-L4-1"
            src={img["M6-P9-L4-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa berkata Strateginya bisa berbeda, tetapi jawabannya tetap benar"
            className="relative w-full overflow-hidden rounded-2xl"
          />
          <ol className="m-0 p-0 list-none flex flex-col gap-4">
            {analisis.map((q, i) => (
              <li key={q.key} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-sm text-[#374151] leading-[1.5]">{q.tanya}</span>
                  <Tulis name={q.key} answers={initialAnswers} rows={q.rows} label={q.tanya} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="C" judul="Diskusi Terbuka" warna="#B45309" />
        <div className="rounded-[20px] border border-[#F5E3A0] bg-[#FFFBEB] p-5 flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] gap-5 items-center">
            <Foto
              k="M6-P9-L4-2"
              src={img["M6-P9-L4-2"]}
              ctx={ctx}
              urutan="2"
              natural
              alt="Tiga siswa berdiskusi dengan gelembung kubus, balok, dan prisma"
              className="relative w-full overflow-hidden rounded-2xl"
            />
            <div className="flex flex-col gap-3 text-sm text-[#374151] leading-[1.6]">
              <p className="m-0">Diskusikan bersama temanmu. Apakah jawaban kalian sama? Jika berbeda,</p>
              <ul className="m-0 pl-5 list-disc">
                <li>Apakah semuanya benar?</li>
                <li>Mengapa?</li>
              </ul>
              <Foto
                k="M6-P9-L4-3"
                src={img["M6-P9-L4-3"]}
                ctx={ctx}
                urutan="6"
                natural
                alt="Ingat! Tidak ada satu jawaban tunggal pada soal terbuka. Lebih dari satu jawaban yang benar dapat ditemukan jika memenuhi syarat volume 216 cm³"
                className="relative w-full max-w-[260px] overflow-hidden"
              />
            </div>
          </div>
          <label className="flex flex-col gap-2 text-sm font-bold text-[#1E3A8A]">
            Tuliskan kesimpulan kelompok.
            <Tulis name="diskusi_kesimpulan" answers={initialAnswers} rows={4} label="Kesimpulan kelompok" />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="D" judul="Kesimpulan Tantangan" hint="Lengkapilah pernyataan berikut." warna="#1E3A8A" />
        <div className={`${cardCls} grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_150px] gap-5 items-start`}>
          <div className="flex flex-col gap-3">
            {pernyataan.map((p) => (
              <label key={p.key} className="flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5] cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  value="ya"
                  defaultChecked={answerText(initialAnswers, p.key) === "ya"}
                  className="mt-0.5 h-4 w-4 accent-[#2563EB]"
                />
                {p.teks}
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-2 text-sm font-bold text-[#1E3A8A]">
            Tuliskan kesimpulanmu.
            <Tulis name="kesimpulan" answers={initialAnswers} rows={5} label="Kesimpulanmu" />
          </label>
          <Foto
            k="M6-P9-L5-1"
            src={img["M6-P9-L5-1"]}
            ctx={ctx}
            urutan="3"
            natural
            alt="Siswa menunjuk ke atas dengan bintang berkilau"
            className="relative w-32 mx-auto lg:w-full overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="E"
          judul="Bagaimana Perasaanmu?"
          hint="Bagaimana perasaanmu setelah menyelesaikan tantangan ini? Pilih salah satu."
          warna="#1D4ED8"
        />
        <div className={`${cardCls} flex flex-col gap-4`}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {perasaan.map((p) => (
              <label
                key={p.nilai}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-[#BFDBFE] bg-[#EFF4FF] px-2 py-3 text-center text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-[#2563EB] has-[:checked]:bg-white"
              >
                <span className="text-3xl" aria-hidden>
                  {p.emoji}
                </span>
                {p.label}
                <input
                  type="radio"
                  name="answers.perasaan"
                  value={p.nilai}
                  defaultChecked={perasaanDipilih === p.nilai}
                  required
                  className="h-4 w-4 accent-[#2563EB]"
                />
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-2 text-sm font-bold text-[#1D4ED8]">
            Apa yang membuatmu memilih perasaan tersebut?
            <Tulis name="alasan_perasaan" answers={initialAnswers} rows={3} label="Alasan memilih perasaan tersebut" />
          </label>
        </div>
      </div>

      <Hebat>Kamu telah berhasil menggunakan rumus volume kubus, balok, dan prisma untuk menyelesaikan masalah terbuka.</Hebat>

      <Mascot>
        <Foto
          k="M6-P9-L5-2"
          src={img["M6-P9-L5-2"]}
          ctx={ctx}
          urutan="4"
          natural
          alt="Lampu menyala sebagai tanda petunjuk"
          className="relative w-20 flex-shrink-0 overflow-hidden"
        />
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Selanjutnya</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Pada bagian berikutnya, kamu akan mengerjakan Quiz untuk mengukur pemahaman dan penguasaanmu terhadap materi
            yang telah dipelajari. Kerjakan setiap soal dengan teliti dan pilihlah jawaban yang paling tepat berdasarkan
            pengetahuan dan pemahamanmu!
          </p>
        </div>
        <Foto
          k="M6-P9-L5-3"
          src={img["M6-P9-L5-3"]}
          ctx={ctx}
          urutan="5"
          natural
          alt="Siswa laki-laki mengepalkan tangan dengan semangat"
          className="relative w-32 flex-shrink-0 overflow-hidden mix-blend-multiply"
        />
      </Mascot>

      <Nav materi={materi} peta={peta} step={2} />
    </form>
  );
}
