-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 8 (Refleksi Diri) rebuilt as 4 steps.

insert into page_images (nama, url, keterangan) values
  ('M4-P8-L1-1', 'https://placehold.co/490x240?text=Tiga+Siswa+Belajar', 'Materi 4 Peta 8 Langkah 1 - Tiga siswa belajar dengan laptop, buku, dan tablet limas (dummy)'),
  ('M4-P8-L4-1', 'https://placehold.co/135x270?text=Siswa+Lampu+Ide', 'Materi 4 Peta 8 Langkah 4 - Siswa mengacungkan jari dengan lampu ide (dummy)')
on conflict (nama) do nothing;
