"use client";

import { useState } from "react";

const OPSI = ["Ya", "Tidak, ada perbedaan"];

const textareaCls =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y disabled:opacity-60";

export default function Materi6Peta3DugaanSamaFields({
  dugaanSama,
  penyebabBeda,
  dugaanDipilih,
}: {
  dugaanSama: string;
  penyebabBeda: string;
  dugaanDipilih: string;
}) {
  const [sama, setSama] = useState(dugaanSama);
  const berbeda = sama !== "" && sama !== "Ya";

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-[#111827]">Apakah semua anggota kelompok memiliki dugaan yang sama?</span>
        <div className="flex flex-wrap gap-3">
          {OPSI.map((opsi) => (
            <label key={opsi} className="cursor-pointer">
              <input
                type="radio"
                name="answers.dugaan_sama"
                value={opsi}
                checked={sama === opsi}
                onChange={() => setSama(opsi)}
                required
                className="peer sr-only"
              />
              <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-2 text-sm font-semibold text-[#374151] peer-checked:bg-[#2563EB] peer-checked:text-white peer-checked:border-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#93C5FD]">
                {opsi}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#111827] leading-[1.5]">Jika berbeda, apa yang menyebabkan perbedaan tersebut?</label>
        <textarea
          name="answers.penyebab_beda"
          defaultValue={penyebabBeda}
          rows={3}
          placeholder={berbeda ? "Ketik jawabanmu di sini..." : "Tidak perlu diisi jika dugaan kelompokmu sama"}
          required={berbeda}
          disabled={!berbeda}
          className={textareaCls}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#111827] leading-[1.5]">
          Dari berbagai dugaan yang muncul, dugaan mana yang akan dipilih kelompokmu untuk diuji pada Tahap 3 melalui
          eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR)? Jelaskan alasan pemilihannya.
        </label>
        <textarea
          name="answers.dugaan_dipilih"
          defaultValue={dugaanDipilih}
          rows={4}
          placeholder="Ketik jawabanmu di sini..."
          required={berbeda}
          className={textareaCls}
        />
      </div>
    </>
  );
}
