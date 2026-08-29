-- Shifts materi '1' peta numbers up by one (1..9 -> 2..10) to make room for
-- the new Peta 1 "Pendahuluan" step introduced in the app.
-- Must run in descending order to avoid violating the
-- unique(user_id, materi, peta, step) constraint.
-- Review before running against production data.

update user_step_progress set peta = '10' where materi = '1' and peta = '9';
update user_step_progress set peta = '9' where materi = '1' and peta = '8';
update user_step_progress set peta = '8' where materi = '1' and peta = '7';
update user_step_progress set peta = '7' where materi = '1' and peta = '6';
update user_step_progress set peta = '6' where materi = '1' and peta = '5';
update user_step_progress set peta = '5' where materi = '1' and peta = '4';
update user_step_progress set peta = '4' where materi = '1' and peta = '3';
update user_step_progress set peta = '3' where materi = '1' and peta = '2';
update user_step_progress set peta = '2' where materi = '1' and peta = '1';

-- Materi 2 (Jaring-Jaring) display metadata.
insert into materi_meta (materi, judul, deskripsi, urutan)
values ('2', 'Jaring-Jaring Bangun Ruang', 'Discovery Learning • Kegiatan Inti', 2)
on conflict (materi) do nothing;
