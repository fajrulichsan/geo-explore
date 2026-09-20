-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 9 (Tantangan Open-Ended, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P9-L1-1', 'https://placehold.co/1066x622?text=Hero+tiga+siswa+tantangan+open-ended', 'Materi 7 Peta 9 Langkah 1 - Hero tiga siswa tantangan open-ended (dummy)'),
  ('M7-P9-L1-2', 'https://placehold.co/400x300?text=Limas+persegi+ungu', 'Materi 7 Peta 9 Langkah 1 - Limas persegi ungu (dummy)'),
  ('M7-P9-L1-3', 'https://placehold.co/651x600?text=Limas+segitiga+oranye', 'Materi 7 Peta 9 Langkah 1 - Limas segitiga oranye (dummy)'),
  ('M7-P9-L1-4', 'https://placehold.co/469x424?text=Limas+segilima+biru', 'Materi 7 Peta 9 Langkah 1 - Limas segilima biru (dummy)'),
  ('M7-P9-L4-1', 'https://placehold.co/591x196?text=Tiga+limas+persegi+segitiga+segilima', 'Materi 7 Peta 9 Langkah 4 - Strip tiga limas (dummy)'),
  ('M7-P9-L5-1', 'https://placehold.co/1063x619?text=Tiga+siswa+analisis+strategi', 'Materi 7 Peta 9 Langkah 5 - Scene analisis strategi (dummy)'),
  ('M7-P9-L6-1', 'https://placehold.co/1063x622?text=Tiga+siswa+diskusi+open-ended', 'Materi 7 Peta 9 Langkah 6 - Scene diskusi open-ended (dummy)'),
  ('M7-P9-L7-1', 'https://placehold.co/417x601?text=Maskot+laki-laki+semangat', 'Materi 7 Peta 9 Langkah 7 - Maskot laki-laki semangat (dummy)')
on conflict (nama) do nothing;
