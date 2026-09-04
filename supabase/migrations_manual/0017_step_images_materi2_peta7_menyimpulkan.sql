-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 7 (Ayo Menyimpulkan / Generalisasi - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P7-L1-1', 'https://placehold.co/280x360?text=Maskot+Menyimpulkan', 'Materi 2 Peta 7 Langkah 1 - Maskot menulis kesimpulan (dummy)'),
  ('M2-P7-L4-1', 'https://placehold.co/160x200?text=Maskot+Jempol', 'Materi 2 Peta 7 Langkah 4 - Maskot memberi jempol (dummy)')
on conflict (nama) do nothing;
