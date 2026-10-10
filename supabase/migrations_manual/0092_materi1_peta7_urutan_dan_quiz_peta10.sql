-- Run this in the Supabase SQL editor (once), AFTER deploying the code that restructures Materi 1.
-- 1) Peta 7 (Ayo Menyimpulkan) went from 11 steps to 8; the duplicated steps were removed and the rest reordered.
-- 2) Peta 10 is now Quiz and Rangkuman moved to peta 11 (Materi 1 only).
-- Existing student progress is remapped so completed steps stay completed.

begin;

-- Peta 7: drop rows of removed steps (old 5, 8, 9, and 10 -> becomes the new "Periksa Generalisasi")
delete from user_step_progress where materi = '1' and peta = '7' and step in ('5', '8', '9');

update user_step_progress
set step = (
  case step
    when '1'  then 1
    when '3'  then 2
    when '4'  then 3
    when '2'  then 4
    when '6'  then 5
    when '7'  then 6
    when '10' then 7
    when '11' then 8
  end
)::text
where materi = '1' and peta = '7' and step in ('1', '2', '3', '4', '6', '7', '10', '11');

-- Peta 10 (old Rangkuman) -> peta 11
update user_step_progress set peta = '11' where materi = '1' and peta = '10';

commit;
