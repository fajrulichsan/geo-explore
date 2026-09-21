import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "kemungkinan_jaring", label: "Saya menemukan beberapa kemungkinan bentuk jaring-jaring." },
  { key: "hubungan_posisi", label: "Saya mulai memahami hubungan antara posisi sisi dan hasil lipatan." },
  { key: "info_geogebra", label: "Saya memperoleh informasi baru dari GeoGebra 3D." },
  { key: "info_ar", label: "Saya memperoleh informasi baru dari Augmented Reality (AR)." },
  { key: "yakin_menjelaskan", label: "Saya yakin dapat menjelaskan hasil eksplorasi yang saya peroleh." },
  { key: "ingin_lanjut", label: "Saya masih ingin mengeksplorasi lebih lanjut." },
];

export default async function Materi2Peta4Step4RefleksiSingkat({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => typeof answers[key] === "string";
  const mascotImage = await getPageImage("M2-P4-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>

        <div className="flex items-start gap-5 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">
              Beri tanda centang (✓) pada pernyataan yang sesuai denganmu.
            </p>
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${p.key}`}
                  defaultChecked={isChecked(`refleksi_${p.key}`)}
                  className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#2563EB]"
                />
                <span className="text-sm font-semibold text-[#374151] leading-[1.5]">{p.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M2-P4-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot siswa dengan ide cemerlang"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-28 h-44 flex-shrink-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-extrabold text-[#B45309]">Kotak Ingat</span>
            <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.6]">
              Eksplorasi bertujuan mengumpulkan data, bukan langsung menentukan jawaban akhir.
              Semua hasil pengamatan akan digunakan pada tahap berikutnya untuk dianalisis
              bersama.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-extrabold text-[#1D4ED8]">Menuju Tahap Berikutnya</span>
            <p className="m-0 text-xs font-semibold text-[#1E3A8A] leading-[1.6]">
              Data hasil eksplorasimu akan digunakan pada tahap berikutnya untuk mengolah
              informasi dan menemukan pola hubungan antar berbagai jaring-jaring.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
