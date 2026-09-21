import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "cara", label: "Cara memperoleh luas permukaan", color: "#16A34A", icon: <path d="M4 20V4M4 20h16M8 16l4-5 3 3 4-6" /> },
  { key: "alasan", label: "Alasan yang digunakan", color: "#D97706", icon: <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" /> },
  {
    key: "persamaan",
    label: "Persamaan",
    color: "#2563EB",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
      </>
    ),
  },
  {
    key: "perbedaan",
    label: "Perbedaan",
    color: "#7C3AED",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
];

const kolom = [
  { key: "kami", label: "Kelompok Kami" },
  { key: "lain", label: "Kelompok Lain" },
];

export default async function Materi3Peta3Step3BandingkanPendapat({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const mascot = await getPageImage("M3-P3-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 items-center">
          <div className="flex flex-col gap-4">
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 &ndash; Ayo Berdiskusi
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
            <p className="m-0 text-lg font-bold text-[#2563EB]">&ldquo;Membandingkan Berbagai Pendapat&rdquo;</p>
            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-4 px-5 text-sm leading-[1.6] text-[#374151]">
              Bandingkan hasil diskusi kelompokmu dengan kelompok lain. Temukan persamaan, perbedaan, dan alasan
              yang paling logis sebelum menentukan dugaan kelompok untuk diuji pada tahap eksplorasi berikutnya.
            </div>
          </div>
          <EditablePageImage
            imageKey="M3-P3-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascot}
            alt="Tiga siswa berdiskusi sambil membandingkan pendapat"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-[20px] bg-white border border-[#E5E7EB]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Pendapat
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Bandingkan hasil diskusi kelompokmu dengan kelompok lain, kemudian tuliskan persamaan dan
          perbedaannya pada tabel berikut.
        </p>
        <div className="flex flex-col gap-4">
          {baris.map((b) => (
            <div
              key={b.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: b.color }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    {b.icon}
                  </svg>
                </div>
                <p className="m-0 text-sm font-bold text-[#111827]">{b.label}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {kolom.map((k) => (
                  <div key={k.key} className="flex flex-col gap-1.5">
                    <label htmlFor={`${b.key}_${k.key}`} className="text-xs font-bold text-[#1E3A8A]">
                      {k.label}
                    </label>
                    <textarea
                      id={`${b.key}_${k.key}`}
                      name={`answers.${b.key}_${k.key}`}
                      defaultValue={getValue(`${b.key}_${k.key}`)}
                      rows={2}
                      placeholder="Ketik jawabanmu di sini..."
                      required
                      className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
