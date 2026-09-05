import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "aktif_menyampaikan", label: "Saya aktif menyampaikan pendapat." },
  { key: "mendengarkan_pendapat", label: "Saya mendengarkan pendapat teman." },
  { key: "memberi_alasan", label: "Saya memberikan alasan berdasarkan hasil pengamatan." },
  { key: "siap_membuktikan", label: "Saya siap membuktikan dugaan melalui eksplorasi." },
];

export default async function Materi5Peta3Step4HipotesisRefleksi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const laptopImage = await getPageImage("M5-P3-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <h2 className="m-0 text-base font-bold text-[#111827]">Hipotesis Kelompok</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Setelah membandingkan dugaan dan alasan antarkelompok, susun hipotesis kelompokmu.
        </p>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3 px-4">
          <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.6]">
            Hipotesis adalah dugaan sementara yang akan diuji pada tahap berikutnya.
          </p>
        </div>

        <label htmlFor="hipotesis_dugaan" className="text-sm font-semibold text-[#374151]">
          Berdasarkan hasil diskusi, kami menduga bahwa
        </label>
        <textarea
          id="hipotesis_dugaan"
          name="answers.hipotesis_dugaan"
          defaultValue={getValue("hipotesis_dugaan")}
          rows={2}
          required
          placeholder="Tuliskan hipotesis kelompokmu..."
          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
        <label htmlFor="hipotesis_alasan" className="text-sm font-semibold text-[#374151]">
          karena
        </label>
        <textarea
          id="hipotesis_alasan"
          name="answers.hipotesis_alasan"
          defaultValue={getValue("hipotesis_alasan")}
          rows={2}
          required
          placeholder="Tuliskan alasannya..."
          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
        <p className="m-0 flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
          Tips: Pastikan hipotesismu didukung oleh hasil pengamatan dan alasan yang logis.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Refleksi Singkat
          </div>
          <p className="m-0 text-xs text-[#6B7280]">Centang sesuai pengalamanmu selama berdiskusi bersama kelompok.</p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          {refleksi.map((r) => (
            <label
              key={r.key}
              className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#16A34A] has-[:checked]:bg-[#EFFDF4] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.refleksi_${r.key}`}
                value="ya"
                defaultChecked={getValue(`refleksi_${r.key}`) === "ya"}
                required
                data-require-group={`refleksi_${r.key}`}
                className="mt-0.5 w-4 h-4 accent-[#16A34A] flex-shrink-0"
              />
              <span className="text-sm text-[#374151] leading-[1.5]">{r.label}</span>
            </label>
          ))}
          <p className="m-0 flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Tips: Refleksi membantumu menjadi anggota kelompok yang lebih baik dan berdiskusi
            secara efektif.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FEF2F2] border border-[#FBCACA] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#DC2626" stroke="none" className="flex-shrink-0 mt-0.5">
            <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.3 5.8 21.1l1.6-7L2 9.3l7.1-.7z" />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#DC2626]">Motivasi</p>
            <p className="m-0 text-xs font-semibold text-[#991B1B] leading-[1.5]">
              Dugaan yang baik didasarkan pada data dan alasan yang logis. Melalui eksplorasi, kita
              akan membuktikan apakah dugaan kita benar atau perlu diperbaiki.{" "}
              <span className="font-bold">Tetap semangat mengeksplorasi!</span>
            </p>
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M5-P3-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={laptopImage}
            alt="Laptop menampilkan kubus 3D untuk pembuktian dugaan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
            <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
              Belum tentu dugaanmu benar. Pada tahap berikutnya kalian akan membuktikannya
              menggunakan GeoGebra 3D dan Augmented Reality.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 3
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
