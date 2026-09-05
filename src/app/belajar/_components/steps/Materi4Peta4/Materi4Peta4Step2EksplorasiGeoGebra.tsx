import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const langkahKegiatan = [
  "Pindai QR Code GeoGebra 3D.",
  "Pilih model limas segiempat.",
  "Putar model dari berbagai arah.",
  "Buka model menjadi jaring-jaring.",
  "Amati bentuk alas dan sisi-sisi tegaknya.",
  "Amati ukuran yang diperlukan untuk menentukan luas alas dan setiap sisi tegak.",
  "Catat hasil pengamatanmu.",
];

const transisi = ["1. Limas segiempat", "2. Sedikit terbuka", "3. Lebih terbuka", "4. Jaring-jaring limas"];

const yangDiamati = [
  "Bentuk alas.",
  "Bentuk setiap sisi tegak.",
  "Banyak sisi tegak.",
  "Ukuran alas.",
  "Ukuran yang diperlukan pada sisi tegak.",
  "Luas alas.",
  "Luas alas dan tiap sisi tegak.",
];

export default async function Materi4Peta4Step2EksplorasiGeoGebra({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarTransisi, gambarQr] = await Promise.all([
    getPageImage("M4-P4-L2-1"),
    getPageImage("qr-geogebra"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Menggunakan GeoGebra 3D
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#111827]">Langkah Kegiatan</span>
              <div className="flex flex-col gap-2.5">
                {langkahKegiatan.map((l, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#1D4ED8]">Transisi Limas &rarr; Jaring-Jaring</span>
              <EditablePageImage
                imageKey="M4-P4-L2-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambarTransisi}
                alt="Diagram transisi limas menjadi jaring-jaring pada GeoGebra 3D"
                editable={editFoto}
                containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-white"
              />
              <p className="m-0 text-center text-[11px] text-[#6B7280] leading-[1.4]">
                {transisi.join(" → ")}
              </p>

              <div className="flex flex-col items-center gap-2 pt-2 border-t border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#2563EB]">Scan GeoGebra 3D</span>
                <EditablePageImage
                  imageKey="qr-geogebra"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="2"
                  src={gambarQr}
                  alt="QR code menuju model GeoGebra 3D limas"
                  editable={editFoto}
                  imageClassName="object-contain p-2"
                  containerClassName="relative w-28 h-28 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#111827] mb-2 block">Yang Diamati (GeoGebra 3D)</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {yangDiamati.map((y) => (
                <div key={y} className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                  </svg>
                  <span className="text-sm text-[#374151]">{y}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">Tips!</p>
              <ul className="m-0 pl-4 flex flex-col gap-1 text-sm font-semibold text-[#1D4ED8] leading-[1.5] list-disc">
                <li>Gunakan fitur putar (drag) untuk melihat setiap sisi dengan jelas.</li>
                <li>Gunakan fitur jaring-jaring untuk memastikan seluruh sisi telah terbuka.</li>
                <li>Perhatikan perbedaan antara tinggi limas dan tinggi sisi tegak (segitiga).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
