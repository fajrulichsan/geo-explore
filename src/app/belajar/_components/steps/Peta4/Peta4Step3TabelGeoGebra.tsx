import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import Peta4Step3TabelGeoGebraForm from "./Peta4Step3TabelGeoGebraForm";

export default function Peta4Step3TabelGeoGebra({ materi, peta, initialAnswers }: StepComponentProps) {
  return (
    <Peta4Step3TabelGeoGebraForm
      materi={materi}
      peta={peta}
      initialAnswers={initialAnswers ?? {}}
      header={<StepHeader materi={materi} currentStep={3} totalSteps={8} />}
    />
  );
}
