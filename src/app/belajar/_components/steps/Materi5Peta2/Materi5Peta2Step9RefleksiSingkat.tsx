import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "membedakan_ukuran_luas", label: "Saya mulai dapat membedakan perubahan ukuran panjang dan perubahan luas." },
  { key: "hubungan_skala_luas", label: "Saya mulai menemukan hubungan antara skala dan luas." },
  { key: "ingin_membuktikan", label: "Saya masih ingin membuktikan dugaan saya." },
];

export default async function Materi5Peta2Step9RefleksiSingkat({
  materi,
  peta,
  step = "9",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const motivasiImage = await getPageImage("M5-P2-L9-1");
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "ya";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={9} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <p className="m-0 text-sm text-[#4B5563]">Centang (✓) sesuai dengan kondisi dirimu.</p>
          {pernyataan.map((p) => (
            <label
              key={p.key}
              className="flex items-center gap-3 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0 cursor-pointer"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                value="ya"
                defaultChecked={isChecked(p.key)}
                required
                className="w-5 h-5 accent-[#2563EB] flex-shrink-0"
              />
              <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FEF9E7] to-[#FFF7ED] border border-[#F5E3A0] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#78350F] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M12 17.8l-6.2 3.3 1.2-6.9L2 9.6l7-1L12 2l3 6.6 7 1-5 4.6 1.2 6.9z" />
              </svg>
              Motivasi
            </p>
            <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
              Dugaanmu belum tentu benar. Pada tahap berikutnya kamu akan membuktikannya melalui
              diskusi dan eksplorasi bersama teman sekelompok.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P2-L9-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={motivasiImage}
            alt="Siswa laki-laki memberi jempol tanda semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-white/60 mx-auto sm:mx-0"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/8`}
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
