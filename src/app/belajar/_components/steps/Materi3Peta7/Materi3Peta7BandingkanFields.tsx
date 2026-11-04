"use client";

import { useState } from "react";

const OPSI = [
  { value: "sama", label: "Sama", tanya: "Apa persamaan kesimpulan kedua kelompok? Jelaskan berdasarkan hasil verifikasi!" },
  { value: "hampir_sama", label: "Hampir sama", tanya: "Bagian mana yang sama dan berbeda dari kesimpulan kedua kelompok? Jelaskan alasannya!" },
  { value: "berbeda", label: "Berbeda", tanya: "Apa perbedaan kesimpulan kedua kelompok? Mengapa perbedaan tersebut dapat terjadi?" },
];

const textareaCls =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y";

export default function Materi3Peta7BandingkanFields({
  perbandingan,
  lanjutan,
  perbaikan,
}: {
  perbandingan: string;
  lanjutan: string;
  perbaikan: string;
}) {
  const [pilihan, setPilihan] = useState(perbandingan);
  const terpilih = OPSI.find((o) => o.value === pilihan);

  return (
    <>
      <p className="m-0 text-sm text-[#4B5563]">
        Bandingkan kesimpulan kelompokmu dengan kesimpulan kelompok lain tentang cara menentukan luas permukaan kubus, balok, dan prisma.
      </p>
      <p className="m-0 text-sm font-bold text-[#111827]">
        Bagaimana kesimpulan kelompokmu dibandingkan dengan kesimpulan kelompok lain?
      </p>
      <div className="flex flex-wrap gap-5">
        {OPSI.map((opt) => (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-sm text-[#111827]">
            <input
              type="radio"
              name="answers.perbandingan_kelompok"
              value={opt.value}
              checked={pilihan === opt.value}
              onChange={() => setPilihan(opt.value)}
              required
              className="h-4 w-4 accent-[#7C3AED]"
            />
            {opt.label}
          </label>
        ))}
      </div>
      {terpilih && (
        <div className="flex flex-col gap-2 border-t border-[#E5E7EB] pt-4">
          <label htmlFor="bagian_berbeda" className="text-sm font-bold text-[#111827] leading-[1.6]">
            {terpilih.tanya}
          </label>
          <textarea
            id="bagian_berbeda"
            name="answers.bagian_berbeda"
            defaultValue={lanjutan}
            rows={3}
            required
            placeholder="Tuliskan penjelasan dan alasan matematis kelompokmu..."
            className={textareaCls}
          />
        </div>
      )}
      <div className="flex flex-col gap-2 border-t border-[#E5E7EB] pt-4">
        <label htmlFor="perlu_diperbaiki" className="text-sm font-bold text-[#111827] leading-[1.6]">
          Setelah membandingkan kesimpulan, apakah ada bagian dari kesimpulan kelompokmu yang perlu diperbaiki atau dilengkapi? Jelaskan!
        </label>
        <textarea
          id="perlu_diperbaiki"
          name="answers.perlu_diperbaiki"
          defaultValue={perbaikan}
          rows={3}
          required
          placeholder="Tuliskan bagian yang perlu diperbaiki atau alasan jika tidak ada..."
          className={textareaCls}
        />
      </div>
    </>
  );
}
