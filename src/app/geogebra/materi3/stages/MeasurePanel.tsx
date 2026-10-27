import type { Face } from "../../shared/geometry";

export function edgeGroups(face: Face) {
  const groups = new Map<string, number[]>();
  face.edgeLengths.forEach((len, i) => {
    const key = `${face.edgeNames[i]}:${len}`;
    groups.set(key, [...(groups.get(key) ?? []), i]);
  });
  return [...groups.values()];
}

export function measuredSummary(face: Face, revealed: ReadonlySet<number> | undefined) {
  return edgeGroups(face)
    .filter((g) => revealed && g.some((i) => revealed.has(i)))
    .map((g) => `${face.edgeNames[g[0]]} ${face.edgeLengths[g[0]]} cm`);
}

export default function MeasurePanel({
  face,
  revealed,
  onReveal,
}: {
  face: Face;
  revealed: ReadonlySet<number> | undefined;
  onReveal: (edges: number[]) => void;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3">
      <p className="text-sm font-semibold text-gray-800">
        {face.label} · {face.shape}
      </p>
      <p className="text-xs text-gray-500">
        Klik rusuk pada model, atau pilih ukuran di bawah ini.
      </p>
      <div className="flex flex-wrap gap-2">
        {edgeGroups(face).map((group) => {
          const shown = Boolean(revealed && group.some((i) => revealed.has(i)));
          return (
            <button
              key={group[0]}
              type="button"
              onClick={() => onReveal(group)}
              className={`rounded-md border px-2 py-1 text-xs font-semibold ${
                shown
                  ? "border-red-300 bg-red-50 text-red-700"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {shown
                ? `${face.edgeNames[group[0]]}: ${face.edgeLengths[group[0]]} cm`
                : `Tampilkan ${face.edgeNames[group[0]]}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}
