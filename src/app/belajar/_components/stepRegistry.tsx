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
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
