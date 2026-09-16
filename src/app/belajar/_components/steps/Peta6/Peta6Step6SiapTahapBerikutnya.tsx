import Image from "next/image";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { label: "Data Hasil Pengamatan", desc: "Tahap 3", imageKey: "M1-P6-L6-2" as const, urutan: "2" },
  { label: "Hasil Pengolahan", desc: "Tahap 4", imageKey: "M1-P6-L6-3" as const, urutan: "3" },
];

const ringkasan = [
  "Memeriksa kembali dugaan klasifikasi.",
  "Membandingkan alasan dengan kelompok lain.",
  "Memperbaiki dugaan bila diperlukan.",
  "Menyiapkan hasil verifikasi untuk menyusun kesimpulan.",
];

const ingatKembali = [
  "Gunakan data untuk mendukung setiap dugaanmu.",
  "Diskusikan dengan teman sekelompokmu untuk memperoleh alasan yang lebih kuat.",
];

export default async function Peta6Step6SiapTahapBerikutnya({ materi, peta, step = "6", editFoto }: StepComponentProps) {
  const gambarAlur = await getPageImage("M1-P6-L6-1");
  const [gambarKartu1, gambarKartu2, gambarKartu3, gambarKartu4] = await Promise.all([
    getPageImage("M1-P6-L6-2"),
    getPageImage("M1-P6-L6-3"),
    getPageImage("M1-P6-L6-4"),
    getPageImage("M1-P6-L6-5"),
  ]);
  const kartuGambar = [gambarKartu1, gambarKartu2];
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
            className="flex-shrink-0"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap ke Tahap Berikutnya
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Kamu telah memeriksa kembali hasil pengolahan data dan memperbaiki dugaan bila diperlukan. Kini,
          hasil verifikasi ini akan digunakan untuk menyusun kesimpulan pada Tahap 6.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E7EB] -z-10 -translate-y-1/2 rounded-full" />
        {alur.map((a, i) => (
          <div
            key={a.label}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-2"
          >
            <EditablePageImage
              imageKey={a.imageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={a.urutan}
              src={kartuGambar[i]}
              alt={a.label}
              editable={editFoto}
              containerClassName="relative w-10 h-10 rounded-full overflow-hidden bg-[#EFF4FF]"
            />
            <h3 className="m-0 text-sm font-bold text-[#111827]">{a.label}</h3>
            <p className="m-0 text-xs text-[#6B7280]">{a.desc}</p>
          </div>
        ))}
        <div className="bg-[#2563EB] text-white border border-[#2563EB] rounded-2xl p-5 shadow-lg flex flex-col items-center text-center gap-2 scale-105">
          <EditablePageImage
            imageKey="M1-P6-L6-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={gambarKartu3}
            alt="Verifikasi"
            editable={editFoto}
            containerClassName="relative w-10 h-10 rounded-full overflow-hidden bg-white/20"
          />
          <h3 className="m-0 text-sm font-bold">Verifikasi</h3>
          <p className="m-0 text-xs text-white/80">Tahap 5</p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-2">
          <EditablePageImage
            imageKey="M1-P6-L6-5"
            materi={materi}
            peta={peta}
            step={step}
            urutan="5"
            src={gambarKartu4}
            alt="Siap Menyusun Kesimpulan"
            editable={editFoto}
            containerClassName="relative w-14 h-14 rounded-lg overflow-hidden bg-[#FEF9E7]"
          />
          <h3 className="m-0 text-sm font-bold text-[#111827]">Siap Menyusun Kesimpulan</h3>
          <p className="m-0 text-xs text-[#6B7280]">Tahap 6</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="relative w-full h-full min-h-[220px] rounded-xl bg-[#F9FAFB] overflow-hidden">
            <Image src={gambarAlur} alt="Ilustrasi alur berikutnya" fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h2 className="m-0 mb-4 text-lg font-bold text-[#111827] flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.24l6.92-1L12 2l3.08 6.24 6.92 1-5.02 4.87 1.18 6.88z" />
              </svg>
              Kamu telah menyelesaikan:
            </h2>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {ringkasan.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h2 className="m-0 mb-4 text-lg font-bold text-[#111827] flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              Ingat kembali!
            </h2>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {ingatKembali.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          Selesai
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
