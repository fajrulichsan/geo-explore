import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkahGeoGebra = [
  "Putar model 3D bangun ruang.",
  "Buka bangun ruang menjadi jaring-jaring.",
  "Coba temukan beberapa bentuk jaring-jaring yang berbeda.",
  "Perhatikan hubungan antar sisi.",
  "Amati garis lipatan (hinge).",
  "Catat hasil pengamatanmu pada tabel dan pertanyaan berikut.",
];

const langkahAR = [
  "Amati proses lipatan jaring-jaring menjadi bangun ruang.",
  "Perhatikan sisi yang bertemu saat dilipat.",
  "Perhatikan apakah ada sisi yang bertumpuk atau tidak tersambung.",
  "Bandingkan hasilnya dengan eksplorasi GeoGebra.",
  "Catat hasil pengamatanmu pada tabel dan pertanyaan berikut.",
];

export default async function Materi2Peta4Step1Eksplorasi({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [mascotImage, geogebraImage, qrGeogebra, arImage, qrAr] = await Promise.all([
    getPageImage("M2-P4-L1-1"),
    getPageImage("M2-P4-L1-2"),
    getPageImage("M2-P4-L1-3"),
    getPageImage("M2-P4-L1-4"),
    getPageImage("M2-P4-L1-5"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Ayo Bereksplorasi
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
          <EditablePageImage
            imageKey="M2-P4-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot mengajak bereksplorasi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-white/10"
          />
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-white">Ayo Bereksplorasi</h1>
            <p className="m-0 text-sm sm:text-[15px] leading-[1.6] text-white/90 max-w-xl">
              Sekarang saatnya mencari informasi untuk menyelidiki dugaan kelompokmu! Gunakan
              GeoGebra 3D dan Augmented Reality (AR) untuk mengumpulkan informasi yang relevan.
              Amati, catat, dan temukan hal-hal penting dari eksplorasimu!
            </p>
            <div className="flex items-start gap-2.5 bg-white/10 border border-white/20 rounded-xl py-3 px-4 w-fit max-w-md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDE68A" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
              <p className="m-0 text-xs font-semibold text-white/95 leading-[1.6]">
                Tujuan Tahap: mengumpulkan informasi tentang berbagai bentuk jaring-jaring dan
                hubungan antar sisi sebagai data untuk analisis pada tahap berikutnya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Eksplorasi Menggunakan GeoGebra 3D
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Scan QR di bawah ini untuk membuka model 3D bangun ruang pada GeoGebra!
          </p>
          <div className="flex items-center gap-4">
            <EditablePageImage
              imageKey="M2-P4-L1-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={geogebraImage}
              alt="Tampilan GeoGebra 3D bangun ruang"
              editable={editFoto}
              imageClassName="object-cover"
              containerClassName="relative flex-1 aspect-video rounded-2xl overflow-hidden bg-[#EFF4FF]"
            />
            <EditablePageImage
              imageKey="M2-P4-L1-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={qrGeogebra}
              alt="QR code menuju GeoGebra 3D"
              editable={editFoto}
              imageClassName="object-contain p-2"
              containerClassName="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#111827]">Langkah Eksplorasi</span>
            {langkahGeoGebra.map((l, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-[#4B5563] leading-[1.5]">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Eksplorasi Menggunakan Augmented Reality (AR)
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Scan QR di bawah ini untuk melihat proses melipat jaring-jaring menjadi bangun ruang
            menggunakan AR!
          </p>
          <div className="flex items-center gap-4">
            <EditablePageImage
              imageKey="M2-P4-L1-4"
              materi={materi}
              peta={peta}
              step={step}
              urutan="4"
              src={arImage}
              alt="Ilustrasi proses lipatan jaring-jaring menjadi bangun ruang"
              editable={editFoto}
              imageClassName="object-cover"
              containerClassName="relative flex-1 aspect-video rounded-2xl overflow-hidden bg-[#F0FDF4]"
            />
            <EditablePageImage
              imageKey="M2-P4-L1-5"
              materi={materi}
              peta={peta}
              step={step}
              urutan="5"
              src={qrAr}
              alt="QR code menuju pengalaman AR"
              editable={editFoto}
              imageClassName="object-contain p-2"
              containerClassName="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#111827]">Langkah Eksplorasi</span>
            {langkahAR.map((l, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-[#4B5563] leading-[1.5]">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
