import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CellInput,
  HiddenStepFields,
  PengantarPanel,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta5Parts";

const STEP = 1;

const kolom = [
  { key: "l", label: "Luas Alas (satuan²)" },
  { key: "t", label: "Tinggi (satuan)" },
  { key: "vp", label: "Volume Prisma Vₚ (satuan³)" },
  { key: "vl", label: "Volume Satu Limas Vₗ (satuan³)" },
  { key: "rasio", label: "Rasio Vₗ : Vₚ" },
];

const kelompok = [
  { key: "luas", label: "Eksplorasi Luas Alas (tinggi tetap)", rows: 4, tint: "bg-[#ECFDF5] text-[#166534]" },
  { key: "tinggi", label: "Eksplorasi Tinggi (luas alas tetap)", rows: 4, tint: "bg-[#FEF2F2] text-[#991B1B]" },
];

const penuangan = [1, 2, 3];

export default async function Materi7Peta5Step1MengelompokkanData({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const hero = await getPageImage("M7-P5-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Mengolah Data Hasil GeoGebra 3D dan Augmented Reality" />

      <EditablePageImage
        imageKey="M7-P5-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa menganalisis data dari GeoGebra 3D dan AR"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PengantarPanel
          intro="Pada tahap ini, kamu akan mengolah data yang telah kamu peroleh dari eksplorasi GeoGebra 3D dan Augmented Reality (AR) untuk menyusun dugaan hubungan volume limas. Kamu akan:"
          items={[
            "mengelompokkan dan menganalisis data;",
            "menemukan pola yang muncul dari data;",
            "menentukan faktor yang memengaruhi volume satu limas;",
            "menuliskan hasil analisismu dengan lengkap dan jelas.",
          ]}
        />
        <RememberList
          items={[
            "Gunakan data hasil eksplorasimu.",
            "Tulis jawaban dengan bahasa sendiri.",
            "Semua jawaban didukung data, bukan hanya perkiraan.",
            "Tidak ada jawaban yang salah selama alasannya logis.",
          ]}
        />
      </div>

      <TipBox>Petunjuk: Gunakan data hasil eksplorasi pada Tahap 3 untuk mengisi tabel dan menjawab pertanyaan di bawah ini.</TipBox>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Mengelompokkan Data" />
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut menggunakan data hasil eksplorasi pada Tahap 3.</p>
        <div className={`${cardClass} !p-3 sm:!p-4 overflow-x-auto`}>
          <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-[#1E3A8A]">
                <th className="px-2 py-1">Percobaan</th>
                <th className="px-2 py-1 w-12">No.</th>
                {kolom.map((k) => (
                  <th key={k.key} className="px-2 py-1">{k.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {kelompok.map((g) =>
                Array.from({ length: g.rows }, (_, i) => i + 1).map((r) => (
                  <tr key={`${g.key}-${r}`}>
                    {r === 1 && (
                      <td rowSpan={g.rows} className={`px-3 rounded-xl text-xs font-extrabold align-middle ${g.tint}`}>
                        {g.label}
                      </td>
                    )}
                    <td className="px-2 font-extrabold text-[#2563EB] text-center">{r}</td>
                    {kolom.map((k) => (
                      <td key={k.key} className="px-1">
                        <CellInput name={`${g.key}_${r}_${k.key}`} label={`${g.label} ${r} - ${k.label}`} value={getValue(`${g.key}_${r}_${k.key}`)} />
                      </td>
                    ))}
                  </tr>
                )),
              )}
              {penuangan.map((r) => (
                <tr key={`tuang-${r}`}>
                  {r === 1 && (
                    <td rowSpan={penuangan.length} className="px-3 rounded-xl text-xs font-extrabold align-middle bg-[#EFF6FF] text-[#1E3A8A]">
                      Visualisasi Penuangan Berulang (isi satu limas dituangkan berulang)
                    </td>
                  )}
                  <td className="px-2 font-extrabold text-[#2563EB] text-center">{r}</td>
                  <td colSpan={2} className="px-1">
                    <CellInput name={`tuang_${r}_kali`} label={`Penuangan ${r} - banyak kali penuangan`} value={getValue(`tuang_${r}_kali`)} />
                  </td>
                  {kolom.slice(2).map((k) => (
                    <td key={k.key} className="px-1">
                      <CellInput name={`tuang_${r}_${k.key}`} label={`Penuangan ${r} - ${k.label}`} value={getValue(`tuang_${r}_${k.key}`)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TipBox>Tips: Pastikan satuan yang kamu gunakan sama pada setiap kolom.</TipBox>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
