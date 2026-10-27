import { useState } from "react";
import { Btn, BtnRow, Hint, Prompt, StageTitle } from "../shared/ui";

export default function RecordBlock({
  prompt = "Apa yang kamu temukan dari eksplorasi ini?",
  disabled,
  extra,
  onMenu,
  onSufficiency,
}: {
  prompt?: string;
  disabled?: boolean;
  extra?: { label: string; onClick: () => void }[];
  onMenu: () => void;
  onSufficiency: () => void;
}) {
  const [recorded, setRecorded] = useState(false);
  return (
    <>
      <StageTitle>Catat Temuanmu</StageTitle>
      <Prompt>{prompt}</Prompt>
      {recorded ? (
        <>
          <Hint>
            Catat hasil pengamatanmu pada Tabel Hasil Pengamatan di e-module.
          </Hint>
          <BtnRow>
            {extra?.map((e) => (
              <Btn key={e.label} onClick={e.onClick}>
                {e.label}
              </Btn>
            ))}
            <Btn onClick={onMenu}>Amati Aspek Lain</Btn>
            <Btn variant="primary" onClick={onSufficiency}>
              Periksa Kecukupan Data
            </Btn>
          </BtnRow>
        </>
      ) : (
        <div>
          <Btn variant="primary" disabled={disabled} onClick={() => setRecorded(true)}>
            Catat Temuan
          </Btn>
        </div>
      )}
    </>
  );
}
