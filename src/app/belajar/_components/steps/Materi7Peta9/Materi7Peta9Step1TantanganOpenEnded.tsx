import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CheckItem,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta9Parts";

const STEP = 1;

const bentuk = [
  { key: "limas_persegi", label: "Limas Persegi", urutan: "2", alt: "Limas persegi berwarna ungu", aspect: "aspect-[4/3]" },
  { key: "limas_segitiga", label: "Limas Segitiga", urutan: "3", alt: "Limas segitiga berwarna oranye", aspect: "aspect-[4/3]" },
  { key: "limas_segilima", label: "Limas Segilima", urutan: "4", alt: "Limas segilima berwarna biru", aspect: "aspect-[4/3]" },
] as const;

const syarat = [
  "Volume limas harus 120 cm³.",
  "Tentukan ukuran alas, hitung luas alasnya, kemudian tentukan tinggi limas yang menghasilkan volume 120 cm³.",
  "Jelaskan bagaimana kamu memperoleh ukuran tersebut.",
  "Jika memungkinkan, berikan lebih dari satu alternatif ukuran.",
  "Tidak harus menggunakan bentuk limas yang sama (kamu boleh memilih salah satu atau lebih dari satu bentuk limas).",
];

const urutan = ["Tentukan ukuran alas", "Hitung luas alas", "Tentukan tinggi limas", "Periksa volume"];

export default async function Materi7Peta9Step1TantanganOpenEnded({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getChecked } = readAnswers(initialAnswers);
  const [hero, ...gambarBentuk] = await Promise.all([
    getPageImage("M7-P9-L1-1"),
    getPageImage("M7-P9-L1-2"),
    getPageImage("M7-P9-L1-3"),
    getPageImage("M7-P9-L1-4"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Saatnya Menunjukkan Berbagai Strategimu!" />

      <EditablePageImage
        imageKey="M7-P9-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa bertanya: bisakah limas dengan ukuran berbeda memiliki volume yang sama?"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className={`${cardClass} flex flex-col gap-3`}>
        <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Pengantar</h2>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Kamu telah mempelajari rumus volume limas dan berbagai cara menyelesaikan masalah. Sekarang saatnya kamu menggunakan pengetahuan tersebut untuk menghadapi tantangan terbuka yang memiliki <strong>lebih dari satu jawaban</strong>.
        </p>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Periksa, eksplorasi, dan temukan berbagai kemungkinan ukuran alas dan tinggi limas yang memiliki volume yang sama.
        </p>
        <TipBox>Satu volume, banyak kemungkinan!</TipBox>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Tantangan Open-Ended" />
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
          Sebuah perusahaan akan membuat wadah berbentuk limas dengan volume <strong>120 cm³</strong>. Wadah tersebut dapat dibuat dalam beberapa bentuk berikut. Centang bentuk yang kamu pilih.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {bentuk.map((b, i) => (
            <div key={b.key} className={`${cardClass} !p-4 flex flex-col gap-3`}>
              <CheckItem name={b.key} label={b.label} checked={getChecked(b.key)} />
              <EditablePageImage
                imageKey={`M7-P9-L1-${b.urutan}` as "M7-P9-L1-2"}
                materi={materi}
                peta={peta}
                step="1"
                urutan={b.urutan}
                src={gambarBentuk[i]}
                alt={b.alt}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName={`relative w-full ${b.aspect}`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4">
          <div className="bg-white border-2 border-dashed border-[#93C5FD] rounded-[20px] p-5 flex flex-col gap-2.5">
            <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Syarat dan Petunjuk:</h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {syarat.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex flex-col items-center gap-3 text-[#92400E]">
            <span className="text-sm font-extrabold">Ingat!</span>
            <span className="text-lg font-extrabold italic">V = ⅓ × L<sub>alas</sub> × t</span>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="#92400E" strokeWidth="1.6" strokeLinejoin="round" aria-label="Limas segilima dengan tinggi t dan luas alas">
              <path d="M60 8 L16 84 L44 104 L86 104 L108 80 Z" fill="#FDE68A" fillOpacity="0.4" />
              <path d="M60 8 L44 104 M60 8 L86 104" />
              <path d="M16 84 L60 92 L108 80 M60 92 L60 8" strokeDasharray="4 3" />
            </svg>
            <span className="text-xs">t = tinggi limas · L<sub>alas</sub> = luas alas</span>
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3">
          <p className="m-0 mb-2 text-sm font-extrabold text-[#92400E]">Urutan yang dapat kamu ikuti:</p>
          <ol className="m-0 p-0 list-none grid grid-cols-2 md:grid-cols-4 gap-2">
            {urutan.map((t, i) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold text-[#374151]">
                <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
