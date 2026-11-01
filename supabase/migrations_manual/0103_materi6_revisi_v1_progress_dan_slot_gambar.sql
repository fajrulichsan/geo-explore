-- Run this in the Supabase SQL editor (once), AFTER deploying the Materi 6 revisi v1 code.
-- 1) Peta 2 got a new first step (Amati Bangun Ruang Berikut); old steps 1-7 are now steps 2-8.
-- 2) Peta 9 (Tantangan Terbuka) went from 5 steps to 3 (2 answer pages + score page).
-- Existing student progress is remapped so completed steps stay completed.

begin;

-- Peta 2: shift every step by one (two-phase so the unique constraint never collides).
update user_step_progress set step = (step::int + 100)::text where materi = '6' and peta = '2';
update user_step_progress set step = (step::int - 99)::text where materi = '6' and peta = '2';

-- Peta 9: old steps 1+2 -> new step 1, old steps 3+4+5 -> new step 2 (answers merged, status of old step 5 kept).
update user_step_progress p1
set answers = p1.answers || p2.answers
from user_step_progress p2
where p1.materi = '6' and p1.peta = '9' and p1.step = '1'
  and p2.user_id = p1.user_id and p2.materi = '6' and p2.peta = '9' and p2.step = '2';

update user_step_progress p5
set answers = coalesce(p3.answers, '{}'::jsonb) || coalesce(p4.answers, '{}'::jsonb) || p5.answers
from (select user_id, answers from user_step_progress where materi = '6' and peta = '9' and step = '3') p3
full join (select user_id, answers from user_step_progress where materi = '6' and peta = '9' and step = '4') p4 on p4.user_id = p3.user_id
where p5.materi = '6' and p5.peta = '9' and p5.step = '5'
  and p5.user_id = coalesce(p3.user_id, p4.user_id);

delete from user_step_progress where materi = '6' and peta = '9' and step in ('2', '3', '4');
update user_step_progress set step = '2' where materi = '6' and peta = '9' and step = '5';

-- New image slots (placeholders; real images are uploaded via ?edit-foto=true).
insert into page_images (nama, url, keterangan) values
  ('M6-P2-L8-1', 'https://placehold.co/1379x920?text=M6+P2+L8+1', 'Materi 6 Peta 2 Langkah 8 - slot gambar 1'),
  ('M6-P2-L8-2', 'https://placehold.co/424x400?text=M6+P2+L8+2', 'Materi 6 Peta 2 Langkah 8 - slot gambar 2'),
  ('M6-P2-L8-3', 'https://placehold.co/424x300?text=M6+P2+L8+3', 'Materi 6 Peta 2 Langkah 8 - slot gambar 3'),
  ('M6-P2-L8-4', 'https://placehold.co/424x230?text=M6+P2+L8+4', 'Materi 6 Peta 2 Langkah 8 - slot gambar 4'),
  ('M6-P2-L8-5', 'https://placehold.co/420x343?text=M6+P2+L8+5', 'Materi 6 Peta 2 Langkah 8 - slot gambar 5'),
  ('M6-P2-L8-6', 'https://placehold.co/420x190?text=M6+P2+L8+6', 'Materi 6 Peta 2 Langkah 8 - slot gambar 6'),
  ('M6-P2-L8-7', 'https://placehold.co/408x420?text=M6+P2+L8+7', 'Materi 6 Peta 2 Langkah 8 - slot gambar 7'),
  ('M6-P4-L12-1', 'https://placehold.co/1379x920?text=M6+P4+L12+1', 'Materi 6 Peta 4 Langkah 12 - slot gambar 1'),
  ('M6-P5-L4-1', 'https://placehold.co/196x179?text=M6+P5+L4+1', 'Materi 6 Peta 5 Langkah 4 - slot gambar 1'),
  ('M6-P5-L4-2', 'https://placehold.co/196x179?text=M6+P5+L4+2', 'Materi 6 Peta 5 Langkah 4 - slot gambar 2'),
  ('M6-P6-L1-4', 'https://placehold.co/652x435?text=M6+P6+L1+4', 'Materi 6 Peta 6 Langkah 1 - slot gambar 4'),
  ('M6-P6-L1-5', 'https://placehold.co/634x423?text=M6+P6+L1+5', 'Materi 6 Peta 6 Langkah 1 - slot gambar 5'),
  ('M6-P6-L1-6', 'https://placehold.co/526x350?text=M6+P6+L1+6', 'Materi 6 Peta 6 Langkah 1 - slot gambar 6'),
  ('M6-P6-L1-7', 'https://placehold.co/523x349?text=M6+P6+L1+7', 'Materi 6 Peta 6 Langkah 1 - slot gambar 7'),
  ('M6-P6-L3-3', 'https://placehold.co/592x395?text=M6+P6+L3+3', 'Materi 6 Peta 6 Langkah 3 - slot gambar 3'),
  ('M6-P6-L3-4', 'https://placehold.co/596x397?text=M6+P6+L3+4', 'Materi 6 Peta 6 Langkah 3 - slot gambar 4'),
  ('M6-P6-L2-1', 'https://placehold.co/425x411?text=M6+P6+L2+1', 'Materi 6 Peta 6 Langkah 2 - slot gambar 1'),
  ('M6-P7-L4-2', 'https://placehold.co/425x411?text=M6+P7+L4+2', 'Materi 6 Peta 7 Langkah 4 - slot gambar 2'),
  ('M6-P7-L3-2', 'https://placehold.co/520x480?text=M6+P7+L3+2', 'Materi 6 Peta 7 Langkah 3 - slot gambar 2'),
  ('M6-P7-L3-3', 'https://placehold.co/520x290?text=M6+P7+L3+3', 'Materi 6 Peta 7 Langkah 3 - slot gambar 3'),
  ('M6-P7-L3-4', 'https://placehold.co/704x293?text=M6+P7+L3+4', 'Materi 6 Peta 7 Langkah 3 - slot gambar 4'),
  ('M6-P8-L2-2', 'https://placehold.co/1379x920?text=M6+P8+L2+2', 'Materi 6 Peta 8 Langkah 2 - slot gambar 2'),
  ('M6-P10-L2-5', 'https://placehold.co/484x484?text=M6+P10+L2+5', 'Materi 6 Peta 10 Langkah 2 - slot gambar 5'),
  ('M6-P10-L2-6', 'https://placehold.co/685x457?text=M6+P10+L2+6', 'Materi 6 Peta 10 Langkah 2 - slot gambar 6'),
  ('M6-P10-L3-1', 'https://placehold.co/598x598?text=M6+P10+L3+1', 'Materi 6 Peta 10 Langkah 3 - slot gambar 1'),
  ('M6-P10-L3-2', 'https://placehold.co/820x547?text=M6+P10+L3+2', 'Materi 6 Peta 10 Langkah 3 - slot gambar 2'),
  ('M6-P10-L3-3', 'https://placehold.co/688x405?text=M6+P10+L3+3', 'Materi 6 Peta 10 Langkah 3 - slot gambar 3'),
  ('M6-P10-L4-1', 'https://placehold.co/490x490?text=M6+P10+L4+1', 'Materi 6 Peta 10 Langkah 4 - slot gambar 1'),
  ('M6-P10-L4-2', 'https://placehold.co/698x465?text=M6+P10+L4+2', 'Materi 6 Peta 10 Langkah 4 - slot gambar 2'),
  ('M6-P10-L4-3', 'https://placehold.co/422x391?text=M6+P10+L4+3', 'Materi 6 Peta 10 Langkah 4 - slot gambar 3'),
  ('M6-P10-L5-3', 'https://placehold.co/502x376?text=M6+P10+L5+3', 'Materi 6 Peta 10 Langkah 5 - slot gambar 3'),
  ('M6-P9-L1-3', 'https://placehold.co/579x571?text=M6+P9+L1+3', 'Materi 6 Peta 9 Langkah 1 - slot gambar 3'),
  ('M6-P9-L1-4', 'https://placehold.co/850x436?text=M6+P9+L1+4', 'Materi 6 Peta 9 Langkah 1 - slot gambar 4'),
  ('M6-P9-L1-5', 'https://placehold.co/1374x579?text=M6+P9+L1+5', 'Materi 6 Peta 9 Langkah 1 - slot gambar 5'),
  ('M6-P9-L1-6', 'https://placehold.co/634x422?text=M6+P9+L1+6', 'Materi 6 Peta 9 Langkah 1 - slot gambar 6'),
  ('M6-P9-L4-3', 'https://placehold.co/581x760?text=M6+P9+L4+3', 'Materi 6 Peta 9 Langkah 4 - slot gambar 3'),
  ('M6-P4-L6-1', 'https://placehold.co/397x265?text=M6+P4+L6+1', 'Materi 6 Peta 4 Langkah 6 - slot gambar 1'),
  ('M6-P4-L6-2', 'https://placehold.co/405x270?text=M6+P4+L6+2', 'Materi 6 Peta 4 Langkah 6 - slot gambar 2'),
  ('M6-P4-L6-3', 'https://placehold.co/408x272?text=M6+P4+L6+3', 'Materi 6 Peta 4 Langkah 6 - slot gambar 3'),
  ('M6-P9-L5-3', 'https://placehold.co/687x601?text=M6+P9+L5+3', 'Materi 6 Peta 9 Langkah 5 - slot gambar 3')
on conflict (nama) do nothing;

commit;
