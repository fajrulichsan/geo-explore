import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const penyebab = [
  "Cara menghitung yang digunakan berbeda.",
  "Ada sisi yang terlewat atau belum dihitung.",
  "Strategi yang digunakan berbeda.",
];

export default async function Materi4Peta6Step2Bandingkan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const thumbsUpImage = await getPageImage("M4-P6-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Bandingkan dengan Kelompok Lain
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Diskusikan hasil kelompokmu dengan kelompok lain, lalu tuliskan persamaan dan perbedaannya.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                <circle cx="9" cy="8" r="3" />
                <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6M17 8a3 3 0 100-6M23 20c0-2.8-2-5-5-5.7" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#047857]">Persamaan (Apa yang sama?)</p>
            </div>
            <textarea
              name="answers.persamaan"
              defaultValue={getValue("persamaan")}
              rows={4}
              required
              placeholder="Tuliskan persamaannya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#059669] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                <circle cx="9" cy="8" r="3" />
                <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6M17 8a3 3 0 100-6M23 20c0-2.8-2-5-5-5.7" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#B91C1C]">Perbedaan (Apa yang berbeda?)</p>
            </div>
            <textarea
              name="answers.perbedaan"
              defaultValue={getValue("perbedaan")}
              rows={4}
              required
              placeholder="Tuliskan perbedaannya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v.01M12 8a2.5 2.5 0 012.5 2.5c0 1.5-2.5 1.8-2.5 3.5" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#2563EB]">Mengapa hasil tersebut bisa berbeda?</p>
          </div>
          <ul className="m-0 pl-5 flex flex-col gap-1 list-disc">
            {penyebab.map((item) => (
              <li key={item} className="text-xs text-[#374151]">
                {item}
              </li>
            ))}
          </ul>
          <textarea
            name="answers.penyebab_perbedaan"
            defaultValue={getValue("penyebab_perbedaan")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        <div className="flex-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4 flex items-start gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18 2l4 4-11 11H7v-4L18 2z" />
          </svg>
          <p className="m-0 text-xs text-[#374151] leading-[1.5]">
            <span className="font-bold">Catatan Penting!</span> Verifikasi adalah langkah penting
            untuk memastikan bahwa setiap jawaban didukung oleh bukti, alasan matematis, dan kerja
            sama kelompok.
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P6-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={thumbsUpImage}
          alt="Dua siswa memberi jempol tanda semangat"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative hidden sm:block w-24 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
      </div>

      <div className="bg-gradient-to-br from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M12 15a4 4 0 004-4V7a4 4 0 10-8 0v4a4 4 0 004 4zM8 11a4 4 0 008 0M12 19v3" />
        </svg>
        <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
          <span className="font-bold">Hebat!</span> Kamu sudah berusaha dengan sangat baik! Teruslah
          memeriksa, berdiskusi, dan menggunakan bukti untuk memastikan bahwa hasil penemuanmu
          akurat, logis, dan dapat dipertanggungjawabkan.
        </p>
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
