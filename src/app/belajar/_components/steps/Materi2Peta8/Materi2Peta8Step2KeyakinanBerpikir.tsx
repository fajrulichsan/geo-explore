import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const keyakinan = [
  { key: "yakin_tentukan_valid", text: "menentukan jaring-jaring yang valid." },
  { key: "yakin_lebih_dari_satu", text: "menemukan lebih dari satu jaring-jaring untuk bangun ruang yang sama." },
  { key: "yakin_alasan_matematis", text: "menjelaskan alasan matematis untuk mendukung jawaban saya." },
  { key: "yakin_diskusi", text: "berdiskusi dan mempertahankan pendapat menggunakan alasan matematika." },
  { key: "yakin_perbaiki_jawaban", text: "memperbaiki jawaban apabila menemukan bukti yang lebih baik." },
];

const caraBerpikir = [
  {
    key: "mengamati",
    label: "Mengamati gambar",
    icon: (
      <>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    key: "berdiskusi",
    label: "Berdiskusi",
    icon: (
      <>
        <path d="M8 12a4 4 0 118 0 4 4 0 01-8 0z" />
        <path d="M2 20c0-3 3-5 6-5M22 20c0-3-3-5-6-5" />
      </>
    ),
  },
  {
    key: "geogebra",
    label: "GeoGebra 3D",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8" />
      </>
    ),
  },
  {
    key: "ar",
    label: "AR",
    icon: (
      <>
        <path d="M12 2l9 5v10l-9 5-9-5V7z" />
        <path d="M3 7l9 5 9-5M12 12v10" />
      </>
    ),
  },
  {
    key: "verifikasi",
    label: "Verifikasi",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </>
    ),
  },
  {
    key: "menyimpulkan",
    label: "Menyimpulkan",
    icon: (
      <>
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
      </>
    ),
  },
];

export default function Materi2Peta8Step2KeyakinanBerpikir({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#4338CA] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Keyakinan Diriku</p>
          </div>
          <div className="inline-flex items-center bg-[#EEF2FF] text-[#4338CA] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Saya yakin dapat...
          </div>
          <div className="flex flex-col gap-2.5">
            {keyakinan.map((c) => (
              <label
                key={c.key}
                className="group flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-3 px-4 cursor-pointer hover:border-[#4338CA] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  className="peer sr-only"
                />
                <span className="w-5 h-5 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#4338CA] peer-checked:border-[#4338CA] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Refleksi Berpikir</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="p8-pengetahuan-baru" className="text-sm font-semibold text-[#111827]">
              1. Apa pengetahuan baru yang kamu peroleh pada submateri ini?
            </label>
            <textarea
              id="p8-pengetahuan-baru"
              name="answers.pengetahuan_baru"
              defaultValue={getValue("pengetahuan_baru")}
              rows={2}
              placeholder="Tulis di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111827]">
              2. Bagaimana cara kamu menemukan jawaban tersebut?
            </label>
            <p className="m-0 -mt-1 text-xs text-[#EA580C] font-semibold">
              (Pilih yang paling sesuai, boleh lebih dari satu)
            </p>
            <div className="grid grid-cols-3 gap-2">
              {caraBerpikir.map((c) => (
                <label
                  key={c.key}
                  className="flex flex-col items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-2.5 px-1.5 cursor-pointer has-[:checked]:bg-[#FFF1E8] has-[:checked]:border-[#EA580C] transition-colors"
                >
                  <input
                    type="checkbox"
                    name={`answers.cara_${c.key}`}
                    value="true"
                    defaultChecked={getValue(`cara_${c.key}`) === "true"}
                    className="peer sr-only"
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" className="peer-checked:hidden">
                    {c.icon}
                  </svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2" className="hidden peer-checked:block">
                    {c.icon}
                  </svg>
                  <span className="text-[10px] font-semibold text-[#6B7280] text-center leading-tight">
                    {c.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="p8-cara-alasan" className="text-sm font-semibold text-[#111827]">
              Jelaskan singkat cara dan alasanya.
            </label>
            <textarea
              id="p8-cara-alasan"
              name="answers.cara_dan_alasan"
              defaultValue={getValue("cara_dan_alasan")}
              rows={2}
              placeholder="Tulis di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
