"use client";

import { useState } from "react";

type FollowUp = { label: string; field: string; placeholder: string; rows?: number };

export default function RadioFollowUp({
  name,
  options,
  followUps,
  defaultValue,
  defaultFollowUps,
  textareaClassName,
}: {
  name: string;
  options: { value: string; label: string }[];
  followUps: Record<string, FollowUp>;
  defaultValue: string;
  defaultFollowUps: Record<string, string>;
  textareaClassName: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const active = followUps[value];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        {options.map((o) => (
          <label key={o.value} className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer">
            <input
              type="radio"
              name={`answers.${name}`}
              value={o.value}
              checked={value === o.value}
              onChange={() => setValue(o.value)}
              required
              className="accent-[#2563EB]"
            />
            {o.label}
          </label>
        ))}
      </div>
      {active && (
        <div className="flex flex-col gap-2 pl-2">
          <label htmlFor={active.field} className="text-sm font-bold text-[#111827]">
            {active.label}
          </label>
          <textarea
            key={active.field}
            id={active.field}
            name={`answers.${active.field}`}
            defaultValue={defaultFollowUps[active.field] ?? ""}
            rows={active.rows ?? 3}
            required
            placeholder={active.placeholder}
            className={textareaClassName}
          />
        </div>
      )}
    </div>
  );
}
