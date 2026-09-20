import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, Hebat, HiddenFields, Mascot, Nav, SectionTitle, TahapHeader, Tulis, answerText, cardCls } from "./Materi6Peta9Parts";

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

export default async function Materi6Peta9Step5KesimpulanPerasaan({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const dipilih = answerText(initialAnswers, "perasaan");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={5} />
      <TahapHeader materi={materi} step={5} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="G" judul="Kesimpulan Tantangan" hint="Lengkapilah pernyataan berikut." warna="#1E3A8A" />
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
            urutan="1"
            natural
            alt="Siswa menunjuk ke atas dengan bintang berkilau"
            className="relative w-32 mx-auto lg:w-full overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="H"
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
                  defaultChecked={dipilih === p.nilai}
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
          urutan="2"
          natural
          alt="Siswa mengepalkan tangan dengan semangat"
          className="relative w-32 flex-shrink-0 overflow-hidden mix-blend-multiply"
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Selanjutnya</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Pada bagian berikutnya, kamu akan mempelajari rangkuman seluruh materi Bangun Ruang Sisi Datar yang telah
            dipelajari.
          </p>
        </div>
      </Mascot>

      <Nav materi={materi} peta={peta} step={5} last />
    </form>
  );
}
