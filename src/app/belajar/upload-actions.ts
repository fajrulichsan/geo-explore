"use server";

import { randomUUID } from "crypto";
import { HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, S3_BUCKET, buildPublicUrl } from "@/lib/s3";
import { getSessionUserId } from "@/lib/session";
import { supabase } from "@/lib/supabase";
import type { PageImageKey } from "@/lib/pageImages";
import { MAX_UPLOAD_BYTES, MAX_UPLOAD_MESSAGE } from "@/lib/uploadLimits";

function extensionFromFileName(fileName: string) {
  return fileName.includes(".") ? fileName.split(".").pop()! : "bin";
}

async function objectExists(key: string) {
  try {
    await s3Client.send(new HeadObjectCommand({ Bucket: S3_BUCKET, Key: key }));
    return true;
  } catch (err) {
    const status = (err as { $metadata?: { httpStatusCode?: number }; name?: string })?.$metadata?.httpStatusCode;
    const name = (err as { name?: string })?.name;
    if (status === 404 || name === "NotFound" || name === "NoSuchKey") return false;
    throw err;
  }
}

async function findAvailableKey(baseKey: string, ext: string) {
  const plainKey = `${baseKey}.${ext}`;
  if (!(await objectExists(plainKey))) return plainKey;

  let version = 2;
  while (await objectExists(`${baseKey}-v${version}.${ext}`)) {
    version++;
  }
  return `${baseKey}-v${version}.${ext}`;
}

async function putObject(key: string, file: File) {
  if (file.size > MAX_UPLOAD_BYTES) throw new Error(MAX_UPLOAD_MESSAGE);
  const body = Buffer.from(await file.arrayBuffer());
  await s3Client.send(
    new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
      Body: body,
      ContentType: file.type,
      ACL: "public-read",
    })
  );
  return buildPublicUrl(key);
}

export async function uploadFile(
  file: File,
  folder?: { materi: string; peta: string }
) {
  const userId = await getSessionUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const ext = extensionFromFileName(file.name);
  const key = folder
    ? `answers/materi-${folder.materi}/peta-${folder.peta}/${randomUUID()}.${ext}`
    : `uploads/${userId}/${randomUUID()}.${ext}`;

  return putObject(key, file);
}

export async function uploadPageImage(
  materi: string,
  peta: string,
  step: string,
  urutan: string,
  file: File,
  imageKey: PageImageKey
) {
  const userId = await getSessionUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const ext = extensionFromFileName(file.name);
  const baseKey = `materi-${materi}/peta-${peta}/langkah-${step}-${urutan}`;
  const key = await findAvailableKey(baseKey, ext);

  const publicUrl = await putObject(key, file);

  const { error } = await supabase
    .from("page_images")
    .upsert({ nama: imageKey, url: publicUrl }, { onConflict: "nama" });
  if (error) throw new Error(error.message);

  return publicUrl;
}
