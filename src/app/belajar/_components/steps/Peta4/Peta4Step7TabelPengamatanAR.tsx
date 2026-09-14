import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import Peta4Step7TabelPengamatanARForm from "./Peta4Step7TabelPengamatanARForm";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";

export default async function Peta4Step7TabelPengamatanAR({ materi, peta, initialAnswers }: StepComponentProps) {
  const userId = await getSessionUserId();
  const rows = userId ? await getMateriProgress(userId, materi) : [];
  const geoGebraRaw = rows.find((r) => r.peta === peta && r.step === "4")?.answers?.pengamatan_bangun;

  const geoGebraEntries = (() => {
    if (typeof geoGebraRaw !== "string" || !geoGebraRaw) return [];
    try {
      const parsed = JSON.parse(geoGebraRaw);
      return Array.isArray(parsed) ? (parsed as Record<string, string>[]) : [];
    } catch {
      return [];
    }
  })();

  return (
    <Peta4Step7TabelPengamatanARForm
      materi={materi}
      peta={peta}
      initialAnswers={initialAnswers ?? {}}
      geoGebraEntries={geoGebraEntries}
      header={<StepHeader materi={materi} currentStep={7} totalSteps={10} />}
    />
  );
}
