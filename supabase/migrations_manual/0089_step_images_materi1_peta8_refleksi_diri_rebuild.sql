-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 8 (Refleksi Diri): fresh layout across 4 steps, same section mapping.
-- Old placeholder row M1-P8-L4-1 is kept; four new illustration slots are added.

insert into page_images (nama, url, keterangan) values
  ('M1-P8-L1-1', 'https://placehold.co/160x160?text=Siswa', 'Materi 1 Peta 8 Langkah 1 - Tiga siswa dalam lingkaran (dummy)'),
  ('M1-P8-L1-2', 'https://placehold.co/200x260?text=Maskot', 'Materi 1 Peta 8 Langkah 1 - Maskot siswi berhijab memegang dada dengan bubble hati (dummy)'),
  ('M1-P8-L1-3', 'https://placehold.co/220x220?text=Otak+Ide', 'Materi 1 Peta 8 Langkah 1 - Karakter otak berkacamata memegang bohlam ide (dummy)'),
  ('M1-P8-L2-1', 'https://placehold.co/240x220?text=Buku+%26+Tanaman', 'Materi 1 Peta 8 Langkah 2 - Tumpukan buku berwarna dengan tanaman pot (dummy)'),
  ('M1-P8-L3-1', 'https://placehold.co/220x220?text=Bintang', 'Materi 1 Peta 8 Langkah 3 - Karakter bintang tersenyum (dummy)')
on conflict (nama) do nothing;
