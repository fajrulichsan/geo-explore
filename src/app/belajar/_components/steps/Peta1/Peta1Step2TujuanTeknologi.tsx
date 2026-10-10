import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta1Step2TujuanTeknologi({ materi, peta, editFoto }: StepComponentProps) {
  const [maskot, gambarGeoGebra, gambarAR] = await Promise.all([
    getPageImage("M1-P1-L2-1"),
    getPageImage("M1-P1-L2-2"),
    getPageImage("M1-P1-L2-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
          Klasifikasi Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex items-center gap-5">
          <EditablePageImage
            imageKey="M1-P1-L2-1"
            materi={materi}
            peta={peta}
            step="2"
            urutan="1"
            src={maskot}
            alt="Maskot siswi berhijab sedang berpikir sambil memegang tablet"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-36 sm:w-28 sm:h-40 flex-shrink-0"
          />
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Setelah mempelajari submateri ini, kamu diharapkan mampu mengenali unsur-unsur bangun ruang sisi
            datar, mengelompokkan bangun ruang berdasarkan berbagai cara yang logis, menjelaskan alasan matematis
            dari setiap hasil klasifikasi, membandingkan berbagai alternatif pengelompokan, serta semakin percaya
            diri dalam menyampaikan dan mempertahankan pendapat selama proses pembelajaran.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kita akan mengeksplorasi dengan bantuan teknologi!
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#3B1D8F] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5" />
              </svg>
              GeoGebra 3D
            </div>
            <EditablePageImage
              imageKey="M1-P1-L2-2"
              materi={materi}
              peta={peta}
              step="2"
              urutan="2"
              src={gambarGeoGebra}
              alt="Laptop menampilkan GeoGebra 3D dengan model kubus"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-[14px] overflow-hidden"
            />
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Untuk mengeksplorasi model bangun ruang dan sifat-sifatnya secara interaktif.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#166534] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
              Augmented Reality (AR)
            </div>
            <EditablePageImage
              imageKey="M1-P1-L2-3"
              materi={materi}
              peta={peta}
              step="2"
              urutan="3"
              src={gambarAR}
              alt="Tangan memegang ponsel yang menampilkan kubus hijau dalam Augmented Reality"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[220px] mx-auto rounded-[14px] overflow-hidden"
            />
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Untuk mengamati model bangun ruang secara nyata menggunakan teknologi AR.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
