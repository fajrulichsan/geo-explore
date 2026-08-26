-- Run this in the Supabase SQL editor.
-- Stores image URLs used across pages so they can be swapped without a code deploy.

create table if not exists page_images (
  id uuid primary key default gen_random_uuid(),
  nama text not null unique,
  url text not null,
  keterangan text,
  created_at timestamptz not null default now()
);

insert into page_images (nama, url, keterangan) values
  ('logo-kampus', 'https://is3.cloudhost.id/assets-geo/logo-kampus.png', 'Logo kampus di halaman beranda'),
  ('home-hero', 'https://is3.cloudhost.id/assets-geo/home-1.webp', 'Ilustrasi hero di beranda, login, registrasi, petunjuk 1, dan kata pengantar'),
  ('shape-kubus', 'https://is3.cloudhost.id/assets-geo/kubus.png', 'Ilustrasi bangun ruang kubus di beranda'),
  ('shape-balok', 'https://is3.cloudhost.id/assets-geo/balok.png', 'Ilustrasi bangun ruang balok di beranda'),
  ('shape-prisma', 'https://is3.cloudhost.id/assets-geo/prima.png', 'Ilustrasi bangun ruang prisma di beranda'),
  ('shape-limas', 'https://is3.cloudhost.id/assets-geo/limas-segitiga.png', 'Ilustrasi bangun ruang limas di beranda'),
  ('qr-geogebra', 'https://is3.cloudhost.id/assets-geo/qr-geogebra.png', 'QR code menuju GeoGebra 3D di dashboard'),
  ('qr-ar', 'https://is3.cloudhost.id/assets-geo/qr-ar.png', 'QR code menuju AR Viewer di dashboard'),
  ('materi-1-cover', 'https://placehold.co/400x300?text=Kubus+%26+Balok', 'Cover kartu Peta Belajar materi 1 (dummy, ganti nanti)'),
  ('materi-2-cover', 'https://placehold.co/400x300?text=Prisma', 'Cover kartu Peta Belajar materi 2 (dummy, ganti nanti)'),
  ('materi-3-cover', 'https://placehold.co/400x300?text=Limas', 'Cover kartu Peta Belajar materi 3 (dummy, ganti nanti)'),
  ('materi-4-cover', 'https://placehold.co/400x300?text=Tabung', 'Cover kartu Peta Belajar materi 4 (dummy, ganti nanti)'),
  ('materi-5-cover', 'https://placehold.co/400x300?text=Kerucut', 'Cover kartu Peta Belajar materi 5 (dummy, ganti nanti)'),
  ('materi-6-cover', 'https://placehold.co/400x300?text=Bola', 'Cover kartu Peta Belajar materi 6 (dummy, ganti nanti)'),
  ('materi-7-cover', 'https://placehold.co/400x300?text=Gabungan+Datar', 'Cover kartu Peta Belajar materi 7 (dummy, ganti nanti)'),
  ('materi-8-cover', 'https://placehold.co/400x300?text=Gabungan+Lengkung', 'Cover kartu Peta Belajar materi 8 (dummy, ganti nanti)')
on conflict (nama) do nothing;
