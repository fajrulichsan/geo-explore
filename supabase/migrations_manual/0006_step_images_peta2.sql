-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 2 step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  -- Langkah 1 (Amati) - 10 thumbnail benda
  ('M1-P2-L1-1', 'https://placehold.co/300x225?text=Rumah', 'Peta 2 Langkah 1 - thumbnail Rumah (dummy)'),
  ('M1-P2-L1-2', 'https://placehold.co/300x225?text=Tenda+Limas+Segiempat', 'Peta 2 Langkah 1 - thumbnail Tenda Limas Segiempat (dummy)'),
  ('M1-P2-L1-3', 'https://placehold.co/300x225?text=Akuarium', 'Peta 2 Langkah 1 - thumbnail Akuarium (dummy)'),
  ('M1-P2-L1-4', 'https://placehold.co/300x225?text=Rubik', 'Peta 2 Langkah 1 - thumbnail Rubik (dummy)'),
  ('M1-P2-L1-5', 'https://placehold.co/300x225?text=Tenda+Prisma+Segitiga', 'Peta 2 Langkah 1 - thumbnail Tenda Prisma Segitiga (dummy)'),
  ('M1-P2-L1-6', 'https://placehold.co/300x225?text=Kotak+Susu', 'Peta 2 Langkah 1 - thumbnail Kotak Susu (dummy)'),
  ('M1-P2-L1-7', 'https://placehold.co/300x225?text=Kotak+Sepatu', 'Peta 2 Langkah 1 - thumbnail Kotak Sepatu (dummy)'),
  ('M1-P2-L1-8', 'https://placehold.co/300x225?text=Lemari', 'Peta 2 Langkah 1 - thumbnail Lemari (dummy)'),
  ('M1-P2-L1-9', 'https://placehold.co/300x225?text=Gazebo', 'Peta 2 Langkah 1 - thumbnail Gazebo (dummy)'),
  ('M1-P2-L1-10', 'https://placehold.co/300x225?text=Piramida', 'Peta 2 Langkah 1 - thumbnail Piramida (dummy)'),
  ('M1-P2-L1-11', 'https://placehold.co/360x240?text=Ilustrasi+Amati', 'Peta 2 Langkah 1 - ilustrasi bagian B "Langkah 1 - Amati" (dummy)'),

  -- Langkah 4 (Amati Media) - 10 item benda
  ('M1-P2-L4-1', 'https://placehold.co/300x300?text=Blok+Kayu+%28Kubus%29', 'Peta 2 Langkah 4 - item Blok Kayu (Kubus) (dummy)'),
  ('M1-P2-L4-2', 'https://placehold.co/300x300?text=Tenda+%28Prisma+Segitiga%29', 'Peta 2 Langkah 4 - item Tenda (Prisma Segitiga) (dummy)'),
  ('M1-P2-L4-3', 'https://placehold.co/300x300?text=Akuarium', 'Peta 2 Langkah 4 - item Akuarium (dummy)'),
  ('M1-P2-L4-4', 'https://placehold.co/300x300?text=Rubik+%28Kubus%29', 'Peta 2 Langkah 4 - item Rubik (Kubus) (dummy)'),
  ('M1-P2-L4-5', 'https://placehold.co/300x300?text=Kotak+Tisu', 'Peta 2 Langkah 4 - item Kotak Tisu (dummy)'),
  ('M1-P2-L4-6', 'https://placehold.co/300x300?text=Kardus+%28Balok%29', 'Peta 2 Langkah 4 - item Kardus (Balok) (dummy)'),
  ('M1-P2-L4-7', 'https://placehold.co/300x300?text=Cokelat+%28Prisma+Segitiga%29', 'Peta 2 Langkah 4 - item Cokelat (Prisma Segitiga) (dummy)'),
  ('M1-P2-L4-8', 'https://placehold.co/300x300?text=Piramida+%28Limas+Segiempat%29', 'Peta 2 Langkah 4 - item Piramida (Limas Segiempat) (dummy)'),
  ('M1-P2-L4-9', 'https://placehold.co/300x300?text=Mainan+Limas+Segitiga', 'Peta 2 Langkah 4 - item Mainan Limas Segitiga (dummy)'),
  ('M1-P2-L4-10', 'https://placehold.co/300x300?text=Tumpukan+Ubin', 'Peta 2 Langkah 4 - item Tumpukan Ubin (dummy)'),

  -- Langkah 7 (Siap Berdiskusi) - 1 ilustrasi
  ('M1-P2-L7-1', 'https://placehold.co/320x320?text=Ilustrasi+Diskusi', 'Peta 2 Langkah 7 - ilustrasi Siap Berdiskusi (dummy)')
on conflict (nama) do nothing;
