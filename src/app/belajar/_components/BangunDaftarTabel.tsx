"use client";

import { useRef, useState } from "react";

type Item = { key: string; label: string };
type Entry = { bangun: string; nilai: Record<string, string> };

const BANGUN = ["Kubus", "Balok", "Prisma Segitiga", "Limas Segiempat", "Limas Segitiga"];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors";

function parseEntries(raw: unknown): Entry[] {
  if (typeof raw !== "string" || !raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Entry[]) : [];
  } catch {
    return [];
  }
}

export default function BangunDaftarTabel({
  answerKey,
  initialValue,
  selectLabel,
  rows,
  columns,
  entryTitle,
}: {
  answerKey: string;
  initialValue: unknown;
  selectLabel: string;
  rows: Item[];
  columns: Item[];
  entryTitle: string;
}) {
  const [entries, setEntries] = useState<Entry[]>(() => parseEntries(initialValue));
  const [bangun, setBangun] = useState("");
  const [nilai, setNilai] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function notifyChanged() {
    setTimeout(() => wrapperRef.current?.closest("form")?.dispatchEvent(new Event("change", { bubbles: true })), 0);
  }

  function handleTambah() {
    if (!bangun) {
      setError("Pilih bangun ruang terlebih dahulu.");
      return;
    }
    if (!Object.values(nilai).some((v) => v.trim())) {
      setError("Isi minimal satu kolom sebelum menambahkan ke daftar.");
      return;
    }
    setError(null);
    setEntries((prev) => [...prev, { bangun, nilai }]);
    setBangun("");
    setNilai({});
    notifyChanged();
  }

  function handleHapus(index: number) {
    setEntries((prev) => prev.filter((_, i) => i !== index));
    notifyChanged();
  }

  return (
    <div ref={wrapperRef} className="flex flex-col gap-4">
      <input
        type="hidden"
        name={`answers.${answerKey}`}
        value={entries.length > 0 ? JSON.stringify(entries) : ""}
        onChange={() => {}}
      />

      <div className="flex justify-end">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-xs font-semibold text-[#6B7280]">{selectLabel}</span>
          <select
            value={bangun}
            onChange={(e) => setBangun(e.target.value)}
            className="bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3 border-none focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Pilih Bangun
            </option>
            {BANGUN.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <table className="w-full min-w-[560px] border-collapse">
          {columns.length > 1 && (
            <thead>
              <tr className="bg-[#EFF4FF]">
                <th className="text-left text-xs font-bold text-[#1D4ED8] p-4 w-[22%]">Aspek yang Diamati</th>
                {columns.map((c) => (
                  <th key={c.key} className="text-left text-xs font-bold text-[#1D4ED8] p-4">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((r) => (
              <tr key={r.key} className="border-t border-[#F3F4F6]">
                <th scope="row" className="text-left text-[13px] font-bold text-[#1E3A8A] py-2.5 px-4">
                  {r.label}
                </th>
                {columns.map((c) => {
                  const k = `${r.key}_${c.key}`;
                  return (
                    <td key={k} className="py-2 px-2">
                      <input
                        type="text"
                        value={nilai[k] ?? ""}
                        onChange={(e) => setNilai((n) => ({ ...n, [k]: e.target.value }))}
                        aria-label={`${r.label} - ${c.label}`}
                        className={inputClass}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="m-5 flex flex-col gap-3">
          {error && <p className="m-0 text-xs font-semibold text-[#DC2626]">{error}</p>}
          <button
            type="button"
            onClick={handleTambah}
            className="self-start flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border-none rounded-full py-2.5 px-5 text-sm font-bold cursor-pointer hover:bg-[#DBEAFE] transition-colors"
          >
            + Tambah ke Daftar
          </button>
        </div>
      </div>

      {entries.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="m-0 text-sm font-bold text-[#111827]">
            {entryTitle} ({entries.length})
          </h3>
          {entries.map((entry, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 relative"
            >
              <button
                type="button"
                onClick={() => handleHapus(i)}
                className="absolute top-3 right-3 text-xs font-bold text-[#9CA3AF] hover:text-[#DC2626]"
              >
                Hapus
              </button>
              <span className="inline-block w-fit bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3">
                {entry.bangun}
              </span>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-xs text-[#374151]">
                  {columns.length > 1 && (
                    <thead>
                      <tr className="text-left text-[#6B7280]">
                        <th className="py-1.5 pr-3 font-semibold">Aspek</th>
                        {columns.map((c) => (
                          <th key={c.key} className="py-1.5 pr-3 font-semibold">
                            {c.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.key} className="border-t border-[#F3F4F6]">
                        <th scope="row" className="py-1.5 pr-3 text-left font-semibold text-[#9CA3AF]">
                          {r.label}
                        </th>
                        {columns.map((c) => (
                          <td key={c.key} className="py-1.5 pr-3 font-semibold">
                            {entry.nilai[`${r.key}_${c.key}`] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
