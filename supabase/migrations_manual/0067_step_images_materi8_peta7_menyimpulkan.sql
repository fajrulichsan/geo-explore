-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 7 (Tahap 6 - Ayo Menyimpulkan) step illustration images to page_images.

insert into page_images (nama, url, keterangan) values
  ('M8-P7-L1-1', 'https://placehold.co/936x621?text=Hero+Tiga+Siswa+Kesimpulan', 'Materi 8 Peta 7 Langkah 1 - Tiga siswa berdiskusi dengan tablet (hero) (dummy)'),
  ('M8-P7-L4-1', 'https://placehold.co/589x237?text=Kubus+Awal+ke+Kubus+Skala', 'Materi 8 Peta 7 Langkah 4 - Diagram volume awal ke volume hasil skala (dummy)'),
  ('M8-P7-L4-2', 'https://placehold.co/238x244?text=Siswi+Ingat', 'Materi 8 Peta 7 Langkah 4 - Siswi menunjuk dengan lampu ide (Ingat) (dummy)'),
  ('M8-P7-L5-1', 'https://placehold.co/1221x606?text=Tiga+Keadaan+Skala', 'Materi 8 Peta 7 Langkah 5 - Ilustrasi perubahan skala dan volume (k=1/2, 1, 2) (dummy)'),
  ('M8-P7-L6-1', 'https://placehold.co/183x264?text=Siswa+Ide', 'Materi 8 Peta 7 Langkah 6 - Siswa menunjuk ke atas dengan lampu ide (dummy)'),
  ('M8-P7-L6-2', 'https://placehold.co/933x610?text=Tiga+Siswa+Bandingkan', 'Materi 8 Peta 7 Langkah 6 - Tiga siswa membandingkan kesimpulan (dummy)'),
  ('M8-P7-L7-1', 'https://placehold.co/280x259?text=Siswi+Hebat', 'Materi 8 Peta 7 Langkah 7 - Siswi mengepalkan tangan (Hebat) (dummy)')
on conflict (nama) do nothing;
