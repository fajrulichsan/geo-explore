import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta6Step2Bandingkan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M3-P6-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hasil Penemuanmu</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">B</div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Bandingkan dengan Kelompok Lain
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Diskusikan hasilmu dengan satu kelompok lain.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#047857]">Persamaan</p>
            <p className="m-0 text-xs text-[#4B5563] mb-1">Tuliskan hasil yang sama.</p>
            <textarea
              name="answers.persamaan"
              defaultValue={getValue("persamaan")}
              rows={3}
              required
              placeholder="Tuliskan persamaannya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#059669] focus:outline-none transition-colors resize-none"
            />
          </div>
          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#B91C1C]">Perbedaan</p>
            <p className="m-0 text-xs text-[#4B5563] mb-1">Tuliskan hasil yang berbeda.</p>
            <textarea
              name="answers.perbedaan"
              defaultValue={getValue("perbedaan")}
              rows={3}
              required
              placeholder="Tuliskan perbedaannya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#2563EB]">Menurutmu, mengapa hasil tersebut bisa berbeda?</p>
            <textarea
              name="answers.penyebab_perbedaan"
              defaultValue={getValue("penyebab_perbedaan")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4">
          <p className="m-0 text-xs text-[#4B5563] leading-[1.6]">
            Perbedaan dapat terjadi karena cara menghitung, penggunaan data, pemahaman pola, atau
            alasan lainnya. Periksa kembali penyebabnya.
          </p>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5 flex items-center gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
          </svg>
          <p className="m-0 text-xs text-[#92400E]">Data hasil verifikasi akan digunakan untuk memperbaiki jawaban pada halaman berikutnya.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Ingat!</p>
            <p className="m-0 text-xs leading-[1.6] text-[#1E40AF]">
              Verifikasi bukan untuk mencari kesalahan teman, tetapi untuk memastikan bahwa setiap
              jawaban didukung oleh bukti dan alasan matematis yang logis.
            </p>
          </div>
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none" className="flex-shrink-0">
            <circle cx="28" cy="28" r="18" fill="#EFF6FF" stroke="#2563EB" strokeWidth="5" />
            <path d="M20 29l6 6 12-13" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M41 41l16 16" stroke="#1E3A8A" strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-extrabold text-[#B45309]">Kotak Motivasi</p>
            <p className="m-0 text-xs leading-[1.6] text-[#92400E]">
              Setiap perbaikan yang kamu lakukan menunjukkan bahwa proses berpikirmu semakin
              berkembang. Teruslah menggunakan bukti untuk memperkuat setiap jawabanmu!
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P6-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot siswi mengacungkan jempol"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-32 flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
