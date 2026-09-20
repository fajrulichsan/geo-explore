-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 9 (Tantangan Open-Ended) step illustration images to page_images.

insert into page_images (nama, url, keterangan) values
  ('M8-P9-L1-1', 'https://placehold.co/1198x613?text=Hero+Tiga+Siswa+Open-Ended', 'Materi 8 Peta 9 Langkah 1 - Tiga siswa dengan laptop dan bangun ruang (hero) (dummy)'),
  ('M8-P9-L2-1', 'https://placehold.co/544x543?text=Prisma+Diskala+Faktor+k', 'Materi 8 Peta 9 Langkah 2 - Prisma segitiga diskala dengan faktor k (dummy)'),
  ('M8-P9-L2-2', 'https://placehold.co/1312x1199?text=Ingat+Kembali+Faktor+Skala', 'Materi 8 Peta 9 Langkah 2 - Panel Ingat Kembali hubungan faktor skala dan volume (dummy)'),
  ('M8-P9-L5-1', 'https://placehold.co/411x592?text=Siswa+Ide', 'Materi 8 Peta 9 Langkah 5 - Siswa menunjuk dengan lampu ide (dummy)'),
  ('M8-P9-L5-2', 'https://placehold.co/1374x1145?text=Penjelasan+k3', 'Materi 8 Peta 9 Langkah 5 - Panel penjelasan mengapa volume berubah k^3 (dummy)'),
  ('M8-P9-L6-1', 'https://placehold.co/1192x496?text=Kubus+Balok+Prisma+Limas', 'Materi 8 Peta 9 Langkah 6 - Kubus, balok, prisma, limas dengan lampu ide (dummy)'),
  ('M8-P9-L6-2', 'https://placehold.co/1379x920?text=Petunjuk+Faktor+Skala+4', 'Materi 8 Peta 9 Langkah 6 - Panel petunjuk pengaruh faktor skala 4 (dummy)'),
  ('M8-P9-L7-1', 'https://placehold.co/1195x589?text=Siswa+Siswi+Semangat', 'Materi 8 Peta 9 Langkah 7 - Siswa dan siswi mengepalkan tangan (dummy)'),
  ('M8-P9-L7-2', 'https://placehold.co/457x600?text=Siswi+Ide', 'Materi 8 Peta 9 Langkah 7 - Siswi menunjuk dengan lampu ide (dummy)')
on conflict (nama) do nothing;
