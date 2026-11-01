import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta10Step5StrategiPenyelesaian({
  materi,
  peta,
  step = "5",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all(
    (["M8-P10-L5-1", "M8-P10-L5-2", "M8-P10-L5-3", "M8-P10-L5-4"] as const).map((k) => getPageImage(k)),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 2z M20 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Rangkuman
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Strategi Penyelesaian
          </div>
        </div>
        <div className="rounded-[20px] border-2 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-4 items-center" style={{ backgroundColor: "#EFF4FF", borderColor: "#93C5FD" }}>
          <div className="flex flex-col gap-1.5">
          <p className="m-0 text-base font-extrabold" style={{ color: "#1E3A8A" }}>Strategi 1</p>
          <p className="m-0 text-sm font-bold text-[#111827]">Gunakan hubungan langsung <span className="italic">k</span><sup>3</sup></p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">Jika faktor skala <span className="italic">k</span> diketahui dan bangun ruang sebangun, maka <strong>V<sub>hasil skala</sub> = <span className="italic">k</span><sup>3</sup> × V<sub>awal</sub></strong>, karena setiap ukuran panjang (rusuk/sisi yang bersesuaian) berubah sebesar faktor skala <span className="italic">k</span>.</p>
          </div>
          <EditablePageImage
            imageKey="M8-P10-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Ilustrasi strategi 1"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[170px] mx-auto overflow-hidden"
          />
        </div>
        <div className="rounded-[20px] border-2 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-4 items-center" style={{ backgroundColor: "#F0FDF4", borderColor: "#86EFAC" }}>
          <div className="flex flex-col gap-1.5">
          <p className="m-0 text-base font-extrabold" style={{ color: "#166534" }}>Strategi 2</p>
          <p className="m-0 text-sm font-bold text-[#111827]">Hitung ukuran baru terlebih dahulu</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">Tentukan dulu ukuran panjang (rusuk/sisi) setelah perubahan: <span className="italic">p</span>′ = <span className="italic">k</span> × <span className="italic">p</span>, <span className="italic">l</span>′ = <span className="italic">k</span> × <span className="italic">l</span>, <span className="italic">t</span>′ = <span className="italic">k</span> × <span className="italic">t</span> (atau ukuran yang sesuai), kemudian hitung volumenya dengan rumus bangun ruang yang sesuai.</p>
          </div>
          <EditablePageImage
            imageKey="M8-P10-L5-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar[1]}
            alt="Ilustrasi strategi 2"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[170px] mx-auto overflow-hidden"
          />
        </div>
        <div className="rounded-[20px] border-2 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-4 items-center" style={{ backgroundColor: "#FFF7ED", borderColor: "#FDBA74" }}>
          <div className="flex flex-col gap-1.5">
          <p className="m-0 text-base font-extrabold" style={{ color: "#C2410C" }}>Strategi 3</p>
          <p className="m-0 text-sm font-bold text-[#111827]">Manfaatkan GeoGebra 3D atau AR</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">Gunakan GeoGebra 3D atau <span className="italic">Augmented Reality</span> (AR) untuk memvisualisasikan perubahan ukuran dan memverifikasi hasil perhitungan.</p>
          </div>
          <EditablePageImage
            imageKey="M8-P10-L5-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambar[2]}
            alt="Ilustrasi strategi 3"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[170px] mx-auto overflow-hidden"
          />
        </div>
        <div className="rounded-[20px] border-2 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-4 items-center" style={{ backgroundColor: "#F5F3FF", borderColor: "#C4B5FD" }}>
          <div className="flex flex-col gap-1.5">
          <p className="m-0 text-base font-extrabold" style={{ color: "#6B21A8" }}>Strategi 4</p>
          <p className="m-0 text-sm font-bold text-[#111827]">Bandingkan beberapa strategi</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">Coba lebih dari satu cara, lalu bandingkan hasilnya. Pilih strategi yang paling efisien dan sesuai dengan informasi yang diberikan.</p>
          </div>
          <EditablePageImage
            imageKey="M8-P10-L5-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={gambar[3]}
            alt="Ilustrasi strategi 4"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[170px] mx-auto overflow-hidden"
          />
        </div>
        <div className="flex items-center gap-2.5 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" className="flex-shrink-0"><path d="M12 2l3 6.6 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.2l1.5-7L2 9.4l7-.8z" /></svg>
          <p className="m-0 text-sm font-bold text-[#92400E] leading-[1.5]">Semua strategi dapat digunakan apabila disertai alasan matematis yang benar.</p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
