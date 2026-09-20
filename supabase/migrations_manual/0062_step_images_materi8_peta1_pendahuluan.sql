-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 1 (Pendahuluan - Submateri 8, Skala dan Volume Bangun Ruang Sisi Datar) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M8-P1-L1-1', 'https://placehold.co/1048x622?text=Hero+Tiga+Siswa+Skala', 'Materi 8 Peta 1 Langkah 1 - Tiga siswa dengan GeoGebra 3D dan AR (dummy)'),
  ('M8-P1-L1-2', 'https://placehold.co/993x328?text=Alur+Skala+Volume', 'Materi 8 Peta 1 Langkah 1 - Lima langkah skala mempengaruhi volume (dummy)'),
  ('M8-P1-L2-1', 'https://placehold.co/480x300?text=GeoGebra+3D+Skala', 'Materi 8 Peta 1 Langkah 2 - Layar GeoGebra 3D slider skala k (dummy)'),
  ('M8-P1-L2-2', 'https://placehold.co/480x300?text=AR+Skala', 'Materi 8 Peta 1 Langkah 2 - Tampilan AR kubus asli dan hasil skala (dummy)'),
  ('M8-P1-L2-3', 'https://placehold.co/298x256?text=Siswa+Menulis', 'Materi 8 Peta 1 Langkah 2 - Siswa laki-laki menulis di buku (dummy)'),
  ('M8-P1-L3-1', 'https://placehold.co/270x256?text=Kaca+Pembesar', 'Materi 8 Peta 1 Langkah 3 - Kaca pembesar menyorot kubus (dummy)'),
  ('M8-P1-L3-2', 'https://placehold.co/334x160?text=Kubus+k2', 'Materi 8 Peta 1 Langkah 3 - Kubus k = 2 (dummy)'),
  ('M8-P1-L3-3', 'https://placehold.co/367x160?text=Balok+k2', 'Materi 8 Peta 1 Langkah 3 - Balok k = 2 (dummy)'),
  ('M8-P1-L3-4', 'https://placehold.co/339x160?text=Prisma+k2', 'Materi 8 Peta 1 Langkah 3 - Prisma k = 2 (dummy)'),
  ('M8-P1-L3-5', 'https://placehold.co/309x181?text=Limas+k2', 'Materi 8 Peta 1 Langkah 3 - Limas k = 2 (dummy)')
on conflict (nama) do nothing;
