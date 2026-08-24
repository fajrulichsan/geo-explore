-- Run this in the Supabase SQL editor.
-- Adds: role on users, per-step progress+answers, and materi metadata.

alter table users
  add column if not exists role text not null default 'siswa'
    check (role in ('siswa', 'guru'));

create table if not exists user_step_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  materi text not null,
  peta text not null,
  step text not null,
  status text not null default 'belum' check (status in ('belum', 'selesai')),
  answers jsonb not null default '{}'::jsonb,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (user_id, materi, peta, step)
);

create index if not exists idx_user_step_progress_user_materi
  on user_step_progress (user_id, materi);

create table if not exists materi_meta (
  materi text primary key,
  judul text not null,
  deskripsi text,
  urutan int not null
);

insert into materi_meta (materi, judul, deskripsi, urutan)
values ('1', 'Kubus & Balok', 'Discovery Learning • Kegiatan Inti', 1)
on conflict (materi) do nothing;

-- Optional: promote an existing account to guru so you can reach the dashboard.
-- update users set role = 'guru' where email = 'guru@example.com';
