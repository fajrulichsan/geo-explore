import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const kegiatan = [
  { key: "buka_jaring", label: "Membuka limas menjadi jaring-jaring." },
  { key: "amati_alas", label: "Mengamati bentuk alas." },
  { key: "amati_sisi_tegak", label: "Mengamati seluruh sisi tegak." },
  { key: "ukur", label: "Mengukur ukuran yang diperlukan." },
  { key: "hitung_luas", label: "Menghitung luas setiap bagian." },
  { key: "bandingkan", label: "Membandingkan hasil dengan dugaan." },
];

const keadaan = [
  { key: "memahami_masalah", label: "lebih memahami masalah." },
  { key: "dugaan_baik", label: "memiliki dugaan yang lebih baik." },
  { key: "masih_bertanya", label: "masih memiliki pertanyaan." },
  { key: "siap_membuktikan", label: "siap membuktikan hipotesis melalui GeoGebra 3D dan Augmented Reality (AR)." },
];

export default async function Materi4Peta3Step6PersiapanRefleksi({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "on" || answers[key] === "true";

  const [mascot, perangkat] = await Promise.all([getPageImage("M4-P3-L1-1"), getPageImage("M4-P3-L6-1")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Halaman 2 dari 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Persiapan Eksplorasi
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang kegiatan yang akan dilakukan pada Tahap 3.</p>
            {kegiatan.map((k) => (
              <label
                key={k.key}
                className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.siap_${k.key}`}
                  defaultChecked={isChecked(`siap_${k.key}`)}
                  className="w-[18px] h-[18px] flex-shrink-0 accent-[#2563EB]"
                />
                <span className="text-sm font-semibold text-[#374151]">{k.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              J
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
              Refleksi Singkat
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <EditablePageImage
              imageKey="M4-P3-L1-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascot}
              alt="Tiga siswa berdiskusi di meja belajar"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[16/9]"
            />
            <p className="m-0 text-sm text-[#4B5563]">
              Centang (&#10003;) pernyataan yang paling sesuai dengan keadaanmu setelah berdiskusi.
            </p>
            {keadaan.map((k) => (
              <label
                key={k.key}
                className="flex items-start gap-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 cursor-pointer has-[:checked]:border-[#7C3AED] has-[:checked]:bg-[#F5F3FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${k.key}`}
                  defaultChecked={isChecked(`refleksi_${k.key}`)}
                  className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#7C3AED]"
                />
                <span className="text-sm font-semibold text-[#374151] leading-[1.5]">
                  Saya {k.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0">
          <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 16.9 6.2 20l1.1-6.5-4.8-4.6L9.1 8z" />
        </svg>
        <div className="flex flex-col gap-1.5">
          <span className="text-base font-bold text-[#92400E]">Kotak Motivasi</span>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
            Perbedaan pendapat bukan penghalang, justru membantu kita menemukan ide yang lebih kuat.
            Buktikan hipotesismu melalui eksplorasi dengan GeoGebra 3D dan Augmented Reality (AR).
            <strong className="text-[#1E3A8A]"> Teruslah berpikir, bertanya, dan mengeksplorasi!</strong>
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5 rounded-[20px] bg-gradient-to-r from-[#EFF4FF] to-[#F5F3FF] border border-[#DBE4FF] p-5">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" className="flex-shrink-0" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 00-2.9-.1z" />
          <path d="M12 15l-3-3a22 22 0 012-4 12.9 12.9 0 0111-6c0 2.7-.8 7.5-6 11a22 22 0 01-4 2z" />
          <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
        </svg>
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Saatnya Membuktikan Hipotesismu!</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Langkah selanjutnya: Tahap 3 &ndash; Ayo Bereksplorasi menggunakan GeoGebra 3D dan Augmented
            Reality (AR).
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P3-L6-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={perangkat}
          alt="Laptop dan tablet menampilkan GeoGebra 3D dan AR"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full sm:w-52 aspect-[16/9] flex-shrink-0"
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
            <path d="M5 12l5 5L20 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
