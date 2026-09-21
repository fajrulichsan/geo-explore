import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "bisa_bedakan_jaring", label: "Saya sudah mampu membedakan jaring valid dan tidak valid." },
  { key: "bisa_jelaskan_alasan", label: "Saya dapat menjelaskan alasan matematisnya." },
  { key: "temukan_alternatif", label: "Saya menemukan beberapa alternatif jaring." },
  { key: "gunakan_geogebra_ar", label: "Saya menggunakan GeoGebra dan AR untuk memeriksa jaring." },
  { key: "yakin_jelaskan_teman", label: "Saya yakin dapat menjelaskan kepada teman mengapa suatu jaring valid atau tidak valid." },
];

export default async function Materi2Peta7Step4RefleksiMotivasi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M2-P7-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan (Generalisasi)</h1>
      </div>

      <div className="bg-white border border-[#BBF7D0] rounded-[20px] overflow-hidden grid md:grid-cols-3">
        <div className="md:col-span-2 p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">F</div>
            <h2 className="m-0 text-lg font-bold text-[#166534]">Refleksi Singkat</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Berilah tanda centang (✓) pada pernyataan yang sesuai denganmu.</p>
          <div className="flex flex-col gap-2">
            {refleksi.map((r) => (
              <label key={r.key} className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.${r.key}`}
                  defaultChecked={checked(r.key)}
                  className="mt-0.5 w-4 h-4 accent-[#16A34A]"
                />
                <span className="text-sm text-[#374151]">{r.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-center p-4">
          <EditablePageImage
            imageKey="M2-P7-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Siswa mengacungkan jempol dengan tanda centang hijau"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-44"
          />
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex items-center gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">G</div>
            <h2 className="m-0 text-lg font-bold text-[#1E3A8A]">Kotak Motivasi</h2>
          </div>
          <p className="m-0 text-base font-extrabold text-[#B45309]">Hebat!</p>
          <p className="m-0 text-sm leading-[1.7] text-[#1E40AF]">
            Kamu telah menemukan sendiri bahwa suatu konsep matematika dapat dipahami melalui proses mengamati,
            berdiskusi, mengeksplorasi, memverifikasi, dan menyimpulkan. Inilah cara seorang matematikawan membangun
            pengetahuan.
          </p>
        </div>
        <svg width="72" height="72" viewBox="0 0 64 64" fill="none" className="flex-shrink-0" aria-hidden="true">
          <path d="M20 8h24v14a12 12 0 01-24 0V8z" fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
          <path d="M20 12h-8v4a8 8 0 008 8M44 12h8v4a8 8 0 01-8 8" stroke="#D97706" strokeWidth="2.5" />
          <path d="M32 34v10M22 56h20M26 44h12v12H26z" stroke="#D97706" strokeWidth="2.5" fill="#FBBF24" />
        </svg>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
