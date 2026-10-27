"use client";

import { useState } from "react";
import Materi1Flow from "./materi1/Materi1Flow";
import Materi2Flow from "./materi2/Materi2Flow";
import Materi3Flow from "./materi3/Materi3Flow";
import Materi4Flow from "./materi4/Materi4Flow";
import Materi6Flow from "./materi6/Materi6Flow";
import Materi7Flow from "./materi7/Materi7Flow";
import SkalaFlow from "./skala/SkalaFlow";

const MATERI = [
  { id: "1", label: "Submateri 1 — Ciri-ciri Bangun Ruang", Flow: Materi1Flow },
  { id: "2", label: "Submateri 2 — Jaring-Jaring", Flow: Materi2Flow },
  { id: "3", label: "Submateri 3 — Luas Permukaan Kubus, Balok, dan Prisma", Flow: Materi3Flow },
  { id: "4", label: "Submateri 4 — Luas Permukaan Limas", Flow: Materi4Flow },
  { id: "5", label: "Submateri 5 — Skala dan Luas Permukaan", Flow: () => <SkalaFlow mode="luas" /> },
  { id: "6", label: "Submateri 6 — Volume Kubus, Balok, dan Prisma", Flow: Materi6Flow },
  { id: "7", label: "Submateri 7 — Volume Limas", Flow: Materi7Flow },
  { id: "8", label: "Submateri 8 — Skala dan Volume", Flow: () => <SkalaFlow mode="volume" /> },
] as const;

export default function GeoGebraApp({ initial }: { initial?: string }) {
  const [id, setId] = useState(
    MATERI.some((m) => m.id === initial) ? (initial as string) : "1",
  );
  const active = MATERI.find((m) => m.id === id) ?? MATERI[0];

  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex shrink-0 flex-wrap items-center gap-3 border-b border-gray-200 bg-white px-4 py-2">
        <label htmlFor="materi" className="text-sm font-semibold text-gray-700">
          Pilih Materi
        </label>
        <select
          id="materi"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900"
        >
          {MATERI.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
      </header>
      <div className="min-h-0 flex-1">
        <active.Flow key={active.id} />
      </div>
    </div>
  );
}
