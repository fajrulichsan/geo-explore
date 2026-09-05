import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const hal = [
  { key: "cara_menentukan", label: "Cara menentukan luas permukaan" },
  { key: "bagian_diperhitungkan", label: "Bagian yang perlu diperhitungkan" },
  { key: "alasan_matematis", label: "Alasan matematis" },
];

export default async function Materi4Peta3Step3BandingkanHasil({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M4-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Ayo Berdiskusi &middot; Halaman 2
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M4-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Tiga siswa berdiskusi membandingkan hasil"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
          <p className="m-0 text-sm font-bold text-[#2563EB]">
            Bandingkan hasil diskusimu, lalu susun hipotesis yang akan dibuktikan pada tahap eksplorasi.
          </p>
          <div className="relative bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl py-3 px-4 flex items-start gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0 mt-0.5">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.5] text-[#92400E]">
              Bandingkan hasil diskusimu dengan kelompok lain, lengkapi setiap aktivitas, kemudian
              susun hipotesis dan prediksi yang akan dibuktikan pada tahap eksplorasi.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan Hasil Diskusi</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Bandingkan hasil diskusimu dengan kelompok lain. Lengkapilah tabel berikut.
        </p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/4">
                  Hal yang Dibandingkan
                </th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20">
                  Kelompok Kami
                </th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Kelompok Lain
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {hal.map((h) => (
                <tr key={h.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{h.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.bandingkan_kami_${h.key}`}
                      defaultValue={getValue(`bandingkan_kami_${h.key}`)}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.bandingkan_lain_${h.key}`}
                      defaultValue={getValue(`bandingkan_lain_${h.key}`)}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl p-4 flex items-start gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706" className="mt-0.5 flex-shrink-0">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E]">
            Tuliskan strategi dan alasan yang digunakan oleh kelompokmu dan kelompok lain.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
