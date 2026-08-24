import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

const evaluasi = [
  "Apakah ada kesulitan dalam menemukan pola geometri?",
  "Bagaimana pembagian tugas dalam kelompok?",
  "Konsep rumus apa yang paling sering digunakan sejauh ini?",
];

const checklist = ["Sesuai dengan data pengamatan", "Telah didiskusikan bersama"];

export default function Peta4Step8EvaluasiHasilSementara({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 4 – AYO MENGOLAH INFORMASI
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Evaluasi &amp; Hasil Sementara</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden h-full">
            <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                D
              </div>
              <h2 className="m-0 text-lg font-bold text-[#2563EB]">Evaluasi Proses</h2>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {evaluasi.map((e, i) => (
                <div key={e} className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#111827]">
                    {i + 1}. {e}
                  </label>
                  <textarea
                    rows={2}
                    name={`answers.evaluasi_${i}`}
                    defaultValue={getValue(`evaluasi_${i}`)}
                    placeholder="Tuliskan jawaban kelompokmu di sini..."
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden h-full flex flex-col">
            <div className="bg-[#FDF3C7] border-b border-[#F5E3A0] p-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                E
              </div>
              <h2 className="m-0 text-lg font-bold text-[#92400E]">Hasil Sementara</h2>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <p className="m-0 text-sm text-[#374151]">
                Tuliskan kesimpulan awal atau hasil pengolahan data sementara kelompok kami:
              </p>
              <textarea
                rows={5}
                name="answers.kesimpulan_sementara"
                defaultValue={getValue("kesimpulan_sementara")}
                placeholder="Kesimpulan sementara..."
                className="w-full flex-grow rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y min-h-[120px]"
              />
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4">
                <h3 className="m-0 mb-2 text-sm font-bold text-[#111827]">Pastikan hasilmu:</h3>
                <ul className="m-0 p-0 flex flex-col gap-2 list-none">
                  {checklist.map((c, i) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-[#374151]">
                      <input
                        type="checkbox"
                        name={`answers.checklist_${i}`}
                        value="true"
                        defaultChecked={getValue(`checklist_${i}`) === "true"}
                        className="w-4 h-4 rounded border-[#E5E7EB] text-[#2563EB]"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
                <PhotoUpload
                  name="answers.foto_bukti"
                  label="Unggah foto hasil kerja (opsional)"
                  defaultValue={getValue("foto_bukti")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/7`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          Lanjut ke Tahap 5
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
