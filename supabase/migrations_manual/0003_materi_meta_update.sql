-- Run this in the Supabase SQL editor.
-- Replaces materi_meta with the 8 real materi titles.

insert into materi_meta (materi, judul, urutan)
values
  ('1', 'Klasifikasi Bangun Ruang Sisi Datar', 1),
  ('2', 'Jaring-Jaring Bangun Ruang Sisi Datar', 2),
  ('3', 'Luas Permukaan Kubus, Balok, dan Prisma', 3),
  ('4', 'Luas Permukaan Limas', 4),
  ('5', 'Skala dan Luas Bangun Ruang Sisi Datar', 5),
  ('6', 'Volume Kubus, Balok, dan Prisma', 6),
  ('7', 'Volume Limas', 7),
  ('8', 'Skala dan Volume Bangun Ruang Sisi Datar', 8)
on conflict (materi) do update
  set judul = excluded.judul,
      urutan = excluded.urutan;
