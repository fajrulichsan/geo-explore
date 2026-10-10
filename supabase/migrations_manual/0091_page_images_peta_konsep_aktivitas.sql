-- Run this in the Supabase SQL editor.
-- Halaman peta-konsep dan peta-aktivitas (dummy placeholders).

insert into page_images (nama, url, keterangan) values
  ('peta-konsep-kubus', 'https://placehold.co/200x160?text=kubus', 'Pendahuluan - peta-konsep-kubus (dummy)'),
  ('peta-konsep-balok', 'https://placehold.co/200x160?text=balok', 'Pendahuluan - peta-konsep-balok (dummy)'),
  ('peta-konsep-prisma', 'https://placehold.co/200x160?text=prisma', 'Pendahuluan - peta-konsep-prisma (dummy)'),
  ('peta-konsep-limas', 'https://placehold.co/200x160?text=limas', 'Pendahuluan - peta-konsep-limas (dummy)'),
  ('peta-konsep-klasifikasi', 'https://placehold.co/200x160?text=klasifikasi', 'Pendahuluan - peta-konsep-klasifikasi (dummy)'),
  ('peta-konsep-jaring-jaring', 'https://placehold.co/200x160?text=jaring+jaring', 'Pendahuluan - peta-konsep-jaring-jaring (dummy)'),
  ('peta-konsep-luas-permukaan', 'https://placehold.co/200x160?text=luas+permukaan', 'Pendahuluan - peta-konsep-luas-permukaan (dummy)'),
  ('peta-konsep-volume', 'https://placehold.co/200x160?text=volume', 'Pendahuluan - peta-konsep-volume (dummy)'),
  ('peta-konsep-skala', 'https://placehold.co/200x160?text=skala', 'Pendahuluan - peta-konsep-skala (dummy)'),
  ('peta-aktivitas-papan', 'https://placehold.co/200x160?text=papan', 'Pendahuluan - peta-aktivitas-papan (dummy)'),
  ('peta-aktivitas-bangun-ruang', 'https://placehold.co/200x160?text=bangun+ruang', 'Pendahuluan - peta-aktivitas-bangun-ruang (dummy)'),
  ('peta-aktivitas-buku-awal', 'https://placehold.co/200x160?text=buku+awal', 'Pendahuluan - peta-aktivitas-buku-awal (dummy)'),
  ('peta-aktivitas-buku-penutup', 'https://placehold.co/200x160?text=buku+penutup', 'Pendahuluan - peta-aktivitas-buku-penutup (dummy)'),
  ('peta-aktivitas-buku-submateri', 'https://placehold.co/200x160?text=buku+submateri', 'Pendahuluan - peta-aktivitas-buku-submateri (dummy)')
on conflict (nama) do nothing;
