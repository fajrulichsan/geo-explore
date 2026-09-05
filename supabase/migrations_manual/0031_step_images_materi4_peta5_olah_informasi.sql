-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 5 (Ayo Mengolah Informasi - Submateri 4, Tahap 4, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P5-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Mengolah+Data', 'Materi 4 Peta 5 Langkah 1 - Tiga siswa mengolah data hasil eksplorasi (dummy)'),
  ('M4-P5-L1-2', 'https://placehold.co/300x180?text=Dua+Limas+Sisi+Berbeda', 'Materi 4 Peta 5 Langkah 1 - Dua bentuk limas dengan sisi tegak berbeda pada Catatan Penting (dummy)'),
  ('M4-P5-L3-1', 'https://placehold.co/240x240?text=Limas+3D', 'Materi 4 Peta 5 Langkah 3 - Ilustrasi limas 3D pada kotak Ingat! (dummy)'),
  ('M4-P5-L4-1', 'https://placehold.co/416x224?text=Tiga+Siswa+Membandingkan', 'Materi 4 Peta 5 Langkah 4 - Tiga siswa membandingkan strategi (dummy)'),
  ('M4-P5-L5-1', 'https://placehold.co/240x240?text=Limas+Segiempat', 'Materi 4 Peta 5 Langkah 5 - Ilustrasi limas segiempat pada kotak rumus sementara (dummy)'),
  ('M4-P5-L6-1', 'https://placehold.co/280x280?text=Tiga+Siswa+Trofi', 'Materi 4 Peta 5 Langkah 6 - Tiga siswa dengan trofi dan bintang pada Kotak Hebat (dummy)')
on conflict (nama) do nothing;
