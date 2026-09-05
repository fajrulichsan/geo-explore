-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 10 (Rangkuman - Submateri 4, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P10-L1-1', 'https://placehold.co/440x320?text=Tiga+Siswa+GeoGebra+%26+AR', 'Materi 4 Peta 10 Langkah 1 - Tiga siswa mempresentasikan luas permukaan limas dengan laptop dan AR (dummy)'),
  ('M4-P10-L3-1', 'https://placehold.co/200x280?text=Maskot+Jempol', 'Materi 4 Peta 10 Langkah 3 - Maskot memberi jempol pada penutup rangkuman (dummy)')
on conflict (nama) do nothing;
