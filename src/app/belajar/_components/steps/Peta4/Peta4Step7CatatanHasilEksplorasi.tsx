import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { key: "M1-P4-L7-1" as const, urutan: "1", alt: "Laptop menampilkan model kubus di GeoGebra 3D" },
  { key: "M1-P4-L7-2" as const, urutan: "2", alt: "Tablet menampilkan kubus hijau dalam Augmented Reality" },
  { key: "M1-P4-L7-3" as const, urutan: "3", alt: "Papan catatan dengan daftar centang dan kaca pembesar" },
];

export default async function Peta4Step7CatatanHasilEksplorasi({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambar = await Promise.all(alur.map((a) => getPageImage(a.key)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M12 8l3 1.7v3.6L12 15l-3-1.7V9.7L12 8z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengeksplorasi dengan Augmented Reality (AR)
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Catatan Hasil Eksplorasi
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-3">
            <label htmlFor="q1" className="flex items-center gap-3 text-sm font-bold text-[#111827]">
              <span className="w-9 h-9 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              </span>
              Informasi baru apa yang kamu peroleh melalui AR?
            </label>
            <textarea
              id="q1"
              name="answers.informasi_baru_ar"
              defaultValue={getValue("informasi_baru_ar")}
              rows={3}
              placeholder="Tuliskan temuan barumu di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-3">
            <label htmlFor="q2" className="flex items-center gap-3 text-sm font-bold text-[#111827]">
              <span className="w-9 h-9 rounded-full bg-[#FFEDD5] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.6" strokeLinecap="round"><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4M12 18h.01" /></svg>
              </span>
              Informasi apa yang masih perlu kamu selidiki atau amati lebih lanjut?
            </label>
            <textarea
              id="q2"
              name="answers.hal_perlu_diselidiki"
              defaultValue={getValue("hal_perlu_diselidiki")}
              rows={3}
              placeholder="Tuliskan hal yang masih perlu diselidiki..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bersiap ke Tahap Berikutnya
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-5">
          <p className="m-0 text-[15px] leading-[1.7] text-[#1E3A8A]">
            Kamu telah mengumpulkan berbagai informasi menggunakan GeoGebra 3D dan Augmented Reality (AR). Pada tahap
            berikutnya, informasi tersebut akan dibandingkan, diolah, dan dicari polanya untuk menyelidiki dugaan
            kelompokmu.
          </p>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-4">
            {alur.map((a, i) => (
              <div key={a.key} className="contents">
                <div className="flex flex-col items-center">
                  <EditablePageImage
                    imageKey={a.key}
                    materi={materi}
                    peta={peta}
                    step="7"
                    urutan={a.urutan}
                    src={gambar[i]}
                    alt={a.alt}
                    editable={editFoto}
                    imageClassName="object-contain"
                    containerClassName="relative w-full aspect-[4/3]"
                  />
                </div>
                {i < alur.length - 1 && (
                  <span className="text-2xl font-extrabold text-[#2563EB]">{i === 0 ? "+" : "→"}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/6`} />
        <NextStepButton />
      </div>
    </form>
  );
}
