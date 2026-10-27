import { solidFor, type SolidId } from "./solids";
import { Note, StageTitle } from "./ui";

const GROUPS: { group: "utama" | "prisma" | "limas"; title: string | null }[] = [
  { group: "utama", title: null },
  { group: "prisma", title: "Prisma" },
  { group: "limas", title: "Limas" },
];

export default function ShapeStage({
  ids,
  title,
  note,
  current,
  polygonN,
  onPolygonN,
  onSelect,
}: {
  ids: SolidId[];
  title: string;
  note: string;
  current: SolidId | null;
  polygonN: number;
  onPolygonN: (n: number) => void;
  onSelect: (id: SolidId) => void;
}) {
  return (
    <>
      <StageTitle>{title}</StageTitle>
      {GROUPS.map(({ group, title: groupTitle }) => {
        const inGroup = ids.filter((id) => solidFor(id).group === group);
        if (inGroup.length === 0) return null;
        return (
          <div key={group} className="flex flex-col gap-2">
            {groupTitle && (
              <p className="text-sm font-semibold text-gray-700">{groupTitle}</p>
            )}
            <div className="grid grid-cols-2 gap-2">
              {inGroup.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onSelect(id)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm font-semibold transition ${
                    current === id
                      ? "border-[#2563EB] bg-blue-50 text-[#1D4ED8]"
                      : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {solidFor(id, polygonN).label}
                </button>
              ))}
            </div>
          </div>
        );
      })}
      <label className="flex items-center gap-2 text-sm text-gray-700">
        Nilai n untuk segi-n:
        <input
          type="number"
          min={3}
          max={12}
          value={polygonN}
          onChange={(e) =>
            onPolygonN(Math.min(12, Math.max(3, Number(e.target.value) || 6)))
          }
          className="w-16 rounded-md border border-gray-300 px-2 py-1"
        />
      </label>
      <Note>{note}</Note>
    </>
  );
}
