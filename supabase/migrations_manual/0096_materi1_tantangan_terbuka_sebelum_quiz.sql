-- Run this in the Supabase SQL editor (once), AFTER deploying the code of feedback v2 (Materi 1).
-- Materi 1: Peta 9 is now Tantangan Terbuka and Peta 10 is now Quiz (Rangkuman stays at peta 11).
-- Swap existing progress so completed steps stay completed.
-- (Replaced illustrations were uploaded through ?edit-foto=true, so no page_images change is needed.)

begin;

update user_step_progress set peta = 'tmp-swap' where materi = '1' and peta = '9';
update user_step_progress set peta = '9' where materi = '1' and peta = '10';
update user_step_progress set peta = '10' where materi = '1' and peta = 'tmp-swap';

commit;
