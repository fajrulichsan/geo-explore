import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta7Step1ApaYangKamuTemukan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M4-P7-L1-1");
  const jaringImage = await getPageImage("M4-P7-L1-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kamu telah melalui tahap mengamati, berdiskusi, bereksplorasi, mengolah informasi, dan
            memverifikasi.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Sekarang saatnya menyusun kesimpulan berdasarkan{" "}
            <span className="font-bold text-[#2563EB]">seluruh kegiatan</span> yang telah kamu
            lakukan. Tuliskan temuanmu dan rumus umum luas permukaan limas beserta alasannya.
          </p>
        </div>
        <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden bg-[#EFF4FF]">
          <EditablePageImage
            imageKey="M4-P7-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa menyusun kesimpulan bersama dengan laptop dan AR"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full min-h-[180px]"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              A
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Apa yang Kamu Temukan?</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Lengkapi pernyataan berikut berdasarkan hasil kegiatanmu.
          </p>

          <div className="flex flex-col gap-2">
            <label htmlFor="cara_memperoleh" className="text-sm font-semibold text-[#111827]">
              Cara memperoleh luas permukaan limas adalah dengan
            </label>
            <textarea
              id="cara_memperoleh"
              name="answers.cara_memperoleh"
              defaultValue={getValue("cara_memperoleh")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="unsur_jaring" className="text-sm font-semibold text-[#111827]">
              Dalam jaring-jaring limas, terdapat ... sebagai alas dan ... sebagai sisi tegak.
            </label>
            <textarea
              id="unsur_jaring"
              name="answers.unsur_jaring"
              defaultValue={getValue("unsur_jaring")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="langkah_menentukan" className="text-sm font-semibold text-[#111827]">
              Untuk menentukan luas permukaan limas, kita perlu
            </label>
            <textarea
              id="langkah_menentukan"
              name="answers.langkah_menentukan"
              defaultValue={getValue("langkah_menentukan")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              B
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Hubungan Jaring-Jaring dan Luas Permukaan</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Perhatikan hubungan antara jaring-jaring limas dan luas permukaannya!
          </p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#EFF4FF]">
            <EditablePageImage
              imageKey="M4-P7-L1-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={jaringImage}
              alt="Diagram hubungan limas, jaring-jaring, dan penjumlahan luas alas dengan luas sisi tegak menjadi luas permukaan"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
          <p className="m-0 text-xs text-[#6B7280]">
            Keterangan: warna hijau menunjukkan bagian permukaan limas yang dihitung.
          </p>
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
