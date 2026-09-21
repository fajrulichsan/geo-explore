import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bentuk = [
  { key: "kubus", label: "Kubus", imageKey: "M5-P7-L6-2", urutan: "2" },
  { key: "balok", label: "Balok", imageKey: "M5-P7-L6-3", urutan: "3" },
  { key: "prisma", label: "Prisma", imageKey: "M5-P7-L6-4", urutan: "4" },
  { key: "limas", label: "Limas", imageKey: "M5-P7-L6-5", urutan: "5" },
] as const;

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
  const bentukImages = await Promise.all(bentuk.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Temukan Konsep Hubungan Skala dan Luas
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bentuk.map((b, i) => (
              <label
                key={b.key}
                className="flex flex-col items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3 cursor-pointer has-[:checked]:bg-[#ECFDF5] has-[:checked]:border-[#16A34A] transition-colors"
              >
                <div className="relative w-full aspect-square">
                  <EditablePageImage
                    imageKey={b.imageKey}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={b.urutan}
                    src={bentukImages[i]}
                    alt={b.label}
                    editable={editFoto}
                    imageClassName="object-contain"
                    containerClassName="relative w-full h-full"
                  />
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-[#374151]">
                  <input
                    type="checkbox"
                    name={`answers.berlaku_${b.key}`}
                    defaultChecked={checked(`berlaku_${b.key}`)}
                    className="w-4 h-4 accent-[#16A34A]"
                  />
                  {b.label}
                </span>
              </label>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_generalisasi" className="text-sm font-semibold text-[#111827]">
              Jika ya, tuliskan dengan yang telah kamu simpulkan.
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
          <div className="bg-[#EFF4FF] border-2 border-dashed border-[#93C5FD] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#1D4ED8]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563EB">
                <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
              </svg>
              Inti Konsep
            </p>
            <p className="m-0 text-sm font-semibold text-[#1E3A8A] text-center leading-[1.7]">
              Jika setiap ukuran panjang suatu bangun ruang dikalikan dengan{" "}
              <span className="text-[#DC2626]">faktor skala <span className="italic">k</span></span>,
              maka luas permukaannya menjadi <span className="text-[#DC2626] italic">k</span>&sup2; kali
              luas permukaan semula.
            </p>
            <p className="m-0 text-xs text-[#3B82F6] leading-[1.5]">
              Hubungan ini berlaku untuk seluruh bangun ruang sisi datar yang diperoleh melalui
              penskalaan seragam.
            </p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 grid grid-cols-[1fr_auto] gap-4 items-center">
            <div className="flex flex-col gap-3">
              <p className="m-0 text-sm font-bold text-[#92400E]">Hebat!</p>
              <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
                Kamu telah menemukan sendiri hubungan antara faktor skala dan luas permukaan melalui
                proses mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi, dan
                menyimpulkan.
              </p>
              <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
                Kemampuan menemukan konsep sendiri akan membantumu memahami matematika secara lebih
                mendalam daripada sekadar menghafal rumus.
              </p>
            </div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <EditablePageImage
              imageKey="M5-P7-L6-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascotImage}
              alt="Siswi mengepalkan tangan tanda semangat dikelilingi bintang"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
