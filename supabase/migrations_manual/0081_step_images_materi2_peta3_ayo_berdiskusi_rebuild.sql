-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 2 / Peta 3 (Ayo Berdiskusi): 7 steps, keys M2-P3-L1-1 .. M2-P3-L7-1.
-- M2-P3-L1-1 and L1-2 already exist from 0014 (on conflict do nothing keeps them).
-- M2-P3-L1-2 (kelompok) is reused in step 4 (same artwork).

insert into page_images (nama, url, keterangan) values
  ('M2-P3-L1-1', 'https://placehold.co/291x241?text=Maskot+Berdiskusi', 'Materi 2 Peta 3 Langkah 1 - Maskot siswi berhijab dengan balon bicara (dummy)'),
  ('M2-P3-L1-2', 'https://placehold.co/802x529?text=Kelompok+Berdiskusi', 'Materi 2 Peta 3 Langkah 1 - Empat siswa berdiskusi di meja (dummy)'),
  ('M2-P3-L3-1', 'https://placehold.co/802x429?text=GeoGebra+3D+dan+AR', 'Materi 2 Peta 3 Langkah 3 - Laptop GeoGebra 3D dan tablet AR (dummy)'),
  ('M2-P3-L3-2', 'https://placehold.co/150x150?text=QR', 'Materi 2 Peta 3 Langkah 3 - Kode QR (dummy)'),
  ('M2-P3-L4-1', 'https://placehold.co/646x529?text=Maskot+Berdiskusi+2', 'Materi 2 Peta 3 Langkah 4 - Maskot siswi berhijab menunjuk ke atas (dummy)'),
  ('M2-P3-L7-1', 'https://placehold.co/811x535?text=Kotak+Motivasi', 'Materi 2 Peta 3 Langkah 7 - Empat siswa dengan simbol tanya, ide, centang, chat (dummy)')
on conflict (nama) do nothing;
