import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "dugaan_benar", tanya: "Dugaan mana yang ternyata benar?" },
  { key: "dugaan_diperbaiki", tanya: "Dugaan mana yang harus diperbaiki?" },
  { key: "alasan_meyakinkan", tanya: "Apa alasan matematis yang paling meyakinkan menurut kelompokmu?" },
  { key: "lebih_yakin", tanya: "Setelah melakukan verifikasi, apakah kamu lebih yakin dengan alasan kelompokmu? Mengapa?" },
];

const kotakIngat = [
  "Dugaan harus diuji menggunakan bukti.",
  "Jika bukti tidak mendukung, dugaan perlu diperbaiki.",
  "GeoGebra 3D dan AR membantu memeriksa dugaan berdasarkan hasil pengamatan.",
  "Diskusi dengan kelompok lain memperkuat alasan matematika.",
];

export default async function Materi2Peta6Step4RevisiRefleksi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascot = await getPageImage("M2-P6-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">D</div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Revisi Hasil Kelompok</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Jika ada dugaan yang perlu diperbaiki, tuliskan hasil revisimu.
          </p>
        </div>
        <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-stretch">
          <div className="rounded-2xl border border-[#BFDBFE] bg-[#F5F9FF] p-4 flex flex-col gap-2">
            <label htmlFor="dugaan_revisi" className="text-sm font-bold text-[#1E3A8A]">Dugaan yang Direvisi</label>
            <textarea
              id="dugaan_revisi"
              name="answers.dugaan_direvisi"
              defaultValue={getValue("dugaan_direvisi")}
              rows={4}
              className="w-full flex-1 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="hidden sm:flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.6">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
          <div className="rounded-2xl border border-[#FECACA] bg-[#FFF5F5] p-4 flex flex-col gap-2">
            <label htmlFor="alasan_revisi" className="text-sm font-bold text-[#B91C1C]">Alasan Revisi</label>
            <textarea
              id="alasan_revisi"
              name="answers.alasan_revisi"
              defaultValue={getValue("alasan_revisi")}
              rows={4}
              className="w-full flex-1 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#DC2626] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">E</div>
              <h2 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h2>
            </div>
            <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut berdasarkan hasil verifikasimu.</p>
          </div>
          <EditablePageImage
            imageKey="M2-P6-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascot}
            alt="Siswi mengacungkan jari dengan ide lampu"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0"
          />
        </div>
        <ol className="m-0 p-0 list-none flex flex-col gap-4">
          {refleksi.map((r, i) => (
            <li key={r.key} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor={r.key} className="text-sm font-semibold text-[#374151]">{r.tanya}</label>
                <textarea
                  id={r.key}
                  name={`answers.${r.key}`}
                  defaultValue={getValue(r.key)}
                  required
                  rows={2}
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-3">
        <p className="m-0 text-base font-extrabold text-[#92400E]">Kotak Ingat</p>
        <ul className="m-0 p-0 list-none flex flex-col gap-2">
          {kotakIngat.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs leading-[1.5] text-[#92400E]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.8" className="mt-0.5 flex-shrink-0">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">F</div>
          <div className="flex flex-col gap-1">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Kotak Motivasi</p>
            <p className="m-0 text-xs leading-[1.6] text-[#1E40AF]">
              <span className="font-bold">Hebat!</span> Kamu telah menguji dan memeriksa kembali hasil
              pemikiranmu. Teruslah berpikir kritis dan terbuka terhadap bukti baru!
            </p>
          </div>
        </div>
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">G</div>
          <div className="flex flex-col gap-1">
            <p className="m-0 text-base font-extrabold text-[#5B21B6]">Menuju Tahap Berikutnya</p>
            <p className="m-0 text-xs leading-[1.6] text-[#5B21B6]">
              Setelah dugaan diverifikasi, saatnya menyusun kesimpulan umum tentang cara menentukan
              jaring-jaring bangun ruang yang benar. Siap menuju Tahap 6 – Ayo Generalisasi!
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
