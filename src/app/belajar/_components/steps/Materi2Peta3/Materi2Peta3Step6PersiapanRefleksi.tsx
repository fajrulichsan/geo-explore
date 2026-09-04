import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const persiapan = [
  { key: "proses_membuka", label: "Proses membuka bangun ruang" },
  { key: "garis_lipatan", label: "Garis lipatan (hinge)" },
  { key: "sisi_bertumpuk", label: "Sisi yang bertumpuk" },
  { key: "hubungan_antar_sisi", label: "Hubungan antar sisi" },
  { key: "bentuk_akhir", label: "Bentuk akhir bangun ruang" },
  { key: "posisi_saat_dilipat", label: "Posisi setiap sisi saat dilipat" },
];

export default async function Materi2Peta3Step6PersiapanRefleksi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getBool = (key: string) => answers[key] === "on" || answers[key] === true;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
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
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Sebelum menggunakan GeoGebra 3D dan AR, hal-hal berikut akan kami perhatikan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {persiapan.map((p) => (
                <label
                  key={p.key}
                  className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
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
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            <p className="m-0 text-sm text-[#4B5563]">Setelah berdiskusi, tuliskan refleksi singkatmu.</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <label htmlFor="mulai-memahami" className="text-sm font-bold text-[#111827]">
                  Setelah berdiskusi, saya mulai memahami bahwa ....
                </label>
              </div>
              <textarea
                id="mulai-memahami"
                name="answers.refleksi_memahami"
                defaultValue={getValue("refleksi_memahami")}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2 1.7-2 3.3M12 17h.01" />
                </svg>
                <label htmlFor="masih-penasaran" className="text-sm font-bold text-[#111827]">
                  Saya masih penasaran tentang ....
                </label>
              </div>
              <textarea
                id="masih-penasaran"
                name="answers.refleksi_penasaran"
                defaultValue={getValue("refleksi_penasaran")}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
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
