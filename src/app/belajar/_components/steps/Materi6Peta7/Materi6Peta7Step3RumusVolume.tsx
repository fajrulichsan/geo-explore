import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Isi, Nav, SectionTitle, TahapHeader, cardCls } from "./Materi6Peta7Parts";

const Simbol = ({ k, v }: { k: string; v: string }) => (
  <li className="flex gap-2">
    <span className="w-6 font-bold italic">{k}</span>
    <span>= {v}</span>
  </li>
);

export default async function Materi6Peta7Step3RumusVolume({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const satuan = (
    <p className="m-0 text-sm text-[#374151]">
      Satuan volume = satuan panjang<sup>3</sup> (contoh: cm<sup>3</sup>, m<sup>3</sup>)
    </p>
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={3} />
      <TahapHeader materi={materi} step={3} />

      <Foto
        k="M6-P7-L3-1"
        src={img["M6-P7-L3-1"]}
        ctx={ctx}
        urutan="1"
        natural
        alt="Tiga siswa berkata Kita temukan rumusnya dari pola yang sama, yuk"
        className="relative w-full min-h-24 rounded-[24px] overflow-hidden"
      />

      <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5">
        <span className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center flex-shrink-0">★</span>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">
          Berdasarkan <strong>hasil verifikasi</strong> pada Halaman 1, lengkapi kesimpulan umum berikut untuk menyusun
          rumus volume kubus, balok, dan prisma segitiga.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle huruf="E" judul="Kubus" />
          <div className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: "#BFDBFE" }}>
            <p className="m-0 rounded-2xl bg-[#EFF4FF] px-4 py-3 text-sm text-[#374151] leading-[1.5]">
              Volume kubus diperoleh dari luas alas (sisi × sisi) dikali tinggi (sisi).
            </p>
            <p className="m-0 text-sm font-bold text-[#2563EB]">Rumus volume kubus:</p>
            <div className="flex flex-col gap-2 rounded-2xl border border-[#FDE68A] bg-[#FEF9E7] p-3 text-sm font-bold text-[#374151]">
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap">V =</span>
                <Isi name="kubus_r1" answers={initialAnswers} label="Faktor pertama" className="min-w-0" />×
                <Isi name="kubus_r2" answers={initialAnswers} label="Faktor kedua" className="min-w-0" />×
                <Isi name="kubus_r3" answers={initialAnswers} label="Faktor ketiga" className="min-w-0" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap">V =</span>
                <Isi name="kubus_ringkas" answers={initialAnswers} label="Bentuk ringkas" className="min-w-0" />
              </div>
            </div>
            <p className="m-0 text-sm font-bold text-[#2563EB]">Keterangan:</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-0.5 text-sm text-[#374151]">
              <Simbol k="s" v="panjang sisi kubus" />
              <Simbol k="V" v="volume kubus" />
            </ul>
            {satuan}
            <Foto
              k="M6-P7-L3-2"
              src={img["M6-P7-L3-2"]}
              ctx={ctx}
              urutan="2"
              natural
              alt="Kubus dengan sisi s"
              className="relative w-full overflow-hidden"
            />
            <p className="m-0 rounded-2xl bg-[#EFF4FF] px-4 py-3 text-xs text-[#374151]">
              Pada kubus, panjang, lebar, dan tinggi sama, yaitu s.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle huruf="F" judul="Balok" warna="#166534" />
          <div className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: "#BBF7D0" }}>
            <p className="m-0 rounded-2xl bg-[#F0FDF4] px-4 py-3 text-sm text-[#374151] leading-[1.5]">
              Volume balok diperoleh dari luas alas (panjang × lebar) dikali tinggi.
            </p>
            <p className="m-0 text-sm font-bold text-[#166534]">Rumus volume balok:</p>
            <div className="flex flex-col gap-2 rounded-2xl border border-[#FDE68A] bg-[#FEF9E7] p-3 text-sm font-bold text-[#374151]">
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap">V =</span>
                <Isi name="balok_r1" answers={initialAnswers} label="Faktor pertama" className="min-w-0" />×
                <Isi name="balok_r2" answers={initialAnswers} label="Faktor kedua" className="min-w-0" />×
                <Isi name="balok_r3" answers={initialAnswers} label="Faktor ketiga" className="min-w-0" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap">V =</span>
                <Isi name="balok_ringkas" answers={initialAnswers} label="Bentuk ringkas" className="min-w-0" />
              </div>
            </div>
            <p className="m-0 text-sm font-bold text-[#166534]">Keterangan:</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-0.5 text-sm text-[#374151]">
              <Simbol k="p" v="panjang balok" />
              <Simbol k="l" v="lebar balok" />
              <Simbol k="t" v="tinggi balok" />
              <Simbol k="V" v="volume balok" />
            </ul>
            {satuan}
            <Foto
              k="M6-P7-L3-3"
              src={img["M6-P7-L3-3"]}
              ctx={ctx}
              urutan="3"
              natural
              alt="Balok dengan panjang p, lebar l, dan tinggi t"
              className="relative w-full overflow-hidden"
            />
            <p className="m-0 rounded-2xl bg-[#F0FDF4] px-4 py-3 text-xs text-[#374151]">
              Pada balok, panjang, lebar, dan tinggi dapat berbeda.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle huruf="G" judul="Prisma Segitiga" warna="#B91C1C" />
          <div className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: "#FECACA" }}>
            <p className="m-0 rounded-2xl bg-[#FEF2F2] px-4 py-3 text-sm text-[#374151] leading-[1.5]">
              Volume prisma segitiga diperoleh dari luas penampang segitiga sejajar alas dikali panjang prisma.
            </p>
            <p className="m-0 text-sm font-bold text-[#B91C1C]">Rumus volume prisma segitiga:</p>
            <div className="flex flex-col gap-2 rounded-2xl border border-[#FDE68A] bg-[#FEF9E7] p-3 text-sm font-bold text-[#374151]">
              <p className="m-0">V = (½ × a × t<sub>s</sub>) × p</p>
              <div className="flex items-center gap-1.5">
                <span className="whitespace-nowrap">V =</span>
                <Isi name="prisma_ringkas" answers={initialAnswers} label="Bentuk ringkas" className="min-w-0" />
              </div>
            </div>
            <p className="m-0 text-sm font-bold text-[#B91C1C]">Keterangan:</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-0.5 text-sm text-[#374151]">
              <Simbol k="a" v="panjang alas segitiga" />
              <li className="flex gap-2">
                <span className="w-6 font-bold italic">
                  t<sub>s</sub>
                </span>
                <span>= tinggi segitiga</span>
              </li>
              <Simbol k="p" v="panjang prisma" />
              <Simbol k="V" v="volume prisma segitiga" />
            </ul>
            {satuan}
            <Foto
              k="M6-P7-L3-4"
              src={img["M6-P7-L3-4"]}
              ctx={ctx}
              urutan="4"
              natural
              alt="Penampang segitiga dan prisma segitiga"
              className="relative w-full overflow-hidden"
            />
            <p className="m-0 rounded-2xl bg-[#FEF2F2] px-4 py-3 text-xs text-[#374151]">
              Luas penampang segitiga sejajar alas = ½ × a × t<sub>s</sub>
            </p>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={3} />
    </form>
  );
}
