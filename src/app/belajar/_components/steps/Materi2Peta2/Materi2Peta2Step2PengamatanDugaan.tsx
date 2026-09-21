import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  { n: 1, label: "Menurutmu, gambar manakah yang dapat dilipat menjadi bangun ruang?" },
  { n: 2, label: "Gambar manakah yang menurutmu tidak dapat dilipat?" },
  { n: 3, label: "Apakah semua gambar memiliki jumlah sisi yang sama?" },
  { n: 4, label: "Apa perbedaan susunan bidang datar pada setiap gambar?" },
];

const textareaClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Materi2Peta2Step2PengamatanDugaan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Pengamatan
            </div>
          </div>

          <div className="bg-[#EFF4FF] rounded-[20px] p-5 sm:p-6 flex flex-col gap-5">
            {pertanyaan.map((q) => (
              <div key={q.n} className="flex flex-col gap-2.5">
                <div className="flex items-start gap-3">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {q.n}
                  </div>
                  <label htmlFor={`pengamatan${q.n}`} className="flex-1 text-sm font-semibold text-[#1E3A8A] leading-[1.5]">
                    {q.label}
                  </label>
                </div>
                <textarea
                  id={`pengamatan${q.n}`}
                  name={`answers.pengamatan_${q.n}`}
                  defaultValue={getValue(`pengamatan_${q.n}`)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className={`${textareaClass} bg-white`}
                />
              </div>
            ))}
          </div>

          <div className="rounded-[20px] bg-[#FDF2F8] border border-[#FBCFE8] p-5 flex gap-4 items-start">
            <EditablePageImage
              imageKey="M2-P2-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascotImage}
              alt="Siswi berhijab menunjuk ke atas sambil berpikir"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-20 h-32 flex-shrink-0"
            />
            <div className="flex-1 flex flex-col gap-2.5">
              <span className="inline-flex w-fit rounded-full bg-[#F9A8D4] text-[#831843] text-sm font-extrabold px-4 py-1">
                Ayo Berpikir!
              </span>
              <label htmlFor="berpikir" className="text-sm text-[#374151] leading-[1.6]">
                Perhatikan kembali semua susunan di atas. Menurutmu, apa yang menentukan apakah suatu susunan dapat
                dilipat menjadi bangun ruang?
              </label>
              <textarea
                id="berpikir"
                name="answers.berpikir"
                defaultValue={getValue("berpikir")}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className={`${textareaClass} bg-white`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Awal
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">
              Berdasarkan hasil pengamatanmu pada halaman ini, menurutmu seperti apakah ciri-ciri susunan bidang datar
              yang dapat dilipat menjadi bangun ruang? Tuliskan dugaan awalmu!
            </p>
            <textarea
              name="answers.dugaan_awal"
              defaultValue={getValue("dugaan_awal")}
              rows={7}
              placeholder="Tuliskan dugaan awalmu di sini..."
              required
              className="w-full rounded-2xl border-2 border-[#86EFAC] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
          <div className="flex items-start gap-2.5 bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl py-3 px-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.6]">
              Hebat! Kamu sudah mulai mengamati dan berpikir! Nanti, kita akan berdiskusi dan meneliti lebih lanjut.
            </p>
          </div>
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
