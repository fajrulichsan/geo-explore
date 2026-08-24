import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

const rencana = [
  { text: "Mengamati bentuk bangun ruang" },
  { text: "Mencatat sifat-sifat bangun" },
  { text: "Membandingkan dan mencari informasi yang diperlukan" },
];

export default function Peta2Step8BersiapKeTahapBerikutnya({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          </svg>
          SUBMATERI 1 · TAHAP 2 DARI 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          E
        </div>
        <h2 className="m-0 text-lg font-bold text-[#2563EB]">Bersiap ke Tahap Berikutnya</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Pada tahap berikutnya, kita akan mengumpulkan informasi menggunakan GeoGebra 3D, Augmented
              Reality, dan gambar untuk memeriksa dugaan yang telah kita buat.
            </p>
            <div>
              <h3 className="m-0 mb-3 text-sm font-bold text-[#2563EB]">
                Yang akan kita pelajari pada tahap berikutnya:
              </h3>
              <ul className="m-0 p-0 flex flex-col gap-3 list-none">
                {rencana.map((r) => (
                  <li key={r.text} className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151]">{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden h-full flex flex-col">
            <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-6 flex items-center justify-between">
              <div>
                <h3 className="m-0 text-lg font-bold text-[#2563EB]">Pertanyaan yang Ingin Aku Selidiki</h3>
                <p className="m-0 mt-1 text-sm text-[#6B7280]">
                  Tuliskan satu hal yang masih ingin kamu ketahui pada tahap eksplorasi.
                </p>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
                <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div className="p-6 flex-1">
              <textarea
                rows={8}
                name="answers.pertanyaan_selidiki"
                defaultValue={getValue("pertanyaan_selidiki")}
                placeholder="Aku ingin menyelidiki..."
                className="w-full h-full min-h-[180px] rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
              />
              <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
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
          Lanjut ke Tahap 3 – Ayo Bereksplorasi
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
