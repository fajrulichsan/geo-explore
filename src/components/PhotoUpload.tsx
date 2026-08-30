"use client";

import { useEffect, useRef, useState } from "react";
import { uploadFile } from "@/app/belajar/upload-actions";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PhotoUpload({
  name,
  label,
  defaultValue,
  materi,
  peta,
}: {
  name: string;
  label?: string;
  defaultValue?: string;
  materi?: string;
  peta?: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Kalau foto bukti sudah diunggah, field lain di step ini tidak wajib diisi lagi.
  useEffect(() => {
    const form = containerRef.current?.closest("form");
    if (!form) return;

    if (url) {
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]").forEach((field) => {
        field.dataset.wasRequired = "1";
        field.required = false;
      });
    } else {
      form
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-was-required]")
        .forEach((field) => {
          field.required = true;
          delete field.dataset.wasRequired;
        });
    }
  }, [url]);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setStatus("uploading");
    try {
      const base64Data = await fileToBase64(file);
      const publicUrl = await uploadFile(
        file.name,
        file.type,
        base64Data,
        materi && peta ? { materi, peta } : undefined
      );
      setUrl(publicUrl);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
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
