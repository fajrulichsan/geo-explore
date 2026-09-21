import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const sikap = [
  { key: "sikap_dengar", text: "mendengarkan pendapat teman." },
  { key: "sikap_hargai", text: "menghargai perbedaan jawaban." },
  { key: "sikap_perbaiki", text: "mau memperbaiki jawaban." },
  { key: "sikap_berusaha", text: "tetap berusaha ketika mengalami kesulitan." },
  { key: "sikap_berani", text: "berani menyampaikan pendapat." },
];

export default async function Materi2Peta8Step5SikapTarget({ materi, peta, step = "5", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const diskusi = await getPageImage("M2-P8-L5-1");
  const target = await getPageImage("M2-P8-L5-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#0F766E]">
            Refleksi Sikap
          </div>
        </div>
        <div className="bg-[#F0FDFA] border border-[#99F6E4] rounded-[20px] p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 w-full flex flex-col gap-2.5">
            <p className="m-0 text-sm text-[#0F766E]">
              Berilah tanda centang (✓) pada pernyataan berikut. <strong>Selama pembelajaran saya...</strong>
            </p>
            {sikap.map((c) => (
              <label
                key={c.key}
                className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl py-3 px-4 cursor-pointer hover:border-[#0D9488] has-[:checked]:border-[#0D9488] transition-colors"
              >
                <input type="checkbox" name={`answers.${c.key}`} value="true" defaultChecked={getValue(c.key) === "true"} className="peer sr-only" />
                <span className="w-5 h-5 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#0D9488] peer-checked:border-[#0D9488] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M2-P8-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={diskusi}
            alt="Tiga siswa berdiskusi di meja dengan buku terbuka"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[320px] flex-shrink-0 rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#9D174D]">
            Target Belajar Berikutnya
          </div>
        </div>
        <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-[20px] p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 w-full flex flex-col gap-2">
            <label htmlFor="p8-target" className="text-sm font-bold text-[#9D174D]">
              Tuliskan satu targetmu pada pembelajaran berikutnya.
            </label>
            <p className="m-0 text-sm text-[#4B5563]">Pada materi berikutnya saya ingin...</p>
            <textarea
              id="p8-target"
              name="answers.target_berikutnya"
              defaultValue={getValue("target_berikutnya")}
              rows={3}
              placeholder="Tulis targetmu di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#FBCFE8] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DB2777] focus:outline-none transition-colors"
            />
          </div>
          <EditablePageImage
            imageKey="M2-P8-L5-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={target}
            alt="Siswi berhijab menunjuk ke atas dengan gelembung pikiran berisi papan target"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-36 h-44 md:w-40 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FDF3C7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-center gap-5">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-white text-[#92400E] rounded-full py-1.5 px-4 text-xs font-bold mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
            Kotak Motivasi
          </div>
          <p className="m-0 mb-1 text-sm font-bold text-[#92400E]">Hebat!</p>
          <p className="m-0 text-sm leading-[1.7] text-[#4B5563]">
            Kemampuan matematika berkembang bukan karena selalu langsung benar, tetapi karena mau berpikir, mencoba, memeriksa kembali, dan memberikan jawaban dengan alasan yang logis.
          </p>
        </div>
        <svg width="72" height="72" viewBox="0 0 24 24" fill="#FBBF24" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round" className="flex-shrink-0">
          <path d="M7 3h10v6a5 5 0 01-10 0V3z" />
          <path d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3" fill="none" />
          <path d="M12 14v4M8 21h8M9 18h6" fill="none" />
        </svg>
      </div>

      <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-2xl py-4 px-5 flex items-start gap-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M12 15l-3-3a22 22 0 012-4 13 13 0 0111-5c0 2.7-.7 7.5-5 11a22 22 0 01-4 2zM9 12H4s.6-3 2-4c1.6-1 5 0 5 0M12 15v5s3-.6 4-2c1-1.6 0-5 0-5" />
        </svg>
        <div>
          <p className="m-0 text-sm font-bold text-[#1D4ED8]">Menuju Langkah Selanjutnya</p>
          <p className="m-0 text-sm text-[#1D4ED8] leading-[1.6]">
            Kamu telah menyimpulkan dan merefleksikan hasil belajarmu. Sekarang, terapkan pemahamanmu melalui Tantangan Open-Ended!
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
