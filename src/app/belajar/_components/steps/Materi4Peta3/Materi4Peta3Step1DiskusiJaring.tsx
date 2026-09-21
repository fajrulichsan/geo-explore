import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const limas: { key: string; label: string; imageKey: PageImageKey; color: string; border: string }[] = [
  { key: "segitiga", label: "Limas Segitiga", imageKey: "M4-P3-L1-2", color: "text-[#4D7C0F]", border: "border-[#BEDC96]" },
  { key: "segiempat", label: "Limas Segiempat", imageKey: "M4-P3-L1-3", color: "text-[#EA580C]", border: "border-[#FDBA74]" },
  { key: "segilima", label: "Limas Segilima", imageKey: "M4-P3-L1-4", color: "text-[#2563EB]", border: "border-[#93C5FD]" },
];

const bagian = [
  { key: "alas", label: "Alas" },
  { key: "sisi_tegak", label: "Semua sisi tegak" },
];

export default async function Materi4Peta3Step1DiskusiJaring({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "on" || answers[key] === "true";

  const [mascot, ...jaring] = await Promise.all([
    getPageImage("M4-P3-L1-1"),
    ...limas.map((l) => getPageImage(l.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Halaman 1 dari 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5 rounded-[20px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#DBE4FF] p-5">
        <div className="flex-1 flex flex-col gap-3">
          <p className="m-0 text-lg sm:text-xl font-extrabold text-[#1E3A8A]">
            Bagaimana Luas Permukaan Limas Dapat Ditentukan?
          </p>
          <div className="bg-white/80 border border-[#DBE4FF] rounded-2xl p-4 flex flex-col gap-1">
            <span className="text-sm font-bold text-[#2563EB]">Pengantar</span>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Gunakan hasil pengamatan pada Tahap 1 untuk berdiskusi dan menyusun dugaan tentang cara
              menentukan luas permukaan limas. Sertakan alasan pada setiap dugaan.
            </p>
          </div>
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
          containerClassName="relative w-full sm:w-64 aspect-[4/3] flex-shrink-0"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Diskusikan Bersama Kelompokmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan kembali gambar berikut. Beri tanda centang (&#10003;) pada bagian-bagian yang luasnya
          perlu diperhitungkan untuk menentukan luas permukaan limas.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {limas.map((l, i) => (
            <div key={l.key} className={`flex flex-col bg-white border ${l.border} rounded-[20px] overflow-hidden`}>
              <p className={`m-0 px-4 pt-4 text-sm font-bold ${l.color}`}>{l.label}</p>
              <EditablePageImage
                imageKey={l.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 2)}
                src={jaring[i]}
                alt={`Limas dan jaring-jaring ${l.label.toLowerCase()}`}
                editable={editFoto}
                natural
                containerClassName="relative w-full px-2 pt-2"
              />
              <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
                <p className="m-0 text-xs text-[#4B5563]">Menurut kelompokmu, bagian yang perlu diperhitungkan adalah...</p>
                {bagian.map((b) => (
                  <label
                    key={b.key}
                    className="flex items-center gap-2.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
                  >
                    <input
                      type="checkbox"
                      name={`answers.bagian_${l.key}_${b.key}`}
                      defaultChecked={isChecked(`bagian_${l.key}_${b.key}`)}
                      className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                    />
                    <span className="text-sm font-semibold text-[#374151]">{b.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl px-5 py-3.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#D97706" className="mt-0.5 flex-shrink-0">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E]">
            Dari ketiga jaring-jaring di atas, tampak satu alas dan beberapa sisi tegak berbentuk segitiga.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
