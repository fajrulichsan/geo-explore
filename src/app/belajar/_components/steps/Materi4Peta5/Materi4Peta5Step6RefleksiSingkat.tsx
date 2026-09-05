import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "bedakan_alas_sisi", label: "Saya dapat membedakan alas dan sisi tegak dengan tepat." },
  { key: "hitung_luas_alas", label: "Saya dapat menghitung luas alas limas." },
  { key: "hitung_luas_sisi_tegak", label: "Saya dapat menghitung luas setiap sisi tegak yang diperlukan." },
  {
    key: "hubungan_luas",
    label:
      "Saya mulai menemukan hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas.",
  },
  { key: "lebih_dari_satu_strategi", label: "Saya dapat menuliskan lebih dari satu strategi untuk menentukan luas permukaan limas." },
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
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M4-P5-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Centang (&#10003;) pernyataan yang sesuai dengan pengalamanmu pada Tahap 4.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h2>
        </div>
        <div className="flex flex-col gap-2.5">
          {pernyataan.map((p) => (
            <label
              key={p.key}
              className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#FDF2F8] has-[:checked]:border-[#DB2777] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                defaultChecked={getChecked(p.key)}
                className="w-4 h-4 accent-[#DB2777] flex-shrink-0"
              />
              <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D97706] to-[#B45309] p-5 flex items-center gap-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDE68A">
              <path d="M8 21h8l-1-5H9zM12 3a5 5 0 00-5 5v1a5 5 0 0010 0V8a5 5 0 00-5-5zM4 6h3M20 6h-3" />
            </svg>
            Hebat!
          </p>
          <p className="m-0 text-xs leading-[1.6] text-white/90">
            Kamu telah mengolah informasi dengan sangat baik! Pada tahap berikutnya, kamu akan
            memverifikasi apakah strategi dan rumus sementara yang telah dibuat sesuai dengan
            bukti hasil eksplorasi GeoGebra 3D, Augmented Reality (AR), dan diskusi kelompok.
          </p>
        </div>
        <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
          <EditablePageImage
            imageKey="M4-P5-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Tiga siswa membaca hasil dengan trofi dan bintang"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
