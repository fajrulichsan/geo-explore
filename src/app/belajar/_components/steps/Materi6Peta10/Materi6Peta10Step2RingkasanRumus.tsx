import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Balok, Foto, HiddenFields, Kubus, Nav, RangkumanHeader, Rumus, SectionTitle, cardCls } from "./Materi6Peta10Parts";

const sub = (t: string) => <sub>{t}</sub>;

export default async function Materi6Peta10Step2RingkasanRumus({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const th = "px-3 py-2.5 text-left text-xs font-bold";
  const td = "px-3 py-3 align-middle text-sm text-[#374151] border-t border-[#E5E7EB]";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={2} />
      <RangkumanHeader materi={materi} step={2} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="C" judul="Ringkasan Rumus Volume" />
        <div className={`${cardCls} overflow-x-auto p-0 sm:p-0`}>
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className={th}>Bangun</th>
                <th className={th}>Bentuk</th>
                <th className={th}>Rumus Volume</th>
                <th className={th}>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}><Kubus className="w-12 h-12" /></td>
                <td className={`${td} font-semibold`}>Kubus</td>
                <td className={`${td} italic`}>V = s<sup>3</sup></td>
                <td className={td}>s = panjang rusuk kubus</td>
              </tr>
              <tr>
                <td className={td}><Balok className="w-14 h-12" /></td>
                <td className={`${td} font-semibold`}>Balok</td>
                <td className={`${td} italic`}>V = p × l × t</td>
                <td className={td}>p = panjang balok<br />l = lebar balok<br />t = tinggi balok</td>
              </tr>
              <tr>
                <td className={td}>
                  <Foto k="M6-P10-L2-2" urutan="2" src={img["M6-P10-L2-2"]} ctx={ctx} alt="Prisma segitiga" className="relative w-20" />
                </td>
                <td className={td}><b>Prisma Segitiga</b><br />(contoh prisma)</td>
                <td className={`${td} italic`}>V = L{sub("penampang segitiga sejajar alas")} × p</td>
                <td className={td}>
                  L{sub("penampang segitiga sejajar alas")} = luas alas<br />p = panjang prisma (jarak antara dua bidang alas sejajar)
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <Foto k="M6-P10-L2-3" urutan="3" src={img["M6-P10-L2-3"]} ctx={ctx} alt="Prisma segi-n" className="relative w-16" />
                </td>
                <td className={td}><b>Prisma segi-n</b><br />(generalisasi)</td>
                <td className={`${td} italic`}>V = L{sub("alas")} × p</td>
                <td className={td}>
                  L{sub("alas")} = luas alas (segi-n)<br />p = panjang prisma (jarak antara dua bidang alas sejajar)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="D" judul="Hubungan Ketiga Bangun" warna="#7C3AED" />
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5">
          <div className="flex flex-col items-center gap-1">
            {[
              { n: "Kubus", k: "(balok khusus)", cls: "bg-[#EFF4FF] border-[#BFDBFE]" },
              { n: "Balok", k: "(prisma segiempat)", cls: "bg-[#DCFCE7] border-[#86EFAC]" },
              { n: "Prisma segi-n", k: "(prisma umum)", cls: "bg-[#F3E8FF] border-[#D8B4FE]" },
            ].map((b, i) => (
              <div key={b.n} className="flex w-full flex-col items-center gap-1">
                <div className={`w-full rounded-2xl border px-4 py-2 text-center text-sm text-[#374151] ${b.cls}`}>
                  <b>{b.n}</b>
                  <br />
                  <span className="text-xs">{b.k}</span>
                </div>
                {i < 2 && (
                  <svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6">
                    <path d="M12 3v16M6 13l6 6 6-6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] bg-[#FEF9E7] border border-[#F5E3A0] p-5 flex flex-col gap-3">
              <p className="m-0 text-sm text-[#374151] leading-[1.7]">
                Kubus merupakan balok khusus, sedangkan balok merupakan prisma segiempat. Prisma segitiga dan prisma
                segi-n adalah contoh dari prisma segi-n. Oleh karena itu, kubus, balok, dan semua prisma memiliki pola
                rumus volume yang sama, yaitu:
              </p>
              <Rumus>
                V = L{sub("alas")} × t{sub("bangun")}
              </Rumus>
            </div>
            <Foto
              k="M6-P10-L2-1"
              urutan="1"
              src={img["M6-P10-L2-1"]}
              ctx={ctx}
              alt="Kubus, balok, prisma segitiga, dan prisma segi-n mengikuti pola volume yang sama"
              className="relative w-full overflow-hidden rounded-2xl bg-white border border-[#E5E7EB]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" className="flex-shrink-0">
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" />
        </svg>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#92400E]">Hebat!</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kamu telah menemukan bahwa rumus volume kubus, balok, dan prisma berlaku untuk berbagai bentuk, termasuk
            prisma segi-n. Teruslah berpikir kritis dan eksplorasi!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-5 items-center bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Selanjutnya</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Lanjutkan ke halaman berikutnya untuk melihat peta konsep, kata kunci, dan hal-hal penting lainnya dari
            kegiatan Open-Ended.
          </p>
        </div>
        <Foto
          k="M6-P10-L2-4"
          urutan="4"
          src={img["M6-P10-L2-4"]}
          ctx={ctx}
          alt="Siswa mengepalkan tangan dengan semangat"
          className="relative w-40 mx-auto sm:w-full"
        />
      </div>

      <Nav materi={materi} peta={peta} step={2} />
    </form>
  );
}
