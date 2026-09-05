-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 5 (Ayo Mengolah Informasi - Submateri 5, Tahap 4, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P5-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Mengolah+Data', 'Materi 5 Peta 5 Langkah 1 - Tiga siswa mengolah data hasil eksplorasi GeoGebra dan AR (dummy)'),
  ('M5-P5-L3-1', 'https://placehold.co/220x220?text=Maskot+Refleksi+Mini', 'Materi 5 Peta 5 Langkah 3 - Maskot berpikir pada kotak Refleksi Mini (dummy)'),
  ('M5-P5-L4-1', 'https://placehold.co/416x224?text=Tiga+Siswa+Membandingkan', 'Materi 5 Peta 5 Langkah 4 - Tiga siswa membandingkan strategi (dummy)'),
  ('M5-P5-L6-1', 'https://placehold.co/220x220?text=Maskot+Tampak+Berlaku', 'Materi 5 Peta 5 Langkah 6 - Maskot pada kotak Tampak Berlaku pada Bangun yang Diamati (dummy)'),
  ('M5-P5-L6-2', 'https://placehold.co/220x220?text=Maskot+Motivasi', 'Materi 5 Peta 5 Langkah 6 - Maskot pada kotak Motivasi (dummy)')
on conflict (nama) do nothing;
