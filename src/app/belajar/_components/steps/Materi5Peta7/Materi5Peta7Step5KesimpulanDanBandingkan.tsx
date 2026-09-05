import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const opsiBandingkan = [
  { value: "sama", label: "Sama" },
  { value: "hampir_sama", label: "Hampir Sama" },
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
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Skala dan Luas Bangun Ruang Sisi Datar
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

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#EFF4FF]">
              <EditablePageImage
                imageKey="M5-P7-L5-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={mascotImage}
                alt="Siswa laki-laki menunjuk ke atas menyampaikan kesimpulan"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
            <label htmlFor="kesimpulan_akhir" className="text-sm text-[#374151] flex-1">
              Kami menyimpulkan bahwa ...
            </label>
          </div>
          <textarea
            id="kesimpulan_akhir"
            name="answers.kesimpulan_akhir"
            defaultValue={getValue("kesimpulan_akhir")}
            rows={5}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan Kesimpulan</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Apakah kesimpulan kelompokmu sama dengan kelompok lain?
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#EFF4FF]">
            <EditablePageImage
              imageKey="M5-P7-L5-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={diskusiImage}
              alt="Tiga siswa berdiskusi membandingkan kesimpulan"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {opsiBandingkan.map((o) => (
              <label
                key={o.value}
                className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#F3E8FF] has-[:checked]:border-[#7C3AED] has-[:checked]:text-[#7C3AED] transition-colors"
              >
                <input
                  type="radio"
                  name="answers.perbandingan_kesimpulan"
                  value={o.value}
                  defaultChecked={getValue("perbandingan_kesimpulan") === o.value}
                  required
                  className="accent-[#7C3AED]"
                />
                {o.label}
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="penyebab_berbeda" className="text-sm text-[#374151]">
              Jika berbeda, apa penyebabnya?
            </label>
            <textarea
              id="penyebab_berbeda"
              name="answers.penyebab_berbeda"
              defaultValue={getValue("penyebab_berbeda")}
              rows={3}
              placeholder="Jawabanmu (opsional jika sama)..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
