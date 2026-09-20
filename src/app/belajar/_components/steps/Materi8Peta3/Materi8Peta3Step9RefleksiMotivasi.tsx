import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta3Step9RefleksiMotivasi({
  materi,
  peta,
  step = "9",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "ya";

  const gambar = await Promise.all(
    (["M8-P3-L9-1", "M8-P3-L9-2", "M8-P3-L9-3", "M8-P3-L9-4", "M8-P3-L9-5"] as const).map((k) => getPageImage(k)),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm text-[#4B5563]">Centang (✓) sesuai pengalamanmu selama berdiskusi bersama kelompok.</p>
          <label key="aktif" className="grid grid-cols-[auto_1fr_88px] sm:grid-cols-[auto_1fr_120px] items-center gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.refleksi_aktif" value="ya" defaultChecked={isChecked("refleksi_aktif")} className="accent-[#2563EB]" />
            Saya aktif menyampaikan pendapat.
            <EditablePageImage
              imageKey="M8-P3-L9-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambar[0]}
              alt="Siswa menyampaikan pendapat dengan jari menunjuk"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </label>
          <label key="mendengarkan" className="grid grid-cols-[auto_1fr_88px] sm:grid-cols-[auto_1fr_120px] items-center gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.refleksi_mendengarkan" value="ya" defaultChecked={isChecked("refleksi_mendengarkan")} className="accent-[#2563EB]" />
            Saya mendengarkan pendapat teman.
            <EditablePageImage
              imageKey="M8-P3-L9-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambar[1]}
              alt="Dua siswa saling berbicara dan mendengarkan"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </label>
          <label key="alasan" className="grid grid-cols-[auto_1fr_88px] sm:grid-cols-[auto_1fr_120px] items-center gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.refleksi_alasan" value="ya" defaultChecked={isChecked("refleksi_alasan")} className="accent-[#2563EB]" />
            Saya memberikan alasan berdasarkan hasil pengamatan.
            <EditablePageImage
              imageKey="M8-P3-L9-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={gambar[2]}
              alt="Siswa menunjukkan buku hasil pengamatan"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </label>
          <label key="siap" className="grid grid-cols-[auto_1fr_88px] sm:grid-cols-[auto_1fr_120px] items-center gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.refleksi_siap" value="ya" defaultChecked={isChecked("refleksi_siap")} className="accent-[#2563EB]" />
            Saya siap membuktikan dugaan menggunakan GeoGebra 3D dan Augmented Reality (AR).
            <EditablePageImage
              imageKey="M8-P3-L9-4"
              materi={materi}
              peta={peta}
              step={step}
              urutan="4"
              src={gambar[3]}
              alt="Siswa memegang kaca pembesar dan kartu dugaan"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </label>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-5 items-center">
          <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
          <div className="relative flex flex-col gap-1.5">
            <h2 className="m-0 text-lg font-extrabold text-white">Motivasi</h2>
            <p className="m-0 text-sm text-white/90 leading-[1.6]">
              Dugaanmu sudah sangat baik! Pada tahap berikutnya, kamu akan membuktikannya menggunakan GeoGebra 3D dan <span className="italic">Augmented Reality</span> (AR). Dengan teknologi ini, kamu bisa mengeksplorasi hubungan faktor skala dan perubahan volume secara visual.
            </p>
          </div>
          <EditablePageImage
            imageKey="M8-P3-L9-5"
            materi={materi}
            peta={peta}
            step={step}
            urutan="5"
            src={gambar[4]}
            alt="Siswa dengan gelembung ucapan: Ayo lanjut ke tahap berikutnya!"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
          />
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
