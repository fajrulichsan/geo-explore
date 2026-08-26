"use client";

import { useState } from "react";
import Link from "next/link";

type QrToolCardProps = {
  icon: string;
  title: string;
  description: string;
  qrImage: string;
  webHref: string;
};

export default function QrToolCard({ icon, title, description, qrImage, webHref }: QrToolCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group text-left w-full"
      >
        <div className="w-12 h-12 rounded-lg bg-surface text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        </div>
        <span className="material-symbols-outlined ml-auto text-slate-300 group-hover:text-primary transition-colors">
          chevron_right
        </span>
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
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
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
                className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm text-center"
              >
                Buka via link web
              </Link>
            ) : (
              <a
                href={webHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm text-center"
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
