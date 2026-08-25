"use client";

import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginAction, type FormState } from "@/app/actions";
import Footer from "@/app/_components/Footer";

const initialState: FormState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] bg-[radial-gradient(circle_at_100%_0%,rgba(219,225,255,0.4)_0%,transparent_50%),radial-gradient(circle_at_0%_100%,rgba(255,223,158,0.2)_0%,transparent_50%)] relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#00338a]/5 rounded-b-[100px] -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b3c5ff]/20 rounded-full blur-3xl -z-10" />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 px-4 sm:px-6 py-10 md:py-16">
        {/* Left Side: Welcome & Illustration */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold leading-tight text-[#00338a]">
              Selamat Datang Kembali! <span className="text-[#fabd00]">✨</span>
            </h1>
            <p className="text-base md:text-lg text-[#434653] max-w-md leading-relaxed">
              Masuk untuk melanjutkan petualangan belajar geometrimu.
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,51,138,0.06)] border border-[#dbe1ff]/50 flex gap-4 items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00338a]" />
            <div className="bg-[#0048ba] text-[#afc2ff] p-3 rounded-xl shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </div>
            <div>
              <p className="text-base text-[#191c1e]">
                Masuk dengan akun yang sudah kamu daftarkan untuk melanjutkan aktivitas
                belajarmu pada e-module ini.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,51,138,0.12)] mt-4">
            <Image
              src="https://is3.cloudhost.id/assets-geo/home-1.webp"
              alt="Belajar bersama, eksplorasi bangun ruang"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div>
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
        </div>
      </main>

      <Footer />
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
