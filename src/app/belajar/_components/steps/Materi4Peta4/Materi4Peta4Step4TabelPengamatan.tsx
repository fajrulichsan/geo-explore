import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import BangunDaftarTabel from "@/app/belajar/_components/BangunDaftarTabel";
import { Fragment } from "react";
import FlowConnector from "@/app/belajar/_components/FlowConnector";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import PhotoUpload from "@/components/PhotoUpload";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";
import StepHeader from "@/app/belajar/_components/StepHeader";

const alurJudul = ["Catatan Hasil", "Temukan Keterkaitan Awal", "Dugaan Baru", "Refleksi"];

const baris = [
  { key: "bentuk_alas", label: "Bentuk alas" },
  { key: "bentuk_sisi_tegak", label: "Bentuk setiap sisi tegak" },
  { key: "banyak_sisi_tegak", label: "Banyak sisi tegak" },
  { key: "ukuran_alas", label: "Ukuran alas" },
  { key: "ukuran_sisi_tegak", label: "Ukuran yang diperlukan pada sisi tegak" },
  { key: "luas_alas", label: "Luas alas" },
  { key: "luas_seluruh_sisi_tegak", label: "Luas seluruh sisi tegak" },
  { key: "luas_alas_tiap_sisi", label: "Luas alas dan tiap sisi tegak" },
  { key: "luas_tiap_sisi", label: "Luas tiap sisi" },
];

export default async function Materi4Peta4Step4TabelPengamatan({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const alurGambar = await Promise.all([1, 2, 3, 4].map((n) => getPageImage(`M4-P4-L4-${n}` as PageImageKey)));
  const answers = initialAnswers ?? {};

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
        <p className="m-0 text-base font-bold text-[#1D4ED8]">Ayo lanjutkan hasil eksplorasimu!</p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          {alurGambar.map((src, i) => (
            <Fragment key={i}>
              <EditablePageImage
                imageKey={`M4-P4-L4-${i + 1}` as PageImageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 1)}
                src={src}
                alt={alurJudul[i]}
                editable={editFoto}
                natural
                containerClassName="relative w-full max-w-[220px] mx-auto lg:flex-1"
              />
              {i < alurGambar.length - 1 && <FlowConnector kind="arrow" panahGambar />}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#2563EB]">Ringkas Hasil Pengamatanmu</span>
          <span className="text-xs text-[#6B7280]">Lengkapilah tabel berikut berdasarkan hasil eksplorasimu.</span>
        </div>
      </div>

      <BangunDaftarTabel
        answerKey="pengamatan_limas"
        initialValue={answers.pengamatan_limas}
        selectLabel="Limas yang diamati:"
        rows={baris}
        columns={[{ key: "hasil", label: "Hasil Pengamatan" }]}
        entryTitle="Hasil Pengamatan yang Sudah Ditambahkan"
        bangunList={["Limas Segitiga", "Limas Segiempat", "Limas Segilima", "Limas Segienam"]}
      />

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_catatan_eksplorasi"
          label="Unggah foto catatan hasil eksplorasimu (opsional)"
          defaultValue={typeof answers.foto_catatan_eksplorasi === "string" ? answers.foto_catatan_eksplorasi : undefined}
          materi={materi}
          peta={peta}
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
