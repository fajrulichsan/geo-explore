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

export default async function Materi3Peta7Step2KesimpulanKelompok({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const groupImage = await getPageImage("M3-P7-L1-1");
  const mascotImage = await getPageImage("M3-P7-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Menyimpulkan
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Temukan Konsep Luas Permukaan Bangun Ruang
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Mengapa Rumus Itu Benar?</h2>
        </div>
        <div className="flex items-start gap-4">
          <label htmlFor="alasan_matematis" className="sr-only">
            Jelaskan alasan matematisnya
          </label>
          <textarea
            id="alasan_matematis"
            name="answers.alasan_matematis"
            defaultValue={getValue("alasan_matematis")}
            rows={4}
            required
            placeholder="Jelaskan alasan matematisnya..."
            className="flex-1 w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0 hidden sm:block mt-2">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2V16h6v-1.8A6 6 0 0012 3z" />
          </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Kesimpulan Kelompok</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Tuliskan kesimpulan umum kelompokmu tentang cara menentukan luas permukaan kubus,
            balok, dan prisma.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="kesimpulan_kelompok" className="text-sm font-semibold text-[#111827]">
              Kami menyimpulkan bahwa ...
            </label>
            <textarea
              id="kesimpulan_kelompok"
              name="answers.kesimpulan_kelompok"
              defaultValue={getValue("kesimpulan_kelompok")}
              rows={4}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>
        <div className="lg:col-span-5 relative rounded-[20px] overflow-hidden bg-[#EFF4FF]">
          <EditablePageImage
            imageKey="M3-P7-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={groupImage}
            alt="Tiga siswa berdiskusi menyusun kesimpulan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full min-h-[160px]"
          />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan dengan Kelompok Lain</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Apakah kesimpulan kelompokmu sama dengan kelompok lain?
        </p>
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
            rows={2}
            placeholder="Jawabanmu (jika ada)..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <div>
            <p className="m-0 text-sm font-bold text-[#92400E] mb-1">Ingat!</p>
            <p className="m-0 text-xs leading-[1.6] text-[#374151]">
              Luas permukaan bangun ruang bukan sekadar rumus yang dihafal, melainkan jumlah luas
              seluruh sisi yang dapat diamati melalui jaring-jaringnya.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M3 11l18-8-8 18-2-8z" />
          </svg>
          <div>
            <p className="m-0 text-sm font-bold text-[#2563EB] mb-1">Hebat!</p>
            <p className="m-0 text-xs leading-[1.6] text-[#374151]">
              Kamu telah berhasil menemukan sendiri konsep luas permukaan kubus, balok, dan
              prisma.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#DC2626] p-5 flex items-center gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-white">Kamu Luar Biasa!</p>
            <p className="m-0 text-xs leading-[1.6] text-white/90">
              Teruslah bertanya, berpikir logis, dan bekerja sama.
            </p>
          </div>
          <div className="relative w-14 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
            <EditablePageImage
              imageKey="M3-P7-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascotImage}
              alt="Maskot memberi jempol"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
