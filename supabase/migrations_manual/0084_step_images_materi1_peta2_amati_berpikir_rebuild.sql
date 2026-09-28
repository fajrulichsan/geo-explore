-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 2 (Ayo Mengamati dan Berpikir): 7 steps.
-- Old placeholder rows for M1-P2-* may already exist; on conflict they are kept (real uploads overwrite them).

insert into page_images (nama, url, keterangan) values
  ('M1-P2-L1-1', 'https://placehold.co/300x375?text=Rumah', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 1 (dummy)'),
  ('M1-P2-L1-2', 'https://placehold.co/300x375?text=Tenda+Limas+Segiempat', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 2 (dummy)'),
  ('M1-P2-L1-3', 'https://placehold.co/300x375?text=Akuarium', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 3 (dummy)'),
  ('M1-P2-L1-4', 'https://placehold.co/300x375?text=Rubik', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 4 (dummy)'),
  ('M1-P2-L1-5', 'https://placehold.co/300x375?text=Tenda+Prisma+Segitiga', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 5 (dummy)'),
  ('M1-P2-L1-6', 'https://placehold.co/300x375?text=Kotak+Susu', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 6 (dummy)'),
  ('M1-P2-L1-7', 'https://placehold.co/300x375?text=Kotak+Sepatu', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 7 (dummy)'),
  ('M1-P2-L1-8', 'https://placehold.co/300x375?text=Lemari', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 8 (dummy)'),
  ('M1-P2-L1-9', 'https://placehold.co/300x375?text=Gazebo', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 9 (dummy)'),
  ('M1-P2-L1-10', 'https://placehold.co/300x375?text=Piramida', 'Materi 1 Peta 2 Langkah 1 - Benda sekitar 10 (dummy)'),
  ('M1-P2-L2-1', 'https://placehold.co/280x400?text=Siswa+Kaca+Pembesar', 'Materi 1 Peta 2 Langkah 2 - Maskot Langkah 2 1 (dummy)'),
  ('M1-P2-L3-1', 'https://placehold.co/260x360?text=Siswi+Menunjuk', 'Materi 1 Peta 2 Langkah 3 - Maskot Kotak Ingat 1 (dummy)'),
  ('M1-P2-L4-1', 'https://placehold.co/400x300?text=Kubus', 'Materi 1 Peta 2 Langkah 4 - Model bangun ruang 1 (dummy)'),
  ('M1-P2-L4-2', 'https://placehold.co/400x300?text=Balok', 'Materi 1 Peta 2 Langkah 4 - Model bangun ruang 2 (dummy)'),
  ('M1-P2-L4-3', 'https://placehold.co/400x300?text=Prisma+Segitiga', 'Materi 1 Peta 2 Langkah 4 - Model bangun ruang 3 (dummy)'),
  ('M1-P2-L4-4', 'https://placehold.co/400x300?text=Limas+Segiempat', 'Materi 1 Peta 2 Langkah 4 - Model bangun ruang 4 (dummy)'),
  ('M1-P2-L4-5', 'https://placehold.co/400x300?text=Limas+Segitiga', 'Materi 1 Peta 2 Langkah 4 - Model bangun ruang 5 (dummy)'),
  ('M1-P2-L5-1', 'https://placehold.co/520x340?text=GeoGebra+3D', 'Materi 1 Peta 2 Langkah 5 - Media pengamatan 1 (dummy)'),
  ('M1-P2-L5-2', 'https://placehold.co/360x360?text=Augmented+Reality', 'Materi 1 Peta 2 Langkah 5 - Media pengamatan 2 (dummy)'),
  ('M1-P2-L5-3', 'https://placehold.co/520x440?text=Tabel+Tampak+Gambar', 'Materi 1 Peta 2 Langkah 5 - Media pengamatan 3 (dummy)'),
  ('M1-P2-L7-1', 'https://placehold.co/300x330?text=Siswa+Menunjuk', 'Materi 1 Peta 2 Langkah 7 - Maskot Siap Berdiskusi 1 (dummy)')
on conflict (nama) do nothing;
