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
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P7-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Menyimpulkan (Generalisasi)
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Refleksi Singkat
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <p className="m-0 text-sm text-[#4B5563] flex-1">
                Berilah tanda centang (✓) pada pernyataan yang sesuai denganmu.
              </p>
              <EditablePageImage
                imageKey="M2-P7-L4-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={mascotImage}
                alt="Maskot memberi jempol"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative hidden sm:block w-16 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#EFF4FF]"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              {refleksi.map((r) => (
                <label
                  key={r.key}
                  className="flex items-start gap-2.5 text-sm font-semibold text-[#374151] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={`answers.${r.key}`}
                    defaultChecked={getValue(r.key) === "true"}
                    value="true"
                    data-require-group="refleksi_singkat"
                    className="mt-1 w-4 h-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB] flex-shrink-0"
                  />
                  {r.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kotak Motivasi
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-6 flex-1 flex flex-col justify-center gap-3">
            <div className="absolute -right-8 -top-12 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -right-4 bottom-[-30px] w-24 h-24 rounded-full bg-white/10" />
            <div className="relative flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <h2 className="m-0 text-lg font-extrabold text-white">Hebat!</h2>
            </div>
            <p className="relative m-0 text-sm leading-[1.6] text-white/90">
              Kamu telah menemukan sendiri bahwa suatu konsep matematika dapat dipahami melalui
              proses mengamati, berdiskusi, mengeksplorasi, memverifikasi, dan menyimpulkan.
              Inilah cara seorang matematikawan membangun pengetahuan.
            </p>
          </div>
        </div>
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
