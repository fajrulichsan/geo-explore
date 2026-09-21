import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "pola_eksplorasi", label: "Saya menemukan pola dari hasil eksplorasi." },
  { key: "alasan_kelompok", label: "Saya yakin dapat menjelaskan alasan kelompok tentang jaring-jaring yang valid dan yang tidak valid." },
  { key: "hubungan_posisi", label: "Saya mulai memahami hubungan posisi sisi dengan hasil lipatan." },
  { key: "kelompokkan_informasi", label: "Saya dapat mengelompokkan informasi dengan tepat." },
  { key: "pertanyaan_lanjut", label: "Saya masih memiliki pertanyaan yang ingin saya selidiki lebih lanjut." },
];

export default async function Materi2Peta5Step4RefleksiSingkat({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getBool = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M2-P5-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
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
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-5">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Berilah tanda centang (✓) pada pernyataan yang sesuai denganmu.</p>
            {refleksi.map((r) => (
              <label
                key={r.key}
                className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${r.key}`}
                  defaultChecked={getBool(`refleksi_${r.key}`)}
                  data-require-group="refleksi-singkat"
                  className="mt-0.5 accent-[#2563EB]"
                />
                <span className="text-sm font-semibold text-[#374151]">{r.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M2-P5-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Siswa berpikir dengan gelembung lampu ide"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-44 sm:w-32 sm:h-48 flex-shrink-0 self-center sm:self-end"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-start gap-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M9 2h6v4H9zM8.5 11l1.5 1.5 2.5-3M8.5 16l1.5 1.5 2.5-3M14 11.5h2.5M14 16.5h2.5" />
          </svg>
          <div>
            <p className="m-0 text-sm font-bold text-[#92400E] mb-1">Kotak Ingat</p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Hasil yang kamu peroleh masih berupa dugaan berdasarkan hasil pengolahan informasi. Pada tahap
              berikutnya, dugaan tersebut akan diperiksa dan dibandingkan kembali dengan bukti serta konsep yang
              relevan.
            </p>
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-6 flex items-start gap-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" />
          </svg>
          <div>
            <p className="m-0 text-sm font-bold text-[#1E3A8A] mb-1">Kotak Motivasi</p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Tidak semua kelompok harus memperoleh klasifikasi yang sama. Yang terpenting adalah alasan matematis
              yang kalian gunakan dapat dijelaskan dengan logis!
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
