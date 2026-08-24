create table users (
  id uuid primary key default gen_random_uuid(),
  nama_lengkap text not null,
  email text not null unique,
  password text not null,
  kelas text not null,
  nama_sekolah text not null,
  sudah_baca_petunjuk boolean not null default false,
  role text not null default 'siswa' check (role in ('siswa', 'guru')),
  created_at timestamptz not null default now()
);

-- One row per user per step: tracks completion + the form data they submitted.
create table user_step_progress (
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

create index idx_user_step_progress_user_materi on user_step_progress (user_id, materi);

-- Display metadata for each materi (title/description shown on peta-belajar).
create table materi_meta (
  materi text primary key,
  judul text not null,
  deskripsi text,
  urutan int not null
);

insert into materi_meta (materi, judul, deskripsi, urutan)
values ('1', 'Kubus & Balok', 'Discovery Learning • Kegiatan Inti', 1);
