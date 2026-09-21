-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 4 (Ayo Bereksplorasi): 8 steps.
-- M3-P4-L2-1 is now the 3D cube (stage 1 of the net transition) instead of the old transition diagram.
-- Real illustrations are uploaded via ?edit-foto=true; these placeholders are only fallbacks.

insert into page_images (nama, url, keterangan) values
  ('M3-P4-L1-1', 'https://placehold.co/810x537?text=Tiga+Siswa+Bereksplorasi', 'Materi 3 Peta 4 Langkah 1 - Tiga siswa dengan laptop GeoGebra dan tablet AR (dummy)'),
  ('M3-P4-L2-1', 'https://placehold.co/439x423?text=Kubus+3D', 'Materi 3 Peta 4 Langkah 2 - Kubus 3D, tahap 1 transisi (dummy)'),
  ('M3-P4-L2-2', 'https://placehold.co/484x472?text=Kubus+Sebagian+Terbuka', 'Materi 3 Peta 4 Langkah 2 - Kubus sebagian terbuka, tahap 2 (dummy)'),
  ('M3-P4-L2-3', 'https://placehold.co/459x507?text=Kubus+Lebih+Terbuka', 'Materi 3 Peta 4 Langkah 2 - Kubus lebih terbuka, tahap 3 (dummy)'),
  ('M3-P4-L2-4', 'https://placehold.co/396x508?text=Jaring-Jaring+Kubus', 'Materi 3 Peta 4 Langkah 2 - Jaring-jaring kubus, tahap 4 (dummy)'),
  ('M3-P4-L3-1', 'https://placehold.co/600x338?text=AR+Kubus+5cm', 'Materi 3 Peta 4 Langkah 3 - Layar AR kubus sisi 5 cm (dummy)'),
  ('M3-P4-L8-1', 'https://placehold.co/444x531?text=Maskot+Menulis+Refleksi', 'Materi 3 Peta 4 Langkah 8 - Siswi menulis refleksi (dummy)'),
  ('M3-P4-L8-2', 'https://placehold.co/286x237?text=Maskot+Semangat', 'Materi 3 Peta 4 Langkah 8 - Siswa semangat di Kotak Motivasi (dummy)'),
  ('M3-P4-L8-3', 'https://placehold.co/742x442?text=Siswa+Eksplorasi+AR', 'Materi 3 Peta 4 Langkah 8 - Siswa eksplorasi AR pada kotak Ingat (dummy)')
on conflict (nama) do nothing;
