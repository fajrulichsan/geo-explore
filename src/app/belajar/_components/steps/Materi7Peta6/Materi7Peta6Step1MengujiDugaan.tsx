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
} from "./Materi7Peta6Parts";

const STEP = 1;

const kolom = [
  { key: "luas", label: "Luas Alas (satuan²)" },
  { key: "tinggi", label: "Tinggi (satuan)" },
  { key: "prediksi", label: "Prediksi Volume Satu Limas (menurut dugaanmu)" },
  { key: "model", label: "Volume Model (GeoGebra/AR)" },
];

const baris = [1, 2, 3, 4];

export default async function Materi7Peta6Step1MengujiDugaan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const hero = await getPageImage("M7-P6-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Memverifikasi Hubungan Volume Satu Limas dan Volume Prisma" />

      <EditablePageImage
        imageKey="M7-P6-L1-1"
        materi={materi}
        peta={peta}
        step="1"
        urutan="1"
        src={hero}
        alt="Tiga siswa memverifikasi dugaan dengan GeoGebra 3D dan AR"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PengantarPanel
          intro="Pada tahap sebelumnya, kamu telah menyusun dugaan tentang hubungan volume satu limas dan volume prisma. Sekarang, mari kita memverifikasi dugaan tersebut menggunakan data hasil eksplorasi dari GeoGebra 3D dan Augmented Reality (AR). Kamu akan:"
          items={[
            "menguji dugaan dengan beberapa data;",
            "membandingkan hasil perhitungan dengan model;",
            "menganalisis pola yang muncul;",
            "menuliskan hasil analisismu.",
          ]}
        />
        <RememberList
          items={[
            "Gunakan data hasil eksplorasi.",
            "Tulis jawaban dengan bahasa kamu sendiri.",
            "Semua jawaban didukung data, bukan hanya perkiraan.",
            "Tidak ada jawaban yang salah selama alasannya logis.",
          ]}
        />
      </div>

      <TipBox>Petunjuk: Gunakan data hasil eksplorasi pada Tahap 3 untuk mengisi tabel dan menjawab pertanyaan di bawah ini.</TipBox>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Menguji Dugaan Volume Satu Limas" />
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut menggunakan data hasil eksplorasi pada Tahap 3.</p>
        <div className={`${cardClass} !p-3 sm:!p-4 overflow-x-auto`}>
          <table className="w-full min-w-[720px] border-separate border-spacing-y-2 text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-[#1E3A8A]">
                <th className="px-2 py-1 w-12">No.</th>
                {kolom.map((k) => (
                  <th key={k.key} className="px-2 py-1">{k.label}</th>
                ))}
                <th className="px-2 py-1">Apakah Sama?</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((r) => (
                <tr key={r}>
                  <td className="px-2 font-extrabold text-[#2563EB] text-center">{r}</td>
                  {kolom.map((k) => (
                    <td key={k.key} className="px-1">
                      <CellInput name={`uji_${r}_${k.key}`} label={`Percobaan ${r} - ${k.label}`} value={getValue(`uji_${r}_${k.key}`)} />
                    </td>
                  ))}
                  <td className="px-1">
                    <div className="flex gap-2">
                      {[
                        { v: "ya", l: "Ya" },
                        { v: "tidak", l: "Tidak" },
                      ].map((o) => (
                        <label key={o.v} className="cursor-pointer">
                          <input type="radio" name={`answers.uji_${r}_sama`} value={o.v} defaultChecked={getValue(`uji_${r}_sama`) === o.v} required className="peer sr-only" />
                          <span className="block rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#6B7280] peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#93C5FD]">
                            {o.l}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TipBox>Jika ada hasil yang tidak sama, periksa kembali perhitunganmu atau perhatikan kemungkinan perbedaan pada model.</TipBox>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
