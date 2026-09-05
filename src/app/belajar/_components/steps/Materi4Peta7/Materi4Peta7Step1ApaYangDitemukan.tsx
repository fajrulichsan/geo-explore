import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const proses = [
  "Mengamati & Berpikir",
  "Berdiskusi",
  "Bereksplorasi",
  "Mengolah Informasi",
  "Verifikasi",
  "Menyimpulkan",
];

export default async function Materi4Peta7Step1ApaYangDitemukan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M4-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={8} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          Tahap 6 dari 6
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M4-P7-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa menyusun kesimpulan bersama"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan
          </h1>
          <p className="m-0 text-sm font-semibold text-[#2563EB]">
            Menemukan Rumus Umum Luas Permukaan Limas
          </p>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md">
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Kamu telah melalui tahap mengamati, berdiskusi, bereksplorasi, mengolah informasi,
              dan memverifikasi. Sekarang saatnya menyusun{" "}
              <span className="font-bold">kesimpulan</span> berdasarkan seluruh kegiatan yang
              telah kamu lakukan.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4">
        {proses.map((p, i) => (
          <div key={p} className="flex items-center gap-2.5">
            <span
              className={`text-xs font-bold rounded-full px-3 py-1.5 ${
                p === "Menyimpulkan" ? "bg-[#16A34A] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"
              }`}
            >
              {p}
            </span>
            {i < proses.length - 1 && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Apa yang Kamu Temukan?</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Lengkapi pernyataan berikut berdasarkan hasil kegiatanmu.
        </p>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cara_luas_permukaan" className="text-sm font-semibold text-[#111827]">
            Cara memperoleh luas permukaan limas adalah dengan ...
          </label>
          <textarea
            id="cara_luas_permukaan"
            name="answers.cara_luas_permukaan"
            defaultValue={getValue("cara_luas_permukaan")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="bidang_alas" className="text-sm font-semibold text-[#111827]">
              Dalam jaring-jaring limas, terdapat ... sebagai alas
            </label>
            <input
              id="bidang_alas"
              type="text"
              name="answers.bidang_alas"
              defaultValue={getValue("bidang_alas")}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="bidang_sisi_tegak" className="text-sm font-semibold text-[#111827]">
              ... sebagai sisi tegak
            </label>
            <input
              id="bidang_sisi_tegak"
              type="text"
              name="answers.bidang_sisi_tegak"
              defaultValue={getValue("bidang_sisi_tegak")}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="langkah_luas_permukaan" className="text-sm font-semibold text-[#111827]">
            Untuk menentukan luas permukaan limas, kita perlu ...
          </label>
          <textarea
            id="langkah_luas_permukaan"
            name="answers.langkah_luas_permukaan"
            defaultValue={getValue("langkah_luas_permukaan")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end items-center">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
