-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 6 (Ayo Verifikasi): 6 steps.
-- M1-P6-L1-1 (mascot) is reused on Langkah 1 and Langkah 4 headers.
-- Old placeholder rows M1-P6-L2-1, M1-P6-L4-1, M1-P6-L5-1 are no longer referenced by the rebuilt
-- components; they can stay or be deleted.

insert into page_images (nama, url, keterangan) values
  ('M1-P6-L1-1', 'https://placehold.co/420x260?text=Maskot+3+Siswa+Diskusi', 'Materi 1 Peta 6 Langkah 1 - Tiga maskot siswa berdiskusi verifikasi (dipakai juga di Langkah 4) (dummy)'),
  ('M1-P6-L6-2', 'https://placehold.co/128x128?text=Data+Pengamatan', 'Materi 1 Peta 6 Langkah 6 - Ikon data hasil pengamatan (Tahap 3) (dummy)'),
  ('M1-P6-L6-3', 'https://placehold.co/128x128?text=Hasil+Pengolahan', 'Materi 1 Peta 6 Langkah 6 - Ikon hasil pengolahan (Tahap 4) (dummy)'),
  ('M1-P6-L6-4', 'https://placehold.co/128x128?text=Verifikasi', 'Materi 1 Peta 6 Langkah 6 - Ikon verifikasi (Tahap 5, current) (dummy)'),
  ('M1-P6-L6-5', 'https://placehold.co/128x128?text=Siap+Kesimpulan', 'Materi 1 Peta 6 Langkah 6 - Ikon siap menyusun kesimpulan (Tahap 6) (dummy)')
on conflict (nama) do nothing;
