import { Fragment } from "react";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const langkah = [
  { n: 1, teks: "Tinjau kembali hasil diskusimu.", box: "border-[#DBE5FB] bg-[#F5F8FF]", imageKey: "M1-P3-L5-2" },
  { n: 2, teks: "Tentukan informasi apa yang masih perlu dicari.", box: "border-[#FED7AA] bg-[#FFF7ED]", imageKey: "M1-P3-L5-3" },
  { n: 3, teks: "Rumuskan dugaan kelompok yang akan diselidiki.", box: "border-[#BBF7D0] bg-[#F0FDF4]", imageKey: "M1-P3-L5-4" },
  { n: 4, teks: "Siapkan eksplorasi pada tahap berikutnya.", box: "border-[#DBE5FB] bg-[#F5F8FF]", imageKey: "M1-P3-L5-5" },
] satisfies { n: number; teks: string; box: string; imageKey: PageImageKey }[];

export default async function Peta3Step5MenyiapkanEksplorasi({ materi, peta, editFoto }: StepComponentProps) {
  const diskusi = await getPageImage("M1-P3-L5-1");
  const ikon = await Promise.all(langkah.map((l) => getPageImage(l.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Menyiapkan Eksplorasi
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex flex-col sm:flex-row items-center gap-5">
          <p className="m-0 flex-1 text-[15px] leading-[1.7] text-[#1E3A8A]">
            Pada tahap ini, ikuti langkah berikut sebelum kita mengumpulkan informasi pada tahap berikutnya.
          </p>
          <EditablePageImage
            imageKey="M1-P3-L5-1"
            materi={materi}
            peta={peta}
            step="5"
            urutan="1"
            src={diskusi}
            alt="Tiga siswa berdiskusi di meja sambil menulis di buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[460px] rounded-2xl overflow-hidden flex-shrink-0 bg-white"
          />
        </div>

        <ol className="m-0 p-0 list-none flex flex-col lg:flex-row lg:items-stretch gap-3">
          {langkah.map((l, i) => (
            <Fragment key={l.n}>
              <li className={`flex-1 rounded-2xl border p-4 flex flex-col items-center text-center gap-3 ${l.box}`}>
                <div className="flex items-center gap-3">
                  <span className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px]">
                    {l.n}
                  </span>
                  <EditablePageImage
                    imageKey={l.imageKey}
                    materi={materi}
                    peta={peta}
                    step="5"
                    urutan={String(l.n + 1)}
                    src={ikon[i]}
                    alt={`Ikon langkah ${l.n}`}
                    editable={editFoto}
                    imageClassName="object-contain mix-blend-multiply"
                    containerClassName="relative w-12 h-12"
                  />
                </div>
                <p className="m-0 text-sm font-semibold leading-[1.5] text-[#1E3A8A]">{l.teks}</p>
              </li>
              {i < langkah.length - 1 && (
                <li aria-hidden className="self-center text-[#2563EB] text-xl">
                  <i className="fa-solid fa-arrow-down lg:hidden" />
                  <i className="fa-solid fa-arrow-right hidden lg:inline" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3 px-4 flex items-start gap-3 text-sm leading-[1.6] text-[#374151]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0">
            <strong>Ingat!</strong> Pada tahap ini, kita belum membuktikan dugaan. Kita sedang menentukan informasi yang perlu dicari pada tahap berikutnya.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
