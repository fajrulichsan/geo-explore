import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 7;

const baris = [
  { n: 1, label: "Banyak kali isi satu limas untuk memenuhi prisma" },
  { n: 2, label: "Luas alas prisma dan limas (L)" },
  { n: 3, label: "Tinggi prisma dan limas (t)" },
  { n: 4, label: "Volume prisma (Vₚ)" },
  { n: 5, label: "Volume satu limas (Vₗ)" },
];

const fields = [
  { key: "gg_hasil", label: "GeoGebra 3D - Hasil Pengamatan" },
  { key: "gg_pola", label: "GeoGebra 3D - Pola yang Ditemukan" },
  { key: "ar_hasil", label: "AR - Hasil Pengamatan" },
  { key: "ar_pola", label: "AR - Pola yang Ditemukan" },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors";

export default async function Materi7Peta4Step7BandingkanHasil({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const gambarHero = await getPageImage("M7-P4-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Membandingkan Hasil dan Susun Dugaan Awal" />

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Sekarang saatnya membandingkan hasil eksplorasimu!</h2>
          <p className="m-0 text-sm text-white/90 max-w-2xl leading-[1.6]">Temukan pola dan susun dugaan awal tentang hubungan volume limas dan volume prisma.</p>
        </div>
        <div className="relative bg-white rounded-2xl p-3 sm:p-4">
          <EditablePageImage
            imageKey="M7-P4-L7-1"
            materi={materi}
            peta={peta}
            step="7"
            urutan="1"
            src={gambarHero}
            alt="Dua siswa di perpustakaan dengan satu prisma dan tiga limas, bertanya apa saja yang sama dan berbeda dari hasil GeoGebra 3D dan AR"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>
      </div>

      <div className={`${cardClass} flex flex-col gap-3`}>
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Tujuan Tahap Ini</h3>
        <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Membandingkan hasil pengamatan GeoGebra 3D dan AR.",
            "Menemukan pola hubungan volume limas dan volume prisma.",
            "Menyusun dugaan awal berdasarkan data.",
            "Menyiapkan diri untuk pembuktian pada Tahap 4.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="M" title="Tabel Perbandingan Hasil GeoGebra 3D dan AR" />
        <p className="m-0 text-sm text-[#4B5563]">Isilah tabel berikut berdasarkan data hasil eksplorasimu di GeoGebra 3D dan AR.</p>
        <div className="flex flex-col gap-4">
          {baris.map((b) => (
            <div key={b.n} className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#111827]">
                <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">{b.n}</span>
                {b.label}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fields.map((f) => (
                  <div key={f.key} className="flex flex-col gap-1.5">
                    <label htmlFor={`baris${b.n}_${f.key}`} className="text-xs font-semibold text-[#4B5563]">{f.label}</label>
                    <textarea id={`baris${b.n}_${f.key}`} name={`answers.baris${b.n}_${f.key}`} defaultValue={getValue(`baris${b.n}_${f.key}`)} rows={2} placeholder="Ketik di sini..." required className={`${inputClass} resize-y`} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 items-start">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#374151] cursor-pointer sm:pt-6">
                  <input type="checkbox" name={`answers.baris${b.n}_sama`} defaultChecked={getChecked(`baris${b.n}_sama`)} className="w-4 h-4 accent-[#2563EB]" />
                  Sama?
                </label>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`baris${b.n}_kesimpulan`} className="text-xs font-semibold text-[#4B5563]">Kesimpulan Sementara (Pola yang Ditemukan)</label>
                  <textarea id={`baris${b.n}_kesimpulan`} name={`answers.baris${b.n}_kesimpulan`} defaultValue={getValue(`baris${b.n}_kesimpulan`)} rows={2} placeholder="Ketik di sini..." required className={`${inputClass} resize-y`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <TipBox>Tips: Pastikan luas alas dan tinggi pada GeoGebra 3D dan AR dibuat sama agar perbandingan hasil lebih valid.</TipBox>
      </div>

      <RememberList
        items={[
          "Bandingkan hasil dengan luas alas dan tinggi yang sama.",
          "Satu variabel diubah setiap percobaan.",
          "Amati nilai, bukan hanya visualnya.",
          "Semua jawaban perlu didukung oleh data.",
        ]}
      />

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
