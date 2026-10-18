import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import BangunDaftarTabel from "@/app/belajar/_components/BangunDaftarTabel";
import StepHeader from "@/app/belajar/_components/StepHeader";

const aspek = [
  { key: "banyak_bentuk", label: "Banyak bentuk jaring-jaring yang ditemukan" },
  { key: "hubungan_sisi", label: "Hubungan antar sisi" },
  { key: "posisi_sisi", label: "Posisi sisi" },
  { key: "proses_lipatan", label: "Proses lipatan" },
  { key: "sisi_bertumpuk", label: "Sisi bertumpuk (Ya/Tidak)" },
  { key: "jaring_valid", label: "Jaring-jaring valid (Ya/Tidak)" },
];

const kolom = [
  { key: "geogebra", label: "Hasil Eksplorasi GeoGebra 3D" },
  { key: "ar", label: "Hasil Eksplorasi Augmented Reality (AR)" },
  { key: "catatan", label: "Catatan Penting (Temuan Sementara)" },
];

export default async function Materi2Peta4Step2TabelPengamatan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tabel Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Bandingkan hasil eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR),
          kemudian isilah tabel berikut berdasarkan hasil pengamatanmu.
        </p>

        <BangunDaftarTabel
          answerKey="pengamatan_bangun"
          initialValue={answers.pengamatan_bangun}
          selectLabel="Bangun ruang yang diamati:"
          rows={aspek}
          columns={kolom}
          entryTitle="Hasil Eksplorasi yang Sudah Ditambahkan"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
