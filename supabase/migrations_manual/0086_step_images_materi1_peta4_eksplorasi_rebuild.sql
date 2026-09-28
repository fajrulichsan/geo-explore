-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 4 (Ayo Mengeksplorasi): 8 steps.
-- Old placeholder rows for M1-P4-* (previous 10-step layout) may already exist; on conflict they are kept
-- (real uploads overwrite them, and the same keys now refer to the slots listed below).

insert into page_images (nama, url, keterangan) values
  ('M1-P4-L1-1', 'https://placehold.co/280x400?text=Maskot+Ingat', 'Materi 1 Peta 4 Langkah 1 - Maskot siswi berhijab menunjuk (dummy)'),
  ('M1-P4-L1-2', 'https://placehold.co/300x300?text=Kubus', 'Materi 1 Peta 4 Langkah 1 - Kubus (dummy)'),
  ('M1-P4-L1-3', 'https://placehold.co/300x300?text=Balok', 'Materi 1 Peta 4 Langkah 1 - Balok (dummy)'),
  ('M1-P4-L1-4', 'https://placehold.co/300x300?text=Prisma+Segitiga', 'Materi 1 Peta 4 Langkah 1 - Prisma segitiga (dummy)'),
  ('M1-P4-L1-5', 'https://placehold.co/300x300?text=Limas+Segiempat', 'Materi 1 Peta 4 Langkah 1 - Limas segiempat (dummy)'),
  ('M1-P4-L1-6', 'https://placehold.co/300x300?text=Limas+Segitiga', 'Materi 1 Peta 4 Langkah 1 - Limas segitiga (dummy)'),
  ('M1-P4-L2-1', 'https://placehold.co/300x300?text=QR+GeoGebra+3D', 'Materi 1 Peta 4 Langkah 2 - QR code GeoGebra 3D (dummy)'),
  ('M1-P4-L2-2', 'https://placehold.co/640x400?text=Layar+GeoGebra+3D', 'Materi 1 Peta 4 Langkah 2 - Laptop menampilkan GeoGebra 3D (dummy)'),
  ('M1-P4-L5-1', 'https://placehold.co/280x400?text=Maskot+AR', 'Materi 1 Peta 4 Langkah 5 - Maskot memegang ponsel AR (dummy)'),
  ('M1-P4-L5-2', 'https://placehold.co/200x260?text=Scan+QR', 'Materi 1 Peta 4 Langkah 5 - Alur 1 scan QR (dummy)'),
  ('M1-P4-L5-3', 'https://placehold.co/200x260?text=Arahkan+Kamera', 'Materi 1 Peta 4 Langkah 5 - Alur 2 arahkan kamera (dummy)'),
  ('M1-P4-L5-4', 'https://placehold.co/200x260?text=Putar+Model', 'Materi 1 Peta 4 Langkah 5 - Alur 3 putar model (dummy)'),
  ('M1-P4-L5-5', 'https://placehold.co/200x260?text=Lengkapi+Hasil', 'Materi 1 Peta 4 Langkah 5 - Alur 4 lengkapi hasil (dummy)'),
  ('M1-P4-L6-1', 'https://placehold.co/400x330?text=Tablet+AR', 'Materi 1 Peta 4 Langkah 6 - Tangan memegang tablet AR (dummy)'),
  ('M1-P4-L7-1', 'https://placehold.co/300x220?text=GeoGebra+3D', 'Materi 1 Peta 4 Langkah 7 - Laptop GeoGebra 3D (dummy)'),
  ('M1-P4-L7-2', 'https://placehold.co/300x220?text=Augmented+Reality', 'Materi 1 Peta 4 Langkah 7 - Tablet AR (dummy)'),
  ('M1-P4-L7-3', 'https://placehold.co/300x220?text=Informasi+Siap+Diolah', 'Materi 1 Peta 4 Langkah 7 - Papan catatan siap diolah (dummy)'),
  ('M1-P4-L8-1', 'https://placehold.co/280x340?text=Siswa+Menulis', 'Materi 1 Peta 4 Langkah 8 - Siswa menulis di buku (dummy)')
on conflict (nama) do nothing;
