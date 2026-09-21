import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const persiapan = [
  { key: "proses_membuka", label: "Proses membuka bangun ruang" },
  { key: "garis_lipatan", label: "Garis lipatan (hinge)" },
  { key: "sisi_bertumpuk", label: "Sisi yang bertumpuk" },
  { key: "hubungan_sisi", label: "Hubungan antar sisi" },
  { key: "bentuk_akhir", label: "Bentuk akhir bangun ruang" },
  { key: "posisi_sisi", label: "Posisi setiap sisi saat dilipat" },
];

export default async function Materi2Peta3Step6PersiapanRefleksi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getBool = (key: string) => answers[key] === "on";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              K
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Persiapan Eksplorasi
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Sebelum menggunakan GeoGebra 3D dan AR, hal-hal berikut akan kami perhatikan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {persiapan.map((p) => (
              <label
                key={p.key}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.persiapan_${p.key}`}
                  defaultChecked={getBool(`persiapan_${p.key}`)}
                  data-require-group="persiapan-eksplorasi"
                  className="accent-[#2563EB]"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              L
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Refleksi Singkat
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Setelah berdiskusi, tuliskan refleksi singkatmu.</p>

          <div className="rounded-[20px] border border-[#BBF7D0] bg-[#F0FDF4] p-5 flex flex-col gap-3">
            <label htmlFor="refleksi_paham" className="text-sm font-bold text-[#15803D]">
              Setelah berdiskusi, saya mulai memahami bahwa ....
            </label>
            <textarea
              id="refleksi_paham"
              name="answers.refleksi_paham"
              defaultValue={getValue("refleksi_paham")}
              placeholder="Tuliskan refleksimu..."
              required
              rows={3}
              className="w-full rounded-xl border border-[#BBF7D0] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="rounded-[20px] border border-[#DDD6FE] bg-[#F5F3FF] p-5 flex flex-col gap-3">
            <label htmlFor="refleksi_penasaran" className="text-sm font-bold text-[#5B21B6]">
              Saya masih penasaran tentang ....
            </label>
            <textarea
              id="refleksi_penasaran"
              name="answers.refleksi_penasaran"
              defaultValue={getValue("refleksi_penasaran")}
              placeholder="Tuliskan rasa penasaranmu..."
              required
              rows={3}
              className="w-full rounded-xl border border-[#DDD6FE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
