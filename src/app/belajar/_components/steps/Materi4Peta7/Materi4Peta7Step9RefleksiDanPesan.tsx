import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta7Step9RefleksiDanPesan({
  materi,
  peta,
  step = "9",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const refleksi = Array.isArray(answers.refleksi) ? (answers.refleksi as string[]) : typeof answers.refleksi === "string" ? [answers.refleksi] : [];
  const refleksiImage = await getPageImage("M4-P7-L9-1");
  const thumbsImage = await getPageImage("M4-P7-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <div className="bg-[#F8FAFF] border border-[#DBE7FF] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
          <p className="m-0 text-xs font-semibold text-[#2563EB]">Berilah tanda centang (✓) pada pernyataan yang sesuai dengan pengalamanmu pada Tahap 6.</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer hover:border-[#93C5FD] transition-colors">
              <input type="checkbox" name="answers.refleksi" value="Saya dapat menjelaskan alasan mengapa rumus luas permukaan limas benar." defaultChecked={refleksi.includes("Saya dapat menjelaskan alasan mengapa rumus luas permukaan limas benar.")} className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0" />
              <span className="text-sm text-[#374151] leading-[1.5]">Saya dapat menjelaskan alasan mengapa rumus luas permukaan limas benar.</span>
            </label>
            <label className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer hover:border-[#93C5FD] transition-colors">
              <input type="checkbox" name="answers.refleksi" value="Saya dapat menulis kesimpulan umum kelompok dengan jelas." defaultChecked={refleksi.includes("Saya dapat menulis kesimpulan umum kelompok dengan jelas.")} className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0" />
              <span className="text-sm text-[#374151] leading-[1.5]">Saya dapat menulis kesimpulan umum kelompok dengan jelas.</span>
            </label>
            <label className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer hover:border-[#93C5FD] transition-colors">
              <input type="checkbox" name="answers.refleksi" value="Saya dapat membandingkan kesimpulan kelompok dengan kelompok lain." defaultChecked={refleksi.includes("Saya dapat membandingkan kesimpulan kelompok dengan kelompok lain.")} className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0" />
              <span className="text-sm text-[#374151] leading-[1.5]">Saya dapat membandingkan kesimpulan kelompok dengan kelompok lain.</span>
            </label>
            <label className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer hover:border-[#93C5FD] transition-colors">
              <input type="checkbox" name="answers.refleksi" value="Saya yakin dengan kesimpulan yang telah kami buat." defaultChecked={refleksi.includes("Saya yakin dengan kesimpulan yang telah kami buat.")} className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0" />
              <span className="text-sm text-[#374151] leading-[1.5]">Saya yakin dengan kesimpulan yang telah kami buat.</span>
            </label>
            <label className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer hover:border-[#93C5FD] transition-colors">
              <input type="checkbox" name="answers.refleksi" value="Saya berkontribusi aktif dalam proses menyimpulkan." defaultChecked={refleksi.includes("Saya berkontribusi aktif dalam proses menyimpulkan.")} className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0" />
              <span className="text-sm text-[#374151] leading-[1.5]">Saya berkontribusi aktif dalam proses menyimpulkan.</span>
            </label>
          </div>
          <EditablePageImage
            imageKey="M4-P7-L9-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={refleksiImage}
            alt="Tiga siswa berpikir dengan gelembung centang dan lampu ide"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[5/4] max-w-xs mx-auto"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            K
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
            Pesan Penting
          </div>
        </div>
          <div className="flex items-center gap-4 bg-white border border-[#F5E3A0] rounded-xl p-5">
            <div className="flex flex-col gap-3">
              <p className="m-0 text-lg font-extrabold text-[#111827] leading-[1.5]">
                “Luas permukaan limas bukan sekadar rumus yang dihafal, tetapi jumlah luas seluruh sisi yang membatasi bangun.”
              </p>
              <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
                Rumus membantu kita menghitung dengan efektif, tetapi pemahaman adalah kunci!
              </p>
            </div>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0 hidden sm:block"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z" /></svg>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0">
          <path d="M8 4h8v6a4 4 0 01-8 0V4zM8 6H5a2 2 0 002 4h1M16 6h3a2 2 0 01-2 4h-1M12 14v4M8 21h8M10 18h4" />
        </svg>
        <div className="flex-1">
          <p className="m-0 text-base font-extrabold text-[#92400E]">Hebat!</p>
          <p className="m-0 text-xs text-[#92400E] leading-[1.6]">Kamu telah berhasil menemukan, memahami, dan menyimpulkan konsep luas permukaan limas melalui proses yang sistematis. Teruslah belajar dan gunakan pengetahuan ini pada berbagai situasi!</p>
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
          href={`/belajar/${materi}/${peta}/8`}
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
