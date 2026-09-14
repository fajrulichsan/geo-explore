import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  "Apa informasi penting yang ingin kalian cari mengenai bangun ruang tersebut?",
  "Mengapa kelompok kalian memilih dugaan tersebut?",
  "Data apa saja yang sekiranya dibutuhkan untuk membuktikan dugaan itu?",
];

export default async function Peta4Step1MengingatDugaan({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const gambarReferensiVisual = await getPageImage("M1-P4-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengeksplorasi dengan GeoGebra 3D</h1>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-start gap-3 max-w-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            <span className="font-bold text-[#92400E]">Ingat! </span>
            Pada tahap ini, kita mencari informasi yang diperlukan untuk menyelidiki dugaan kelompokmu,
            belum menyimpulkan kebenaran dugaan tersebut.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              A
            </div>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Mengingat Dugaan Kelompok</h2>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Pada tahap sebelumnya, kelompokmu telah membuat dugaan tentang cara mengelompokkan bangun
              ruang. Sekarang saatnya mencari informasi yang diperlukan untuk menyelidiki dugaan tersebut.
            </p>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <h3 className="m-0 text-sm font-bold text-[#111827]">Informasi yang Akan Kami Cari:</h3>
              </div>
              <p className="m-0 mb-3 text-xs text-[#6B7280]">
                Bantu diri sendiri fokus dengan menjawab pertanyaan berikut sebelum mulai mengamati:
              </p>
              <ul className="m-0 p-0 mb-4 flex flex-col gap-2 list-none">
                {pertanyaan.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                    <span className="text-sm leading-[1.6] text-[#374151]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
          <EditablePageImage
            imageKey="M1-P4-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarReferensiVisual}
            alt="Referensi visual"
            editable={editFoto}
            containerClassName="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#EFF4FF]"
          />
          <span className="inline-block bg-[#FDC003]/30 text-[#785900] px-3 py-1 rounded-full text-xs font-bold">
            Referensi Visual
          </span>
        </div>
      </div>

      <div className="flex justify-end items-center">
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
