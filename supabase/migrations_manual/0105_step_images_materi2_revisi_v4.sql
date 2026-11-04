insert into page_images (nama, url)
values ('M2-P6-L1-6', 'https://placehold.co/1382x907?text=Siswa+Verifikasi')
on conflict (nama) do nothing;
