import { useState } from "react";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import { aspectInfo, type AspectId } from "./content";

export default function AspectPanel({
  aspect,
  solidLabel,
  counts,
  verticesVisible,
  canCompare,
  onToggleVertices,
  onToMenu,
  onToSufficiency,
  onToCompare,
}: {
  aspect: AspectId;
  solidLabel: string;
  counts: { sisi: number; rusuk: number; titik: number };
  verticesVisible: boolean;
  canCompare: boolean;
  onToggleVertices: () => void;
  onToMenu: () => void;
  onToSufficiency: () => void;
  onToCompare: () => void;
}) {
  const [recorded, setRecorded] = useState(false);
  const info = aspectInfo(aspect);
  const counted =
    aspect === "jumlah-sisi"
      ? `Sisi yang sudah ditandai: ${counts.sisi}`
      : aspect === "jumlah-rusuk"
        ? `Rusuk yang sudah ditandai: ${counts.rusuk}`
        : aspect === "jumlah-titik"
          ? `Titik sudut yang sudah ditandai: ${counts.titik}`
          : null;

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {solidLabel} · {info.label}
      </p>
      <StageTitle>{info.label}</StageTitle>
      <Prompt>{info.prompt}</Prompt>
      <Note>{info.support}</Note>
      {aspect === "jumlah-titik" && (
        <div>
          <Btn onClick={onToggleVertices}>
            {verticesVisible ? "Sembunyikan" : "Tampilkan"} Titik Sudut
          </Btn>
        </div>
      )}
      {counted && <p className="text-sm font-semibold text-gray-900">{counted}</p>}

      <StageTitle>Catat Temuanmu</StageTitle>
      <Prompt>Apa yang kamu temukan dari bangun ini?</Prompt>
      {recorded ? (
        <>
          <Hint>
            Catat hasil pengamatanmu pada tabel hasil pengamatan GeoGebra di
            e-module.
          </Hint>
          <BtnRow>
            <Btn onClick={onToMenu}>Amati Aspek Lain</Btn>
            {canCompare && <Btn onClick={onToCompare}>Bandingkan Bangun</Btn>}
            <Btn variant="primary" onClick={onToSufficiency}>
              Periksa Kecukupan Data
            </Btn>
          </BtnRow>
        </>
      ) : (
        <div>
          <Btn variant="primary" onClick={() => setRecorded(true)}>
            Catat Temuan
          </Btn>
        </div>
      )}
    </>
  );
}
