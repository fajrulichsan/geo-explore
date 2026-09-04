import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  {
    key: "cara",
    label: "Cara memperoleh luas permukaan",
    color: "#16A34A",
    icon: (
      <path d="M4 20V10M12 20V4M20 20v-6" />
    ),
  },
  {
    key: "alasan",
    label: "Alasan yang digunakan",
    color: "#D97706",
    icon: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
    ),
  },
  {
    key: "persamaan",
    label: "Persamaan",
    color: "#2563EB",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
      </>
    ),
  },
  {
    key: "perbedaan",
    label: "Perbedaan",
    color: "#7C3AED",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
];

export default async function Materi3Peta3Step3BandingkanPendapat({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M3-P3-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
          <p className="m-0 text-lg font-bold text-[#2563EB]">&ldquo;Membandingkan Berbagai Pendapat&rdquo;</p>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 max-w-2xl flex items-start gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Bandingkan hasil diskusi kelompokmu dengan kelompok lain. Temukan persamaan, perbedaan,
              dan alasan yang paling logis sebelum menentukan dugaan kelompok untuk diuji pada tahap
              eksplorasi berikutnya.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M3-P3-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Tiga siswa menyampaikan pendapat"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative hidden sm:block w-40 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Pendapat
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Bandingkan hasil diskusi kelompokmu dengan kelompok lain, kemudian tuliskan persamaan dan
          perbedaannya pada tabel berikut.
        </p>

        <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[560px] border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left font-bold px-4 py-3 w-1/3">Hal yang Dibandingkan</th>
                <th className="text-left font-bold px-4 py-3">Kelompok Kami</th>
                <th className="text-left font-bold px-4 py-3">Kelompok Lain</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((b) => (
                <tr key={b.key} className="border-t border-[#E5E7EB]">
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-2.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.2" className="flex-shrink-0">
                        {b.icon}
                      </svg>
                      <span className="font-bold text-[#111827]">{b.label}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <textarea
                      name={`answers.bandingkan_${b.key}_kami`}
                      defaultValue={getValue(`bandingkan_${b.key}_kami`)}
                      rows={2}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                    />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <textarea
                      name={`answers.bandingkan_${b.key}_lain`}
                      defaultValue={getValue(`bandingkan_${b.key}_lain`)}
                      rows={2}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
