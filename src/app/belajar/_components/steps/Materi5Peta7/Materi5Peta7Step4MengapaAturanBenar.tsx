import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi5Peta7Step4MengapaAturanBenar({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const kubusImage = await getPageImage("M5-P7-L4-1");
  const jaringImage = await getPageImage("M5-P7-L4-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Temukan Konsep Hubungan Skala dan Luas
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Mengapa Aturan Itu Benar?</h2>
          </div>
          <p className="m-0 -mt-2 text-sm text-[#4B5563]">
            Jelaskan alasan matematis mengapa luas permukaan berubah sesuai hubungan yang telah kamu
            temukan.
          </p>
          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-xl p-4 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#1D4ED8]">Petunjuk:</p>
            <ul className="m-0 pl-5 text-xs leading-[1.7] text-[#374151] list-disc">
              <li>Perhatikan perubahan pada bangun ruang dan jaring-jaringnya.</li>
              <li>Gunakan konsep bahwa luas permukaan terdiri dari 6 sisi.</li>
              <li>Tuliskan alasan dengan kalimatmu sendiri.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_aturan_benar" className="text-sm font-semibold text-[#111827]">
              Alasanku:
            </label>
            <textarea
              id="alasan_aturan_benar"
              name="answers.alasan_aturan_benar"
              defaultValue={getValue("alasan_aturan_benar")}
              rows={7}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 justify-center">
          <div className="relative w-full">
            <EditablePageImage
              imageKey="M5-P7-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={kubusImage}
              alt="Kubus awal diskalakan dengan faktor k menjadi kubus hasil penskalaan"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
          </div>
          <div className="relative w-full">
            <EditablePageImage
              imageKey="M5-P7-L4-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={jaringImage}
              alt="Jaring-jaring kubus awal diskalakan dengan faktor k"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
          </div>
          <p className="m-0 text-sm font-semibold leading-[1.6] text-[#1D4ED8]">
            Setiap persegi pada jaring-jaring mengalami penskalaan dengan faktor{" "}
            <span className="italic">k</span>, sehingga luas setiap persegi menjadi{" "}
            <span className="italic">k</span>&sup2; kali.
          </p>
          <div className="flex items-center gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-3">
            <span className="flex-1 text-center bg-white border border-[#93C5FD] rounded-xl py-2 text-sm font-semibold text-[#1D4ED8]">
              Luas awal = L
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" className="flex-shrink-0">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
            <span className="flex-1 text-center bg-white border border-[#93C5FD] rounded-xl py-2 text-sm font-semibold text-[#1D4ED8]">
              Luas baru = <span className="italic">k</span>&sup2; × L
            </span>
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
