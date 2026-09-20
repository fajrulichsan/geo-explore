import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta2Step1AmatiBangun({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const getChecked = (key: string) => Boolean(answers[key]);

  const [gambarHero, gambarBiru, gambarKuning, gambarHijau] = await Promise.all([
    getPageImage("M7-P2-L1-1"),
    getPageImage("M7-P2-L1-2"),
    getPageImage("M7-P2-L1-3"),
    getPageImage("M7-P2-L1-4"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
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

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">
            Amati dengan teliti tiga limas identik dan satu prisma
          </h2>
          <p className="m-0 text-sm text-white/90 max-w-2xl leading-[1.6]">
            Perhatikan luas alas, tinggi, dan kemungkinan hubungan volumenya. Di depan kita ada tiga
            limas identik dengan ukuran yang sama. Apakah volume tiga limas sama dengan volume satu
            prisma?
          </p>
        </div>
        <div className="relative bg-white rounded-2xl p-3 sm:p-4">
          <EditablePageImage
            imageKey="M7-P2-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarHero}
            alt="Tiga limas identik dengan luas alas L dan tinggi t yang sama dibandingkan dengan satu prisma yang memiliki luas alas L dan tinggi t"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#EFF4FF] border border-[#DBE7FF] rounded-[20px] p-5 sm:p-6">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Pengantar</h3>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">
          Pada kegiatan ini, kita akan memeriksa dan membandingkan: apakah ketiga limas mempunyai
          luas alas yang sama, apakah ketiga limas mempunyai tinggi yang sama, dan bagaimana
          hubungan ketiganya dengan prisma.
        </p>
        <p className="m-0 text-sm font-bold text-[#111827]">Fokuskan perhatianmu pada:</p>
        <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.5] list-disc">
          <li>bentuk alas limas dan prisma;</li>
          <li>tinggi limas dan prisma;</li>
          <li>ukuran ketiga limas;</li>
          <li>kemungkinan hubungan volume limas dan prisma.</li>
        </ul>
        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" className="mt-0.5 flex-shrink-0"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z" /></svg>
          <p className="m-0 text-sm text-[#374151] leading-[1.5]">
            Kita belum tahu jawabannya. Mari melakukan pengamatan terlebih dahulu!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Bangun Berikut
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <h3 className="m-0 text-sm font-extrabold text-[#2563EB]">Prisma dan Limas Biru</h3>
            </div>
          <EditablePageImage
            imageKey="M7-P2-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarBiru}
            alt="Limas biru di dalam prisma dengan tinggi t dan luas alas L"
            editable={editFoto}
            containerClassName="relative w-full aspect-[4/5] overflow-hidden"
            imageClassName="object-contain"
          />
            <p className="m-0 text-xs font-bold text-[#374151]">Yang dapat kamu amati (pada limas biru):</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-[#374151]">
                Luas alas:
                <input name="answers.biru_luas_alas" defaultValue={getValue("biru_luas_alas")} required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y flex-1 min-w-0 !py-1.5" />
              </label>
              <label className="flex items-center gap-2 text-sm text-[#374151]">
                Tinggi:
                <input name="answers.biru_tinggi" defaultValue={getValue("biru_tinggi")} required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y flex-1 min-w-0 !py-1.5" />
              </label>
              <label className="flex items-center gap-2 text-sm text-[#374151]">
                Bentuk alas:
                <input name="answers.biru_bentuk_alas" defaultValue={getValue("biru_bentuk_alas")} required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y flex-1 min-w-0 !py-1.5" />
              </label>
            </div>
            <label htmlFor="biru_posisi" className="text-sm font-bold text-[#111827]">
              Apa yang kamu amati tentang posisi limas di dalam prisma?
            </label>
            <textarea id="biru_posisi" name="answers.biru_posisi" defaultValue={getValue("biru_posisi")} rows={3} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <h3 className="m-0 text-sm font-extrabold text-[#111827]">Limas Kuning</h3>
            </div>
          <EditablePageImage
            imageKey="M7-P2-L1-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarKuning}
            alt="Limas kuning dengan tinggi t dan luas alas L"
            editable={editFoto}
            containerClassName="relative w-full aspect-[4/5] overflow-hidden"
            imageClassName="object-contain"
          />
            <p className="m-0 text-xs font-bold text-[#374151]">Bandingkan dengan limas biru, apakah:</p>
            <div className="flex flex-col gap-1.5">
              {[
                { key: "kuning_luas", label: "Luas alas sama?" },
                { key: "kuning_tinggi", label: "Tinggi sama?" },
                { key: "kuning_bentuk", label: "Bentuk alas sama?" },
              ].map((c) => (
                <label key={c.key} className="flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
                  <input type="checkbox" name={`answers.${c.key}`} defaultChecked={getChecked(c.key)} className="w-4 h-4 accent-[#2563EB]" />
                  {c.label}
                </label>
              ))}
            </div>
            <label htmlFor="kuning_sama" className="text-sm font-bold text-[#111827]">
              Apakah luas alas dan tingginya sama dengan limas biru?
            </label>
            <textarea id="kuning_sama" name="answers.kuning_sama" defaultValue={getValue("kuning_sama")} rows={2} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <h3 className="m-0 text-sm font-extrabold text-[#111827]">Limas Hijau</h3>
            </div>
          <EditablePageImage
            imageKey="M7-P2-L1-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={gambarHijau}
            alt="Limas hijau dengan tinggi t dan luas alas L"
            editable={editFoto}
            containerClassName="relative w-full aspect-[4/5] overflow-hidden"
            imageClassName="object-contain"
          />
            <p className="m-0 text-xs font-bold text-[#374151]">Bandingkan dengan limas biru, apakah:</p>
            <div className="flex flex-col gap-1.5">
              {[
                { key: "hijau_luas", label: "Luas alas sama?" },
                { key: "hijau_tinggi", label: "Tinggi sama?" },
                { key: "hijau_bentuk", label: "Bentuk alas sama?" },
              ].map((c) => (
                <label key={c.key} className="flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
                  <input type="checkbox" name={`answers.${c.key}`} defaultChecked={getChecked(c.key)} className="w-4 h-4 accent-[#2563EB]" />
                  {c.label}
                </label>
              ))}
            </div>
            <label htmlFor="hijau_sama" className="text-sm font-bold text-[#111827]">
              Apakah luas alas dan tingginya sama dengan limas biru?
            </label>
            <textarea id="hijau_sama" name="answers.hijau_sama" defaultValue={getValue("hijau_sama")} rows={2} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span />
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
