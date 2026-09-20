import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta2Step3ProsesPenuangan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarUngu, gambarKuning, gambarHijau, gambarPenuangan] = await Promise.all([
    getPageImage("M7-P2-L3-1"),
    getPageImage("M7-P2-L3-2"),
    getPageImage("M7-P2-L3-3"),
    getPageImage("M7-P2-L3-4"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Proses Penuangan Isi Limas
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Gunakan salah satu <span className="font-bold">limas identik</span> yang sudah kamu amati
          sebagai wadah yang diisi penuh dengan pasir (atau air), kemudian tuangkan isinya berulang
          kali ke dalam prisma yang memiliki luas alas dan tinggi yang sama. Limas yang digunakan
          adalah <span className="font-bold text-[#B45309]">limas kuning</span>.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-xs font-bold text-[#6B7280]">Tiga limas identik (pada Halaman 1)</p>
          <div className="grid grid-cols-3 gap-3 max-w-md">
            <div className="flex flex-col items-center gap-1 rounded-xl border border-[#E5E7EB] p-2">
              <EditablePageImage
                imageKey="M7-P2-L3-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambarUngu}
                alt="Limas ungu identik"
                editable={editFoto}
                containerClassName="relative w-full aspect-square overflow-hidden"
                imageClassName="object-contain"
              />
              <span className="text-[11px] font-semibold text-[#374151]">Limas ungu</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-[#F5C518] bg-[#FEF9E7] p-2">
              <EditablePageImage
                imageKey="M7-P2-L3-2"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={gambarKuning}
                alt="Limas kuning identik"
                editable={editFoto}
                containerClassName="relative w-full aspect-square overflow-hidden"
                imageClassName="object-contain"
              />
              <span className="text-[11px] font-semibold text-[#374151]">Limas kuning</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-[#E5E7EB] p-2">
              <EditablePageImage
                imageKey="M7-P2-L3-3"
                materi={materi}
                peta={peta}
                step={step}
                urutan="3"
                src={gambarHijau}
                alt="Limas hijau identik"
                editable={editFoto}
                containerClassName="relative w-full aspect-square overflow-hidden"
                imageClassName="object-contain"
              />
              <span className="text-[11px] font-semibold text-[#374151]">Limas hijau</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.5]">
              Satu limas diisi penuh, kemudian dituangkan berulang kali ke dalam prisma.
            </p>
          </div>
          <EditablePageImage
            imageKey="M7-P2-L3-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={gambarPenuangan}
            alt="Tiga tahap penuangan isi limas kuning ke dalam prisma: penuangan ke-1, ke-2, dan ke-3"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <h3 className="m-0 text-sm font-extrabold text-[#111827]">Checklist Pengamatan</h3>
          <p className="m-0 text-sm text-[#4B5563]">
            Pilihlah salah satu jawaban pada setiap penuangan berdasarkan hasil pengamatanmu.
          </p>
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-2.5 text-sm font-semibold text-[#111827] flex-1 min-w-[200px]">
                <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {n}
                </span>
                Setelah penuangan ke-{n}, prisma:
              </span>
              {[
                { value: "belum_penuh", label: "belum penuh" },
                { value: "penuh", label: "penuh" },
              ].map((o) => (
                <label key={o.value} className="inline-flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
                  <input type="radio" name={`answers.penuangan_${n}`} value={o.value} defaultChecked={getValue(`penuangan_${n}`) === o.value} required className="accent-[#2563EB]" />
                  {o.label}
                </label>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-2 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl p-4">
            <label htmlFor="simpulan_sementara" className="text-sm font-bold text-[#111827]">
              Apa yang dapat kamu simpulkan sementara dari kegiatan ini? Tuliskan pengamatanmu dengan kalimatmu sendiri.
            </label>
            <textarea id="simpulan_sementara" name="answers.simpulan_sementara" defaultValue={getValue("simpulan_sementara")} rows={3} placeholder="Ketik pengamatanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y bg-white" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
