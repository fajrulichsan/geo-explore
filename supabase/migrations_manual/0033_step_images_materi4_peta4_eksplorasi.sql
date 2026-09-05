-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 4 (Ayo Bereksplorasi - Submateri 4 Tahap 3, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P4-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Bereksplorasi', 'Materi 4 Peta 4 Langkah 1 - Tiga siswa berdiskusi mengamati limas di laptop dan tablet (dummy)'),
  ('M4-P4-L2-1', 'https://placehold.co/600x338?text=Transisi+GeoGebra+3D+Limas', 'Materi 4 Peta 4 Langkah 2 - Diagram transisi limas menjadi jaring-jaring pada GeoGebra 3D (dummy)'),
  ('M4-P4-L3-1', 'https://placehold.co/600x338?text=AR+Limas', 'Materi 4 Peta 4 Langkah 3 - Tampilan kamera AR menunjukkan limas beserta ukurannya (dummy)'),
  ('M4-P4-L6-1', 'https://placehold.co/480x270?text=Tiga+Siswa+Refleksi', 'Materi 4 Peta 4 Langkah 6 - Tiga siswa berdiskusi dengan bintang penanda semangat (dummy)'),
  ('M4-P4-L6-2', 'https://placehold.co/128x160?text=Maskot+Semangat', 'Materi 4 Peta 4 Langkah 6 - Maskot siswi mengepalkan tangan penuh semangat (dummy)')
on conflict (nama) do nothing;
