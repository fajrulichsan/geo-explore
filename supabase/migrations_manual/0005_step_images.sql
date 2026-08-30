-- Run this in the Supabase SQL editor.
-- Adds per-step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- e.g. M1-P1-L1-1 = Materi 1, Peta 1, Langkah 1, gambar ke-1.

insert into page_images (nama, url, keterangan) values
  ('M1-P1-L1-1', 'https://placehold.co/600x400?text=M1-P1-L1-1', 'Ilustrasi Peta 1 Langkah 1 (Pendahuluan) - dummy, ganti nanti')
on conflict (nama) do nothing;
