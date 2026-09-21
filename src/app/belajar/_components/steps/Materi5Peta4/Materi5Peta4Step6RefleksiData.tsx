import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "skala_terbesar", text: "Pada faktor skala berapa luas permukaan yang kamu peroleh paling besar?" },
  { key: "skala_terkecil", text: "Pada faktor skala berapa luas permukaan yang kamu peroleh paling kecil?" },
];

const ingat = [
  "Kumpulkan data sebanyak mungkin sebelum mencari pola.",
  "Data yang lengkap akan membantumu menemukan hubungan yang benar pada tahap berikutnya.",
  "Jangan terburu-buru membuat rumus.",
];

const mediaGeoGebra = [
  "Mengubah faktor skala secara dinamis.",
  "Mengukur rusuk/ukuran bangun.",
  "Menghitung luas permukaan.",
];

const mediaAr = [
  "Mengamati bangun ruang dari berbagai sudut.",
  "Membandingkan ukuran sebelum dan sesudah diperbesar/diperkecil.",
  "Memvisualisasikan perubahan skala secara nyata.",
];

function CheckItem({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start gap-2 text-xs text-[#374151] leading-[1.5]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      {text}
    </li>
  );
}

export default async function Materi5Peta4Step6RefleksiData({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [gambarGeoGebra, gambarAr] = await Promise.all([
    getPageImage("M5-P4-L2-2"),
    getPageImage("M5-P4-L3-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#2563EB]">Refleksi Data</span>
            <span className="text-xs text-[#6B7280]">Cek kembali data yang telah kamu kumpulkan.</span>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <span className="text-sm font-bold text-[#111827]">Menurut kelompokmu:</span>
          {refleksi.map((r) => (
            <label key={r.key} className="flex flex-col gap-2">
              <span className="text-sm text-[#374151] leading-[1.5]">{r.text}</span>
              <textarea
                name={`answers.${r.key}`}
                defaultValue={getValue(r.key)}
                required
                rows={2}
                placeholder="Tuliskan jawabanmu di sini..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
              />
            </label>
          ))}

          <div className="bg-[#FEF9E7] rounded-xl py-3.5 px-[18px] flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
            <ul className="m-0 pl-4 flex flex-col gap-1 text-xs text-[#78350F] leading-[1.5] list-disc">
              {ingat.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF4FF] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
        <span className="w-fit bg-[#1E3A8A] text-white rounded-full py-1 px-4 text-xs font-bold">Media Pendukung</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-3">
            <span className="text-sm font-bold text-[#1D4ED8]">GeoGebra 3D</span>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {mediaGeoGebra.map((t) => (
                <CheckItem key={t} text={t} color="#2563EB" />
              ))}
            </ul>
            <EditablePageImage
              imageKey="M5-P4-L2-2"
              materi={materi}
              peta={peta}
              step="6"
              urutan="1"
              src={gambarGeoGebra}
              alt="Model kubus pada GeoGebra 3D dengan slider faktor skala k = 2"
              natural
              containerClassName="relative w-full rounded-xl overflow-hidden bg-white"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-3">
            <span className="text-sm font-bold text-[#15803D]">Augmented Reality (AR)</span>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {mediaAr.map((t) => (
                <CheckItem key={t} text={t} color="#16A34A" />
              ))}
            </ul>
            <EditablePageImage
              imageKey="M5-P4-L3-2"
              materi={materi}
              peta={peta}
              step="6"
              urutan="2"
              src={gambarAr}
              alt="Tablet menampilkan kubus biru dalam Augmented Reality"
              natural
              containerClassName="relative w-full max-w-[280px] mx-auto rounded-xl overflow-hidden bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
