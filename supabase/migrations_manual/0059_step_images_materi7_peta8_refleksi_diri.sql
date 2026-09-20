-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 8 (Refleksi Diri, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P8-L1-1', 'https://placehold.co/1063x621?text=Hero+tiga+siswa+lembar+refleksi+diri', 'Materi 7 Peta 8 Langkah 1 - Hero tiga siswa lembar refleksi diri (dummy)'),
  ('M7-P8-L4-1', 'https://placehold.co/568x594?text=Maskot+laki-laki+semangat', 'Materi 7 Peta 8 Langkah 4 - Maskot laki-laki semangat (dummy)')
on conflict (nama) do nothing;
