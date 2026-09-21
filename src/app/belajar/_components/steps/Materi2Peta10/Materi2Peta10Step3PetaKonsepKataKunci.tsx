import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";

const syarat = [
  { ikon: "🧩", teks: "Seluruh sisi lengkap" },
  { ikon: "🔗", teks: "Seluruh sisi saling terhubung (bertemu pada rusuk yang sama)" },
  { ikon: "🚫", teks: "Tidak ada sisi yang bertumpuk saat dilipat" },
  { ikon: "↩️", teks: "Dapat dilipat" },
];

const ingat = [
  "Jaring-jaring merupakan susunan sisi-sisi bangun ruang pada bidang datar.",
  "Jaring-jaring valid dapat dilipat membentuk bangun ruang tanpa saling bertumpuk.",
  "Satu bangun ruang dapat memiliki lebih dari satu jaring-jaring.",
  "Keempat syarat di atas harus terpenuhi bersama-sama.",
];

const temuan = [
  { ikon: "👁️", teks: "Dari pengamatan, bentuk susunan bidang mempengaruhi hasil lipatan." },
  { ikon: "👥", teks: "Diskusi menunjukkan satu bangun ruang dapat memiliki beberapa bentuk jaring-jaring." },
  { ikon: "💻", teks: "GeoGebra 3D membantu melihat proses membuka bangun ruang menjadi jaring-jaring." },
  { ikon: "📱", teks: "Augmented Reality (AR) membantu memeriksa apakah lipatan benar-benar membentuk bangun ruang." },
  { ikon: "💡", teks: "Verifikasi membantu memastikan jaring-jaring valid dapat dilipat menjadi bangun ruang tanpa ada sisi yang bertumpuk atau terlepas." },
];

const kataKunci = [
  { label: "Jaring-jaring", ikon: "✚" },
  { label: "Garis lipatan", ikon: "┄" },
  { label: "Lipatan", ikon: "📦" },
  { label: "Garis potong", ikon: "✂️" },
];

export default async function Materi2Peta10Step3PetaKonsepKataKunci({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();

  function ikon({ kunci, urutan, alt }: { kunci: PageImageKey; urutan: string; alt: string }) {
    return (
      <EditablePageImage
        imageKey={kunci}
        materi={materi}
        peta={peta}
        step={step}
        urutan={urutan}
        src={img[kunci]}
        alt={alt}
        editable={editFoto}
        imageClassName="object-contain"
        containerClassName="relative w-full h-14"
      />
    );
  }

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
          <span className="bg-[#FACC15] text-[#1E3A8A] rounded-full py-1 px-4 text-xs font-bold">
            Halaman 2 dari 2
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mini Peta Konsep
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="m-0 rounded-xl bg-[#F5F0FF] border border-[#DDD0FA] py-2 px-6 text-sm font-extrabold text-[#5B21B6] text-center">
              Bangun Ruang Sisi Datar
            </p>
            <span className="text-[#1E3A8A]">↓</span>
            <p className="m-0 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] py-2 px-6 text-sm font-extrabold text-[#15803D]">
              Jaring-jaring
            </p>
            <span className="text-xs font-bold text-[#1E3A8A]">↓ harus memenuhi</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {syarat.map((s, i) => (
                <div key={s.teks} className="rounded-xl bg-[#FEF9E7] border border-[#F5E6A8] p-3 flex flex-col items-center text-center gap-1.5">
                  <span className="text-2xl">{s.ikon}</span>
                  <p className="m-0 text-[13px] font-bold text-[#1E3A8A] leading-[1.4]">
                    {i + 1}. {s.teks}
                  </p>
                </div>
              ))}
            </div>
            <span className="text-xs font-bold text-[#1E3A8A]">↓ sehingga membentuk</span>
            <p className="m-0 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] py-2 px-6 text-sm font-extrabold text-[#1E3A8A]">
              Bangun ruang utuh
            </p>
            <span className="text-xs font-bold text-[#1E3A8A]">↓ satu bangun ruang dapat memiliki</span>
            <p className="m-0 rounded-xl bg-[#FEF2F2] border border-[#FECACA] py-2 px-6 text-sm font-extrabold text-[#B91C1C] text-center">
              Banyak jaring-jaring (lebih dari satu)
            </p>
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 flex flex-col gap-2.5">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">💡 Ingat!</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#374151]">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hal yang Ditemukan Selama Belajar
          </div>
        </div>
          <ul className="m-0 p-4 list-none flex flex-col gap-3 bg-white border border-[#E5E7EB] rounded-[20px]">
            {temuan.map((t) => (
              <li key={t.teks} className="flex items-center gap-3 border-b border-dashed border-[#DBEAFE] pb-3 last:border-0 last:pb-0">
                <span className="w-10 h-10 rounded-full bg-[#EFF4FF] flex items-center justify-center text-xl flex-shrink-0">{t.ikon}</span>
                <p className="m-0 text-[13px] leading-[1.5] font-semibold text-[#1E3A8A]">{t.teks}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kata Kunci
          </div>
        </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {kataKunci.map((k) => (
              <div key={k.label} className="rounded-xl bg-[#F8FAFF] border border-[#E5E7EB] p-2 flex flex-col items-center gap-1">
                <p className="m-0 text-[11px] font-bold text-[#1E3A8A] text-center">{k.label}</p>
                <span className="text-2xl h-14 flex items-center">{k.ikon}</span>
              </div>
            ))}
            <div className="col-span-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-3 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Jaring-jaring valid</p>
              <span className="text-3xl text-[#16A34A]">✔</span>
            </div>
            <div className="col-span-2 rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-3 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Jaring-jaring tidak valid</p>
              <span className="text-3xl text-[#DC2626]">✖</span>
            </div>
            <div className="rounded-xl bg-[#F5F0FF] border border-[#DDD0FA] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Kubus</p>
              <span className="text-3xl h-14 flex items-center">🟪</span>
            </div>
            <div className="rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Balok</p>
              <span className="text-3xl h-14 flex items-center">🟦</span>
            </div>
            <div className="rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Prisma</p>
              {ikon({ kunci: "M2-P10-L3-1", urutan: "1", alt: "Bangun prisma segitiga" })}
            </div>
            <div className="rounded-xl bg-[#FFF7ED] border border-[#FED7AA] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Limas</p>
              {ikon({ kunci: "M2-P10-L3-2", urutan: "2", alt: "Bangun limas segiempat" })}
            </div>
          </div>
        </div>
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
