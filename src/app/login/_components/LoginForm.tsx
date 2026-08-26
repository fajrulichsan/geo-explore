"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction, type FormState } from "@/app/actions";

const initialState: FormState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="bg-white rounded-[32px] shadow-[0_8px_30px_-4px_rgba(0,51,138,0.12)] p-6 sm:p-8 md:p-10 border border-[#e0e3e5] relative">
      <form action={formAction} className="flex flex-col gap-6">
        <Field
          label="Email"
          name="email"
          type="email"
          icon="mail"
          placeholder="nama@email.com"
          defaultValue={state.values?.email}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          icon="lock"
          placeholder="Masukkan password"
        />

        {state.error && (
          <p className="text-sm font-medium text-[#ba1a1a] bg-[#ffdad6] border border-[#ba1a1a]/20 rounded-xl px-4 py-3">
            {state.error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={pending}
          className="w-full mt-4 bg-[#00338a] hover:bg-[#0048ba] disabled:opacity-60 text-white py-4 px-6 rounded-full text-sm font-semibold flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {pending ? "MEMPROSES..." : "MASUK"}
        </button>

        <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <p className="text-xs text-[#434653] text-center">
            Data akunmu hanya digunakan untuk keperluan pembelajaran.
          </p>
        </div>

        <p className="text-center text-sm text-[#434653]">
          Belum punya akun?{" "}
          <Link href="/registrasi" className="text-[#00338a] font-semibold">
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  icon,
  type = "text",
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  icon: string;
  type?: string;
  placeholder: string;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-[#191c1e] flex gap-1">
        {label} <span className="text-[#ba1a1a]">*</span>
      </label>
      <div className="relative form-input-focus border border-[#c3c6d6] rounded-xl bg-[#f7f9fb] transition-all duration-200">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-[#737685]">{icon}</span>
        </div>
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="w-full pl-12 pr-4 py-3 bg-transparent border-none rounded-xl text-[#191c1e] focus:ring-0 focus:outline-none placeholder:text-[#c3c6d6]"
        />
      </div>
    </div>
  );
}
