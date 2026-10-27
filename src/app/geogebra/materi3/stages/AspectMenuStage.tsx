import { ASPECTS } from "../content";
import type { AspectId } from "../types";
import { Note, StageTitle } from "../../shared/ui";

export default function AspectMenuStage({
  done,
  onSelect,
  onCheck,
}: {
  done: ReadonlySet<AspectId>;
  onSelect: (id: AspectId) => void;
  onCheck: () => void;
}) {
  return (
    <>
      <StageTitle>Apa yang Ingin Kamu Selidiki?</StageTitle>
      <ul className="flex flex-col gap-2">
        {ASPECTS.map((a) => (
          <li key={a.id}>
            <button
              type="button"
              onClick={() => onSelect(a.id)}
              className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              <span aria-hidden>{done.has(a.id) ? "☑" : "☐"}</span>
              {a.label}
            </button>
          </li>
        ))}
      </ul>
      <Note>
        Pilih informasi yang kamu perlukan untuk menyelidiki dugaan kelompokmu.
        Kamu tidak harus mengamati semuanya.
      </Note>
      <button
        type="button"
        onClick={onCheck}
        className="self-start text-sm font-semibold text-[#2563EB] hover:underline"
      >
        Periksa Kecukupan Data →
      </button>
    </>
  );
}
