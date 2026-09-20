import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { BANGUN, Foto, HiddenFields, Nav, SectionTitle, TahapHeader, answerText, cardCls } from "./Materi6Peta9Parts";

const syarat = [
  "Volume tetap 216 cm³.",
  "Tentukan sendiri ukuran bangun yang menghasilkan volume 216 cm³.",
  "Jelaskan alasan memilih ukuran tersebut.",
  "Jika memungkinkan, berikan lebih dari satu alternatif.",
];

const shapeKey = { kubus: "shape-kubus", balok: "shape-balok", prisma: "shape-prisma" } as const;

export default async function Materi6Peta9Step1TantanganOpenEnded({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const dipilih = answerText(initialAnswers, "bangun_dipilih");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <TahapHeader materi={materi} step={1} />

      <div className="relative rounded-[20px] overflow-hidden border border-[#E5E7EB]">
        <Foto
          k="M6-P9-L1-1"
          src={img["M6-P9-L1-1"]}
          ctx={ctx}
          urutan="1"
          natural
          alt="Tiga siswa berdiskusi dengan laptop GeoGebra, model kubus, balok, prisma, dan tablet AR"
          className="relative w-full overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="A" judul="Tantangan Open-Ended" warna="#1E3A8A" />
        <div className={`${cardCls} flex flex-col gap-5`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Sebuah perusahaan akan membuat kotak penyimpanan dengan volume <strong className="text-[#2563EB]">216 cm³</strong>.
            Kotak penyimpanan dapat dibuat dalam salah satu bentuk berikut. Pilih satu bentuk yang akan kamu selesaikan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BANGUN.map((b) => (
              <label
                key={b.nama}
                className="flex flex-col items-center gap-3 rounded-2xl border p-4 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1"
                style={{ backgroundColor: b.bg, borderColor: b.border }}
              >
                <span className="flex items-center gap-2 self-start text-sm font-bold" style={{ color: b.warna }}>
                  <input
                    type="radio"
                    name="answers.bangun_dipilih"
                    value={b.nama}
                    defaultChecked={dipilih === b.nama}
                    required
                    className="h-4 w-4"
                    style={{ accentColor: b.warna }}
                  />
                  {b.judul}
                </span>
                <Foto
                  k={shapeKey[b.nama]}
                  src={img[shapeKey[b.nama]]}
                  ctx={ctx}
                  alt={b.judul}
                  className="relative w-full aspect-[4/3] overflow-hidden"
                />
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
            <div className="rounded-2xl border-2 border-dashed border-[#93C5FD] bg-[#F8FBFF] p-4">
              <p className="m-0 mb-2 text-base font-extrabold text-[#2563EB]">Syarat:</p>
              <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
                {syarat.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] p-4 flex flex-col gap-2 text-sm text-[#374151]">
              <span className="text-lg font-extrabold text-[#2563EB]">Ingat!</span>
              <p className="m-0">Volume = luas alas × tinggi bangun.</p>
              <p className="m-0 rounded-xl bg-[#DBEAFE] px-3 py-2">
                <strong>Kubus/Balok:</strong> Luas alas × tinggi
              </p>
              <p className="m-0 rounded-xl bg-[#FCE7F3] px-3 py-2">
                <strong>Prisma segitiga:</strong> Luas penampang segitiga sejajar alas × panjang prisma
              </p>
            </div>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
