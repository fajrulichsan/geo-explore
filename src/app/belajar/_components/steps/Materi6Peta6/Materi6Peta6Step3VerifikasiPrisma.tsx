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

export default async function Materi6Peta6Step3VerifikasiPrisma({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const b = BANGUN[2];

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={3} />
      <TahapHeader materi={materi} step={3} />

      <Pengantar
        kutipan="Cermati, bandingkan, dan temukan polanya!"
        hero={
          <Foto
            k="M6-P6-L3-1"
            src={img["M6-P6-L3-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa memeriksa volume prisma segitiga dengan GeoGebra 3D dan AR"
            className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
          />
        }
      >
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Pada halaman sebelumnya, kita telah memverifikasi volume kubus dan balok. Sekarang, kita akan memverifikasi
          apakah pola yang sama juga berlaku pada prisma segitiga.
        </p>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Gunakan data yang tersedia untuk menghitung volume, kemudian bandingkan dengan hasil pada model GeoGebra 3D
          atau Augmented Reality (AR). Isilah tabel dan jawablah pertanyaan yang tersedia dengan teliti!
        </p>
      </Pengantar>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="E"
          judul="Memverifikasi Volume pada Prisma Segitiga"
          hint="Gunakan data yang telah kamu susun untuk menghitung volume prisma segitiga berikut."
          warna="#DC2626"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className={`${cardCls} flex flex-col gap-3`} style={{ backgroundColor: b.bg, borderColor: b.border }}>
            <span className="text-xs font-bold text-[#6B7280]">Data Model</span>
            <span className="text-lg font-extrabold" style={{ color: b.warna }}>
              {b.judul}
            </span>
            <Foto
              k={b.icon}
              src={img[b.icon]}
              ctx={ctx}
              urutan={b.urutan}
              natural
              alt="Prisma segitiga tersusun dari 5 lapisan"
              className="relative w-full min-h-20 overflow-hidden"
            />
            <ul className="m-0 pl-5 text-sm text-[#374151] leading-[1.6] list-disc">
              <li>Luas penampang segitiga sejajar alas = 6 satuan²</li>
              <li>Panjang prisma = 5 satuan</li>
            </ul>
            <span className="rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold" style={{ color: b.warna }}>
              Model terdiri dari 5 lapisan setebal 1 satuan dengan penampang segitiga yang sama (5 × 6 = 30 satuan volume)
            </span>
          </div>

          <div className={`${cardCls} flex flex-col gap-3`}>
            <span className="text-sm font-bold text-[#111827]">✏️ Perhitungan</span>
            <p className="m-0 text-sm text-[#374151]">Volume = luas penampang segitiga sejajar alas × panjang prisma</p>
            <p className="m-0 text-sm text-[#374151]">= 6 × 5</p>
            <label className="flex items-center gap-2 text-sm text-[#374151]">
              =
              <input
                name="answers.hitung_prisma"
                defaultValue={answerText(initialAnswers, "hitung_prisma")}
                placeholder="..."
                required
                className={`${inputCls} max-w-32`}
              />
              satuan³
            </label>
            <Petunjuk>Volume prisma = luas penampang segitiga sejajar alas × panjang prisma.</Petunjuk>
          </div>

          <div className={`${cardCls} flex flex-col gap-3`}>
            <span className="text-sm font-bold text-[#111827]">Model pada GeoGebra 3D / AR</span>
            <ModelPanel>5 lapisan (masing-masing luas 6 satuan²) — tampilkan satuan volume.</ModelPanel>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#BFDBFE] bg-[#EFF4FF] px-5 py-3.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-[#1E3A8A]">
            Hasil model (banyak satuan volume) =
            <input
              name="answers.model_prisma"
              defaultValue={answerText(initialAnswers, "model_prisma")}
              placeholder="..."
              required
              className={`${inputCls} max-w-28`}
            />
            satuan³
          </label>
          <YaTidak name="answers.sama_prisma" value={answerText(initialAnswers, "sama_prisma")} label="Apakah hasilnya sama?" />
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={3} />
    </form>
  );
}
