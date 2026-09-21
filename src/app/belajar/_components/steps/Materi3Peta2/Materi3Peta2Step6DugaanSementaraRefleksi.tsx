import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  "Saya mulai memahami hubungan jaring-jaring dengan sisi-sisi bangun ruang.",
  "Saya masih memiliki pertanyaan.",
  "Saya ingin membuktikan dugaan saya.",
];

export default async function Materi3Peta2Step6DugaanSementaraRefleksi({
  materi,
  peta,
  step = "6",
  initialAnswers,
  editFoto,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const dugaan = typeof answers.dugaan_sementara === "string" ? answers.dugaan_sementara : "";
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === "true" || answers[key] === true;
  const [gambarMenulis, gambarPenutup] = await Promise.all([getPageImage("M3-P2-L6-1"), getPageImage("M3-P2-L6-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
          <span className="rounded-full bg-[#2563EB] text-white text-xs font-bold px-3 py-1">Tahap 1 dari 6</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <h3 className="m-0 text-lg font-bold text-[#111827]">Dugaan Sementara</h3>
          </div>
          <label htmlFor="dugaan_sementara" className="text-sm text-[#4B5563] leading-[1.6]">
            Berdasarkan hasil pengamatanmu, tuliskan dugaanmu tentang bagaimana cara memperoleh luas permukaan suatu
            bangun ruang.
          </label>
          <textarea
            id="dugaan_sementara"
            name="answers.dugaan_sementara"
            defaultValue={dugaan}
            rows={6}
            required
            placeholder="Ketik jawabanmu di sini..."
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-y"
          />
        </div>

        <div className="bg-[#EFF4FF] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <h3 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h3>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Berikan tanda centang (&#10003;) pada pernyataan yang sesuai denganmu.</p>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-center">
            <div className="flex flex-col gap-3 flex-1 w-full">
              {pernyataan.map((p, i) => (
                <label
                  key={p}
                  className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#DBE7FF] has-[:checked]:border-[#2563EB] transition-colors"
                >
                  <input
                    type="checkbox"
                    name={`answers.refleksi_${i + 1}`}
                    defaultChecked={getChecked(`refleksi_${i + 1}`)}
                    className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                  />
                  <span className="text-sm font-semibold text-[#374151]">{p}</span>
                </label>
              ))}
            </div>
            <EditablePageImage
              imageKey="M3-P2-L6-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarMenulis}
              alt="Siswa laki-laki menulis di buku"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-36 h-32 flex-shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 py-6 sm:px-8 flex flex-col md:flex-row items-center gap-5">
        <p className="m-0 text-sm leading-[1.7] text-white/90 flex-1">
          <span className="font-bold text-white">Bagus! </span>
          Kamu telah mengamati bentuk jaring-jaring dan ukuran setiap sisi pada berbagai bangun ruang. Pola-pola
          yang kamu temukan akan membantumu memahami cara memperoleh luas permukaan. Sekarang, mari kita lanjutkan
          ke tahap berikutnya untuk berdiskusi dan mengeksplorasi lebih dalam!
        </p>
        <EditablePageImage
          imageKey="M3-P2-L6-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambarPenutup}
          alt="Dua siswa menunjuk ke atas dengan bintang"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full md:w-72 aspect-[3/1] flex-shrink-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
