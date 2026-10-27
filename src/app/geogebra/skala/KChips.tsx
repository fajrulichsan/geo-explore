import { K_OPTIONS, kLabel } from "./data";

export default function KChips({
  value,
  onPick,
}: {
  value: number;
  onPick: (k: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Faktor skala">
      <span className="text-sm font-semibold text-gray-700">Faktor skala k:</span>
      {K_OPTIONS.map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => onPick(k)}
          className={`rounded-md border px-3 py-1 text-sm font-semibold ${
            Math.abs(value - k) < 0.01
              ? "border-[#2563EB] bg-blue-50 text-[#1D4ED8]"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          {kLabel(k)}
        </button>
      ))}
    </div>
  );
}
