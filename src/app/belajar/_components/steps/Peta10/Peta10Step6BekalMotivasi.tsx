import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BackLink from "@/app/belajar/_components/BackLink";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta10Step6BekalMotivasi({ materi, peta, editFoto }: StepComponentProps) {
  const jaringKubus = await getPageImage("M1-P10-L6-1");
  const motivasi = await getPageImage("M1-P10-L6-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Bekal untuk Submateri Berikutnya</h2>
          </div>
          <div className="bg-[#EFF4FF] rounded-xl p-5 flex flex-col gap-3">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              <span className="text-[#2563EB] font-bold block mb-1">
                Setelah memahami cara mengklasifikasikan bangun ruang sisi datar,
              </span>
              kamu siap mempelajari jaring-jaring bangun ruang sisi datar.
            </p>
            <div className="w-10 h-0.5 bg-[#C7D2FE] rounded-full" />
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Pada submateri berikutnya, kamu akan menyelidiki bagaimana bangun ruang dapat dibentuk dari susunan
              sisi-sisinya.
            </p>
          </div>
          <div className="flex items-center justify-center bg-white border border-[#E5E7EB] rounded-xl py-4">
            <EditablePageImage
              imageKey="M1-P10-L6-1"
              materi={materi}
              peta={peta}
              step="6"
              urutan="1"
              src={jaringKubus}
              alt="Jaring-jaring kubus"
              editable={editFoto}
              natural
              containerClassName="relative w-40"
            />
          </div>
        </div>

        <div className="bg-[#FEE2E2] border border-[#FECACA] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <h2 className="m-0 text-base font-bold text-[#B91C1C]">Pesan Motivasi</h2>
          </div>
          <div className="bg-white/80 border border-white rounded-xl p-4 flex flex-col gap-3">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              <span className="font-bold text-[#B91C1C]">Selamat!</span> Kamu telah menemukan sendiri bahwa satu
              konsep matematika dapat dipahami melalui proses mengamati, berdiskusi, mencoba berbagai strategi,
              memberikan alasan, dan menarik kesimpulan.
            </p>
            <p className="m-0 pl-3 border-l-4 border-[#FCA5A5] text-sm leading-[1.6] text-[#374151]">
              Teruslah berpikir kritis, terbuka terhadap berbagai strategi, dan percaya diri dalam memberikan alasan
              matematis.
            </p>
          </div>
          <EditablePageImage
            imageKey="M1-P10-L6-2"
            materi={materi}
            peta={peta}
            step="6"
            urutan="2"
            src={motivasi}
            alt="Otak berkacamata dengan bola lampu"
            editable={editFoto}
            natural
            containerClassName="relative w-64 mx-auto overflow-hidden rounded-2xl"
          />
          <div className="flex items-center gap-2 text-[#2563EB] font-extrabold text-lg">
            Kamu hebat!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97706">
              <path d="M12 2l2.6 6.9L22 10l-5.7 4.9L18 22l-6-3.6L6 22l1.7-7.1L2 10l7.4-1.1L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/5`} />
        <NextStepButton variant="green" icon="check">LANJUT KE SUBMATERI 2</NextStepButton>
      </div>
    </form>
  );
}
