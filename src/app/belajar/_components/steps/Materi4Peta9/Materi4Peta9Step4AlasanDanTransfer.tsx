import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta9Step4AlasanDanTransfer({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [siswaImage, limasImage] = await Promise.all([
    getPageImage("M4-P9-L4-1"),
    getPageImage("M4-P9-L4-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#1E3A8A]">Tantangan Open-Ended</h1>
          <span className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1 px-3 text-xs font-bold">
            Submateri 4 · Halaman 2 dari 2
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">D</div>
            <div className="bg-white border border-[#DDD6FE] rounded-full py-2 px-5 text-sm font-bold text-[#6D28D9]">Jelaskan Alasan Matematis</div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <label htmlFor="alasanSama" className="text-sm font-bold text-[#111827] leading-[1.6]">
              Mengapa kedua strategi yang kamu gunakan menghasilkan luas permukaan yang sama?
            </label>
            <textarea
              id="alasanSama"
              name="answers.alasan_sama"
              defaultValue={getValue("alasan_sama")}
              rows={7}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#D1D5DB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
            <div className="flex items-end gap-3">
              <div className="flex-1 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-3 text-xs font-semibold text-[#78350F] leading-[1.6]">
                💡 Gunakan alasan matematis yang kuat dan jelaskan dengan bahasamu sendiri!
              </div>
              <EditablePageImage
                imageKey="M4-P9-L4-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={siswaImage}
                alt="Siswa laki-laki menunjuk ke atas"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-20 h-28 flex-shrink-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">E</div>
            <div className="bg-white border border-[#BBF7D0] rounded-full py-2 px-5 text-sm font-bold text-[#166534]">Tantangan Lanjutan (Transfer Konsep)</div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151]">Sekarang, tentukan luas permukaan limas segiempat tegak berikut.</p>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-4 items-center">
              <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl py-3 pr-3">
                <li>Sisi alas berbentuk persegi dengan panjang sisi = <span className="font-bold">12 cm</span>.</li>
                <li>Tinggi sisi tegak (apotema) = <span className="font-bold">15 cm</span>.</li>
              </ul>
              <EditablePageImage
                imageKey="M4-P9-L4-2"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={limasImage}
                alt="Limas segiempat dengan sisi alas 12 cm dan apotema 15 cm"
                editable={editFoto}
                natural
                containerClassName="relative w-full max-w-[180px] mx-auto"
              />
            </div>
            <label htmlFor="transfer" className="text-sm font-bold text-[#111827] leading-[1.6]">
              Apakah strategi yang kamu gunakan sebelumnya masih dapat digunakan? Jelaskan alasan matematisnya.
            </label>
            <textarea
              id="transfer"
              name="answers.transfer_konsep"
              defaultValue={getValue("transfer_konsep")}
              rows={5}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#D1D5DB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-3 text-xs font-semibold text-[#78350F] leading-[1.6]">
              ⭐ Ini adalah tantangan transfer konsep. Tunjukkan bahwa strategimu dapat digunakan pada ukuran yang berbeda!
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
