import { Fragment } from "react";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import FileSubmission from "@/components/FileSubmission";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import FlowConnector from "@/app/belajar/_components/FlowConnector";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const alur: { label: string; key: PageImageKey }[] = [
  { label: "Data dari GeoGebra 3D", key: "M1-P5-L9-1" },
  { label: "Data dari Augmented Reality (AR)", key: "M1-P5-L9-2" },
  { label: "Pola yang ditemukan dan disepakati kelompok", key: "M1-P5-L9-3" },
  { label: "Siap ke Tahap 5 – Ayo Verifikasi", key: "M1-P5-L9-4" },
];

const sambungan = ["plus", "arrow", "arrow"] as const;

const selesai = [
  "Mengolah data hasil eksplorasi",
  "Menemukan pola pengelompokan",
  "Membandingkan strategi klasifikasi",
  "Menyusun hasil pengolahan sementara",
];

const ingatKembali = ["Gunakan data untuk mendukung pola dan hasil pengolahanmu.", "Diskusikan dengan teman kelompokmu."];

export default async function Peta5Step9SiapKeTahapBerikutnya({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const gambar = await Promise.all(alur.map((a) => getPageImage(a.key)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            K
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap ke Tahap Berikutnya
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-2">
          {alur.map((a, i) => (
            <Fragment key={a.label}>
              <div className="flex-1 bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3 text-center">
                <EditablePageImage
                  imageKey={a.key}
                  materi={materi}
                  peta={peta}
                  step="9"
                  urutan={String(i + 1)}
                  src={gambar[i]}
                  alt={a.label}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-28"
                />
                <p className="m-0 text-sm font-bold text-[#1E3A8A] leading-[1.5]">{a.label}</p>
              </div>
              {i < alur.length - 1 && <FlowConnector kind={sambungan[i]} />}
            </Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#2563EB" className="flex-shrink-0">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#1E3A8A]">Kamu telah menyelesaikan:</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {selesai.map((teks) => (
                <li key={teks} className="flex items-center gap-3 text-sm text-[#374151]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" className="flex-shrink-0">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <path d="M8 12.5l3 3 5-6" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#92400E]">Ingat kembali:</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {ingatKembali.map((teks) => (
                <li key={teks} className="flex items-start gap-3 text-sm text-[#374151]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" className="flex-shrink-0">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <path d="M8 12.5l3 3 5-6" />
                  </svg>
                  {teks}
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
        <BackLink href={`/belajar/${materi}/${peta}/8`} />
        <NextStepButton variant="green">LANJUT KE TAHAP AYO VERIFIKASI</NextStepButton>
      </div>
    </form>
  );
}
