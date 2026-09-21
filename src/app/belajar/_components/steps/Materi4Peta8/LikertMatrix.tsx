type Pernyataan = { n: number; label: string };
type Opsi = { value: string; label: string };

type LikertMatrixProps = {
  prefix: string;
  pernyataan: Pernyataan[];
  opsi: Opsi[];
  answers: Record<string, unknown>;
};

const opsiTone = [
  "accent-[#16A34A] text-[#166534]",
  "accent-[#2563EB] text-[#1D4ED8]",
  "accent-[#F59E0B] text-[#B45309]",
  "accent-[#DC2626] text-[#B91C1C]",
];

export default function LikertMatrix({ prefix, pernyataan, opsi, answers }: LikertMatrixProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="hidden sm:grid grid-cols-[1fr_repeat(4,112px)] items-center bg-[#F9FAFB] border-b border-[#E5E7EB] px-5 py-3 text-xs font-bold">
        <span className="text-[#6B7280]">Pernyataan</span>
        {opsi.map((o, i) => (
          <span key={o.value} className={`text-center leading-tight ${opsiTone[i].split(" ")[1]}`}>
            {o.label}
          </span>
        ))}
      </div>
      {pernyataan.map((p) => {
        const current = typeof answers[`${prefix}_${p.n}`] === "string" ? answers[`${prefix}_${p.n}`] : "";
        return (
          <div
            key={p.n}
            className="grid grid-cols-2 sm:grid-cols-[1fr_repeat(4,112px)] items-center gap-x-2 gap-y-2 px-5 py-4 border-b border-[#F3F4F6] last:border-0"
          >
            <p className="col-span-2 sm:col-span-1 m-0 text-sm font-semibold text-[#374151]">
              <span className="text-[#9CA3AF] font-bold mr-1.5">{p.n}.</span>
              {p.label}
            </p>
            {opsi.map((o, i) => (
              <label
                key={o.value}
                className={`flex items-center sm:justify-center gap-2 text-xs font-semibold cursor-pointer ${opsiTone[i]}`}
              >
                <input
                  type="radio"
                  name={`answers.${prefix}_${p.n}`}
                  value={o.value}
                  defaultChecked={current === o.value}
                  required
                  aria-label={o.label}
                  className="w-5 h-5"
                />
                <span className="sm:sr-only">{o.label}</span>
              </label>
            ))}
          </div>
        );
      })}
    </div>
  );
}
