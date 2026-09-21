import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const alur = [
  "Kumpulkan data hasil pengamatan pada langkah sebelumnya.",
  "Amati keterkaitan awal antara luas alas dan luas sisi-sisi tegak.",
  "Susun dugaan cara menentukan luas permukaan limas.",
  "Nilai proses eksplorasimu dan siapkan diri menuju Tahap 4.",
];

const alurJudul = ["Catatan Hasil", "Temukan Keterkaitan Awal", "Dugaan Baru", "Refleksi"];

const baris = [
  { key: "bentuk_alas", label: "Bentuk alas" },
  { key: "bentuk_sisi_tegak", label: "Bentuk setiap sisi tegak" },
  { key: "banyak_sisi_tegak", label: "Banyak sisi tegak" },
  { key: "ukuran_alas", label: "Ukuran alas" },
  { key: "ukuran_sisi_tegak", label: "Ukuran yang diperlukan pada sisi tegak" },
  { key: "luas_alas", label: "Luas alas" },
  { key: "luas_seluruh_sisi_tegak", label: "Luas seluruh sisi tegak" },
  { key: "luas_alas_tiap_sisi", label: "Luas alas dan tiap sisi tegak" },
  { key: "luas_tiap_sisi", label: "Luas tiap sisi" },
];

export default async function Materi4Peta4Step4TabelPengamatan({
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
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
        <p className="m-0 text-base font-bold text-[#1D4ED8]">Ayo lanjutkan hasil eksplorasimu!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {alur.map((a, i) => (
            <div key={a} className="bg-white rounded-2xl p-4 flex flex-col gap-1.5">
              <div className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs">
                {i + 1}
              </div>
              <span className="text-sm font-bold text-[#1E3A8A]">{alurJudul[i]}</span>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">{a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#2563EB]">Ringkas Hasil Pengamatanmu</span>
          <span className="text-xs text-[#6B7280]">Lengkapilah tabel berikut berdasarkan hasil eksplorasimu.</span>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden">
        <div className="grid grid-cols-[1fr_1.4fr] bg-[#1E3A8A] text-white text-sm font-bold">
          <div className="px-4 py-3">Bagian yang Diamati</div>
          <div className="px-4 py-3 border-l border-white/20">Hasil Pengamatan</div>
        </div>
        {baris.map((b) => (
          <div key={b.key} className="grid grid-cols-[1fr_1.4fr] border-t border-[#E5E7EB] items-center">
            <label htmlFor={b.key} className="px-4 py-3 text-sm font-semibold text-[#1D4ED8]">
              {b.label}
            </label>
            <div className="px-3 py-2 border-l border-[#E5E7EB]">
              <input
                id={b.key}
                type="text"
                name={`answers.${b.key}`}
                defaultValue={getValue(b.key)}
                placeholder="Tulis hasil pengamatanmu..."
                required
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
