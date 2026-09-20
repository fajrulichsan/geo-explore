import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, Hebat, HiddenFields, Isi, Mascot, Nav, SectionTitle, TahapHeader, Tulis, cardCls } from "./Materi6Peta7Parts";

const persamaan = [
  { nama: "kubus", label: "Kubus", warna: "#2563EB" },
  { nama: "balok", label: "Balok", warna: "#16A34A" },
  { nama: "prisma", label: "Prisma", warna: "#7C3AED" },
];

export default async function Materi6Peta7Step2PrismaPersamaan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={2} />
      <TahapHeader materi={materi} step={2} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle
            huruf="C"
            judul="Menyimpulkan Volume Prisma Segitiga"
            hint="Tuliskan hubungan volume prisma segitiga berdasarkan hasil verifikasimu."
            warna="#B91C1C"
          />
          <div className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: "#FECACA" }}>
            <label className="flex flex-col gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-3">
              <span className="text-sm font-bold text-[#B91C1C]">Volume prisma segitiga diperoleh dari</span>
              <Tulis name="prisma_diperoleh" answers={initialAnswers} rows={3} label="Volume prisma segitiga diperoleh dari" />
            </label>
            <div className="grid grid-cols-[112px_1fr] gap-4 items-center">
              <Foto
                k="M6-P7-L2-1"
                src={img["M6-P7-L2-1"]}
                ctx={ctx}
                urutan="1"
                natural
                alt="Model prisma segitiga"
                className="relative w-28 overflow-hidden"
              />
              <div className="flex flex-col gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-3">
                <span className="w-fit rounded-full bg-white px-3 py-0.5 text-xs font-bold text-[#B91C1C]">Lengkapilah.</span>
                <p className="m-0 text-sm text-[#374151]">
                  Volume = luas penampang segitiga sejajar alas × <span className="font-bold text-[#DC2626]">panjang prisma</span>
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#374151]">
                  <span className="whitespace-nowrap">V =</span>
                  <Isi name="prisma_v1" answers={initialAnswers} label="Isian pertama" className="min-w-0" />
                  ×
                  <Isi name="prisma_v2" answers={initialAnswers} label="Isian kedua" className="min-w-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle huruf="D" judul="Apa Persamaannya?" hint="Lengkapilah." warna="#C2410C" />
          <div className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: "#FED7AA" }}>
            <div className="flex flex-col gap-3 rounded-2xl border border-[#FDE68A] bg-[#FEF9E7] p-4">
              {persamaan.map((p) => (
                <div key={p.nama} className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_84px_1fr] items-center gap-2 text-sm">
                  <span className="font-bold" style={{ color: p.warna }}>
                    {p.label}
                  </span>
                  <span className="font-semibold text-[#374151]">Volume =</span>
                  <div className="col-span-2 sm:col-span-1">
                    <Isi name={`persamaan_${p.nama}`} answers={initialAnswers} label={`Volume ${p.label}`} className="text-left" />
                  </div>
                </div>
              ))}
            </div>
            <label className="flex flex-col gap-2 text-sm text-[#374151] leading-[1.5]">
              <span className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  ?
                </span>
                Berdasarkan jawabanmu di atas, apa pola umum yang sama pada rumus volume ketiga bangun tersebut?
              </span>
              <Tulis name="pola_umum" answers={initialAnswers} rows={4} label="Pola umum rumus volume" />
            </label>
          </div>
        </div>
      </div>

      <Hebat>
        Kamu telah menemukan pola umum rumus volume berdasarkan hasil verifikasimu pada Tahap 5. Lanjutkan ke halaman
        berikutnya!
      </Hebat>

      <Mascot>
        <Foto
          k="M6-P7-L2-2"
          src={img["M6-P7-L2-2"]}
          ctx={ctx}
          urutan="2"
          natural
          alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut dan temukan rumus umumnya"
          className="relative w-44 flex-shrink-0 overflow-hidden"
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Lanjut ke Halaman 2</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Pada halaman berikutnya, kita akan menuliskan rumus volume secara lebih rinci dan melihat keterkaitannya.
          </p>
        </div>
      </Mascot>

      <Nav materi={materi} peta={peta} step={2} />
    </form>
  );
}
