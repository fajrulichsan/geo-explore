import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "kelompokkan_sisi", label: "Saya dapat mengelompokkan sisi-sisi yang sama bentuk dan ukurannya." },
  { key: "hitung_luas", label: "Saya dapat menghitung luas setiap sisi." },
  { key: "hubungan_luas", label: "Saya menemukan hubungan antara luas sisi dan luas permukaan." },
  { key: "lebih_dari_satu_cara", label: "Saya menemukan lebih dari satu cara." },
  { key: "siap_periksa", label: "Saya siap memeriksa kembali dan memperbaiki hasil kelompok kami." },
];

export default async function Materi3Peta5Step6RefleksiSingkat({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M3-P5-L6-1");

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
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Luas Permukaan</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Centang (&#10003;) pernyataan yang sesuai dengamu.
        </p>
        <div className="flex flex-col gap-2.5">
          {pernyataan.map((p) => (
            <label
              key={p.key}
              className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#F5F3FF] has-[:checked]:border-[#7C3AED] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                defaultChecked={getChecked(p.key)}
                className="w-4 h-4 accent-[#7C3AED] flex-shrink-0"
              />
              <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
            <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#D97706]">Ingat!</p>
            <p className="m-0 text-xs leading-[1.7] text-[#374151]">
              Sebelum menggunakan rumus, pahamilah mengapa rumus tersebut terbentuk.{" "}
              <span className="font-bold text-[#111827]">
                Rumus berasal dari pola yang kamu temukan sendiri.
              </span>
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#15803D] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDE68A">
                <path d="M8 21h8l-1-5H9zM12 3a5 5 0 00-5 5v1a5 5 0 0010 0V8a5 5 0 00-5-5zM4 6h3M20 6h-3" />
              </svg>
              Kotak Motivasi
            </p>
            <p className="m-0 text-xs leading-[1.6] text-white/90">
              Setiap strategi yang kamu temukan adalah hasil proses berpikirmu. Teruslah
              membandingkan berbagai cara hingga menemukan strategi yang paling tepat.
            </p>
          </div>
          <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
            <EditablePageImage
              imageKey="M3-P5-L6-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={mascotImage}
              alt="Maskot memberi jempol"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
        </svg>
        <p className="m-0 text-xs leading-[1.7] text-[#374151]">
          <span className="font-bold text-[#111827]">Hebat! </span>
          Kamu telah berhasil mengolah informasi hasil eksplorasi. Pada tahap berikutnya, kamu akan
          memverifikasi apakah strategi dan rumus sementara yang telah ditemukan sudah benar
          berdasarkan bukti, diskusi, dan alasan matematis.
        </p>
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
