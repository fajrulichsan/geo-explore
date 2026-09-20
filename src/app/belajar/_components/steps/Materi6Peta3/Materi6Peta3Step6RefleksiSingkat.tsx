import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "refleksi_1", label: "Saya berani menyampaikan pendapat." },
  { key: "refleksi_2", label: "Saya mendengarkan pendapat teman." },
  { key: "refleksi_3", label: "Saya memberikan alasan terhadap dugaan." },
  { key: "refleksi_4", label: "Saya siap menguji dugaan kelompok melalui GeoGebra 3D dan AR." },
  { key: "refleksi_5", label: "Diskusi kelompok kami berjalan dengan baik dan efektif." },
];

export default async function Materi6Peta3Step6RefleksiSingkat({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getChecked = (key: string) => Boolean(answers[key]);

  const gambarMaskot = await getPageImage("M6-P3-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Mengapa volume dapat ditentukan tanpa menghitung kubus satuan satu per satu?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan Eksplorasi
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan tiga pertanyaan yang akan kalian jawab melalui eksplorasi menggunakan GeoGebra 3D dan AR.
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-start gap-2.5">
              <span className="mt-2 w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs flex-shrink-0">
                {n}
              </span>
              <textarea
                name={`answers.eksplorasi_${n}`}
                defaultValue={getValue(`eksplorasi_${n}`)}
                rows={2}
                placeholder="Ketik pertanyaanmu di sini..."
                required
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
              />
            </div>
          ))}
        </div>
      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
          <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Petunjuk:</span> Fokus pada cara menentukan volume, ukuran satu lapisan atau penampang sejajar alas, banyak lapisan/posisi, dan ukuran bangun.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Centang (✓) pernyataan yang sesuai dengan pengalamanmu selama kegiatan diskusi pada tahap ini.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-5 items-end">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3.5">
            {refleksi.map((r) => (
              <label key={r.key} className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.${r.key}`}
                  defaultChecked={getChecked(r.key)}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]"
                />
                <span className="text-sm text-[#374151] leading-[1.5]">{r.label}</span>
              </label>
            ))}
          </div>
          <EditablePageImage
          imageKey="M6-P3-L6-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarMaskot}
          alt="Dua siswa berdiskusi dengan lampu ide dan tanda centang"
          editable={editFoto}
          natural
          containerClassName="relative w-48 mx-auto lg:w-full min-h-24 overflow-hidden"
        />
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
        <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Setiap dugaan belum tentu benar.</span> Melalui GeoGebra 3D dan AR, kelompokmu akan mengumpulkan data dan menguji dugaan tersebut.</p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
