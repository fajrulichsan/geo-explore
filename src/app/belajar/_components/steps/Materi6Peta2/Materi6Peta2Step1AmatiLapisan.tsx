import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const diamati = [
  { color: "#2563EB", text: "satu lapisan pada kubus dan balok;" },
  { color: "#16A34A", text: "banyaknya lapisan penyusunnya;" },
  { color: "#F97316", text: "penampang yang sejajar dengan alas pada prisma;" },
  { color: "#F59E0B", text: "apakah bentuk dan ukuran penampangnya sama?" },
];

const bangun = [
  {
    key: "M6-P2-L1-2" as const,
    nama: "kubus",
    judul: "Kubus",
    instruksi: "Amati susunan lapisan kubus!",
    alt: "Kubus biru dan tiga lapisan penyusunnya",
    warna: "#2563EB",
    bg: "#EFF4FF",
    border: "#BFDBFE",
    cek: ["Bentuk satu lapisan kubus.", "Banyaknya lapisan penyusunnya.", "Apakah semua lapisan tampak sama?"],
  },
  {
    key: "M6-P2-L1-3" as const,
    nama: "balok",
    judul: "Balok",
    instruksi: "Amati susunan lapisan balok!",
    alt: "Balok hijau dan tiga lapisan penyusunnya",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    cek: ["Bentuk satu lapisan balok.", "Banyaknya lapisan penyusunnya.", "Apakah semua lapisan tampak sama?"],
  },
  {
    key: "M6-P2-L1-4" as const,
    nama: "prisma",
    judul: "Prisma (segitiga)",
    instruksi: "Amati penampang yang sejajar dengan alas pada beberapa posisi!",
    alt: "Prisma segitiga dan penampang sejajar alas pada beberapa posisi",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    cek: [
      "Bentuk penampang yang sejajar dengan alas pada setiap posisi.",
      "Ukuran penampang pada setiap posisi.",
      "Apakah bentuk dan ukuran penampangnya sama pada posisi berbeda?",
    ],
  },
];

export default async function Materi6Peta2Step1AmatiLapisan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => Boolean(answers[key]);

  const [gambarHero, ...gambarBangun] = await Promise.all([
    getPageImage("M6-P2-L1-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Amati bentuk satu lapisan pada kubus dan balok serta penampang sejajar alas pada prisma.
          Kemudian perhatikan pola yang kamu temukan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 items-stretch">
        <EditablePageImage
          imageKey="M6-P2-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa mengamati kubus, balok, dan prisma di atas meja"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden bg-[#EFF4FF]"
        />
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1">
            Pengantar
          </span>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kubus dan balok dapat diamati sebagai susunan lapisan kubus satuan yang berulang dengan
            tampak yang sama.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Prisma dapat diamati melalui beberapa penampang yang sejajar dengan alas. Bandingkan
            bentuk dan ukurannya pada setiap posisi. Amatilah:
          </p>
          <div className="flex flex-col gap-2">
            {diamati.map((d) => (
              <div key={d.text} className="flex items-start gap-2.5">
                <span
                  className="mt-1 w-3.5 h-3.5 rounded-[4px] flex-shrink-0"
                  style={{ backgroundColor: d.color }}
                />
                <span className="text-sm text-[#374151] leading-[1.5]">{d.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between rounded-xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3">
            <span className="text-sm font-bold text-[#111827]">Apa yang kamu temukan?</span>
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm">
              ?
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Susunan Lapisan Bangun
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b, i) => (
            <div
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: b.warna }}
                >
                  {i + 1}
                </div>
                <span className="text-base font-extrabold" style={{ color: b.warna }}>
                  {b.judul}
                </span>
              </div>
              <p className="m-0 text-sm text-[#374151]">{b.instruksi}</p>
              <EditablePageImage
                imageKey={b.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 2)}
                src={gambarBangun[i]}
                alt={b.alt}
                editable={editFoto}
                natural
                containerClassName="relative w-full min-h-24 overflow-hidden"
              />
              <div
                className="rounded-2xl p-4 flex flex-col gap-2.5 border"
                style={{ backgroundColor: b.bg, borderColor: b.border }}
              >
                <span className="text-sm font-bold" style={{ color: b.warna }}>
                  Amati
                </span>
                {b.cek.map((c, j) => (
                  <label key={c} className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name={`answers.amati_${b.nama}_${j + 1}`}
                      defaultChecked={getChecked(`amati_${b.nama}_${j + 1}`)}
                      className="mt-0.5 w-4 h-4 flex-shrink-0"
                      style={{ accentColor: b.warna }}
                    />
                    <span className="text-sm text-[#374151] leading-[1.5]">{c}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            i
          </span>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Ingat: Penampang diambil dari irisan yang sejajar dengan alas pada prisma, bukan lapisan
            penyusun prisma.
          </p>
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
