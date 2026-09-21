-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 7 (Ayo Menyimpulkan - Tahap 6, Luas Permukaan Limas) rebuilt as 9 steps.
-- Replaces the old M4-P7-L1-2, M4-P7-L6-1 and M4-P7-L7-1 slots (delete them manually if they exist).

insert into page_images (nama, url, keterangan) values
  ('M4-P7-L1-1', 'https://placehold.co/485x241?text=Tiga+Siswa+Menyimpulkan', 'Materi 4 Peta 7 Langkah 1 - Tiga siswa dengan laptop dan tablet (hero) (dummy)'),
  ('M4-P7-L3-1', 'https://placehold.co/265x190?text=Limas+8cm+10cm', 'Materi 4 Peta 7 Langkah 3 - Limas segiempat dengan alas 8 cm dan tinggi sisi tegak 10 cm (dummy)'),
  ('M4-P7-L4-1', 'https://placehold.co/230x102?text=Dua+Siswa+Jempol', 'Materi 4 Peta 7 Langkah 4 - Dua siswa jempol (dipakai ulang di langkah 9) (dummy)'),
  ('M4-P7-L5-1', 'https://placehold.co/181x320?text=Limas+ke+Jaring-Jaring', 'Materi 4 Peta 7 Langkah 5 - Limas menjadi jaring-jaring (dummy)'),
  ('M4-P7-L8-1', 'https://placehold.co/90x94?text=Segitiga', 'Materi 4 Peta 7 Langkah 8 - Limas alas segitiga (dummy)'),
  ('M4-P7-L8-2', 'https://placehold.co/130x94?text=Persegi', 'Materi 4 Peta 7 Langkah 8 - Limas alas persegi (dummy)'),
  ('M4-P7-L8-3', 'https://placehold.co/90x94?text=Segilima', 'Materi 4 Peta 7 Langkah 8 - Limas alas segilima (dummy)'),
  ('M4-P7-L8-4', 'https://placehold.co/110x94?text=Segienam', 'Materi 4 Peta 7 Langkah 8 - Limas alas segienam (dummy)'),
  ('M4-P7-L9-1', 'https://placehold.co/682x543?text=Tiga+Siswa+Refleksi', 'Materi 4 Peta 7 Langkah 9 - Tiga siswa dengan gelembung centang dan lampu ide (dummy)')
on conflict (nama) do nothing;
