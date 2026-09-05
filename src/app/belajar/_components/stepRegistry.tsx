import type { ComponentType } from "react";
import Materi5Peta1Step1Pendahuluan from "./steps/Materi5Peta1/Materi5Peta1Step1Pendahuluan";
import Materi5Peta1Step2EksplorasiProses from "./steps/Materi5Peta1/Materi5Peta1Step2EksplorasiProses";
import Materi5Peta2Step1AyoMengamati from "./steps/Materi5Peta2/Materi5Peta2Step1AyoMengamati";
import Materi5Peta2Step2LuasSalahSatuSisi from "./steps/Materi5Peta2/Materi5Peta2Step2LuasSalahSatuSisi";
import Materi5Peta2Step3PertanyaanPengamatan from "./steps/Materi5Peta2/Materi5Peta2Step3PertanyaanPengamatan";
import Materi5Peta2Step4DugaanAwal from "./steps/Materi5Peta2/Materi5Peta2Step4DugaanAwal";
import Materi5Peta2Step5LanjutkanPengamatan from "./steps/Materi5Peta2/Materi5Peta2Step5LanjutkanPengamatan";
import Materi5Peta2Step6CariPersamaanPerbedaan from "./steps/Materi5Peta2/Materi5Peta2Step6CariPersamaanPerbedaan";
import Materi5Peta2Step7DugaanSementara from "./steps/Materi5Peta2/Materi5Peta2Step7DugaanSementara";
import Materi5Peta2Step8PertanyaanPemantik from "./steps/Materi5Peta2/Materi5Peta2Step8PertanyaanPemantik";
import Materi5Peta2Step9RefleksiSingkat from "./steps/Materi5Peta2/Materi5Peta2Step9RefleksiSingkat";
import Peta1Step1Pendahuluan from "./steps/Peta1/Peta1Step1Pendahuluan";
import Peta1Step2TujuanPersiapan from "./steps/Peta1/Peta1Step2TujuanPersiapan";
import Peta2Step1Amati from "./steps/Peta2/Peta2Step1Amati";
import Peta2Step2Berpikir from "./steps/Peta2/Peta2Step2Berpikir";
import Peta2Step3IdeAwalku from "./steps/Peta2/Peta2Step3IdeAwalku";
import Peta2Step4AmatiMedia from "./steps/Peta2/Peta2Step4AmatiMedia";
import Peta2Step5PilihMedia from "./steps/Peta2/Peta2Step5PilihMedia";
import Peta2Step6TemukanPenuntun from "./steps/Peta2/Peta2Step6TemukanPenuntun";
import Peta2Step7SiapBerdiskusi from "./steps/Peta2/Peta2Step7SiapBerdiskusi";
import Peta3Step1Pengelompokan from "./steps/Peta3/Peta3Step1Pengelompokan";
import Peta3Step2BandingkanDugaan from "./steps/Peta3/Peta3Step2BandingkanDugaan";
import Peta3Step3PertanyaanDiskusi from "./steps/Peta3/Peta3Step3PertanyaanDiskusi";
import Peta3Step4RumusanMasalah from "./steps/Peta3/Peta3Step4RumusanMasalah";
import Peta3Step5MenyiapkanEksplorasi from "./steps/Peta3/Peta3Step5MenyiapkanEksplorasi";
import Peta3Step6DugaanKelompokku from "./steps/Peta3/Peta3Step6DugaanKelompokku";
import Peta3Step7CatatanHasilDiskusi from "./steps/Peta3/Peta3Step7CatatanHasilDiskusi";
import Peta3Step8BersiapKeTahapBerikutnya from "./steps/Peta3/Peta3Step8BersiapKeTahapBerikutnya";
import Peta4Step1MengingatDugaan from "./steps/Peta4/Peta4Step1MengingatDugaan";
import Peta4Step2PilihBangunRuang from "./steps/Peta4/Peta4Step2PilihBangunRuang";
import Peta4Step3EksplorasiGeoGebra from "./steps/Peta4/Peta4Step3EksplorasiGeoGebra";
import Peta4Step4TabelPengamatan from "./steps/Peta4/Peta4Step4TabelPengamatan";
import Peta4Step5TemuanPersiapanAR from "./steps/Peta4/Peta4Step5TemuanPersiapanAR";
import Peta4Step6MengeksplorasiAR from "./steps/Peta4/Peta4Step6MengeksplorasiAR";
import Peta4Step7TabelPengamatanAR from "./steps/Peta4/Peta4Step7TabelPengamatanAR";
import Peta4Step8CatatanHasilEksplorasi from "./steps/Peta4/Peta4Step8CatatanHasilEksplorasi";
import Peta4Step9BersiapTahapBerikutnya from "./steps/Peta4/Peta4Step9BersiapTahapBerikutnya";
import Peta4Step10CatatanPribadi from "./steps/Peta4/Peta4Step10CatatanPribadi";
import Peta5Step1TinjauKembaliData from "./steps/Peta5/Peta5Step1TinjauKembaliData";
import Peta5Step2OrganisasikanData from "./steps/Peta5/Peta5Step2OrganisasikanData";
import Peta5Step3TemuanEksplorasi from "./steps/Peta5/Peta5Step3TemuanEksplorasi";
import Peta5Step4TemukanPolanya from "./steps/Peta5/Peta5Step4TemukanPolanya";
import Peta5Step5SiapKlasifikasi from "./steps/Peta5/Peta5Step5SiapKlasifikasi";
import Peta5Step6BandingkanKelompok from "./steps/Peta5/Peta5Step6BandingkanKelompok";
import Peta5Step7PolaKlasifikasiStrategi from "./steps/Peta5/Peta5Step7PolaKlasifikasiStrategi";
import Peta5Step8EvaluasiHasilSementara from "./steps/Peta5/Peta5Step8EvaluasiHasilSementara";
import Peta10Step1BentukBangunRuang from "./steps/Peta10/Peta10Step1BentukBangunRuang";
import Peta10Step2DasarKlasifikasi from "./steps/Peta10/Peta10Step2DasarKlasifikasi";
import Peta10Step3HubunganKonsep from "./steps/Peta10/Peta10Step3HubunganKonsep";
import Peta10Step4KataKunci from "./steps/Peta10/Peta10Step4KataKunci";
import Peta10Step5BekalMotivasi from "./steps/Peta10/Peta10Step5BekalMotivasi";
import Materi5Peta6Step1VerifikasiGeoGebraAR from "./steps/Materi5Peta6/Materi5Peta6Step1VerifikasiGeoGebraAR";
import Materi5Peta6Step2Bandingkan from "./steps/Materi5Peta6/Materi5Peta6Step2Bandingkan";
import Materi5Peta6Step3UjiHubunganAlasan from "./steps/Materi5Peta6/Materi5Peta6Step3UjiHubunganAlasan";
import Materi5Peta6Step4PerbaikiRefleksi from "./steps/Materi5Peta6/Materi5Peta6Step4PerbaikiRefleksi";
import Peta6Step1PeriksaKembali from "./steps/Peta6/Peta6Step1PeriksaKembali";
import Peta6Step2Bandingkan from "./steps/Peta6/Peta6Step2Bandingkan";
import Peta6Step3RevisiDugaan from "./steps/Peta6/Peta6Step3RevisiDugaan";
import Peta6Step4EvaluasiVerifikasi from "./steps/Peta6/Peta6Step4EvaluasiVerifikasi";
import Peta6Step5HasilVerifikasi from "./steps/Peta6/Peta6Step5HasilVerifikasi";
import Peta6Step6SiapTahapBerikutnya from "./steps/Peta6/Peta6Step6SiapTahapBerikutnya";
import Peta7Step1TinjauVerifikasi from "./steps/Peta7/Peta7Step1TinjauVerifikasi";
import Peta7Step2LengkapiKesimpulan from "./steps/Peta7/Peta7Step2LengkapiKesimpulan";
import Peta7Step3HubungkanDasarPengelompokan from "./steps/Peta7/Peta7Step3HubungkanDasarPengelompokan";
import Peta7Step4PertanyaanGeneralisasi from "./steps/Peta7/Peta7Step4PertanyaanGeneralisasi";
import Peta7Step5SiapkanGeneralisasi from "./steps/Peta7/Peta7Step5SiapkanGeneralisasi";
import Peta7Step6GeneralisasiAkhir from "./steps/Peta7/Peta7Step6GeneralisasiAkhir";
import Peta9Step1MengelompokkanBangunRuang from "./steps/Peta9/Peta9Step1MengelompokkanBangunRuang";
import Peta9Step2SatuBangunBanyakKelompok from "./steps/Peta9/Peta9Step2SatuBangunBanyakKelompok";
import Peta9Step3MenemukanCaraBaru from "./steps/Peta9/Peta9Step3MenemukanCaraBaru";
import Peta9Step4MembandingkanStrategi from "./steps/Peta9/Peta9Step4MembandingkanStrategi";
import Peta9Step5MemilihStrategi from "./steps/Peta9/Peta9Step5MemilihStrategi";
import Peta9Step6MenemukanPrinsipUmum from "./steps/Peta9/Peta9Step6MenemukanPrinsipUmum";
import Peta8Step1RefleksiPemahaman from "./steps/Peta8/Peta8Step1RefleksiPemahaman";
import Peta8Step2RefleksiPengalaman from "./steps/Peta8/Peta8Step2RefleksiPengalaman";
import Peta8Step3KeyakinanDiriku from "./steps/Peta8/Peta8Step3KeyakinanDiriku";
import Peta8Step4KotakMotivasi from "./steps/Peta8/Peta8Step4KotakMotivasi";
import Materi2Peta1Step1Pendahuluan from "./steps/Materi2Peta1/Materi2Peta1Step1Pendahuluan";
import Materi2Peta1Step2EksplorasiProses from "./steps/Materi2Peta1/Materi2Peta1Step2EksplorasiProses";
import Materi2Peta2Step1Amati from "./steps/Materi2Peta2/Materi2Peta2Step1Amati";
import Materi2Peta2Step2Berpikir from "./steps/Materi2Peta2/Materi2Peta2Step2Berpikir";
import Materi2Peta2Step3DugaanAwal from "./steps/Materi2Peta2/Materi2Peta2Step3DugaanAwal";
import Materi2Peta2Step4LanjutkanPengamatan from "./steps/Materi2Peta2/Materi2Peta2Step4LanjutkanPengamatan";
import Materi2Peta2Step5PersamaanPerbedaan from "./steps/Materi2Peta2/Materi2Peta2Step5PersamaanPerbedaan";
import Materi2Peta2Step6PemantikRefleksi from "./steps/Materi2Peta2/Materi2Peta2Step6PemantikRefleksi";
import Materi2Peta3Step1BagikanPersamaan from "./steps/Materi2Peta3/Materi2Peta3Step1BagikanPersamaan";
import Materi2Peta3Step2DiskusikanBersama from "./steps/Materi2Peta3/Materi2Peta3Step2DiskusikanBersama";
import Materi2Peta3Step3DugaanKelompok from "./steps/Materi2Peta3/Materi2Peta3Step3DugaanKelompok";
import Materi2Peta3Step4PertanyaanRumusan from "./steps/Materi2Peta3/Materi2Peta3Step4PertanyaanRumusan";
import Materi2Peta3Step5PrediksiAspek from "./steps/Materi2Peta3/Materi2Peta3Step5PrediksiAspek";
import Materi2Peta3Step6PersiapanRefleksi from "./steps/Materi2Peta3/Materi2Peta3Step6PersiapanRefleksi";
import Materi2Peta3Step7KotakMotivasi from "./steps/Materi2Peta3/Materi2Peta3Step7KotakMotivasi";
import Materi2Peta5Step1BandingkanHasil from "./steps/Materi2Peta5/Materi2Peta5Step1BandingkanHasil";
import Materi2Peta5Step2KelompokkanInformasi from "./steps/Materi2Peta5/Materi2Peta5Step2KelompokkanInformasi";
import Materi2Peta5Step3HubunganKlasifikasi from "./steps/Materi2Peta5/Materi2Peta5Step3HubunganKlasifikasi";
import Materi2Peta5Step4DugaanKelompok from "./steps/Materi2Peta5/Materi2Peta5Step4DugaanKelompok";
import Materi2Peta5Step5RefleksiSingkat from "./steps/Materi2Peta5/Materi2Peta5Step5RefleksiSingkat";
import Materi2Peta4Step1Eksplorasi from "./steps/Materi2Peta4/Materi2Peta4Step1Eksplorasi";
import Materi2Peta4Step2TabelPengamatan from "./steps/Materi2Peta4/Materi2Peta4Step2TabelPengamatan";
import Materi2Peta4Step3TemuanEksplorasi from "./steps/Materi2Peta4/Materi2Peta4Step3TemuanEksplorasi";
import Materi2Peta4Step4RefleksiSingkat from "./steps/Materi2Peta4/Materi2Peta4Step4RefleksiSingkat";
import Materi2Peta6Step1VerifikasiGeoGebraAR from "./steps/Materi2Peta6/Materi2Peta6Step1VerifikasiGeoGebraAR";
import Materi2Peta6Step2HasilPerbandingan from "./steps/Materi2Peta6/Materi2Peta6Step2HasilPerbandingan";
import Materi2Peta6Step3RevisiRefleksi from "./steps/Materi2Peta6/Materi2Peta6Step3RevisiRefleksi";
import Materi2Peta7Step1KesimpulanGeneralisasi from "./steps/Materi2Peta7/Materi2Peta7Step1KesimpulanGeneralisasi";
import Materi2Peta7Step2PernyataanUmum from "./steps/Materi2Peta7/Materi2Peta7Step2PernyataanUmum";
import Materi2Peta7Step3IngatKembali from "./steps/Materi2Peta7/Materi2Peta7Step3IngatKembali";
import Materi2Peta7Step4RefleksiMotivasi from "./steps/Materi2Peta7/Materi2Peta7Step4RefleksiMotivasi";
import Materi2Peta7Step5Rangkuman from "./steps/Materi2Peta7/Materi2Peta7Step5Rangkuman";
import Materi2Peta8Step1RefleksiPemahamanPengalaman from "./steps/Materi2Peta8/Materi2Peta8Step1RefleksiPemahamanPengalaman";
import Materi2Peta8Step2KeyakinanBerpikir from "./steps/Materi2Peta8/Materi2Peta8Step2KeyakinanBerpikir";
import Materi2Peta8Step3SikapTarget from "./steps/Materi2Peta8/Materi2Peta8Step3SikapTarget";
import Materi2Peta10Step1RangkumanKonsep from "./steps/Materi2Peta10/Materi2Peta10Step1RangkumanKonsep";
import Materi2Peta10Step2PetaKonsepPenutup from "./steps/Materi2Peta10/Materi2Peta10Step2PetaKonsepPenutup";
import Materi3Peta1Step1Pendahuluan from "./steps/Materi3Peta1/Materi3Peta1Step1Pendahuluan";
import Materi3Peta1Step2EksplorasiProses from "./steps/Materi3Peta1/Materi3Peta1Step2EksplorasiProses";
import Materi3Peta2Step1AmatiJaringJaring from "./steps/Materi3Peta2/Materi3Peta2Step1AmatiJaringJaring";
import Materi3Peta2Step2PertanyaanPengamatan from "./steps/Materi3Peta2/Materi3Peta2Step2PertanyaanPengamatan";
import Materi3Peta2Step3DugaanAwal from "./steps/Materi3Peta2/Materi3Peta2Step3DugaanAwal";
import Materi3Peta2Step4UkuranSisi from "./steps/Materi3Peta2/Materi3Peta2Step4UkuranSisi";
import Materi3Peta2Step5CariPolaPemantik from "./steps/Materi3Peta2/Materi3Peta2Step5CariPolaPemantik";
import Materi3Peta2Step6DugaanSementaraRefleksi from "./steps/Materi3Peta2/Materi3Peta2Step6DugaanSementaraRefleksi";
import Materi3Peta4Step1Pendahuluan from "./steps/Materi3Peta4/Materi3Peta4Step1Pendahuluan";
import Materi3Peta4Step2GeoGebra3D from "./steps/Materi3Peta4/Materi3Peta4Step2GeoGebra3D";
import Materi3Peta4Step3AugmentedReality from "./steps/Materi3Peta4/Materi3Peta4Step3AugmentedReality";
import Materi3Peta4Step4CatatanHasil from "./steps/Materi3Peta4/Materi3Peta4Step4CatatanHasil";
import Materi3Peta4Step5RingkasPengamatan from "./steps/Materi3Peta4/Materi3Peta4Step5RingkasPengamatan";
import Materi3Peta4Step6PeriksaKelengkapan from "./steps/Materi3Peta4/Materi3Peta4Step6PeriksaKelengkapan";
import Materi3Peta4Step7TemuanSementara from "./steps/Materi3Peta4/Materi3Peta4Step7TemuanSementara";
import Materi3Peta4Step8RefleksiEksplorasi from "./steps/Materi3Peta4/Materi3Peta4Step8RefleksiEksplorasi";
import Materi3Peta5Step1MengelompokkanData from "./steps/Materi3Peta5/Materi3Peta5Step1MengelompokkanData";
import Materi3Peta5Step2HitungLuasSisi from "./steps/Materi3Peta5/Materi3Peta5Step2HitungLuasSisi";
import Materi3Peta5Step3CariPolaRefleksi from "./steps/Materi3Peta5/Materi3Peta5Step3CariPolaRefleksi";
import Materi3Peta5Step4MenemukanStrategi from "./steps/Materi3Peta5/Materi3Peta5Step4MenemukanStrategi";
import Materi3Peta5Step5RumusSementara from "./steps/Materi3Peta5/Materi3Peta5Step5RumusSementara";
import Materi3Peta5Step6RefleksiSingkat from "./steps/Materi3Peta5/Materi3Peta5Step6RefleksiSingkat";
import Materi3Peta9Step1MasalahDanStrategi from "./steps/Materi3Peta9/Materi3Peta9Step1MasalahDanStrategi";
import Materi3Peta9Step2BandingkanStrategi from "./steps/Materi3Peta9/Materi3Peta9Step2BandingkanStrategi";
import Materi3Peta9Step3AlasanDanTransfer from "./steps/Materi3Peta9/Materi3Peta9Step3AlasanDanTransfer";
import Materi3Peta9Step4RefleksiSingkat from "./steps/Materi3Peta9/Materi3Peta9Step4RefleksiSingkat";
import Materi2Peta9Step1MasalahOpenEnded from "./steps/Materi2Peta9/Materi2Peta9Step1MasalahOpenEnded";
import Materi2Peta9Step2BuatIdemu from "./steps/Materi2Peta9/Materi2Peta9Step2BuatIdemu";
import Materi2Peta9Step3StrategiPola from "./steps/Materi2Peta9/Materi2Peta9Step3StrategiPola";
import Materi2Peta9Step4BandingkanRefleksi from "./steps/Materi2Peta9/Materi2Peta9Step4BandingkanRefleksi";
import Materi3Peta7Step1Kesimpulan from "./steps/Materi3Peta7/Materi3Peta7Step1Kesimpulan";
import Materi3Peta7Step2KesimpulanKelompok from "./steps/Materi3Peta7/Materi3Peta7Step2KesimpulanKelompok";
import Materi3Peta6Step1VerifikasiGeoGebraAR from "./steps/Materi3Peta6/Materi3Peta6Step1VerifikasiGeoGebraAR";
import Materi3Peta6Step2Bandingkan from "./steps/Materi3Peta6/Materi3Peta6Step2Bandingkan";
import Materi3Peta6Step3RevisiHasilRefleksi from "./steps/Materi3Peta6/Materi3Peta6Step3RevisiHasilRefleksi";
import Materi4Peta6Step1VerifikasiGeoGebraAR from "./steps/Materi4Peta6/Materi4Peta6Step1VerifikasiGeoGebraAR";
import Materi4Peta6Step2Bandingkan from "./steps/Materi4Peta6/Materi4Peta6Step2Bandingkan";
import Materi4Peta6Step3RevisiHasilVerifikasi from "./steps/Materi4Peta6/Materi4Peta6Step3RevisiHasilVerifikasi";
import Materi4Peta6Step4RefleksiVerifikasi from "./steps/Materi4Peta6/Materi4Peta6Step4RefleksiVerifikasi";
import Materi3Peta10Step1KonsepDasar from "./steps/Materi3Peta10/Materi3Peta10Step1KonsepDasar";
import Materi3Peta10Step2RumusLuasPermukaan from "./steps/Materi3Peta10/Materi3Peta10Step2RumusLuasPermukaan";
import Materi3Peta10Step3LangkahDanStrategi from "./steps/Materi3Peta10/Materi3Peta10Step3LangkahDanStrategi";
import Materi3Peta10Step4PetaKonsepPenutup from "./steps/Materi3Peta10/Materi3Peta10Step4PetaKonsepPenutup";
import Materi3Peta3Step1DiskusikanBersama from "./steps/Materi3Peta3/Materi3Peta3Step1DiskusikanBersama";
import Materi3Peta3Step2DugaanKelompok from "./steps/Materi3Peta3/Materi3Peta3Step2DugaanKelompok";
import Materi3Peta3Step3BandingkanPendapat from "./steps/Materi3Peta3/Materi3Peta3Step3BandingkanPendapat";
import Materi3Peta3Step4DugaanSementara from "./steps/Materi3Peta3/Materi3Peta3Step4DugaanSementara";
import Materi3Peta3Step5DugaanUntukDiuji from "./steps/Materi3Peta3/Materi3Peta3Step5DugaanUntukDiuji";
import Materi3Peta3Step6RefleksiDiskusi from "./steps/Materi3Peta3/Materi3Peta3Step6RefleksiDiskusi";
import Materi3Peta8Step1RefleksiPemahaman from "./steps/Materi3Peta8/Materi3Peta8Step1RefleksiPemahaman";
import Materi3Peta8Step2RefleksiPengalaman from "./steps/Materi3Peta8/Materi3Peta8Step2RefleksiPengalaman";
import Materi3Peta8Step3KeyakinanDiriku from "./steps/Materi3Peta8/Materi3Peta8Step3KeyakinanDiriku";
import Materi3Peta8Step4RefleksiPenalaran from "./steps/Materi3Peta8/Materi3Peta8Step4RefleksiPenalaran";
import Materi3Peta8Step5PesanUntukDiriku from "./steps/Materi3Peta8/Materi3Peta8Step5PesanUntukDiriku";
import Materi5Peta8Step1RefleksiPemahaman from "./steps/Materi5Peta8/Materi5Peta8Step1RefleksiPemahaman";
import Materi5Peta8Step2RefleksiPengalaman from "./steps/Materi5Peta8/Materi5Peta8Step2RefleksiPengalaman";
import Materi5Peta8Step3KeyakinanDiriku from "./steps/Materi5Peta8/Materi5Peta8Step3KeyakinanDiriku";
import Materi5Peta8Step4RefleksiCaraBerpikirku from "./steps/Materi5Peta8/Materi5Peta8Step4RefleksiCaraBerpikirku";
import Materi5Peta8Step5PesanDanTarget from "./steps/Materi5Peta8/Materi5Peta8Step5PesanDanTarget";
import Materi4Peta10Step1KonsepDasar from "./steps/Materi4Peta10/Materi4Peta10Step1KonsepDasar";
import Materi4Peta10Step2RumusLuasPermukaan from "./steps/Materi4Peta10/Materi4Peta10Step2RumusLuasPermukaan";
import Materi4Peta10Step3StrategiPenutup from "./steps/Materi4Peta10/Materi4Peta10Step3StrategiPenutup";
import Materi4Peta1Step1Pendahuluan from "./steps/Materi4Peta1/Materi4Peta1Step1Pendahuluan";
import Materi4Peta2Step1AmatiBangunRuang from "./steps/Materi4Peta2/Materi4Peta2Step1AmatiBangunRuang";
import Materi4Peta2Step2PertanyaanPengamatan from "./steps/Materi4Peta2/Materi4Peta2Step2PertanyaanPengamatan";
import Materi4Peta2Step3LanjutkanPengamatan from "./steps/Materi4Peta2/Materi4Peta2Step3LanjutkanPengamatan";
import Materi4Peta2Step4TabelHasilPengamatan from "./steps/Materi4Peta2/Materi4Peta2Step4TabelHasilPengamatan";
import Materi4Peta2Step5PertanyaanPemantik from "./steps/Materi4Peta2/Materi4Peta2Step5PertanyaanPemantik";
import Materi4Peta2Step6RefleksiSingkat from "./steps/Materi4Peta2/Materi4Peta2Step6RefleksiSingkat";
import Materi4Peta3Step1DiskusikanBersama from "./steps/Materi4Peta3/Materi4Peta3Step1DiskusikanBersama";
import Materi4Peta3Step2PertanyaanDugaan from "./steps/Materi4Peta3/Materi4Peta3Step2PertanyaanDugaan";
import Materi4Peta3Step3BandingkanHasil from "./steps/Materi4Peta3/Materi4Peta3Step3BandingkanHasil";
import Materi4Peta3Step4HipotesisKelompok from "./steps/Materi4Peta3/Materi4Peta3Step4HipotesisKelompok";
import Materi4Peta3Step5PersiapanRefleksi from "./steps/Materi4Peta3/Materi4Peta3Step5PersiapanRefleksi";
import Materi4Peta4Step1Pendahuluan from "./steps/Materi4Peta4/Materi4Peta4Step1Pendahuluan";
import Materi4Peta4Step2EksplorasiGeoGebra from "./steps/Materi4Peta4/Materi4Peta4Step2EksplorasiGeoGebra";
import Materi4Peta4Step3EksplorasiAR from "./steps/Materi4Peta4/Materi4Peta4Step3EksplorasiAR";
import Materi4Peta4Step4RingkasPengamatan from "./steps/Materi4Peta4/Materi4Peta4Step4RingkasPengamatan";
import Materi4Peta4Step5KeterkaitanAwal from "./steps/Materi4Peta4/Materi4Peta4Step5KeterkaitanAwal";
import Materi4Peta4Step6DugaanRefleksi from "./steps/Materi4Peta4/Materi4Peta4Step6DugaanRefleksi";
import Materi4Peta7Step1ApaYangKamuTemukan from "./steps/Materi4Peta7/Materi4Peta7Step1ApaYangKamuTemukan";
import Materi4Peta7Step2RumusUmum from "./steps/Materi4Peta7/Materi4Peta7Step2RumusUmum";
import Materi4Peta7Step3ContohPenerapan from "./steps/Materi4Peta7/Materi4Peta7Step3ContohPenerapan";
import Materi4Peta7Step4MengapaRumusBenar from "./steps/Materi4Peta7/Materi4Peta7Step4MengapaRumusBenar";
import Materi4Peta7Step5KesimpulanDanBandingkan from "./steps/Materi4Peta7/Materi4Peta7Step5KesimpulanDanBandingkan";
import Materi4Peta7Step6PeneguhanGeneralisasi from "./steps/Materi4Peta7/Materi4Peta7Step6PeneguhanGeneralisasi";
import Materi4Peta7Step7RefleksiDanPesan from "./steps/Materi4Peta7/Materi4Peta7Step7RefleksiDanPesan";
import Materi4Peta5Step1MengelompokkanData from "./steps/Materi4Peta5/Materi4Peta5Step1MengelompokkanData";
import Materi4Peta5Step2HitungLuasSisi from "./steps/Materi4Peta5/Materi4Peta5Step2HitungLuasSisi";
import Materi4Peta5Step3CariPola from "./steps/Materi4Peta5/Materi4Peta5Step3CariPola";
import Materi4Peta5Step4MenemukanStrategi from "./steps/Materi4Peta5/Materi4Peta5Step4MenemukanStrategi";
import Materi4Peta5Step5RumusSementara from "./steps/Materi4Peta5/Materi4Peta5Step5RumusSementara";
import Materi4Peta5Step6RefleksiSingkat from "./steps/Materi4Peta5/Materi4Peta5Step6RefleksiSingkat";
import Materi4Peta8Step1PemahamanMateri from "./steps/Materi4Peta8/Materi4Peta8Step1PemahamanMateri";
import Materi4Peta8Step2ProsesBelajarku from "./steps/Materi4Peta8/Materi4Peta8Step2ProsesBelajarku";
import Materi4Peta8Step3KeyakinanDiriku from "./steps/Materi4Peta8/Materi4Peta8Step3KeyakinanDiriku";
import Materi4Peta8Step4KesanDanSaran from "./steps/Materi4Peta8/Materi4Peta8Step4KesanDanSaran";
import Materi4Peta9Step1MasalahDanStrategi from "./steps/Materi4Peta9/Materi4Peta9Step1MasalahDanStrategi";
import Materi4Peta9Step2BandingkanStrategi from "./steps/Materi4Peta9/Materi4Peta9Step2BandingkanStrategi";
import Materi4Peta9Step3AlasanDanTransfer from "./steps/Materi4Peta9/Materi4Peta9Step3AlasanDanTransfer";
import Materi4Peta9Step4RefleksiSingkat from "./steps/Materi4Peta9/Materi4Peta9Step4RefleksiSingkat";
import Materi5Peta3Step1BandingkanRumuskan from "./steps/Materi5Peta3/Materi5Peta3Step1BandingkanRumuskan";
import Materi5Peta3Step2DugaanAwal from "./steps/Materi5Peta3/Materi5Peta3Step2DugaanAwal";
import Materi5Peta3Step3BandingkanDugaanKelompok from "./steps/Materi5Peta3/Materi5Peta3Step3BandingkanDugaanKelompok";
import Materi5Peta3Step4HipotesisRefleksi from "./steps/Materi5Peta3/Materi5Peta3Step4HipotesisRefleksi";
import Materi5Peta4Step1Pendahuluan from "./steps/Materi5Peta4/Materi5Peta4Step1Pendahuluan";
import Materi5Peta4Step2EksplorasiGeoGebra from "./steps/Materi5Peta4/Materi5Peta4Step2EksplorasiGeoGebra";
import Materi5Peta4Step3EksplorasiAR from "./steps/Materi5Peta4/Materi5Peta4Step3EksplorasiAR";
import Materi5Peta4Step4CatatanKelompok from "./steps/Materi5Peta4/Materi5Peta4Step4CatatanKelompok";
import Materi5Peta4Step5PertanyaanEksplorasi from "./steps/Materi5Peta4/Materi5Peta4Step5PertanyaanEksplorasi";
import Materi5Peta4Step6RefleksiData from "./steps/Materi5Peta4/Materi5Peta4Step6RefleksiData";
import Materi5Peta10Step1KonsepDasar from "./steps/Materi5Peta10/Materi5Peta10Step1KonsepDasar";
import Materi5Peta10Step2HubunganMengapa from "./steps/Materi5Peta10/Materi5Peta10Step2HubunganMengapa";
import Materi5Peta10Step3LangkahDanStrategi from "./steps/Materi5Peta10/Materi5Peta10Step3LangkahDanStrategi";
import Materi5Peta10Step4PetaKonsepPenutup from "./steps/Materi5Peta10/Materi5Peta10Step4PetaKonsepPenutup";
import Materi5Peta5Step1MengelompokkanData from "./steps/Materi5Peta5/Materi5Peta5Step1MengelompokkanData";
import Materi5Peta5Step2BandingkanPerubahan from "./steps/Materi5Peta5/Materi5Peta5Step2BandingkanPerubahan";
import Materi5Peta5Step3CariPola from "./steps/Materi5Peta5/Materi5Peta5Step3CariPola";
import Materi5Peta5Step4MenemukanStrategi from "./steps/Materi5Peta5/Materi5Peta5Step4MenemukanStrategi";
import Materi5Peta5Step5HubunganMatematika from "./steps/Materi5Peta5/Materi5Peta5Step5HubunganMatematika";
import Materi5Peta5Step6RefleksiSingkat from "./steps/Materi5Peta5/Materi5Peta5Step6RefleksiSingkat";
import Materi5Peta9Step1MasalahDanStrategi from "./steps/Materi5Peta9/Materi5Peta9Step1MasalahDanStrategi";
import Materi5Peta9Step2BandingkanStrategi from "./steps/Materi5Peta9/Materi5Peta9Step2BandingkanStrategi";
import Materi5Peta9Step3AlasanDanTransfer from "./steps/Materi5Peta9/Materi5Peta9Step3AlasanDanTransfer";
import Materi5Peta9Step4RefleksiSingkat from "./steps/Materi5Peta9/Materi5Peta9Step4RefleksiSingkat";
import Materi5Peta7Step1ApaYangKamuTemukan from "./steps/Materi5Peta7/Materi5Peta7Step1ApaYangKamuTemukan";
import Materi5Peta7Step2HubunganSkalaLuas from "./steps/Materi5Peta7/Materi5Peta7Step2HubunganSkalaLuas";
import Materi5Peta7Step3AturanUmum from "./steps/Materi5Peta7/Materi5Peta7Step3AturanUmum";
import Materi5Peta7Step4MengapaAturanBenar from "./steps/Materi5Peta7/Materi5Peta7Step4MengapaAturanBenar";
import Materi5Peta7Step5KesimpulanDanBandingkan from "./steps/Materi5Peta7/Materi5Peta7Step5KesimpulanDanBandingkan";
import Materi5Peta7Step6GeneralisasiIntiKonsep from "./steps/Materi5Peta7/Materi5Peta7Step6GeneralisasiIntiKonsep";

export type StepComponentProps = {
  materi: string;
  peta: string;
  step?: string;
  editFoto?: boolean;
  initialAnswers?: Record<string, unknown>;
};

export const stepRegistry: Record<string, ComponentType<StepComponentProps>> = {
  "1-1-1": Peta1Step1Pendahuluan,
  "1-1-2": Peta1Step2TujuanPersiapan,
  "1-2-1": Peta2Step1Amati,
  "1-2-2": Peta2Step2Berpikir,
  "1-2-3": Peta2Step3IdeAwalku,
  "1-2-4": Peta2Step4AmatiMedia,
  "1-2-5": Peta2Step5PilihMedia,
  "1-2-6": Peta2Step6TemukanPenuntun,
  "1-2-7": Peta2Step7SiapBerdiskusi,
  "1-3-1": Peta3Step1Pengelompokan,
  "1-3-2": Peta3Step2BandingkanDugaan,
  "1-3-3": Peta3Step3PertanyaanDiskusi,
  "1-3-4": Peta3Step4RumusanMasalah,
  "1-3-5": Peta3Step5MenyiapkanEksplorasi,
  "1-3-6": Peta3Step6DugaanKelompokku,
  "1-3-7": Peta3Step7CatatanHasilDiskusi,
  "1-3-8": Peta3Step8BersiapKeTahapBerikutnya,
  "1-4-1": Peta4Step1MengingatDugaan,
  "1-4-2": Peta4Step2PilihBangunRuang,
  "1-4-3": Peta4Step3EksplorasiGeoGebra,
  "1-4-4": Peta4Step4TabelPengamatan,
  "1-4-5": Peta4Step5TemuanPersiapanAR,
  "1-4-6": Peta4Step6MengeksplorasiAR,
  "1-4-7": Peta4Step7TabelPengamatanAR,
  "1-4-8": Peta4Step8CatatanHasilEksplorasi,
  "1-4-9": Peta4Step9BersiapTahapBerikutnya,
  "1-4-10": Peta4Step10CatatanPribadi,
  "1-5-1": Peta5Step1TinjauKembaliData,
  "1-5-2": Peta5Step2OrganisasikanData,
  "1-5-3": Peta5Step3TemuanEksplorasi,
  "1-5-4": Peta5Step4TemukanPolanya,
  "1-5-5": Peta5Step5SiapKlasifikasi,
  "1-5-6": Peta5Step6BandingkanKelompok,
  "1-5-7": Peta5Step7PolaKlasifikasiStrategi,
  "1-5-8": Peta5Step8EvaluasiHasilSementara,
  "1-6-1": Peta6Step1PeriksaKembali,
  "1-6-2": Peta6Step2Bandingkan,
  "1-6-3": Peta6Step3RevisiDugaan,
  "1-6-4": Peta6Step4EvaluasiVerifikasi,
  "1-6-5": Peta6Step5HasilVerifikasi,
  "1-6-6": Peta6Step6SiapTahapBerikutnya,
  "1-7-1": Peta7Step1TinjauVerifikasi,
  "1-7-2": Peta7Step2LengkapiKesimpulan,
  "1-7-3": Peta7Step3HubungkanDasarPengelompokan,
  "1-7-4": Peta7Step4PertanyaanGeneralisasi,
  "1-7-5": Peta7Step5SiapkanGeneralisasi,
  "1-7-6": Peta7Step6GeneralisasiAkhir,
  "1-8-1": Peta8Step1RefleksiPemahaman,
  "1-8-2": Peta8Step2RefleksiPengalaman,
  "1-8-3": Peta8Step3KeyakinanDiriku,
  "1-8-4": Peta8Step4KotakMotivasi,
  "1-9-1": Peta9Step1MengelompokkanBangunRuang,
  "1-9-2": Peta9Step2SatuBangunBanyakKelompok,
  "1-9-3": Peta9Step3MenemukanCaraBaru,
  "1-9-4": Peta9Step4MembandingkanStrategi,
  "1-9-5": Peta9Step5MemilihStrategi,
  "1-9-6": Peta9Step6MenemukanPrinsipUmum,
  "1-10-1": Peta10Step1BentukBangunRuang,
  "1-10-2": Peta10Step2DasarKlasifikasi,
  "1-10-3": Peta10Step3HubunganKonsep,
  "1-10-4": Peta10Step4KataKunci,
  "1-10-5": Peta10Step5BekalMotivasi,
  "2-1-1": Materi2Peta1Step1Pendahuluan,
  "2-1-2": Materi2Peta1Step2EksplorasiProses,
  "2-2-1": Materi2Peta2Step1Amati,
  "2-2-2": Materi2Peta2Step2Berpikir,
  "2-2-3": Materi2Peta2Step3DugaanAwal,
  "2-2-4": Materi2Peta2Step4LanjutkanPengamatan,
  "2-2-5": Materi2Peta2Step5PersamaanPerbedaan,
  "2-2-6": Materi2Peta2Step6PemantikRefleksi,
  "2-3-1": Materi2Peta3Step1BagikanPersamaan,
  "2-3-2": Materi2Peta3Step2DiskusikanBersama,
  "2-3-3": Materi2Peta3Step3DugaanKelompok,
  "2-3-4": Materi2Peta3Step4PertanyaanRumusan,
  "2-3-5": Materi2Peta3Step5PrediksiAspek,
  "2-3-6": Materi2Peta3Step6PersiapanRefleksi,
  "2-3-7": Materi2Peta3Step7KotakMotivasi,
  "2-4-1": Materi2Peta4Step1Eksplorasi,
  "2-4-2": Materi2Peta4Step2TabelPengamatan,
  "2-4-3": Materi2Peta4Step3TemuanEksplorasi,
  "2-4-4": Materi2Peta4Step4RefleksiSingkat,
  "2-5-1": Materi2Peta5Step1BandingkanHasil,
  "2-5-2": Materi2Peta5Step2KelompokkanInformasi,
  "2-5-3": Materi2Peta5Step3HubunganKlasifikasi,
  "2-5-4": Materi2Peta5Step4DugaanKelompok,
  "2-5-5": Materi2Peta5Step5RefleksiSingkat,
  "2-6-1": Materi2Peta6Step1VerifikasiGeoGebraAR,
  "2-6-2": Materi2Peta6Step2HasilPerbandingan,
  "2-6-3": Materi2Peta6Step3RevisiRefleksi,
  "2-7-1": Materi2Peta7Step1KesimpulanGeneralisasi,
  "2-7-2": Materi2Peta7Step2PernyataanUmum,
  "2-7-3": Materi2Peta7Step3IngatKembali,
  "2-7-4": Materi2Peta7Step4RefleksiMotivasi,
  "2-7-5": Materi2Peta7Step5Rangkuman,
  "2-8-1": Materi2Peta8Step1RefleksiPemahamanPengalaman,
  "2-8-2": Materi2Peta8Step2KeyakinanBerpikir,
  "2-8-3": Materi2Peta8Step3SikapTarget,
  "2-9-1": Materi2Peta9Step1MasalahOpenEnded,
  "2-9-2": Materi2Peta9Step2BuatIdemu,
  "2-9-3": Materi2Peta9Step3StrategiPola,
  "2-9-4": Materi2Peta9Step4BandingkanRefleksi,
  "2-10-1": Materi2Peta10Step1RangkumanKonsep,
  "2-10-2": Materi2Peta10Step2PetaKonsepPenutup,
  "3-1-1": Materi3Peta1Step1Pendahuluan,
  "3-1-2": Materi3Peta1Step2EksplorasiProses,
  "3-2-1": Materi3Peta2Step1AmatiJaringJaring,
  "3-2-2": Materi3Peta2Step2PertanyaanPengamatan,
  "3-2-3": Materi3Peta2Step3DugaanAwal,
  "3-2-4": Materi3Peta2Step4UkuranSisi,
  "3-2-5": Materi3Peta2Step5CariPolaPemantik,
  "3-2-6": Materi3Peta2Step6DugaanSementaraRefleksi,
  "3-3-1": Materi3Peta3Step1DiskusikanBersama,
  "3-3-2": Materi3Peta3Step2DugaanKelompok,
  "3-3-3": Materi3Peta3Step3BandingkanPendapat,
  "3-3-4": Materi3Peta3Step4DugaanSementara,
  "3-3-5": Materi3Peta3Step5DugaanUntukDiuji,
  "3-3-6": Materi3Peta3Step6RefleksiDiskusi,
  "3-4-1": Materi3Peta4Step1Pendahuluan,
  "3-4-2": Materi3Peta4Step2GeoGebra3D,
  "3-4-3": Materi3Peta4Step3AugmentedReality,
  "3-4-4": Materi3Peta4Step4CatatanHasil,
  "3-4-5": Materi3Peta4Step5RingkasPengamatan,
  "3-4-6": Materi3Peta4Step6PeriksaKelengkapan,
  "3-4-7": Materi3Peta4Step7TemuanSementara,
  "3-4-8": Materi3Peta4Step8RefleksiEksplorasi,
  "3-5-1": Materi3Peta5Step1MengelompokkanData,
  "3-5-2": Materi3Peta5Step2HitungLuasSisi,
  "3-5-3": Materi3Peta5Step3CariPolaRefleksi,
  "3-5-4": Materi3Peta5Step4MenemukanStrategi,
  "3-5-5": Materi3Peta5Step5RumusSementara,
  "3-5-6": Materi3Peta5Step6RefleksiSingkat,
  "3-9-1": Materi3Peta9Step1MasalahDanStrategi,
  "3-9-2": Materi3Peta9Step2BandingkanStrategi,
  "3-9-3": Materi3Peta9Step3AlasanDanTransfer,
  "3-9-4": Materi3Peta9Step4RefleksiSingkat,
  "3-7-1": Materi3Peta7Step1Kesimpulan,
  "3-7-2": Materi3Peta7Step2KesimpulanKelompok,
  "3-6-1": Materi3Peta6Step1VerifikasiGeoGebraAR,
  "3-6-2": Materi3Peta6Step2Bandingkan,
  "3-6-3": Materi3Peta6Step3RevisiHasilRefleksi,
  "3-8-1": Materi3Peta8Step1RefleksiPemahaman,
  "3-8-2": Materi3Peta8Step2RefleksiPengalaman,
  "3-8-3": Materi3Peta8Step3KeyakinanDiriku,
  "3-8-4": Materi3Peta8Step4RefleksiPenalaran,
  "3-8-5": Materi3Peta8Step5PesanUntukDiriku,
  "3-10-1": Materi3Peta10Step1KonsepDasar,
  "3-10-2": Materi3Peta10Step2RumusLuasPermukaan,
  "3-10-3": Materi3Peta10Step3LangkahDanStrategi,
  "3-10-4": Materi3Peta10Step4PetaKonsepPenutup,
  "4-1-1": Materi4Peta1Step1Pendahuluan,
  "4-2-1": Materi4Peta2Step1AmatiBangunRuang,
  "4-2-2": Materi4Peta2Step2PertanyaanPengamatan,
  "4-2-3": Materi4Peta2Step3LanjutkanPengamatan,
  "4-2-4": Materi4Peta2Step4TabelHasilPengamatan,
  "4-2-5": Materi4Peta2Step5PertanyaanPemantik,
  "4-2-6": Materi4Peta2Step6RefleksiSingkat,
  "4-3-1": Materi4Peta3Step1DiskusikanBersama,
  "4-3-2": Materi4Peta3Step2PertanyaanDugaan,
  "4-3-3": Materi4Peta3Step3BandingkanHasil,
  "4-3-4": Materi4Peta3Step4HipotesisKelompok,
  "4-3-5": Materi4Peta3Step5PersiapanRefleksi,
  "4-4-1": Materi4Peta4Step1Pendahuluan,
  "4-4-2": Materi4Peta4Step2EksplorasiGeoGebra,
  "4-4-3": Materi4Peta4Step3EksplorasiAR,
  "4-4-4": Materi4Peta4Step4RingkasPengamatan,
  "4-4-5": Materi4Peta4Step5KeterkaitanAwal,
  "4-4-6": Materi4Peta4Step6DugaanRefleksi,
  "5-1-1": Materi5Peta1Step1Pendahuluan,
  "5-1-2": Materi5Peta1Step2EksplorasiProses,
  "5-2-1": Materi5Peta2Step1AyoMengamati,
  "5-2-2": Materi5Peta2Step2LuasSalahSatuSisi,
  "5-2-3": Materi5Peta2Step3PertanyaanPengamatan,
  "5-2-4": Materi5Peta2Step4DugaanAwal,
  "5-2-5": Materi5Peta2Step5LanjutkanPengamatan,
  "5-2-6": Materi5Peta2Step6CariPersamaanPerbedaan,
  "5-2-7": Materi5Peta2Step7DugaanSementara,
  "5-2-8": Materi5Peta2Step8PertanyaanPemantik,
  "5-2-9": Materi5Peta2Step9RefleksiSingkat,
  "5-5-1": Materi5Peta5Step1MengelompokkanData,
  "5-5-2": Materi5Peta5Step2BandingkanPerubahan,
  "5-5-3": Materi5Peta5Step3CariPola,
  "5-5-4": Materi5Peta5Step4MenemukanStrategi,
  "5-5-5": Materi5Peta5Step5HubunganMatematika,
  "5-5-6": Materi5Peta5Step6RefleksiSingkat,
  "5-6-1": Materi5Peta6Step1VerifikasiGeoGebraAR,
  "5-6-2": Materi5Peta6Step2Bandingkan,
  "5-6-3": Materi5Peta6Step3UjiHubunganAlasan,
  "5-6-4": Materi5Peta6Step4PerbaikiRefleksi,
  "4-6-1": Materi4Peta6Step1VerifikasiGeoGebraAR,
  "4-6-2": Materi4Peta6Step2Bandingkan,
  "4-6-3": Materi4Peta6Step3RevisiHasilVerifikasi,
  "4-6-4": Materi4Peta6Step4RefleksiVerifikasi,
  "4-7-1": Materi4Peta7Step1ApaYangKamuTemukan,
  "4-7-2": Materi4Peta7Step2RumusUmum,
  "4-7-3": Materi4Peta7Step3ContohPenerapan,
  "4-7-4": Materi4Peta7Step4MengapaRumusBenar,
  "4-7-5": Materi4Peta7Step5KesimpulanDanBandingkan,
  "4-7-6": Materi4Peta7Step6PeneguhanGeneralisasi,
  "4-7-7": Materi4Peta7Step7RefleksiDanPesan,
  "4-8-1": Materi4Peta8Step1PemahamanMateri,
  "4-8-2": Materi4Peta8Step2ProsesBelajarku,
  "4-8-3": Materi4Peta8Step3KeyakinanDiriku,
  "4-8-4": Materi4Peta8Step4KesanDanSaran,
  "4-5-1": Materi4Peta5Step1MengelompokkanData,
  "4-5-2": Materi4Peta5Step2HitungLuasSisi,
  "4-5-3": Materi4Peta5Step3CariPola,
  "4-5-4": Materi4Peta5Step4MenemukanStrategi,
  "4-5-5": Materi4Peta5Step5RumusSementara,
  "4-5-6": Materi4Peta5Step6RefleksiSingkat,
  "4-9-1": Materi4Peta9Step1MasalahDanStrategi,
  "4-9-2": Materi4Peta9Step2BandingkanStrategi,
  "4-9-3": Materi4Peta9Step3AlasanDanTransfer,
  "4-9-4": Materi4Peta9Step4RefleksiSingkat,
  "4-10-1": Materi4Peta10Step1KonsepDasar,
  "4-10-2": Materi4Peta10Step2RumusLuasPermukaan,
  "4-10-3": Materi4Peta10Step3StrategiPenutup,
  "5-4-1": Materi5Peta4Step1Pendahuluan,
  "5-4-2": Materi5Peta4Step2EksplorasiGeoGebra,
  "5-4-3": Materi5Peta4Step3EksplorasiAR,
  "5-4-4": Materi5Peta4Step4CatatanKelompok,
  "5-4-5": Materi5Peta4Step5PertanyaanEksplorasi,
  "5-4-6": Materi5Peta4Step6RefleksiData,
  "5-3-1": Materi5Peta3Step1BandingkanRumuskan,
  "5-3-2": Materi5Peta3Step2DugaanAwal,
  "5-3-3": Materi5Peta3Step3BandingkanDugaanKelompok,
  "5-3-4": Materi5Peta3Step4HipotesisRefleksi,
  "5-8-1": Materi5Peta8Step1RefleksiPemahaman,
  "5-8-2": Materi5Peta8Step2RefleksiPengalaman,
  "5-8-3": Materi5Peta8Step3KeyakinanDiriku,
  "5-8-4": Materi5Peta8Step4RefleksiCaraBerpikirku,
  "5-8-5": Materi5Peta8Step5PesanDanTarget,
  "5-10-1": Materi5Peta10Step1KonsepDasar,
  "5-10-2": Materi5Peta10Step2HubunganMengapa,
  "5-10-3": Materi5Peta10Step3LangkahDanStrategi,
  "5-10-4": Materi5Peta10Step4PetaKonsepPenutup,
  "5-9-1": Materi5Peta9Step1MasalahDanStrategi,
  "5-9-2": Materi5Peta9Step2BandingkanStrategi,
  "5-9-3": Materi5Peta9Step3AlasanDanTransfer,
  "5-9-4": Materi5Peta9Step4RefleksiSingkat,
  "5-7-1": Materi5Peta7Step1ApaYangKamuTemukan,
  "5-7-2": Materi5Peta7Step2HubunganSkalaLuas,
  "5-7-3": Materi5Peta7Step3AturanUmum,
  "5-7-4": Materi5Peta7Step4MengapaAturanBenar,
  "5-7-5": Materi5Peta7Step5KesimpulanDanBandingkan,
  "5-7-6": Materi5Peta7Step6GeneralisasiIntiKonsep,
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
