-- Run this in the Supabase SQL editor.
-- Rebuild Materi 2 / Peta 9 (Tantangan Open-Ended - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- Rows already present are kept (on conflict do nothing) - replace them via ?edit-foto=true.

insert into page_images (nama, url, keterangan) values
  ('M2-P9-L1-1', 'https://placehold.co/576x528?text=Siswi+Tantangan', 'Materi 2 Peta 9 Langkah 1 - Siswi berhijab menunjuk ke atas dengan buku terbuka (dummy)'),
  ('M2-P9-L1-2', 'https://placehold.co/457x492?text=Kubus', 'Materi 2 Peta 9 Langkah 1 - Kubus ungu untuk masalah open-ended (dummy)'),
  ('M2-P9-L4-1', 'https://placehold.co/357x540?text=Siswa+Refleksi', 'Materi 2 Peta 9 Langkah 4 - Siswa dengan gelembung pikiran bola lampu (dummy)')
on conflict (nama) do nothing;
