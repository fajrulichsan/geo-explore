import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pemahaman = [
  { key: "beda_valid_tidak", text: "Saya dapat membedakan jaring-jaring yang valid dan tidak valid." },
  { key: "lebih_dari_satu_jaring", text: "Saya memahami bahwa satu bangun ruang dapat memiliki lebih dari satu jaring-jaring." },
  { key: "alasan_valid", text: "Saya dapat menjelaskan alasan mengapa suatu jaring-jaring valid." },
  { key: "gunakan_geogebra_ar", text: "Saya dapat menggunakan hasil pengamatan dari GeoGebra 3D dan AR sebagai bukti pendukung." },
  { key: "simpulkan_konsep", text: "Saya dapat menyimpulkan konsep jaring-jaring berdasarkan hasil pengamatan." },
];

export default async function Materi2Peta8Step1RefleksiPemahaman({ materi, peta, step = "1", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M2-P8-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="rounded-[28px] bg-gradient-to-br from-[#FFF7E6] to-[#FFEFC7] border border-[#FDE68A] px-6 py-6 sm:px-8 flex flex-col sm:flex-row items-center gap-6">
        <EditablePageImage
          imageKey="M2-P8-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={maskot}
          alt="Siswi berhijab sedang berpikir sambil memegang pena"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-40 h-40 sm:w-44 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden bg-white"
        />
        <div className="flex-1 flex flex-col gap-3">
          <p className="m-0 text-sm sm:text-[15px] leading-[1.7] text-[#4B5563]">
            Sekarang, saatnya kamu merefleksikan pengalaman belajarmu selama mempelajari jaring-jaring bangun ruang sisi datar. Isilah dengan jujur sesuai dengan pengalamanmu.
          </p>
          <div className="bg-white/80 border border-[#FDE68A] rounded-xl py-3 px-4 flex items-start gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
              <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.6]">
                Tidak ada jawaban benar atau salah pada bagian refleksi. Jawablah sesuai dengan apa yang benar-benar kamu rasakan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#1E3A8A]">
            Refleksi Pemahaman
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Berilah tanda centang (✓) pada pernyataan yang sesuai dengan dirimu.</p>
        <div className="flex flex-col gap-2.5">
          {pemahaman.map((c) => (
            <label
              key={c.key}
              className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl py-3.5 px-4 cursor-pointer hover:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] transition-colors"
            >
              <input type="checkbox" name={`answers.${c.key}`} value="true" defaultChecked={getValue(c.key) === "true"} className="peer sr-only" />
              <span className="w-5 h-5 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
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
