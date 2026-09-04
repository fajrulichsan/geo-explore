import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunTabs = ["Kubus", "Balok", "Prisma"] as const;

const transisi = ["Bangun ruang (3D)", "Sebagian terbuka", "Lebih terbuka", "Jaring-jaring (2D)"];

export default async function Materi3Peta4Step2GeoGebra3D({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarTransisi, gambarQr] = await Promise.all([
    getPageImage("M3-P4-L2-1"),
    getPageImage("qr-geogebra"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Menggunakan GeoGebra 3D
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Amati perubahan bangun ruang menjadi jaring-jaring.</p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div>
            <span className="text-xs font-bold text-[#111827] mb-2 block">Pilih Bangun</span>
            <div className="inline-flex bg-[#F3F4F6] rounded-full p-1 gap-1">
              {bangunTabs.map((b, i) => (
                <div
                  key={b}
                  className={`rounded-full py-1.5 px-4 text-xs font-bold ${
                    i === 0 ? "bg-white text-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.06)]" : "text-[#6B7280]"
                  }`}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-5 items-start">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#1D4ED8]">Transisi Bangun &rarr; Jaring-Jaring</span>
              <EditablePageImage
                imageKey="M3-P4-L2-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambarTransisi}
                alt="Diagram transisi bangun ruang menjadi jaring-jaring pada GeoGebra 3D"
                editable={editFoto}
                containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-white"
              />
              <div className="flex flex-wrap justify-center gap-4">
                {transisi.map((t, i) => (
                  <div key={t} className="flex flex-col items-center gap-1 min-w-[80px]">
                    <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[10px]">
                      {i + 1}
                    </div>
                    <p className="m-0 text-center text-[11px] text-[#6B7280] leading-[1.3]">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-3">
              <span className="text-xs font-bold text-[#2563EB]">Scan GeoGebra 3D</span>
              <EditablePageImage
                imageKey="qr-geogebra"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={gambarQr}
                alt="QR code menuju model GeoGebra 3D"
                editable={editFoto}
                imageClassName="object-contain p-2"
                containerClassName="relative w-32 h-32 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
              />
              <p className="m-0 text-center text-xs text-[#6B7280]">Scan untuk membuka model interaktif.</p>
            </div>
          </div>

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Gunakan fitur putar (drag) untuk melihat setiap sisi. Buka menjadi jaring-jaring
              untuk mengamati bentuk dan ukuran tiap sisi.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
