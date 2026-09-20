-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 8 (Refleksi Diri) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P8-L1-1', 'https://placehold.co/939x621?text=Hero+Refleksi+Diri', 'Materi 6 Peta 8 Langkah 1 - Tiga siswa dengan Lembar Refleksi Diri, model kubus/balok, GeoGebra dan AR (dummy)'),
  ('M6-P8-L2-1', 'https://placehold.co/822x624?text=Maskot+Capai+Target', 'Materi 6 Peta 8 Langkah 2 - Siswa: Ayo lanjut dan capai target belajarmu! (dummy)')
on conflict (nama) do nothing;
