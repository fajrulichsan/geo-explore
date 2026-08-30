import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta2Step7SiapBerdiskusi({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarDiskusi = await getPageImage("M1-P2-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Berdiskusi!
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 flex flex-col items-center text-center gap-4">
              <EditablePageImage
                imageKey="M1-P2-L7-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambarDiskusi}
                alt="Ilustrasi siap berdiskusi"
                editable={editFoto}
                containerClassName="relative w-40 h-40 rounded-2xl overflow-hidden bg-[#EFF4FF]"
              />
              <div className="text-sm text-[#4B5563] leading-[1.6] text-left flex flex-col gap-3">
                <p className="m-0">
                  Kamu telah memiliki berbagai dugaan tentang cara mengelompokkan benda dan model
                  bangun ruang di atas.
                </p>
                <p className="m-0 font-bold text-[#2563EB]">
                  Pada tahap berikutnya, diskusikan ide-idemu bersama teman untuk menentukan
                  informasi apa saja yang diperlukan agar pengelompokan menjadi lebih tepat.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[18px] p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="m-0 text-base font-bold text-[#111827]">Catatan Ide Pentingku</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <p className="m-0 mb-4 text-sm text-[#6B7280]">
                Tuliskan satu dugaan atau pertanyaan terpenting yang ingin kamu diskusikan pada
                tahap berikutnya.
              </p>
              <textarea
                rows={4}
                name="answers.catatan_ide_penting"
                defaultValue={getValue("catatan_ide_penting")}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
              <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                <PhotoUpload
                  name="answers.foto_bukti"
                  label="Unggah foto hasil kerja (opsional)"
                  defaultValue={getValue("foto_bukti")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Selesai
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
