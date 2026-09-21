import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi3Peta6Step3RevisiHasilVerifikasi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hasil Penemuanmu</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-2xl p-5">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Sekarang gunakan hasil verifikasi untuk memperbaiki jawabanmu dan menentukan hasil akhir.
          </p>
        </div>
        <ul className="m-0 bg-white border border-[#DBEAFE] rounded-2xl p-5 list-none flex flex-col gap-2">
          {[
            "Revisi jawaban jika diperlukan.",
            "Simpulkan hasil yang paling tepat.",
            "Jelaskan alasan matematikamu.",
            "Refleksikan proses verifikasi yang telah dilakukan.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#15803D] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">C</div>
            <h2 className="m-0 text-lg font-bold text-[#166534]">Revisi Jawaban</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
            Apabila setelah berdiskusi terdapat cara yang lebih tepat, tuliskan hasil revisimu.
          </p>
          <label className="text-sm font-bold text-[#166534]" htmlFor="yang_direvisi">Yang direvisi</label>
            <textarea
              id="yang_direvisi" name="answers.yang_direvisi"
              defaultValue={getValue("yang_direvisi")}
              rows={3}
              required
              placeholder="Tuliskan bagian yang direvisi..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-none"
            />
          <label className="text-sm font-bold text-[#166534]" htmlFor="alasan_revisi">Alasan revisi</label>
            <textarea
              id="alasan_revisi" name="answers.alasan_revisi"
              defaultValue={getValue("alasan_revisi")}
              rows={3}
              required
              placeholder="Tuliskan alasan revisimu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-none"
            />
          <p className="m-0 text-xs text-[#4B5563] leading-[1.5] bg-white border border-[#BBF7D0] rounded-xl p-3">
            Tuliskan bagian yang berubah setelah memperoleh bukti atau alasan matematis yang lebih tepat.
          </p>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">D</div>
            <h2 className="m-0 text-lg font-bold text-[#1E3A8A]">Hasil Verifikasi</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Lengkapilah kalimat berikut.</p>
          <label htmlFor="hasil_verifikasi" className="text-sm font-bold text-[#111827] leading-[1.6]">
            Berdasarkan hasil verifikasi, kami menemukan bahwa hasil yang kamu peroleh …
          </label>
            <textarea
              id="hasil_verifikasi" name="answers.hasil_verifikasi"
              defaultValue={getValue("hasil_verifikasi")}
              rows={8}
              required
              placeholder="Lanjutkan kalimatnya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          <p className="m-0 text-xs text-[#1E40AF] leading-[1.5] bg-white border border-[#BFDBFE] rounded-xl p-3">
            Gunakan hasil verifikasi untuk memastikan bahwa hasil yang kamu peroleh didukung oleh
            bukti dan alasan matematis.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
