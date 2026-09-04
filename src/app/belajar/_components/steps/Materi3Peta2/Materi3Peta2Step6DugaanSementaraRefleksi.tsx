import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { n: 1, label: "Saya mulai memahami hubungan jaring-jaring dengan sisi-sisi bangun ruang." },
  { n: 2, label: "Saya masih memiliki pertanyaan." },
  { n: 3, label: "Saya ingin membuktikan dugaan saya." },
];

export default async function Materi3Peta2Step6DugaanSementaraRefleksi({
  materi,
  peta,
  step = "6",
  initialAnswers,
  editFoto,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === true;
  const closingImage = await getPageImage("M3-P2-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              K
            </div>
            <h3 className="m-0 text-lg font-bold text-[#111827]">Dugaan Sementara</h3>
          </div>
          <label htmlFor="dugaan_sementara" className="text-sm text-[#4B5563]">
            Berdasarkan hasil pengamatanmu, tuliskan dugaanmu tentang bagaimana cara memperoleh luas
            permukaan suatu bangun ruang.
          </label>
          <textarea
            id="dugaan_sementara"
            name="answers.dugaan_sementara"
            defaultValue={getValue("dugaan_sementara")}
            rows={6}
            placeholder="Ketik jawabanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              L
            </div>
            <h3 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h3>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Berikan tanda centang (&#10003;) pada pernyataan yang sesuai denganmu.
          </p>
          <div className="flex flex-col gap-3">
            {pernyataan.map((p) => (
              <label
                key={p.n}
                className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${p.n}`}
                  defaultChecked={getChecked(`refleksi_${p.n}`)}
                  className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 py-6 sm:px-8 flex flex-col sm:flex-row items-center gap-5">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-white/10">
          <EditablePageImage
            imageKey="M3-P2-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={closingImage}
            alt="Dua siswa memberi jempol"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full"
          />
        </div>
        <p className="relative m-0 text-sm leading-[1.6] text-white/90">
          <span className="font-bold text-white">Bagus! </span>
          Kamu telah mengamati bentuk jaring-jaring dan ukuran setiap sisi pada berbagai bangun ruang.
          Pola-pola yang kamu temukan akan membantumu memahami cara memperoleh luas permukaan.
          Sekarang, mari lanjutkan ke tahap berikutnya untuk berdiskusi dan mengeksplorasi lebih dalam.
        </p>
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
