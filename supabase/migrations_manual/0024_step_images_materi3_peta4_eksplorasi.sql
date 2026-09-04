-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 4 (Ayo Bereksplorasi - Submateri 3, Tahap 3, Bangun Ruang Sisi Datar:
-- Temukan Hubungan Jaring-Jaring dengan Luas Permukaan) step illustration images to the
-- existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- Note: qr-geogebra / qr-ar (existing keys) and shape-kubus / shape-balok / shape-prisma
-- (existing keys) are reused by this peta and do not need new rows.

insert into page_images (nama, url, keterangan) values
  ('M3-P4-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Bereksplorasi', 'Materi 3 Peta 4 Langkah 1 - Ilustrasi tiga siswa berdiskusi mengamati bangun ruang (dummy)'),
  ('M3-P4-L2-1', 'https://placehold.co/600x338?text=Transisi+GeoGebra+3D', 'Materi 3 Peta 4 Langkah 2 - Diagram transisi bangun ruang menjadi jaring-jaring pada GeoGebra 3D (dummy)'),
  ('M3-P4-L3-1', 'https://placehold.co/600x338?text=AR+Kubus+5cm', 'Materi 3 Peta 4 Langkah 3 - Tampilan kamera AR menunjukkan kubus beserta ukuran sisinya (dummy)'),
  ('M3-P4-L8-1', 'https://placehold.co/300x400?text=Maskot+Menulis+Refleksi', 'Materi 3 Peta 4 Langkah 8 - Maskot siswi menulis refleksi di buku catatan (dummy)'),
  ('M3-P4-L8-2', 'https://placehold.co/112x128?text=Maskot+Semangat', 'Materi 3 Peta 4 Langkah 8 - Maskot siswa penuh semangat pada Kotak Motivasi (dummy)')
on conflict (nama) do nothing;
