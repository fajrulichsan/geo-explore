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
  const [groupImage, mascotImage, cubeImage] = await Promise.all([
    getPageImage("M3-P5-L6-1"),
    getPageImage("M3-P5-L6-2"),
    getPageImage("M3-P5-L6-3"),
  ]);

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

      <div className="grid lg:grid-cols-12 gap-6 items-center bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-6">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4C1D95] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Centang (&#10003;) pernyataan yang sesuai denganmu.</p>
          <div className="flex flex-col gap-2.5">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#EDE9FE] has-[:checked]:border-[#4C1D95] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={getChecked(p.key)}
                  className="w-4 h-4 accent-[#4C1D95] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 rounded-2xl overflow-hidden">
          <EditablePageImage
            imageKey="M3-P5-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={groupImage}
            alt="Tiga siswa menggambar jaring-jaring bangun ruang"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#DC2626]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17l-6.1 3.6 1.4-6.8L2.2 9.1l6.9-.8z" />
              </svg>
              Ingat!
            </p>
            <p className="m-0 text-xs leading-[1.7] text-[#374151]">
              Sebelum menggunakan rumus, pahamilah mengapa rumus tersebut terbentuk.{" "}
              <span className="font-bold text-[#1E3A8A]">Rumus berasal dari pola yang kamu temukan sendiri.</span>
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P5-L6-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={cubeImage}
            alt="Kubus biru"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-24 flex-shrink-0"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#D97706]">Kotak Motivasi</p>
            <p className="m-0 text-xs leading-[1.7] text-[#374151]">
              Setiap strategi yang kamu temukan adalah hasil proses berpikirmu. Teruslah
              membandingkan berbagai cara hingga menemukan strategi yang paling tepat.
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P5-L6-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={mascotImage}
            alt="Siswi berjilbab memberi jempol sambil membaca buku"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-36 h-32 flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <path d="M3 11v2a1 1 0 001 1h3l5 4V6L7 10H4a1 1 0 00-1 1zM16 8a5 5 0 010 8" />
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
