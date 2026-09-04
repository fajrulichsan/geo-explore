import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "dugaan_benar", label: "Dugaan mana yang ternyata benar?" },
  { key: "dugaan_diperbaiki", label: "Dugaan mana yang harus diperbaiki?" },
  { key: "alasan_meyakinkan", label: "Apa alasan matematis yang paling meyakinkan menurut kelompokmu?" },
  { key: "yakin_setelah_verifikasi", label: "Setelah melakukan verifikasi, apakah kamu lebih yakin dengan alasan kelompokmu? Mengapa?" },
];

export default async function Materi2Peta6Step3RevisiRefleksi({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P6-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Revisi Hasil Kelompok
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Jika ada dugaan yang perlu diperbaiki, tuliskan hasil revisimu.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#111827]">Dugaan yang Direvisi</p>
            </div>
            <textarea
              name="answers.dugaan_direvisi"
              defaultValue={getValue("dugaan_direvisi")}
              rows={3}
              placeholder="Tuliskan dugaan yang direvisi (jika ada)..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#111827]">Alasan Revisi</p>
            </div>
            <textarea
              name="answers.alasan_revisi"
              defaultValue={getValue("alasan_revisi")}
              rows={3}
              placeholder="Tuliskan alasan revisinya (jika ada)..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Jawablah pertanyaan berikut berdasarkan hasil verifikasimu.</p>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            {refleksi.map((r, i) => (
              <div key={r.key} className="flex flex-col gap-1.5">
                <label className="flex items-start gap-2 text-sm font-semibold text-[#111827]">
                  <span className="w-5 h-5 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {r.label}
                </label>
                <input
                  type="text"
                  name={`answers.refleksi_${r.key}`}
                  defaultValue={getValue(`refleksi_${r.key}`)}
                  required
                  placeholder="Jawabanmu..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors ml-7"
                />
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M2-P6-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot mengajak refleksi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-32 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF] self-start"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute -right-4 bottom-[-40px] w-32 h-32 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M8 21h8M12 17v4M12 3a5 5 0 015 5c0 2.5-1.5 3.5-2 5-.3.8-.5 1.5-.5 2.5h-5c0-1-.2-1.7-.5-2.5-.5-1.5-2-2.5-2-5a5 5 0 015-5z" />
          </svg>
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Kotak Motivasi
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
          Hebat! Kamu telah menguji dan memeriksa kembali hasil pemikiranmu. Teruslah berpikir kritis dan
          terbuka terhadap bukti baru!
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 6
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
