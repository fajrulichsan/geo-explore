import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const catatan = [
  {
    name: "dasar_dipilih",
    label: "Dasar pengelompokan yang kami pilih",
    box: "bg-[#F9FAFB] border-[#E5E7EB]",
    labelColor: "text-[#111827]",
    badge: "bg-[#6D28D9]",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15.5 14c3 0 5.5 1.7 5.5 4.6" />
      </>
    ),
  },
  {
    name: "alasan_sementara",
    label: "Alasan sementara kami",
    box: "bg-[#F9FAFB] border-[#E5E7EB]",
    labelColor: "text-[#111827]",
    badge: "bg-[#15803D]",
    icon: <path d="M20 6L9 17l-5-5" />,
  },
  {
    name: "perlu_diselidiki",
    label: "Hal yang masih perlu kami selidiki (informasi apa yang perlu kami cari?)",
    box: "bg-[#FFF7ED] border-[#FED7AA]",
    labelColor: "text-[#DC2626]",
    badge: "bg-[#EA580C]",
    icon: <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" />,
  },
];

const dugaanBaik = ["menggunakan dasar yang jelas;", "diterapkan secara konsisten;", "didukung alasan matematis yang logis."];

export default async function Peta3Step7CatatanHasilDiskusi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Catatan Hasil Diskusi
          </div>
        </div>
          <p className="m-0 text-sm font-semibold text-[#374151]">Ringkas hasil diskusi kelompokmu.</p>
          {catatan.map((c) => (
            <div key={c.name} className={`border rounded-[20px] p-5 flex flex-col gap-3 ${c.box}`}>
              <div className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${c.badge}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </span>
                <label htmlFor={c.name} className={`text-sm font-bold cursor-pointer ${c.labelColor}`}>
                  {c.label}
                </label>
              </div>
              <textarea
                id={c.name}
                name={`answers.${c.name}`}
                defaultValue={getValue(c.name)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat!
          </div>
        </div>
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" className="flex-shrink-0">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#374151]">Dugaan pengelompokan yang baik perlu:</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {dugaanBaik.map((teks) => (
                <li key={teks} className="flex items-center gap-3 text-sm text-[#1E3A8A]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="M8 12.5l3 3 5-6" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/6`} />
        <NextStepButton />
      </div>
    </form>
  );
}
