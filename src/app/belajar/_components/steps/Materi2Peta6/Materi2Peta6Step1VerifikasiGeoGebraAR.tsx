import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Merevisi jawaban bukan berarti salah.",
  "Dugaan yang baik perlu diperiksa berdasarkan bukti.",
  "Alasan matematika lebih penting daripada sekadar jawaban.",
];

const geogebraChecklist = [
  "Putar model dan amati seluruh sisinya.",
  "Buka dan tutup bangun ruang menjadi jaring-jaring.",
  "Perhatikan hubungan antar sisi dan garis lipatan.",
  "Periksa apakah jaring dapat membentuk bangun ruang sempurna.",
];

const arChecklist = [
  "Amati proses membuka (melipat) setiap sisi.",
  "Perhatikan posisi sisi saat dibuka.",
  "Periksa apakah semua sisi terbuka tanpa bertumpuk dan tidak terlewat.",
  "Cocokkan hasil AR dengan hasil GeoGebra 3D.",
];

export default async function Materi2Peta6Step1VerifikasiGeoGebraAR({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [mascotImage, geogebraImage, qrGeogebraImage, arImage, qrArImage] = await Promise.all([
    getPageImage("M2-P6-L1-1"),
    getPageImage("M2-P6-L1-2"),
    getPageImage("M2-P6-L1-3"),
    getPageImage("M2-P6-L1-4"),
    getPageImage("M2-P6-L1-5"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 5 dari 6 – Ayo Verifikasi
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M2-P6-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot memeriksa dugaan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md">
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Apakah dugaan kelompokmu sudah benar? Sekarang, uji dan periksa kembali dugaanmu menggunakan{" "}
              <span className="font-bold">GeoGebra 3D</span> dan <span className="font-bold">Augmented Reality (AR)</span>,
              lalu bandingkan hasilnya dengan kelompok lain.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-start gap-4">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
        <div>
          <p className="m-0 text-sm font-bold text-[#92400E] mb-1">Ingat!</p>
          <ul className="m-0 mt-1 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.6] list-disc">
            {ingat.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Verifikasi Menggunakan GeoGebra 3D dan AR
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Gunakan kembali GeoGebra 3D dan AR untuk memeriksa apakah dugaan kelompokmu sesuai dengan hasil pengamatan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              GeoGebra 3D
            </div>
            <p className="m-0 text-sm text-[#4B5563]">Scan QR untuk membuka model 3D.</p>
            <div className="flex items-center gap-3">
              <EditablePageImage
                imageKey="M2-P6-L1-2"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={geogebraImage}
                alt="Tampilan model GeoGebra 3D"
                editable={editFoto}
                containerClassName="relative flex-1 aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
              />
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <EditablePageImage
                  imageKey="M2-P6-L1-3"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="3"
                  src={qrGeogebraImage}
                  alt="QR code menuju GeoGebra 3D"
                  editable={editFoto}
                  containerClassName="relative w-20 h-20 rounded-lg overflow-hidden bg-white border border-[#E5E7EB]"
                />
                <span className="text-[11px] font-bold text-[#2563EB] text-center leading-tight">
                  Scan untuk GeoGebra 3D
                </span>
              </div>
            </div>
            <ul className="m-0 pl-0 flex flex-col gap-1.5">
              {geogebraChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2B3D44] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Augmented Reality (AR)
            </div>
            <p className="m-0 text-sm text-[#4B5563]">Scan QR untuk melihat proses melipat jaring-jaring.</p>
            <div className="flex items-center gap-3">
              <EditablePageImage
                imageKey="M2-P6-L1-4"
                materi={materi}
                peta={peta}
                step={step}
                urutan="4"
                src={arImage}
                alt="Ilustrasi proses membuka bangun ruang menjadi jaring-jaring via AR"
                editable={editFoto}
                containerClassName="relative flex-1 aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
              />
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <EditablePageImage
                  imageKey="M2-P6-L1-5"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="5"
                  src={qrArImage}
                  alt="QR code menuju pengalaman AR"
                  editable={editFoto}
                  containerClassName="relative w-20 h-20 rounded-lg overflow-hidden bg-white border border-[#E5E7EB]"
                />
                <span className="text-[11px] font-bold text-[#2563EB] text-center leading-tight">Scan untuk AR</span>
              </div>
            </div>
            <ul className="m-0 pl-0 flex flex-col gap-1.5">
              {arChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
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
