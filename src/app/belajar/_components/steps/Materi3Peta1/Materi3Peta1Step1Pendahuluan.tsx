import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alurLuasPermukaan = [
  "Bangun Ruang",
  "Dibuka",
  "Jaring-jaring",
  "Hitung luas setiap sisi",
  "Jumlah seluruh luas sisi",
];

const tujuanPembelajaran = [
  "Menemukan hubungan antara jaring-jaring dan luas permukaan kubus, balok, dan prisma.",
  "Menentukan luas permukaan berdasarkan jumlah luas seluruh sisinya.",
  "Menemukan rumus luas permukaan kubus, balok, dan prisma melalui jaring-jaring.",
  "Mencoba dan membandingkan lebih dari satu strategi dalam menentukan luas permukaan.",
  "Menjelaskan alasan matematis serta memperbaiki strategi jika diperlukan.",
  "Menunjukkan keyakinan diri dalam menyelesaikan masalah luas permukaan.",
];

export default async function Materi3Peta1Step1Pendahuluan({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const [gambarSiswa, gambarAlur, gambarMaskot] = await Promise.all([
    getPageImage("M3-P1-L1-1"),
    getPageImage("M3-P1-L1-2"),
    getPageImage("M3-P1-L1-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={2} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 12h16M12 4v16" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Luas Permukaan Kubus, Balok, dan Prisma
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tahukah Kamu?
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-start">
          <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6">
            <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
            </div>
            <p className="m-0 mb-3 text-[15px] leading-[1.6] text-[#374151]">
              Pernahkah kamu membungkus sebuah kotak kado menggunakan kertas kado? Agar seluruh
              permukaan kotak tertutup, tentu kamu harus mengetahui{" "}
              <span className="text-[#2563EB] font-bold">berapa luas kertas yang dibutuhkan</span>.
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Pada submateri ini, kamu akan mengeksplorasi hubungan antara jaring-jaring bangun
              ruang dengan luas seluruh sisinya menggunakan GeoGebra 3D dan Augmented Reality (AR).
            </p>
            <div className="mt-4 bg-[#FCE9A8] rounded-xl py-3.5 px-[18px]">
              <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
                Menurutmu, bagaimana cara menentukan luas permukaan tanpa langsung menggunakan
                rumus?
              </p>
            </div>
          </div>

          <EditablePageImage
            imageKey="M3-P1-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Ilustrasi tiga siswa berdiskusi tentang luas permukaan"
            editable={editFoto}
            containerClassName="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#EFF4FF]"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bagaimana Luas Permukaan Diperoleh?
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {alurLuasPermukaan.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1.5 min-w-[92px]">
                  <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="m-0 text-center text-xs font-semibold text-[#374151] leading-[1.4]">{label}</p>
                </div>
                {i < alurLuasPermukaan.length - 1 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <EditablePageImage
            imageKey="M3-P1-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarAlur}
            alt="Ilustrasi alur bangun ruang dibuka menjadi jaring-jaring"
            editable={editFoto}
            containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
          />

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Alur ini akan kita gunakan untuk menyelidiki KUBUS, BALOK, dan PRISMA. Bukan rumus
              yang akan dicari terlebih dahulu — kita akan menemukan sendiri bagaimana rumus luas
              permukaan terbentuk (Luas Permukaan = jumlah luas seluruh sisi).
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-5 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tujuanPembelajaran.map((tujuan, i) => (
              <div
                key={tujuan}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-4"
              >
                <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm leading-[1.6] text-[#374151] pt-1">{tujuan}</p>
              </div>
            ))}
          </div>

          <EditablePageImage
            imageKey="M3-P1-L1-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarMaskot}
            alt="Maskot siswa membaca buku catatan"
            editable={editFoto}
            containerClassName="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-[#EFF4FF] hidden lg:block"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          MULAI BELAJAR
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
