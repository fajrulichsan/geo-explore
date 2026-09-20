import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import {
  CellInput,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 3;

const kolom = [
  { key: "l", label: "Luas Alas (L) (satuan)" },
  { key: "t", label: "Tinggi (t) (satuan)" },
  { key: "vp", label: "Volume Prisma (Vₚ)" },
  { key: "vl", label: "Volume Satu Limas (Vₗ)" },
  { key: "rasio", label: "Rasio Vₗ / Vₚ" },
  { key: "ket", label: "Keterangan (pola yang kamu temukan)" },
];

export default async function Materi7Peta4Step3DataGeogebra({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Tabel Data Hasil Eksplorasi GeoGebra 3D" />
        <p className="m-0 text-sm text-[#4B5563]">Isilah data numerik dari hasil eksplorasi pada GeoGebra 3D.</p>
        <div className={`${cardClass} !p-3 sm:!p-4 overflow-x-auto`}>
          <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-[#1E3A8A]">
                <th className="px-2 py-1 w-24">Percobaan</th>
                {kolom.map((k) => (
                  <th key={k.key} className="px-2 py-1">{k.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((r) => (
                <tr key={r}>
                  <td className="px-2 font-extrabold text-[#2563EB] text-center">{r}</td>
                  {kolom.map((k) => (
                    <td key={k.key} className="px-1">
                      <CellInput
                        name={`geogebra_${r}_${k.key}`}
                        label={`Percobaan ${r} - ${k.label}`}
                        value={getValue(`geogebra_${r}_${k.key}`)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Refleksi Singkat" color="amber" />
        <div className={`${cardClass} flex flex-col gap-5`}>
          <TextAreaField n={1} name="refleksi_geogebra_manfaat" label="Apa manfaat menggunakan GeoGebra 3D dalam memahami hubungan volume limas dan volume prisma?" value={getValue("refleksi_geogebra_manfaat")} />
          <TextAreaField n={2} color="amber" name="refleksi_geogebra_baru" label="Hal baru apa yang kamu pelajari dari eksplorasi ini?" value={getValue("refleksi_geogebra_baru")} />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
