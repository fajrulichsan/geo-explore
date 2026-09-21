-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 2 / Peta 7 (Ayo Menyimpulkan): 5 steps, keys M2-P7-L1-1 and M2-P7-L4-1 (unchanged).

insert into page_images (nama, url, keterangan) values
  ('M2-P7-L1-1', 'https://placehold.co/320x288?text=Maskot+Menyimpulkan', 'Materi 2 Peta 7 Langkah 1 - Siswi berhijab menulis sambil menunjuk ke atas (dummy)'),
  ('M2-P7-L4-1', 'https://placehold.co/224x352?text=Maskot+Jempol', 'Materi 2 Peta 7 Langkah 4 - Siswa jempol dengan tanda centang (dummy)')
on conflict (nama) do nothing;
