"use server";

import { randomUUID } from "crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client, S3_BUCKET, buildPublicUrl } from "@/lib/s3";
import { getSessionUserId } from "@/lib/session";

export async function createUploadUrl(fileName: string, contentType: string) {
  const userId = await getSessionUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const ext = fileName.includes(".") ? fileName.split(".").pop() : "bin";
  const key = `uploads/${userId}/${randomUUID()}.${ext}`;

  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });

  return { uploadUrl, publicUrl: buildPublicUrl(key) };
}
