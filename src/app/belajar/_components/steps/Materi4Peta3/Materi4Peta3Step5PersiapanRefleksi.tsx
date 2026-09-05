import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kegiatan = [
  { key: "buka_jaring", label: "Membuka limas menjadi jaring-jaring." },
  { key: "amati_alas", label: "Mengamati bentuk alas." },
  { key: "amati_sisi_tegak", label: "Mengamati seluruh sisi tegak." },
  { key: "ukur", label: "Mengukur ukuran yang diperlukan." },
  { key: "hitung_luas", label: "Menghitung luas setiap bagian." },
  { key: "bandingkan_dugaan", label: "Membandingkan hasil dengan dugaan." },
];

const pernyataan = [
  { key: "lebih_memahami", label: "Lebih memahami masalah." },
  { key: "dugaan_lebih_baik", label: "Memiliki dugaan yang lebih baik." },
  { key: "masih_pertanyaan", label: "Masih memiliki pertanyaan." },
  { key: "siap_membuktikan", label: "Siap membuktikan hipotesis melalui GeoGebra 3D dan Augmented Reality (AR)." },
];

export default async function Materi4Peta3Step5PersiapanRefleksi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === true;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Persiapan Eksplorasi
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Centang kegiatan yang akan dilakukan pada Tahap 3.
          </p>
          <div className="flex flex-col gap-2.5">
            {kegiatan.map((k) => (
              <label
                key={k.key}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.persiapan_${k.key}`}
                  defaultChecked={getChecked(`persiapan_${k.key}`)}
                  className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{k.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              J
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Refleksi Singkat
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Centang (&#10003;) pernyataan yang paling sesuai dengan keadaanmu setelah berdiskusi.
          </p>
          <div className="flex flex-col gap-2.5">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${p.key}`}
                  defaultChecked={getChecked(`refleksi_${p.key}`)}
                  className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#D97706] to-[#B45309] px-6 py-6 sm:px-8 flex flex-col sm:flex-row items-center gap-5">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#FDE68A" className="flex-shrink-0">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
        <div className="flex flex-col gap-1.5">
          <p className="m-0 text-sm font-bold text-white">Kotak Motivasi</p>
          <p className="m-0 text-sm leading-[1.6] text-white/90">
            Perbedaan pendapat bukan penghalang, justru membantu kita menemukan ide yang lebih kuat.
            Buktikan hipotesismu melalui eksplorasi dengan GeoGebra 3D dan Augmented Reality (AR).
            Teruslah berpikir, bertanya, dan mengeksplorasi!
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-6 py-5">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
        <p className="m-0 text-sm leading-[1.6] text-[#1D4ED8]">
          Langkah selanjutnya: <span className="font-bold">Tahap 3 &ndash; Ayo Bereksplorasi</span>{" "}
          menggunakan GeoGebra 3D dan Augmented Reality (AR).
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 3
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
