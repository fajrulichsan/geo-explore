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

const dataKubus = [
  ["1", "9"],
  ["2", "18"],
  ["3", "27"],
  ["4", "36"],
];

const dataBalok = [
  ["1", "10"],
  ["2", "20"],
  ["3", "30"],
  ["4", "40"],
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

export default async function Materi6Peta5Step5DugaanHubungan({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarHero = await getPageImage("M6-P5-L5-1");

  const dugaanKubusBalok = [
    { key: "kubus", label: "Volume kubus berhubungan dengan" },
    { key: "balok", label: "Volume balok berhubungan dengan" },
  ];

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
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
            Pada halaman ini, kita akan menyusun dugaan hubungan volume dengan luas alas, tinggi, dan panjang prisma
            berdasarkan data yang telah kamu temukan.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Gunakan hasil pengamatan dan diskusimu di halaman 1 dan 2 untuk melengkapi kegiatan berikut.
          </p>
          <p className="m-0 mt-auto rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 text-sm italic text-[#374151]">
            “Dari data, kita menemukan pola, dari pola, kita mendapatkan dugaan!”
          </p>
        </div>
        <EditablePageImage
          imageKey="M6-P5-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa menyusun dugaan hubungan volume berdasarkan data yang diamati"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
            Dugaan Hubungan Volume Prisma Segitiga
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Amati tabel hasil pengamatan prisma segitiga berikut. Berdasarkan pola yang kamu temukan, tuliskan dugaan
          hubungan volume prisma segitiga dengan luas alas, tinggi, dan panjang prisma.
        </p>
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
          <div className="flex flex-col gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-4">
            <span className="text-sm font-bold text-[#DC2626]">Dugaan hubungan:</span>
            <p className="m-0 text-sm text-[#374151]">Volume prisma segitiga berhubungan dengan …</p>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-2">
              <input type="text" name="answers.dugaan_prisma_1" defaultValue={getValue("dugaan_prisma_1")} placeholder="…" required aria-label="Dugaan prisma pertama" className={inputClass} />
              <span className="text-sm text-[#374151] text-center">dan</span>
              <input type="text" name="answers.dugaan_prisma_2" defaultValue={getValue("dugaan_prisma_2")} placeholder="…" required aria-label="Dugaan prisma kedua" className={inputClass} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Dugaan Hubungan Volume Kubus dan Balok
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Amati tabel hasil pengamatan kubus dan balok berikut. Berdasarkan pola yang kamu temukan, tuliskan dugaan
          hubungan volume kubus dan balok dengan luas alas dan tinggi.
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { judul: "Kubus", warna: "#2563EB", bg: "#EFF4FF", border: "#BFDBFE", rows: dataKubus },
              { judul: "Balok", warna: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0", rows: dataBalok },
            ].map((t) => (
              <div key={t.judul} className="overflow-x-auto">
                <table className="w-full text-center text-sm text-[#374151] border-collapse">
                  <thead>
                    <tr className="text-white text-xs" style={{ backgroundColor: t.warna }}>
                      <th colSpan={2} className="p-2 font-bold rounded-t-xl">
                        {t.judul}
                      </th>
                    </tr>
                    <tr className="text-white text-xs" style={{ backgroundColor: t.warna }}>
                      <th className="p-2 font-bold">Tinggi (satuan)</th>
                      <th className="p-2 font-bold">Volume (satuan³)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r) => (
                      <tr key={r[0]} style={{ backgroundColor: t.bg }}>
                        {r.map((c, ci) => (
                          <td key={ci} className="p-2 border-b" style={{ borderColor: t.border }}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr style={{ backgroundColor: t.bg }}>
                      <td className="p-2">…</td>
                      <td className="p-2">…</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-4">
            <span className="text-sm font-bold text-[#16A34A]">Dugaan hubungan:</span>
            {dugaanKubusBalok.map((d) => (
              <div key={d.key} className="flex flex-col gap-1.5">
                <span className="text-sm text-[#374151]">{d.label} …</span>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <input type="text" name={`answers.dugaan_${d.key}_1`} defaultValue={getValue(`dugaan_${d.key}_1`)} placeholder="…" required aria-label={`Dugaan ${d.key} pertama`} className={inputClass} />
                  <span className="text-sm text-[#374151] text-center">dan</span>
                  <input type="text" name={`answers.dugaan_${d.key}_2`} defaultValue={getValue(`dugaan_${d.key}_2`)} placeholder="…" required aria-label={`Dugaan ${d.key} kedua`} className={inputClass} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
