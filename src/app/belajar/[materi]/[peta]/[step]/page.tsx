import { redirect } from "next/navigation";
import BelajarShell from "@/app/belajar/_components/BelajarShell";
import ComingSoon from "@/app/belajar/_components/ComingSoon";
import { getStepComponent } from "@/app/belajar/_components/stepRegistry";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress, isStepUnlocked } from "@/lib/progress";

export default async function BelajarStepPage(
  props: PageProps<"/belajar/[materi]/[peta]/[step]">
) {
  const { materi, peta, step } = await props.params;

  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  // Server-side gate: a locked step can't be reached by typing the URL directly.
  if (!(await isStepUnlocked(userId, materi, peta, step))) {
    redirect("/peta-belajar");
  }

  const StepComponent = getStepComponent(materi, peta, step);
  const rows = await getMateriProgress(userId, materi);
  const initialAnswers = rows.find((r) => r.peta === peta && r.step === step)?.answers;

  return (
    <BelajarShell>
      {StepComponent ? (
        <StepComponent materi={materi} peta={peta} initialAnswers={initialAnswers} />
      ) : (
        <ComingSoon materi={materi} peta={peta} step={step} />
      )}
    </BelajarShell>
  );
}
