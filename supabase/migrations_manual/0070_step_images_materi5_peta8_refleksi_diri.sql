-- Run this in the Supabase SQL editor.
-- Materi 5 / Peta 8 (Refleksi Diri) rebuilt: replaces the old single dummy image and adds the new slots.

insert into page_images (nama, url, keterangan) values
  ('M5-P8-L1-1', 'https://placehold.co/931x453?text=Kaca+Pembesar+Lampu+Bangun+Ruang', 'Materi 5 Peta 8 Langkah 1 - Kaca pembesar, lampu ide, dan bangun ruang di header (dummy)'),
  ('M5-P8-L1-2', 'https://placehold.co/426x531?text=Siswa+Berpikir', 'Materi 5 Peta 8 Langkah 1 - Siswa berpikir memegang pena (dummy)'),
  ('M5-P8-L1-3', 'https://placehold.co/603x525?text=Siswi+Menulis', 'Materi 5 Peta 8 Langkah 1 - Siswi menulis di buku (dummy)'),
  ('M5-P8-L5-1', 'https://placehold.co/442x529?text=Siswa+Jempol', 'Materi 5 Peta 8 Langkah 5 - Siswa mengacungkan jempol (dummy)'),
  ('M5-P8-L5-2', 'https://placehold.co/300x400?text=Siswi+Hebat', 'Materi 5 Peta 8 Langkah 5 - Siswi dengan bintang (Hebat) (dummy)')
on conflict (nama) do nothing;
