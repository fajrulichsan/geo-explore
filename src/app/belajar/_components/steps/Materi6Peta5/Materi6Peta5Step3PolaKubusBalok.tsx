import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangun: {
  nama: string;
  huruf: string;
  judul: string;
  warna: string;
  bg: string;
  border: string;
  imageKey: PageImageKey;
  urutan: string;
  alt: string;
  alas: string;
  rows: string[][];
}[] = [
  {
    nama: "kubus",
    huruf: "E",
    judul: "Pola pada Kubus",
    warna: "#2563EB",
    bg: "#EFF4FF",
    border: "#BFDBFE",
    imageKey: "M6-P5-L3-2",
    urutan: "2",
    alt: "Kubus biru",
    alas: "kubus pada alas",
    rows: [
      ["3 × 3 = 9", "1", "9"],
      ["3 × 3 = 9", "2", "18"],
      ["3 × 3 = 9", "3", "27"],
      ["3 × 3 = 9", "4", "36"],
    ],
  },
  {
    nama: "balok",
    huruf: "F",
    judul: "Pola pada Balok",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    imageKey: "M6-P5-L3-3",
    urutan: "3",
    alt: "Balok hijau",
    alas: "balok pada alas",
    rows: [
      ["5 × 2 = 10", "1", "10"],
      ["5 × 2 = 10", "2", "20"],
      ["5 × 2 = 10", "3", "30"],
      ["5 × 2 = 10", "4", "40"],
    ],
  },
];

export default async function Materi6Peta5Step3PolaKubusBalok({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarHero = await getPageImage("M6-P5-L3-1");
  const gambarBangun = await Promise.all(bangun.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
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

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-start">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1">Pengantar</span>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Pada halaman ini, kita akan menganalisis data hasil pengamatan dan mencari pola hubungan antara luas alas,
            tinggi, dan volume pada kubus, balok, dan prisma segitiga.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Gunakan data yang tersedia untuk menemukan pola yang konsisten. Amati perubahan nilai pada setiap bangun dan
            tuliskan apa pola yang kamu temukan.
          </p>
          <p className="m-0 mt-auto rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 text-sm italic text-[#374151]">
            “Perhatikan pola pada data, lalu temukan hubungannya!”
          </p>
        </div>
        <EditablePageImage
          imageKey="M6-P5-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa membandingkan kubus, balok, dan prisma untuk mencari pola"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {bangun.map((b, i) => (
          <div key={b.nama} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0"
                style={{ backgroundColor: b.warna }}
              >
                {b.huruf}
              </div>
              <div
                className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold"
                style={{ color: b.warna }}
              >
                {b.judul}
              </div>
              <EditablePageImage
                imageKey={b.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={b.urutan}
                src={gambarBangun[i]}
                alt={b.alt}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-12 aspect-square ml-auto flex-shrink-0 overflow-hidden"
              />
            </div>
            <p className="m-0 text-sm text-[#4B5563]">
              Perhatikan tabel hasil pengamatan {b.nama}. Apa pola yang kamu temukan?
            </p>
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
              <div className="overflow-x-auto">
                <table className="w-full text-center text-sm text-[#374151] border-collapse">
                  <thead>
                    <tr className="text-white text-xs" style={{ backgroundColor: b.warna }}>
                      <th className="p-2 font-bold rounded-tl-xl">Luas alas ({b.alas}) (satuan²)</th>
                      <th className="p-2 font-bold">Tinggi {b.nama} (satuan)</th>
                      <th className="p-2 font-bold rounded-tr-xl">Volume (satuan³)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <tr key={r[1]} style={{ backgroundColor: b.bg }} className="border-b" >
                        {r.map((c, ci) => (
                          <td key={ci} className="p-2 border-b" style={{ borderColor: b.border }}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr style={{ backgroundColor: b.bg }}>
                      <td className="p-2">…</td>
                      <td className="p-2">…</td>
                      <td className="p-2">…</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-1.5 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                <label htmlFor={`pola-${b.nama}`} className="text-sm font-bold" style={{ color: b.warna }}>
                  Apa polanya?
                </label>
                <textarea
                  id={`pola-${b.nama}`}
                  name={`answers.pola_${b.nama}`}
                  defaultValue={getValue(`pola_${b.nama}`)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
