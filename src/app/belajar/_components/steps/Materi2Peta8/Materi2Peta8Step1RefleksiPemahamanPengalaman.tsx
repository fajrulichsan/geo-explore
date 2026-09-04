import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pemahaman = [
  { key: "beda_valid_tidak", text: "Saya dapat membedakan jaring-jaring yang valid dan tidak valid." },
  {
    key: "lebih_dari_satu_jaring",
    text: "Saya memahami bahwa satu bangun ruang dapat memiliki lebih dari satu jaring-jaring.",
  },
  { key: "alasan_valid", text: "Saya dapat menjelaskan alasan mengapa suatu jaring-jaring valid." },
  {
    key: "gunakan_geogebra_ar",
    text: "Saya dapat menggunakan hasil pengamatan dari GeoGebra 3D dan AR sebagai bukti pendukung.",
  },
  {
    key: "simpulkan_konsep",
    text: "Saya dapat menyimpulkan konsep jaring-jaring berdasarkan hasil pengamatan.",
  },
];

const caraBelajar = [
  {
    key: "mengamati",
    label: "Mengamati gambar",
    icon: (
      <>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    key: "berdiskusi",
    label: "Berdiskusi",
    icon: (
      <>
        <path d="M8 12a4 4 0 118 0 4 4 0 01-8 0z" />
        <path d="M2 20c0-3 3-5 6-5M22 20c0-3-3-5-6-5" />
      </>
    ),
  },
  {
    key: "geogebra",
    label: "GeoGebra 3D",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8" />
      </>
    ),
  },
  {
    key: "ar",
    label: "Augmented Reality",
    icon: (
      <>
        <path d="M12 2l9 5v10l-9 5-9-5V7z" />
        <path d="M3 7l9 5 9-5M12 12v10" />
      </>
    ),
  },
  {
    key: "verifikasi",
    label: "Verifikasi",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </>
    ),
  },
  {
    key: "kesimpulan",
    label: "Menyusun kesimpulan",
    icon: (
      <>
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
      </>
    ),
  },
];

export default async function Materi2Peta8Step1RefleksiPemahamanPengalaman({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P8-L1-1");
  const shapesImage = await getPageImage("M2-P8-L1-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FFF7E6] to-[#FFEFC7] border border-[#FDE68A] px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-center gap-6">
        <EditablePageImage
          imageKey="M2-P8-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot mengajak refleksi"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-[#FFFDF5]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <p className="m-0 text-sm sm:text-[15px] leading-[1.6] text-[#4B5563]">
            Sekarang, saatnya kamu merefleksikan pengalaman belajarmu selama mempelajari jaring-jaring
            bangun ruang sisi datar. Isilah dengan jujur sesuai dengan pengalamanmu.
          </p>
          <div className="bg-white/70 border border-[#FDE68A] rounded-xl py-3 px-4 flex items-start gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.6]">
              Tidak ada jawaban benar atau salah pada bagian refleksi. Jawablah sesuai dengan apa yang
              benar-benar kamu rasakan.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M2-P8-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={shapesImage}
          alt="Ilustrasi bangun ruang dan jaring-jaringnya"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative hidden sm:block w-32 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-white/60"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Refleksi Pemahaman</p>
          </div>
          <p className="m-0 -mt-2 text-xs text-[#6B7280]">
            Berilah tanda centang pada pernyataan yang sesuai dengan dirimu.
          </p>
          <div className="flex flex-col gap-2.5">
            {pemahaman.map((c) => (
              <label
                key={c.key}
                className="group flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-3 px-4 cursor-pointer hover:border-[#2563EB] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  className="peer sr-only"
                />
                <span className="w-5 h-5 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Refleksi Pengalaman Belajar</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="p8-memahami" className="text-sm font-semibold text-[#111827]">
              1. Hari ini saya memahami bahwa...
            </label>
            <textarea
              id="p8-memahami"
              name="answers.hari_ini_memahami"
              defaultValue={getValue("hari_ini_memahami")}
              rows={2}
              placeholder="Tulis pemahamanmu di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111827]">
              2. Bagian yang paling membantu saya memahami materi adalah...
            </label>
            <div className="grid grid-cols-3 gap-2">
              {caraBelajar.map((c) => (
                <label
                  key={c.key}
                  className="flex flex-col items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl py-2.5 px-1.5 cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] transition-colors"
                >
                  <input
                    type="checkbox"
                    name={`answers.bantu_${c.key}`}
                    value="true"
                    defaultChecked={getValue(`bantu_${c.key}`) === "true"}
                    className="peer sr-only"
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" className="peer-checked:hidden">
                    {c.icon}
                  </svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="hidden peer-checked:block">
                    {c.icon}
                  </svg>
                  <span className="text-[10px] font-semibold text-[#6B7280] text-center leading-tight">
                    {c.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="p8-mengapa" className="text-sm font-semibold text-[#111827]">
              Mengapa? (Jelaskan alasanmu.)
            </label>
            <textarea
              id="p8-mengapa"
              name="answers.alasan_paling_membantu"
              defaultValue={getValue("alasan_paling_membantu")}
              rows={2}
              placeholder="Jelaskan alasanmu di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="p8-ingin-tahu" className="text-sm font-semibold text-[#111827]">
              3. Hal yang masih ingin saya pelajari adalah...
            </label>
            <textarea
              id="p8-ingin-tahu"
              name="answers.ingin_dipelajari"
              defaultValue={getValue("ingin_dipelajari")}
              rows={2}
              placeholder="Tulis di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
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
