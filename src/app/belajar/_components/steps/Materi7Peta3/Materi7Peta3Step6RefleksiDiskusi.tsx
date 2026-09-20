import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta3Step6RefleksiDiskusi({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const getChecked = (key: string) => Boolean(answers[key]);

  const [gambarMaskot] = await Promise.all([
    getPageImage("M7-P3-L3-1"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <circle cx="9" cy="12" r="0.6" />
            <circle cx="12.5" cy="12" r="0.6" />
            <circle cx="16" cy="12" r="0.6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Diskusi
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <p className="m-0 flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
              Apakah semua anggota kelompok mempunyai dugaan yang sama?
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { v: "ya", l: "Ya" },
                { v: "hampir_sama", l: "Hampir sama" },
                { v: "berbeda", l: "Berbeda" },
              ].map((o) => (
                <label key={o.v} className="cursor-pointer">
                  <input type="radio" name="answers.refleksi_sama" value={o.v} defaultChecked={getValue("refleksi_sama") === o.v} required className="peer sr-only" />
                  <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#4B5563] peer-checked:border-[#2563EB] peer-checked:bg-[#EFF4FF] peer-checked:text-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB]/40 transition-colors">
                    {o.l}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <label htmlFor="refleksi_penyebab" className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs flex-shrink-0">2</span>
              Jika berbeda, apa penyebab perbedaan tersebut?
            </label>
            <textarea id="refleksi_penyebab" name="answers.refleksi_penyebab" defaultValue={getValue("refleksi_penyebab")} rows={3} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <label htmlFor="refleksi_diuji" className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs flex-shrink-0">3</span>
              Dugaan mana yang paling penting diuji melalui GeoGebra 3D dan AR? Jelaskan alasanmu.
            </label>
            <textarea id="refleksi_diuji" name="answers.refleksi_diuji" defaultValue={getValue("refleksi_diuji")} rows={3} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Singkat
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Berilah tanda centang (✓) pada pernyataan yang sesuai dengan pengalamanmu selama kegiatan diskusi pada tahap ini.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-5 items-end">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {[
              { key: "refleksi_b_1", label: "Saya berani menyampaikan pendapat." },
              { key: "refleksi_b_2", label: "Saya mendengarkan pendapat teman." },
              { key: "refleksi_b_3", label: "Saya memberikan alasan terhadap dugaan." },
              { key: "refleksi_b_4", label: "Saya bekerja sama dalam diskusi kelompok." },
              { key: "refleksi_b_5", label: "Saya siap membuktikan dugaan menggunakan GeoGebra 3D dan AR pada tahap berikutnya." },
            ].map((r) => (
              <label key={r.key} className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" name={`answers.${r.key}`} defaultChecked={getChecked(r.key)} className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]" />
                <span className="text-sm text-[#374151] leading-[1.5]">{r.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
              imageKey="M7-P3-L3-1"
              materi={materi}
              peta={peta}
              step="3"
              urutan="1"
              src={gambarMaskot}
              alt="Maskot siswa perempuan menunjuk ke atas: Diskusi yang baik membuat kita lebih siap membuktikan dugaan!"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[3/2] max-w-[280px] mx-auto"
            />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
