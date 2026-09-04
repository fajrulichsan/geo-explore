import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const aspek = [
  { key: "banyak_bentuk", label: "Banyak bentuk jaring-jaring yang ditemukan" },
  { key: "jaring_valid", label: "Jaring-jaring valid yang ditemukan" },
  { key: "susunan_tidak_valid", label: "Susunan yang tidak valid sebagai jaring-jaring yang ditemukan" },
  { key: "alasan_kelompok", label: "Alasan menurut kelompok" },
];

export default async function Materi2Peta5Step1BandingkanHasil({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P5-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 4 dari 6 – Ayo Mengolah Informasi
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M2-P5-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot mengolah informasi"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md">
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Sekarang, olah semua informasi yang telah kalian peroleh dari GeoGebra 3D dan AR! Bandingkan,
              kelompokkan, temukan pola, lalu susun dugaan kelompokmu.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-start gap-4">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
        </svg>
        <div>
          <p className="m-0 text-sm font-bold text-[#92400E] mb-1">Tujuan Tahap</p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Mengolah hasil eksplorasi untuk menemukan pola hubungan antar jaring-jaring dan menyusun
            klasifikasi awal berdasarkan alasan matematis.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Eksplorasimu
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">
            Bandingkan hasil eksplorasimu dengan anggota kelompok. Lengkapi tabel berikut.
          </p>
          <div className="flex flex-col gap-3">
            {aspek.map((a) => (
              <div key={a.key} className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-2 sm:gap-4 items-start rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <span className="text-sm font-bold text-[#111827]">{a.label}</span>
                <input
                  type="text"
                  name={`answers.aspek_${a.key}`}
                  defaultValue={getValue(`aspek_${a.key}`)}
                  placeholder="Hasil kelompok..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
