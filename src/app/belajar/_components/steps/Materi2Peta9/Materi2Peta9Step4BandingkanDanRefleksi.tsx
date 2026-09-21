import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "hal_menantang", label: "Apa hal paling menantang saat menyelesaikan tugas ini?" },
  { key: "strategi_efektif", label: "Strategi mana yang menurutmu paling efektif? Mengapa?" },
  {
    key: "pelajaran_ditemukan",
    label: "Apa yang kamu pelajari dari menemukan banyak jaring-jaring berbeda?",
  },
];

const motivasi = [
  "Ada lebih dari satu jawaban yang benar.",
  "Berbagai ide menunjukkan beragam cara berpikir matematis.",
  "Setiap jawaban perlu didukung alasan yang jelas.",
];

export default async function Materi2Peta9Step4BandingkanDanRefleksi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const boyImage = await getPageImage("M2-P9-L4-1");

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
          <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
            Bandingkan Ide
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Bandingkan jaring-jaring yang kamu buat dengan teman kelompokmu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#EFFDF4] border border-[#BBF0D3] rounded-2xl p-4 flex flex-col gap-2">
              <label htmlFor="persamaan" className="text-sm font-bold text-[#16A34A]">
                Persamaan
              </label>
              <p className="m-0 text-xs text-[#4B5563]">
                Apa yang sama dari jaring-jaring yang kalian buat?
              </p>
              <textarea
                id="persamaan"
                name="answers.bandingkan_persamaan"
                defaultValue={getValue("bandingkan_persamaan")}
                rows={4}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-xl border border-[#BBF0D3] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
              />
            </div>
            <div className="bg-[#FEF2F2] border border-[#FBCACA] rounded-2xl p-4 flex flex-col gap-2">
              <label htmlFor="perbedaan" className="text-sm font-bold text-[#DC2626]">
                Perbedaan
              </label>
              <p className="m-0 text-xs text-[#4B5563]">Apa yang berbeda? Mengapa bisa berbeda?</p>
              <textarea
                id="perbedaan"
                name="answers.bandingkan_perbedaan"
                defaultValue={getValue("bandingkan_perbedaan")}
                rows={4}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-xl border border-[#FBCACA] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Tantangan
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-5">
            {refleksi.map((r, i) => (
              <div key={r.key} className="flex flex-col gap-2">
                <label htmlFor={r.key} className="flex items-start gap-2.5 text-sm font-semibold text-[#111827]">
                  <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {r.label}
                </label>
                <textarea
                  id={r.key}
                  name={`answers.${r.key}`}
                  defaultValue={getValue(r.key)}
                  rows={2}
                  required
                  placeholder="Jawabanmu..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y sm:ml-8 sm:w-[calc(100%-2rem)]"
                />
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M2-P9-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={boyImage}
            alt="Siswa dengan gelembung pikiran berisi bola lampu"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 sm:w-40 aspect-[357/540] flex-shrink-0 mx-auto sm:mx-0 sm:self-end"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex items-start gap-3">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
            <path d="M8 21h8M12 17v4M7 4h10l-1 8a4 4 0 01-8 0z" />
            <path d="M7 4a2 2 0 00-2 2c0 2 2 3 2 3M17 4a2 2 0 012 2c0 2-2 3-2 3" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#92400E]">Kotak Motivasi</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-1">
              {motivasi.map((m) => (
                <li key={m} className="text-xs font-semibold text-[#78350F] leading-[1.5]">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-start gap-3">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5zM9 12l-3-.5 2-3 3 1M12 15l.5 3 3-2-1-3" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Menuju Tahap Berikutnya</p>
            <p className="m-0 text-xs text-[#374151] leading-[1.6]">
              Setelah menyelesaikan tantangan ini, periksa kembali jawabanmu dan diskusikan dengan
              teman kelompok. Rangkuman berikutnya akan merangkum hal penting yang telah kamu
              pelajari hari ini.
            </p>
          </div>
        </div>
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
