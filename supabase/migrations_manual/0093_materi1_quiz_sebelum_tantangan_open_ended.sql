-- Run this in the Supabase SQL editor (once), AFTER deploying the code that reorders Materi 1.
-- Materi 1: Peta 9 is now Quiz and Peta 10 is now Tantangan Open-Ended (Rangkuman stays at peta 11).
-- Swap existing progress so completed steps stay completed.

begin;

update user_step_progress set peta = 'tmp-swap' where materi = '1' and peta = '9';
update user_step_progress set peta = '9' where materi = '1' and peta = '10';
update user_step_progress set peta = '10' where materi = '1' and peta = 'tmp-swap';

commit;
