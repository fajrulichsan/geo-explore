import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { n: 1, label: "Saya menemukan beberapa kemungkinan bentuk jaring-jaring." },
  { n: 2, label: "Saya mulai memahami hubungan antara posisi sisi dan hasil lipatan." },
  { n: 3, label: "Saya memperoleh informasi baru dari GeoGebra 3D." },
  { n: 4, label: "Saya memperoleh informasi baru dari Augmented Reality (AR)." },
  { n: 5, label: "Saya yakin dapat menjelaskan hasil eksplorasi yang saya peroleh." },
  { n: 6, label: "Saya masih ingin mengeksplorasi lebih lanjut." },
];

export default async function Materi2Peta4Step4RefleksiSingkat({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const mascotImage = await getPageImage("M2-P4-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
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

        <div className="flex flex-col sm:flex-row gap-5 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M2-P4-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot mengingatkan refleksi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-24 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
          />
          <div className="flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Beri tanda centang (✓) pada pernyataan yang sesuai denganmu.
            </p>
            {pernyataan.map((p) => (
              <label
                key={p.n}
                className="flex items-center gap-3 border-b border-[#F3F4F6] last:border-0 pb-3 last:pb-0 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${p.n}`}
                  value="ya"
                  defaultChecked={getValue(`refleksi_${p.n}`) === "ya"}
                  className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M12 2c3 3 5 6.5 5 10.5A5 5 0 0112 18a5 5 0 01-5-5.5C7 8.5 9 5 12 2z" />
            <path d="M9 18l-2 3M15 18l2 3" />
          </svg>
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Menuju Tahap Berikutnya
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
          Data hasil eksplorasimu akan digunakan pada tahap berikutnya untuk mengolah informasi dan
          menemukan pola hubungan antar berbagai jaring-jaring.
        </p>
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
