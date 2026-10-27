type Props = {
  title: string;
  value: number;
  playing: boolean;
  onSlider: (value: number) => void;
  onAnimate: (target: 0 | 1) => void;
  onPause: () => void;
  onRepeat: () => void;
  mode?: "buka" | "lipat";
};

const small =
  "rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50";

export default function FoldControls({
  title,
  value,
  playing,
  onSlider,
  onAnimate,
  onPause,
  onRepeat,
  mode = "buka",
}: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3">
      <div className="flex items-center justify-between text-xs font-medium text-gray-500">
        <span>{title} 3D</span>
        <span>Jaring-jaring 2D</span>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={(e) => onSlider(Number(e.target.value))}
        aria-label={`Buka atau lipat ${title}`}
        className="w-full accent-[#2563EB]"
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button
          type="button"
          onClick={() => onAnimate(1)}
          disabled={playing}
          className="rounded-md bg-[#2563EB] px-2 py-1.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] disabled:opacity-50"
        >
          {mode === "buka" ? "▶ Buka" : "▶ Lipat"}
        </button>
        <button type="button" onClick={onPause} disabled={!playing} className={small}>
          ⏸ Jeda
        </button>
        <button type="button" onClick={() => onAnimate(0)} disabled={playing} className={small}>
          {mode === "buka" ? "↶ Lipat Kembali" : "↶ Buka Kembali"}
        </button>
        <button type="button" onClick={onRepeat} className={small}>
          ↻ Ulangi
        </button>
      </div>
    </div>
  );
}
