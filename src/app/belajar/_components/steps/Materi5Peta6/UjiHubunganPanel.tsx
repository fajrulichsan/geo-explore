"use client";

import { useState } from "react";

const BANGUN = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma Segitiga" },
  { key: "limas", label: "Limas Segiempat" },
];
const FAKTOR = [
  { key: "2", label: "2" },
  { key: "3", label: "3" },
  { key: "setengah", label: "1/2" },
];

const cellInput =
  "w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors";
const textArea =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-none";

type Answers = Record<string, unknown>;

export default function UjiHubunganPanel({ answers }: { answers: Answers }) {
  const str = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [dipilih, setDipilih] = useState<string[]>(() =>
    BANGUN.filter((b) => answers[`uji_pilih_${b.key}`] === "on").map((b) => b.key),
  );
  const [status, setStatus] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const b of BANGUN) for (const f of FAKTOR) init[`${b.key}_${f.key}`] = str(`uji_sesuai_${b.key}_${f.key}`);
    return init;
  });

  const adaTidakSesuai = BANGUN.some(
    (b) => dipilih.includes(b.key) && FAKTOR.some((f) => status[`${b.key}_${f.key}`] === "tidak_sesuai"),
  );

  return (
    <div className="flex flex-col gap-5">
      <p className="m-0 text-sm leading-[1.7] text-[#374151]">
        Gunakan hasil perhitungan dan verifikasi GeoGebra 3D serta AR untuk menguji hubungan antara faktor skala dan
        luas permukaan. Pilih minimal dua jenis bangun ruang, lengkapilah tabel berikut, kemudian periksa
        kesesuaiannya dengan hubungan matematis yang telah kamu temukan.
      </p>

      <fieldset className="m-0 border-0 p-0 flex flex-col gap-3">
        <legend className="p-0 mb-1 text-sm font-bold text-[#111827]">Pilih bangun ruang yang akan diuji (minimal dua)</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {BANGUN.map((b) => (
            <label key={b.key} className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer">
              <input
                type="checkbox"
                name={`answers.uji_pilih_${b.key}`}
                checked={dipilih.includes(b.key)}
                onChange={(e) =>
                  setDipilih((prev) => (e.target.checked ? [...prev, b.key] : prev.filter((k) => k !== b.key)))
                }
                data-require-group="uji-bangun"
                data-require-min="2"
                className="w-4 h-4 accent-[#7C3AED]"
              />
              {b.label}
            </label>
          ))}
        </div>
        {dipilih.length < 2 && <p className="m-0 text-xs text-[#DC2626]">Pilih setidaknya dua jenis bangun ruang.</p>}
      </fieldset>

      {BANGUN.filter((b) => dipilih.includes(b.key)).map((b) => (
        <div key={b.key} className="flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#7C3AED]">{b.label}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left border-collapse">
              <thead>
                <tr className="text-xs font-bold text-[#6B7280]">
                  <th className="px-2 py-2">Faktor Skala (k)</th>
                  <th className="px-2 py-2">Luas Awal (cm²)</th>
                  <th className="px-2 py-2">Luas Baru (cm²)</th>
                  <th className="px-2 py-2">Sesuai dengan L baru = k² × L awal?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {FAKTOR.map((f) => (
                  <tr key={f.key}>
                    <td className="px-2 py-3 text-sm font-bold text-[#111827]">{f.label}</td>
                    {(["awal", "baru"] as const).map((field) => (
                      <td key={field} className="px-2 py-3">
                        <input
                          type="text"
                          name={`answers.uji_${field}_${b.key}_${f.key}`}
                          defaultValue={str(`uji_${field}_${b.key}_${f.key}`)}
                          required
                          placeholder="..."
                          className={cellInput}
                        />
                      </td>
                    ))}
                    <td className="px-2 py-3">
                      <div className="flex flex-col gap-1.5">
                        {(["sesuai", "tidak_sesuai"] as const).map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#374151]">
                            <input
                              type="radio"
                              name={`answers.uji_sesuai_${b.key}_${f.key}`}
                              value={opt}
                              checked={status[`${b.key}_${f.key}`] === opt}
                              onChange={() => setStatus((s) => ({ ...s, [`${b.key}_${f.key}`]: opt }))}
                              required
                              className="accent-[#7C3AED]"
                            />
                            {opt === "sesuai" ? "✓ Sesuai" : "✗ Tidak"}
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 flex flex-col gap-2">
        <label htmlFor="temuan_pemeriksaan" className="text-sm font-bold text-[#5B21B6]">
          Pertanyaan Verifikasi
        </label>
        <p className="m-0 text-sm text-[#374151]">
          Bagaimana hasil pengujian hubungan antara faktor skala dan luas permukaan pada berbagai bangun ruang? Jelaskan
          dengan lebih dari satu contoh perhitungan berdasarkan data yang kamu peroleh!
        </p>
        <textarea
          id="temuan_pemeriksaan"
          name="answers.temuan_pemeriksaan"
          defaultValue={str("temuan_pemeriksaan")}
          rows={3}
          required
          placeholder="Tuliskan hasil pengujian dan contoh perhitunganmu..."
          className={textArea}
        />
      </div>

      {adaTidakSesuai && (
        <div className="flex flex-col gap-2">
          <label htmlFor="uji_perbaikan" className="text-sm font-bold text-[#111827]">
            Periksa dan Perbaiki
          </label>
          <p className="m-0 text-sm text-[#374151]">
            Ada hasil yang kamu tandai belum sesuai. Bagian mana yang belum sesuai? Periksa kembali data dan
            perhitunganmu, kemudian jelaskan penyebab serta hasil perbaikannya!
          </p>
          <textarea
            id="uji_perbaikan"
            name="answers.uji_perbaikan"
            defaultValue={str("uji_perbaikan")}
            rows={4}
            required
            placeholder="Tuliskan bagian yang diperbaiki, alasan, dan hasil perbaikannya..."
            className={textArea}
          />
        </div>
      )}
    </div>
  );
}
