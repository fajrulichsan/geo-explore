-- Run this in the Supabase SQL editor.
-- Materi 1 / Peta 2 / Langkah 1: tambah benda 11-15 (grid 3 baris x 5 kolom).

insert into page_images (nama, url, keterangan) values
  ('M1-P2-L1-11', 'https://placehold.co/300x375?text=Lompat+Batu', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 11 (dummy)'),
  ('M1-P2-L1-12', 'https://placehold.co/300x375?text=Aquarium', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 12 (dummy)'),
  ('M1-P2-L1-13', 'https://placehold.co/300x375?text=Kotak+Kado', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 13 (dummy)'),
  ('M1-P2-L1-14', 'https://placehold.co/300x375?text=Penghapus', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 14 (dummy)'),
  ('M1-P2-L1-15', 'https://placehold.co/300x375?text=Kulkas', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 15 (dummy)')
on conflict (nama) do nothing;
