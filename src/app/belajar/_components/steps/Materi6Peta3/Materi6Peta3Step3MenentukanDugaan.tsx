import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";


export default async function Materi6Peta3Step3MenentukanDugaan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarPilih = await getPageImage("M6-P3-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
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
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Menentukan Dugaan yang Akan Diuji
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-end">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <span className="text-sm font-bold text-[#111827]">Apakah semua anggota kelompok memiliki dugaan yang sama?</span>
              <div className="flex flex-wrap gap-3">
                {["Ya", "Tidak, ada perbedaan"].map((opsi) => (
                  <label key={opsi} className="cursor-pointer">
                    <input
                      type="radio"
                      name="answers.dugaan_sama"
                      value={opsi}
                      defaultChecked={getValue("dugaan_sama") === opsi}
                      required
                      className="peer sr-only"
                    />
                    <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-2 text-sm font-semibold text-[#374151] peer-checked:bg-[#2563EB] peer-checked:text-white peer-checked:border-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#93C5FD]">
                      {opsi}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#111827] leading-[1.5]">Jika berbeda, apa yang menyebabkan perbedaan tersebut?</label>
              <textarea
                  name={`answers.penyebab_beda`}
                  defaultValue={getValue("penyebab_beda")}
                  rows={3}
                  placeholder="Jika tidak ada perbedaan, tulis tanda strip (-)"
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#111827] leading-[1.5]">
                Dari berbagai dugaan yang muncul, dugaan mana yang akan dipilih kelompokmu untuk diuji pada Tahap 3
                melalui eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR)? Jelaskan alasan pemilihannya.
              </label>
              <textarea
                  name={`answers.dugaan_dipilih`}
                  defaultValue={getValue("dugaan_dipilih")}
                  rows={4}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
            </div>
          </div>
          <EditablePageImage
          imageKey="M6-P3-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarPilih}
          alt="Tiga siswa memilih dugaan yang akan diuji"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
        <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Perbedaan pendapat adalah hal yang wajar dalam matematika.</span> Yang terpenting, setiap dugaan harus didukung oleh alasan yang logis dan bukti dari hasil pengamatan.</p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
