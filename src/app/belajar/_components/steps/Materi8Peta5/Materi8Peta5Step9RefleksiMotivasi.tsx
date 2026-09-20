import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta5Step9RefleksiMotivasi({
  materi,
  peta,
  step = "9",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambar = await Promise.all(
    (["M8-P5-L9-1", "M8-P5-L9-2"] as const).map((k) => getPageImage(k)),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengolah Informasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>

        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-5 items-center">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang (✓) pernyataan yang sesuai dengan pengalaman kegiatan ini.</p>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_pola" value="ya" defaultChecked={getValue("refleksi_pola") === "ya"} className="mt-0.5 accent-[#2563EB]" />
              Saya dapat menemukan pola hubungan faktor skala dan perubahan volume.
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_dugaan" value="ya" defaultChecked={getValue("refleksi_dugaan") === "ya"} className="mt-0.5 accent-[#2563EB]" />
              Saya dapat menggunakan data untuk membuat dugaan matematis.
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_percaya" value="ya" defaultChecked={getValue("refleksi_percaya") === "ya"} className="mt-0.5 accent-[#2563EB]" />
              Saya lebih percaya diri menggunakan data untuk menemukan dan menjelaskan pola.
            </label>
          </div>
          <EditablePageImage
            imageKey="M8-P5-L9-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Siswi mengepalkan tangan dengan gelembung: Langkah kecil hari ini membawamu ke pemahaman yang lebih besar!"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[220px] mx-auto overflow-hidden"
          />
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-5 items-center">
          <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
          <div className="relative flex flex-col gap-1.5">
            <h2 className="m-0 text-lg font-extrabold text-white">Motivasi</h2>
            <p className="m-0 text-sm text-white/90 leading-[1.6]">
              Pola yang kamu temukan adalah hasil pemikiran dan kerja sama kelompokmu. Teruslah berpikir kritis dan percaya diri untuk menjawab tantangan berikutnya!
            </p>
          </div>
          <EditablePageImage
            imageKey="M8-P5-L9-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar[1]}
            alt="Siswa mengepalkan tangan dengan gelembung: Hebat! Kamu sudah mampu mengolah informasi dengan baik!"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
          />
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-1.5">
          <h3 className="m-0 text-sm font-extrabold text-[#92400E]">Ingat!</h3>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">Hubungan matematika yang kamu tuliskan masih berupa dugaan sementara. Kita akan memverifikasinya pada Tahap 5. Tetap gunakan data dan alasan yang kuat!</p>
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-1.5">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Catatan:</h3>
          <p className="m-0 text-sm text-[#1E40AF] leading-[1.6]">Pola dan strategi yang kamu susun akan menjadi dasar penting untuk melakukan pembuktian pada Tahap 5. Berpikir kritis, bekerja sama, dan percaya diri akan membantumu menemukan hubungan matematika yang lebih kuat!</p>
          <p className="m-0 text-xs font-bold text-[#2563EB]">Data yang baik menghasilkan dugaan yang lebih kuat!</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/8`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
