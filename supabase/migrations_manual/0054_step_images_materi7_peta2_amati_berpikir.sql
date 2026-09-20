-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 2 (Ayo Mengamati dan Berpikir - Tahap 1, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P2-L1-1', 'https://placehold.co/1039x313?text=Tiga+limas+identik+dan+satu+prisma', 'Materi 7 Peta 2 Langkah 1 - Tiga limas identik dan satu prisma (dummy)'),
  ('M7-P2-L1-2', 'https://placehold.co/757x523?text=Limas+biru+di+dalam+prisma', 'Materi 7 Peta 2 Langkah 1 - Limas biru di dalam prisma (dummy)'),
  ('M7-P2-L1-3', 'https://placehold.co/216x247?text=Limas+kuning', 'Materi 7 Peta 2 Langkah 1 - Limas kuning (dummy)'),
  ('M7-P2-L1-4', 'https://placehold.co/196x241?text=Limas+hijau', 'Materi 7 Peta 2 Langkah 1 - Limas hijau (dummy)'),
  ('M7-P2-L2-1', 'https://placehold.co/181x265?text=Maskot+laki-laki+berpikir', 'Materi 7 Peta 2 Langkah 2 - Maskot laki-laki berpikir (dummy)'),
  ('M7-P2-L3-1', 'https://placehold.co/222x250?text=Limas+ungu', 'Materi 7 Peta 2 Langkah 3 - Limas ungu (dummy)'),
  ('M7-P2-L3-2', 'https://placehold.co/219x241?text=Limas+kuning', 'Materi 7 Peta 2 Langkah 3 - Limas kuning (dummy)'),
  ('M7-P2-L3-3', 'https://placehold.co/219x246?text=Limas+hijau', 'Materi 7 Peta 2 Langkah 3 - Limas hijau (dummy)'),
  ('M7-P2-L3-4', 'https://placehold.co/1117x607?text=Tiga+tahap+penuangan', 'Materi 7 Peta 2 Langkah 3 - Tiga tahap penuangan (dummy)'),
  ('M7-P2-L5-1', 'https://placehold.co/757x523?text=Prisma+terisi+sebagian+(satu+penuangan)', 'Materi 7 Peta 2 Langkah 5 - Prisma terisi sebagian (satu penuangan) (dummy)'),
  ('M7-P2-L5-2', 'https://placehold.co/790x532?text=Prisma+terisi+lebih+tinggi+(dua+penuangan)', 'Materi 7 Peta 2 Langkah 5 - Prisma terisi lebih tinggi (dua penuangan) (dummy)'),
  ('M7-P2-L5-3', 'https://placehold.co/373x229?text=Prisma+penuh+dan+tanda+tanya', 'Materi 7 Peta 2 Langkah 5 - Prisma penuh dan tanda tanya (dummy)'),
  ('M7-P2-L5-4', 'https://placehold.co/409x606?text=Maskot+laki-laki+bertanya+mengapa', 'Materi 7 Peta 2 Langkah 5 - Maskot laki-laki bertanya mengapa (dummy)'),
  ('M7-P2-L6-1', 'https://placehold.co/387x610?text=Maskot+perempuan+menunjuk+ke+atas', 'Materi 7 Peta 2 Langkah 6 - Maskot perempuan menunjuk ke atas (dummy)'),
  ('M7-P2-L6-2', 'https://placehold.co/910x279?text=Tiga+limas+identik+dan+satu+prisma', 'Materi 7 Peta 2 Langkah 6 - Tiga limas identik dan satu prisma (dummy)'),
  ('M7-P2-L6-3', 'https://placehold.co/505x613?text=Maskot+laki-laki+menunjuk+ke+atas', 'Materi 7 Peta 2 Langkah 6 - Maskot laki-laki menunjuk ke atas (dummy)')
on conflict (nama) do nothing;
