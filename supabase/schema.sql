create table users (
  id uuid primary key default gen_random_uuid(),
  nama_lengkap text not null,
  email text not null unique,
  password text not null,
  kelas text not null,
  nama_sekolah text not null,
  created_at timestamptz not null default now()
);
