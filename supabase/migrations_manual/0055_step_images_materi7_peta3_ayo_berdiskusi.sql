-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 3 (Ayo Berdiskusi - Tahap 2, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P3-L1-1', 'https://placehold.co/954x625?text=Tiga+siswa+berdiskusi', 'Materi 7 Peta 3 Langkah 1 - Hero tiga siswa berdiskusi (dummy)'),
  ('M7-P3-L1-2', 'https://placehold.co/840x328?text=Tiga+limas+identik+dan+satu+prisma', 'Materi 7 Peta 3 Langkah 1 - Tiga limas identik dan satu prisma (dummy)'),
  ('M7-P3-L2-1', 'https://placehold.co/517x244?text=Tiga+maskot+siswa', 'Materi 7 Peta 3 Langkah 2 - Tiga maskot siswa (dummy)'),
  ('M7-P3-L3-1', 'https://placehold.co/928x616?text=Maskot+perempuan+diskusi+yang+baik', 'Materi 7 Peta 3 Langkah 3 - Maskot perempuan - diskusi yang baik (dummy)'),
  ('M7-P3-L4-1', 'https://placehold.co/952x622?text=Tiga+siswa+dan+buku+Amati+Buktikan', 'Materi 7 Peta 3 Langkah 4 - Hero tiga siswa dan buku Amati-Buktikan (dummy)')
on conflict (nama) do nothing;
