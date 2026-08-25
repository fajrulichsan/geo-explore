"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction, type FormState } from "@/app/actions";

const initialState: FormState = {};

export default function RegistrasiPage() {
  const [state, formAction, pending] = useActionState(registerAction, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fb] bg-[radial-gradient(circle_at_100%_0%,rgba(219,225,255,0.4)_0%,transparent_50%),radial-gradient(circle_at_0%_100%,rgba(255,223,158,0.2)_0%,transparent_50%)] relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#00338a]/5 rounded-b-[100px] -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b3c5ff]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#00338a] z-0 flex items-center px-8">
        <div className="flex items-center gap-3 text-white max-w-[1200px] mx-auto w-full">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            menu_book
          </span>
          <span className="text-sm font-semibold tracking-wider">
            E-MODULE GEOMETRI • BANGUN RUANG SISI DATAR
          </span>
        </div>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 mb-20">
        {/* Left Side: Welcome & Illustration */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3 bg-[#dbe1ff] px-4 py-2 rounded-full w-max">
              <div className="bg-[#00338a] text-white w-8 h-8 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  person
                </span>
              </div>
              <span className="text-sm font-semibold text-[#00338a]">Identitas Siswa</span>
            </div>
            <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight text-[#00338a]">
              Selamat Datang! <span className="text-[#fabd00]">✨</span>
            </h1>
            <p className="text-lg text-[#434653] max-w-md leading-relaxed">
              Lengkapi identitasmu sebelum memulai petualangan belajar geometri.
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
                Identitas yang kamu masukkan akan digunakan untuk menghubungkan aktivitas dan
                hasil belajarmu pada e-module ini.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,51,138,0.12)] mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Elementary students exploring geometry shapes"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4G22tH-HKc0AuTvv_cWXe3jJwu89BEnsQ1Xsg7U6y-b2_8vlERTQ8hp28bKq_VhYR9Add1wC_Bm9aq2CycQR3HGMDWwkuSmSX-t7OqlBWDa7nEUpwwLaw8gyjKnnW15MmT2xfkCL8mvZ8EmLZQ7t6_lcyPOMcnPZGclFrcCYnepPgL20WdngfxD5mU-AbHkzzjvpkdovGNrbR5LLnuUPgioezfLJht6I70sRNdRG5gXVjPS17wuA8Sw"
            />
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="order-1 lg:order-2">
          <div className="bg-white rounded-[32px] shadow-[0_8px_30px_-4px_rgba(0,51,138,0.12)] p-8 md:p-10 border border-[#e0e3e5] relative mt-8 lg:mt-0">
            <form action={formAction} className="flex flex-col gap-6">
              <Field
                label="Nama Lengkap"
                name="nama_lengkap"
                icon="person"
                placeholder="Tuliskan nama lengkapmu"
                defaultValue={state.values?.nama_lengkap}
              />
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
                placeholder="Buat password"
              />
              <Field
                label="Konfirmasi Password"
                name="confirm_password"
                type="password"
                icon="lock"
                placeholder="Ulangi password"
              />
              <Field
                label="Kelas"
                name="kelas"
                icon="group"
                placeholder="Contoh: VIII-A"
                defaultValue={state.values?.kelas}
              />
              <Field
                label="Sekolah"
                name="nama_sekolah"
                icon="school"
                placeholder="Tuliskan nama sekolahmu"
                defaultValue={state.values?.nama_sekolah}
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
                {pending ? "MENYIMPAN..." : "SIMPAN & LANJUTKAN"}
              </button>

              <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <p className="text-xs text-[#434653] text-center">
                  Data identitasmu hanya digunakan untuk keperluan pembelajaran.
                </p>
              </div>

              <p className="text-center text-sm text-[#434653]">
                Sudah punya akun?{" "}
                <Link href="/login" className="text-[#00338a] font-semibold">
                  Masuk di sini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
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
