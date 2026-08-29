import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { icon: "target", label: "Dasar klasifikasi", key: "dasar_klasifikasi" },
  { icon: "group", label: "Kelompok yang terbentuk", key: "kelompok_terbentuk" },
  { icon: "check", label: "Kelebihan", key: "kelebihan" },
  { icon: "cross", label: "Kekurangan", key: "kekurangan" },
];

function RowIcon({ icon }: { icon: string }) {
  if (icon === "check") {
    return (
      <div className="w-8 h-8 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#137333" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    );
  }
  if (icon === "cross") {
    return (
      <div className="w-8 h-8 rounded-full bg-[#FDE8E8] flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </div>
    );
  }
  if (icon === "group") {
    return (
      <div className="w-8 h-8 rounded-full bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </div>
  );
}

export default function Peta9Step4MembandingkanStrategi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Membandingkan Strategi
          </h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Perhatikan kembali tiga cara klasifikasi yang telah kamu buat pada halaman sebelumnya.
          Lengkapilah tabel berikut.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden border border-[#E5E7EB]">
          <div className="bg-[#EFF4FF] p-4 flex items-center justify-center text-center">
            <span className="text-xs font-bold text-[#2563EB]">Yang Dibandingkan</span>
          </div>
          <div className="bg-[#EFF4FF] p-4 flex items-center justify-center text-center">
            <span className="text-xs font-bold text-[#2563EB]">Cara 1</span>
          </div>
          <div className="bg-[#EFF4FF] p-4 flex items-center justify-center text-center">
            <span className="text-xs font-bold text-[#2563EB]">Cara 2</span>
          </div>
          <div className="bg-[#EFF4FF] p-4 flex items-center justify-center text-center">
            <span className="text-xs font-bold text-[#2563EB]">Cara 3</span>
          </div>

          {baris.map((b) => (
            <>
              <div key={`${b.label}-label`} className="bg-white p-4 flex items-center gap-3">
                <RowIcon icon={b.icon} />
                <span className="text-sm font-bold text-[#111827]">{b.label}</span>
              </div>
              {[1, 2, 3].map((c) => (
                <div key={`${b.label}-${c}`} className="bg-white p-0">
                  <textarea
                    name={`answers.${b.key}_cara_${c}`}
                    defaultValue={getValue(`${b.key}_cara_${c}`)}
                    placeholder="Ketik di sini..."
                    required
                    className="w-full h-full min-h-[100px] bg-transparent border-none focus:ring-2 focus:ring-[#2563EB]/20 outline-none p-4 text-sm text-[#374151] resize-none"
                  />
                </div>
              ))}
            </>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil kerja (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
