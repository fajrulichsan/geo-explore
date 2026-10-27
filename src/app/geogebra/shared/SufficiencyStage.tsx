import { Btn, BtnRow, Prompt, StageTitle } from "./ui";

export default function SufficiencyStage({
  step,
  question,
  onEnough,
  onNeedMore,
  onMoreAspect,
  onOtherSolid,
  moreOptions,
}: {
  step: "check" | "more";
  question: string;
  onEnough: () => void;
  onNeedMore: () => void;
  onMoreAspect: () => void;
  onOtherSolid: () => void;
  moreOptions?: { label: string; onClick: () => void }[];
}) {
  if (step === "more") {
    return (
      <>
        <StageTitle>Data apa yang masih kamu perlukan?</StageTitle>
        <BtnRow>
          {moreOptions ? (
            moreOptions.map((o) => (
              <Btn key={o.label} onClick={o.onClick}>
                {o.label}
              </Btn>
            ))
          ) : (
            <>
              <Btn onClick={onMoreAspect}>Amati Aspek Lain dari Bangun Ini</Btn>
              <Btn onClick={onOtherSolid}>Bandingkan dengan Bangun Lain</Btn>
            </>
          )}
        </BtnRow>
      </>
    );
  }
  return (
    <>
      <StageTitle>Apakah Datamu Sudah Cukup?</StageTitle>
      <Prompt>{question}</Prompt>
      <BtnRow>
        <Btn variant="primary" onClick={onEnough}>
          Sudah Cukup
        </Btn>
        <Btn onClick={onNeedMore}>Perlu Data Tambahan</Btn>
      </BtnRow>
    </>
  );
}
