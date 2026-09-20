import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkahGeoGebra = [
  "Ubah faktor skala menggunakan slider.",
  "Amati perubahan ukuran bangun.",
  "Ukur luas setiap sisi secara interaktif.",
  "Bandingkan hasilnya untuk berbagai nilai k.",
];

const langkahAR = [
  "Tampilkan model asli dan model hasil skala.",
  "Bandingkan ukuran secara visual.",
  "Amati perubahan luas permukaan.",
  "Periksa kembali dugaanmu.",
];

export default async function Materi5Peta1Step2AlurEksplorasi({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarAlur, gambarGeoGebra, gambarAR] = await Promise.all([
    getPageImage("M5-P1-L2-1"),
    getPageImage("M5-P1-L2-2"),
    getPageImage("M5-P1-L2-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="10" width="7" height="7" rx="1" />
            <rect x="14" y="4" width="10" height="10" rx="1" />
            <path d="M14 20h7" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Skala dan Luas Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bagaimana Skala Mempengaruhi Luas?
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M5-P1-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarAlur}
            alt="Alur enam langkah: bangun asli, perbesar dengan faktor skala k lebih dari 1, semua ukuran panjang berubah, luas setiap sisi berubah, luas permukaan berubah, temukan polanya"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan GeoGebra 3D dan Augmented Reality (AR)
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                C1
              </div>
              <span className="text-sm font-bold text-[#1D4ED8]">Eksplorasi dengan GeoGebra 3D</span>
            </div>
            <EditablePageImage
            imageKey="M5-P1-L2-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarGeoGebra}
            alt="Laptop menampilkan slider faktor skala dan kubus hijau di GeoGebra 3D"
            editable={editFoto}
            imageClassName="object-contain"
              containerClassName="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden"
          />
            <div className="flex flex-col gap-2.5">
              {langkahGeoGebra.map((a) => (
                <div key={a} className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#374151] leading-[1.5]">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                C2
              </div>
              <span className="text-sm font-bold text-[#15803D]">
                Eksplorasi dengan <em>Augmented Reality</em> (AR)
              </span>
            </div>
            <EditablePageImage
            imageKey="M5-P1-L2-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarAR}
            alt="Layar ponsel menampilkan model limas asli dan limas hasil skala dalam Augmented Reality"
            editable={editFoto}
            imageClassName="object-contain"
              containerClassName="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden"
          />
            <div className="flex flex-col gap-2.5">
              {langkahAR.map((a) => (
                <div key={a} className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#374151] leading-[1.5]">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
