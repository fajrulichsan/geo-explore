-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 4 (Ayo Bereksplorasi - Tahap 3, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P4-L1-1', 'https://placehold.co/954x625?text=Hero+tiga+siswa+GeoGebra+3D', 'Materi 7 Peta 4 Langkah 1 - Hero tiga siswa GeoGebra 3D (dummy)'),
  ('M7-P4-L2-1', 'https://placehold.co/882x559?text=Diagram+Bagian+1+luas+alas+berubah', 'Materi 7 Peta 4 Langkah 2 - Diagram Bagian 1 luas alas berubah (dummy)'),
  ('M7-P4-L2-2', 'https://placehold.co/990x481?text=Diagram+Bagian+2+tinggi+berubah', 'Materi 7 Peta 4 Langkah 2 - Diagram Bagian 2 tinggi berubah (dummy)'),
  ('M7-P4-L4-1', 'https://placehold.co/1189x624?text=Hero+tiga+siswa+AR', 'Materi 7 Peta 4 Langkah 4 - Hero tiga siswa AR (dummy)'),
  ('M7-P4-L7-1', 'https://placehold.co/1324x622?text=Hero+dua+siswa+bandingkan+hasil', 'Materi 7 Peta 4 Langkah 7 - Hero dua siswa bandingkan hasil (dummy)'),
  ('M7-P4-L8-1', 'https://placehold.co/588x583?text=Maskot+laki-laki+berpikir', 'Materi 7 Peta 4 Langkah 8 - Maskot laki-laki berpikir (dummy)'),
  ('M7-P4-L9-1', 'https://placehold.co/1606x421?text=Satu+prisma+sama+dengan+tiga+limas', 'Materi 7 Peta 4 Langkah 9 - Satu prisma sama dengan tiga limas (dummy)'),
  ('M7-P4-L9-2', 'https://placehold.co/961x621?text=Dua+siswa+Siap+ke+Tahap+4', 'Materi 7 Peta 4 Langkah 9 - Dua siswa Siap ke Tahap 4 (dummy)')
on conflict (nama) do nothing;
