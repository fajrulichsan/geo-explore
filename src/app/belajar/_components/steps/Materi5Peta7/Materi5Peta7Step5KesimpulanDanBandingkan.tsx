import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import RadioFollowUp from "@/app/belajar/_components/RadioFollowUp";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const opsiBandingkan = [
  { value: "sama", label: "Sama" },
  { value: "hampir_sama", label: "Hampir sama" },
  { value: "berbeda", label: "Berbeda" },
];

export default async function Materi5Peta7Step5KesimpulanDanBandingkan({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M5-P7-L5-1");
  const diskusiImage = await getPageImage("M5-P7-L5-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Temukan Konsep Hubungan Skala dan Luas
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Kesimpulan Kelompok</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">Tuliskan kesimpulan akhir kelompokmu.</p>
          <div className="grid grid-cols-[1fr_auto] gap-4 items-end flex-1">
            <div className="flex flex-col gap-2 h-full">
              <label htmlFor="kesimpulan_akhir" className="text-sm font-semibold text-[#111827]">
                Kami menyimpulkan bahwa
              </label>
              <textarea
                id="kesimpulan_akhir"
                name="answers.kesimpulan_akhir"
                defaultValue={getValue("kesimpulan_akhir")}
                rows={6}
                required
                placeholder="Jawabanmu..."
                className="w-full flex-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
            <div className="relative w-28 h-40 sm:w-32 sm:h-44">
            <EditablePageImage
              imageKey="M5-P7-L5-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascotImage}
              alt="Siswa laki-laki menunjuk ke atas dengan lampu ide"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan Kesimpulan</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Bandingkan kesimpulan kelompokmu dengan kelompok lain tentang hubungan faktor skala dan luas permukaan.
          </p>
          <p className="m-0 text-sm font-bold text-[#111827]">Apakah kesimpulan kelompokmu sama dengan kelompok lain?</p>
          <RadioFollowUp
            name="perbandingan_kesimpulan"
            defaultValue={getValue("perbandingan_kesimpulan")}
            defaultFollowUps={{
              alasan_sama: getValue("alasan_sama"),
              penyebab_hampir_sama: getValue("penyebab_hampir_sama"),
              penyebab_berbeda: getValue("penyebab_berbeda"),
            }}
            textareaClassName="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
            options={opsiBandingkan}
            followUps={{
              sama: {
                label: "Apa alasan matematis yang menunjukkan bahwa kesimpulan kedua kelompok sudah sesuai?",
                field: "alasan_sama",
                placeholder: "Tuliskan alasan berdasarkan hasil verifikasi...",
              },
              hampir_sama: {
                label: "Bagian mana yang berbeda? Jelaskan penyebabnya dan apakah kesimpulan kelompokmu perlu diperbaiki!",
                field: "penyebab_hampir_sama",
                placeholder: "Tuliskan perbedaan, alasan, dan perbaikan jika diperlukan...",
              },
              berbeda: {
                label: "Apa yang menyebabkan perbedaan kesimpulan tersebut? Periksa kembali bukti matematisnya, kemudian jelaskan kesimpulan yang tepat!",
                field: "penyebab_berbeda",
                placeholder: "Tuliskan penyebab perbedaan dan kesimpulan yang tepat...",
              },
            }}
          />
          <div className="relative w-full mt-auto">
            <EditablePageImage
              imageKey="M5-P7-L5-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={diskusiImage}
              alt="Tiga siswa berdiskusi membandingkan kesimpulan"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
