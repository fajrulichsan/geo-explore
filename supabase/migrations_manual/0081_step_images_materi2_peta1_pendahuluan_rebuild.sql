-- Run this in the Supabase SQL editor.
-- Rebuild Materi 2 / Peta 1 (Pendahuluan - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- Note: M2-P1-L2-1..3 existed with different meanings in the old build; rows already present are kept
-- (on conflict do nothing) - replace them via ?edit-foto=true if they still show old placeholders.

insert into page_images (nama, url, keterangan) values
  ('M2-P1-L1-1', 'https://placehold.co/380x250?text=Siswa+Belajar', 'Materi 2 Peta 1 Langkah 1 - Tiga siswa belajar bersama (dummy)'),
  ('M2-P1-L1-2', 'https://placehold.co/1100x160?text=Proses+Jaring-Jaring', 'Materi 2 Peta 1 Langkah 1 - Proses kubus menjadi jaring-jaring dan kembali (dummy)'),
  ('M2-P1-L2-1', 'https://placehold.co/350x240?text=GeoGebra+3D', 'Materi 2 Peta 1 Langkah 2 - Tampilan GeoGebra 3D di laptop (dummy)'),
  ('M2-P1-L2-2', 'https://placehold.co/200x250?text=Augmented+Reality', 'Materi 2 Peta 1 Langkah 2 - Tampilan Augmented Reality di ponsel (dummy)'),
  ('M2-P1-L2-3', 'https://placehold.co/111x111?text=Kubus', 'Materi 2 Peta 1 Langkah 2 - Kubus (dummy)'),
  ('M2-P1-L2-4', 'https://placehold.co/400x220?text=Balok', 'Materi 2 Peta 1 Langkah 2 - Balok (dummy)'),
  ('M2-P1-L2-5', 'https://placehold.co/200x130?text=Prisma', 'Materi 2 Peta 1 Langkah 2 - Prisma segitiga (dummy)'),
  ('M2-P1-L2-6', 'https://placehold.co/290x270?text=Limas', 'Materi 2 Peta 1 Langkah 2 - Limas segiempat (dummy)')
on conflict (nama) do nothing;
