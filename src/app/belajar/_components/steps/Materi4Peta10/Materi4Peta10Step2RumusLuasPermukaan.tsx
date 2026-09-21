import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta10Step2RumusLuasPermukaan({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const limasImage = await getPageImage("M4-P10-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Limas
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Luas Permukaan Limas
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-5 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M4-P10-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={limasImage}
            alt="Limas segiempat dengan alas berwarna hijau"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[240px] mx-auto"
          />
          <div className="flex flex-col gap-3">
            <span className="w-fit bg-[#DCFCE7] text-[#166534] rounded-full px-3.5 py-1 text-xs font-bold">
              Karakteristik Limas
            </span>
            <ul className="m-0 pl-5 flex flex-col gap-2 text-sm text-[#374151] leading-[1.6]">
              <li>
                Memiliki satu alas berbentuk <span className="font-extrabold">segi-n</span> (misal
                persegi, segitiga, atau segi-many).
              </li>
              <li>Memiliki beberapa sisi tegak berbentuk segitiga.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[20px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-extrabold text-white/80 uppercase tracking-wide">
              Rumus Umum
            </span>
            <p className="m-0 text-3xl sm:text-4xl font-extrabold text-white">
              LP = L<sub className="text-lg">a</sub> + L<sub className="text-lg">s</sub>
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-white/95 sm:ml-auto">
            <p className="m-0">
              <span className="font-extrabold">L<sub>a</sub></span> = luas alas
            </p>
            <p className="m-0">
              <span className="font-extrabold">L<sub>s</sub></span> = jumlah luas seluruh sisi
              tegak
            </p>
          </div>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-4 flex flex-col gap-1.5">
          <p className="m-0 text-sm font-extrabold text-[#166534]">Mengapa rumus ini benar?</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Jika limas dibuka menjadi jaring-jaring, semua sisinya (alas dan sisi tegak) terlihat
            dan tidak saling tumpang tindih. Luas permukaannya adalah jumlah luas alas ditambah
            jumlah luas seluruh sisi tegaknya.
          </p>
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
