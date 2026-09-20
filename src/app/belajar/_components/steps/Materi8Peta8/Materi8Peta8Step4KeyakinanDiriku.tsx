import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "yakin_volume_skala", teks: "Saya yakin dapat menentukan volume hasil skala suatu bangun ruang." },
  { key: "yakin_menjelaskan_k3", teks: "Saya yakin dapat menjelaskan mengapa volume berubah sebesar faktor k³." },
  { key: "yakin_lebih_satu_strategi", teks: "Saya yakin dapat menggunakan lebih dari satu strategi penyelesaian." },
  { key: "yakin_mempertahankan_alasan", teks: "Saya yakin dapat mempertahankan alasan matematis ketika berdiskusi." },
  { key: "yakin_memperbaiki_jawaban", teks: "Saya yakin dapat memperbaiki jawaban apabila menemukan kesalahan." },
];

export default async function Materi8Peta8Step4KeyakinanDiriku({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const gambar = await getPageImage("M8-P8-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Setelah Tahap 6 – Ayo Menyimpulkan
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Keyakinan Diriku
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-4 items-end bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang (✓) sesuai keyakinanmu saat ini.</p>
            {pernyataan.map((p) => (
              <label key={p.key} className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
                <input type="checkbox" name={`answers.${p.key}`} value="ya" defaultChecked={answers[p.key] === "ya"} className="mt-0.5 accent-[#2563EB]" />
                {p.teks}
              </label>
            ))}
          </div>
        <EditablePageImage
          imageKey="M8-P8-L4-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambar}
          alt="Siswa mengepalkan tangan dengan tulisan Aku mampu terus berkembang"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[200px] mx-auto overflow-hidden"
        />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit cursor-pointer bg-[#2563EB] shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14 M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
