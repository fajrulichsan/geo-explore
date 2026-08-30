"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadPageImage } from "@/app/belajar/upload-actions";
import type { PageImageKey } from "@/lib/pageImages";

type EditablePageImageProps = {
  imageKey: PageImageKey;
  materi: string;
  peta: string;
  step: string;
  urutan: string;
  src: string;
  alt: string;
  editable?: boolean;
  imageClassName?: string;
  containerClassName: string;
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function EditablePageImage({
  imageKey,
  materi,
  peta,
  step,
  urutan,
  src,
  alt,
  editable,
  imageClassName = "object-cover",
  containerClassName,
}: EditablePageImageProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const base64Data = await fileToBase64(file);
      await uploadPageImage(materi, peta, step, urutan, file.name, file.type, base64Data, imageKey);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengunggah foto");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className={containerClassName}>
      <Image src={src} alt={alt} fill className={imageClassName} />

      {editable && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="bg-white text-[#111827] text-xs font-bold rounded-full py-2 px-4 shadow-sm disabled:opacity-60"
          >
            {uploading ? "Mengunggah..." : "Upload Foto"}
          </button>
          {error && (
            <p className="m-0 text-xs font-semibold text-red-100 bg-red-600/80 rounded px-2 py-1">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
