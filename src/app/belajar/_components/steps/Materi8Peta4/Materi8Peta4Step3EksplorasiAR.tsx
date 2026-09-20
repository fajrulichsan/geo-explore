import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta4Step3EksplorasiAR({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const gambar1 = await getPageImage("M8-P4-L3-1");
  const gambar2 = await getPageImage("M8-P4-L3-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Bereksplorasi
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Eksplorasi Menggunakan Augmented Reality (AR)
        </div>
      </div>
      <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
        Amati perubahan bangun ruang dalam bentuk nyata melalui <span className="italic">Augmented Reality</span>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5">
        <div className="flex flex-col items-center self-start gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-4">
          <p className="m-0 text-sm font-bold text-[#166534] text-center">Scan QR Code AR</p>
          <EditablePageImage
            imageKey="M8-P4-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar1}
            alt="QR code untuk membuka Augmented Reality"
            editable={editFoto}
            natural
            containerClassName="relative w-32 overflow-hidden rounded-xl bg-white"
          />
          <span className="rounded-full bg-[#166534] text-white text-xs font-bold py-1.5 px-4">Buka AR</span>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#BBF7D0] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="m-0 w-fit rounded-full bg-[#166534] text-white text-xs font-bold py-1.5 px-4">Langkah kegiatan</p>
        <ol className="m-0 p-0 list-none flex flex-col gap-3">
          <li className="flex items-start gap-3 text-sm text-[#166534] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
            <span>Pilih model bangun ruang (kubus, balok, prisma, atau limas).</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#166534] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
            <div>
              Amati perubahan berikut:
              <ul className="mt-1 mb-0 pl-5 list-disc">
                <li>ukuran bangun (panjang rusuk, panjang, lebar, tinggi, atau ukuran alas),</li>
                <li>bentuk bangun,</li>
                <li>jumlah sisi,</li>
                <li>volume bangun.</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#166534] leading-[1.55]">
            <span className="w-7 h-7 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
            <span>Ubah faktor skala dan bandingkan secara visual.</span>
          </li>
        </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-4 items-center">
        <EditablePageImage
            imageKey="M8-P4-L3-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar2}
            alt="Tablet menampilkan kubus hijau dalam Augmented Reality"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[420px] overflow-hidden rounded-2xl bg-white"
          />
        <div className="rounded-[20px] border border-[#BFDBFE] bg-[#EFF4FF] px-4 py-3 text-sm italic text-[#1E3A8A] leading-[1.5]">
          Lihat bangun ruang menjadi lebih besar atau lebih kecil di dunia nyata!
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5">
        <label htmlFor="hasil_ar" className="text-sm font-semibold text-[#166534] leading-[1.5]">
          Tuliskan hasil pengamatanmu setelah membandingkan beberapa faktor skala menggunakan AR.
        </label>
        <textarea
          id="hasil_ar"
          name="answers.hasil_ar"
          defaultValue={getValue("hasil_ar")}
          rows={5}
          required
          className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] leading-[1.6] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/4/2`}
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
