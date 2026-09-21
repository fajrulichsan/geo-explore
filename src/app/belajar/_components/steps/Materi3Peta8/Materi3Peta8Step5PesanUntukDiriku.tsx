import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta8Step5PesanUntukDiriku({ materi, peta, step = "5", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarTrofi = await getPageImage("M3-P8-L5-1");
  const gambarBintang = await getPageImage("M3-P8-L5-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-3">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <p className="m-0 text-[15px] font-semibold text-[#2563EB]">Apa yang Sudah Kamu Pelajari Hari Ini?</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#C2410C]">
            Pesan untuk Diriku
          </div>
        </div>

        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-6 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <label htmlFor="pesan_untuk_diri" className="text-sm font-bold text-[#C2410C]">
              Tuliskan satu kalimat penyemangat untuk dirimu sendiri.
            </label>
            <textarea
              id="pesan_untuk_diri"
              name="answers.pesan_untuk_diri"
              defaultValue={getValue("pesan_untuk_diri")}
              rows={3}
              placeholder='"Hari ini saya berhasil..."'
              required
              className="w-full resize-none rounded-lg border border-[#FED7AA] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors"
            />
          </div>
          <EditablePageImage
            imageKey="M3-P8-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarTrofi}
            alt="Ilustrasi piala trofi dengan bintang"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-28 md:w-28 md:h-32 mx-auto flex-shrink-0"
          />
        </div>

        <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FDF3C7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-center gap-5">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white text-[#92400E] rounded-full py-1.5 px-4 text-xs font-bold mb-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
              </svg>
              Hebat!
            </div>
            <p className="m-0 text-sm leading-[1.7] text-[#4B5563]">
              Kamu telah menemukan sendiri bagaimana luas permukaan bangun ruang diperoleh dari jumlah luas
              seluruh sisinya. Teruslah menggunakan berbagai strategi, memberikan alasan matematis, dan
              percaya pada kemampuanmu dalam menyelesaikan masalah.
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P8-L5-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarBintang}
            alt="Ilustrasi bintang emas di atas piala"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-28 md:w-32 md:h-36 flex-shrink-0"
          />
        </div>

        <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-2xl py-4 px-5 flex items-start gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" className="flex-shrink-0">
            <path d="M3 10v4h4l6 4V6L7 10H3zM17 9a4 4 0 010 6M19.5 6.5a8 8 0 010 11" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.6]">
            Selanjutnya, tantang dirimu melalui kegiatan Tantangan Open-Ended untuk menemukan lebih banyak
            strategi dalam menyelesaikan masalah luas permukaan.
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
