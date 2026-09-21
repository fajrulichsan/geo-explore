import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const inputClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

const kemungkinan = [
  "Cara menghitung yang digunakan berbeda.",
  "Ada sisi yang terlewat atau belum dihitung.",
  "Strategi yang digunakan berbeda.",
];

export default async function Materi4Peta6Step2BandingkanKelompok({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const thumbsImage = await getPageImage("M4-P6-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#2563EB]">Bandingkan dengan Kelompok Lain</span>
          <span className="text-xs text-[#6B7280]">
            Diskusikan hasil kelompokmu dengan kelompok lain, lalu tuliskan persamaan dan perbedaannya.
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden focus-within:border-[#2563EB] transition-colors">
          <div className="bg-[#1E3A8A] text-white px-5 py-3 text-center">
            <div className="text-sm font-bold">Persamaan</div>
            <div className="text-xs opacity-80">(Apa yang sama?)</div>
          </div>
          <div className="p-4">
            <textarea
              name="answers.persamaan"
              defaultValue={getValue("persamaan")}
              rows={6}
              placeholder="Tulis persamaannya di sini..."
              required
              aria-label="Persamaan"
              className={inputClass}
            />
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden focus-within:border-[#2563EB] transition-colors">
          <div className="bg-[#1E3A8A] text-white px-5 py-3 text-center">
            <div className="text-sm font-bold">Perbedaan</div>
            <div className="text-xs opacity-80">(Apa yang berbeda?)</div>
          </div>
          <div className="p-4">
            <textarea
              name="answers.perbedaan"
              defaultValue={getValue("perbedaan")}
              rows={6}
              placeholder="Tulis perbedaannya di sini..."
              required
              aria-label="Perbedaan"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
            ?
          </span>
          <div className="flex flex-col gap-2">
            <label htmlFor="mengapa_beda" className="text-sm font-bold text-[#1E3A8A] leading-[1.5]">
              Mengapa hasil tersebut bisa berbeda?
            </label>
            <p className="m-0 text-sm font-semibold text-[#374151]">Kemungkinan penyebabnya:</p>
            <ul className="m-0 pl-5 list-disc text-sm text-[#374151] leading-[1.6]">
              {kemungkinan.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </div>
        <textarea
          id="mengapa_beda"
          name="answers.mengapa_beda"
          defaultValue={getValue("mengapa_beda")}
          rows={3}
          placeholder="Tulis jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#BFDBFE] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-5">
        <EditablePageImage
          imageKey="M4-P6-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={thumbsImage}
          alt="Dua siswa mengacungkan jempol"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[200px] flex-shrink-0 overflow-hidden bg-white"
        />
        <div className="flex flex-col gap-2">
          <span className="text-base font-extrabold text-[#111827]">Catatan Penting!</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Verifikasi adalah langkah penting untuk memastikan bahwa setiap jawaban didukung oleh bukti, alasan
            matematis, dan kerja sama kelompok.
          </p>
          <p className="m-0 text-sm font-semibold text-[#2563EB]">Verifikasi yang teliti membuat penemuanmu semakin kuat!</p>
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
