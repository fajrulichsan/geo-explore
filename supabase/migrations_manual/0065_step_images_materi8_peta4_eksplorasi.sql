-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 4 (Tahap 3 - Ayo Bereksplorasi) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M8-P4-L1-1', 'https://placehold.co/933x603?text=Hero+Tiga+Siswa+Eksplorasi', 'Materi 8 Peta 4 Langkah 1 - Tiga siswa bereksplorasi GeoGebra 3D dan AR (dummy)'),
  ('M8-P4-L2-1', 'https://placehold.co/400x400?text=QR+GeoGebra+3D', 'Materi 8 Peta 4 Langkah 2 - QR code GeoGebra 3D (dummy)'),
  ('M8-P4-L2-2', 'https://placehold.co/600x400?text=Tampilan+GeoGebra+k2', 'Materi 8 Peta 4 Langkah 2 - Tampilan GeoGebra 3D kubus k = 2 (dummy)'),
  ('M8-P4-L3-1', 'https://placehold.co/400x400?text=QR+AR', 'Materi 8 Peta 4 Langkah 3 - QR code Augmented Reality (dummy)'),
  ('M8-P4-L3-2', 'https://placehold.co/800x500?text=Tablet+AR+Kubus', 'Materi 8 Peta 4 Langkah 3 - Tablet menampilkan kubus AR (dummy)'),
  ('M8-P4-L5-1', 'https://placehold.co/498x268?text=Siswa+Berpikir', 'Materi 8 Peta 4 Langkah 5 - Siswa berpikir Diskusikan dengan kelompokmu (dummy)'),
  ('M8-P4-L7-1', 'https://placehold.co/165x258?text=Siswi+Kerja+Bagus', 'Materi 8 Peta 4 Langkah 7 - Siswi Kerja bagus (dummy)')
on conflict (nama) do nothing;
