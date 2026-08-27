import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  {
    label: "Apa kesulitan utama yang kamu hadapi saat melakukan verifikasi pembuktian?",
    hint: "Ceritakan secara spesifik bagian mana yang dirasa membingungkan atau menantang.",
    rows: 4,
  },
  {
    label: "Bagaimana kamu mengatasi kesulitan tersebut dan memastikan kebenaran langkah verifikasi?",
    hint: "Jelaskan strategi atau sumber daya yang kamu gunakan untuk memvalidasi proses.",
    rows: 4,
  },
  {
    label: "Kesimpulan apa yang dapat kamu tarik dari kegiatan verifikasi ini terkait konsep yang dipelajari?",
    hint: "Tuliskan pemahaman baru atau penguatan konsep yang kamu peroleh.",
    rows: 5,
  },
];

export default function Peta5Step4EvaluasiVerifikasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Evaluasi Verifikasi</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Lakukan refleksi terhadap proses verifikasi yang telah kamu lakukan. Jawablah pertanyaan-pertanyaan
          berikut dengan detail untuk mengevaluasi pemahamanmu.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col md:flex-row gap-5 items-start">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
          Ilustrasi
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="m-0 text-base font-bold text-[#111827] flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Konteks Evaluasi
          </h3>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
            Gunakan gambar referensi di samping sebagai panduan visual dalam mengingat kembali
            langkah-langkah yang telah diambil pada bagian sebelumnya. Fokus pada detail proses pembuktian
            yang telah kamu susun.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {pertanyaan.map((p, i) => (
          <div
            key={p.label}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm font-bold text-[#111827]">{p.label}</label>
                <p className="m-0 text-xs text-[#6B7280]">{p.hint}</p>
              </div>
            </div>
            <textarea
              rows={p.rows}
              name={`answers.refleksi_${i}`}
              defaultValue={getValue(`refleksi_${i}`)}
              placeholder="Ketikkan jawabanmu di sini..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Sebelumnya
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Simpan Evaluasi
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
