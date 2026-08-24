import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const langkahAR = [
  "Siapkan smartphone-mu.",
  "Pastikan fitur kamera dapat digunakan.",
  "Klik tombol di bawah ini untuk memulai.",
];

export default function Peta3Step5TemuanPersiapanAR({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 3 – AYO BEREKSPLORASI
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Catatan Temuan Sementara</h2>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Dari eksplorasi di atas, buatlah catatan singkat mengenai:
          </p>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#2563EB]">1. Informasi baru yang kamu dapatkan:</label>
            <textarea
              name="answers.informasi_baru"
              defaultValue={getValue("informasi_baru")}
              rows={4}
              placeholder="Tuliskan informasi baru di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#2563EB]">
              2. Bagian yang belum jelas atau membingungkan:
            </label>
            <textarea
              name="answers.bagian_membingungkan"
              defaultValue={getValue("bagian_membingungkan")}
              rows={4}
              placeholder="Tuliskan bagian yang membingungkan di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
          <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
            <PhotoUpload
              name="answers.foto_bukti"
              label="Unggah foto catatan temuanmu (opsional)"
              defaultValue={getValue("foto_bukti")}
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Persiapan Eksplorasi AR</h2>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Untuk lebih memahami bentuk bangun ruang yang kamu pilih, mari kita eksplorasi menggunakan
            Augmented Reality (AR).
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi AR
            </div>
            <ol className="m-0 p-0 flex flex-col gap-2 list-decimal list-inside w-full text-sm text-[#374151]">
              {langkahAR.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ol>
          </div>
          <div className="flex justify-end">
            <Link
              href={`/belajar/${materi}/${peta}/6`}
              className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3 px-6 text-sm font-bold cursor-pointer shadow-[0_4px_10px_rgba(37,99,235,0.3)]"
            >
              Lanjut Eksplorasi dengan AR
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
