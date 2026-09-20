-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 5 (Tahap 4 - Ayo Mengolah Informasi) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M8-P5-L1-1', 'https://placehold.co/771x618?text=Hero+Tiga+Siswa+Olah+Data', 'Materi 8 Peta 5 Langkah 1 - Tiga siswa mengolah data dengan buku bangun ruang (dummy)'),
  ('M8-P5-L5-1', 'https://placehold.co/342x264?text=Siswa+Lampu+Ide', 'Materi 8 Peta 5 Langkah 5 - Siswa berpikir dengan lampu ide (Refleksi Mini) (dummy)'),
  ('M8-P5-L6-1', 'https://placehold.co/751x616?text=Hero+Tiga+Siswa+Strategi', 'Materi 8 Peta 5 Langkah 6 - Tiga siswa memikirkan strategi (dummy)'),
  ('M8-P5-L9-1', 'https://placehold.co/355x259?text=Siswi+Langkah+Kecil', 'Materi 8 Peta 5 Langkah 9 - Siswi dengan gelembung Langkah kecil (Refleksi Singkat) (dummy)'),
  ('M8-P5-L9-2', 'https://placehold.co/402x252?text=Siswa+Hebat', 'Materi 8 Peta 5 Langkah 9 - Siswa dengan gelembung Hebat (Motivasi) (dummy)')
on conflict (nama) do nothing;
