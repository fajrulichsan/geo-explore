import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkahAR = [
  "Pilih satu sisi.",
  "Amati ukuran sisi.",
  "Bandingkan dengan sisi lainnya.",
  "Tentukan sisi yang memiliki ukuran sama.",
  "Periksa apakah semua sisi telah dihitung.",
];

export default async function Materi3Peta4Step3AugmentedReality({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const [gambarAR, gambarQr] = await Promise.all([
    getPageImage("M3-P4-L3-1"),
    getPageImage("qr-ar"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={8} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Menggunakan Augmented Reality (AR)
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Gunakan kamera AR untuk mengamati model bangun ruang.</p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-5 items-start">
            <EditablePageImage
              imageKey="M3-P4-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarAR}
              alt="Tampilan kamera AR menunjukkan kubus beserta ukuran sisinya"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111827]"
            />

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-3">
              <span className="text-xs font-bold text-[#2563EB]">Scan Marker AR</span>
              <EditablePageImage
                imageKey="qr-ar"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={gambarQr}
                alt="QR marker untuk menampilkan model AR"
                editable={editFoto}
                imageClassName="object-contain p-2"
                containerClassName="relative w-32 h-32 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
              />
              <p className="m-0 text-center text-xs text-[#6B7280]">
                Scan untuk menampilkan model 3D secara nyata.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#111827] mb-2 block">Lakukan kegiatan berikut</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {langkahAR.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#2B3D44] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
