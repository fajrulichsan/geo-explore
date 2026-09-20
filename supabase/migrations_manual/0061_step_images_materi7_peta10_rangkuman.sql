-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 10 (Rangkuman, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P10-L1-1', 'https://placehold.co/1063x624?text=Hero+tiga+siswa+merangkum', 'Materi 7 Peta 10 Langkah 1 - Hero tiga siswa merangkum (dummy)'),
  ('M7-P10-L1-2', 'https://placehold.co/540x240?text=Alas+segitiga', 'Materi 7 Peta 10 Langkah 1 - Alas segitiga (dummy)'),
  ('M7-P10-L1-3', 'https://placehold.co/192x186?text=Alas+persegi', 'Materi 7 Peta 10 Langkah 1 - Alas persegi (dummy)'),
  ('M7-P10-L1-4', 'https://placehold.co/247x226?text=Alas+segilima', 'Materi 7 Peta 10 Langkah 1 - Alas segilima (dummy)'),
  ('M7-P10-L1-5', 'https://placehold.co/718x592?text=Limas+alas+segi-n', 'Materi 7 Peta 10 Langkah 1 - Limas alas segi-n (dummy)'),
  ('M7-P10-L1-6', 'https://placehold.co/847x211?text=Tiga+limas+jadi+satu+prisma', 'Materi 7 Peta 10 Langkah 1 - Tiga limas jadi satu prisma (dummy)'),
  ('M7-P10-L2-1', 'https://placehold.co/387x166?text=Tiga+limas+sama+dengan+satu+prisma', 'Materi 7 Peta 10 Langkah 2 - Tiga limas sama dengan satu prisma (dummy)'),
  ('M7-P10-L2-2', 'https://placehold.co/583x174?text=Tiga+limas+segitiga+persegi+segi-n', 'Materi 7 Peta 10 Langkah 2 - Tiga limas segitiga persegi segi-n (dummy)'),
  ('M7-P10-L2-3', 'https://placehold.co/259x249?text=Kubus+kuning', 'Materi 7 Peta 10 Langkah 2 - Kubus kuning (dummy)'),
  ('M7-P10-L2-4', 'https://placehold.co/199x249?text=Prisma+ungu+hijau', 'Materi 7 Peta 10 Langkah 2 - Prisma ungu hijau (dummy)'),
  ('M7-P10-L2-5', 'https://placehold.co/1060x627?text=Hero+pesan+akhir+tiga+siswa', 'Materi 7 Peta 10 Langkah 2 - Hero pesan akhir tiga siswa (dummy)')
on conflict (nama) do nothing;
