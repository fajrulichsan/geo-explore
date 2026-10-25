import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import QrLink from "@/app/belajar/_components/QrLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const kegiatan = [
  "Pilih satu sisi.",
  "Amati ukuran sisi.",
  "Bandingkan dengan sisi lainnya.",
  "Tentukan sisi yang memiliki ukuran sama.",
  "Periksa apakah semua sisi telah dihitung.",
];

export default async function Materi3Peta4Step3EksplorasiAR({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const [gambarAr, gambarMarker] = await Promise.all([getPageImage("M3-P4-L3-1"), getPageImage("qr-ar")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={8} />
        <div className="flex items-center gap-3.5 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
          <div className="basis-full"><span className="rounded-full bg-[#EFF4FF] text-[#2563EB] text-xs font-bold py-1 px-3">Tahap 3 dari 6</span></div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Eksplorasi Menggunakan Augmented Reality (AR)
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Gunakan kamera AR untuk mengamati model bangun ruang.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 items-start">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <EditablePageImage
              imageKey="M3-P4-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarAr}
              alt="Layar AR menampilkan kubus dengan ukuran sisi 5 cm"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
            />
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#16A34A]">Scan Marker AR</span>
            <QrLink href="https://ar.geo-explore.my.id" src={gambarMarker} alt="QR code menuju AR" label="Scan atau klik: AR" />
            <p className="m-0 text-center text-xs text-[#6B7280]">Scan marker AR untuk menampilkan model 3D secara nyata.</p>
          </div>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6">
          <p className="m-0 mb-4 text-base font-extrabold text-[#166534]">Lakukan kegiatan berikut.</p>
          <ol className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-3">
            {kegiatan.map((k, i) => (
              <li key={k} className="flex items-start gap-3">
                <span className="w-[26px] h-[26px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#374151] leading-[1.6] pt-0.5">{k}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#92400E] leading-[1.5]">
            Pastikan semua data hasil pengamatan telah dicatat dengan lengkap.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
