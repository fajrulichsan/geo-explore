-- Run this in the Supabase SQL editor.
-- Rebuild Materi 2 / Peta 5 (Ayo Mengolah Informasi - Tahap 4, Submateri 2 Jaring-Jaring Bangun Ruang Sisi Datar).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- M2-P5-L1-1 already exists from 0015 with an older placeholder; replace it via ?edit-foto=true.

insert into page_images (nama, url, keterangan) values
  ('M2-P5-L1-1', 'https://placehold.co/630x520?text=Siswi+Menulis', 'Materi 2 Peta 5 Langkah 1 - Siswi berhijab menulis sambil menunjuk ke atas (dummy)'),
  ('M2-P5-L4-1', 'https://placehold.co/325x532?text=Siswa+Ide', 'Materi 2 Peta 5 Langkah 4 - Siswa dengan gelembung lampu ide (dummy)')
on conflict (nama) do nothing;
