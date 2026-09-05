import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bentuk = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma" },
  { key: "limas", label: "Limas" },
];

export default async function Materi5Peta7Step6GeneralisasiIntiKonsep({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M5-P7-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Skala dan Luas Bangun Ruang Sisi Datar
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              G
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Generalisasi Konsep</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Apakah hubungan antara faktor skala dan luas permukaan berlaku untuk bangun ruang
            berikut ketika setiap ukuran panjangnya diubah dengan faktor skala yang sama?
          </p>

          <div className="grid grid-cols-2 gap-3">
            {bentuk.map((b) => (
              <label
                key={b.key}
                className="flex items-center gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#ECFDF5] has-[:checked]:border-[#16A34A] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.berlaku_${b.key}`}
                  defaultChecked={checked(`berlaku_${b.key}`)}
                  className="w-4 h-4 accent-[#16A34A] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{b.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_generalisasi" className="text-sm text-[#374151]">
              Jika ya, tuliskan alasan yang telah kamu simpulkan.
            </label>
            <textarea
              id="alasan_generalisasi"
              name="answers.alasan_generalisasi"
              defaultValue={getValue("alasan_generalisasi")}
              rows={4}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-[#EFF4FF] border border-2 border-dashed border-[#93C5FD] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#1D4ED8]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563EB">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
              Inti Konsep
            </p>
            <p className="m-0 text-sm font-semibold text-[#1E3A8A] text-center leading-[1.6]">
              Jika setiap ukuran panjang suatu bangun ruang dikalikan dengan faktor skala k, maka
              luas permukaannya menjadi k&sup2; kali luas permukaan semula.
            </p>
            <p className="m-0 text-xs text-[#3B82F6] leading-[1.5]">
              Hubungan ini berlaku untuk seluruh bangun ruang sisi datar yang diperoleh melalui
              penskalaan seragam.
            </p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-4 justify-between">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#92400E]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706">
                <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
              </svg>
              Hebat!
            </p>
            <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
              Kamu telah menemukan sendiri hubungan antara faktor skala dan luas permukaan melalui
              proses mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi, dan
              menyimpulkan.
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/50">
                <EditablePageImage
                  imageKey="M5-P7-L6-1"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="1"
                  src={mascotImage}
                  alt="Siswi memberi jempol tanda semangat"
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-full"
                />
              </div>
              <p className="m-0 text-xs text-[#92400E]">
                Kemampuan menemukan konsep sendiri membantumu memahami matematika secara lebih
                mendalam daripada sekadar menghafal rumus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE REFLEKSI DIRI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
