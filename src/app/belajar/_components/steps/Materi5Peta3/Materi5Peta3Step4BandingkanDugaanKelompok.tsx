import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const barisTabel = [
  { key: "hubungan", label: "Dugaan hubungan skala dan luas" },
  { key: "alasan", label: "Alasan yang mendukung dugaan" },
  { key: "persamaan", label: "Persamaan dugaan" },
  { key: "perbedaan", label: "Perbedaan dugaan" },
];

export default async function Materi5Peta3Step4BandingkanDugaanKelompok({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const heroImage = await getPageImage("M5-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8z" />
          </svg>
          Tahap 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid sm:grid-cols-[1fr_1.1fr] gap-5 items-center bg-gradient-to-br from-[#FEF9E7] to-[#FFF7ED] border border-[#F5E3A0] rounded-[24px] p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#78350F] flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M3 11v2a1 1 0 001 1h3l5 4V6L7 10H4a1 1 0 00-1 1zM16 9a4 4 0 010 6M18.5 6.5a8 8 0 010 11" />
            </svg>
            Ayo Bandingkan!
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
            Sekarang bandingkan dugaan kelompokmu dengan kelompok lain. Apakah semuanya memiliki dugaan yang sama?
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa berdiskusi mengelilingi meja berisi tabel hasil pengamatan"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          E
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Bandingkan Dugaan Kelompok
        </div>
      </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan hasil diskusi setelah membandingkan dugaan kelompokmu dengan satu kelompok lain.
        </p>
        <div className="rounded-[20px] border border-[#BFDBFE] overflow-hidden bg-white">
          <div className="hidden sm:grid grid-cols-[1.2fr_1fr_1fr] bg-[#1D4ED8] text-white text-sm font-bold">
            <div className="p-3">Hal yang Dibandingkan</div>
            <div className="p-3 border-l border-[#3B82F6]">Kelompok Kami</div>
            <div className="p-3 border-l border-[#3B82F6]">Kelompok Lain</div>
          </div>
          {barisTabel.map((b) => (
            <div key={b.key} className="grid sm:grid-cols-[1.2fr_1fr_1fr] border-t border-[#BFDBFE] first:border-t-0 sm:first:border-t">
              <p className="m-0 p-3 text-sm font-semibold text-[#1E3A8A] bg-[#EFF4FF] sm:bg-white">{b.label}</p>
              <textarea
                name={`answers.${b.key}_kami`}
                required
                rows={3}
                defaultValue={getValue(`${b.key}_kami`)}
                aria-label={`${b.label} - kelompok kami`}
                placeholder="Kelompok kami..."
                className="w-full p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] bg-white border-0 sm:border-l border-[#BFDBFE] focus:bg-[#EFF4FF] focus:outline-none resize-y"
              />
              <textarea
                name={`answers.${b.key}_lain`}
                required
                rows={3}
                defaultValue={getValue(`${b.key}_lain`)}
                aria-label={`${b.label} - kelompok lain`}
                placeholder="Kelompok lain..."
                className="w-full p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] bg-white border-0 border-t sm:border-t-0 sm:border-l border-[#BFDBFE] focus:bg-[#EFF4FF] focus:outline-none resize-y"
              />
            </div>
          ))}
        </div>
      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl py-2.5 px-4 flex items-center gap-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0">
          <path d="M5 13l4 4L19 7" />
        </svg>
        <p className="m-0 text-xs text-[#166534]">
          <span className="font-bold">Tips:</span> Catat poin penting dari hasil perbandingan untuk memperkuat dugaanmu.
        </p>
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
