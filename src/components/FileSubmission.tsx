"use client";

import { useRef, useState } from "react";
import { uploadFile } from "@/app/belajar/upload-actions";

const ACCEPT = "image/*,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function isImageUrl(url: string) {
  return /\.(png|jpe?g|gif|webp|heic)$/i.test(url);
}

export default function FileSubmission({
  name = "answers.file_hasil_kerja",
  defaultValue,
  materi,
  peta,
  title = "Kirim hasil kegiatanmu",
}: {
  name?: string;
  defaultValue?: string;
  materi: string;
  peta: string;
  title?: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setStatus("uploading");
    try {
      const publicUrl = await uploadFile(file.name, file.type, await fileToBase64(file), { materi, peta });
      setUrl(publicUrl);
      setFileName(file.name);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white border border-dashed border-[#BFD0FF] rounded-[20px] p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <i className="fa-solid fa-cloud-arrow-up text-[#2563EB] text-lg" />
        <span className="text-base font-bold text-[#1E3A8A]">{title}</span>
        <span className="text-xs font-semibold text-[#6B7280]">(opsional)</span>
      </div>
      <p className="m-0 text-sm text-[#4B5563]">
        Kamu dapat mengirim file hasil kerjamu dalam bentuk foto, dokumen Word, atau PDF.
      </p>
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="flex items-center gap-3 flex-wrap">
          {isImageUrl(url) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={url} alt="File terkirim" className="w-32 rounded-xl border border-[#E5E7EB] object-cover" />
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#F3F6FF] border border-[#DBE5FB] rounded-full py-2 px-4 text-sm font-semibold text-[#1E3A8A]"
            >
              <i className="fa-solid fa-file" />
              {fileName || "Lihat file terkirim"}
            </a>
          )}
          <button
            type="button"
            onClick={() => {
              setUrl("");
              setFileName("");
            }}
            className="text-sm font-semibold text-[#DC2626]"
          >
            Hapus
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={status === "uploading"}
            className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-2.5 px-5 text-sm font-semibold text-[#374151] disabled:opacity-60"
          >
            {status === "uploading" ? "Mengunggah..." : "Pilih File (Foto / Word / PDF)"}
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
        accept={ACCEPT}
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
