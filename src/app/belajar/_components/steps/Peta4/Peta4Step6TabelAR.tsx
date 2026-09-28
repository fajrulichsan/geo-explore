import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import Peta4Step6TabelARForm from "./Peta4Step6TabelARForm";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";
import { getPageImage } from "@/lib/pageImages";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";

export default async function Peta4Step6TabelAR({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const userId = await getSessionUserId();
  const rows = userId ? await getMateriProgress(userId, materi) : [];
  const geoGebraRaw = rows.find((r) => r.peta === peta && r.step === "3")?.answers?.pengamatan_bangun;
  const fotoAR = await getPageImage("M1-P4-L6-1");

  const geoGebraEntries = (() => {
    if (typeof geoGebraRaw !== "string" || !geoGebraRaw) return [];
    try {
      const parsed = JSON.parse(geoGebraRaw);
      return Array.isArray(parsed) ? (parsed as Record<string, string>[]) : [];
    } catch {
      return [];
    }
  })();

  return (
    <Peta4Step6TabelARForm
      materi={materi}
      peta={peta}
      initialAnswers={initialAnswers ?? {}}
      geoGebraEntries={geoGebraEntries}
      header={<StepHeader materi={materi} currentStep={6} totalSteps={8} />}
      ilustrasi={
        <EditablePageImage
          imageKey="M1-P4-L6-1"
          materi={materi}
          peta={peta}
          step="6"
          urutan="1"
          src={fotoAR}
          alt="Tangan memegang tablet yang menampilkan kubus hijau dalam Augmented Reality"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[260px] mx-auto rounded-2xl overflow-hidden"
        />
      }
    />
  );
}
