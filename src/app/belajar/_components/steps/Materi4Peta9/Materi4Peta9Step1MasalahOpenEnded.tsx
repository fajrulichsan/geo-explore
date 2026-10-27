import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { Fragment } from "react";
import Image from "next/image";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const alurAlt = ["Tahap 6 Ayo Menyimpulkan", "Tantangan Terbuka", "Quiz", "Rangkuman Submateri 4"];

export default async function Materi4Peta9Step1MasalahOpenEnded({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [heroImage, limasImage, ...alurGambar] = await Promise.all([
    getPageImage("M4-P9-L1-1"),
    getPageImage("M4-P9-L1-2"),
    ...alurAlt.map((_, i) => getPageImage(`M4-P9-L1-${i + 3}` as PageImageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#1E3A8A]">Tantangan Terbuka</h1>
        </div>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1 flex flex-col gap-3">
          <p className="m-0 text-lg font-extrabold text-[#111827]">Tidak hanya satu cara yang benar.</p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Pada tantangan ini, kamu akan mencari <span className="font-bold text-[#2563EB]">berbagai cara (strategi)</span>{" "}
            untuk menyelesaikan masalah. Yang paling penting adalah bagaimana kamu menjelaskan{" "}
            <span className="font-bold text-[#2563EB]">alasan matematis</span> dari strategi yang digunakan.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            {alurGambar.map((src, i) => (
              <Fragment key={alurAlt[i]}>
                <EditablePageImage
                  imageKey={`M4-P9-L1-${i + 3}` as PageImageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 3)}
                  src={src}
                  alt={alurAlt[i]}
                  editable={editFoto}
                  natural
                  containerClassName="relative w-full max-w-[200px] sm:flex-1"
                />
                {i < alurGambar.length - 1 && (
                  <Image
                    src="/panah-hijau-transparan.png"
                    alt=""
                    width={130}
                    height={64}
                    aria-hidden
                    className="w-8 h-auto shrink-0 rotate-90 sm:rotate-0"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <EditablePageImage
          imageKey="M4-P9-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa berdiskusi dengan laptop, buku, dan tablet AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full sm:w-72 flex-shrink-0"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">A</div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">Masalah Terbuka</div>
          <p className="m-0 w-full text-base font-semibold text-[#111827]">Bacalah masalah berikut dengan cermat!</p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-[1fr_240px] gap-6 items-center">
          <div className="flex flex-col gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5">
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Sebuah limas segiempat tegak memiliki sisi alas berbentuk persegi dengan panjang sisi{" "}
              <span className="font-bold">10 cm</span>. Tinggi sisi tegaknya (apotema) adalah{" "}
              <span className="font-bold">13 cm</span>.
            </p>
            <p className="m-0 text-base font-extrabold text-[#166534]">Tentukan luas permukaan limas tersebut.</p>
          </div>
          <EditablePageImage
            imageKey="M4-P9-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={limasImage}
            alt="Limas segiempat dengan sisi alas 10 cm dan apotema 13 cm"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[240px] mx-auto"
          />
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
            ✏️ Gunakan minimal dua strategi <span className="font-bold text-[#DC2626]">berbeda secara matematis</span>,
            bukan hanya berbeda urutan perhitungannya.
          </p>
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
            💡 Boleh menggunakan gambar, jaring-jaring, GeoGebra 3D, ataupun AR.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
