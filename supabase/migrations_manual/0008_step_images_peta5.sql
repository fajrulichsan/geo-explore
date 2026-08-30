-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 5 step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  -- Langkah 5 (SiapKlasifikasi)
  ('M1-P5-L5-1', 'https://placehold.co/200x200?text=Ilustrasi', 'Peta 5 Langkah 5 - Ilustrasi klasifikasi bangun geometri (dummy)'),
  -- Langkah 7 (PolaKlasifikasiStrategi)
  ('M1-P5-L7-1', 'https://placehold.co/560x315?text=Ilustrasi', 'Peta 5 Langkah 7 - Ilustrasi pola klasifikasi (dummy)')
on conflict (nama) do nothing;
