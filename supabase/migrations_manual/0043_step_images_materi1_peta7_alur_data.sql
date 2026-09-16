-- Run this in the Supabase SQL editor.
-- Adds icon images for the 4-card "Alur Data" flow on Materi 1 / Peta 7 Langkah 1 (TinjauVerifikasi).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M1-P7-L1-1', 'https://placehold.co/80x80?text=%F0%9F%93%8A', 'Peta 7 Langkah 1 - Alur Data: Data Tahap 3 (dummy)'),
  ('M1-P7-L1-2', 'https://placehold.co/80x80?text=%F0%9F%93%88', 'Peta 7 Langkah 1 - Alur Data: Hasil Tahap 4 (dummy)'),
  ('M1-P7-L1-3', 'https://placehold.co/80x80?text=%E2%9C%94', 'Peta 7 Langkah 1 - Alur Data: Hasil Tahap 5 (dummy)'),
  ('M1-P7-L1-4', 'https://placehold.co/80x80?text=%F0%9F%92%A1', 'Peta 7 Langkah 1 - Alur Data: Tahap 6 Kesimpulan (dummy)')
on conflict (nama) do nothing;
