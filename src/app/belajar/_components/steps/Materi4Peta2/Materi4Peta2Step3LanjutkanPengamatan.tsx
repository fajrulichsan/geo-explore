import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Jaring = {
  label: string;
  color: string;
  bg: string;
  border: string;
  imageKey: PageImageKey;
  urutan: string;
  alt: string;
};

const jaringList: Jaring[] = [
  {
    label: "Limas Segitiga",
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    imageKey: "M4-P2-L3-1",
    urutan: "1",
    alt: "Jaring-jaring limas segitiga dengan panah menunjuk sisi tegak dan alas",
  },
  {
    label: "Limas Segiempat",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    imageKey: "M4-P2-L3-2",
    urutan: "2",
    alt: "Jaring-jaring limas segiempat dengan panah menunjuk sisi tegak dan alas",
  },
  {
    label: "Limas Segilima",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    imageKey: "M4-P2-L3-3",
    urutan: "3",
    alt: "Jaring-jaring limas segilima dengan panah menunjuk sisi tegak dan alas",
  },
];

export default async function Materi4Peta2Step3LanjutkanPengamatan({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const images = await Promise.all(jaringList.map((j) => getPageImage(j.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Lanjutkan Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#374151] bg-[#F9FAFB] border border-dashed border-[#93C5FD] rounded-xl py-3 px-4">
          Dari ketiga jaring-jaring di atas, tampak satu alas dan beberapa sisi tegak berbentuk segitiga.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jaringList.map((j, i) => (
            <div
              key={j.label}
              className="rounded-[20px] p-4 flex flex-col items-center gap-3 border"
              style={{ backgroundColor: j.bg, borderColor: j.border }}
            >
              <p className="m-0 text-sm font-bold" style={{ color: j.color }}>
                {j.label}
              </p>
              <EditablePageImage
                imageKey={j.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={j.urutan}
                src={images[i]}
                alt={j.alt}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white"
              />
            </div>
          ))}
        </div>

        <p className="m-0 flex items-center gap-2 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-3 px-4 text-sm font-semibold text-[#374151]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" className="flex-shrink-0">
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" />
          </svg>
          Setiap jaring-jaring terdiri dari 1 alas dan beberapa sisi tegak berbentuk segitiga.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
