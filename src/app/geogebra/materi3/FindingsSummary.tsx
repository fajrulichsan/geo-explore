import { aspectLabel } from "./content";
import { solidFor } from "../shared/solids";
import type { Finding } from "./types";

export default function FindingsSummary({ findings }: { findings: Finding[] }) {
  if (findings.length === 0) return null;
  return (
    <ul className="flex flex-col gap-1 rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">
      {findings.map((f) => (
        <li key={`${f.solidId}:${f.aspect}`}>
          <span className="font-semibold">
            {solidFor(f.solidId).label} — {aspectLabel(f.aspect)}
          </span>
          {f.details.map((d) => (
            <span key={d} className="block pl-3">
              {d}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
