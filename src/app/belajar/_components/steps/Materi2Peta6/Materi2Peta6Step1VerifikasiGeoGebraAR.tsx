import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Merevisi jawaban bukan berarti salah.",
  "Dugaan yang baik perlu diperiksa berdasarkan bukti.",
  "Alasan matematika lebih penting daripada sekadar jawaban.",
];

const cekGeoGebra = [
  { key: "gg_putar", label: "Putar model dan amati seluruh sisinya." },
  { key: "gg_buka_tutup", label: "Buka dan tutup bangun ruang menjadi jaring-jaring." },
  { key: "gg_hubungan", label: "Perhatikan hubungan antar sisi dan garis lipatan." },
  { key: "gg_sempurna", label: "Periksa apakah jaring dapat membentuk bangun ruang sempurna." },
];

const cekAr = [
  { key: "ar_proses", label: "Amati proses membuka (melipat) setiap sisi." },
  { key: "ar_posisi", label: "Perhatikan posisi sisi saat dibuka." },
  { key: "ar_lengkap", label: "Periksa apakah semua sisi terbuka tanpa bertumpuk dan tidak terlewat." },
  { key: "ar_cocok", label: "Cocokkan hasil AR dengan hasil GeoGebra 3D." },
];

function Checklist({
  items,
  accent,
  checked,
}: {
  items: { key: string; label: string }[];
  accent: string;
  checked: (key: string) => boolean;
}) {
  return (
    <ul className="m-0 p-0 list-none flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.key}>
          <label className="flex items-start gap-2.5 text-sm text-[#374151] cursor-pointer">
            <input
              type="checkbox"
              name={`answers.${item.key}`}
              defaultChecked={checked(item.key)}
              style={{ accentColor: accent }}
              className="mt-1 w-4 h-4 flex-shrink-0"
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default async function Materi2Peta6Step1VerifikasiGeoGebraAR({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const [mascot, geogebra, qrGeogebra, arStrip, qrAr] = await Promise.all([
    getPageImage("M2-P6-L1-1"),
    getPageImage("M2-P6-L1-2"),
    getPageImage("M2-P6-L1-3"),
    getPageImage("M2-P6-L1-4"),
    getPageImage("M2-P6-L1-5"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="grid md:grid-cols-5 gap-5">
        <div className="md:col-span-3 rounded-[24px] bg-white border border-[#DBEAFE] p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M2-P6-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascot}
            alt="Siswa berpikir sambil memegang dagu dengan tanda tanya"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 sm:w-36 sm:h-40 flex-shrink-0"
          />
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Apakah dugaan kelompokmu sudah benar? Sekarang, uji dan periksa kembali dugaanmu
            menggunakan <span className="font-bold text-[#2563EB]">GeoGebra 3D</span> dan{" "}
            <span className="font-bold text-[#16A34A]">Augmented Reality (AR)</span>, lalu bandingkan
            hasilnya dengan kelompok lain.
          </p>
        </div>
        <div className="md:col-span-2 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[24px] p-5 flex flex-col gap-3">
          <p className="m-0 flex items-center gap-2 text-base font-extrabold text-[#92400E]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round">
              <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
            </svg>
            Ingat!
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {ingat.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs leading-[1.5] font-semibold text-[#1E3A8A]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.8" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Verifikasi Menggunakan GeoGebra 3D dan AR</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Gunakan kembali GeoGebra 3D dan AR untuk memeriksa apakah dugaan kelompokmu sesuai dengan
            hasil pengamatan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#BFDBFE] bg-[#F5F9FF] p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">GeoGebra 3D</h3>
            </div>
            <p className="m-0 text-xs text-[#4B5563]">Scan QR untuk membuka model 3D.</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <EditablePageImage
                imageKey="M2-P6-L1-2"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={geogebra}
                alt="Tampilan GeoGebra 3D jaring-jaring kubus"
                editable={editFoto}
                natural
                containerClassName="relative w-full sm:flex-1 min-w-0"
              />
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-[#BFDBFE] bg-white p-2.5 flex-shrink-0">
                <EditablePageImage
                  imageKey="M2-P6-L1-3"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="3"
                  src={qrGeogebra}
                  alt="QR code GeoGebra 3D"
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-24 h-24"
                />
                <span className="text-[11px] font-semibold text-[#1E3A8A] text-center">Scan untuk GeoGebra 3D</span>
              </div>
            </div>
            <Checklist items={cekGeoGebra} accent="#2563EB" checked={checked} />
          </div>

          <div className="rounded-2xl border border-[#BBF7D0] bg-[#F3FCF6] p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="m-0 text-base font-extrabold text-[#166534]">Augmented Reality (AR)</h3>
            </div>
            <p className="m-0 text-xs text-[#4B5563]">Scan QR untuk melihat proses melipat jaring-jaring.</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full sm:flex-1 min-w-0 flex flex-col gap-1.5">
                <EditablePageImage
                  imageKey="M2-P6-L1-4"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="4"
                  src={arStrip}
                  alt="Proses AR: bangun ruang utuh, proses membuka, jaring-jaring terbentuk"
                  editable={editFoto}
                  natural
                  containerClassName="relative w-full"
                />
                <p className="m-0 text-[11px] font-semibold text-[#374151] text-center">
                  Bangun ruang utuh → Proses membuka → Jaring-jaring terbentuk
                </p>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-[#BBF7D0] bg-white p-2.5 flex-shrink-0">
                <EditablePageImage
                  imageKey="M2-P6-L1-5"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="5"
                  src={qrAr}
                  alt="QR code AR"
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-24 h-24"
                />
                <span className="text-[11px] font-semibold text-[#166534] text-center">Scan untuk AR</span>
              </div>
            </div>
            <Checklist items={cekAr} accent="#16A34A" checked={checked} />
          </div>
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
