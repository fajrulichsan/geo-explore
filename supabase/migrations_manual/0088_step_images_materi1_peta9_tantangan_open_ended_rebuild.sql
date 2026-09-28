-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 9 (Tantangan Open-Ended): 7 steps.
-- M1-P9-L1-1..L1-6 (enam bangun ruang) and M1-P9-L2-1/L2-2 already exist from 0010_step_images_peta9.sql.
-- New slots added by the rebuild:

insert into page_images (nama, url, keterangan) values
  ('M1-P9-L1-7', 'https://placehold.co/520x360?text=Tiga+Siswa+Berdiskusi', 'Materi 1 Peta 9 Langkah 1 - Tiga maskot siswa berdiskusi (dipakai ulang di Langkah 4) (dummy)'),
  ('M1-P9-L7-1', 'https://placehold.co/360x460?text=Maskot+Siswi', 'Materi 1 Peta 9 Langkah 7 - Maskot siswi menunjuk ke atas, siap menuju rangkuman (dummy)')
on conflict (nama) do nothing;
