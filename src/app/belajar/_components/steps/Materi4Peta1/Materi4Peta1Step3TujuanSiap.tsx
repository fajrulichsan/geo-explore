import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Menemukan hubungan antara jaring-jaring limas dan luas permukaannya.",
  "Menentukan luas permukaan limas dari luas alas dan sisi-sisi tegaknya.",
  "Menggunakan lebih dari satu strategi untuk menentukan luas permukaan limas.",
  "Menjelaskan alasan matematis dari strategi yang digunakan.",
  "Membandingkan dan memperbaiki strategi penyelesaian.",
  "Menunjukkan keyakinan diri dalam menyelesaikan masalah.",
];

const ingatPoin = [
  "Luas permukaan suatu bangun ruang diperoleh dengan menjumlahkan luas seluruh sisi yang membatasinya.",
  "Limas memiliki satu alas dan beberapa sisi tegak berbentuk segitiga.",
  "Setiap sisi harus dihitung tepat satu kali.",
  "Rumus luas permukaan dapat ditemukan melalui hubungan jaring-jaring dan luas seluruh sisinya, bukan sekadar dihafalkan.",
];

const jenisLimas = [
  { key: "M4-P1-L3-2" as const, urutan: "2", label: "Limas Segitiga", alt: "Limas segitiga berwarna biru" },
  { key: "M4-P1-L3-3" as const, urutan: "3", label: "Limas Segiempat", alt: "Limas segiempat berwarna oranye" },
  { key: "M4-P1-L3-4" as const, urutan: "4", label: "Limas Segilima", alt: "Limas segilima berwarna hijau" },
];

export default async function Materi4Peta1Step3TujuanSiap({ materi, peta, step = "3", editFoto }: StepComponentProps) {
  const [gambarMaskot, ...gambarJenis] = await Promise.all([
    getPageImage("M4-P1-L3-1"),
    ...jenisLimas.map((j) => getPageImage(j.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 4
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M12 3L3 20h18zM12 3v17" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Luas Permukaan Limas</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran
          </div>
        </div>

        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" className="flex-shrink-0">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.5" fill="#DC2626" />
            </svg>
            <p className="m-0 text-sm text-[#4B5563]">Setelah mempelajari submateri ini, kamu diharapkan mampu:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tujuanPembelajaran.map((tujuan, i) => (
              <div key={tujuan} className="flex items-start gap-3 bg-white rounded-xl p-3.5">
                <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm leading-[1.5] text-[#374151]">{tujuan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
            Ingat!
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex items-start gap-4">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <div className="flex flex-col gap-3">
            {ingatPoin.map((poin) => (
              <div key={poin} className="flex items-start gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#374151] leading-[1.5]">{poin}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Mengeksplorasi?
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8 flex flex-col gap-6">
          <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Siap Mengeksplorasi?</h2>
              <p className="m-0 text-sm text-white/90 max-w-xl">
                Gunakan pengetahuan, logika, dan kreativitasmu untuk menemukan cara menentukan luas
                permukaan limas! Ada berbagai jenis limas yang akan kamu jumpai.
              </p>
            </div>
            <EditablePageImage
              imageKey="M4-P1-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarMaskot}
              alt="Siswa laki-laki bersemangat mengepalkan tangan di meja belajar"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 self-end"
            />
          </div>
          <div className="relative grid grid-cols-3 gap-3 sm:gap-5">
            {jenisLimas.map((jenis, i) => (
              <div key={jenis.key} className="flex flex-col items-center gap-2 bg-white rounded-2xl p-3">
                <EditablePageImage
                  imageKey={jenis.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={jenis.urutan}
                  src={gambarJenis[i]}
                  alt={jenis.alt}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full aspect-square"
                />
                <span className="text-xs sm:text-sm font-bold text-[#1E3A8A] text-center">{jenis.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
