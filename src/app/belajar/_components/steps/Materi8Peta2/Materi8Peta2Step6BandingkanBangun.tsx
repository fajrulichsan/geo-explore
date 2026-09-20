import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const aspek = [
  { key: "bentuk", label: "Bentuk bangun" },
  { key: "jumlah_sisi", label: "Jumlah sisi" },
  { key: "ukuran_panjang", label: "Semua ukuran panjang (rusuk, panjang, lebar, tinggi, dll.)" },
  { key: "volume", label: "Volume" },
];

export default async function Materi8Peta2Step6BandingkanBangun({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={8} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Bangun Kecil dan Bangun Hasil Skala
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Bandingkan bangun kecil dan bangun hasil skala pada setiap pasangan, kemudian lengkapi tabel berikut berdasarkan hasil pengamatanmu.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {aspek.map((a) => (
            <div key={a.key} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">{a.label}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { suffix: "persamaan", judul: "Persamaan", warna: "#16A34A", bg: "#F0FDF4" },
                  { suffix: "perbedaan", judul: "Perbedaan", warna: "#DC2626", bg: "#FEF2F2" },
                ].map((k) => (
                  <div key={k.suffix} className="flex flex-col gap-2 rounded-xl p-3" style={{ backgroundColor: k.bg }}>
                    <label htmlFor={`${a.key}_${k.suffix}`} className="text-xs font-bold" style={{ color: k.warna }}>
                      {k.judul} <span className="font-medium text-[#6B7280]">(bangun kecil dan hasil skala)</span>
                    </label>
                    <textarea
                      id={`${a.key}_${k.suffix}`}
                      name={`answers.${a.key}_${k.suffix}`}
                      defaultValue={getValue(`${a.key}_${k.suffix}`)}
                      rows={2}
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="dugaan_perubahan_volume" className="text-sm font-bold text-[#111827] leading-[1.5]">
              Dugaan perubahan volume — menurut dugaanmu, bagaimana perubahan volume ketika setiap ukuran panjang diperbesar 2 kali?
            </label>
            <textarea
              id="dugaan_perubahan_volume"
              name="answers.dugaan_perubahan_volume"
              defaultValue={getValue("dugaan_perubahan_volume")}
              rows={2}
              placeholder="Ketik dugaanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_dugaan_bukti" className="text-sm font-bold text-[#111827] leading-[1.5]">
              Alasan dugaan (bukti pengamatan) — tuliskan alasan atau bukti dari hasil pengamatanmu.
            </label>
            <textarea
              id="alasan_dugaan_bukti"
              name="answers.alasan_dugaan_bukti"
              defaultValue={getValue("alasan_dugaan_bukti")}
              rows={3}
              placeholder="Ketik alasanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y bg-white"
            />
          </div>
        </div>

        <div className="flex items-start gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="m-0 text-sm text-[#166534] leading-[1.5]">
            <span className="font-bold">Tips:</span> Pastikan kamu telah melengkapi semua bagian F dan G sebelum melanjutkan ke tahap berikutnya.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
