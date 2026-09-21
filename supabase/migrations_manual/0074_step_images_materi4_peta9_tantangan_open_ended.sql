-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 9 (Tantangan Open-Ended) rebuilt as 5 steps.
-- Replaces the old slots: delete M4-P9-L3-1 manually; M4-P9-L1-1 and M4-P9-L4-1 change meaning (L4-1 was a trophy).

insert into page_images (nama, url, keterangan) values
  ('M4-P9-L1-1', 'https://placehold.co/450x235?text=Tiga+Siswa+Diskusi', 'Materi 4 Peta 9 Langkah 1 - Tiga siswa dengan laptop, buku, tablet AR (dummy)'),
  ('M4-P9-L1-2', 'https://placehold.co/319x286?text=Limas+10+13', 'Materi 4 Peta 9 Langkah 1 - Limas alas 10 cm, apotema 13 cm (dummy)'),
  ('M4-P9-L2-1', 'https://placehold.co/274x232?text=Semangat', 'Materi 4 Peta 9 Langkah 2 - Siswa mengepal tangan pada kotak Semangat! (dummy)'),
  ('M4-P9-L4-1', 'https://placehold.co/318x451?text=Siswa+Menunjuk', 'Materi 4 Peta 9 Langkah 4 - Siswa menunjuk ke atas pada tip alasan matematis (dummy)'),
  ('M4-P9-L4-2', 'https://placehold.co/322x339?text=Limas+12+15', 'Materi 4 Peta 9 Langkah 4 - Limas alas 12 cm, apotema 15 cm (dummy)'),
  ('M4-P9-L5-1', 'https://placehold.co/351x237?text=Tiga+Siswa', 'Materi 4 Peta 9 Langkah 5 - Tiga siswa mengepal tangan pada kotak Kamu Hebat! (dummy)')
on conflict (nama) do nothing;
