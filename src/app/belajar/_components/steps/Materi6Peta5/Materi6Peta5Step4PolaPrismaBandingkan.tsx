import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const dataPrisma = [
  ["3", "1", "3"],
  ["3", "2", "6"],
  ["3", "3", "9"],
  ["3", "4", "12"],
];

const diingat = [
  "Pada kubus dan balok, ukuran yang berubah adalah tinggi (banyak lapisan).",
  "Pada prisma segitiga, ukuran yang berubah adalah panjang prisma.",
  "Gunakan pola pada tabel data untuk menemukan hubungan ketiga besaran (luas alas, tinggi/panjang, dan volume).",
];

function PrismaIcon() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" role="img" aria-label="Prisma segitiga" className="flex-shrink-0">
      <path d="M4 26L14 8l22 6-10 18z" fill="#FED7AA" stroke="#DC2626" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 26L14 8 26 32z" fill="#FDBA74" stroke="#DC2626" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default async function Materi6Peta5Step4PolaPrismaBandingkan({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [gambarKubus, gambarBalok, gambarMaskot] = await Promise.all([
    getPageImage("M6-P5-L3-2"),
    getPageImage("M6-P5-L3-3"),
    getPageImage("M6-P5-L2-1"),
  ]);

  const perbandingan = [
    { nama: "kubus", judul: "Kubus", warna: "#2563EB", ikon: <EditablePageImage imageKey="M6-P5-L3-2" materi={materi} peta={peta} step={step} urutan="1" src={gambarKubus} alt="Kubus biru" editable={editFoto} imageClassName="object-contain" containerClassName="relative w-10 aspect-square overflow-hidden flex-shrink-0" /> },
    { nama: "balok", judul: "Balok", warna: "#16A34A", ikon: <EditablePageImage imageKey="M6-P5-L3-3" materi={materi} peta={peta} step={step} urutan="2" src={gambarBalok} alt="Balok hijau" editable={editFoto} imageClassName="object-contain" containerClassName="relative w-10 aspect-square overflow-hidden flex-shrink-0" /> },
    { nama: "prisma", judul: "Prisma Segitiga", warna: "#DC2626", ikon: <PrismaIcon /> },
  ];

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Mengolah Data Hasil GeoGebra 3D dan Augmented Reality</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
              Pola pada Prisma Segitiga
            </div>
            <div className="ml-auto"><PrismaIcon /></div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Perhatikan tabel hasil pengamatan prisma segitiga. Apa pola yang kamu temukan?</p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="overflow-x-auto">
              <table className="w-full text-center text-sm text-[#374151] border-collapse">
                <thead>
                  <tr className="bg-[#DC2626] text-white text-xs">
                    <th className="p-2 font-bold rounded-tl-xl">Luas penampang segitiga sebagai alas (satuan²)</th>
                    <th className="p-2 font-bold">Panjang prisma (satuan)</th>
                    <th className="p-2 font-bold rounded-tr-xl">Volume (satuan³)</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPrisma.map((r) => (
                    <tr key={r[1]} className="bg-[#FEF2F2]">
                      {r.map((c, ci) => (
                        <td key={ci} className="p-2 border-b border-[#FECACA]">
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-[#FEF2F2]">
                    <td className="p-2">…</td>
                    <td className="p-2">…</td>
                    <td className="p-2">…</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-1.5 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-3">
              <label htmlFor="pola-prisma" className="text-sm font-bold text-[#DC2626]">
                Apa polanya?
              </label>
              <textarea
                id="pola-prisma"
                name="answers.pola_prisma"
                defaultValue={getValue("pola_prisma")}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
            <details className="rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3">
              <summary className="cursor-pointer text-sm font-bold text-[#92400E]">Petunjuk (opsional)</summary>
              <ul className="m-0 mt-2 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.5] list-disc">
                <li>Bentuk dan luas penampang segitiga sebagai alas tetap pada setiap posisi.</li>
                <li>Perhatikan bagaimana volume berubah saat panjang prisma bertambah.</li>
              </ul>
            </details>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Membandingkan Ketiga Bangun
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Berdasarkan pola yang kamu temukan pada ketiga bangun, isilah tabel berikut.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {perbandingan.map((b) => (
              <div key={b.nama} className="flex flex-col gap-1.5 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3">
                <div className="flex items-center gap-2.5">
                  {b.ikon}
                  <label htmlFor={`hubungan-${b.nama}`} className="text-sm font-bold" style={{ color: b.warna }}>
                    {b.judul} — pola hubungan yang ditemukan
                  </label>
                </div>
                <textarea
                  id={`hubungan-${b.nama}`}
                  name={`answers.hubungan_${b.nama}`}
                  defaultValue={getValue(`hubungan_${b.nama}`)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />
              </div>
            ))}
            {[
              { n: 1, key: "persamaan", q: "Apa persamaan ketiga pola tersebut?" },
              { n: 2, key: "perbedaan", q: "Apa perbedaan ketiga pola tersebut?" },
            ].map((t) => (
              <div key={t.key} className="flex items-start gap-2.5 rounded-2xl bg-[#EFF4FF] border border-[#BFDBFE] p-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">
                  {t.n}
                </span>
                <div className="flex flex-col gap-1.5 w-full">
                  <label htmlFor={`banding-${t.key}`} className="text-sm font-bold text-[#2563EB]">
                    {t.q}
                  </label>
                  <textarea
                    id={`banding-${t.key}`}
                    name={`answers.banding_${t.key}`}
                    defaultValue={getValue(`banding_${t.key}`)}
                    rows={2}
                    placeholder="Ketik jawabanmu di sini..."
                    required
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-5 items-end">
        <div className="flex flex-col gap-4">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-4 flex flex-col gap-2">
            <span className="text-sm font-extrabold text-[#111827]">Ingat!</span>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5] list-disc">
              {diingat.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex flex-col gap-1">
            <span className="text-sm font-extrabold text-[#2563EB]">Lanjutkan Menyusun Dugaan!</span>
            <p className="m-0 text-sm text-[#374151] leading-[1.5]">
              Gunakan pola yang kamu temukan untuk menyusun dugaan hubungan volume pada Halaman 3.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M6-P5-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="3"
          src={gambarMaskot}
          alt="Siswa menunjuk ke depan sambil berkata Ayo lanjut ke halaman berikutnya"
          editable={editFoto}
          natural
          containerClassName="relative w-48 mx-auto lg:w-full min-h-24 overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
