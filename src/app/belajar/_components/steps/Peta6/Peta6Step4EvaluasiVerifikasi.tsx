import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  {
    label: "Apakah semua hasil klasifikasimu sudah didukung oleh data?",
    rows: 3,
    color: "#16A34A",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
  },
  {
    label: "Bagian mana dari dugaanmu yang masih memerlukan perbaikan?",
    rows: 3,
    color: "#2563EB",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </>
    ),
  },
  {
    label: "Mengapa bukti sangat penting sebelum membuat kesimpulan?",
    rows: 3,
    color: "#D97706",
    icon: (
      <>
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
      </>
    ),
  },
];

const ingatHal2 = [
  "Merevisi jawaban bukan berarti jawabanmu salah.",
  "Revisi menunjukkan bahwa kamu menggunakan bukti dan alasan matematis yang lebih kuat.",
  "Pada tahap ini kita belum membuat kesimpulan akhir.",
];

export default async function Peta6Step4EvaluasiVerifikasi({ materi, peta, step = "4", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M1-P6-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
            SUBMATERI 1
          </div>
          <div className="inline-flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border border-[#DBE5FB] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Tahap 5 dari 6 &ndash; Discovery Learning
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
            className="flex-shrink-0"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        <div className="md:col-span-8 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex gap-4 items-start">
          <div className="bg-[#D97706] text-white rounded-full p-2 flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
          </div>
          <div>
            <h3 className="m-0 mb-1.5 text-sm font-bold text-[#111827]">Ingat!</h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {ingatHal2.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-1">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-4 bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center">
          <EditablePageImage
            imageKey="M1-P6-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Tiga maskot siswa berdiskusi: apakah klasifikasi kita benar-benar didukung oleh data?"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-[14px] overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Evaluasi Proses Verifikasi
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Renungkan proses verifikasimu.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {pertanyaan.map((p, i) => (
          <div
            key={p.label}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: p.color }}
              >
                {i + 1}
              </div>
              <div className="flex-1 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2" className="flex-shrink-0">
                  {p.icon}
                </svg>
                <label className="text-sm font-bold text-[#111827]">{p.label}</label>
              </div>
            </div>
            <textarea
              rows={p.rows}
              name={`answers.refleksi_${i}`}
              defaultValue={getValue(`refleksi_${i}`)}
              placeholder="Ketikkan jawabanmu di sini..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
