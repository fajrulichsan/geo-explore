import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi2Peta3Step3DugaanKelompok({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [geogebraImage, qrImage] = await Promise.all([
    getPageImage("M2-P3-L3-1"),
    getPageImage("M2-P3-L3-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Kelompok
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Berdasarkan hasil diskusi, tuliskan dugaan kelompokmu.</p>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
            <label htmlFor="dugaan_kelompok" className="text-sm italic font-semibold text-[#92400E]">
              &ldquo;Menurut kelompok kami, suatu susunan bidang datar dapat menjadi jaring-jaring apabila ...
            </label>
            <textarea
              id="dugaan_kelompok"
              name="answers.dugaan_kelompok"
              defaultValue={getValue("dugaan_kelompok")}
              placeholder="Lanjutkan kalimat di atas..."
              required
              rows={4}
              className="w-full rounded-xl border border-[#F5E3A0] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kotak Ingat
            </div>
          </div>
          <div className="rounded-[20px] border-2 border-dashed border-[#C4B5FD] bg-[#F5F3FF] p-5 flex items-start gap-3">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Tidak semua kelompok harus memiliki dugaan yang sama. Yang terpenting adalah dugaan tersebut
              memiliki alasan yang logis berdasarkan hasil pengamatan.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Menuju Tahap Berikutnya
          </div>
        </div>
        <div className="rounded-[20px] border border-[#BBF7D0] bg-[#F0FDF4] p-5 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-center gap-3 md:flex-1">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
              <path d="M12 2c3 3 5 6.5 5 10.5A5 5 0 0112 18a5 5 0 01-5-5.5C7 8.5 9 5 12 2z" />
              <path d="M9 18l-2 3M15 18l2 3" />
            </svg>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Hasil diskusi ini akan diuji menggunakan <b>GeoGebra 3D</b> dan <b>Augmented Reality</b> pada
              tahap berikutnya.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <EditablePageImage
              imageKey="M2-P3-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={geogebraImage}
              alt="GeoGebra 3D di laptop dan tampilan AR di tablet"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-52 sm:w-64 aspect-[233/113]"
            />
            <EditablePageImage
              imageKey="M2-P3-L3-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={qrImage}
              alt="Kode QR"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-20 h-20 flex-shrink-0"
            />
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
