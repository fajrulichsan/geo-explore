import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { BANGUN, Foto, HiddenFields, Nav, Pengantar, SectionTitle, TahapHeader, answerText, cardCls, inputCls } from "./Materi6Peta4Parts";

const data = {
  kubus: {
    alas: "Luas alas (kubus pada alas) = 3 × 3 = 9 satuan²",
    hasil: ["Tinggi = 1 → 9 kubus", "Tinggi = 2 → 18 kubus", "Tinggi = 3 → 27 kubus"],
  },
  balok: {
    alas: "Luas alas (kubus pada alas) = 5 × 2 = 10 satuan²",
    hasil: ["Tinggi = 1 → 10 kubus", "Tinggi = 2 → 20 kubus", "Tinggi = 3 → 30 kubus"],
  },
  prisma: {
    alas: "Luas penampang segitiga (tetap) = ½ × 3 × 2 = 3 satuan²",
    hasil: ["Panjang prisma = 1", "Panjang prisma = 2", "Panjang prisma = 3"],
  },
};

export default async function Materi6Peta4Step9TabelPerbandingan({ materi, peta, step = "9", editFoto, initialAnswers }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const ctxIkon = { ...ctx, editFoto: false };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={9} />
      <TahapHeader materi={materi} step={9} subtitle="Ayo Bereksplorasi 3 — Bandingkan Hasil dan Susun Dugaan Awal" />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        <Pengantar>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">Sekarang, bandingkan hasil pengamatan dari GeoGebra 3D dan Augmented Reality (AR).</p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Temukan pola, lalu susun dugaan awal tentang pengaruh banyak lapisan atau panjang terhadap volume.
          </p>
          <p className="m-0 text-sm font-semibold leading-[1.6] text-[#111827]">Catat seluruh hasil dan pemikiranmu.</p>
        </Pengantar>
        <Foto
          k="M6-P4-L9-1"
          img={img}
          ctx={ctx}
          urutan="1"
          natural
          alt="Tiga siswa membandingkan hasil GeoGebra 3D dan AR dengan kubus, balok, dan prisma"
          className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="J" judul="Tabel Perbandingan Hasil GeoGebra 3D dan AR" hint="Bandingkan hasil pengamatanmu pada kedua media berikut!" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BANGUN.map((b, i) => (
            <div key={b.nama} className={`${cardCls} flex flex-col gap-4`}>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                {b.nama === "prisma" ? (
                  <Foto k="M6-P4-L9-2" img={img} ctx={ctx} urutan="2" alt="Prisma segitiga dengan beberapa posisi penampang" className="relative w-10 h-14 flex-shrink-0" />
                ) : (
                  <Foto k={b.icon} img={img} ctx={ctxIkon} alt={b.iconAlt} className="relative w-12 h-12 flex-shrink-0" />
                )}
                <span className="text-base font-extrabold" style={{ color: b.warna }}>
                  {b.judul}
                </span>
              </div>
              {["GeoGebra 3D", "Augmented Reality (AR)"].map((media) => (
                <div key={media} className="rounded-2xl border p-3 flex flex-col gap-1.5" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                  <span className="text-xs font-bold" style={{ color: b.warna }}>
                    {media} (data yang diamati)
                  </span>
                  <span className="text-xs text-[#374151] leading-[1.4]">{data[b.nama].alas}</span>
                  <ul className="m-0 pl-5 text-xs text-[#374151] leading-[1.5] list-disc">
                    {data[b.nama].hasil.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.sama_${b.nama}`}
                  defaultChecked={Boolean(initialAnswers?.[`sama_${b.nama}`])}
                  className="w-4 h-4 flex-shrink-0 accent-[#2563EB]"
                />
                <span className="text-sm font-semibold text-[#374151]">Sama? (✓)</span>
              </label>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#374151]">Pola yang ditemukan</label>
                <textarea
                  name={`answers.pola_${b.nama}`}
                  defaultValue={answerText(initialAnswers, `pola_${b.nama}`)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className={`${inputCls} resize-y`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
          <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.5] list-disc">
            <li>Tinggi (kubus/balok) atau panjang prisma adalah ukuran yang diubah.</li>
            <li>Volume bangun ruang dipengaruhi oleh luas penampang sejajar alas dan panjang/tingginya.</li>
          </ul>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={9} />
    </form>
  );
}
