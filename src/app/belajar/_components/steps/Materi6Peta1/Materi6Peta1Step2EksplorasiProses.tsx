import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Mengidentifikasi hubungan antara kubus satuan, ukuran alas atau penampang, banyak lapisan (kubus dan balok), panjang prisma, dan volume.",
  "Menemukan pola yang muncul dari data dan menyusun dugaan rumus volume kubus, balok, dan prisma.",
  "Membandingkan dan mengevaluasi berbagai strategi penyelesaian yang digunakan.",
  "Menjelaskan alasan dari strategi yang dipilih dan menarik kesimpulan yang logis.",
  "Menunjukkan keyakinan dalam menyelesaikan masalah volume, bekerja sama, dan mengomunikasikan hasil pemikiran dengan jelas.",
];

const lapisan = [
  { key: "M6-P1-L2-6" as const, label: "1 lapisan", ukuran: "(3 × 3 × 1)" },
  { key: "M6-P1-L2-7" as const, label: "2 lapisan", ukuran: "(3 × 3 × 2)" },
  { key: "M6-P1-L2-8" as const, label: "3 lapisan", ukuran: "(3 × 3 × 3)" },
];

const temuan = [
  "Setiap lapisan memiliki jumlah kubus satuan yang sama.",
  "Volume bertambah sesuai banyaknya lapisan (kubus/balok).",
  "Prisma yang sama juga berlaku untuk prisma.",
];

export default async function Materi6Peta1Step2EksplorasiProses({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [
    gambarTujuan,
    gambarGeoGebra,
    qrGeoGebra,
    gambarAR,
    qrAR,
    gambarMaskot,
    ...gambarLapisan
  ] = await Promise.all([
    getPageImage("M6-P1-L2-1"),
    getPageImage("M6-P1-L2-2"),
    getPageImage("M6-P1-L2-3"),
    getPageImage("M6-P1-L2-4"),
    getPageImage("M6-P1-L2-5"),
    getPageImage("M6-P1-L2-9"),
    ...lapisan.map((l) => getPageImage(l.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
          >
            <path d="M12 2l9 5v10l-9 5-9-5V7z" />
            <path d="M3 7l9 5 9-5M12 12v10" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Volume Kubus, Balok, dan Prisma
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Setelah mempelajari submateri ini, kamu diharapkan mampu:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
          <div className="grid grid-cols-1 gap-3">
            {tujuanPembelajaran.map((tujuan, i) => (
              <div
                key={tujuan}
                className="bg-white border border-[#E5E7EB] rounded-[16px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-3"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm leading-[1.6] text-[#374151] pt-1">
                  {tujuan}
                </p>
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M6-P1-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarTujuan}
            alt="Tiga siswa mengamati balok kubus satuan dan prisma sambil mendiskusikan data"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden bg-[#EFF4FF]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Media Pendukung
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.4"
                >
                  <path d="M12 2l9 5v10l-9 5-9-5V7z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#111827]">
                GeoGebra 3D
              </span>
            </div>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">
              Eksplorasi volume dengan kubus satuan secara dinamis.
            </p>
            <EditablePageImage
              imageKey="M6-P1-L2-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambarGeoGebra}
              alt="Tangkapan layar GeoGebra 3D menampilkan kubus satuan yang disusun menjadi balok"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <div className="flex items-center gap-4">
              <EditablePageImage
                imageKey="M6-P1-L2-3"
                materi={materi}
                peta={peta}
                step={step}
                urutan="3"
                src={qrGeoGebra}
                alt="Kode QR untuk membuka GeoGebra 3D"
                editable={editFoto}
                containerClassName="relative w-24 h-24 rounded-xl overflow-hidden bg-white border border-[#E5E7EB] flex-shrink-0"
                imageClassName="object-contain"
              />
              <span className="text-xs font-bold text-[#1D4ED8]">
                Scan di sini (GeoGebra 3D)
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#2B3D44] flex items-center justify-center flex-shrink-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.4"
                >
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#111827]">
                Augmented Reality (AR)
              </span>
            </div>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">
              Memvisualisasikan volume bangun ruang secara tiga dimensi sehingga
              konsep lebih mudah dipahami.
            </p>
            <EditablePageImage
              imageKey="M6-P1-L2-4"
              materi={materi}
              peta={peta}
              step={step}
              urutan="4"
              src={gambarAR}
              alt="Model kubus biru tersusun dari kubus satuan ditampilkan melalui Augmented Reality di layar tablet"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <div className="flex items-center gap-4">
              <EditablePageImage
                imageKey="M6-P1-L2-5"
                materi={materi}
                peta={peta}
                step={step}
                urutan="5"
                src={qrAR}
                alt="Kode QR untuk membuka AR 3D Viewer"
                editable={editFoto}
                containerClassName="relative w-24 h-24 rounded-xl overflow-hidden bg-white border border-[#E5E7EB] flex-shrink-0"
                imageClassName="object-contain"
              />
              <span className="text-xs font-bold text-[#1D4ED8]">
                Scan di sini (AR 3D Viewer)
              </span>
            </div>
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
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan penambahan lapisan pada kubus berikut!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-stretch">
          <div className="grid grid-cols-3 gap-3 bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            {lapisan.map((l, i) => (
              <div key={l.key} className="flex flex-col items-center gap-2">
                <EditablePageImage
                  imageKey={l.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 6)}
                  src={gambarLapisan[i]}
                  alt={`Kubus dengan ${l.label} kubus satuan ${l.ukuran}`}
                  editable={editFoto}
                  containerClassName="relative w-full aspect-square rounded-xl overflow-hidden"
                  imageClassName="object-contain"
                />
                <span className="text-xs font-bold text-[#111827] text-center">
                  {l.label}
                </span>
                <span className="text-[11px] font-semibold text-[#6B7280] text-center">
                  {l.ukuran}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-5 flex flex-col gap-3">
            {temuan.map((t, i) => (
              <div key={t} className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm text-[#374151] leading-[1.5]">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8 flex items-center gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">
              Siap Bereksplorasi?
            </h2>
          </div>
          <p className="m-0 text-sm text-white/90 max-w-xl">
            Mari, amati bentuk, ukuran alas atau penampang, banyak lapisan
            (kubus dan balok), panjang prisma, dan hubungan ketiganya terhadap
            volume. Kemukakan dugaan, coba berbagai strategi, dan temukan
            polanya.
          </p>
          <p className="m-0 text-sm font-bold text-[#FCE9A8]">
            Ayo, mulai petualangan matematika ini!
          </p>
        </div>
        <EditablePageImage
          imageKey="M6-P1-L2-9"
          materi={materi}
          peta={peta}
          step={step}
          urutan="9"
          src={gambarMaskot}
          alt="Maskot siswa laki-laki mengepalkan tangan dengan penuh semangat"
          editable={editFoto}
          containerClassName="relative w-28 h-36 rounded-2xl overflow-hidden bg-white/15 flex-shrink-0 hidden sm:block"
          imageClassName="object-contain"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.6"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
