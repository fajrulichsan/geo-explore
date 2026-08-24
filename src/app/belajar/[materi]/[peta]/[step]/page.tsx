import BelajarShell from "@/app/belajar/_components/BelajarShell";
import ComingSoon from "@/app/belajar/_components/ComingSoon";
import { getStepComponent } from "@/app/belajar/_components/stepRegistry";

export default async function BelajarStepPage(
  props: PageProps<"/belajar/[materi]/[peta]/[step]">
) {
  const { materi, peta, step } = await props.params;
  const StepComponent = getStepComponent(materi, peta, step);

  return (
    <BelajarShell>
      {StepComponent ? (
        <StepComponent materi={materi} peta={peta} />
      ) : (
        <ComingSoon materi={materi} peta={peta} step={step} />
      )}
    </BelajarShell>
  );
}
