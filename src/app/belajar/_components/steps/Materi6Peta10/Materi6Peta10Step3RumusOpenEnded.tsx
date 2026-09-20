import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Balok, Foto, HiddenFields, Kubus, Nav, RangkumanHeader, SectionTitle, Tip, cardCls } from "./Materi6Peta10Parts";

const pelajaran = [
  "Satu soal dapat memiliki lebih dari satu jawaban yang benar.",
  "Satu soal dapat diselesaikan dengan beberapa strategi yang berbeda.",
  "Setiap strategi perlu disertai alasan yang logis.",
  "Berdiskusi membantu menemukan berbagai alternatif penyelesaian.",
  "Memilih strategi yang paling efisien merupakan bagian dari berpikir matematis.",
];

export default async function Materi6Peta10Step3RumusOpenEnded({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const kolom = "rounded-2xl border p-4 flex flex-col items-center gap-2 text-center";
  const rumus = "w-full rounded-xl px-3 py-2 text-base font-bold italic";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={3} />
      <RangkumanHeader materi={materi} step={3} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="E" judul="Rumus Volume Kubus, Balok, dan Prisma segi-n" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${kolom} bg-[#EFF4FF] border-[#BFDBFE]`}>
            <div>
              <b className="text-[#1E3A8A]">Kubus</b>
              <div className="text-xs text-[#4B5563]">(balok khusus)</div>
            </div>
            <Kubus className="w-24 h-24" />
            <div className={`${rumus} bg-[#DBEAFE] text-[#1E3A8A]`}>V = s<sup>3</sup></div>
            <p className="m-0 text-sm text-[#374151]">s = panjang rusuk kubus</p>
          </div>
          <div className={`${kolom} bg-[#DCFCE7] border-[#86EFAC]`}>
            <div>
              <b className="text-[#166534]">Balok</b>
              <div className="text-xs text-[#4B5563]">(prisma segiempat)</div>
            </div>
            <Balok className="w-28 h-24" />
            <div className={`${rumus} bg-[#BBF7D0] text-[#166534]`}>V = p × l × t</div>
            <p className="m-0 text-sm text-[#374151]">p = panjang balok<br />l = lebar balok<br />t = tinggi balok</p>
          </div>
          <div className={`${kolom} bg-[#F3E8FF] border-[#D8B4FE]`}>
            <div>
              <b className="text-[#6B21A8]">Prisma segi-n</b>
              <div className="text-xs text-[#4B5563]">(contoh: prisma segitiga)</div>
            </div>
            <Foto
              k="M6-P10-L2-2"
              urutan="2"
              src={img["M6-P10-L2-2"]}
              ctx={ctx}
              editable={false}
              alt="Prisma segitiga"
              className="relative w-36"
            />
            <div className={`${rumus} bg-[#E9D5FF] text-[#6B21A8]`}>V = L<sub>alas</sub> × p</div>
            <p className="m-0 text-sm text-[#374151]">
              L<sub>alas</sub> = luas alas (segi-n)<br />p = panjang prisma (jarak antara dua bidang alas sejajar)
            </p>
          </div>
        </div>
        <Tip>
          Pada prisma, tinggi bangun adalah jarak antara dua bidang alas sejajar. Dalam kegiatan Submateri 6, ukuran ini
          disebut <b>panjang prisma</b>.
        </Tip>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="F" judul="Apa yang Dipelajari dari Open-Ended?" warna="#F59E0B" />
        <ol className={`${cardCls} m-0 list-none flex flex-col gap-4 bg-[#FFFBEB] border-[#F5E3A0]`}>
          {pelajaran.map((p, i) => (
            <li key={p} className="flex items-start gap-3.5 text-sm text-[#374151] leading-[1.6]">
              <span className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="pt-1">{p}</span>
            </li>
          ))}
        </ol>
      </div>

      <Nav materi={materi} peta={peta} step={3} />
    </form>
  );
}
