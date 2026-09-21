import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { key: "M4-P1-L2-1" as const, urutan: "1", label: "Model limas (segiempat)", alt: "Model limas segiempat berwarna cokelat" },
  { key: "M4-P1-L2-2" as const, urutan: "2", label: "Limas mulai terbuka", alt: "Limas mulai terbuka menjadi sisi-sisi tegak" },
  { key: "M4-P1-L2-3" as const, urutan: "3", label: "Jaring-jaring limas (alas + sisi-sisi tegak)", alt: "Jaring-jaring limas segiempat" },
  { key: "M4-P1-L2-4" as const, urutan: "4", label: "Hitung luas setiap sisi", alt: "Jaring-jaring limas dengan label alas persegi dan sisi tegak 1 sampai 4" },
];

const aktivitasGeoGebra = [
  "Membuka limas menjadi jaring-jaring.",
  "Memutar model 3D.",
  "Mengamati bentuk alas.",
  "Mengamati bentuk dan ukuran sisi tegak.",
  "Mengukur ukuran sisi.",
];

const aktivitasAR = [
  "Mengamati limas secara virtual.",
  "Memilih setiap sisi.",
  "Melihat hubungan sisi alas dan sisi tegak.",
  "Mengamati proses pelipatan jaring-jaring.",
];

export default async function Materi4Peta1Step2AlurTeknologi({ materi, peta, step = "2", editFoto }: StepComponentProps) {
  const [gambarGeoGebra, gambarAR, ...gambarAlur] = await Promise.all([
    getPageImage("M4-P1-L2-5"),
    getPageImage("M4-P1-L2-6"),
    ...alur.map((a) => getPageImage(a.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 4
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M12 3L3 20h18zM12 3v17" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Luas Permukaan Limas</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bagaimana Luas Permukaan Limas Diperoleh?
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {alur.map((a, i) => (
              <div key={a.key} className="flex flex-col items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs self-start">
                  {i + 1}
                </div>
                <EditablePageImage
                  imageKey={a.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={a.urutan}
                  src={gambarAlur[i]}
                  alt={a.alt}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full aspect-square rounded-xl border border-[#BFDBFE] overflow-hidden"
                />
                <p className="m-0 text-center text-xs font-semibold text-[#374151] leading-[1.4]">{a.label}</p>
              </div>
            ))}
            <div className="col-span-2 lg:col-span-1 flex flex-col items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs self-start">
                5
              </div>
              <div className="w-full aspect-[2/1] lg:aspect-square rounded-xl border border-[#BFDBFE] flex flex-col items-center justify-center gap-2">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="1.8">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M15 7H9l4 5-4 5h6" />
                </svg>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.4">
                  <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z" />
                </svg>
              </div>
              <p className="m-0 text-center text-xs font-semibold text-[#374151] leading-[1.4]">
                Jumlahkan luas semua sisi = Luas Permukaan Limas
              </p>
            </div>
          </div>

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.6" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Kita tidak akan langsung menghafal rumus. Melalui kegiatan pada submateri ini, kamu akan
              menemukan sendiri bagaimana luas permukaan limas diperoleh.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan Teknologi
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 items-stretch">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M8 20h8" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#1D4ED8]">GeoGebra 3D</span>
            </div>
            <EditablePageImage
              imageKey="M4-P1-L2-5"
              materi={materi}
              peta={peta}
              step={step}
              urutan="5"
              src={gambarGeoGebra}
              alt="Tangkapan layar limas dan jaring-jaringnya di GeoGebra 3D"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-[14px] overflow-hidden border border-[#E5E7EB]"
            />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#1D4ED8] bg-[#DBEAFE] rounded-full py-1 px-3 w-fit">Aktivitas</span>
              {aktivitasGeoGebra.map((a) => (
                <div key={a} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="3" className="mt-1 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#374151] leading-[1.5]">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#15803D] flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#15803D]">Augmented Reality (AR)</span>
            </div>
            <EditablePageImage
              imageKey="M4-P1-L2-6"
              materi={materi}
              peta={peta}
              step={step}
              urutan="6"
              src={gambarAR}
              alt="Tangan memegang ponsel yang menampilkan limas AR"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[260px] mx-auto rounded-[14px] overflow-hidden"
            />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#15803D] bg-[#DCFCE7] rounded-full py-1 px-3 w-fit">Aktivitas</span>
              {aktivitasAR.map((a) => (
                <div key={a} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-1 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#374151] leading-[1.5]">{a}</span>
                </div>
              ))}
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
