import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi2Peta1Step2EksplorasiProses({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarProses, gambarGeoGebra, gambarAR] = await Promise.all([
    getPageImage("M2-P1-L2-1"),
    getPageImage("M2-P1-L2-2"),
    getPageImage("M2-P1-L2-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 12h16M12 4v16" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Eksplorasi Proses &amp; Alat Digital
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Proses Bangun Ruang Menjadi Jaring-Jaring dan Kembali
          </div>
        </div>

        <div className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
            <div className="bg-[#F3F4F6] text-[#6B7280] px-4 py-2 rounded-full text-xs font-bold">1. Bangun Ruang</div>
            <div className="bg-white border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-full text-xs font-bold">2. Membuka</div>
            <div className="bg-white border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-full text-xs font-bold">3. Jaring-Jaring</div>
            <div className="bg-white border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-full text-xs font-bold">4. Melipat</div>
            <div className="bg-[#F3F4F6] text-[#6B7280] px-4 py-2 rounded-full text-xs font-bold">5. Bangun Ruang Kembali</div>
          </div>

          <EditablePageImage
            imageKey="M2-P1-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarProses}
            alt="Ilustrasi proses bangun ruang menjadi jaring-jaring dan kembali"
            editable={editFoto}
            containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
          />

          <div className="mt-5 bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Apakah kamu dapat menemukan lebih dari satu jaring-jaring dari bangun ruang yang sama? Ayo, temukan berbagai kemungkinannya!
            </p>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-6 text-xs text-[#6B7280]">
            <div className="flex items-center gap-2">
              <div className="w-8 border-t-2 border-dashed border-[#2563EB]" />
              Garis putus-putus biru = garis potong
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 border-t-2 border-dashed border-[#DC2626]" />
              Garis putus-putus merah = garis lipatan
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan GeoGebra 3D &amp; Augmented Reality (AR)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              GeoGebra 3D
            </div>
            <EditablePageImage
              imageKey="M2-P1-L2-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambarGeoGebra}
              alt="Ilustrasi eksplorasi GeoGebra 3D"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Buka bangun ruang menjadi jaring-jaring, putar model 3D, dan amati hubungan antara sisi secara interaktif.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2B3D44] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Augmented Reality (AR)
            </div>
            <EditablePageImage
              imageKey="M2-P1-L2-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={gambarAR}
              alt="Ilustrasi eksplorasi Augmented Reality"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Amati proses melipat jaring-jaring menjadi bangun ruang secara virtual dan periksa apakah lipatannya benar.
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
            Ingat!
          </div>
        </div>
        <div className="bg-[#FCE9A8] rounded-2xl p-6 flex flex-col gap-3">
          <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
            <li>Perhatikan apakah susunan sisi dapat dilipat menjadi bangun ruang tanpa ada sisi yang saling bertumpuk.</li>
            <li>Periksa jumlah sisi dan kesesuaian bentuk setiap bidang.</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          MULAI TAHAP 1
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
