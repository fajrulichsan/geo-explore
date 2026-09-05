import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkahKegiatan = [
  "Amati model bangun ruang melalui AR.",
  "Gerakkan perangkat untuk mengamati model bangun ruang dari berbagai sudut.",
  "Catat hasil pengamatan untuk setiap faktor skala.",
];

const yangDiamati = [
  "Bentuk bangun.",
  "Jumlah sisi.",
  "Ukuran bangun.",
  "Luas satu sisi.",
  "Luas permukaan.",
];

export default async function Materi5Peta4Step3EksplorasiAR({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [gambarAR, gambarQr] = await Promise.all([getPageImage("M5-P4-L3-1"), getPageImage("qr-ar")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Eksplorasi Menggunakan Augmented Reality (AR)
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-start">
            <EditablePageImage
              imageKey="M5-P4-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarAR}
              alt="Tampilan kamera AR menunjukkan kubus biru yang dapat diubah faktor skalanya"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111827]"
            />

            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-3">
              <span className="text-xs font-bold text-[#16A34A]">Scan QR Code AR</span>
              <EditablePageImage
                imageKey="qr-ar"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={gambarQr}
                alt="QR code menuju model AR bangun ruang"
                editable={editFoto}
                imageClassName="object-contain p-2"
                containerClassName="relative w-28 h-28 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
              />
              <p className="m-0 text-center text-xs text-[#6B7280]">
                Scan untuk menampilkan model bangun ruang secara nyata.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#111827] mb-2 block">Langkah Kegiatan</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {langkahKegiatan.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#111827] mb-2 block">Perhatikan Perubahan Pada</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {yangDiamati.map((y) => (
                <div key={y} className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                  </svg>
                  <span className="text-sm text-[#374151]">{y}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex flex-col gap-2">
            <label htmlFor="catatan_ar" className="text-sm font-bold text-[#2563EB]">
              Catat data hasil pengamatan AR pada catatan berikut.
            </label>
            <textarea
              id="catatan_ar"
              name="answers.catatan_ar"
              defaultValue={getValue("catatan_ar")}
              rows={4}
              required
              placeholder="Tuliskan data hasil pengamatan AR untuk setiap faktor skala..."
              className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="bg-[#FEF9E7] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 16.9 6.2 20l1.1-6.5-4.8-4.6L9.1 8z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#92400E] leading-[1.5]">
              GeoGebra 3D dan AR membantumu mengumpulkan informasi dengan lebih baik. Kumpulkan
              data sebanyak mungkin sebelum mencari pola pada tahap berikutnya.
            </p>
          </div>
        </div>
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
