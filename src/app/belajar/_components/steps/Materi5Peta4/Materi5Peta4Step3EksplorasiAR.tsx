import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const perhatikan = ["bentuk bangun", "jumlah sisi", "ukuran bangun", "luas satu sisi", "luas permukaan"];

const langkah = [
  "Gerakkan perangkat untuk mengamati model bangun ruang dari berbagai sudut.",
  "Catat hasil pengamatan untuk setiap faktor skala.",
];

export default async function Materi5Peta4Step3EksplorasiAR({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const catatan = typeof answers.catatan_ar === "string" ? answers.catatan_ar : "";

  const [gambarQr, gambarAr] = await Promise.all([getPageImage("M5-P4-L3-1"), getPageImage("M5-P4-L3-2")]);

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
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#15803D]">
            Eksplorasi Menggunakan Augmented Reality (AR)
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 items-start">
            <div className="bg-[#F0FDF4] rounded-2xl p-3 flex flex-col items-center gap-2 w-fit mx-auto md:mx-0">
              <span className="text-xs font-bold text-[#15803D] text-center">Scan QR Code AR</span>
              <EditablePageImage
                imageKey="M5-P4-L3-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambarQr}
                alt="QR code menuju model bangun ruang Augmented Reality"
                editable={editFoto}
                imageClassName="object-contain p-1.5"
                containerClassName="relative w-36 h-36 rounded-xl overflow-hidden bg-white"
              />
              <span className="bg-[#166534] text-white rounded-full py-1 px-3 text-[11px] font-bold">QR AR</span>
            </div>

            <div className="flex flex-col gap-3">
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">Amati model bangun ruang melalui AR.</p>
              <span className="text-sm font-bold text-[#15803D]">Perhatikan perubahan pada:</span>
              <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2">
                {perhatikan.map((p, i) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-[#374151]">
                    <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5 items-center">
            <div className="flex flex-col gap-3">
              {langkah.map((l, i) => (
                <div key={l} className="flex items-start gap-3 bg-[#F0FDF4] rounded-xl p-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
                </div>
              ))}
            </div>
            <EditablePageImage
              imageKey="M5-P4-L3-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambarAr}
              alt="Tablet menampilkan kubus biru dalam Augmented Reality"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
            />
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-[#111827]">
              Catat data hasil pengamatan AR pada tabel yang sama atau pada catatan berikut.
            </span>
            <textarea
              name="answers.catatan_ar"
              defaultValue={catatan}
              required
              rows={5}
              placeholder="Tuliskan hasil pengamatan ARmu di sini..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </label>
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
