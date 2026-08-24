import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const pertanyaan = [
  {
    n: 1,
    key: "satu_bangun_lebih_dari_satu_kelompok",
    label: "Pertanyaan Pertama",
    text: "Apakah satu bangun ruang dapat termasuk ke dalam lebih dari satu kelompok? Jelaskan dengan contoh.",
    placeholder: "Tuliskan jawaban diskusi kelompokmu di sini...",
    span: "md:col-span-2",
  },
  {
    n: 2,
    key: "pengaruh_dasar_pengelompokan",
    label: "Pertanyaan Kedua",
    text: "Bagaimana dasar pengelompokan yang digunakan memengaruhi kelompok bangun ruang yang terbentuk?",
    placeholder: "Tuliskan analisis kelompokmu di sini...",
    span: "",
  },
  {
    n: 3,
    key: "syarat_cara_pengelompokan_diterima",
    label: "Pertanyaan Ketiga",
    text: "Apa syarat agar suatu cara pengelompokan bangun ruang dapat diterima?",
    placeholder: "Tuliskan kesimpulan kelompokmu di sini...",
    span: "",
  },
];

export default function Peta6Step4PertanyaanGeneralisasi({
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
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 6 – AYO MENYIMPULKAN
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Pertanyaan Generalisasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
        <div>
          <h2 className="m-0 mb-1.5 text-base font-bold text-[#111827]">Instruksi Diskusi</h2>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Diskusikan bersama kelompokmu. Gunakan data dan hasil verifikasi untuk mendukung jawabanmu.
            Pastikan argumen yang diberikan logis dan berdasarkan temuan sebelumnya.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pertanyaan.map((p) => (
          <div
            key={p.n}
            className={`${p.span} bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                {p.n}
              </div>
              <span className="text-sm font-bold text-[#2563EB]">{p.label}</span>
            </div>
            <p className="m-0 text-sm text-[#374151]">{p.text}</p>
            <textarea
              name={`answers.${p.key}`}
              defaultValue={getValue(p.key)}
              rows={4}
              placeholder={p.placeholder}
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
