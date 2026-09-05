import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const fokusKegiatan = [
  "Cari pola dan hubungan.",
  "Susun strategi.",
  "Tuliskan rumus sementara dalam bentuk kalimat.",
  "Refleksikan ide kelompokmu.",
];

const nomor = [1, 2, 3, 4];

export default async function Materi4Peta5Step4MenemukanStrategi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const studentsImage = await getPageImage("M4-P5-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Gunakan hasil pengamatan dan keterkaitan awal yang kamu temukan untuk menyusun strategi
          serta membuat rumus sementara.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Menemukan Strategi</h2>
          </div>
          <p className="m-0 text-sm text-[#374151]">
            Tuliskan dua cara berbeda untuk menentukan luas permukaan limas berdasarkan hasil
            pengamatan dan keterkaitan awal yang kamu temukan.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {(["1", "2"] as const).map((cara) => (
              <div key={cara} className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-3">
                <p className="m-0 inline-flex items-center gap-2 bg-[#7C3AED] text-white text-xs font-bold rounded-full px-3 py-1.5 w-fit">
                  Cara {cara}
                </p>
                {nomor.map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#DDD6FE] text-[#7C3AED] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {n}
                    </div>
                    <input
                      type="text"
                      name={`answers.cara_${cara}_langkah_${n}`}
                      defaultValue={getValue(`cara_${cara}_langkah_${n}`)}
                      placeholder="Ketik di sini..."
                      required={n === 1}
                      className="w-full rounded-lg border border-[#DDD6FE] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#374151]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M6 21h12M8 21V9a4 4 0 118 0v12M6 9h12" />
              </svg>
              Bandingkan Strategimu
            </p>
            <label htmlFor="strategi_mudah" className="text-xs text-[#4B5563]">
              Strategi mana yang menurut kelompokmu lebih mudah digunakan? Mengapa?
            </label>
            <textarea
              id="strategi_mudah"
              name="answers.strategi_mudah"
              defaultValue={getValue("strategi_mudah")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
            />
            <div className="relative w-full h-28 mt-1 rounded-xl overflow-hidden bg-[#EFF4FF]">
              <EditablePageImage
                imageKey="M4-P5-L4-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={studentsImage}
                alt="Tiga siswa membandingkan strategi"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#111827]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              Fokus Kegiatan Tahap 4
            </p>
            <ul className="m-0 flex flex-col gap-2">
              {fokusKegiatan.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#D97706]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706">
                <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
              </svg>
              Ingat!
            </p>
            <p className="m-0 text-xs leading-[1.7] text-[#92400E]">
              Rumus bukan untuk dihafal. Rumus muncul dari pola yang kamu temukan sendiri.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
