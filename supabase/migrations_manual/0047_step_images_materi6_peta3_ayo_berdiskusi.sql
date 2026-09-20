-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 3 (Ayo Berdiskusi - Tahap 2) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P3-L1-1', 'https://placehold.co/939x625?text=Hero+Diskusi+Tahap+2', 'Materi 6 Peta 3 Langkah 1 - Tiga siswa berdiskusi dengan kubus, balok, prisma (dummy)'),
  ('M6-P3-L2-1', 'https://placehold.co/463x213?text=Tiga+Siswa+Kelompok', 'Materi 6 Peta 3 Langkah 2 - Tiga siswa laki-laki berdiskusi (dummy)'),
  ('M6-P3-L3-1', 'https://placehold.co/808x535?text=Memilih+Dugaan', 'Materi 6 Peta 3 Langkah 3 - Tiga siswa memilih dugaan yang akan diuji (dummy)'),
  ('M6-P3-L4-1', 'https://placehold.co/934x625?text=Hero+Rencana+Eksplorasi', 'Materi 6 Peta 3 Langkah 4 - Tiga siswa menyiapkan rencana eksplorasi (dummy)'),
  ('M6-P3-L6-1', 'https://placehold.co/538x538?text=Maskot+Refleksi+Diskusi', 'Materi 6 Peta 3 Langkah 6 - Dua siswa berdiskusi dengan lampu ide dan tanda centang (dummy)')
on conflict (nama) do nothing;
