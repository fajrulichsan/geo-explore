-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 6 step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  -- Langkah 1 (PeriksaKembali)
  ('M1-P6-L1-1', 'https://placehold.co/320x160?text=Ilustrasi+Balok', 'Peta 6 Langkah 1 - Referensi model balok (dummy)'),

  -- Langkah 2 (Bandingkan)
  ('M1-P6-L2-1', 'https://placehold.co/260x394?text=Ilustrasi', 'Peta 6 Langkah 2 - Referensi diskusi (dummy)'),

  -- Langkah 4 (EvaluasiVerifikasi)
  ('M1-P6-L4-1', 'https://placehold.co/64x64?text=Ilustrasi', 'Peta 6 Langkah 4 - Konteks evaluasi (dummy)'),

  -- Langkah 5 (HasilVerifikasi)
  ('M1-P6-L5-1', 'https://placehold.co/300x180?text=Ilustrasi', 'Peta 6 Langkah 5 - Ilustrasi hasil verifikasi (dummy)'),

  -- Langkah 6 (SiapTahapBerikutnya)
  ('M1-P6-L6-1', 'https://placehold.co/400x220?text=Ilustrasi', 'Peta 6 Langkah 6 - Ilustrasi alur berikutnya (dummy)')
on conflict (nama) do nothing;
