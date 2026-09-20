-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 6 (Tahap 5 - Ayo Verifikasi) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M8-P6-L1-1', 'https://placehold.co/931x618?text=Hero+Tiga+Siswa+Tablet', 'Materi 8 Peta 6 Langkah 1 - Tiga siswa berdiskusi dengan tablet GeoGebra/AR (dummy)'),
  ('M8-P6-L5-1', 'https://placehold.co/420x234?text=Kubus+Awal+ke+Kubus+Skala', 'Materi 8 Peta 6 Langkah 5 - Diagram kubus volume awal ke volume hasil skala (dummy)'),
  ('M8-P6-L6-1', 'https://placehold.co/205x249?text=Siswa+Ide', 'Materi 8 Peta 6 Langkah 6 - Siswa laki-laki dengan lampu ide (dummy)'),
  ('M8-P6-L7-1', 'https://placehold.co/193x256?text=Siswi+Jempol', 'Materi 8 Peta 6 Langkah 7 - Siswi mengacungkan jempol membawa map (dummy)'),
  ('M8-P6-L7-2', 'https://placehold.co/283x258?text=Siswi+Motivasi', 'Materi 8 Peta 6 Langkah 7 - Siswi menunjuk dengan lampu ide (Motivasi) (dummy)'),
  ('M8-P6-L7-3', 'https://placehold.co/238x237?text=Kaca+Pembesar+Grafik', 'Materi 8 Peta 6 Langkah 7 - Kaca pembesar dengan diagram batang (Pesan Penting) (dummy)')
on conflict (nama) do nothing;
