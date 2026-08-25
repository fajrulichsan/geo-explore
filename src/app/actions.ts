"use server";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import {
  clearSessionCookie,
  getSessionUserId,
  setSessionCookie,
} from "@/lib/session";
import { hashPassword, verifyPassword } from "@/lib/password";

export type FormState = {
  error?: string;
  values?: Record<string, string>;
};

export async function registerAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const namaLengkap = String(formData.get("nama_lengkap") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirm_password") ?? "");
  const kelas = String(formData.get("kelas") ?? "").trim();
  const namaSekolah = String(formData.get("nama_sekolah") ?? "").trim();

  const values = { nama_lengkap: namaLengkap, email, kelas, nama_sekolah: namaSekolah };

  if (!namaLengkap || !email || !password || !confirmPassword || !kelas || !namaSekolah) {
    return { error: "Semua field wajib diisi.", values };
  }

  if (password !== confirmPassword) {
    return { error: "Konfirmasi password tidak cocok.", values };
  }

  if (password.length < 8) {
    return { error: "Password minimal 8 karakter.", values };
  }

  const { error } = await supabase.from("users").insert({
    nama_lengkap: namaLengkap,
    email,
    password: hashPassword(password),
    kelas,
    nama_sekolah: namaSekolah,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "Email sudah terdaftar.", values };
    }
    return { error: "Gagal mendaftar. Silakan coba lagi.", values };
  }

  redirect("/login");
}

export async function loginAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const values = { email };

  if (!email || !password) {
    return { error: "Email dan password wajib diisi.", values };
  }

  const { data, error } = await supabase
    .from("users")
    .select("id, password, sudah_baca_petunjuk, role")
    .eq("email", email)
    .maybeSingle();

  if (error || !data || !verifyPassword(password, data.password)) {
    return { error: "Email atau password salah.", values };
  }

  await setSessionCookie(data.id);

  if (data.role === "guru") {
    redirect("/dashboard-guru");
  }

  redirect(data.sudah_baca_petunjuk ? "/dashboard" : "/petunjuk-1");
}

export async function logoutAction() {
  await clearSessionCookie();
  redirect("/login");
}

export async function selesaiPetunjukAction() {
  const userId = await getSessionUserId();

  if (!userId) {
    redirect("/login");
  }

  await supabase
    .from("users")
    .update({ sudah_baca_petunjuk: true })
    .eq("id", userId);

  redirect("/dashboard");
}
