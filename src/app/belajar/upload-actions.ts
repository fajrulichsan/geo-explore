"use server";

import { randomUUID } from "crypto";
import { HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, S3_BUCKET, buildPublicUrl } from "@/lib/s3";
import { getSessionUserId } from "@/lib/session";
import { supabase } from "@/lib/supabase";
import type { PageImageKey } from "@/lib/pageImages";

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

async function putObject(key: string, base64Data: string, contentType: string) {
  const body = Buffer.from(base64Data, "base64");
  await s3Client.send(
    new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: "public-read",
    })
  );
  return buildPublicUrl(key);
}

export async function uploadFile(fileName: string, contentType: string, base64Data: string) {
  const userId = await getSessionUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const ext = extensionFromFileName(fileName);
  const key = `uploads/${userId}/${randomUUID()}.${ext}`;

  return putObject(key, base64Data, contentType);
}

export async function uploadPageImage(
  materi: string,
  peta: string,
  step: string,
  urutan: string,
  fileName: string,
  contentType: string,
  base64Data: string,
  imageKey: PageImageKey
) {
  const userId = await getSessionUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const ext = extensionFromFileName(fileName);
  const baseKey = `materi-${materi}/peta-${peta}/langkah-${step}-${urutan}`;
  const key = await findAvailableKey(baseKey, ext);

  const publicUrl = await putObject(key, base64Data, contentType);

  const { error } = await supabase
    .from("page_images")
    .upsert({ nama: imageKey, url: publicUrl }, { onConflict: "nama" });
  if (error) throw new Error(error.message);

  return publicUrl;
}
