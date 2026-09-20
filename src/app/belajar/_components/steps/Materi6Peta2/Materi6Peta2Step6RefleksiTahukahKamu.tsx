import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "refleksi_1", label: "Saya dapat mengamati satu lapisan pada kubus dan balok, serta penampang sejajar alas pada prisma." },
  { key: "refleksi_2", label: "Saya dapat menentukan banyak lapisan (kubus/balok) dan posisi penampang sejajar alas (prisma)." },
  { key: "refleksi_3", label: "Saya dapat mengamati bentuk dan ukuran pada satu lapisan (kubus/balok) dan penampang sejajar alas (prisma)." },
  { key: "refleksi_4", label: "Saya dapat membandingkan hasil pengamatan antara kubus, balok, dan prisma." },
  { key: "refleksi_5", label: "Saya dapat membuat dugaan awal tentang hubungan ukuran penampang sejajar alas dengan banyaknya ruang di dalam prisma." },
  { key: "refleksi_6", label: "Saya masih perlu bantuan untuk memahami hubungan tersebut." },
];

const alur = [
  {
    nama: "Kubus",
    warna: "#2563EB",
    sel: [
      { key: "M6-P2-L4-2" as const, urutan: "2", alt: "Satu lapisan kubus" },
      { key: "M6-P2-L6-2" as const, urutan: "3", alt: "Beberapa lapisan kubus" },
      { key: "M6-P2-L4-1" as const, urutan: "4", alt: "Kubus utuh" },
    ],
  },
  {
    nama: "Balok",
    warna: "#16A34A",
    sel: [
      { key: "M6-P2-L4-4" as const, urutan: "5", alt: "Satu lapisan balok" },
      { key: "M6-P2-L6-3" as const, urutan: "6", alt: "Beberapa lapisan balok" },
      { key: "M6-P2-L4-3" as const, urutan: "7", alt: "Balok utuh" },
    ],
  },
  {
    nama: "Prisma (segitiga)",
    warna: "#EA580C",
    sel: [
      { key: "M6-P2-L6-4" as const, urutan: "8", alt: "Satu penampang prisma" },
      { key: "M6-P2-L6-5" as const, urutan: "9", alt: "Penampang prisma pada beberapa posisi" },
      { key: "M6-P2-L4-5" as const, urutan: "10", alt: "Prisma utuh" },
    ],
  },
];

const kolom = [
  "Satu lapisan (kubus/balok) atau satu penampang sejajar alas (prisma)",
  "Beberapa lapisan (kubus/balok) atau beberapa penampang sejajar alas (prisma)",
  "Bangun utuh",
];

const fakta = [
  "Pada kubus dan balok, bangun dapat dipandang sebagai susunan lapisan yang bentuknya sama.",
  "Pada prisma, penampang yang sejajar dengan alas memiliki bentuk dan ukuran yang sama pada berbagai posisi.",
];

export default async function Materi6Peta2Step6RefleksiTahukahKamu({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => Boolean(answers[key]);

  const [gambarMaskot, ...gambarAlur] = await Promise.all([
    getPageImage("M6-P2-L6-1"),
    ...alur.flatMap((a) => a.sel.map((s) => getPageImage(s.key))),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
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
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DB2777]">
            Refleksi Singkat
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5 items-center">
          <EditablePageImage
            imageKey="M6-P2-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMaskot}
            alt="Maskot siswa laki-laki mengajak merefleksikan apa yang sudah dipelajari"
            editable={editFoto}
            containerClassName="relative w-32 h-40 lg:w-full lg:h-52 mx-auto"
            imageClassName="object-contain"
          />
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2.5">
            <p className="m-0 text-sm font-semibold text-[#DB2777]">
              Yuk, refleksikan apa yang sudah kamu pelajari hari ini! Centang pernyataan yang sesuai.
            </p>
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#FDF2F8] has-[:checked]:border-[#DB2777] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={getChecked(p.key)}
                  className="mt-0.5 w-4 h-4 accent-[#DB2777] flex-shrink-0"
                />
                <span className="text-sm text-[#374151] leading-[1.5]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#F59E0B] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#F59E0B]">
            Tahukah Kamu?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan ilustrasi berikut!</p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="hidden sm:grid grid-cols-[110px_1fr_1fr_1fr] gap-3 text-center text-[11px] font-bold text-[#1E3A8A] leading-[1.3]">
            <span />
            {kolom.map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
          {alur.map((a, r) => (
            <div key={a.nama} className="grid grid-cols-1 sm:grid-cols-[110px_1fr_1fr_1fr] gap-3 items-center border-t border-[#E5E7EB] pt-4">
              <span
                className="rounded-xl text-white text-sm font-bold text-center py-2.5 px-2"
                style={{ backgroundColor: a.warna }}
              >
                {a.nama}
              </span>
              {a.sel.map((s, c) => (
                <EditablePageImage
                  key={s.urutan}
                  imageKey={s.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={s.urutan}
                  src={gambarAlur[r * 3 + c]}
                  alt={s.alt}
                  editable={editFoto}
                  containerClassName="relative w-full aspect-[3/2] overflow-hidden"
                  imageClassName="object-contain"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2.5">
          <span className="text-sm font-extrabold text-[#2563EB]">Tahukah kamu?</span>
          {fakta.map((f) => (
            <div key={f} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
              <span className="text-sm text-[#374151] leading-[1.5]">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
