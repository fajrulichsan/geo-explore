import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const checklist = [
  { key: "checklist_dasar_pengelompokan", label: "Dasar pengelompokan yang dapat digunakan" },
  {
    key: "checklist_alasan_lebih_dari_satu_kelompok",
    label: "Alasan mengapa satu bangun dapat masuk lebih dari satu kelompok",
  },
  { key: "checklist_syarat_klasifikasi_diterima", label: "Syarat agar klasifikasi dapat diterima" },
];

export default function Peta6Step5SiapkanGeneralisasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Siapkan Generalisasi Kelompokmu</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Sekarang kamu telah memiliki bahan untuk menyusun generalisasi kelompok. Pada halaman
          berikutnya, bandingkan pemikiran anggota kelompok dan rumuskan kesimpulan akhir bersama.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-4">
            <div className="w-10 h-10 rounded-full bg-[#FDF3C7] text-[#92400E] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <h2 className="m-0 text-base font-bold text-[#111827]">Hal yang perlu kami sepakati:</h2>
          </div>
          <div className="flex flex-col gap-2">
            {checklist.map((c) => (
              <label
                key={c.key}
                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-[#B3C5FF] hover:bg-[#F9FAFB] cursor-pointer transition-all"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  data-require-group="peta6step5"
                  className="mt-1 w-4 h-4 rounded border-[#E5E7EB] text-[#2563EB]"
                />
                <span className="text-sm text-[#374151]">{c.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 min-h-[300px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h2 className="m-0 text-base font-bold text-[#111827]">Catatan:</h2>
            </div>
            <span className="text-xs text-[#9CA3AF] px-2 py-1 bg-[#F9FAFB] rounded">Draft Tersimpan</span>
          </div>
          <textarea
            name="answers.catatan_kesepakatan"
            defaultValue={getValue("catatan_kesepakatan")}
            className="w-full flex-1 min-h-[200px] resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            placeholder="Tuliskan poin-poin kesepakatan kelompokmu di sini..."
            required
          />

          <div className="pt-2 border-t border-[#E5E7EB]">
            <PhotoUpload
              name="answers.foto_bukti"
              label="Unggah foto hasil kerja (opsional)"
              defaultValue={getValue("foto_bukti")}
            />
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
