import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { BANGUN, Foto, HiddenFields, Nav, SectionTitle, TahapHeader, Tulis, answerText, cardCls } from "./Materi6Peta9Parts";

const syarat = [
  "Volume tetap 216 cm³.",
  "Tentukan sendiri ukuran bangun yang menghasilkan volume 216 cm³.",
  "Jelaskan alasan memilih ukuran tersebut.",
  "Jika memungkinkan, berikan lebih dari satu alternatif.",
];

const tuliskan = ["Bangun yang dipilih", "Ukuran bangun", "Cara menghitung volume", "Alasan memilih ukuran tersebut"];

const periksa = [
  { key: "periksa_bukti", tanya: "Bagaimana kamu membuktikan bahwa ukuran bangun yang kamu pilih menghasilkan volume tepat 216 cm³?" },
  { key: "periksa_sesuai", tanya: "Mengapa cara perhitungan yang kamu gunakan sesuai dengan bentuk bangun yang dipilih?" },
  { key: "periksa_perbaiki", tanya: "Jika hasil perhitunganmu tidak sama dengan 216 cm³, bagian mana yang perlu kamu periksa atau perbaiki? Jelaskan." },
];

const shapeKey = { kubus: "M6-P9-L1-3", balok: "M6-P9-L1-4", prisma: "M6-P9-L1-5" } as const;
const shapeUrutan = { kubus: "3", balok: "4", prisma: "5" } as const;

export default async function Materi6Peta9Step1TantanganOpenEnded({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const dipilih = answerText(initialAnswers, "bangun_dipilih");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <TahapHeader materi={materi} step={1} />

      <div className="relative rounded-[20px] overflow-hidden border border-[#E5E7EB]">
        <Foto
          k="M6-P9-L1-1"
          src={img["M6-P9-L1-1"]}
          ctx={ctx}
          urutan="1"
          natural
          alt="Tiga siswa berdiskusi dengan laptop GeoGebra, model kubus, balok, prisma, dan tablet AR"
          className="relative w-full overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="A" judul="Tantangan Terbuka" warna="#1E3A8A" />
        <div className={`${cardCls} flex flex-col gap-5`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Sebuah perusahaan akan membuat kotak penyimpanan dengan volume <strong className="text-[#2563EB]">216 cm³</strong>.
            Kotak penyimpanan dapat dibuat dalam salah satu bentuk berikut. Pilih satu bentuk yang akan kamu selesaikan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BANGUN.map((b) => (
              <label
                key={b.nama}
                className="flex flex-col items-center gap-3 rounded-2xl border p-4 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1"
                style={{ backgroundColor: b.bg, borderColor: b.border }}
              >
                <span className="flex items-center gap-2 self-start text-sm font-bold" style={{ color: b.warna }}>
                  <input
                    type="radio"
                    name="answers.bangun_dipilih"
                    value={b.nama}
                    defaultChecked={dipilih === b.nama}
                    required
                    className="h-4 w-4"
                    style={{ accentColor: b.warna }}
                  />
                  {b.judul}
                </span>
                <Foto
                  k={shapeKey[b.nama]}
                  src={img[shapeKey[b.nama]]}
                  ctx={ctx}
                  urutan={shapeUrutan[b.nama]}
                  alt={b.judul}
                  className="relative w-full aspect-[4/3] overflow-hidden"
                />
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
            <div className="rounded-2xl border-2 border-dashed border-[#93C5FD] bg-[#F8FBFF] p-4">
              <p className="m-0 mb-2 text-base font-extrabold text-[#2563EB]">Syarat:</p>
              <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
                {syarat.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <Foto
              k="M6-P9-L1-6"
              src={img["M6-P9-L1-6"]}
              ctx={ctx}
              urutan="6"
              natural
              alt="Ingat! Volume = luas alas × tinggi bangun. Kubus/Balok: luas alas × tinggi. Prisma segitiga: luas penampang segitiga sejajar alas × panjang prisma"
              className="relative w-full overflow-hidden"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="B" judul="Rancang Strategi Penyelesaianmu" warna="#1E3A8A" />
        <div className={`${cardCls} grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5 items-start`}>
          <div className="text-sm text-[#374151] leading-[1.6]">
            <p className="m-0 font-bold">Tuliskan:</p>
            <ul className="m-0 mt-1 pl-5 list-disc flex flex-col gap-1">
              {tuliskan.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-[#93C5FD] bg-[#F8FBFF] p-3">
            <Tulis name="strategi" answers={initialAnswers} rows={7} label="Langkah-langkah strategi penyelesaianmu" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="C" judul="Periksa dan Jelaskan Jawabanmu" warna="#1E3A8A" />
        <div className={`${cardCls} flex flex-col gap-4`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Setelah menentukan ukuran bangun, periksa kembali jawabanmu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-5 items-center">
            <ol className="m-0 p-0 list-none flex flex-col gap-4">
              {periksa.map((q, i) => (
                <li key={q.key} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-2 flex-1">
                    <span className="text-sm text-[#374151] leading-[1.5]">{q.tanya}</span>
                    <Tulis name={q.key} answers={initialAnswers} rows={2} label={q.tanya} />
                  </div>
                </li>
              ))}
            </ol>
            <Foto
              k="M6-P9-L2-1"
              src={img["M6-P9-L2-1"]}
              ctx={ctx}
              urutan="2"
              natural
              alt="Siswa memegang kaca pembesar dan bertanya Sudah 216 cm³, kan?"
              className="relative w-40 mx-auto md:w-full overflow-hidden"
            />
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
