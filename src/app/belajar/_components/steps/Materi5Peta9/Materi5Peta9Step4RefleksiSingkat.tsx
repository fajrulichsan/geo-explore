import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "lebih_dari_satu_strategi", label: "Saya menemukan lebih dari satu strategi." },
  { key: "alasan_matematis", label: "Saya dapat menjelaskan alasan matematis." },
  { key: "membandingkan_strategi", label: "Saya dapat membandingkan strategi penyelesaian." },
  { key: "konsep_situasi_baru", label: "Saya dapat menggunakan konsep skala pada situasi baru." },
  { key: "percaya_diri", label: "Saya percaya diri menjelaskan jawaban saya kepada teman." },
];

export default async function Materi5Peta9Step4RefleksiSingkat({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const celebrateImage = await getPageImage("M5-P9-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Singkat
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-start gap-5">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Centang (✓) semua pernyataan yang sesuai dengan pengalamanmu saat menyelesaikan
              Tantangan Open-Ended.
            </p>
            <div className="flex flex-col gap-2.5">
              {pernyataan.map((p) => (
                <label
                  key={p.key}
                  className="flex items-start gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-2.5 px-3.5 text-sm font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFFDF4] has-[:checked]:border-[#16A34A] transition-colors"
                >
                  <input
                    type="checkbox"
                    name={`answers.refleksi_${p.key}`}
                    value="ya"
                    defaultChecked={getValue(`refleksi_${p.key}`) === "ya"}
                    className="mt-0.5 accent-[#16A34A]"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </div>
          <EditablePageImage
            imageKey="M5-P9-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={celebrateImage}
            alt="Dua siswa merayakan keberhasilan menyelesaikan tantangan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 sm:w-32 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF] hidden sm:block"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#92400E] flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706">
              <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6l-6.3 4.4 2.3-7.2-6-4.4h7.6z" />
            </svg>
            Teruslah berpikir kreatif!
          </p>
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
            Dalam matematika, satu masalah dapat diselesaikan dengan berbagai strategi yang
            sama-sama benar apabila didukung oleh alasan matematis yang logis.
          </p>
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#1E3A8A] flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563EB">
              <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6l-6.3 4.4 2.3-7.2-6-4.4h7.6z" />
            </svg>
            Inti Open-Ended
          </p>
          <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
            Open-Ended bukan sekadar mencari jawaban. Yang paling penting adalah:
          </p>
          <ul className="m-0 pl-4 flex flex-col gap-0.5">
            <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
              Menggunakan berbagai strategi;
            </li>
            <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
              Memberikan alasan matematis;
            </li>
            <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
              Membandingkan efektivitas strategi;
            </li>
            <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
              Memperbaiki strategi apabila diperlukan;
            </li>
            <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
              Menerapkan konsep pada situasi baru.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
