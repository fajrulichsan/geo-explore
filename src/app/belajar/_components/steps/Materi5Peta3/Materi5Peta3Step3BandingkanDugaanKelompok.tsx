import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "dugaan_hubungan_skala_luas", label: "Dugaan hubungan skala dan luas" },
  { key: "alasan_mendukung", label: "Alasan yang mendukung dugaan" },
  { key: "persamaan_dugaan", label: "Persamaan dugaan" },
  { key: "perbedaan_dugaan", label: "Perbedaan dugaan" },
];

const contohPertanyaan = [
  "Bagaimana perubahan luas permukaan ketika setiap ukuran panjang diperbesar dua kali?",
  "Apakah semua bangun ruang sisi datar memiliki pola perubahan luas permukaan yang sama ketika diperbesar?",
  "Apakah hubungan antara faktor skala dan perubahan luas permukaan sama pada setiap bangun yang diamati?",
];

export default async function Materi5Peta3Step3BandingkanDugaanKelompok({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M5-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Ayo Berdiskusi
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M5-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Tiga siswa membandingkan dugaan antar kelompok"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3.5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
              <path d="M3 11l18.5-8-6 20-4.5-9.5L3 11z" />
            </svg>
            <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bandingkan</h1>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Sekarang bandingkan dugaan kelompokmu dengan kelompok lain. Apakah semuanya
            memiliki dugaan yang sama?
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Dugaan Kelompok
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan hasil diskusi setelah membandingkan dugaan kelompokmu dengan satu kelompok lain.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/3">
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
              {baris.map((b) => (
                <tr key={b.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{b.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.${b.key}_kami`}
                      defaultValue={getValue(`${b.key}_kami`)}
                      required
                      placeholder="..."
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.${b.key}_lain`}
                      defaultValue={getValue(`${b.key}_lain`)}
                      required
                      placeholder="..."
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="m-0 flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
          Tips: Catat poin penting dari hasil perbandingan untuk memperkuat dugaanmu.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-base font-bold text-[#111827]">Pertanyaan yang Akan Dibuktikan</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan pertanyaan utama yang akan kelompokmu buktikan melalui eksplorasi.
        </p>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4">
          <p className="m-0 text-xs font-bold text-[#374151] mb-2">Contoh pertanyaan:</p>
          <ul className="m-0 pl-5 text-xs leading-[1.8] text-[#4B5563] list-disc">
            {contohPertanyaan.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <label htmlFor="pertanyaan_utama" className="text-sm font-semibold text-[#374151]">
          Pertanyaan utama kelompok kami:
        </label>
        <textarea
          id="pertanyaan_utama"
          name="answers.pertanyaan_utama"
          defaultValue={getValue("pertanyaan_utama")}
          rows={3}
          required
          placeholder="Tuliskan pertanyaan utama kelompokmu..."
          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
        <p className="m-0 flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
          Tips: Pertanyaan yang baik akan membantumu membuktikan dugaan secara tepat dengan
          GeoGebra 3D dan Augmented Reality.
        </p>
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
