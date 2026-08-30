import { redirect } from "next/navigation";
import BelajarShell from "@/app/belajar/_components/BelajarShell";
import ComingSoon from "@/app/belajar/_components/ComingSoon";
import { getStepComponent } from "@/app/belajar/_components/stepRegistry";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress, isStepUnlocked } from "@/lib/progress";
import { supabase } from "@/lib/supabase";

export default async function BelajarStepPage(
  props: PageProps<"/belajar/[materi]/[peta]/[step]">
) {
  const { materi, peta, step } = await props.params;
  const searchParams = await props.searchParams;
  const editFoto = searchParams?.["edit-foto"] === "true";

  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  // Server-side gate: a locked step can't be reached by typing the URL directly.
  if (!(await isStepUnlocked(userId, materi, peta, step))) {
    redirect(`/peta-belajar/${materi}`);
  }

  const StepComponent = getStepComponent(materi, peta, step);
  const rows = await getMateriProgress(userId, materi);
  const initialAnswers = rows.find((r) => r.peta === peta && r.step === step)?.answers;

  const { data: user } = await supabase
    .from("users")
    .select("nama_lengkap")
    .eq("id", userId)
    .maybeSingle();

  return (
    <BelajarShell userName={user?.nama_lengkap ?? "Siswa"}>
      {StepComponent ? (
        <StepComponent
          materi={materi}
          peta={peta}
          step={step}
          editFoto={editFoto}
          initialAnswers={initialAnswers}
        />
      ) : (
        <ComingSoon materi={materi} peta={peta} step={step} />
      )}
    </BelajarShell>
  );
}
