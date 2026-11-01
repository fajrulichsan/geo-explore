-- Run this in the Supabase SQL editor.
-- Revisi Submateri 7 v1: new image slots.

insert into page_images (nama, url, keterangan) values
  ('M7-P4-L1-2', 'https://placehold.co/369x316?text=M7+P4+L1+2', 'Materi 7 Peta 4 Langkah 1 - Gambar kotak Model yang digunakan'),
  ('M7-P4-L1-3', 'https://placehold.co/338x309?text=M7+P4+L1+3', 'Materi 7 Peta 4 Langkah 1 - Gambar kotak Tujuan eksplorasi'),
  ('M7-P4-L1-4', 'https://placehold.co/341x336?text=M7+P4+L1+4', 'Materi 7 Peta 4 Langkah 1 - Gambar kotak Hasil pengamatan'),
  ('M7-P4-L2-3', 'https://placehold.co/852x480?text=M7+P4+L2+3', 'Materi 7 Peta 4 Langkah 2 - Tampilan GeoGebra pada panel C'),
  ('M7-P4-L4-2', 'https://placehold.co/738x416?text=M7+P4+L4+2', 'Materi 7 Peta 4 Langkah 4 - Tampilan AR pada panel H'),
  ('M7-P7-L4-1', 'https://placehold.co/1376x764?text=M7+P7+L4+1', 'Materi 7 Peta 7 Langkah 3 - Banner tiga siswa rumus umum'),
  ('M7-P7-L6-2', 'https://placehold.co/213x192?text=M7+P7+L6+2', 'Materi 7 Peta 7 Langkah 5 - Ikon balon di kalimat Gunakan data'),
  ('M7-P8-L4-2', 'https://placehold.co/355x343?text=M7+P8+L4+2', 'Materi 7 Peta 8 Langkah 4 - Piala pada kotak Hebat'),
  ('M7-P9-L1-5', 'https://placehold.co/504x756?text=M7+P9+L1+5', 'Materi 7 Peta 9 Langkah 1 - Gambar catatan Ingat'),
  ('M7-P9-L6-2', 'https://placehold.co/695x1042?text=M7+P9+L6+2', 'Materi 7 Peta 9 Langkah 6 - Gambar catatan Ingat'),
  ('M7-P9-L7-2', 'https://placehold.co/197x169?text=M7+P9+L7+2', 'Materi 7 Peta 9 Langkah 7 - Lampu di kotak Selanjutnya'),
  ('M7-P9-L7-3', 'https://placehold.co/257x248?text=M7+P9+L7+3', 'Materi 7 Peta 9 Langkah 7 - Piala di kotak Hebat'),
  ('M7-P10-L1-7', 'https://placehold.co/792x819?text=M7+P10+L1+7', 'Materi 7 Peta 10 Langkah 1 - Gambar hubungan luas alas, tinggi, dan volume'),
  ('M7-P10-L1-8', 'https://placehold.co/738x881?text=M7+P10+L1+8', 'Materi 7 Peta 10 Langkah 1 - Gambar Catatan Penting'),
  ('M7-P10-L1-9', 'https://placehold.co/399x399?text=M7+P10+L1+9', 'Materi 7 Peta 10 Langkah 1 - Limas segitiga pada tabel panel C'),
  ('M7-P10-L1-10', 'https://placehold.co/489x408?text=M7+P10+L1+10', 'Materi 7 Peta 10 Langkah 1 - Limas segiempat pada tabel panel C'),
  ('M7-P10-L1-11', 'https://placehold.co/495x421?text=M7+P10+L1+11', 'Materi 7 Peta 10 Langkah 1 - Limas segilima pada tabel panel C'),
  ('M7-P10-L1-12', 'https://placehold.co/859x249?text=M7+P10+L1+12', 'Materi 7 Peta 10 Langkah 1 - Ilustrasi penuangan tiga isi limas ke prisma'),
  ('M7-P10-L2-6', 'https://placehold.co/1125x1398?text=M7+P10+L2+6', 'Materi 7 Peta 10 Langkah 2 - Gambar peta konsep'),
  ('M7-P10-L2-7', 'https://placehold.co/481x589?text=M7+P10+L2+7', 'Materi 7 Peta 10 Langkah 2 - Limas pada panel G'),
  ('M7-P10-L2-8', 'https://placehold.co/346x316?text=M7+P10+L2+8', 'Materi 7 Peta 10 Langkah 2 - Buku pada panel I'),
  ('M7-P10-L2-9', 'https://placehold.co/257x248?text=M7+P10+L2+9', 'Materi 7 Peta 10 Langkah 2 - Piala pada kotak Hebat'),
  ('M7-P10-L2-10', 'https://placehold.co/243x208?text=M7+P10+L2+10', 'Materi 7 Peta 10 Langkah 2 - Lampu pada kotak Selanjutnya')
on conflict (nama) do nothing;
