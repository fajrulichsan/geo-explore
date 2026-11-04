"use client";

import { useEffect, useRef, useState } from "react";
import { uploadFile } from "@/app/belajar/upload-actions";
import { MAX_UPLOAD_BYTES, MAX_UPLOAD_MESSAGE } from "@/lib/uploadLimits";

const CANVAS_W = 640;
const CANVAS_H = 360;

type Status = "idle" | "uploading" | "error" | "toolarge";

export default function GambarJawaban({
  name,
  materi,
  peta,
  defaultValue,
  variant = "buttons",
  label,
}: {
  name: string;
  materi: string;
  peta: string;
  defaultValue?: string;
  variant?: "buttons" | "area";
  label?: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [status, setStatus] = useState<Status>("idle");
  const [drawing, setDrawing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);

  async function send(file: File) {
    if (file.size > MAX_UPLOAD_BYTES) {
      setStatus("toolarge");
      return;
    }
    setStatus("uploading");
    try {
      setUrl(await uploadFile(file, { materi, peta }));
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    if (!drawing) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.strokeStyle = "#1E3A8A";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
  }, [drawing]);

  function point(e: React.PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current!;
    const r = c.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * CANVAS_W, y: ((e.clientY - r.top) / r.height) * CANVAS_H };
  }

  function onDown(e: React.PointerEvent<HTMLCanvasElement>) {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const p = point(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function onMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawingRef.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const p = point(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  }

  function clearCanvas() {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
  }

  function saveDrawing() {
    canvasRef.current?.toBlob((blob) => {
      if (!blob) return;
      setDrawing(false);
      void send(new File([blob], "gambar-sendiri.png", { type: "image/png" }));
    }, "image/png");
  }

  const btn =
    "inline-flex items-center gap-1.5 bg-white border border-[#E5E7EB] rounded-lg py-1.5 px-3 text-xs font-semibold text-[#374151] disabled:opacity-60";
  const busy = status === "uploading";

  const buttons = (
    <div className="flex items-center gap-2 flex-wrap">
      <button type="button" className={btn} disabled={busy} onClick={() => fileRef.current?.click()}>
        <i className="fa-regular fa-image" />
        {busy ? "Mengunggah..." : "Unggah Gambar"}
      </button>
      <button type="button" className={btn} disabled={busy} onClick={() => setDrawing(true)}>
        <i className="fa-solid fa-pencil" />
        Gambar Sendiri
      </button>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      <input type="hidden" name={name} value={url} />
      {url ? (
        <div className="flex items-end gap-3 flex-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="Gambar jawabanmu" className="max-h-40 rounded-xl border border-[#E5E7EB] bg-white" />
          <button type="button" onClick={() => setUrl("")} className="text-xs font-semibold text-[#DC2626]">
            Hapus gambar
          </button>
        </div>
      ) : variant === "area" ? (
        <div className="rounded-2xl border border-[#E5E7EB] bg-white min-h-[140px] flex flex-col items-center justify-center gap-3 p-4">
          <i className="fa-regular fa-image text-xl text-[#6B7280]" />
          <span className="text-sm text-[#6B7280]">{label ?? "Area gambar"}</span>
          {buttons}
        </div>
      ) : (
        buttons
      )}
      {status === "toolarge" && <span className="text-xs font-semibold text-[#DC2626]">{MAX_UPLOAD_MESSAGE}</span>}
      {status === "error" && <span className="text-xs font-semibold text-[#DC2626]">Gagal mengunggah, coba lagi.</span>}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          e.target.value = "";
          if (f) void send(f);
        }}
      />

      {drawing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 w-full max-w-[680px] flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Gambar Sendiri</p>
            <canvas
              ref={canvasRef}
              width={CANVAS_W}
              height={CANVAS_H}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={() => {
                isDrawingRef.current = false;
              }}
              className="w-full rounded-xl border border-[#E5E7EB] touch-none cursor-crosshair"
            />
            <div className="flex justify-end gap-2">
              <button type="button" className={btn} onClick={clearCanvas}>
                Hapus
              </button>
              <button type="button" className={btn} onClick={() => setDrawing(false)}>
                Batal
              </button>
              <button
                type="button"
                className="bg-[#2563EB] text-white rounded-lg py-1.5 px-4 text-xs font-bold"
                onClick={saveDrawing}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
