import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const dipelajari = [
  {
    teks: "Mengamati bentuk bangun ruang",
    stroke: "#6D28D9",
    icon: <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5" />,
  },
  {
    teks: "Mencatat sifat-sifat bangun",
    stroke: "#15803D",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  {
    teks: "Membandingkan dan mencari informasi yang diperlukan",
    stroke: "#EA580C",
    icon: <path d="M12 4v16M6 20h12M4 8h16M4 8l-2 6h4zM20 8l-2 6h4z" />,
  },
];

export default async function Peta3Step8BersiapKeTahapBerikutnya({ materi, peta, step = "8", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M1-P3-L8-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bersiap ke Tahap Berikutnya
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex items-center gap-5">
            <EditablePageImage
              imageKey="M1-P3-L8-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={maskot}
              alt="Siswa laki-laki menunjuk ke atas"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-24 h-32 sm:w-28 sm:h-40 flex-shrink-0 bg-white rounded-2xl overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <p className="m-0 text-sm leading-[1.7] text-[#1E3A8A]">
                Pada tahap berikutnya, kita akan mengumpulkan informasi menggunakan GeoGebra 3D, Augmented Reality, dan gambar untuk memeriksa dugaan yang telah kita buat.
              </p>
              <div className="flex flex-col gap-2">
                <p className="m-0 text-xs font-bold text-[#374151]">Yang akan kita pelajari pada tahap berikutnya:</p>
                {dipelajari.map((d) => (
                  <div key={d.teks} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#1E3A8A]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={d.stroke} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                      {d.icon}
                    </svg>
                    {d.teks}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#DBE5FB] rounded-[20px] p-6 flex flex-col gap-3 focus-within:border-[#2563EB] transition-colors">
            <label htmlFor="pertanyaan_selidiki" className="text-base font-extrabold text-[#1E3A8A] cursor-pointer">
              Pertanyaan yang Ingin Aku Selidiki
            </label>
            <p className="m-0 text-[13px] text-[#374151]">Tuliskan satu hal yang masih ingin kamu ketahui pada tahap eksplorasi.</p>
            <textarea
              id="pertanyaan_selidiki"
              name="answers.pertanyaan_selidiki"
              defaultValue={getValue("pertanyaan_selidiki")}
              rows={5}
              placeholder="Ketik pertanyaanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/7`} />
        <NextStepButton variant="green">LANJUT KE TAHAP AYO BEREKSPLORASI</NextStepButton>
      </div>
    </form>
  );
}
