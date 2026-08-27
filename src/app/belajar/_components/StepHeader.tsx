import { getMateriMeta } from "@/lib/materiMeta";

type StepHeaderProps = {
  materi: string;
  currentStep: number;
  totalSteps: number;
};

export default async function StepHeader({ materi, currentStep, totalSteps }: StepHeaderProps) {
  const { title } = await getMateriMeta(materi);

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        {title.toUpperCase()}
      </div>
      <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
        Langkah {currentStep}/{totalSteps}
      </div>
    </div>
  );
}
