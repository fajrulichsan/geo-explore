-- Run this in the Supabase SQL editor (once), AFTER deploying the code that adds the Quiz to Materi 2-5.
-- Materi 2, 3, 4, 5: Peta 10 is now Quiz and Rangkuman moved to peta 11 (same layout as Materi 1).
-- Existing student progress is remapped so completed Rangkuman steps stay completed.

begin;

update user_step_progress set peta = '11' where materi in ('2', '3', '4', '5') and peta = '10';

commit;
