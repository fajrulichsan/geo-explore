import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import type { PageImageKey } from "@/lib/pageImages";
import { Foto, Hebat, HiddenFields, Mascot, Nav, SectionTitle, TahapHeader, Tulis, cardCls } from "./Materi6Peta7Parts";

const soal: {
  no: number;
  teks: string;
  diketahui: string[];
  tanya: string;
  key: PageImageKey;
  alt: string;
  bg: string;
  border: string;
}[] = [
  {
    no: 1,
    teks: "Sebuah kubus memiliki panjang rusuk 8 cm. Hitung volume kubus tersebut.",
    diketahui: ["s = 8 cm"],
    tanya: "V = … ?",
    key: "M6-P7-L6-1",
    alt: "Kubus dengan panjang rusuk 8 cm",
    bg: "#EFF4FF",
    border: "#BFDBFE",
  },
  {
    no: 2,
    teks: "Sebuah balok memiliki panjang 12 cm, lebar 7 cm, dan tinggi 5 cm. Hitung volume balok tersebut.",
    diketahui: ["p = 12 cm", "l = 7 cm", "t = 5 cm"],
    tanya: "V = … ?",
    key: "M6-P7-L6-2",
    alt: "Balok dengan panjang 12 cm, lebar 7 cm, dan tinggi 5 cm",
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  {
    no: 3,
    teks: "Sebuah prisma segitiga memiliki penampang segitiga sejajar alas dengan panjang alas segitiga 10 cm dan tinggi segitiga 6 cm. Panjang prismanya 15 cm. Hitung volume prisma segitiga tersebut.",
    diketahui: ["a = 10 cm", "t_s = 6 cm", "p = 15 cm"],
    tanya: "V = … ?",
    key: "M6-P7-L6-3",
    alt: "Prisma segitiga dengan alas 10 cm, tinggi segitiga 6 cm, dan panjang 15 cm",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
];

const penerapan: { no: number; teks: string; key: PageImageKey; alt: string }[] = [
  {
    no: 1,
    teks: "Sebuah akuarium berbentuk balok dengan ukuran panjang 60 cm, lebar 30 cm, dan tinggi 40 cm. Hitung volume akuarium tersebut dan jelaskan manfaatnya.",
    key: "M6-P7-L6-4",
    alt: "Akuarium berbentuk balok berisi ikan dan tanaman air",
  },
  {
    no: 2,
    teks: "Sebuah tenda berbentuk prisma segitiga memiliki penampang segitiga sejajar alas dengan panjang alas 200 cm dan tinggi segitiga 150 cm. Panjang tendanya 300 cm. Hitung volume tenda tersebut dan jelaskan manfaatnya.",
    key: "M6-P7-L6-5",
    alt: "Tenda berbentuk prisma segitiga dengan alas 200 cm, tinggi 150 cm, dan panjang 300 cm",
  },
];

export default async function Materi6Peta7Step6UjiPemahaman({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={6} />
      <TahapHeader materi={materi} step={6} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="M" judul="Uji Pemahaman" hint="Selesaikan soal berikut untuk menguji pemahamanmu." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {soal.map((s, i) => (
            <div key={s.no} className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: s.border }}>
              <p className="m-0 flex items-start gap-3 text-sm text-[#374151] leading-[1.5]">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {s.no}
                </span>
                {s.teks}
              </p>
              <Foto
                k={s.key}
                src={img[s.key]}
                ctx={ctx}
                urutan={String(i + 1)}
                natural
                alt={s.alt}
                className="relative w-full overflow-hidden"
              />
              <div className="rounded-2xl border p-3 text-sm text-[#374151]" style={{ backgroundColor: s.bg, borderColor: s.border }}>
                <p className="m-0 font-bold text-[#DC2626]">Diketahui:</p>
                {s.diketahui.map((d) => (
                  <p key={d} className="m-0">
                    {d.replace("t_s", "tₛ")}
                  </p>
                ))}
                <p className="m-0 mt-1 font-bold text-[#1E3A8A]">Ditanyakan:</p>
                <p className="m-0">{s.tanya}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-bold text-[#1E3A8A]">Jawab:</span>
                <Tulis name={`uji_${s.no}`} answers={initialAnswers} rows={4} label={`Jawaban soal ${s.no}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="N"
          judul="Penerapan Kehidupan Sehari-hari"
          hint="Pilih salah satu situasi berikut. Tentukan bangun ruang yang sesuai, hitung volumenya, dan jelaskan kegunaannya dalam kehidupan sehari-hari."
          warna="#166534"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {penerapan.map((p, i) => (
            <div key={p.no} className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: "#BBF7D0" }}>
              <span className="w-fit rounded-full bg-[#1E3A8A] text-white text-xs font-bold px-4 py-1">Pilihan {p.no}</span>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-4 items-center">
                <p className="m-0 text-sm text-[#374151] leading-[1.6]">{p.teks}</p>
                <Foto
                  k={p.key}
                  src={img[p.key]}
                  ctx={ctx}
                  urutan={String(i + 4)}
                  natural
                  alt={p.alt}
                  className="relative w-full overflow-hidden rounded-2xl"
                />
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-bold text-[#1E3A8A]">Jawab:</span>
                <Tulis name={`terap_${p.no}_jawab`} answers={initialAnswers} rows={3} label={`Jawaban pilihan ${p.no}`} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-bold text-[#1E3A8A]">Manfaat:</span>
                <Tulis name={`terap_${p.no}_manfaat`} answers={initialAnswers} rows={3} label={`Manfaat pilihan ${p.no}`} />
              </label>
            </div>
          ))}
        </div>
      </div>

      <Hebat>
        Kamu telah menyelesaikan verifikasi dan menyusun rumus volume bangun ruang sisi datar. Teruslah berpikir kritis
        dan teliti!
      </Hebat>

      <Mascot>
        <Foto
          k="M6-P7-L6-6"
          src={img["M6-P7-L6-6"]}
          ctx={ctx}
          urutan="6"
          natural
          alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut ke refleksi diri"
          className="relative w-44 flex-shrink-0 overflow-hidden"
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Selesai Tahap 6</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kamu telah menyelesaikan seluruh kegiatan pada Submateri 6. Sekarang saatnya refleksi diri untuk melihat
            perkembangan belajarmu!
          </p>
        </div>
      </Mascot>

      <Nav materi={materi} peta={peta} step={6} last />
    </form>
  );
}
