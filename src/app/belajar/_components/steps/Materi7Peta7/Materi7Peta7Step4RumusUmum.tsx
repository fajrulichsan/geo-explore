import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  PengantarPanel,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
} from "./Materi7Peta7Parts";

const STEP = 4;

const keterangan = [
  { simbol: <>V</>, arti: "volume limas", satuan: "satuan³" },
  { simbol: <>L<sub className="text-[10px]">alas</sub></>, arti: "luas alas limas", satuan: "satuan²" },
  { simbol: <span className="text-[#2563EB]">t</span>, arti: "tinggi limas", satuan: "satuan" },
];

export default async function Materi7Peta7Step4RumusUmum({ materi, peta, editFoto }: StepComponentProps) {
  const hero = await getPageImage("M7-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menuliskan Rumus Umum Volume Limas" />

      <EditablePageImage
        imageKey="M7-P7-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa menuliskan rumus umum volume limas dengan GeoGebra 3D dan AR"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PengantarPanel
          intro="Pada Tahap 5, kamu telah memverifikasi bahwa tiga kali isi satu limas dapat memenuhi satu prisma yang memiliki luas alas dan tinggi yang sama. Sekarang kita akan menuliskan rumus umum volume limas berdasarkan hasil verifikasi tersebut dan melihat penerapannya dalam berbagai situasi nyata."
          items={[]}
        />
        <RememberList
          title="Langkah Hari Ini"
          items={[
            "Menyusun rumus umum volume limas.",
            "Menggunakan rumus pada beberapa contoh.",
            "Menjelaskan alasan rumus tersebut benar.",
            "Menuliskan kesimpulan dengan kata-katamu sendiri.",
          ]}
        />
      </div>

      <TipBox>Ingat! Limas dan prisma yang dibandingkan memiliki luas alas dan tinggi yang sama.</TipBox>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="E" title="Rumus Umum Volume Limas" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan <span className="font-bold">hasil verifikasi</span> pada Tahap 5, diperoleh:
        </p>
        <div className="bg-gradient-to-br from-[#EFF6FF] to-[#F0FDFA] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-5">
          <h3 className="m-0 text-center text-base font-extrabold text-[#1E3A8A]">Rumus umum volume limas</h3>
          <div className="bg-white border-2 border-[#2563EB] rounded-2xl py-5 px-4 flex items-center justify-center gap-3 text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            <span>V =</span>
            <span className="inline-flex flex-col items-center text-2xl sm:text-4xl leading-none">
              <span>1</span>
              <span className="w-full border-t-2 border-[#111827] my-1" />
              <span>3</span>
            </span>
            <span>× L<sub className="text-lg sm:text-2xl">alas</sub> × <span className="text-[#2563EB]">t</span></span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Keterangan:</h4>
            {keterangan.map((k) => (
              <p key={k.arti} className="m-0 flex items-baseline gap-3 text-sm text-[#374151]">
                <span className="w-12 font-bold text-base">{k.simbol}</span>
                <span>= {k.arti} ( satuan : {k.satuan} )</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
