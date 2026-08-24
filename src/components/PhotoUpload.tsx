"use client";

import { useRef, useState } from "react";
import { createUploadUrl } from "@/app/belajar/upload-actions";

export default function PhotoUpload({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label?: string;
  defaultValue?: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setStatus("uploading");
    try {
      const { uploadUrl, publicUrl } = await createUploadUrl(file.name, file.type);
      const res = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!res.ok) throw new Error("Upload gagal");
      setUrl(publicUrl);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {label && <span className="text-sm font-bold text-[#111827]">{label}</span>}
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="relative w-full max-w-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={label ?? "Foto"} className="w-full rounded-xl border border-[#E5E7EB] object-cover" />
          <button
            type="button"
            onClick={() => setUrl("")}
            className="absolute top-2 right-2 bg-white/90 text-[#374151] rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow"
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={status === "uploading"}
            className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-2.5 px-5 text-sm font-semibold text-[#374151] disabled:opacity-60"
          >
            {status === "uploading" ? "Mengunggah..." : "Pilih File"}
          </button>
          <button
            type="button"
            onClick={() => cameraInputRef.current?.click()}
            disabled={status === "uploading"}
            className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-2.5 px-5 text-sm font-semibold text-[#374151] disabled:opacity-60"
          >
            Ambil Foto
          </button>
        </div>
      )}

      {status === "error" && (
        <span className="text-xs font-semibold text-[#DC2626]">Gagal mengunggah, coba lagi.</span>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
