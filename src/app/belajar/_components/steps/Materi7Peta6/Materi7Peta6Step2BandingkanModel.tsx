import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";
import {
  HiddenStepFields,
  RadioPair,
  SectionTitle,
  StepFooter,
  StepTitle,
  cardClass,
  readAnswers,
} from "./Materi7Peta6Parts";

const STEP = 2;

const model: { key: PageImageKey; urutan: string; label: string }[] = [
  { key: "M7-P6-L2-1", urutan: "1", label: "Model GeoGebra 3D" },
  { key: "M7-P6-L2-2", urutan: "2", label: "Model Augmented Reality (AR)" },
];

const yaTidak = [
  { v: "ya", l: "Ya" },
  { v: "tidak", l: "Tidak" },
];

export default async function Materi7Peta6Step2BandingkanModel({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const urls = await Promise.all(model.map((m) => getPageImage(m.key)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Memverifikasi Hubungan Volume Satu Limas dan Volume Prisma" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Membandingkan dengan GeoGebra 3D dan Augmented Reality (AR)" color="purple" />
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan model berikut dan jawab pertanyaanmu.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {model.map((m, i) => (
            <div key={m.key} className={`${cardClass} flex flex-col gap-3`}>
              <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A] text-center">{m.label}</h3>
              <EditablePageImage
                imageKey={m.key}
                materi={materi}
                peta={peta}
                step="2"
                urutan={m.urutan}
                src={urls[i]}
                alt={m.label}
                editable={editFoto}
                natural
                containerClassName="relative w-full overflow-hidden rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className={`${cardClass} flex flex-col`}>
          <RadioPair
            name="bandingkan_geogebra"
            label="1. Apakah hasil perhitunganmu sama dengan nilai volume pada model GeoGebra 3D?"
            value={getValue("bandingkan_geogebra")}
            options={yaTidak}
          />
          <RadioPair
            name="bandingkan_ar"
            label="2. Apakah hasil perhitunganmu sama dengan nilai volume pada model AR?"
            value={getValue("bandingkan_ar")}
            options={yaTidak}
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
