import type { ComponentType } from "react";
import Peta1Step1Pendahuluan from "./steps/Peta1/Peta1Step1Pendahuluan";
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

export type StepComponentProps = {
  materi: string;
  peta: string;
  initialAnswers?: Record<string, unknown>;
};

export const stepRegistry: Record<string, ComponentType<StepComponentProps>> = {
  "1-1-1": Peta1Step1Pendahuluan,
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
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
