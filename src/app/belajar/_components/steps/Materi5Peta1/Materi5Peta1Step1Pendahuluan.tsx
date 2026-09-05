import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alurSkalaLuas = [
  "Bangun Asli",
  "Perbesar dengan Faktor Skala",
  "Semua Ukuran Panjang Berubah",
  "Luas Setiap Sisi Berubah",
  "Luas Permukaan Berubah",
  "Temukan Polanya!",
];

const opsiDugaan = [
  { value: "2x", label: "Menjadi 2 kali" },
  { value: "3x", label: "Menjadi 3 kali" },
  { value: "4x", label: "Menjadi 4 kali" },
  { value: "lain", label: "Dugaan lain" },
];

export default async function Materi5Peta1Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [gambarSiswa] = await Promise.all([getPageImage("M5-P1-L1-1")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={2} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 5
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="10" width="7" height="7" rx="1" />
            <rect x="14" y="4" width="10" height="10" rx="1" />
            <path d="M14 20h7" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Skala dan Luas Bangun Ruang Sisi Datar
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
              Pernahkah kamu melihat miniatur rumah, maket gedung, atau mainan yang bentuknya
              sama tetapi ukurannya berbeda?
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Jika setiap panjang rusuk kubus diperbesar menjadi dua kali, apakah{" "}
              <span className="text-[#2563EB] font-bold">luas permukaannya juga menjadi dua kali lipat</span>?
              Pada submateri ini kamu akan menyelidiki hubungan antara faktor skala dan luas
              permukaan melalui pengamatan, diskusi, GeoGebra 3D, Augmented Reality (AR), dan
              berbagai strategi penyelesaian.
            </p>
          </div>

          <EditablePageImage
            imageKey="M5-P1-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Ilustrasi tiga siswa mengamati bangun ruang berskala menggunakan laptop dan tablet"
            editable={editFoto}
            containerClassName="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#EFF4FF]"
            imageClassName="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-5 flex items-center justify-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]" />
              <span className="text-xs font-bold text-[#374151]">Skala 1 (100%)</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-[#9CA3AF]">
              <span className="text-[11px] font-bold text-[#D97706]">k = 2</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-16 h-16 rounded-lg bg-[#2563EB]" />
              <span className="text-xs font-bold text-[#374151]">Skala 2 (200%)</span>
            </div>
          </div>

          <div className="bg-[#FCE9A8] rounded-[16px] py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Ukuran berubah, tetapi bentuk tetap sama. Bagaimana pengaruhnya terhadap luas
              permukaan?
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.4">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <span className="text-sm font-bold text-[#111827]">Menurutmu...</span>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Jika panjang setiap rusuk kubus menjadi 2 kali, bagaimana perubahan luas
            permukaannya?
          </p>

          <div className="flex flex-col gap-2.5">
            {opsiDugaan.map((o) => (
              <label
                key={o.value}
                className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-3 px-4 text-sm font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
              >
                <input
                  type="radio"
                  name="answers.dugaan_awal"
                  value={o.value}
                  defaultChecked={getValue("dugaan_awal") === o.value}
                  required
                  className="accent-[#2563EB]"
                />
                {o.label}
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dugaan_lain" className="text-xs font-semibold text-[#6B7280]">
              Jika memilih &quot;Dugaan lain&quot;, tuliskan di sini
            </label>
            <input
              id="dugaan_lain"
              name="answers.dugaan_lain"
              defaultValue={getValue("dugaan_lain")}
              placeholder="Tuliskan dugaanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] py-3 px-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_dugaan" className="text-sm font-bold text-[#111827]">
              Jelaskan alasanmu secara singkat.
            </label>
            <textarea
              id="alasan_dugaan"
              name="answers.alasan_dugaan"
              defaultValue={getValue("alasan_dugaan")}
              rows={3}
              placeholder="Ketik alasanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>

          <div className="flex items-start gap-2.5 bg-[#EFF4FF] rounded-xl py-3 px-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.6]">
              Pada tahap ini, yang penting adalah dugaan awal dan alasanmu. Dugaanmu akan diperiksa
              melalui kegiatan berikutnya.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bagaimana Skala Mempengaruhi Luas?
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {alurSkalaLuas.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1.5 min-w-[92px]">
                  <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="m-0 text-center text-xs font-semibold text-[#374151] leading-[1.4]">{label}</p>
                </div>
                {i < alurSkalaLuas.length - 1 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Perhatikan dua bangun di atas. Apa pola yang kamu temukan pada perubahan luas
              permukaan?
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
