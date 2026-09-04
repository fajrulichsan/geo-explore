-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 3 (Ayo Berdiskusi - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P3-L1-1', 'https://placehold.co/280x360?text=Maskot+Berdiskusi', 'Materi 2 Peta 3 Langkah 1 - Maskot mengajak berdiskusi (dummy)'),
  ('M2-P3-L1-2', 'https://placehold.co/480x300?text=Kelompok+Berdiskusi', 'Materi 2 Peta 3 Langkah 1 - Ilustrasi kelompok siswa berdiskusi (dummy)')
on conflict (nama) do nothing;
