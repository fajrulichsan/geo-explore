-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 3 (Tahap 2 - Ayo Berdiskusi) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M8-P3-L1-1', 'https://placehold.co/933x603?text=Hero+Tiga+Siswa+Diskusi', 'Materi 8 Peta 3 Langkah 1 - Tiga siswa berdiskusi dengan bangun ruang dan tabel (dummy)'),
  ('M8-P3-L5-1', 'https://placehold.co/301x264?text=Siswa+Ide+Ingat', 'Materi 8 Peta 3 Langkah 5 - Siswa dengan lampu ide (Ingat) (dummy)'),
  ('M8-P3-L6-1', 'https://placehold.co/811x615?text=Hero+Kelompok+A+B', 'Materi 8 Peta 3 Langkah 6 - Tiga siswa dengan tabel Kelompok A dan B (dummy)'),
  ('M8-P3-L9-1', 'https://placehold.co/234x223?text=Siswa+Aktif+Pendapat', 'Materi 8 Peta 3 Langkah 9 - Siswa aktif menyampaikan pendapat (dummy)'),
  ('M8-P3-L9-2', 'https://placehold.co/348x231?text=Siswa+Mendengarkan', 'Materi 8 Peta 3 Langkah 9 - Siswa mendengarkan pendapat teman (dummy)'),
  ('M8-P3-L9-3', 'https://placehold.co/607x520?text=Siswa+Alasan+Hasil', 'Materi 8 Peta 3 Langkah 9 - Siswa memberi alasan dari hasil pengamatan (dummy)'),
  ('M8-P3-L9-4', 'https://placehold.co/646x496?text=Siswa+Siap+Membuktikan', 'Materi 8 Peta 3 Langkah 9 - Siswa siap membuktikan dugaan (dummy)'),
  ('M8-P3-L9-5', 'https://placehold.co/606x250?text=Banner+Ayo+Lanjut', 'Materi 8 Peta 3 Langkah 9 - Banner Ayo lanjut ke tahap berikutnya (dummy)')
on conflict (nama) do nothing;
