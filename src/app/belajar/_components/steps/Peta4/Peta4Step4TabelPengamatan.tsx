import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import Peta4Step4TabelPengamatanForm from "./Peta4Step4TabelPengamatanForm";

export default function Peta4Step4TabelPengamatan({ materi, peta, initialAnswers }: StepComponentProps) {
  return (
    <Peta4Step4TabelPengamatanForm
      materi={materi}
      peta={peta}
      initialAnswers={initialAnswers ?? {}}
      header={<StepHeader materi={materi} currentStep={4} totalSteps={10} />}
    />
  );
}
