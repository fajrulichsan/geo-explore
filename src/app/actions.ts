"use server";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import {
  clearSessionCookie,
  getSessionUserId,
  setSessionCookie,
} from "@/lib/session";

export type FormState = {
  error?: string;
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

  if (!namaLengkap || !email || !password || !confirmPassword || !kelas || !namaSekolah) {
    return { error: "Semua field wajib diisi." };
  }

  if (password !== confirmPassword) {
    return { error: "Konfirmasi password tidak cocok." };
  }

  const { error } = await supabase.from("users").insert({
    nama_lengkap: namaLengkap,
    email,
    password,
    kelas,
    nama_sekolah: namaSekolah,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "Email sudah terdaftar." };
    }
    return { error: "Gagal mendaftar. Silakan coba lagi." };
  }

  redirect("/login");
}

export async function loginAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  const { data, error } = await supabase
    .from("users")
    .select("id, sudah_baca_petunjuk")
    .eq("email", email)
    .eq("password", password)
    .maybeSingle();

  if (error || !data) {
    return { error: "Email atau password salah." };
  }

  await setSessionCookie(data.id);

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
