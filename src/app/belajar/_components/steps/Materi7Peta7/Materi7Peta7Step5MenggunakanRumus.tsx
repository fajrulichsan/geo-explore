import type { ReactNode } from "react";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";
import { HiddenStepFields, SectionTitle, StepFooter, StepTitle, cardClass } from "./Materi7Peta7Parts";

const STEP = 5;

const Frac = () => (
  <span className="inline-flex flex-col items-center leading-none text-xs align-middle">
    <span>1</span>
    <span className="w-full border-t border-[#111827] my-0.5" />
    <span>3</span>
  </span>
);

const Lalas = () => (
  <span>
    L<sub className="text-[10px]">alas</sub>
  </span>
);

type Contoh = {
  judul: string;
  imageKey: PageImageKey;
  urutan: string;
  aspect: string;
  alt: string;
  soal: string;
  langkah: ReactNode[];
  jadi: ReactNode;
};

const contoh: Contoh[] = [
  {
    judul: "Contoh 1",
    imageKey: "M7-P7-L5-1",
    urutan: "1",
    aspect: "aspect-[481/589]",
    alt: "Limas segiempat berwarna biru",
    soal: "Sebuah limas segiempat memiliki luas alas 36 cm² dan tinggi 12 cm. Berapa volume limas tersebut?",
    langkah: [
      <span key="l1"><Frac /> × <Lalas /> × t</span>,
      <span key="l2"><Frac /> × 36 × 12</span>,
      <span key="l3">12 × 12</span>,
      <span key="l4" className="font-extrabold text-[#DC2626]">144 cm³</span>,
    ],
    jadi: <>Jadi, volume limas = <span className="font-extrabold text-[#DC2626]">144</span> cm³</>,
  },
  {
    judul: "Contoh 2 (Kontekstual)",
    imageKey: "M7-P7-L5-2",
    urutan: "2",
    aspect: "aspect-[430/600]",
    alt: "Tenda berbentuk limas berwarna cokelat",
    soal: "Sebuah tenda berbentuk limas memiliki luas alas 54 m² dan tinggi 10 m. Berapa volume ruang di dalam tenda tersebut?",
    langkah: [
      <span key="m1"><Frac /> × <Lalas /> × t</span>,
      <span key="m2"><Frac /> × 54 × 10</span>,
      <span key="m3">18 × 10</span>,
      <span key="l8" className="font-extrabold text-[#DC2626]">180 m³</span>,
    ],
    jadi: <>Jadi, volume ruang dalam tenda (volume limas) = <span className="font-extrabold text-[#DC2626]">180</span> m³</>,
  },
];

export default async function Materi7Peta7Step5MenggunakanRumus({ materi, peta, editFoto }: StepComponentProps) {
  const gambar = await Promise.all(contoh.map((c) => getPageImage(c.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menuliskan Rumus Umum Volume Limas" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Menggunakan Rumus Volume Limas" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">
          Coba selesaikan masalah berikut menggunakan rumus yang telah kamu peroleh.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contoh.map((c, i) => (
            <div key={c.judul} className={`${cardClass} flex flex-col gap-4`}>
              <span className="w-fit rounded-full bg-[#111827] px-4 py-1 text-xs font-bold text-white">{c.judul}</span>
              <div className="grid grid-cols-[96px_1fr] gap-4 items-center">
                <EditablePageImage
                  imageKey={c.imageKey}
                  materi={materi}
                  peta={peta}
                  step="5"
                  urutan={c.urutan}
                  src={gambar[i]}
                  alt={c.alt}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName={`relative w-24 ${c.aspect}`}
                />
                <p className="m-0 text-sm text-[#374151] leading-[1.6]">{c.soal}</p>
              </div>
              <div className="bg-[#EFF6FF] rounded-xl p-4 flex flex-col gap-2 text-sm text-[#111827]">
                <h4 className="m-0 text-sm font-extrabold text-[#2563EB]">Penyelesaian:</h4>
                {c.langkah.map((l, j) => (
                  <p key={j} className="m-0 flex items-center gap-3">
                    <span className="w-4 text-center">{j === 0 ? "V" : ""}</span>
                    <span>=</span>
                    <span>{l}</span>
                  </p>
                ))}
                <p className="m-0 mt-1 rounded-lg bg-[#FEF9E7] px-3 py-2 font-semibold">{c.jadi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
