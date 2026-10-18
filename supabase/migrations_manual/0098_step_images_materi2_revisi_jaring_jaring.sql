-- Run this in the Supabase SQL editor.
-- Revisi Jaring-jaring (Materi 2): new slots for Kotak Ingat (Peta 6) and the two nets in Generalisasi (Peta 7).

insert into page_images (nama, url, keterangan) values
  ('M2-P6-L4-2', 'https://placehold.co/200x200?text=Kotak+Ingat', 'Materi 2 Peta 6 Langkah 4 - Papan catatan di Kotak Ingat'),
  ('M2-P3-L7-2', 'https://placehold.co/80x80?text=Bintang', 'Materi 2 Peta 3 Langkah 7 - Ikon bintang Kotak Motivasi'),
  ('M2-P3-L7-3', 'https://placehold.co/80x80?text=Roket', 'Materi 2 Peta 3 Langkah 7 - Ikon roket Menuju Tahap 3'),
  ('M2-P7-L1-2', 'https://placehold.co/190x260?text=Jaring+Hijau', 'Materi 2 Peta 7 Langkah 1 - Susunan bidang datar hijau'),
  ('M2-P7-L1-3', 'https://placehold.co/260x140?text=Jaring+Oranye', 'Materi 2 Peta 7 Langkah 1 - Susunan bidang datar oranye')
on conflict (nama) do nothing;
