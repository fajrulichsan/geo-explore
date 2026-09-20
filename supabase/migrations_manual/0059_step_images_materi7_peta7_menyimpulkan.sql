-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 7 (Ayo Menyimpulkan - Tahap 6, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P7-L1-1', 'https://placehold.co/1171x651?text=Hero+tiga+siswa+menyimpulkan+rumus', 'Materi 7 Peta 7 Langkah 1 - Hero tiga siswa menyimpulkan rumus (dummy)'),
  ('M7-P7-L2-1', 'https://placehold.co/1543x279?text=Ilustrasi+tiga+limas+memenuhi+prisma', 'Materi 7 Peta 7 Langkah 2 - Ilustrasi tiga limas memenuhi prisma (dummy)'),
  ('M7-P7-L3-1', 'https://placehold.co/357x567?text=Maskot+laki-laki+gunakan+data+pola+gambar', 'Materi 7 Peta 7 Langkah 3 - Maskot laki-laki gunakan data pola gambar (dummy)'),
  ('M7-P7-L3-2', 'https://placehold.co/340x607?text=Maskot+perempuan+kesimpulan+halaman+berikutnya', 'Materi 7 Peta 7 Langkah 3 - Maskot perempuan kesimpulan halaman berikutnya (dummy)'),
  ('M7-P7-L5-1', 'https://placehold.co/481x589?text=Limas+segiempat+biru+contoh+1', 'Materi 7 Peta 7 Langkah 5 - Limas segiempat biru contoh 1 (dummy)'),
  ('M7-P7-L5-2', 'https://placehold.co/430x600?text=Tenda+limas+cokelat+contoh+2', 'Materi 7 Peta 7 Langkah 5 - Tenda limas cokelat contoh 2 (dummy)'),
  ('M7-P7-L6-1', 'https://placehold.co/555x595?text=Maskot+laki-laki+bersemangat', 'Materi 7 Peta 7 Langkah 6 - Maskot laki-laki bersemangat (dummy)')
on conflict (nama) do nothing;
