import { useState } from "react";
import { aspectLabel, COMPARE_HINTS } from "../content";
import { solidFor, type SolidId } from "../../shared/solids";
import type { AspectId, Finding } from "../types";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../../shared/ui";

export type ComparePair = { aspect: AspectId; a: SolidId; b: SolidId };

export function comparablePairs(findings: Finding[]): ComparePair[] {
  const byAspect = new Map<AspectId, SolidId[]>();
  findings.forEach((f) =>
    byAspect.set(f.aspect, [...(byAspect.get(f.aspect) ?? []), f.solidId]),
  );
  return [...byAspect].flatMap(([aspect, ids]) =>
    ids.flatMap((a, i) => ids.slice(i + 1).map((b) => ({ aspect, a, b }))),
  );
}

export function ComparePickStage({
  pairs,
  onPick,
  onBack,
}: {
  pairs: ComparePair[];
  onPick: (pair: ComparePair) => void;
  onBack: () => void;
}) {
  return (
    <>
      <StageTitle>Bandingkan Hasil Eksplorasimu</StageTitle>
      <Note>
        Kamu telah memperoleh beberapa hasil pengamatan pada aspek yang sama.
        Pilih dua hasil yang ingin kamu bandingkan.
      </Note>
      {pairs.length === 0 ? (
        <Hint>
          Belum ada dua hasil pada aspek yang sama. Amati aspek yang sama pada
          bangun lain terlebih dahulu.
        </Hint>
      ) : (
        <ul className="flex flex-col gap-2">
          {pairs.map((p) => (
            <li key={`${p.aspect}:${p.a}:${p.b}`}>
              <button
                type="button"
                onClick={() => onPick(p)}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm hover:bg-gray-50"
              >
                <span className="block text-xs text-gray-500">{aspectLabel(p.aspect)}</span>
                <span className="font-semibold text-gray-900">
                  [{solidFor(p.a).label}] ↔ [{solidFor(p.b).label}]
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Btn onClick={onBack}>Kembali ke Aspek Pengamatan</Btn>
      </div>
    </>
  );
}

export function CompareStage({
  pair,
  findings,
  onNext,
  onMenu,
  onSufficiency,
}: {
  pair: ComparePair;
  findings: Finding[];
  onNext: () => void;
  onMenu: () => void;
  onSufficiency: () => void;
}) {
  const [hint, setHint] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const detailsOf = (id: SolidId) =>
    findings.find((f) => f.solidId === id && f.aspect === pair.aspect)?.details ?? [];

  return (
    <>
      <StageTitle>Amati Kembali Kedua Bangun</StageTitle>
      <Note>
        {aspectLabel(pair.aspect)} — Model 1: {solidFor(pair.a).label} ↔ Model 2:{" "}
        {solidFor(pair.b).label}
      </Note>
      <div className="grid grid-cols-1 gap-2">
        {[pair.a, pair.b].map((id) => (
          <div key={id} className="rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">
            <p className="mb-1 text-sm font-semibold text-gray-900">{solidFor(id).label}</p>
            {detailsOf(id).map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>
        ))}
      </div>
      <Prompt>
        Berdasarkan aspek yang kamu selidiki, apa persamaan dan perbedaan yang
        kamu temukan dari kedua hasil pengamatan tersebut?
      </Prompt>
      <div>
        <Btn onClick={() => setHint(true)}>Butuh Petunjuk?</Btn>
      </div>
      {hint && <Hint>{COMPARE_HINTS[pair.aspect]}</Hint>}
      {recorded ? (
        <>
          <p className="text-sm font-semibold text-green-700">✓ Hasil perbandingan dicatat.</p>
          <BtnRow>
            <Btn onClick={onNext}>Bandingkan Temuan Lain</Btn>
            <Btn onClick={onMenu}>Kembali ke Aspek Pengamatan</Btn>
            <Btn variant="primary" onClick={onSufficiency}>
              Periksa Kecukupan Data
            </Btn>
          </BtnRow>
        </>
      ) : (
        <>
          <Note>Catat hasil perbandinganmu pada Catatan Hasil Eksplorasi di e-module.</Note>
          <div>
            <Btn variant="primary" onClick={() => setRecorded(true)}>
              Catat Hasil Perbandingan
            </Btn>
          </div>
        </>
      )}
    </>
  );
}
