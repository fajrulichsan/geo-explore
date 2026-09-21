-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 2 / Peta 6 (Ayo Verifikasi): 4 steps, keys M2-P6-L1-1..5, L4-1.
-- Old key M2-P6-L3-1 is no longer used.

insert into page_images (nama, url, keterangan) values
  ('M2-P6-L1-1', 'https://placehold.co/280x320?text=Siswa+Berpikir', 'Materi 2 Peta 6 Langkah 1 - Siswa berpikir dengan tanda tanya (dummy)'),
  ('M2-P6-L1-2', 'https://placehold.co/480x300?text=GeoGebra+3D', 'Materi 2 Peta 6 Langkah 1 - Tampilan GeoGebra 3D jaring-jaring (dummy)'),
  ('M2-P6-L1-3', 'https://placehold.co/220x220?text=QR+GeoGebra', 'Materi 2 Peta 6 Langkah 1 - QR GeoGebra 3D (dummy)'),
  ('M2-P6-L1-4', 'https://placehold.co/480x220?text=Proses+AR', 'Materi 2 Peta 6 Langkah 1 - Proses AR membuka bangun ruang (dummy)'),
  ('M2-P6-L1-5', 'https://placehold.co/220x220?text=QR+AR', 'Materi 2 Peta 6 Langkah 1 - QR AR (dummy)'),
  ('M2-P6-L4-1', 'https://placehold.co/300x400?text=Siswi+Ide', 'Materi 2 Peta 6 Langkah 4 - Siswi mengacungkan jari dengan ide lampu (dummy)')
on conflict (nama) do nothing;
