import { cache } from "react";
import { supabase } from "@/lib/supabase";

export type MateriMeta = { title: string; description: string };

export const getMateriMeta = cache(async (materi: string): Promise<MateriMeta> => {
  const { data } = await supabase
    .from("materi_meta")
    .select("judul, deskripsi")
    .eq("materi", materi)
    .maybeSingle();

  return { title: data?.judul ?? `Materi ${materi}`, description: data?.deskripsi ?? "" };
});

export const getAllMateriMeta = cache(async (): Promise<Record<string, MateriMeta>> => {
  const { data } = await supabase.from("materi_meta").select("materi, judul, deskripsi").order("urutan");

  const result: Record<string, MateriMeta> = {};
  for (const row of data ?? []) {
    result[row.materi] = { title: row.judul, description: row.deskripsi ?? "" };
  }
  return result;
});
