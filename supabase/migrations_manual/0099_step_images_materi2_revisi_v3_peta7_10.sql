-- Run this in the Supabase SQL editor.
-- Revisi Jaring-jaring v3 (Materi 2): new slots for Ingat Kembali (Peta 7), Strategi (Peta 9), and Peta Konsep/Kata Kunci (Peta 10).

insert into page_images (nama, url, keterangan) values
  ('M2-P7-L3-1', 'https://placehold.co/170x170?text=Banyak+Jaring', 'Materi 2 Peta 7 Langkah 3 - Satu bangun ruang banyak jaring-jaring'),
  ('M2-P7-L3-2', 'https://placehold.co/220x170?text=Bukan+Jaring', 'Materi 2 Peta 7 Langkah 3 - Susunan yang bukan jaring-jaring'),
  ('M2-P7-L3-3', 'https://placehold.co/220x170?text=Sisi+Terhubung', 'Materi 2 Peta 7 Langkah 3 - Sisi saling terhubung'),
  ('M2-P7-L3-4', 'https://placehold.co/170x150?text=Lipatan', 'Materi 2 Peta 7 Langkah 3 - Lipatan tanpa sisi bertumpuk'),
  ('M2-P7-L3-5', 'https://placehold.co/170x170?text=Kubus', 'Materi 2 Peta 7 Langkah 3 - Sisi menutup bangun ruang'),
  ('M2-P9-L3-1', 'https://placehold.co/512x400?text=Otak+Lampu', 'Materi 2 Peta 9 Langkah 3 - Ikon otak dan lampu Strategi'),
  ('M2-P10-L3-3', 'https://placehold.co/1368x1150?text=Peta+Konsep', 'Materi 2 Peta 10 Langkah 3 - Peta konsep'),
  ('M2-P10-L3-4', 'https://placehold.co/955x574?text=Puzzle', 'Materi 2 Peta 10 Langkah 3 - Gambar kotak Ingat'),
  ('M2-P10-L3-5', 'https://placehold.co/170x145?text=Lipatan', 'Materi 2 Peta 10 Langkah 3 - Kata kunci lipatan'),
  ('M2-P10-L3-6', 'https://placehold.co/135x132?text=Valid', 'Materi 2 Peta 10 Langkah 3 - Ikon centang valid'),
  ('M2-P10-L3-7', 'https://placehold.co/144x133?text=Tidak+Valid', 'Materi 2 Peta 10 Langkah 3 - Ikon silang tidak valid'),
  ('M2-P10-L3-8', 'https://placehold.co/171x171?text=Kubus', 'Materi 2 Peta 10 Langkah 3 - Kata kunci kubus'),
  ('M2-P10-L3-9', 'https://placehold.co/262x175?text=Balok', 'Materi 2 Peta 10 Langkah 3 - Kata kunci balok')
on conflict (nama) do nothing;
