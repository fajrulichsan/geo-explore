import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getSessionUserId } from "@/lib/session";

/** Redirects non-guru users away. Returns the caller's user id when it's a guru. */
export async function requireGuru(): Promise<string> {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  const { data } = await supabase.from("users").select("role").eq("id", userId).maybeSingle();
  if (data?.role !== "guru") redirect("/dashboard");

  return userId;
}
