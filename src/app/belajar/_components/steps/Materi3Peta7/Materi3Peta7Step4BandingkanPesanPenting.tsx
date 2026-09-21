import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const perbandinganOptions = [
  { value: "sama", label: "Sama" },
  { value: "hampir_sama", label: "Hampir sama" },
  { value: "berbeda", label: "Berbeda" },
];

export default async function Materi3Peta7Step4BandingkanPesanPenting({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const jaringImage = await getPageImage("M3-P7-L4-1");
  const mascotImage = await getPageImage("M3-P7-L4-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Konsep Luas Permukaan Bangun Ruang</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M4 5h16v10H9l-5 4z" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan dengan Kelompok Lain</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Apakah kesimpulan kelompokmu sama dengan kelompok lain?</p>
        <div className="flex flex-wrap gap-3">
          {perbandinganOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full px-4 py-2.5 cursor-pointer has-[:checked]:bg-[#F5F3FF] has-[:checked]:border-[#7C3AED] transition-colors"
            >
              <input
                type="radio"
                name="answers.perbandingan_kelompok"
                value={opt.value}
                defaultChecked={getValue("perbandingan_kelompok") === opt.value}
                required
                className="w-4 h-4 accent-[#7C3AED]"
              />
              <span className="text-sm font-semibold text-[#374151]">{opt.label}</span>
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bagian_berbeda" className="text-sm text-[#4B5563]">
            Jika berbeda, bagian mana yang berbeda dan apa penyebabnya?
          </label>
          <textarea
            id="bagian_berbeda"
            name="answers.bagian_berbeda"
            defaultValue={getValue("bagian_berbeda")}
            rows={3}
            placeholder="Jawabanmu (jika ada)..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 bg-[#F59E0B] text-white rounded-full py-1.5 px-4 text-sm font-bold w-fit">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.6 5.8 21.2l1.6-7L2 9.5l7.1-.6z" />
          </svg>
          Pesan Penting
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-1.5">
            <p className="m-0 text-base font-bold text-[#DC2626]">Ingat!</p>
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">
              Luas permukaan bangun ruang bukan sekadar rumus yang dihafal, tetapi merupakan jumlah luas
              seluruh sisi bangun ruang yang dapat diamati melalui jaring-jaringnya.
            </p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2 justify-center">
            <EditablePageImage
              imageKey="M3-P7-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={jaringImage}
              alt="Bangun ruang, jaring-jaring, jumlah luas seluruh sisi"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
            <div className="grid grid-cols-3 text-center text-[11px] font-semibold text-[#2563EB]">
              <span>Bangun Ruang</span>
              <span>Jaring-Jaring</span>
              <span>Jumlah luas seluruh sisi</span>
            </div>
          </div>
          <div className="bg-[#EFF4FF] border border-[#DBE7FF] rounded-2xl p-5 flex items-start gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#93C5FD" stroke="#2563EB" strokeWidth="1.8" className="flex-shrink-0">
              <path d="M3 10v4h4l7 5V5L7 10zM17 8c1.5 1.2 1.5 6.8 0 8" />
            </svg>
            <div>
              <p className="m-0 text-base font-bold text-[#2563EB] mb-1">Hebat!</p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Sekarang kamu telah berhasil menemukan sendiri konsep luas permukaan kubus, balok, dan
                prisma.
              </p>
            </div>
          </div>
          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-5 flex items-center gap-3">
            <div className="flex-1">
              <p className="m-0 text-base font-bold text-[#DC2626] mb-1">Kamu Luar Biasa!</p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Teruslah bertanya, berpikir logis, dan bekerja sama. Itulah kunci menjadi pembelajar yang
                hebat!
              </p>
            </div>
            <EditablePageImage
              imageKey="M3-P7-L4-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={mascotImage}
              alt="Siswi memberi jempol"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-28 h-28 flex-shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4 flex items-center gap-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" className="flex-shrink-0">
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4V3h6v1M9 10l1.5 1.5L13 9M9 16h6" />
        </svg>
        <p className="m-0 text-xs leading-[1.6] text-[#374151]">
          Pada kegiatan berikutnya, kamu akan melakukan Refleksi Diri untuk melihat perkembangan pemahaman
          dan keyakinanmu selama proses pembelajaran.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
