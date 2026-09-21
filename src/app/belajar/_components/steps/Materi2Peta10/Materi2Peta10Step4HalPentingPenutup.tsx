import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages } from "@/lib/pageImages";

const pentingList = [
  "Jaring-jaring adalah susunan seluruh sisi bangun ruang yang dibuka pada bidang datar dan dapat dilipat kembali membentuk bangun ruang.",
  "Tidak semua susunan bidang merupakan jaring-jaring yang valid.",
  "Satu bangun ruang dapat memiliki lebih dari satu jaring-jaring.",
  "Jaring-jaring yang valid dapat dilipat menjadi bangun ruang utuh tanpa sisi terputus atau bertumpuk.",
  "GeoGebra 3D dan AR membantu memverifikasi kebenaran jaring-jaring secara visual.",
];

export default async function Materi2Peta10Step4HalPentingPenutup({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
          <span className="bg-[#FACC15] text-[#1E3A8A] rounded-full py-1 px-4 text-xs font-bold">
            Halaman 2 dari 2
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hal-hal Penting yang Harus Diingat!
          </div>
        </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col sm:flex-row gap-4 items-center">
            <ol className="m-0 p-0 list-none flex flex-col gap-2.5 flex-1">
              {pentingList.map((t, i) => (
                <li key={t} className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-[#374151]">
                  <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
            <EditablePageImage
              imageKey="M2-P10-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={img["M2-P10-L4-1"]}
              alt="Jaring-jaring kubus dengan panah lipatan menjadi kubus"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-28 h-40 sm:w-32 sm:h-44 flex-shrink-0"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pesan Motivasi
          </div>
        </div>
          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex flex-col gap-2 text-sm leading-[1.7] text-[#1E3A8A] font-medium flex-1">
              <p className="m-0">
                Setiap bentuk jaring-jaring yang kamu temukan adalah bukti bahwa matematika penuh
                kemungkinan.
              </p>
              <p className="m-0">Teruslah berpikir, mencoba, memverifikasi, dan percaya pada kemampuan dirimu!</p>
              <p className="m-0">
                Pemahaman tentang jaring-jaring akan menjadi bekal penting untuk mempelajari luas
                permukaan bangun ruang pada submateri berikutnya.
              </p>
              <p className="m-0 font-extrabold text-[#DC2626] text-base">Kamu Hebat! 🎉</p>
            </div>
            <EditablePageImage
              imageKey="M2-P10-L4-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={img["M2-P10-L4-2"]}
              alt="Maskot siswi berhijab mengepalkan tangan memberi semangat"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 sm:p-6 flex flex-col md:flex-row items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-[#FACC15] flex items-center justify-center text-2xl flex-shrink-0">
          🚀
        </div>
        <div className="flex-1">
          <p className="m-0 mb-1 text-base font-extrabold text-[#1E3A8A]">Menuju Materi Berikutnya</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
            Selanjutnya, kamu akan mempelajari bagaimana jaring-jaring bangun ruang digunakan untuk
            memahami luas permukaan bangun ruang sisi datar.
          </p>
        </div>
        <EditablePageImage
          imageKey="M2-P10-L4-3"
          materi={materi}
          peta={peta}
          step={step}
          urutan="3"
          src={img["M2-P10-L4-3"]}
          alt="Alur dari jaring-jaring, pembukaan sisi, perhitungan luas, hingga luas permukaan bangun ruang"
          editable={editFoto}
          natural
          containerClassName="relative w-full md:w-80 flex-shrink-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-4 px-7 text-sm font-bold shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
