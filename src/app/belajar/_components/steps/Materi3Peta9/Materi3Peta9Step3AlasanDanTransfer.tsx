import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ukuranBaru = [
  { label: "Panjang", value: "24 cm" },
  { label: "Lebar", value: "16 cm" },
  { label: "Tinggi", value: "10 cm" },
];

const textareaClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

export default async function Materi3Peta9Step3AlasanDanTransfer({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [siswaImage, balokImage] = await Promise.all([
    getPageImage("M3-P9-L3-1"),
    getPageImage("M3-P9-L3-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
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
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col-reverse sm:flex-row sm:items-center gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Jawablah pertanyaan berikut.</p>
            <label htmlFor="alasanHasilSama" className="text-sm text-[#374151] leading-[1.6]">
              Mengapa semua strategi yang kamu gunakan menghasilkan luas permukaan yang sama?
            </label>
            <textarea
              id="alasanHasilSama"
              name="answers.alasan_hasil_sama"
              defaultValue={getValue("alasan_hasil_sama")}
              rows={5}
              required
              placeholder="Tuliskan alasanmu..."
              className={`${textareaClass} bg-white border-[#BFDBFE]`}
            />
          </div>
          <EditablePageImage
            imageKey="M3-P9-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={siswaImage}
            alt="Siswa menunjuk ke atas dengan balok hijau di balon pikiran"
            editable={editFoto}
            natural
            containerClassName="relative w-full sm:w-[240px] flex-shrink-0 rounded-2xl overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tantangan Lanjutan (Transfer Konsep)
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151]">Ukuran balok berubah menjadi:</p>
            <ul className="m-0 p-4 list-none flex flex-col gap-1.5 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl w-fit">
              {ukuranBaru.map((u) => (
                <li key={u.label} className="flex items-center gap-2 text-sm text-[#374151]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                  <span className="w-16">{u.label}</span>= <span className="font-bold text-[#2563EB]">{u.value}</span>
                </li>
              ))}
            </ul>
            <EditablePageImage
              imageKey="M3-P9-L3-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={balokImage}
              alt="Balok hijau dengan panjang 24 cm, lebar 16 cm, dan tinggi 10 cm"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[320px]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Gunakan salah satu strategi yang telah kamu temukan sebelumnya untuk menentukan luas
              permukaan balok dengan ukuran baru tersebut.
            </p>
            <label htmlFor="transferKonsep" className="text-sm font-semibold text-[#374151] leading-[1.6]">
              Apakah strategi yang sama tetap dapat digunakan? Jelaskan alasanmu.
            </label>
            <textarea
              id="transferKonsep"
              name="answers.transfer_konsep"
              defaultValue={getValue("transfer_konsep")}
              rows={5}
              required
              placeholder="Tuliskan jawabanmu..."
              className={textareaClass}
            />
            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <path d="M12 2a5 5 0 00-3 9v2a1 1 0 001 1h4a1 1 0 001-1v-2a5 5 0 00-3-9z" />
                <path d="M9 21h6" />
              </svg>
              <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
                Ini adalah tantangan transfer konsep. Tunjukkan bahwa strategimu dapat digunakan
                pada ukuran yang berbeda!
              </p>
            </div>
          </div>
        </div>
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
