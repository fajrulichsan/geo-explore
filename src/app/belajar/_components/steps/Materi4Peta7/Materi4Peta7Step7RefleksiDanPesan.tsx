import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "jelaskan_alasan_rumus", label: "Saya dapat menjelaskan alasan mengapa rumus luas permukaan limas benar." },
  { key: "tulis_kesimpulan_kelompok", label: "Saya dapat menulis kesimpulan umum kelompok dengan jelas." },
  { key: "bandingkan_kesimpulan", label: "Saya dapat membandingkan kesimpulan kelompok dengan kelompok lain." },
  { key: "yakin_kesimpulan", label: "Saya yakin dengan kesimpulan yang telah kami buat." },
  { key: "berkontribusi_aktif", label: "Saya berkontribusi aktif dalam proses menyimpulkan." },
];

export default async function Materi4Peta7Step7RefleksiDanPesan({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M4-P7-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#DB2777] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              J
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Berilah tanda centang (&#10003;) pada pernyataan yang sesuai dengan pengalamanmu pada
            Tahap 6.
          </p>
          <div className="flex flex-col gap-2.5">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#FDF2F8] has-[:checked]:border-[#DB2777] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={checked(p.key)}
                  className="w-4 h-4 accent-[#DB2777] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              K
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Pesan Penting</h2>
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-4 justify-between">
            <p className="m-0 text-[15px] font-bold text-[#92400E] leading-[1.6]">
              &ldquo;Luas permukaan limas bukan sekadar rumus yang dihafal, tetapi jumlah luas
              seluruh sisi yang membatasi bangun. Rumus membantu kita menghitung dengan efektif,
              tetapi pemahaman adalah kunci!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/50">
                <EditablePageImage
                  imageKey="M4-P7-L7-1"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="1"
                  src={mascotImage}
                  alt="Dua siswa memberi jempol tanda semangat"
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-full"
                />
              </div>
              <p className="m-0 text-xs text-[#92400E]">
                Kesimpulan hari ini adalah langkah besar menuju pemahaman yang lebih mendalam. Kamu
                luar biasa!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
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
