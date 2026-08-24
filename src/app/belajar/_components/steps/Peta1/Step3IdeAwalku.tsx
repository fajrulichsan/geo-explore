import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const caraList = [{ n: 1 }, { n: 2 }];

const ingatItems = [
  "Perhatikan bentuk geometris dasar (kubus, balok, bola, tabung, dll) pada setiap benda.",
  "Fungsi benda juga bisa menjadi dasar pengelompokan yang valid.",
  "Bahan pembuatan benda bisa jadi petunjuk tambahan.",
];

export default function Step3IdeAwalku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M4 16c2-2 3-4 3-7a5 5 0 0110 0c0 3 1 5 3 7" />
            <path d="M9 20h6" />
          </svg>
          D. LANGKAH 3 – IDE AWALKU
        </div>
        <div className="flex items-start gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <div>
            <h1 className="m-0 mb-1 text-[32px] font-extrabold text-[#111827]">
              Ayo Mengamati dan Berpikir
            </h1>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Ide Awalku</h2>
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Tuliskan paling sedikit dua cara berbeda yang menurutmu dapat digunakan untuk
          mengelompokkan benda-benda di atas beserta alasannya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caraList.map((cara) => (
          <div key={cara.n} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0 z-10">
                {cara.n}
              </div>
              <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 -ml-6 pl-9 text-sm font-bold text-[#2563EB]">
                Cara {cara.n}
              </div>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#374151]">
                  Dasar pengelompokan (atau kriteria)
                </label>
                <input
                  type="text"
                  name={`answers.cara_${cara.n}_dasar`}
                  defaultValue={getValue(`cara_${cara.n}_dasar`)}
                  placeholder="Ketik dasar pengelompokan di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#374151]">
                  Anggota kelompok (benda yang termasuk)
                </label>
                <textarea
                  name={`answers.cara_${cara.n}_anggota`}
                  defaultValue={getValue(`cara_${cara.n}_anggota`)}
                  placeholder="Sebutkan benda-benda yang termasuk..."
                  required
                  className="w-full min-h-[100px] rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-bold text-[#374151]">Alasan</label>
                <textarea
                  name={`answers.cara_${cara.n}_alasan`}
                  defaultValue={getValue(`cara_${cara.n}_alasan`)}
                  placeholder="Mengapa benda-benda tersebut dikelompokkan dengan cara ini?"
                  required
                  className="w-full min-h-[100px] flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2">
        <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <h3 className="m-0 mb-4 text-xl font-bold text-[#92400E]">Kotak Ingat</h3>
        <ul className="m-0 p-0 flex flex-col gap-3 list-none">
          {ingatItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D97706"
                strokeWidth="3"
                className="mt-1 flex-shrink-0"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[15px] leading-[1.6] text-[#374151]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-0 pt-6 border-t border-[#E5E7EB]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
