import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";


export default async function Materi5Peta3Step3DugaanAwalAlasan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const laptopImage = await getPageImage("M5-P3-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8z" />
          </svg>
          Tahap 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Awal Kelompok
          </div>
        </div>
          <p className="m-0 text-sm text-[#4B5563]">Tuliskan dugaan awal kelompokmu.</p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Menurut kelompok kami, jika setiap ukuran panjang diperbesar 2 kali (k = 2), maka luas permukaan bangun
            ruang akan &hellip;
          </p>
          <textarea
            name="answers.dugaan_luas"
            required
            rows={2}
            defaultValue={getValue("dugaan_luas")}
            aria-label="Dugaan luas permukaan"
            placeholder="Luas permukaan akan..."
            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
          <p className="m-0 text-sm text-[#374151]">karena &hellip;</p>
          <textarea
            name="answers.dugaan_karena"
            required
            rows={3}
            defaultValue={getValue("dugaan_karena")}
            aria-label="Alasan dugaan awal"
            placeholder="Tuliskan alasannya..."
            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>
        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Alasan Dugaan
          </div>
        </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Mengapa kelompokmu memiliki dugaan tersebut? Tuliskan alasan berdasarkan hasil pengamatan.
          </p>
          <textarea
            name="answers.alasan_dugaan"
            required
            rows={6}
            defaultValue={getValue("alasan_dugaan")}
            aria-label="Alasan dugaan berdasarkan hasil pengamatan"
            placeholder="Tuliskan alasan berdasarkan hasil pengamatan..."
            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>
      </div>

      <div className="grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_160px] gap-4 items-center bg-gradient-to-br from-[#FEF9E7] to-[#FFF7ED] border border-[#F5E3A0] rounded-[24px] p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#78350F]">Ingat!</p>
          <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
            Belum tentu dugaanmu benar. Pada tahap berikutnya kalian akan membuktikannya menggunakan GeoGebra 3D dan
            Augmented Reality.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P3-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={laptopImage}
          alt="Laptop menampilkan kubus 3D GeoGebra"
          editable={editFoto}
          natural
          imageClassName="mix-blend-multiply"
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
