import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangun = [
  {
    nama: "kubus",
    judul: "Kubus",
    warna: "#2563EB",
    bg: "#EFF4FF",
    border: "#BFDBFE",
    pilihan: ["Luas alas tetap", "Luas alas berubah", "Tinggi kubus tetap", "Tinggi kubus berubah"],
  },
  {
    nama: "balok",
    judul: "Balok",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    pilihan: ["Luas alas tetap", "Luas alas berubah", "Tinggi balok tetap", "Tinggi balok berubah"],
  },
  {
    nama: "prisma",
    judul: "Prisma Segitiga",
    warna: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    pilihan: [
      "Luas penampang sejajar alas tetap",
      "Luas penampang sejajar alas berubah",
      "Panjang prisma tetap",
      "Panjang prisma berubah",
    ],
  },
];

const kolom = [
  { key: "luas", label: "Luas alas / luas penampang sejajar alas (satuan²)" },
  { key: "ukuran", label: "Ukuran yang diubah (satuan)" },
  { key: "volume", label: "Volume (banyak satuan)" },
];

export default async function Materi6Peta5Step1KelompokkanData({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getChecked = (key: string) => Boolean(answers[key]);

  const gambarHero = await getPageImage("M6-P5-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
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
            Pada tahap ini, kamu akan menggunakan data yang telah kamu peroleh dari GeoGebra 3D dan Augmented Reality
            (AR) untuk mengolah informasi.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kita akan mengelompokkan data, menentukan apa yang tetap dan apa yang berubah, serta menentukan hubungan apa
            yang perlu kita selidiki lebih lanjut.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Lengkapi seluruh tabel dan jawablah pertanyaan dengan pemikiranmu sendiri.
          </p>
          <p className="m-0 mt-auto rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 text-sm italic text-[#374151]">
            “Amati data dengan teliti, kelola dengan cermat, dan temukan polanya!”
          </p>
        </div>
        <EditablePageImage
          imageKey="M6-P5-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa mengelompokkan data hasil GeoGebra 3D dan AR di perpustakaan"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengelompokkan Data
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut menggunakan data hasil eksplorasimu.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b) => (
            <div
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <span className="text-base font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </span>
              {kolom.map((k) => (
                <label key={k.key} className="flex flex-col gap-1.5 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                  <span className="text-xs font-bold leading-[1.4]" style={{ color: b.warna }}>
                    {k.label}
                  </span>
                  <input
                    type="text"
                    name={`answers.tabel_${b.nama}_${k.key}`}
                    defaultValue={getValue(`tabel_${b.nama}_${k.key}`)}
                    placeholder="Ketik jawabanmu..."
                    required
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                  />
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Tentukan yang Tetap dan yang Berubah
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Berilah tanda centang (✓) pada pilihan yang sesuai, berdasarkan data yang kamu amati.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b) => (
            <div key={b.nama} className="rounded-[20px] border p-5 flex flex-col gap-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
              <span className="text-base font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </span>
              {b.pilihan.map((p, i) => (
                <label key={p} className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name={`answers.tetap_${b.nama}_${i + 1}`}
                    defaultChecked={getChecked(`tetap_${b.nama}_${i + 1}`)}
                    className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]"
                  />
                  <span className="text-sm text-[#374151] leading-[1.5]">{p}</span>
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end items-center">
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
