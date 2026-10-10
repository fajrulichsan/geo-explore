-- Run this in the Supabase SQL editor.
-- Halaman petunjuk-3 (Bab II Bangun Ruang - Tujuan Pembelajaran), dummy placeholders.

insert into page_images (nama, url, keterangan) values
  ('petunjuk3-bangun-ruang', 'https://placehold.co/340x240?text=Kubus+Balok+Limas', 'Petunjuk 3 - Kubus hijau, limas ungu, balok biru di pojok kanan atas header (dummy)'),
  ('petunjuk3-siswa', 'https://placehold.co/820x400?text=Empat+Siswa+Belajar', 'Petunjuk 3 - Empat siswa belajar bersama GeoGebra, AR, jaring-jaring, dan buku (dummy)')
on conflict (nama) do nothing;
