import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { nama: "Kubus", warna: "#A78BCA" },
  { nama: "Balok", warna: "#60A5FA" },
  { nama: "Prisma Segitiga", warna: "#6BAA5E" },
];

const pemantik = [
  "Mengapa semua sisi perlu diperhatikan untuk mengetahui luas permukaan?",
  "Apakah luas permukaan cukup dihitung dari satu sisi saja? Mengapa?",
  "Mengapa beberapa sisi memiliki ukuran yang sama?",
  "Menurutmu, langkah-langkah apa yang perlu dilakukan untuk mengetahui luas seluruh permukaan bangun ruang?",
];

export default async function Materi3Peta2Step5CariPolaPemantik({
  materi,
  peta,
  step = "5",
  initialAnswers,
  editFoto,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M3-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
          <span className="rounded-full bg-[#2563EB] text-white text-xs font-bold px-3 py-1">Tahap 1 dari 6</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Cari Pola!
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {bangunRuang.map((b, i) => (
            <div
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                <span className="w-8 h-8 rounded-lg flex-shrink-0" style={{ backgroundColor: b.warna }} />
                <span className="text-sm font-bold text-[#1E3A8A]">{b.nama}</span>
              </div>
              <textarea
                name={`answers.pola_${i + 1}`}
                defaultValue={getValue(`pola_${i + 1}`)}
                rows={2}
                required
                aria-label={`Persamaan dan perbedaan pada ${b.nama}`}
                placeholder="Apa persamaan dan perbedaannya?"
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-y"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan Pemantik
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_220px] gap-6 items-start">
          <ol className="m-0 list-none flex flex-col gap-5 rounded-[24px] bg-[#FEF9E7] border border-[#F5E3A0] p-6">
            {pemantik.map((q, i) => (
              <li key={q} className="flex flex-col gap-2">
                <label htmlFor={`pemantik_${i + 1}`} className="flex items-start gap-3 text-sm font-semibold text-[#1E3A8A] leading-[1.6]">
                  <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {q}
                </label>
                <textarea
                  id={`pemantik_${i + 1}`}
                  name={`answers.pemantik_${i + 1}`}
                  defaultValue={getValue(`pemantik_${i + 1}`)}
                  rows={2}
                  required
                  placeholder="Ketik jawabanmu di sini..."
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-y"
                />
              </li>
            ))}
          </ol>
          <EditablePageImage
            imageKey="M3-P2-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Siswi berhijab berpikir dengan gelembung tanya"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-44 h-44 lg:w-full lg:h-56 mx-auto"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
