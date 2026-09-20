-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 8 (Refleksi Diri) step illustration images to page_images.

insert into page_images (nama, url, keterangan) values
  ('M8-P8-L1-1', 'https://placehold.co/1221x553?text=Kaca+Pembesar+Lampu+Kubus', 'Materi 8 Peta 8 Langkah 1 - Kaca pembesar, lampu ide, dan tiga kubus (dummy)'),
  ('M8-P8-L1-2', 'https://placehold.co/675x601?text=Siswa+Berpikir', 'Materi 8 Peta 8 Langkah 1 - Siswa berpikir dengan pena di depan buku (dummy)'),
  ('M8-P8-L1-3', 'https://placehold.co/819x625?text=Siswi+Menulis', 'Materi 8 Peta 8 Langkah 1 - Siswi menulis di buku (dummy)'),
  ('M8-P8-L4-1', 'https://placehold.co/360x612?text=Siswa+Aku+Mampu', 'Materi 8 Peta 8 Langkah 4 - Siswa mengepalkan tangan (Aku mampu terus berkembang) (dummy)'),
  ('M8-P8-L6-1', 'https://placehold.co/552x595?text=Siswi+Hebat', 'Materi 8 Peta 8 Langkah 6 - Siswi mengepalkan tangan dengan bintang (Hebat) (dummy)')
on conflict (nama) do nothing;
