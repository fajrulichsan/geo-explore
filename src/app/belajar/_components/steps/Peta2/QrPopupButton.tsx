"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type QrPopupButtonProps = {
  title: string;
  accent: string;
  qrImage: string;
  webHref: string;
  label: string;
  className?: string;
  children?: ReactNode;
};

export default function QrPopupButton({ title, accent, qrImage, webHref, label, className, children }: QrPopupButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        style={children ? undefined : { background: accent }}
      >
        {children ?? label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-sm flex flex-col items-center gap-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <button type="button" onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-700">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="text-sm text-slate-500 text-center">
              Pindai QR di bawah ini dengan kamera HP-mu untuk membuka {title}.
            </p>

            <img
              src={qrImage}
              alt={`QR code ${title}`}
              className="w-48 h-48 object-contain border border-slate-200 rounded-lg p-2"
            />

            {webHref.startsWith("/") ? (
              <Link
                href={webHref}
                className="w-full text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm text-center"
                style={{ background: accent }}
              >
                Buka via link web
              </Link>
            ) : (
              <a
                href={webHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm text-center"
                style={{ background: accent }}
              >
                Buka via link web
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
