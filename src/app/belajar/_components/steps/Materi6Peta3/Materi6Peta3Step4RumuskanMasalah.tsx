import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tips = [
  "Fokus pada ukuran satu lapisan (pada kubus/balok) atau penampang sejajar alas (pada prisma), banyak lapisan/posisi, serta ukuran bangun.",
  "Pertanyaan yang baik bersifat jelas, dapat diselidiki, dan berkaitan dengan volume.",
  "Kamu akan menguji dugaan ini menggunakan GeoGebra 3D dan Augmented Reality (AR) pada Tahap 3.",
];

export default async function Materi6Peta3Step4RumuskanMasalah({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarHero = await getPageImage("M6-P3-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Mengapa volume dapat ditentukan tanpa menghitung kubus satuan satu per satu?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1">
            Lanjutkan Diskusi Kelompok!
          </span>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Pada halaman sebelumnya, kamu telah membandingkan hasil pengamatan dan menyusun dugaan bersama.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Sekarang, rumuskan masalah yang akan kamu selidiki. Dugaan kelompokmu akan diuji pada Tahap 3 melalui
            eksplorasi menggunakan <span className="font-bold text-[#2563EB]">GeoGebra 3D</span> dan{" "}
            <span className="font-bold text-[#2563EB]">Augmented Reality (AR)</span>.
          </p>
          <div className="mt-auto rounded-xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 text-sm text-[#374151] leading-[1.5]">
            Pada Tahap 3, kita akan menggunakan GeoGebra 3D dan AR untuk menguji dugaan yang telah kalian susun pada
            tahap ini.{" "}
            <span className="font-bold text-[#2563EB]">Ayo pikirkan, rumuskan, dan siapkan dengan baik!</span>
          </div>
        </div>
        <EditablePageImage
          imageKey="M6-P3-L4-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa menyiapkan rencana eksplorasi dengan kubus, balok, dan prisma"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden bg-[#EFF4FF]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Rumuskan Masalah
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Diskusikan dan tuliskan pertanyaan yang menurut kelompokmu perlu diselidiki.</p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 items-start">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151] leading-[1.5]">
              <span className="font-bold text-[#2563EB]">Contoh pertanyaan:</span> Bagaimana cara menentukan volume
              bangun ruang (kubus, balok, atau prisma) tanpa menghitung kubus satuan satu per satu?
            </p>
            <p className="m-0 text-sm font-bold text-[#2563EB] leading-[1.5]">
              Tuliskan pertanyaan lain yang menurut kelompokmu juga penting untuk diselidiki. Tidak harus sama dengan
              contoh di atas.
            </p>
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-start gap-2.5">
                <span className="mt-2 w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs flex-shrink-0">
                  {n}
                </span>
                <textarea
                  name={`answers.rumusan_${n}`}
                  defaultValue={getValue(`rumusan_${n}`)}
                  rows={2}
                  placeholder="Ketik pertanyaanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            ))}
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
            <span className="text-base font-extrabold text-[#92400E]">Tips</span>
            {tips.map((t) => (
              <div key={t} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
                <span className="text-sm text-[#374151] leading-[1.5]">{t}</span>
              </div>
            ))}
          </div>
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
