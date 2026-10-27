import type { ReactNode } from "react";
import { Btn, Note, Prompt, StageTitle } from "./ui";

export default function DoneStage({
  body,
  next,
  summary,
  finished,
  onFinish,
}: {
  body: string;
  next?: string;
  summary?: ReactNode;
  finished: boolean;
  onFinish: () => void;
}) {
  return (
    <>
      <StageTitle>Data Eksplorasimu Sudah Siap</StageTitle>
      <Note>{body}</Note>
      {summary}
      {next && <Prompt>{next}</Prompt>}
      {finished ? (
        <p className="text-sm font-semibold text-green-700">
          ✓ Eksplorasi GeoGebra selesai.
        </p>
      ) : (
        <div>
          <Btn variant="primary" onClick={onFinish}>
            Selesai Eksplorasi GeoGebra
          </Btn>
        </div>
      )}
    </>
  );
}
