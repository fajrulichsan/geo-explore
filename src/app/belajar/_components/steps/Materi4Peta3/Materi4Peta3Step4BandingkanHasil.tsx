import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "cara", label: "Cara menentukan luas permukaan", badge: "bg-[#15803D]" },
  { key: "bagian", label: "Bagian yang perlu diperhitungkan", badge: "bg-[#F59E0B]" },
  { key: "alasan", label: "Alasan matematis", badge: "bg-[#2563EB]" },
];

const kolom = [
  { key: "kami", label: "Kelompok Kami" },
  { key: "lain", label: "Kelompok Lain" },
];

const textareaClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Materi4Peta3Step4BandingkanHasil({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascot = await getPageImage("M4-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Halaman 2 dari 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5 rounded-[20px] bg-[#FEF9E7] border border-[#F5E3A0] p-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <span className="text-base font-bold text-[#92400E]">Petunjuk</span>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
            Bandingkan hasil diskusimu dengan kelompok lain, lengkapi setiap aktivitas, kemudian susun
            hipotesis dan prediksi yang akan dibuktikan pada tahap eksplorasi.
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascot}
          alt="Tiga siswa berdiskusi di meja belajar"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full sm:w-56 aspect-[4/3] flex-shrink-0"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Diskusi
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Bandingkan hasil diskusimu dengan kelompok lain. Lengkapilah tabel berikut.
        </p>

        <div className="flex flex-col gap-4">
          {baris.map((b) => (
            <div key={b.key} className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 bg-[#1E3A8A] px-5 py-3">
                <span className={`w-2.5 h-2.5 rounded-full ${b.badge} ring-2 ring-white/70 flex-shrink-0`} />
                <span className="text-sm font-bold text-white">{b.label}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 p-5">
                {kolom.map((k) => (
                  <div key={k.key} className="flex flex-col gap-2">
                    <label htmlFor={`${b.key}_${k.key}`} className="text-xs font-bold text-[#1E3A8A] uppercase tracking-[0.04em]">
                      {k.label}
                    </label>
                    <textarea
                      id={`${b.key}_${k.key}`}
                      name={`answers.${b.key}_${k.key}`}
                      defaultValue={getValue(`${b.key}_${k.key}`)}
                      rows={3}
                      placeholder="Tuliskan di sini..."
                      required
                      className={textareaClass}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2.5 bg-[#EFF4FF] border border-[#DBE4FF] rounded-2xl px-5 py-3.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#D97706" className="mt-0.5 flex-shrink-0">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <p className="m-0 text-sm text-[#1E3A8A]">
            Tuliskan strategi dan alasan yang digunakan oleh kelompokmu dan kelompok lain.
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
