import { useState } from "react";
import { Btn, BtnRow, Hint, Prompt, StageTitle } from "./ui";

export default function Recorder({
  title = "Catat Temuanmu",
  prompt,
  instruction = "Catat hasil pengamatanmu pada Catatan Hasil Eksplorasi di e-module.",
  doneMessage,
  disabled,
  buttonLabel = "Sudah Dicatat",
  nav,
  onRecorded,
}: {
  title?: string;
  prompt: string;
  instruction?: string;
  doneMessage?: string;
  disabled?: boolean;
  buttonLabel?: string;
  nav: { label: string; onClick: () => void; primary?: boolean }[];
  onRecorded?: () => void;
}) {
  const [recorded, setRecorded] = useState(false);
  return (
    <>
      <StageTitle>{title}</StageTitle>
      <Prompt>{prompt}</Prompt>
      {recorded ? (
        <>
          {doneMessage && (
            <p className="text-sm font-semibold text-green-700">✓ {doneMessage}</p>
          )}
          <BtnRow>
            {nav.map((n) => (
              <Btn key={n.label} variant={n.primary ? "primary" : "secondary"} onClick={n.onClick}>
                {n.label}
              </Btn>
            ))}
          </BtnRow>
        </>
      ) : (
        <>
          <Hint>{instruction}</Hint>
          <div>
            <Btn
              variant="primary"
              disabled={disabled}
              onClick={() => {
                setRecorded(true);
                onRecorded?.();
              }}
            >
              {buttonLabel}
            </Btn>
          </div>
        </>
      )}
    </>
  );
}
