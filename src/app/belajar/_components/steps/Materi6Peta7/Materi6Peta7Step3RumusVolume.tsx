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

function Sketsa({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 200 130" role="img" aria-label={label} className="w-full max-w-[220px] mx-auto h-auto">
      {children}
    </svg>
  );
}

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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-center bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5">
        <div className="flex items-start gap-3">
          <span className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center flex-shrink-0">★</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Berdasarkan <strong>hasil verifikasi</strong> pada Halaman 1, lengkapi kesimpulan umum berikut untuk menyusun
            rumus volume kubus, balok, dan prisma segitiga.
          </p>
        </div>
        <Foto
          k="M6-P7-L3-1"
          src={img["M6-P7-L3-1"]}
          ctx={ctx}
          urutan="1"
          natural
          alt="Tiga siswa berkata Kita temukan rumusnya dari pola yang sama, yuk"
          className="relative w-full min-h-24 rounded-2xl overflow-hidden"
        />
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
            <Sketsa label="Kubus dengan sisi s">
              <g fill="#2563EB" stroke="#1E3A8A" strokeWidth="1.5">
                <rect x="30" y="35" width="70" height="70" fillOpacity="0.85" />
                <polygon points="100,35 130,15 130,85 100,105" fillOpacity="0.6" />
                <polygon points="30,35 60,15 130,15 100,35" fillOpacity="0.45" />
              </g>
              <g fill="#111827" fontSize="12" fontStyle="italic" fontWeight="700">
                <text x="62" y="122">s</text>
                <text x="140" y="60">s</text>
                <text x="132" y="105">s</text>
              </g>
            </Sketsa>
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
            <Sketsa label="Balok dengan panjang p, lebar l, dan tinggi t">
              <g fill="#16A34A" stroke="#14532D" strokeWidth="1.5">
                <rect x="20" y="45" width="120" height="55" fillOpacity="0.85" />
                <polygon points="140,45 170,25 170,80 140,100" fillOpacity="0.6" />
                <polygon points="20,45 50,25 170,25 140,45" fillOpacity="0.45" />
              </g>
              <g fill="#111827" fontSize="12" fontStyle="italic" fontWeight="700">
                <text x="76" y="118">p</text>
                <text x="178" y="58">t</text>
                <text x="158" y="105">l</text>
              </g>
            </Sketsa>
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
            <Sketsa label="Penampang segitiga dan prisma segitiga">
              <g stroke="#7C3AED" strokeWidth="1.5">
                <polygon points="15,100 55,35 95,100" fill="#FDBA74" />
                <polygon points="110,100 145,45 185,100" fill="#C084FC" fillOpacity="0.8" />
                <polygon points="145,45 190,40 190,95 185,100" fill="#C084FC" fillOpacity="0.5" />
              </g>
              <g fill="#111827" fontSize="11" fontStyle="italic" fontWeight="700">
                <text x="52" y="116">a</text>
                <text x="40" y="82">t<tspan fontSize="8" dy="2">s</tspan></text>
                <text x="152" y="116">p</text>
              </g>
            </Sketsa>
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
