import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  {
    key: "dugaan_cara",
    teks: "Menurut kelompokmu, apakah ada lebih dari satu cara untuk menentukan volume suatu bangun tanpa menghitung kubus satuan satu per satu? Tuliskan kemungkinan cara yang kalian pikirkan.",
  },
  {
    key: "dugaan_hubungan",
    teks: "Menurut kelompokmu, bagaimana hubungan antara:",
    daftar: [
      "bentuk dan ukuran satu lapisan pada kubus dan balok;",
      "ukuran penampang sejajar alas pada prisma;",
      "banyaknya lapisan pada kubus dan balok;",
      "panjang prisma;",
      "volume?",
    ],
  },
];

export default async function Materi6Peta3Step2DugaanAlasan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarKelompok = await getPageImage("M6-P3-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Mengapa volume dapat ditentukan tanpa menghitung kubus satuan satu per satu?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Kelompok
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Diskusikan pertanyaan berikut.</p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-5 items-center">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            {pertanyaan.map((p, i) => (
              <div key={p.key} className="flex flex-col gap-2">
                <label className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs flex-shrink-0">
                    {i + 1}
                  </span>
                  {p.teks}
                </label>
                {p.daftar && (
                  <ul className="m-0 pl-14 flex flex-col gap-1 text-sm text-[#374151] list-disc">
                    {p.daftar.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
                <textarea
                  name={`answers.${p.key}`}
                  defaultValue={getValue(p.key)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            ))}
          </div>
          <EditablePageImage
          imageKey="M6-P3-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarKelompok}
          alt="Tiga siswa laki-laki berdiskusi"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 overflow-hidden"
        />
        </div>
      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
          <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Tips:</span> Gunakan hasil pengamatan pada Tahap 1 sebagai dasar dalam membuat dugaan.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Alasan Dugaan
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <label className="text-sm font-bold text-[#111827] leading-[1.5]">
            Mengapa kelompokmu memiliki dugaan tersebut? Tuliskan alasan yang mendukung dugaan kelompokmu berdasarkan
            hasil pengamatan pada Tahap 1.
          </label>
          <textarea
                  name={`answers.alasan_dugaan`}
                  defaultValue={getValue("alasan_dugaan")}
                  rows={6}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
        </div>
      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
          <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Tips:</span> Hubungkan alasanmu dengan hal-hal yang kamu amati, misalnya kesamaan pola, bentuk, ukuran, atau banyaknya lapisan.</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
