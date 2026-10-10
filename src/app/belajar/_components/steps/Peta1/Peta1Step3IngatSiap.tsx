import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta1Step3IngatSiap({ materi, peta, editFoto }: StepComponentProps) {
  const [bangunRuang, maskot] = await Promise.all([
    getPageImage("M1-P1-L3-1"),
    getPageImage("M1-P1-L3-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
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
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat!
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-4">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Bangun ruang sisi datar memiliki seluruh sisi berbentuk bangun datar. Kubus, balok, prisma, dan limas
            termasuk bangun ruang sisi datar.
          </p>
          <EditablePageImage
            imageKey="M1-P1-L3-1"
            materi={materi}
            peta={peta}
            step="3"
            urutan="1"
            src={bangunRuang}
            alt="Kubus, balok, prisma segitiga, dan limas segiempat"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[380px] mx-auto rounded-[14px] overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Mengeksplorasi!
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex items-center gap-5">
          <div className="flex flex-col gap-3 text-sm leading-[1.7] text-[#374151]">
            <p className="m-0">
              Pada submateri ini, kamu akan menjadi peneliti kecil! Ayo, amati benda-benda pada gambar dengan
              teliti, temukan berbagai kemungkinan cara mengelompokkannya berdasarkan sifat-sifat yang kamu amati.
            </p>
            <p className="m-0">
              Tidak harus satu cara. Setiap cara yang kamu temukan bisa jadi berbeda.
            </p>
            <p className="m-0 font-bold text-[#1D4ED8]">
              Tidak ada satu jawaban yang paling benar. Yang terpenting, alasan yang kamu berikan logis dan dapat
              dipertanggungjawabkan.
            </p>
          </div>
          <EditablePageImage
            imageKey="M1-P1-L3-2"
            materi={materi}
            peta={peta}
            step="3"
            urutan="2"
            src={maskot}
            alt="Maskot siswa laki-laki sedang berpikir dengan gelembung bola lampu"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-20 h-28 sm:w-32 sm:h-40 flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton variant="green">LANJUT KE TAHAP AYO MENGAMATI DAN BERPIKIR</NextStepButton>
      </div>
    </form>
  );
}
