import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import {
  BANGUN,
  Foto,
  HiddenFields,
  ModelPanel,
  Nav,
  Pengantar,
  Petunjuk,
  SectionTitle,
  TahapHeader,
  YaTidak,
  answerText,
  cardCls,
  inputCls,
} from "./Materi6Peta6Parts";

const verifikasi = [
  {
    huruf: "A",
    judul: "Memverifikasi Volume pada Kubus",
    b: BANGUN[0],
    data: ["sisi (s) = 4 satuan", "luas alas = 16 satuan² (4 × 4)", "tinggi = 4 satuan"],
    terdiri: "Terdiri dari 4 × 4 × 4 = 64 kubus satuan",
    rumus: ["Volume = luas alas × tinggi", "= 16 × 4"],
    model: "Sisi 4 satuan — tampilkan satuan volume.",
    petunjuk: null,
  },
  {
    huruf: "B",
    judul: "Memverifikasi Volume pada Balok",
    b: BANGUN[1],
    data: ["p = 5 satuan", "l = 3 satuan", "t = 6 satuan", "luas alas = 15 satuan² (5 × 3)", "tinggi = 6 satuan"],
    terdiri: "Terdiri dari 5 × 3 × 6 = 90 kubus satuan",
    rumus: ["Volume = luas alas × tinggi", "= 15 × 6"],
    model: "5 × 3 × 6 satuan — tampilkan satuan volume.",
    petunjuk: "Untuk balok, luas alas = p × l dan tinggi = t.",
  },
];

export default async function Materi6Peta6Step1VerifikasiKubusBalok({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <TahapHeader materi={materi} step={1} />

      <Pengantar
        kutipan="Periksa, bandingkan, dan buktikan!"
        hero={
          <Foto
            k="M6-P6-L1-1"
            src={img["M6-P6-L1-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa memeriksa hasil perhitungan volume dengan GeoGebra 3D dan AR"
            className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
          />
        }
      >
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Kita akan memverifikasi dugaan hubungan volume pada kubus dan balok. Sekarang saatnya memeriksa apakah hasil
          perhitunganmu sama dengan hasil pada model GeoGebra 3D atau Augmented Reality (AR).
        </p>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Gunakan data yang tersedia untuk menghitung volume, kemudian bandingkan dengan hasil pada model. Isilah tabel
          dan jawablah pertanyaan yang tersedia dengan teliti!
        </p>
      </Pengantar>

      {verifikasi.map((v) => (
        <div key={v.huruf} className="flex flex-col gap-4">
          <SectionTitle
            huruf={v.huruf}
            judul={v.judul}
            warna={v.b.warna}
            hint="Periksa kembali hasil perhitunganmu dengan model GeoGebra 3D atau AR."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className={`${cardCls} flex flex-col gap-3`} style={{ backgroundColor: v.b.bg, borderColor: v.b.border }}>
              <span className="text-xs font-bold text-[#6B7280]">Data Model</span>
              <div className="flex items-center gap-3">
                <span className="text-lg font-extrabold" style={{ color: v.b.warna }}>
                  {v.b.judul}
                </span>
                <Foto
                  k={v.b.icon}
                  src={img[v.b.icon]}
                  ctx={ctx}
                  urutan={v.b.urutan}
                  natural
                  alt={`${v.b.judul} tersusun dari kubus satuan`}
                  className="relative w-28 min-h-16 ml-auto flex-shrink-0"
                />
              </div>
              <ul className="m-0 pl-5 text-sm text-[#374151] leading-[1.6] list-disc">
                {v.data.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <span className="rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold" style={{ color: v.b.warna }}>
                {v.terdiri}
              </span>
            </div>

            <div className={`${cardCls} flex flex-col gap-3`}>
              <span className="text-sm font-bold text-[#111827]">✏️ Perhitungan</span>
              {v.rumus.map((r) => (
                <p key={r} className="m-0 text-sm text-[#374151]">
                  {r}
                </p>
              ))}
              <label className="flex items-center gap-2 text-sm text-[#374151]">
                =
                <input
                  name={`answers.hitung_${v.b.nama}`}
                  defaultValue={answerText(initialAnswers, `hitung_${v.b.nama}`)}
                  placeholder="..."
                  required
                  className={`${inputCls} max-w-32`}
                />
                satuan³
              </label>
              {v.petunjuk && <Petunjuk>{v.petunjuk}</Petunjuk>}
            </div>

            <div className={`${cardCls} flex flex-col gap-3`}>
              <span className="text-sm font-bold text-[#111827]">Model pada GeoGebra 3D / AR</span>
              <ModelPanel>{v.model}</ModelPanel>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#BFDBFE] bg-[#EFF4FF] px-5 py-3.5">
            <label className="flex items-center gap-2 text-sm font-semibold text-[#1E3A8A]">
              Hasil model (banyak satuan volume) =
              <input
                name={`answers.model_${v.b.nama}`}
                defaultValue={answerText(initialAnswers, `model_${v.b.nama}`)}
                placeholder="..."
                required
                className={`${inputCls} max-w-28`}
              />
              satuan³
            </label>
            <YaTidak name={`answers.sama_${v.b.nama}`} value={answerText(initialAnswers, `sama_${v.b.nama}`)} label="Apakah hasilnya sama?" />
          </div>
        </div>
      ))}

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
