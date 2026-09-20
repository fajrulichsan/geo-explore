import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta5Step2MengelompokkanData({
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
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengolah Informasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengelompokkan Data
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Lengkapilah tabel berikut berdasarkan data hasil eksplorasi pada Tahap 3.
        </p>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-3 text-sm text-[#78350F] leading-[1.55]">
          Tuliskan hasil untuk <span className="font-bold">k = ½, 2, 3</span> pada setiap bangun. Gunakan data k = 1 sebagai volume awal.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ backgroundColor: "#F0FDF4" }}>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z M4 7.5L12 12l8-4.5 M12 12v9" />
              </svg>
              <h3 className="m-0 text-sm font-extrabold" style={{ color: "#16A34A" }}>Kubus</h3>
            </div>
            <div className="grid grid-cols-[36px_1fr_1fr] gap-2 text-[11px] font-bold text-[#6B7280] leading-tight">
              <span>k</span><span>Volume awal (k = 1) (cm³)</span><span>Volume hasil skala (cm³)</span>
            </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">1/2</span>
                <input name="answers.kubus_1_2_awal" defaultValue={getValue("kubus_1_2_awal")} aria-label="Kubus k = 1/2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.kubus_1_2_hasil" defaultValue={getValue("kubus_1_2_hasil")} aria-label="Kubus k = 1/2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">2</span>
                <input name="answers.kubus_2_awal" defaultValue={getValue("kubus_2_awal")} aria-label="Kubus k = 2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.kubus_2_hasil" defaultValue={getValue("kubus_2_hasil")} aria-label="Kubus k = 2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">3</span>
                <input name="answers.kubus_3_awal" defaultValue={getValue("kubus_3_awal")} aria-label="Kubus k = 3, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.kubus_3_hasil" defaultValue={getValue("kubus_3_hasil")} aria-label="Kubus k = 3, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
          </div>
          <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ backgroundColor: "#FFF7ED" }}>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M3 9l4-4h14l-4 4z M3 9v9h14V9 M17 9l4-4v9l-4 4" />
              </svg>
              <h3 className="m-0 text-sm font-extrabold" style={{ color: "#F97316" }}>Balok</h3>
            </div>
            <div className="grid grid-cols-[36px_1fr_1fr] gap-2 text-[11px] font-bold text-[#6B7280] leading-tight">
              <span>k</span><span>Volume awal (k = 1) (cm³)</span><span>Volume hasil skala (cm³)</span>
            </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">1/2</span>
                <input name="answers.balok_1_2_awal" defaultValue={getValue("balok_1_2_awal")} aria-label="Balok k = 1/2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.balok_1_2_hasil" defaultValue={getValue("balok_1_2_hasil")} aria-label="Balok k = 1/2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">2</span>
                <input name="answers.balok_2_awal" defaultValue={getValue("balok_2_awal")} aria-label="Balok k = 2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.balok_2_hasil" defaultValue={getValue("balok_2_hasil")} aria-label="Balok k = 2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">3</span>
                <input name="answers.balok_3_awal" defaultValue={getValue("balok_3_awal")} aria-label="Balok k = 3, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.balok_3_hasil" defaultValue={getValue("balok_3_hasil")} aria-label="Balok k = 3, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
          </div>
          <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ backgroundColor: "#F5F3FF" }}>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M3 17l7-11 11 3-5 10z M10 6l6 13" />
              </svg>
              <h3 className="m-0 text-sm font-extrabold" style={{ color: "#7C3AED" }}>Prisma Segitiga</h3>
            </div>
            <div className="grid grid-cols-[36px_1fr_1fr] gap-2 text-[11px] font-bold text-[#6B7280] leading-tight">
              <span>k</span><span>Volume awal (k = 1) (cm³)</span><span>Volume hasil skala (cm³)</span>
            </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">1/2</span>
                <input name="answers.prisma_1_2_awal" defaultValue={getValue("prisma_1_2_awal")} aria-label="Prisma Segitiga k = 1/2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.prisma_1_2_hasil" defaultValue={getValue("prisma_1_2_hasil")} aria-label="Prisma Segitiga k = 1/2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">2</span>
                <input name="answers.prisma_2_awal" defaultValue={getValue("prisma_2_awal")} aria-label="Prisma Segitiga k = 2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.prisma_2_hasil" defaultValue={getValue("prisma_2_hasil")} aria-label="Prisma Segitiga k = 2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">3</span>
                <input name="answers.prisma_3_awal" defaultValue={getValue("prisma_3_awal")} aria-label="Prisma Segitiga k = 3, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.prisma_3_hasil" defaultValue={getValue("prisma_3_hasil")} aria-label="Prisma Segitiga k = 3, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
          </div>
          <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ backgroundColor: "#EFF6FF" }}>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M12 3l9 15H3z M12 3l4 15" />
              </svg>
              <h3 className="m-0 text-sm font-extrabold" style={{ color: "#2563EB" }}>Limas Segiempat</h3>
            </div>
            <div className="grid grid-cols-[36px_1fr_1fr] gap-2 text-[11px] font-bold text-[#6B7280] leading-tight">
              <span>k</span><span>Volume awal (k = 1) (cm³)</span><span>Volume hasil skala (cm³)</span>
            </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">1/2</span>
                <input name="answers.limas_1_2_awal" defaultValue={getValue("limas_1_2_awal")} aria-label="Limas Segiempat k = 1/2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.limas_1_2_hasil" defaultValue={getValue("limas_1_2_hasil")} aria-label="Limas Segiempat k = 1/2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">2</span>
                <input name="answers.limas_2_awal" defaultValue={getValue("limas_2_awal")} aria-label="Limas Segiempat k = 2, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.limas_2_hasil" defaultValue={getValue("limas_2_hasil")} aria-label="Limas Segiempat k = 2, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-[36px_1fr_1fr] gap-2 items-center">
                <span className="text-sm font-bold text-[#111827]">3</span>
                <input name="answers.limas_3_awal" defaultValue={getValue("limas_3_awal")} aria-label="Limas Segiempat k = 3, volume awal" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
                <input name="answers.limas_3_hasil" defaultValue={getValue("limas_3_hasil")} aria-label="Limas Segiempat k = 3, volume hasil skala" placeholder="…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
              </div>
          </div>
        </div>
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-extrabold text-sm">?</div>
            <h3 className="m-0 text-sm font-extrabold text-[#166534]">Pertanyaan</h3>
          </div>
          <label htmlFor="alasan_kelompok_bangun" className="text-sm font-bold text-[#111827] leading-[1.5]">
            Mengapa data perlu dikelompokkan berdasarkan bangun ruang?
          </label>
          <textarea
              id="alasan_kelompok_bangun"
              name="answers.alasan_kelompok_bangun"
              defaultValue={getValue("alasan_kelompok_bangun")}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
