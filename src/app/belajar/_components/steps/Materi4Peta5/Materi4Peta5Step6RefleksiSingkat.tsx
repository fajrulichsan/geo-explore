import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "bedakan_alas", label: "Saya dapat membedakan alas dan sisi tegak dengan tepat." },
  { key: "hitung_alas", label: "Saya dapat menghitung luas alas limas." },
  { key: "hitung_tegak", label: "Saya dapat menghitung luas setiap sisi tegak yang diperlukan." },
  {
    key: "temukan_hubungan",
    label: "Saya mulai menemukan hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas.",
  },
  { key: "lebih_dari_satu", label: "Saya dapat menuliskan lebih dari satu strategi untuk menentukan luas permukaan limas." },
  { key: "siap_periksa", label: "Saya siap memeriksa kembali strategi dan rumus sementara pada tahap berikutnya." },
];

export default async function Materi4Peta5Step6RefleksiSingkat({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "true" || answers[key] === "on";
  const [gambarRefleksi, gambarAlat] = await Promise.all([getPageImage("M4-P5-L6-1"), getPageImage("M4-P5-L6-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#DB2777]">Refleksi Singkat</span>
            <span className="text-xs text-[#6B7280]">
              Centang (&#10003;) pernyataan yang sesuai dengan pengalamanmu pada Tahap 4.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6">
          <div className="flex flex-col gap-3">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#FDF2F8] has-[:checked]:border-[#DB2777] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={isChecked(p.key)}
                  required
                  className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#DB2777]"
                />
                <span className="text-sm font-semibold text-[#374151] leading-[1.5]">{p.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M4-P5-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarRefleksi}
            alt="Tiga siswa menulis refleksi dengan ikon daftar centang di atas mereka"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 items-center bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#FBBF24" stroke="#D97706" strokeWidth="1.4" className="flex-shrink-0" aria-hidden="true">
            <path d="M8 3h8v6a4 4 0 0 1-8 0zM8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 13v4M8 21h8M10 17h4" />
          </svg>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-extrabold text-[#D97706]">Hebat!</span>
            <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
              Kamu telah mengolah informasi dengan sangat baik! Pada tahap berikutnya, kamu akan memverifikasi apakah
              strategi dan rumus sementara yang telah dibuat sesuai dengan bukti hasil eksplorasi GeoGebra 3D,
              Augmented Reality (AR), dan diskusi kelompok.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M4-P5-L6-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambarAlat}
          alt="Laptop menampilkan GeoGebra 3D dan tablet menampilkan limas dengan Augmented Reality"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
