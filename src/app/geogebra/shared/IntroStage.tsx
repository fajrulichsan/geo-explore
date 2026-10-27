import { Btn, Note, Prompt, StageTitle } from "./ui";

export default function IntroStage({
  prompt,
  startLabel,
  onStart,
}: {
  prompt: string;
  startLabel: string;
  onStart: () => void;
}) {
  return (
    <>
      <StageTitle>Ayo Mengeksplorasi!</StageTitle>
      <Note>Ayo selidiki dugaan kelompokmu!</Note>
      <Prompt>{prompt}</Prompt>
      <p className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-sm text-orange-900">
        💡 Ingat! Kamu sedang mengumpulkan informasi. Belum saatnya menentukan
        kesimpulan akhir.
      </p>
      <div>
        <Btn variant="primary" onClick={onStart}>
          {startLabel}
        </Btn>
      </div>
    </>
  );
}
