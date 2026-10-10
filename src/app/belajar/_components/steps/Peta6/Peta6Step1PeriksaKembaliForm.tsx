"use client";

import { useRef, useState, type ReactNode } from "react";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import BackLink from "@/app/belajar/_components/BackLink";
import NextStepButton from "@/app/belajar/_components/NextStepButton";

const verifikasi = [
  { key: "bentuk_sisi", aspek: "Bentuk sisi" },
  { key: "susunan_sisi", aspek: "Susunan sisi" },
  { key: "pasangan_sisi", aspek: "Pasangan bidang sejajar" },
  { key: "sisi_alas", aspek: "Bentuk alas" },
  { key: "jumlah_sisi", aspek: "Jumlah sisi" },
  { key: "jumlah_rusuk", aspek: "Jumlah rusuk" },
  { key: "jumlah_titik_sudut", aspek: "Jumlah titik sudut" },
] as const;

const MODEL = ["Kubus", "Balok", "Prisma Segitiga", "Limas Segiempat", "Limas Segitiga"];

type Baris = { bukti: string; sesuai: "" | "ya" | "belum"; perbaikan: string };
type Verifikasi = { model: string; foto_bukti: string; baris: Record<(typeof verifikasi)[number]["key"], Baris> };

const emptyBaris = (): Verifikasi["baris"] => ({
  bentuk_sisi: { bukti: "", sesuai: "", perbaikan: "" },
  susunan_sisi: { bukti: "", sesuai: "", perbaikan: "" },
  pasangan_sisi: { bukti: "", sesuai: "", perbaikan: "" },
  sisi_alas: { bukti: "", sesuai: "", perbaikan: "" },
  jumlah_sisi: { bukti: "", sesuai: "", perbaikan: "" },
  jumlah_rusuk: { bukti: "", sesuai: "", perbaikan: "" },
  jumlah_titik_sudut: { bukti: "", sesuai: "", perbaikan: "" },
});

const emptyDraft = (): Verifikasi => ({ model: "", foto_bukti: "", baris: emptyBaris() });

export default function Peta6Step1PeriksaKembaliForm({
  materi,
  peta,
  initialAnswers,
  header,
  ingat,
}: {
  materi: string;
  peta: string;
  initialAnswers: Record<string, unknown>;
  header: ReactNode;
  ingat: ReactNode;
}) {
  const [entries, setEntries] = useState<Verifikasi[]>(() => {
    const raw = initialAnswers.verifikasi_bangun;
    if (typeof raw !== "string" || !raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Verifikasi[]) : [];
    } catch {
      return [];
    }
  });
  const [draft, setDraft] = useState<Verifikasi>(emptyDraft());
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fotoDefault = typeof initialAnswers.foto_bukti === "string" ? initialAnswers.foto_bukti : "";

  function setBaris(key: keyof Verifikasi["baris"], patch: Partial<Baris>) {
    setDraft((d) => ({ ...d, baris: { ...d.baris, [key]: { ...d.baris[key], ...patch } } }));
  }

  function notifyFormChanged() {
    formRef.current?.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function handleTambah(foto: string) {
    if (!draft.model) {
      setError("Pilih bangun ruang yang ingin diverifikasi terlebih dahulu.");
      return;
    }
    const lengkap = verifikasi.every((v) => draft.baris[v.key].bukti && draft.baris[v.key].sesuai);
    if (!lengkap) {
      setError("Isi bukti dan pilihan \"Sudah sesuai?\" untuk setiap aspek sebelum menambahkan ke daftar.");
      return;
    }
    setError(null);
    setEntries((prev) => [...prev, { ...draft, foto_bukti: foto }]);
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
      <input type="hidden" name="step" value="1" />
      <input
        type="hidden"
        name="answers.verifikasi_bangun"
        value={entries.length > 0 ? JSON.stringify(entries) : ""}
        required
        onChange={() => {}}
      />

      {header}
      {ingat}

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Periksa Kembali Hasil Pengolahanmu
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="m-0 text-sm leading-[1.6] text-[#374151] max-w-2xl">
          Buka kembali hasil Tahap 3 dan hasil pengolahan Tahap 4 (pola dan klasifikasimu). Pilih bangun ruang yang
          ingin diverifikasi, periksa setiap aspek, lalu tambahkan ke daftar. Ulangi untuk bangun ruang lainnya.
        </p>

        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="text-xs font-semibold text-[#6B7280]">Model yang ingin diverifikasi:</span>
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

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-5 flex items-center gap-3">
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Tabel Verifikasi</h2>
          </div>
          <p className="m-0 px-5 pt-4 text-xs text-[#6B7280]">
            Periksa kembali setiap aspek berikut berdasarkan data yang kamu miliki.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Aspek / Hasil yang Diperiksa</th>
                  <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Bukti dari Data</th>
                  <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/6 text-center">Sudah Sesuai?</th>
                  <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/3">Jika Belum, Apa yang Diperbaiki?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {verifikasi.map((v) => (
                  <tr key={v.key}>
                    <td className="py-3 px-4 align-top text-sm font-semibold text-[#111827]">{v.aspek}</td>
                    <td className="py-3 px-4 align-top">
                      <input
                        type="text"
                        value={draft.baris[v.key].bukti}
                        onChange={(e) => setBaris(v.key, { bukti: e.target.value })}
                        placeholder="Tulis bukti..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none"
                      />
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="flex flex-row gap-3 items-center justify-center">
                        {(["ya", "belum"] as const).map((pilihan) => (
                          <label key={pilihan} className="inline-flex items-center gap-1.5 text-xs text-[#374151]">
                            <input
                              type="radio"
                              checked={draft.baris[v.key].sesuai === pilihan}
                              onChange={() => setBaris(v.key, { sesuai: pilihan })}
                              className="w-4 h-4"
                            />
                            {pilihan === "ya" ? "Ya" : "Belum"}
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <textarea
                        rows={2}
                        value={draft.baris[v.key].perbaikan}
                        onChange={(e) => setBaris(v.key, { perbaikan: e.target.value })}
                        placeholder="Catatan perbaikan..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 mx-5 mb-5 pt-6 border-t border-[#E5E7EB] flex flex-col gap-4">
            <PhotoUpload
              name="foto_bukti_draft"
              label="Unggah foto hasil verifikasi (opsional)"
              defaultValue={draft.foto_bukti || fotoDefault}
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
            <h3 className="m-0 text-sm font-bold text-[#111827]">Bangun Ruang yang Sudah Diverifikasi ({entries.length})</h3>
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
                        <th className="py-1.5 pr-3 font-semibold">Aspek</th>
                        <th className="py-1.5 pr-3 font-semibold">Bukti dari Data</th>
                        <th className="py-1.5 pr-3 font-semibold">Sudah Sesuai?</th>
                        <th className="py-1.5 font-semibold">Jika Belum, Apa yang Diperbaiki?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {verifikasi.map((v) => (
                        <tr key={v.key} className="border-t border-[#F3F4F6]">
                          <th scope="row" className="py-1.5 pr-3 text-left font-semibold text-[#9CA3AF]">
                            {v.aspek}
                          </th>
                          <td className="py-1.5 pr-3 font-semibold">{entry.baris[v.key].bukti || "-"}</td>
                          <td className="py-1.5 pr-3 font-semibold">
                            {entry.baris[v.key].sesuai === "ya" ? "Ya" : entry.baris[v.key].sesuai === "belum" ? "Belum" : "-"}
                          </td>
                          <td className="py-1.5 font-semibold">{entry.baris[v.key].perbaikan || "-"}</td>
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

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/4/8`} />
        <NextStepButton />
      </div>
    </form>
  );
}
