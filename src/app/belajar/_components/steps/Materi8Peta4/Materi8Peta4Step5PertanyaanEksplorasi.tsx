import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const PERTANYAAN = [
  { key: "pertanyaan_1", text: "Apa yang terjadi pada volume bangun ruang ketika faktor skala (k) diubah?" },
  { key: "pertanyaan_2", text: "Bagaimana hubungan antara faktor skala (k) dengan perubahan volume bangun ruang?" },
  {
    key: "pertanyaan_3",
    text: "Apakah kubus, balok, prisma segitiga, dan limas segiempat memiliki pola perubahan volume yang sama? Jelaskan berdasarkan data yang kamu peroleh.",
  },
  {
    key: "pertanyaan_4",
    text: "Temukan pola dan tuliskan dengan matematis sementara: Bagaimana hubungan antara faktor skala (k) dan perubahan volume?",
  },
] as const;

export default async function Materi8Peta4Step5PertanyaanEksplorasi({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const gambar1 = await getPageImage("M8-P4-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Bereksplorasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan Eksplorasi
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Jawablah berdasarkan hasil pengamatan dan data pada tabel yang telah kamu isi.
        </p>

        <ol className="m-0 p-0 list-none flex flex-col gap-4">
          {PERTANYAAN.map((q, i) => (
            <li key={q.key} className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor={q.key} className="text-sm font-semibold text-[#1E3A8A] leading-[1.55]">
                  {q.text}
                </label>
                <textarea
                  id={q.key}
                  name={`answers.${q.key}`}
                  defaultValue={getValue(q.key)}
                  rows={3}
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] leading-[1.6] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />
              </div>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_240px] gap-4 items-center bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5">
          <div className="flex flex-col gap-1.5">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Ayo Pikirkan!</p>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Apakah perubahan volume selalu mengikuti pola tertentu ketika faktor skala berubah?
            </p>
          </div>
          <EditablePageImage
            imageKey="M8-P4-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar1}
            alt="Siswa berpikir dengan gelembung ucapan: Diskusikan dengan kelompokmu!"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-2 rounded-[20px] border border-[#DBEAFE] bg-white p-4">
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Media Pendukung: GeoGebra 3D</p>
            <ul className="m-0 pl-5 list-disc text-sm text-[#374151] leading-[1.6]">
              <li>Mengubah faktor skala</li>
              <li>Mengukur ukuran bangun</li>
              <li>Menghitung volume</li>
              <li>Membandingkan hasil pengamatan</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 rounded-[20px] border border-[#BBF7D0] bg-white p-4">
            <p className="m-0 text-sm font-bold text-[#166534]">Media Pendukung: Augmented Reality (AR)</p>
            <ul className="m-0 pl-5 list-disc text-sm text-[#374151] leading-[1.6]">
              <li>Mengamati bangun ruang dalam bentuk nyata</li>
              <li>Membandingkan ukuran</li>
              <li>Memvisualisasikan perubahan volume</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
