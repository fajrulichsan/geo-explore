import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const poinPenting = [
  "Luas permukaan berasal dari jumlah luas seluruh sisi.",
  "Jaring-jaring membantu melihat seluruh sisi bangun.",
  "Rumus luas permukaan diperoleh dari pola yang ditemukan dan digeneralisasikan.",
  "Satu masalah dapat diselesaikan dengan berbagai strategi.",
  "Alasan matematis sama pentingnya dengan hasil akhir.",
];

const kataKunci = [
  "Kubus",
  "Balok",
  "Prisma",
  "Jaring-jaring",
  "Luas Permukaan",
  "Luas Alas",
  "Luas Selimut",
  "Sisi Tegak",
  "Sisi Kongruen",
  "Jumlah Luas Seluruh Sisi",
  "Rumus Luas Permukaan",
  "Strategi Penyelesaian",
  "Alasan Matematis",
];

export default async function Materi3Peta10Step4PetaKonsepPenutup({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const mascotImage = await getPageImage("M3-P10-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Kubus, Balok, dan Prisma
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Peta Konsep Mini
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3 flex-1">
            <div className="rounded-2xl bg-[#DBEAFE] text-[#1D4ED8] font-bold text-sm px-5 py-2.5 text-center">
              LUAS PERMUKAAN
            </div>
            <div className="w-px h-4 bg-[#D1D5DB]" />
            <div className="rounded-2xl bg-[#EDE9FE] text-[#5B21B6] font-bold text-sm px-5 py-2.5 text-center">
              Jumlah seluruh luas sisi
            </div>
            <div className="w-px h-4 bg-[#D1D5DB]" />
            <div className="grid grid-cols-3 gap-3 w-full">
              <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3 flex flex-col items-center text-center gap-1">
                <p className="m-0 text-xs font-bold text-[#15803D]">Kubus</p>
                <p className="m-0 text-sm font-extrabold text-[#15803D]">6s²</p>
              </div>
              <div className="rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] p-3 flex flex-col items-center text-center gap-1">
                <p className="m-0 text-xs font-bold text-[#1D4ED8]">Balok</p>
                <p className="m-0 text-sm font-extrabold text-[#1D4ED8] text-center">2(pl+pt+lt)</p>
              </div>
              <div className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-3 flex flex-col items-center text-center gap-1">
                <p className="m-0 text-xs font-bold text-[#C2410C]">Prisma</p>
                <p className="m-0 text-sm font-extrabold text-[#C2410C]">2Lₐ+Lₛ</p>
              </div>
            </div>
            <div className="w-full bg-[#F9FAFB] rounded-xl p-3 mt-1 text-xs text-[#4B5563] flex flex-col gap-1">
              <p className="m-0"><span className="font-bold">Lₐ</span> = luas alas</p>
              <p className="m-0"><span className="font-bold">Lₛ</span> = luas selimut (jumlah luas seluruh sisi tegak)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Poin Penting
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1">
            {poinPenting.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="text-[#16A34A] flex-shrink-0 mt-0.5">✔</span>
                <p className="m-0 text-sm text-[#374151] leading-[1.5]">{p}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kata Kunci
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-wrap gap-2">
            {kataKunci.map((k) => (
              <span key={k} className="rounded-full bg-[#F9FAFB] border border-[#F3F4F6] px-3.5 py-1.5 text-xs font-bold text-[#374151]">
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#EFF6FF] rounded-[20px] p-6 flex flex-col sm:flex-row items-center gap-5">
        <div className="w-11 h-11 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xl flex-shrink-0">
          🚀
        </div>
        <div className="flex-1">
          <p className="m-0 mb-1 text-sm font-extrabold text-[#111827]">Selanjutnya</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">
            Bersiaplah mempelajari Submateri 4 — Luas Permukaan Limas. Temukan apakah cara
            menentukan luas permukaannya memiliki persamaan atau perbedaan dengan kubus, balok,
            dan prisma yang telah kamu pelajari.
          </p>
        </div>
      </div>

      <div className="bg-[#FDF3C7] rounded-[20px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <EditablePageImage
            imageKey="M3-P10-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot memberi jempol karena telah menyelesaikan rangkuman"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-20 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-white/40"
          />
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-xl">
              <span>🏆</span>
              <span>✨</span>
            </div>
            <h2 className="m-0 mb-1.5 text-2xl font-extrabold text-[#92400E]">Hebat!</h2>
            <p className="m-0 text-sm text-[#785900] font-medium">
              Kamu telah menemukan sendiri bagaimana luas permukaan kubus, balok, dan prisma
              diperoleh dari jumlah luas seluruh sisinya. Teruslah menggunakan berbagai strategi,
              memberikan alasan matematis, serta percaya pada kemampuanmu dalam menyelesaikan
              masalah matematika!
            </p>
          </div>
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
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
      </div>
    </form>
  );
}
