import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, SectionTitle, TahapHeader, answerText, cardCls, inputCls } from "./Materi6Peta4Parts";

const kelompok = [
  {
    judul: "Untuk Kubus dan Balok",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    soal: [
      "Apa yang tetap ketika jumlah lapisan (tinggi) bertambah?",
      "Apa yang berubah ketika jumlah lapisan (tinggi) bertambah?",
      "Mengapa volume selalu bertambah seiring bertambahnya tinggi?",
    ],
  },
  {
    judul: "Untuk Prisma Segitiga",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    soal: [
      "Apakah bentuk dan luas penampang segitiga tetap ketika panjang prisma bertambah?",
      "Apa yang berubah ketika panjang prisma bertambah?",
      "Mengapa volume prisma bertambah ketika panjang prisma bertambah dan luas penampang sejajar alas tetap?",
    ],
  },
];

export default async function Materi6Peta4Step10PertanyaanEksplorasi({ materi, peta, step = "10", editFoto, initialAnswers }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={10} />
      <TahapHeader materi={materi} step={10} subtitle="Ayo Bereksplorasi 3 — Bandingkan Hasil dan Susun Dugaan Awal" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="K" judul="Pertanyaan Eksplorasi" hint="Jawablah pertanyaan berikut berdasarkan data yang kamu peroleh!" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-5 items-start">
          <div className="flex flex-col gap-5">
            {kelompok.map((g, gi) => (
              <div key={g.judul} className={`${cardCls} flex flex-col gap-4`} style={{ backgroundColor: g.bg, borderColor: g.border }}>
                <span className="text-base font-extrabold" style={{ color: g.warna }}>
                  {g.judul}
                </span>
                {g.soal.map((s, si) => {
                  const n = gi * 3 + si + 1;
                  return (
                    <div key={s} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: g.warna }}
                      >
                        {n}
                      </span>
                      <div className="flex flex-col gap-2 w-full">
                        <span className="text-sm font-semibold text-[#111827] leading-[1.5]">{s}</span>
                        <textarea
                          name={`answers.pertanyaan_${n}`}
                          defaultValue={answerText(initialAnswers, `pertanyaan_${n}`)}
                          rows={2}
                          placeholder="Ketik jawabanmu di sini..."
                          required
                          className={`${inputCls} resize-y`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <Foto k="M6-P4-L10-1" img={img} ctx={ctx} urutan="1" natural alt="Siswa berpikir dengan tanda tanya" className="relative w-40 mx-auto lg:w-full min-h-24 rounded-[20px] overflow-hidden bg-white" />
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={10} />
    </form>
  );
}
