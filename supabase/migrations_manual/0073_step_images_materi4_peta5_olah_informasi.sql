-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 5 (Ayo Mengolah Informasi - Tahap 4, Luas Permukaan Limas) rebuilt as 6 steps.
-- Replaces the old M4-P5-* slots (delete M4-P5-L1-2 manually if it exists).

insert into page_images (nama, url, keterangan) values
  ('M4-P5-L1-1', 'https://placehold.co/416x260?text=Tiga+Siswa+Mengolah+Data', 'Materi 4 Peta 5 Langkah 1 - Tiga siswa mengamati limas di laptop dan tablet (dummy)'),
  ('M4-P5-L3-1', 'https://placehold.co/961x229?text=Limas+%3D+Alas+%2B+Sisi+Tegak', 'Materi 4 Peta 5 Langkah 3 - Limas = alas + empat sisi tegak pada kotak Ingat! (dummy)'),
  ('M4-P5-L4-1', 'https://placehold.co/813x541?text=Tiga+Siswa+Membandingkan', 'Materi 4 Peta 5 Langkah 4 - Tiga siswa membandingkan strategi (dummy)'),
  ('M4-P5-L5-1', 'https://placehold.co/252x261?text=Limas+Segiempat', 'Materi 4 Peta 5 Langkah 5 - Ilustrasi limas segiempat (dummy)'),
  ('M4-P5-L6-1', 'https://placehold.co/601x532?text=Tiga+Siswa+Refleksi', 'Materi 4 Peta 5 Langkah 6 - Tiga siswa menulis refleksi (dummy)'),
  ('M4-P5-L6-2', 'https://placehold.co/853x517?text=Laptop+GeoGebra+dan+Tablet+AR', 'Materi 4 Peta 5 Langkah 6 - Laptop GeoGebra 3D dan tablet AR pada kotak Hebat! (dummy)')
on conflict (nama) do nothing;
