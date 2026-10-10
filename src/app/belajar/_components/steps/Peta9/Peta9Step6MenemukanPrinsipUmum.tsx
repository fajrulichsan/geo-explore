import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "refleksi_belajar", label: "Hari ini saya belajar bahwa ..." },
  { key: "refleksi_paling_membantu", label: "Strategi klasifikasi yang paling membantu saya adalah ... karena ..." },
  { key: "refleksi_ingin_pelajari", label: "Hal yang masih ingin saya pelajari adalah ..." },
];

const bekalku = [
  "Menggunakan lebih dari satu dasar klasifikasi.",
  "Memberikan alasan matematis.",
  "Membandingkan beberapa strategi.",
  "Memilih strategi yang paling sesuai.",
  "Memperbaiki strategi jika diperlukan.",
  "Menerapkan konsep klasifikasi pada situasi baru.",
];

export default async function Peta9Step6MenemukanPrinsipUmum({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getChecked = (key: string) => Boolean(answers[key]);
  const ikonRefleksi = await Promise.all(
    (["M1-P9-L6-1", "M1-P9-L6-2", "M1-P9-L6-3", "M1-P9-L6-4"] as const).map((k) => getPageImage(k))
  );
  const ikonBekalku = await getPageImage("M1-P9-L6-5");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
              Refleksi Berpikir
            </div>
            <div className="flex items-center gap-2 ml-auto">
              {(["M1-P9-L6-1", "M1-P9-L6-2", "M1-P9-L6-3", "M1-P9-L6-4"] as const).map((k, i) => (
                <EditablePageImage
                  key={k}
                  imageKey={k}
                  materi={materi}
                  peta={peta}
                  step="6"
                  urutan={String(i + 1)}
                  src={ikonRefleksi[i]}
                  alt=""
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-10 h-10"
                />
              ))}
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
            Lengkapilah kalimat berikut dengan jujur dan terbuka.
          </p>
          <div className="flex flex-col gap-3">
            {refleksi.map((r) => (
              <div key={r.key} className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[16px] p-4 flex flex-col gap-2">
                <label htmlFor={r.key} className="text-sm font-bold text-[#92400E]">
                  {r.label}
                </label>
                <textarea
                  id={r.key}
                  name={`answers.${r.key}`}
                  defaultValue={getValue(r.key)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-lg border border-[#FDE68A] bg-white px-3.5 py-2.5 text-sm resize-y focus:border-[#D97706] focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Bekalku Setelah Tantangan
            </div>
            <EditablePageImage
              imageKey="M1-P9-L6-5"
              materi={materi}
              peta={peta}
              step="6"
              urutan="5"
              src={ikonBekalku}
              alt=""
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-12 h-14 ml-auto"
            />
          </div>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
            Setelah menyelesaikan Tantangan Open-Ended, centang hal-hal yang sudah kamu mampu.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-3">
            {bekalku.map((b, i) => (
              <label key={b} className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.bekalku_${i}`}
                  defaultChecked={getChecked(`bekalku_${i}`)}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]"
                />
                <span className="text-sm text-[#374151] leading-[1.5]">{b}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/5`} />
        <NextStepButton />
      </div>
    </form>
  );
}
