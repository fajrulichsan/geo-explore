"use client";

import { useRef, useState, type ReactNode } from "react";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import BackLink from "@/app/belajar/_components/BackLink";
import NextStepButton from "@/app/belajar/_components/NextStepButton";

const baris = [
  { key: "bentuk_sisi", label: "Bentuk sisi" },
  { key: "susunan_sisi", label: "Susunan sisi" },
  { key: "pasangan_bidang", label: "Pasangan bidang sejajar" },
  { key: "bentuk_alas", label: "Bentuk alas" },
  { key: "jumlah_sisi", label: "Jumlah sisi" },
  { key: "jumlah_rusuk", label: "Jumlah rusuk" },
  { key: "jumlah_titik_sudut", label: "Jumlah titik sudut" },
  { key: "catatan_lain", label: "Catatan lain" },
] as const;

const MODEL = ["Kubus", "Balok", "Prisma Segitiga", "Limas Segiempat", "Limas Segitiga"];

type Isian = Record<(typeof baris)[number]["key"], string>;

type Perbandingan = {
  model: string;
  foto_bukti: string;
  kelompokmu: Isian;
  lain1: Isian;
  lain2: Isian;
};

const emptyIsian = (): Isian => ({
  bentuk_sisi: "",
  susunan_sisi: "",
  pasangan_bidang: "",
  bentuk_alas: "",
  jumlah_sisi: "",
  jumlah_rusuk: "",
  jumlah_titik_sudut: "",
  catatan_lain: "",
});

type Draft = { model: string; foto_bukti: string; lain1: Isian; lain2: Isian };

const emptyDraft = (): Draft => ({ model: "", foto_bukti: "", lain1: emptyIsian(), lain2: emptyIsian() });

export default function Peta5Step5BandingkanHasilKelompokForm({
  materi,
  peta,
  initialAnswers,
  dataKelompokmu,
  header,
  ingat,
}: {
  materi: string;
  peta: string;
  initialAnswers: Record<string, unknown>;
  dataKelompokmu: Record<string, Isian>;
  header: ReactNode;
  ingat: ReactNode;
}) {
  const getValue = (key: string) => (typeof initialAnswers[key] === "string" ? (initialAnswers[key] as string) : "");

  const [entries, setEntries] = useState<Perbandingan[]>(() => {
    const raw = getValue("f_perbandingan");
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Perbandingan[]) : [];
    } catch {
      return [];
    }
  });
  const [draft, setDraft] = useState<Draft>(emptyDraft());
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const kelompokmu = dataKelompokmu[draft.model] ?? emptyIsian();

  function setLain(kolom: "lain1" | "lain2", key: keyof Isian, value: string) {
    setDraft((d) => ({ ...d, [kolom]: { ...d[kolom], [key]: value } }));
  }

  function notifyFormChanged() {
    formRef.current?.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function handleTambah(foto: string) {
    if (!draft.model) {
      setError("Pilih bangun ruang yang sudah diamati terlebih dahulu.");
      return;
    }
    const hasIsian = baris.some((b) => draft.lain1[b.key] || draft.lain2[b.key]);
    if (!hasIsian) {
      setError("Isi hasil pengamatan Kelompok Lain 1 atau Kelompok Lain 2 sebelum menambahkan ke daftar.");
      return;
    }
    setError(null);
    setEntries((prev) => [...prev, { ...draft, foto_bukti: foto, kelompokmu }]);
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
      <input type="hidden" name="step" value="5" />
      <input
        type="hidden"
        name="answers.f_perbandingan"
        value={entries.length > 0 ? JSON.stringify(entries) : ""}
        required
        onChange={() => {}}
      />

      {header}
      {ingat}

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatan Kelompokmu
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Bandingkan data hasil pengamatan kelompokmu dengan dua kelompok lain. Pilih bangun ruang, data kelompokmu
          akan muncul otomatis. Isi hasil pengamatan Kelompok Lain 1 dan Kelompok Lain 2, lalu tambahkan ke daftar.
        </p>

        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="text-xs font-semibold text-[#6B7280]">Model yang sudah diamati:</span>
            <select
              value={draft.model}
              onChange={(e) => setDraft((d) => ({ ...d, model: e.target.value }))}
              className="bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3 border-none focus:outline-none cursor-pointer"
            >
              <option value="" disabled>
                Pilih Bangun
              </option>
              {MODEL.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left text-sm font-bold py-3 px-4">Hasil Pengamatan</th>
                <th className="text-sm font-bold py-3 px-2 bg-[#15803D]">Kelompokmu</th>
                <th className="text-sm font-bold py-3 px-2 bg-[#1D4ED8]">Kelompok Lain 1</th>
                <th className="text-sm font-bold py-3 px-2 bg-[#6D28D9]">Kelompok Lain 2</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((b) => (
                <tr key={b.key} className="border-t border-[#E5E7EB]">
                  <th scope="row" className="text-left text-[13px] font-bold text-[#1E3A8A] py-2.5 px-4">
                    {b.label}
                  </th>
                  <td className="py-2 px-2">
                    <div className="min-h-9 w-full bg-[#F3F4F6] rounded-xl flex items-center px-3 py-1.5 text-xs font-medium text-[#374151]">
                      {kelompokmu[b.key] || (
                        <span className="italic text-[#9CA3AF]">
                          {draft.model ? "Belum ada data" : "Pilih bangun ruang..."}
                        </span>
                      )}
                    </div>
                  </td>
                  {(["lain1", "lain2"] as const).map((kolom) => (
                    <td key={kolom} className="py-2 px-2">
                      <input
                        type="text"
                        value={draft[kolom][b.key]}
                        onChange={(e) => setLain(kolom, b.key, e.target.value)}
                        aria-label={`${b.label} ${kolom === "lain1" ? "Kelompok Lain 1" : "Kelompok Lain 2"}`}
                        placeholder="..."
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2 mx-5 mb-5 pt-6 border-t border-[#E5E7EB] flex flex-col gap-4">
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
                handleTambah(fotoInput?.value ?? "");
              }}
              className="self-start flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border-none rounded-full py-2.5 px-5 text-sm font-bold cursor-pointer hover:bg-[#DBEAFE] transition-colors"
            >
              + Tambah ke Daftar
            </button>
          </div>
        </div>

        {entries.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="m-0 text-sm font-bold text-[#111827]">Bangun Ruang yang Sudah Dibandingkan ({entries.length})</h3>
            <div className="grid grid-cols-1 gap-4">
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
                    {entry.model}
                  </span>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[480px] border-collapse text-xs text-[#374151]">
                      <thead>
                        <tr className="text-left text-[#6B7280]">
                          <th className="py-1.5 pr-3 font-semibold">Hasil Pengamatan</th>
                          <th className="py-1.5 pr-3 font-semibold">Kelompokmu</th>
                          <th className="py-1.5 pr-3 font-semibold">Kelompok Lain 1</th>
                          <th className="py-1.5 font-semibold">Kelompok Lain 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {baris.map((b) => (
                          <tr key={b.key} className="border-t border-[#F3F4F6]">
                            <th scope="row" className="py-1.5 pr-3 text-left font-semibold text-[#9CA3AF]">
                              {b.label}
                            </th>
                            <td className="py-1.5 pr-3 font-semibold">{entry.kelompokmu[b.key] || "-"}</td>
                            <td className="py-1.5 pr-3 font-semibold">{entry.lain1[b.key] || "-"}</td>
                            <td className="py-1.5 font-semibold">{entry.lain2[b.key] || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Catatan / Hasil Perbandingan</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="f_persamaan" className="text-sm font-bold text-[#111827] cursor-pointer">
              Apa persamaan hasil pengamatan kalian?
            </label>
            <textarea
              id="f_persamaan"
              name="answers.f_persamaan"
              defaultValue={getValue("f_persamaan")}
              rows={4}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="f_perbedaan" className="text-sm font-bold text-[#111827] cursor-pointer">
              Apa perbedaannya?
            </label>
            <textarea
              id="f_perbedaan"
              name="answers.f_perbedaan"
              defaultValue={getValue("f_perbedaan")}
              rows={4}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
