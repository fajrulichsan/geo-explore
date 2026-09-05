import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  "Mengamati",
  "Berdiskusi",
  "Bereksplorasi",
  "Mengolah Informasi",
  "Verifikasi",
  "Menyimpulkan",
];

export default async function Materi5Peta7Step1ApaYangKamuTemukan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M5-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Skala dan Luas Bangun Ruang Sisi Datar
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kamu telah mengamati, berdiskusi, bereksplorasi, mengolah informasi, dan memverifikasi
            hasil temuanmu.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Sekarang saatnya menyusun kesimpulan berdasarkan{" "}
            <span className="font-bold text-[#2563EB]">seluruh proses pembelajaran</span> yang
            telah kamu lakukan.
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-2">
            {alur.map((item, idx) => (
              <div key={item} className="flex items-center gap-2">
                <span className="inline-flex items-center bg-[#EFF4FF] text-[#1D4ED8] rounded-full py-1 px-3 text-[11px] font-bold">
                  {item}
                </span>
                {idx < alur.length - 1 && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2.6">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden bg-[#EFF4FF]">
          <EditablePageImage
            imageKey="M5-P7-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa menyusun kesimpulan bersama dengan laptop dan buku"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full min-h-[180px]"
          />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Apa yang Kamu Temukan?</h2>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Lengkapilah kalimat berikut berdasarkan hasil pembelajaran.
        </p>

        <div className="flex flex-col gap-2">
          <label htmlFor="faktor_skala_k" className="text-sm font-semibold text-[#111827]">
            1. Jika setiap ukuran panjang bangun diubah dengan faktor skala k, maka
          </label>
          <textarea
            id="faktor_skala_k"
            name="answers.faktor_skala_k"
            defaultValue={getValue("faktor_skala_k")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="luas_permukaan_berubah" className="text-sm font-semibold text-[#111827]">
            2. Luas permukaan bangun akan berubah menjadi
          </label>
          <textarea
            id="luas_permukaan_berubah"
            name="answers.luas_permukaan_berubah"
            defaultValue={getValue("luas_permukaan_berubah")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="hubungan_skala_luas" className="text-sm font-semibold text-[#111827]">
            3. Hubungan antara faktor skala dan luas permukaan adalah
          </label>
          <textarea
            id="hubungan_skala_luas"
            name="answers.hubungan_skala_luas"
            defaultValue={getValue("hubungan_skala_luas")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-end items-center">
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
