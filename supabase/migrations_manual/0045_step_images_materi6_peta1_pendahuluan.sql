-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 1 (Pendahuluan - Submateri 6, Volume Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P1-L1-1', 'https://placehold.co/880x496?text=Hero+Tiga+Siswa+Volume', 'Materi 6 Peta 1 Langkah 1 - Ilustrasi hero tiga siswa menyusun kubus satuan menjadi balok dan mengamati prisma (dummy)'),
  ('M6-P1-L1-2', 'https://placehold.co/400x300?text=Kotak+Mainan', 'Materi 6 Peta 1 Langkah 1 - Kotak penyimpanan mainan berisi bola dan kubus kecil (dummy)'),
  ('M6-P1-L1-3', 'https://placehold.co/400x300?text=Akuarium', 'Materi 6 Peta 1 Langkah 1 - Dua akuarium berisi ikan dan tanaman air (dummy)'),
  ('M6-P1-L1-4', 'https://placehold.co/400x300?text=Gudang+Kardus', 'Materi 6 Peta 1 Langkah 1 - Tumpukan kardus di gudang (dummy)'),
  ('M6-P1-L2-1', 'https://placehold.co/440x330?text=Tiga+Siswa+Tujuan', 'Materi 6 Peta 1 Langkah 2 - Tiga siswa mengamati balok kubus satuan dan prisma (tujuan pembelajaran) (dummy)'),
  ('M6-P1-L2-2', 'https://placehold.co/480x270?text=GeoGebra+3D+Volume', 'Materi 6 Peta 1 Langkah 2 - Tangkapan layar GeoGebra 3D kubus satuan (dummy)'),
  ('M6-P1-L2-3', 'https://placehold.co/200x200?text=QR+GeoGebra+3D', 'Materi 6 Peta 1 Langkah 2 - Kode QR GeoGebra 3D (dummy)'),
  ('M6-P1-L2-4', 'https://placehold.co/480x270?text=AR+Volume+Kubus', 'Materi 6 Peta 1 Langkah 2 - Model kubus satuan melalui AR di tablet (dummy)'),
  ('M6-P1-L2-5', 'https://placehold.co/200x200?text=QR+AR+3D+Viewer', 'Materi 6 Peta 1 Langkah 2 - Kode QR AR 3D Viewer (dummy)'),
  ('M6-P1-L2-6', 'https://placehold.co/200x200?text=1+Lapisan', 'Materi 6 Peta 1 Langkah 2 - Kubus 1 lapisan (3x3x1) (dummy)'),
  ('M6-P1-L2-7', 'https://placehold.co/200x200?text=2+Lapisan', 'Materi 6 Peta 1 Langkah 2 - Kubus 2 lapisan (3x3x2) (dummy)'),
  ('M6-P1-L2-8', 'https://placehold.co/200x200?text=3+Lapisan', 'Materi 6 Peta 1 Langkah 2 - Kubus 3 lapisan (3x3x3) (dummy)'),
  ('M6-P1-L2-9', 'https://placehold.co/224x288?text=Maskot+Semangat', 'Materi 6 Peta 1 Langkah 2 - Maskot siswa laki-laki mengepalkan tangan (dummy)')
on conflict (nama) do nothing;
