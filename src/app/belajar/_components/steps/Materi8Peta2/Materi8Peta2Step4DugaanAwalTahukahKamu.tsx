import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta2Step4DugaanAwalTahukahKamu({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarRumah = await getPageImage("M8-P2-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />
      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={8} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Awal
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">Lengkapi kalimat berikut.</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-[#111827] leading-[1.8]">
            Menurut dugaanmu, jika setiap ukuran panjang suatu bangun diperbesar dengan faktor skala k, maka volume bangun akan menjadi
            <input
              name="answers.dugaan_kali"
              defaultValue={getValue("dugaan_kali")}
              aria-label="Volume menjadi berapa kali"
              placeholder="......"
              required
              className="w-24 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors w-28"
            />
            kali dibandingkan sebelumnya.
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_dugaan_awal" className="text-sm font-bold text-[#111827]">
              Alasan:
            </label>
            <textarea
              id="alasan_dugaan_awal"
              name="answers.alasan_dugaan_awal"
              defaultValue={getValue("alasan_dugaan_awal")}
              rows={3}
              placeholder="Ketik alasanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
            Tahukah Kamu?
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[1fr_240px] gap-5 items-center">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Banyak benda di sekitar kita dibuat dengan prinsip skala. Misalnya:
            </p>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5] list-disc marker:text-[#D97706]">
              <li>miniatur bangunan</li>
              <li>model kendaraan</li>
              <li>maket kota</li>
              <li>desain 3D</li>
              <li>hasil cetak 3D <span className="italic text-[#6B7280]">(3D printing)</span></li>
            </ul>
          </div>
          <EditablePageImage
            imageKey="M8-P2-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarRumah}
            alt="Maket rumah dengan mobil dan pepohonan sebagai contoh benda berskala"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-2xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
