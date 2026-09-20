import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, RangkumanHeader, Rumus, SectionTitle, Tip, cardCls } from "./Materi6Peta10Parts";

const alur = [
  { teks: "Luas alas (atau luas penampang sejajar alas)", cls: "bg-[#FEF9E7] border-[#F5E3A0]" },
  { teks: "Disusun setinggi bangun", cls: "bg-[#DCFCE7] border-[#86EFAC]" },
  { teks: "Terbentuk volume bangun ruang", cls: "bg-[#EFF4FF] border-[#BFDBFE]" },
];

export default async function Materi6Peta10Step1PengantarKonsep({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <RangkumanHeader materi={materi} step={1} />

      <Foto
        k="M6-P10-L1-1"
        urutan="1"
        src={img["M6-P10-L1-1"]}
        ctx={ctx}
        alt="Tiga siswa dengan GeoGebra 3D, model kubus, balok, prisma, dan AR sedang merangkum konsep volume"
        className="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="A" judul="Apa yang Telah Kamu Pelajari?" />
        <div className={`${cardCls} flex flex-col gap-4`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Selama Submateri 6, kamu telah mengamati, berdiskusi, mengeksplorasi, mengolah informasi, memverifikasi, dan
            menyimpulkan melalui kegiatan Open-Ended. Sekarang, rangkum kembali konsep-konsep penting yang telah kamu
            temukan.
          </p>
          <Tip>
            Kamu telah menemukan bahwa volume kubus, balok, dan prisma dapat diperoleh dengan mengalikan luas alas (atau
            luas penampang sejajar alas) dengan tinggi kubus/balok atau panjang prisma.
          </Tip>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="B" judul="Hubungan Luas Alas, Tinggi Kubus/Balok atau Panjang Prisma, dan Volume" warna="#16A34A" />
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-5">
          <div className="flex flex-col items-center gap-1">
            {alur.map((a, i) => (
              <div key={a.teks} className="flex w-full flex-col items-center gap-1">
                <div className={`w-full rounded-2xl border px-4 py-3 text-center text-sm font-semibold text-[#374151] ${a.cls}`}>
                  {a.teks}
                </div>
                {i < alur.length - 1 && (
                  <svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6">
                    <path d="M12 3v16M6 13l6 6 6-6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className={`${cardCls} flex flex-col gap-4`}>
            <span className="text-lg font-extrabold text-[#1E3A8A]">Kesimpulan untuk Submateri 6</span>
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Pada kubus, balok, dan prisma, volume diperoleh dengan mengalikan luas alas atau luas penampang sejajar alas
              dengan tinggi kubus/balok atau panjang prisma. Rumus ini berlaku untuk semua prisma, termasuk prisma segi-n.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#2563EB]">Rumus Umum</span>
              <Rumus>
                V = L<sub>alas</sub> × t<sub>bangun</sub>
              </Rumus>
            </div>
            <p className="m-0 rounded-2xl bg-[#EFF4FF] border border-[#BFDBFE] px-4 py-3 text-sm text-[#1D4ED8] leading-[1.6]">
              Untuk kubus/balok, t<sub>bangun</sub> = tinggi. Untuk prisma, t<sub>bangun</sub> = panjang prisma (jarak
              antara dua bidang alas sejajar).
            </p>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
