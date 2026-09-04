import type { ComponentType } from "react";
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
import Materi2Peta9Step1MasalahOpenEnded from "./steps/Materi2Peta9/Materi2Peta9Step1MasalahOpenEnded";
import Materi2Peta9Step2BuatIdemu from "./steps/Materi2Peta9/Materi2Peta9Step2BuatIdemu";
import Materi2Peta9Step3StrategiPola from "./steps/Materi2Peta9/Materi2Peta9Step3StrategiPola";
import Materi2Peta9Step4BandingkanRefleksi from "./steps/Materi2Peta9/Materi2Peta9Step4BandingkanRefleksi";

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
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
