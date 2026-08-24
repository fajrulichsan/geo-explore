import { S3Client } from "@aws-sdk/client-s3";

export const S3_BUCKET = process.env.S3_BUCKET!;

export const s3Client = new S3Client({
  region: process.env.S3_REGION || "us-east-1",
  endpoint: process.env.S3_ENDPOINT,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});

export function buildPublicUrl(key: string) {
  const base = process.env.S3_PUBLIC_URL_BASE || `${process.env.S3_ENDPOINT}/${S3_BUCKET}`;
  return `${base.replace(/\/$/, "")}/${key}`;
}
