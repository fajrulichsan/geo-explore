import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { n: 1, label: "Saya menemukan lebih dari satu cara untuk menyelesaikan masalah ini." },
  { n: 2, label: "Saya dapat menjelaskan alasan matematis dari setiap strategi yang saya gunakan." },
  { n: 3, label: "Saya dapat membandingkan strategi dan menentukan strategi yang paling efektif menurut saya." },
  { n: 4, label: "Saya percaya diri menjelaskan jawaban saya kepada teman atau guru." },
  { n: 5, label: "Saya memahami bahwa berbagai strategi dapat menghasilkan hasil yang sama jika didasarkan pada konsep yang benar." },
];

const opsi = [
  { value: "sangat_setuju", label: "Sangat Setuju" },
  { value: "setuju", label: "Setuju" },
  { value: "cukup_setuju", label: "Cukup Setuju" },
  { value: "belum_setuju", label: "Belum Setuju" },
];

export default async function Materi4Peta9Step4RefleksiSingkat({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const trophyImage = await getPageImage("M4-P9-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Singkat
          </div>
          <p className="m-0 text-xs text-[#6B7280]">
            Pilih pernyataan yang sesuai dengan pengalamanmu.
          </p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          {pernyataan.map((p) => (
            <div key={p.n} className="flex flex-col gap-3 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0">
              <p className="m-0 text-sm font-semibold text-[#374151]">
                {p.n}. {p.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {opsi.map((o) => (
                  <label
                    key={o.value}
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFFDF4] has-[:checked]:border-[#16A34A] has-[:checked]:text-[#16A34A] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.refleksi_${p.n}`}
                      value={o.value}
                      defaultChecked={getValue(`refleksi_${p.n}`) === o.value}
                      required
                      className="accent-[#16A34A]"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FEF2F2] border border-[#FBCACA] rounded-2xl p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M4-P9-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={trophyImage}
            alt="Trofi penghargaan usaha siswa"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#DC2626]">Kamu Hebat!</p>
            <p className="m-0 text-xs font-semibold text-[#991B1B] leading-[1.5]">
              Teruslah berpikir kreatif, kritis, dan percaya diri. Setiap strategi yang kamu
              gunakan adalah langkah menuju pemahaman yang lebih mendalam.
            </p>
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Setelah menyelesaikan halaman ini</p>
            <ul className="m-0 pl-4 flex flex-col gap-1">
              <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
                Periksa kembali jawaban dan alasanmu.
              </li>
              <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
                Yakinlah bahwa setiap langkahmu logis dan jelas.
              </li>
              <li className="text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
                Simpan hasil kerja terbaikmu.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M11 15h2v2h-2zM11 7h2v6h-2z" />
          <path d="M12 2l10 18H2z" />
        </svg>
        <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
          Setiap cara adalah berharga, setiap alasan membuatmu luar biasa! Selanjutnya, bacalah
          Rangkuman Submateri 4 untuk memperkuat konsep-konsep penting yang telah kamu temukan.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
