-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 4 (Ayo Bereksplorasi - Tahap 3) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P4-L1-1', 'https://placehold.co/937x625?text=Hero+Eksplorasi+GeoGebra', 'Materi 6 Peta 4 Langkah 1 - Tiga siswa mengamati GeoGebra 3D dengan kubus, balok, prisma (dummy)'),
  ('M6-P4-L1-2', 'https://placehold.co/300x300?text=QR+GeoGebra+3D', 'Materi 6 Peta 4 Langkah 1 - QR code membuka GeoGebra 3D (dummy)'),
  ('M6-P4-L2-1', 'https://placehold.co/859x316?text=Satu+Lapisan+Kubus', 'Materi 6 Peta 4 Langkah 2 - Diagram satu lapisan kubus (tinggi = 1) (dummy)'),
  ('M6-P4-L2-2', 'https://placehold.co/1206x414?text=Banyak+Lapisan+Kubus', 'Materi 6 Peta 4 Langkah 2 - Diagram banyak lapisan: lapisan pertama, kedua, ketiga (dummy)'),
  ('M6-P4-L2-3', 'https://placehold.co/295x267?text=Kubus+Satuan', 'Materi 6 Peta 4 Langkah 2 - Ikon kubus satuan (dummy)'),
  ('M6-P4-L2-4', 'https://placehold.co/1218x508?text=Penampang+Prisma+Posisi', 'Materi 6 Peta 4 Langkah 2 - Penampang segitiga yang digeser pada posisi 1, 2, 3 dan prisma terbentuk (dummy)'),
  ('M6-P4-L3-1', 'https://placehold.co/499x489?text=Ikon+Kubus', 'Materi 6 Peta 4 Langkah 3 - Ikon kubus (3x3x3 kubus satuan) (dummy)'),
  ('M6-P4-L3-2', 'https://placehold.co/448x396?text=Alas+Kubus', 'Materi 6 Peta 4 Langkah 3 - Alas kubus 3 x 3 (dummy)'),
  ('M6-P4-L3-3', 'https://placehold.co/325x115?text=Kubus+t1', 'Materi 6 Peta 4 Langkah 3 - Kubus 1 lapisan (dummy)'),
  ('M6-P4-L3-4', 'https://placehold.co/219x120?text=Kubus+t2', 'Materi 6 Peta 4 Langkah 3 - Kubus 2 lapisan (dummy)'),
  ('M6-P4-L3-5', 'https://placehold.co/202x147?text=Kubus+t3', 'Materi 6 Peta 4 Langkah 3 - Kubus 3 lapisan (dummy)'),
  ('M6-P4-L3-6', 'https://placehold.co/820x454?text=Ikon+Balok', 'Materi 6 Peta 4 Langkah 3 - Ikon balok (dummy)'),
  ('M6-P4-L3-7', 'https://placehold.co/736x268?text=Alas+Balok', 'Materi 6 Peta 4 Langkah 3 - Alas balok 5 x 2 (dummy)'),
  ('M6-P4-L3-8', 'https://placehold.co/271x84?text=Balok+t1', 'Materi 6 Peta 4 Langkah 3 - Balok 1 lapisan (dummy)'),
  ('M6-P4-L3-9', 'https://placehold.co/271x112?text=Balok+t2', 'Materi 6 Peta 4 Langkah 3 - Balok 2 lapisan (dummy)'),
  ('M6-P4-L3-10', 'https://placehold.co/243x123?text=Balok+t3', 'Materi 6 Peta 4 Langkah 3 - Balok 3 lapisan (dummy)'),
  ('M6-P4-L3-11', 'https://placehold.co/394x613?text=Ikon+Prisma', 'Materi 6 Peta 4 Langkah 3 - Ikon prisma segitiga (dummy)'),
  ('M6-P4-L3-12', 'https://placehold.co/459x252?text=Penampang+Segitiga', 'Materi 6 Peta 4 Langkah 3 - Penampang segitiga alas 3 tinggi 2 (dummy)'),
  ('M6-P4-L3-13', 'https://placehold.co/228x141?text=Prisma+t1', 'Materi 6 Peta 4 Langkah 3 - Prisma panjang 1 (dummy)'),
  ('M6-P4-L3-14', 'https://placehold.co/313x282?text=Prisma+t2', 'Materi 6 Peta 4 Langkah 3 - Prisma panjang 2 (dummy)'),
  ('M6-P4-L3-15', 'https://placehold.co/213x219?text=Prisma+t3', 'Materi 6 Peta 4 Langkah 3 - Prisma panjang 3 (dummy)'),
  ('M6-P4-L5-1', 'https://placehold.co/1300x544?text=Hero+Eksplorasi+AR', 'Materi 6 Peta 4 Langkah 5 - Tiga siswa mengamati kubus, balok, prisma dengan AR (dummy)'),
  ('M6-P4-L5-2', 'https://placehold.co/300x300?text=QR+AR', 'Materi 6 Peta 4 Langkah 5 - QR code membuka fitur AR (dummy)'),
  ('M6-P4-L8-1', 'https://placehold.co/514x234?text=Maskot+Gunakan+Hasil', 'Materi 6 Peta 4 Langkah 8 - Siswa menunjuk dengan balon Ayo gunakan hasil pengamatanmu (dummy)'),
  ('M6-P4-L9-1', 'https://placehold.co/1495x625?text=Hero+Bandingkan+Hasil', 'Materi 6 Peta 4 Langkah 9 - Tiga siswa membandingkan hasil GeoGebra 3D dan AR (dummy)'),
  ('M6-P4-L9-2', 'https://placehold.co/253x562?text=Prisma+Beberapa+Posisi', 'Materi 6 Peta 4 Langkah 9 - Prisma segitiga dengan beberapa posisi penampang (dummy)'),
  ('M6-P4-L10-1', 'https://placehold.co/634x592?text=Maskot+Berpikir', 'Materi 6 Peta 4 Langkah 10 - Siswa berpikir dengan tanda tanya (dummy)'),
  ('M6-P4-L11-1', 'https://placehold.co/409x289?text=Contoh+Kubus', 'Materi 6 Peta 4 Langkah 11 - Contoh kubus (dummy)'),
  ('M6-P4-L11-2', 'https://placehold.co/1093x423?text=Contoh+Balok', 'Materi 6 Peta 4 Langkah 11 - Contoh balok (dummy)'),
  ('M6-P4-L11-3', 'https://placehold.co/240x276?text=Contoh+Prisma', 'Materi 6 Peta 4 Langkah 11 - Contoh prisma segitiga (dummy)')
on conflict (nama) do nothing;
