-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 4 (Ayo Bereksplorasi - Submateri 5 Tahap 3, Skala dan Luas Permukaan)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P4-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Bereksplorasi+Skala', 'Materi 5 Peta 4 Langkah 1 - Tiga siswa mengamati bangun ruang di laptop dan tablet dengan berbagai faktor skala (dummy)'),
  ('M5-P4-L2-1', 'https://placehold.co/600x338?text=GeoGebra+3D+Faktor+Skala', 'Materi 5 Peta 4 Langkah 2 - Model kubus pada GeoGebra 3D dengan slider faktor skala k = 2 (dummy)'),
  ('M5-P4-L3-1', 'https://placehold.co/600x338?text=AR+Kubus+Faktor+Skala', 'Materi 5 Peta 4 Langkah 3 - Tampilan kamera AR menunjukkan kubus biru yang dapat diubah faktor skalanya (dummy)'),
  ('M5-P4-L4-1', 'https://placehold.co/220x280?text=Maskot+Ayo+Berpikir', 'Materi 5 Peta 4 Langkah 6 - Maskot siswa berpikir dengan tanda tanya di atas kepala (dummy)')
on conflict (nama) do nothing;
