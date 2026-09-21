import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi5Peta9Step4AlasanDanTransfer({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [kubusImage, transferImage] = await Promise.all([
    getPageImage("M5-P9-L4-1"),
    getPageImage("M5-P9-L4-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Jelaskan Alasan Matematis
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#111827] leading-[1.6]">
              Mengapa Strategi 1 dan Strategi 2 dapat menghasilkan jawaban yang sama?
            </p>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Jelaskan hubungan antara faktor skala dan luas permukaan menggunakan alasan
              matematis atau ilustrasi yang kamu buat.
            </p>
            <textarea
              aria-label="Alasan strategi 1 dan strategi 2 menghasilkan jawaban yang sama"
              name="answers.alasan_matematis"
              defaultValue={getValue("alasan_matematis")}
              rows={7}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex justify-center">
            <EditablePageImage
              imageKey="M5-P9-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={kubusImage}
              alt="Kubus kecil diperbesar dengan faktor skala k menjadi kubus besar, beserta jaring-jaring kubus"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[340px]"
            />
          </div>
          <div className="md:col-span-2 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex items-start gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
              <path d="M12 17.5a1 1 0 100-2 1 1 0 000 2z" />
              <path d="M6 9a6 6 0 1112 0c0 3-2.5 3.5-2.5 6h-7c0-2.5-2.5-3-2.5-6z" />
            </svg>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#1E3A8A]">Petunjuk Visual</p>
              <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
                Gunakan gambar kubus atau jaring-jaring di samping apabila dapat membantu
                menjelaskan alasanmu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tantangan Lanjutan <span className="font-semibold text-xs">(Transfer Konsep)</span>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1 flex flex-col gap-3 text-sm text-[#374151] leading-[1.6]">
              <p className="m-0">Perhatikan situasi berikut.</p>
              <p className="m-0">
                Sebuah <span className="font-bold">prisma segitiga, balok, dan limas segiempat</span>{" "}
                masing-masing diperbesar dengan <span className="font-bold text-[#2563EB]">faktor skala 4</span>.
              </p>
              <p className="m-0">
                Tanpa menghitung satu per satu luas seluruh sisinya, jelaskan bagaimana kamu dapat
                menentukan luas permukaan ketiga bangun tersebut.
              </p>
              <p className="m-0 font-bold">
                Apakah strategi yang kamu gunakan tetap sama? Jelaskan alasanmu.
              </p>
            </div>
            <EditablePageImage
              imageKey="M5-P9-L4-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={transferImage}
              alt="Prisma segitiga, balok, dan limas diperbesar dengan faktor skala 4"
              editable={editFoto}
              natural
              containerClassName="relative w-full md:w-[300px] flex-shrink-0"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="transferJelaskan" className="text-xs font-semibold text-[#374151]">
              Cara menentukan luas permukaan tanpa menghitung satu per satu:
            </label>
            <textarea
              id="transferJelaskan"
              name="answers.transfer_cara"
              defaultValue={getValue("transfer_cara")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="transferStrategi" className="text-xs font-semibold text-[#374151]">
              Apakah strategimu tetap sama? Jelaskan alasanmu:
            </label>
            <textarea
              id="transferStrategi"
              name="answers.transfer_strategi_sama"
              defaultValue={getValue("transfer_strategi_sama")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
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
