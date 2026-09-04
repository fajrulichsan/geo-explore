import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingatD = [
  "Jaring-jaring merupakan susunan sisi-sisi bangun ruang pada bidang datar.",
  "Jaring-jaring valid dapat dilipat membentuk bangun ruang tanpa saling bertumpuk.",
  "Satu bangun ruang dapat memiliki lebih dari satu jaring-jaring.",
  "Keempat syarat di atas harus terpenuhi bersama-sama.",
];

const temuan = [
  { icon: "👁️", teks: "Dari pengamatan, bentuk susunan bidang mempengaruhi hasil lipatan." },
  { icon: "🗣️", teks: "Diskusi menunjukkan satu bangun ruang dapat memiliki beberapa bentuk jaring-jaring." },
  { icon: "💻", teks: "GeoGebra 3D membantu melihat proses membuka bangun ruang menjadi jaring-jaring." },
  { icon: "📱", teks: "Augmented Reality (AR) membantu memeriksa apakah lipatan benar-benar membentuk bangun ruang." },
  { icon: "✅", teks: "Verifikasi membantu memastikan jaring-jaring valid dapat dilipat menjadi bangun ruang tanpa ada sisi yang bertumpuk atau terlepas." },
];

const kataKunci = [
  "Jaring-jaring",
  "Garis lipatan",
  "Lipatan",
  "Garis potong",
  "Jaring-jaring valid",
  "Jaring-jaring tidak valid",
];

const shapeKataKunci = [
  { nama: "Kubus", key: "kubus" as const },
  { nama: "Balok", key: "balok" as const },
  { nama: "Prisma", key: "prisma" as const },
  { nama: "Limas", key: "limas" as const },
];

const hurufG = [
  "Jaring-jaring adalah susunan seluruh sisi bangun ruang yang dibuka pada bidang datar dan dapat dilipat kembali membentuk bangun ruang.",
  "Tidak semua susunan bidang merupakan jaring-jaring yang valid.",
  "Satu bangun ruang dapat memiliki lebih dari satu jaring-jaring.",
  "Jaring-jaring yang valid dapat dilipat menjadi bangun ruang utuh tanpa sisi terputus atau bertumpuk.",
  "GeoGebra 3D dan AR membantu memverifikasi kebenaran jaring-jaring secara visual.",
];

export default async function Materi2Peta10Step2PetaKonsepPenutup({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const mascotImage = await getPageImage("M2-P10-L2-1");
  const shapeImages = {
    kubus: await getPageImage("shape-kubus"),
    balok: await getPageImage("shape-balok"),
    prisma: await getPageImage("shape-prisma"),
    limas: await getPageImage("shape-limas"),
  };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Jaring-Jaring Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Mini Peta Konsep
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3">
            <div className="rounded-2xl bg-[#EDE9FE] text-[#5B21B6] font-bold text-sm px-5 py-2.5 text-center">
              Bangun Ruang Sisi Datar
            </div>
            <div className="w-px h-4 bg-[#D1D5DB]" />
            <div className="rounded-2xl bg-[#DBEAFE] text-[#1D4ED8] font-bold text-sm px-5 py-2.5 text-center">
              Jaring-Jaring
            </div>
            <p className="m-0 text-xs text-[#9CA3AF] font-semibold">harus memenuhi</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {[
                "Seluruh sisi lengkap",
                "Seluruh sisi saling terhubung (bertemu pada rusuk yang sama)",
                "Tidak ada sisi yang bertumpuk saat dilipat",
                "Dapat dilipat",
              ].map((c, i) => (
                <div key={c} className="rounded-xl border border-[#FDE68A] bg-[#FEFCE8] p-3 flex flex-col items-center text-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="m-0 text-[11px] text-[#92400E] leading-[1.3]">{c}</p>
                </div>
              ))}
            </div>
            <p className="m-0 text-xs text-[#9CA3AF] font-semibold">sehingga membentuk</p>
            <div className="rounded-2xl bg-[#DCFCE7] text-[#15803D] font-bold text-sm px-5 py-2.5 text-center">
              Bangun Ruang Utuh
            </div>
            <p className="m-0 text-xs text-[#9CA3AF] font-semibold">satu bangun ruang dapat memiliki</p>
            <div className="rounded-2xl bg-[#FEE2E2] text-[#B91C1C] font-bold text-sm px-5 py-2.5 text-center">
              Banyak jaring-jaring (lebih dari satu)
            </div>
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 flex flex-col gap-2 lg:w-64">
          <p className="m-0 text-sm font-extrabold text-[#92400E]">📌 Ingat!</p>
          <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#785900]">
            {ingatD.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Hal yang Ditemukan Selama Belajar
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1">
            {temuan.map((t) => (
              <div key={t.teks} className="flex items-start gap-3 pb-3 border-b border-dashed border-[#E5E7EB] last:border-none last:pb-0">
                <span className="text-lg flex-shrink-0">{t.icon}</span>
                <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">{t.teks}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kata Kunci
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-2 gap-3 flex-1 content-start">
            {kataKunci.map((k) => (
              <div key={k} className="rounded-xl bg-[#F9FAFB] border border-[#F3F4F6] px-3 py-2.5 text-xs font-bold text-[#374151] text-center">
                {k}
              </div>
            ))}
            {shapeKataKunci.map((s) => (
              <div key={s.nama} className="rounded-xl bg-[#F9FAFB] border border-[#F3F4F6] px-3 py-2.5 flex flex-col items-center gap-1.5">
                <img src={shapeImages[s.key]} alt={s.nama} className="w-8 h-8 object-contain" />
                <p className="m-0 text-xs font-bold text-[#374151]">{s.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Hal-hal Penting yang Harus Diingat!
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1">
            {hurufG.map((t, i) => (
              <div key={t} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pesan Motivasi
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-6 flex-1 flex items-center gap-4">
            <div className="absolute -right-8 -bottom-10 w-32 h-32 rounded-full bg-white/10" />
            <p className="relative m-0 text-sm leading-[1.7] text-white/95 flex-1">
              &ldquo;Setiap bentuk jaring-jaring yang kamu temukan adalah bukti bahwa matematika
              penuh kemungkinan. Teruslah berpikir, mencoba, memverifikasi, dan percaya pada
              kemampuan dirimu! Pemahaman tentang jaring-jaring akan menjadi bekal penting untuk
              mempelajari luas permukaan bangun ruang pada submateri berikutnya.&rdquo;
            </p>
            <EditablePageImage
              imageKey="M2-P10-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascotImage}
              alt="Maskot memberi semangat"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative hidden sm:block w-20 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-white/10"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#EFF6FF] rounded-[20px] p-6 flex flex-col sm:flex-row items-center gap-5">
        <div className="w-11 h-11 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xl flex-shrink-0">
          🚀
        </div>
        <div className="flex-1">
          <p className="m-0 mb-1 text-sm font-extrabold text-[#111827]">Menuju Materi Berikutnya</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">
            Selanjutnya, kamu akan mempelajari bagaimana jaring-jaring bangun ruang digunakan
            untuk memahami luas permukaan bangun ruang sisi datar.
          </p>
        </div>
      </div>

      <div className="bg-[#FDF3C7] rounded-[20px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-xl">
            <span>⭐</span>
            <span>✨</span>
          </div>
          <h2 className="m-0 mb-1.5 text-2xl font-extrabold text-[#92400E]">Hebat!</h2>
          <p className="m-0 text-sm text-[#785900] font-medium">
            Kamu telah menyelesaikan seluruh rangkuman submateri Jaring-Jaring Bangun Ruang Sisi
            Datar. Sampai jumpa di materi berikutnya!
          </p>
        </div>
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-4 px-7 text-sm font-bold shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer flex-shrink-0">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>

      <div className="flex justify-start items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
      </div>
    </form>
  );
}
