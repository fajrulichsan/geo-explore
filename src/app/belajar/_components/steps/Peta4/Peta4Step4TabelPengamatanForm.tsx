"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const baris = [
  { key: "bentuk_sisi", label: "Bentuk sisi", type: "text" as const },
  { key: "susunan_sisi", label: "Susunan sisi", type: "text" as const },
  { key: "pasangan_bidang", label: "Pasangan bidang sejajar", type: "text" as const },
  { key: "bentuk_alas", label: "Bentuk alas", type: "text" as const },
  { key: "jumlah_sisi", label: "Jumlah sisi", type: "number" as const },
  { key: "jumlah_rusuk", label: "Jumlah rusuk", type: "number" as const },
  { key: "jumlah_titik_sudut", label: "Jumlah titik sudut", type: "number" as const },
  { key: "catatan_lain", label: "Catatan lain", type: "textarea" as const },
];

type Pengamatan = {
  model_diamati: string;
  foto_bukti: string;
} & Record<(typeof baris)[number]["key"], string>;

function emptyDraft(): Pengamatan {
  return {
    model_diamati: "",
    foto_bukti: "",
    bentuk_sisi: "",
    susunan_sisi: "",
    pasangan_bidang: "",
    bentuk_alas: "",
    jumlah_sisi: "",
    jumlah_rusuk: "",
    jumlah_titik_sudut: "",
    catatan_lain: "",
  };
}

export default function Peta4Step4TabelPengamatanForm({
  materi,
  peta,
  initialAnswers,
  header,
}: {
  materi: string;
  peta: string;
  initialAnswers: Record<string, unknown>;
  header: ReactNode;
}) {
  const initialEntries = (() => {
    const raw = initialAnswers.pengamatan_bangun;
    if (typeof raw !== "string" || !raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Pengamatan[]) : [];
    } catch {
      return [];
    }
  })();

  const [entries, setEntries] = useState<Pengamatan[]>(initialEntries);
  const [draft, setDraft] = useState<Pengamatan>(emptyDraft());
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function setDraftField(key: keyof Pengamatan, value: string) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function notifyFormChanged() {
    formRef.current?.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function handleTambah() {
    if (!draft.model_diamati) {
      setError("Pilih bangun ruang yang sedang diamati terlebih dahulu.");
      return;
    }
    const hasIsian = baris.some((b) => draft[b.key]);
    if (!hasIsian && !draft.foto_bukti) {
      setError("Isi minimal satu hasil pengamatan sebelum menambahkan ke daftar.");
      return;
    }
    setError(null);
    setEntries((prev) => [...prev, draft]);
    setDraft(emptyDraft());
    setTimeout(notifyFormChanged, 0);
  }

  function handleHapus(index: number) {
    setEntries((prev) => prev.filter((_, i) => i !== index));
    setTimeout(notifyFormChanged, 0);
  }

  return (
    <form ref={formRef} action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />
      <input
        type="hidden"
        name="answers.pengamatan_bangun"
        value={entries.length > 0 ? JSON.stringify(entries) : ""}
        required
        onChange={() => {}}
      />

      <div className="flex flex-col gap-4">
        {header}
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengeksplorasi dengan GeoGebra 3D</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tabel Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Catat informasi yang kamu peroleh dari pengamatan menggunakan GeoGebra 3D ke dalam tabel di
          bawah ini, lalu tambahkan ke daftar. Ulangi untuk setiap bangun ruang yang kamu amati.
        </p>
      </div>

      <div className="flex justify-end">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-xs font-semibold text-[#6B7280]">Model yang sedang diamati:</span>
          <select
            value={draft.model_diamati}
            onChange={(e) => setDraftField("model_diamati", e.target.value)}
            className="bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3 border-none focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Pilih Bangun
            </option>
            <option>Kubus</option>
            <option>Balok</option>
            <option>Prisma Segitiga</option>
            <option>Limas Segiempat</option>
            <option>Limas Segitiga</option>
          </select>
        </div>
      </div>

      <div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#2563EB] text-white text-sm font-bold px-5 py-3 w-2/5">
                    Yang Diamati
                  </th>
                  <th className="bg-[#2563EB] text-white text-sm font-bold px-5 py-3 border-l border-white/20">
                    Hasil Pengamatan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {baris.map((b) => (
                  <tr key={b.key} className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-5 py-3 text-sm font-semibold text-[#2563EB] align-top">
                      {b.label}
                    </td>
                    <td className="px-5 py-3">
                      {b.type === "textarea" ? (
                        <textarea
                          value={draft[b.key]}
                          onChange={(e) => setDraftField(b.key, e.target.value)}
                          rows={2}
                          placeholder="Tambahkan catatan tambahan..."
                          className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                        />
                      ) : (
                        <input
                          type={b.type}
                          value={draft[b.key]}
                          onChange={(e) => setDraftField(b.key, e.target.value)}
                          placeholder={b.type === "number" ? "0" : "Ketik di sini..."}
                          className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 pt-6 mx-5 mb-5 border-t border-[#E5E7EB] flex flex-col gap-4">
            <PhotoUpload
              name="foto_bukti_draft"
              label="Unggah foto catatan hasil eksplorasi (opsional)"
              defaultValue={draft.foto_bukti}
              key={entries.length}
            />
            {error && <p className="m-0 text-xs font-semibold text-[#DC2626]">{error}</p>}
            <button
              type="button"
              onClick={() => {
                const fotoInput = formRef.current?.elements.namedItem("foto_bukti_draft") as HTMLInputElement | null;
                if (fotoInput) setDraftField("foto_bukti", fotoInput.value);
                handleTambah();
              }}
              className="self-start flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border-none rounded-full py-2.5 px-5 text-sm font-bold cursor-pointer hover:bg-[#DBEAFE] transition-colors"
            >
              + Tambah ke Daftar
            </button>
          </div>
        </div>
      </div>

      {entries.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="m-0 text-sm font-bold text-[#111827]">
            Bangun Ruang yang Sudah Diamati ({entries.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2 relative"
              >
                <button
                  type="button"
                  onClick={() => handleHapus(i)}
                  className="absolute top-3 right-3 text-xs font-bold text-[#9CA3AF] hover:text-[#DC2626]"
                >
                  Hapus
                </button>
                <span className="inline-block w-fit bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3">
                  {entry.model_diamati}
                </span>
                <dl className="m-0 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-[#374151]">
                  {baris.map((b) => (
                    <div key={b.key} className="contents">
                      <dt className="text-[#9CA3AF]">{b.label}</dt>
                      <dd className="m-0 font-semibold truncate">{entry[b.key] || "-"}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
