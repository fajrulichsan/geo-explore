import type { ComponentType } from "react";
import Step1Amati from "./steps/Step1Amati";
import Step2Berpikir from "./steps/Step2Berpikir";
import Step3IdeAwalku from "./steps/Step3IdeAwalku";
import Step4AmatiMedia from "./steps/Step4AmatiMedia";
import Step5PilihMedia from "./steps/Step5PilihMedia";
import Step6TemukanPenuntun from "./steps/Step6TemukanPenuntun";
import Step7SiapBerdiskusi from "./steps/Step7SiapBerdiskusi";
import Peta2Step1Pengelompokan from "./steps/Peta2Step1Pengelompokan";
import Peta2Step2BandingkanDugaan from "./steps/Peta2Step2BandingkanDugaan";
import Peta2Step3PertanyaanDiskusi from "./steps/Peta2Step3PertanyaanDiskusi";
import Peta2Step4RumusanMasalah from "./steps/Peta2Step4RumusanMasalah";
import Peta2Step5MenyiapkanEksplorasi from "./steps/Peta2Step5MenyiapkanEksplorasi";
import Peta2Step6DugaanKelompokku from "./steps/Peta2Step6DugaanKelompokku";
import Peta2Step7CatatanHasilDiskusi from "./steps/Peta2Step7CatatanHasilDiskusi";
import Peta2Step8BersiapKeTahapBerikutnya from "./steps/Peta2Step8BersiapKeTahapBerikutnya";
import Peta3Step1MengingatDugaan from "./steps/Peta3Step1MengingatDugaan";
import Peta3Step2PilihBangunRuang from "./steps/Peta3Step2PilihBangunRuang";
import Peta3Step3EksplorasiGeoGebra from "./steps/Peta3Step3EksplorasiGeoGebra";
import Peta3Step4TabelPengamatan from "./steps/Peta3Step4TabelPengamatan";
import Peta3Step5TemuanPersiapanAR from "./steps/Peta3Step5TemuanPersiapanAR";
import Peta3Step6MengeksplorasiAR from "./steps/Peta3Step6MengeksplorasiAR";
import Peta3Step7TabelPengamatanAR from "./steps/Peta3Step7TabelPengamatanAR";
import Peta3Step8CatatanHasilEksplorasi from "./steps/Peta3Step8CatatanHasilEksplorasi";
import Peta3Step9BersiapTahapBerikutnya from "./steps/Peta3Step9BersiapTahapBerikutnya";
import Peta3Step10CatatanPribadi from "./steps/Peta3Step10CatatanPribadi";
import Peta4Step1TinjauKembaliData from "./steps/Peta4Step1TinjauKembaliData";
import Peta4Step2OrganisasikanData from "./steps/Peta4Step2OrganisasikanData";
import Peta4Step3TemuanEksplorasi from "./steps/Peta4Step3TemuanEksplorasi";
import Peta4Step4TemukanPolanya from "./steps/Peta4Step4TemukanPolanya";
import Peta4Step5SiapKlasifikasi from "./steps/Peta4Step5SiapKlasifikasi";
import Peta4Step6BandingkanKelompok from "./steps/Peta4Step6BandingkanKelompok";
import Peta4Step7PolaKlasifikasiStrategi from "./steps/Peta4Step7PolaKlasifikasiStrategi";
import Peta4Step8EvaluasiHasilSementara from "./steps/Peta4Step8EvaluasiHasilSementara";
import Peta9Step1BentukBangunRuang from "./steps/Peta9Step1BentukBangunRuang";
import Peta9Step2DasarKlasifikasi from "./steps/Peta9Step2DasarKlasifikasi";
import Peta9Step3HubunganKonsep from "./steps/Peta9Step3HubunganKonsep";
import Peta9Step4KataKunci from "./steps/Peta9Step4KataKunci";
import Peta9Step5BekalMotivasi from "./steps/Peta9Step5BekalMotivasi";
import Peta5Step1PeriksaKembali from "./steps/Peta5Step1PeriksaKembali";
import Peta5Step2Bandingkan from "./steps/Peta5Step2Bandingkan";
import Peta5Step3RevisiDugaan from "./steps/Peta5Step3RevisiDugaan";
import Peta5Step4EvaluasiVerifikasi from "./steps/Peta5Step4EvaluasiVerifikasi";
import Peta5Step5HasilVerifikasi from "./steps/Peta5Step5HasilVerifikasi";
import Peta5Step6SiapTahapBerikutnya from "./steps/Peta5Step6SiapTahapBerikutnya";
import Peta6Step1TinjauVerifikasi from "./steps/Peta6Step1TinjauVerifikasi";
import Peta6Step2LengkapiKesimpulan from "./steps/Peta6Step2LengkapiKesimpulan";
import Peta6Step3HubungkanDasarPengelompokan from "./steps/Peta6Step3HubungkanDasarPengelompokan";
import Peta6Step4PertanyaanGeneralisasi from "./steps/Peta6Step4PertanyaanGeneralisasi";
import Peta6Step5SiapkanGeneralisasi from "./steps/Peta6Step5SiapkanGeneralisasi";
import Peta6Step6GeneralisasiAkhir from "./steps/Peta6Step6GeneralisasiAkhir";
import Peta8Step1MengelompokkanBangunRuang from "./steps/Peta8Step1MengelompokkanBangunRuang";
import Peta8Step2SatuBangunBanyakKelompok from "./steps/Peta8Step2SatuBangunBanyakKelompok";
import Peta8Step3MenemukanCaraBaru from "./steps/Peta8Step3MenemukanCaraBaru";
import Peta8Step4MembandingkanStrategi from "./steps/Peta8Step4MembandingkanStrategi";
import Peta8Step5MemilihStrategi from "./steps/Peta8Step5MemilihStrategi";
import Peta8Step6MenemukanPrinsipUmum from "./steps/Peta8Step6MenemukanPrinsipUmum";
import Peta7Step1RefleksiPemahaman from "./steps/Peta7Step1RefleksiPemahaman";
import Peta7Step2RefleksiPengalaman from "./steps/Peta7Step2RefleksiPengalaman";
import Peta7Step3KeyakinanDiriku from "./steps/Peta7Step3KeyakinanDiriku";
import Peta7Step4KotakMotivasi from "./steps/Peta7Step4KotakMotivasi";

export type StepComponentProps = { materi: string; peta: string };

export const stepRegistry: Record<string, ComponentType<StepComponentProps>> = {
  "1-1-1": Step1Amati,
  "1-1-2": Step2Berpikir,
  "1-1-3": Step3IdeAwalku,
  "1-1-4": Step4AmatiMedia,
  "1-1-5": Step5PilihMedia,
  "1-1-6": Step6TemukanPenuntun,
  "1-1-7": Step7SiapBerdiskusi,
  "1-2-1": Peta2Step1Pengelompokan,
  "1-2-2": Peta2Step2BandingkanDugaan,
  "1-2-3": Peta2Step3PertanyaanDiskusi,
  "1-2-4": Peta2Step4RumusanMasalah,
  "1-2-5": Peta2Step5MenyiapkanEksplorasi,
  "1-2-6": Peta2Step6DugaanKelompokku,
  "1-2-7": Peta2Step7CatatanHasilDiskusi,
  "1-2-8": Peta2Step8BersiapKeTahapBerikutnya,
  "1-3-1": Peta3Step1MengingatDugaan,
  "1-3-2": Peta3Step2PilihBangunRuang,
  "1-3-3": Peta3Step3EksplorasiGeoGebra,
  "1-3-4": Peta3Step4TabelPengamatan,
  "1-3-5": Peta3Step5TemuanPersiapanAR,
  "1-3-6": Peta3Step6MengeksplorasiAR,
  "1-3-7": Peta3Step7TabelPengamatanAR,
  "1-3-8": Peta3Step8CatatanHasilEksplorasi,
  "1-3-9": Peta3Step9BersiapTahapBerikutnya,
  "1-3-10": Peta3Step10CatatanPribadi,
  "1-4-1": Peta4Step1TinjauKembaliData,
  "1-4-2": Peta4Step2OrganisasikanData,
  "1-4-3": Peta4Step3TemuanEksplorasi,
  "1-4-4": Peta4Step4TemukanPolanya,
  "1-4-5": Peta4Step5SiapKlasifikasi,
  "1-4-6": Peta4Step6BandingkanKelompok,
  "1-4-7": Peta4Step7PolaKlasifikasiStrategi,
  "1-4-8": Peta4Step8EvaluasiHasilSementara,
  "1-5-1": Peta5Step1PeriksaKembali,
  "1-5-2": Peta5Step2Bandingkan,
  "1-5-3": Peta5Step3RevisiDugaan,
  "1-5-4": Peta5Step4EvaluasiVerifikasi,
  "1-5-5": Peta5Step5HasilVerifikasi,
  "1-5-6": Peta5Step6SiapTahapBerikutnya,
  "1-6-1": Peta6Step1TinjauVerifikasi,
  "1-6-2": Peta6Step2LengkapiKesimpulan,
  "1-6-3": Peta6Step3HubungkanDasarPengelompokan,
  "1-6-4": Peta6Step4PertanyaanGeneralisasi,
  "1-6-5": Peta6Step5SiapkanGeneralisasi,
  "1-6-6": Peta6Step6GeneralisasiAkhir,
  "1-7-1": Peta7Step1RefleksiPemahaman,
  "1-7-2": Peta7Step2RefleksiPengalaman,
  "1-7-3": Peta7Step3KeyakinanDiriku,
  "1-7-4": Peta7Step4KotakMotivasi,
  "1-8-1": Peta8Step1MengelompokkanBangunRuang,
  "1-8-2": Peta8Step2SatuBangunBanyakKelompok,
  "1-8-3": Peta8Step3MenemukanCaraBaru,
  "1-8-4": Peta8Step4MembandingkanStrategi,
  "1-8-5": Peta8Step5MemilihStrategi,
  "1-8-6": Peta8Step6MenemukanPrinsipUmum,
  "1-9-1": Peta9Step1BentukBangunRuang,
  "1-9-2": Peta9Step2DasarKlasifikasi,
  "1-9-3": Peta9Step3HubunganKonsep,
  "1-9-4": Peta9Step4KataKunci,
  "1-9-5": Peta9Step5BekalMotivasi,
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
