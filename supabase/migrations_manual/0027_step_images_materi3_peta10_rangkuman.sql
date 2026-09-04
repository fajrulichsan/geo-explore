-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 10 (Rangkuman - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P10-L1-1', 'https://placehold.co/440x320?text=Tiga+Siswa+GeoGebra+%26+AR', 'Materi 3 Peta 10 Langkah 1 - Tiga siswa merayakan pembelajaran luas permukaan dengan GeoGebra 3D dan AR (dummy)'),
  ('M3-P10-L4-1', 'https://placehold.co/200x280?text=Maskot+Jempol', 'Materi 3 Peta 10 Langkah 4 - Maskot memberi jempol pada penutup rangkuman (dummy)')
on conflict (nama) do nothing;
