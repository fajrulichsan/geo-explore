import { Fragment } from "react";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import FileSubmission from "@/components/FileSubmission";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import FlowConnector from "@/app/belajar/_components/FlowConnector";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const alur = [
  { label: "Data Hasil Pengamatan", desc: "Tahap 3", imageKey: "M1-P6-L6-2" as const, urutan: "2" },
  { label: "Hasil Pengolahan", desc: "Tahap 4", imageKey: "M1-P6-L6-3" as const, urutan: "3" },
];

const sambungan = ["plus", "arrow", "arrow"] as const;

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

export default async function Peta6Step6SiapTahapBerikutnya({ materi, peta, step = "6", editFoto, initialAnswers }: StepComponentProps) {
  const [gambarKartu1, gambarKartu2, gambarKartu3, gambarKartu4] = await Promise.all([
    getPageImage("M1-P6-L6-2"),
    getPageImage("M1-P6-L6-3"),
    getPageImage("M1-P6-L6-4"),
    getPageImage("M1-P6-L6-5"),
  ]);
  const kartuGambar = [gambarKartu1, gambarKartu2, gambarKartu3, gambarKartu4];
  const kartu = [
    ...alur.map((a) => ({ ...a, aktif: false })),
    { imageKey: "M1-P6-L6-4" as PageImageKey, urutan: "4", label: "Verifikasi", desc: "Tahap 5", aktif: true },
    { imageKey: "M1-P6-L6-5" as PageImageKey, urutan: "5", label: "Siap Menyusun Kesimpulan", desc: "Tahap 6", aktif: false },
  ];
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
            SUBMATERI 1
          </div>
          <div className="inline-flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border border-[#DBE5FB] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Tahap 5 dari 6 &ndash; Discovery Learning
          </div>
        </div>
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

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-2">
        {kartu.map((k, i) => (
          <Fragment key={k.imageKey}>
            <div
              className={`flex-1 rounded-2xl p-5 flex flex-col items-center text-center gap-2 ${
                k.aktif
                  ? "bg-[#2563EB] text-white border border-[#2563EB] shadow-lg"
                  : "bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              }`}
            >
              <EditablePageImage
                imageKey={k.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={k.urutan}
                src={kartuGambar[i]}
                alt={k.label}
                editable={editFoto}
                containerClassName={`relative w-32 h-32 rounded-xl overflow-hidden ${k.aktif ? "bg-white/20" : "bg-[#EFF4FF]"}`}
              />
              <h3 className={`m-0 text-sm font-bold ${k.aktif ? "" : "text-[#111827]"}`}>{k.label}</h3>
              <p className={`m-0 text-xs ${k.aktif ? "text-white/80" : "text-[#6B7280]"}`}>{k.desc}</p>
            </div>
            {i < kartu.length - 1 && <FlowConnector kind={sambungan[i]} />}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="contents">
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

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof initialAnswers?.file_hasil_kerja === "string" ? initialAnswers.file_hasil_kerja : undefined}
      />

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/5`} />
        <NextStepButton variant="green" icon="check">LANJUT KE TAHAP AYO MENYIMPULKAN</NextStepButton>
      </div>
    </form>
  );
}
