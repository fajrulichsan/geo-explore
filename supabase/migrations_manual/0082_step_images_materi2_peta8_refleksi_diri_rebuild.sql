-- Run this in the Supabase SQL editor.
-- Rebuild Materi 2 / Peta 8 (Refleksi Diri - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- M2-P8-L1-2 (old shapes illustration) is no longer used; M2-P8-L1-1 and M2-P8-L3-1 already exist
-- from 0018 - replace them via ?edit-foto=true. Rows already present are kept (on conflict do nothing).

insert into page_images (nama, url, keterangan) values
  ('M2-P8-L1-1', 'https://placehold.co/400x400?text=Maskot+Refleksi+Diri', 'Materi 2 Peta 8 Langkah 1 - Siswi berhijab berpikir sambil memegang pena (dummy)'),
  ('M2-P8-L3-1', 'https://placehold.co/350x540?text=Siswa+Yakin', 'Materi 2 Peta 8 Langkah 3 - Siswa mengacungkan jempol dengan bintang (dummy)'),
  ('M2-P8-L5-1', 'https://placehold.co/800x520?text=Siswa+Berdiskusi', 'Materi 2 Peta 8 Langkah 5 - Tiga siswa berdiskusi di meja (dummy)'),
  ('M2-P8-L5-2', 'https://placehold.co/350x540?text=Target+Belajar', 'Materi 2 Peta 8 Langkah 5 - Siswi berhijab dengan papan target (dummy)')
on conflict (nama) do nothing;
