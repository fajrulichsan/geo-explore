import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 9;

const persiapan = [
  { key: "siap_geogebra", label: "Data hasil eksplorasi GeoGebra 3D" },
  { key: "siap_ar", label: "Data hasil eksplorasi AR" },
  { key: "siap_tabel", label: "Tabel perbandingan" },
  { key: "siap_dugaan", label: "Dugaan awal hubungan volume" },
  { key: "siap_rasio", label: "Dugaan rasio volume (Vₗ / Vₚ = …)" },
];

export default async function Materi7Peta4Step9SintesisPersiapan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getChecked } = readAnswers(initialAnswers);
  const [gambarPersamaan, gambarSiap] = await Promise.all([
    getPageImage("M7-P4-L9-1"),
    getPageImage("M7-P4-L9-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Membandingkan Hasil dan Susun Dugaan Awal" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="P" title="Sintesis Sementara" />
        <div className={`${cardClass} flex flex-col gap-4`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Berdasarkan seluruh hasil percobaan pada GeoGebra 3D dan AR, diperoleh pola bahwa tiga kali isi satu limas dapat memenuhi satu prisma ketika luas alas dan tinggi keduanya sama. Ketika luas alas atau tinggi diubah dengan tetap mempertahankan kesamaan luas alas dan tinggi pada pasangan prisma dan limas, volume keduanya ikut berubah, sedangkan perbandingan volumenya menunjukkan pola yang tetap.
          </p>
          <div className="rounded-2xl bg-[#F8FAFF] border border-[#DBE7FF] p-3 sm:p-4 flex flex-col gap-2 items-center">
            <EditablePageImage
              imageKey="M7-P4-L9-1"
              materi={materi}
              peta={peta}
              step="9"
              urutan="1"
              src={gambarPersamaan}
              alt="Satu prisma sama dengan tiga limas identik"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full max-w-md aspect-[1606/421]"
            />
            <p className="m-0 text-xs sm:text-sm font-semibold text-[#1E3A8A] text-center">Pola ini akan dibuktikan secara matematis pada Tahap 4.</p>
          </div>
          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3 text-sm text-[#991B1B] leading-[1.6]">
            <span className="font-extrabold">Catatan: </span>
            Ini adalah kesimpulan sementara berdasarkan data hasil eksplorasi. Pembuktian umum akan dilakukan pada Tahap 4.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="Q" title="Persiapan ke Tahap 4 – Ayo Mengolah Informasi" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">Setelah mengumpulkan dan membandingkan data, kamu akan mengolah informasi untuk membuktikan dugaanmu. Yang perlu kamu siapkan:</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {persiapan.map((p) => (
              <label key={p.key} className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" name={`answers.${p.key}`} defaultChecked={getChecked(p.key)} className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]" />
                <span className="text-sm text-[#374151] leading-[1.5]">{p.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P4-L9-2"
            materi={materi}
            peta={peta}
            step="9"
            urutan="2"
            src={gambarSiap}
            alt="Dua siswa bersemangat: Siap ke Tahap 4!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[961/621] max-w-[260px] mx-auto"
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
