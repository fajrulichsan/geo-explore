-- Run this in the Supabase SQL editor.
-- Adds the Peta Konsep image for Materi 1 / Peta 10 Langkah 2 (DasarKlasifikasi).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M1-P10-L2-1', 'https://placehold.co/900x500?text=Peta+Konsep', 'Peta 10 Langkah 2 - Peta Konsep Klasifikasi Bangun Ruang (dummy)')
on conflict (nama) do nothing;
