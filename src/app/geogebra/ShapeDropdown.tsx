"use client";

import { useEffect, useRef, useState } from "react";
import { SHAPES, type ShapeId } from "./shapes";

export default function ShapeDropdown({
  selected,
  onSelect,
}: {
  selected: ShapeId;
  onSelect: (id: ShapeId) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = SHAPES.find((s) => s.id === selected)?.label ?? "";

  return (
    <div ref={rootRef} className="absolute top-4 left-4 z-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] shadow-md"
      >
        {selectedLabel}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <ul className="mt-1 w-48 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-lg">
          {SHAPES.map((shape) => (
            <li key={shape.id}>
              <button
                type="button"
                onClick={() => {
                  onSelect(shape.id);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-[#F3F4F6] ${
                  shape.id === selected ? "bg-[#F3F4F6] font-semibold" : "text-[#374151]"
                }`}
              >
                {shape.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
