import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta7Step4TemuanUtama({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const thumbsImage = await getPageImage("M4-P7-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

<div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Temuan Utama
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan kegiatan yang telah kamu lakukan, tuliskan temuan utama tentang cara menentukan luas permukaan limas.
        </p>
        <textarea
            name="answers.temuan_utama"
            defaultValue={getValue("temuan_utama")}
            rows={5}
            required
            placeholder="Tuliskan jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z" /></svg>
            <p className="m-0 text-base font-extrabold text-[#D97706]">Ingat!</p>
          </div>
          <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
            <li className="flex items-start gap-2 text-xs text-[#374151]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" /></svg>
              Luas alas dihitung satu kali.
            </li>
            <li className="flex items-start gap-2 text-xs text-[#374151]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" /></svg>
              Jumlahkan luas sisi tegak yang membatasi limas.
            </li>
            <li className="flex items-start gap-2 text-xs text-[#374151]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" /></svg>
              Tidak ada sisi yang terlewat.
            </li>
            <li className="flex items-start gap-2 text-xs text-[#374151]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" /></svg>
              Gunakan satuan luas yang sama (misal cm²).
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0">
          <path d="M8 4h8v6a4 4 0 01-8 0V4zM8 6H5a2 2 0 002 4h1M16 6h3a2 2 0 01-2 4h-1M12 14v4M8 21h8M10 18h4" />
        </svg>
        <div className="flex-1">
          <p className="m-0 text-base font-extrabold text-[#92400E]">Hebat!</p>
          <p className="m-0 text-xs text-[#92400E] leading-[1.6]">Kamu telah melalui seluruh tahapan dengan sangat baik! Kesimpulan yang kamu susun hari ini adalah hasil dari usaha, kerja sama, dan pemikiranmu sendiri.</p>
        </div>
        <EditablePageImage
            imageKey="M4-P7-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={thumbsImage}
            alt="Dua siswa memberi jempol tanda semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-16 sm:w-40 sm:h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#EEF4FF]"
          />
        <p className="m-0 hidden sm:block bg-[#EFF4FF] text-[#2563EB] rounded-xl px-4 py-3 text-xs font-semibold leading-[1.5] max-w-[190px]">
          Teruslah berpikir kritis dan yakin pada kemampuanmu!
        </p>
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
