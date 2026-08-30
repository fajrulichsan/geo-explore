-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 3 & Peta 4 step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  -- Peta 3, Langkah 1 (Pengelompokan) - ilustrasi kolaborasi
  ('M1-P3-L1-1', 'https://placehold.co/500x400?text=Ilustrasi+Kolaborasi', 'Peta 3 Langkah 1 - ilustrasi Kolaborasi (dummy)'),

  -- Peta 3, Langkah 2 (Bandingkan Dugaan) - 3 kartu kelompok
  ('M1-P3-L2-1', 'https://placehold.co/400x280?text=Kelompok+A', 'Peta 3 Langkah 2 - ilustrasi Kelompok A (dummy)'),
  ('M1-P3-L2-2', 'https://placehold.co/400x280?text=Kelompok+B', 'Peta 3 Langkah 2 - ilustrasi Kelompok B (dummy)'),
  ('M1-P3-L2-3', 'https://placehold.co/400x280?text=Kelompok+C', 'Peta 3 Langkah 2 - ilustrasi Kelompok C (dummy)'),

  -- Peta 4, Langkah 1 (Mengingat Dugaan) - referensi visual
  ('M1-P4-L1-1', 'https://placehold.co/400x400?text=Referensi+Visual', 'Peta 4 Langkah 1 - referensi visual (dummy)'),

  -- Peta 4, Langkah 3 (Eksplorasi GeoGebra) - ilustrasi GeoGebra 3D
  ('M1-P4-L3-1', 'https://placehold.co/560x315?text=Ilustrasi+GeoGebra+3D', 'Peta 4 Langkah 3 - ilustrasi GeoGebra 3D (dummy)'),

  -- Peta 4, Langkah 4 (Tabel Pengamatan) - gambar referensi
  ('M1-P4-L4-1', 'https://placehold.co/400x400?text=Gambar+Referensi', 'Peta 4 Langkah 4 - gambar referensi (dummy)'),

  -- Peta 4, Langkah 5 (Temuan & Persiapan AR) - ilustrasi AR
  ('M1-P4-L5-1', 'https://placehold.co/300x300?text=Ilustrasi+AR', 'Peta 4 Langkah 5 - ilustrasi AR (dummy)'),

  -- Peta 4, Langkah 6 (Mengeksplorasi AR) - 4 kartu langkah
  ('M1-P4-L6-1', 'https://placehold.co/150x150?text=Scan+QR', 'Peta 4 Langkah 6 - ilustrasi Scan QR Code (dummy)'),
  ('M1-P4-L6-2', 'https://placehold.co/150x150?text=Arahkan+Kamera', 'Peta 4 Langkah 6 - ilustrasi Arahkan Kamera ke Marker (dummy)'),
  ('M1-P4-L6-3', 'https://placehold.co/150x150?text=Putar+Model', 'Peta 4 Langkah 6 - ilustrasi Putar/Perbesar/Geser Model (dummy)'),
  ('M1-P4-L6-4', 'https://placehold.co/150x150?text=Lengkapi+Pengamatan', 'Peta 4 Langkah 6 - ilustrasi Lengkapi Hasil Pengamatan (dummy)'),

  -- Peta 4, Langkah 10 (Catatan Pribadi) - ilustrasi catatan
  ('M1-P4-L10-1', 'https://placehold.co/400x400?text=Ilustrasi+Catatan', 'Peta 4 Langkah 10 - ilustrasi Catatan Pribadi (dummy)')
on conflict (nama) do nothing;
