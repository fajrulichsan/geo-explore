-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 9 (Tantangan Open-Ended - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P9-L1-1', 'https://placehold.co/512x320?text=Tiga+Siswa+Berdiskusi+Strategi', 'Materi 3 Peta 9 Langkah 1 - Tiga siswa berdiskusi strategi menyelesaikan tantangan (dummy)'),
  ('M3-P9-L3-1', 'https://placehold.co/224x256?text=Maskot+Bertanya', 'Materi 3 Peta 9 Langkah 3 - Siswa bertanya mengapa hasil luas permukaan sama (dummy)'),
  ('M3-P9-L4-1', 'https://placehold.co/224x256?text=Maskot+Jempol', 'Materi 3 Peta 9 Langkah 4 - Siswa memberi jempol setelah refleksi (dummy)'),
  ('M3-P9-L4-2', 'https://placehold.co/112x128?text=Maskot+Semangat', 'Materi 3 Peta 9 Langkah 4 - Siswa bersemangat merayakan usahanya (dummy)')
on conflict (nama) do nothing;
