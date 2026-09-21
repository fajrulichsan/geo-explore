-- Run this in the Supabase SQL editor.
-- Materi 3 / Peta 9 (Tantangan Open-Ended) rebuilt. Adds M3-P9-L1-2 and M3-P9-L3-2; M3-P9-L3-1 is now the boy with speech bubble.

insert into page_images (nama, url, keterangan) values
  ('M3-P9-L1-1', 'https://placehold.co/961x537?text=Tiga+Siswa+Berdiskusi+Strategi', 'Materi 3 Peta 9 Langkah 1 - Tiga siswa berdiskusi dengan bangun ruang (dummy)'),
  ('M3-P9-L1-2', 'https://placehold.co/733x418?text=Balok+12x8x5', 'Materi 3 Peta 9 Langkah 1 - Balok 12 x 8 x 5 cm (dummy)'),
  ('M3-P9-L3-1', 'https://placehold.co/801x534?text=Siswa+Bertanya', 'Materi 3 Peta 9 Langkah 3 - Siswa menunjuk dengan balon balok (dummy)'),
  ('M3-P9-L3-2', 'https://placehold.co/318x183?text=Balok+24x16x10', 'Materi 3 Peta 9 Langkah 3 - Balok 24 x 16 x 10 cm (dummy)'),
  ('M3-P9-L4-1', 'https://placehold.co/224x256?text=Siswi+Jempol', 'Materi 3 Peta 9 Langkah 4 - Siswi berjilbab mengacungkan jempol (dummy)'),
  ('M3-P9-L4-2', 'https://placehold.co/595x535?text=Siswa+Semangat', 'Materi 3 Peta 9 Langkah 4 - Siswa mengepal tangan dengan bintang (dummy)')
on conflict (nama) do nothing;
