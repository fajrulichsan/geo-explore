import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Mengidentifikasi alas, tinggi, dan luas alas pada limas serta prisma.",
  "Menyelidiki hubungan volume limas dan prisma melalui pengamatan dan eksplorasi.",
  "Menemukan sendiri rumus volume limas.",
  "Menjelaskan alasan matematis rumus volume limas.",
  "Membandingkan, mengevaluasi, dan memperbaiki strategi penyelesaian masalah volume limas.",
  "Menunjukkan keyakinan dalam menyelesaikan masalah volume limas.",
];

const media = [
  {
    judul: "GeoGebra 3D",
    warna: "#1D4ED8",
    aksi: "Buka GeoGebra 3D",
    fitur: [
      "Memanipulasi limas dan prisma",
      "Mengamati luas alas dan tinggi",
      "Membandingkan volumenya",
      "Menguji dugaan secara dinamis",
    ],
    layar: {
      key: "M7-P1-L2-1" as const,
      alt: "Tangkapan layar GeoGebra 3D menampilkan limas biru",
    },
    qr: {
      key: "M7-P1-L2-2" as const,
      alt: "Kode QR untuk membuka GeoGebra 3D",
    },
  },
  {
    judul: "Augmented Reality (AR)",
    warna: "#2B3D44",
    aksi: "Mulai AR Viewer",
    fitur: [
      "Melihat model 3D dari berbagai arah",
      "Mengamati hubungan limas–prisma",
      "Membuat pembelajaran lebih nyata",
      "Meningkatkan pemahaman spasial",
    ],
    layar: {
      key: "M7-P1-L2-3" as const,
      alt: "Model limas biru ditampilkan melalui Augmented Reality di layar tablet",
    },
    qr: {
      key: "M7-P1-L2-4" as const,
      alt: "Kode QR untuk membuka AR Viewer",
    },
  },
];

export default async function Materi7Peta1Step2TujuanMedia({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all(
    media.flatMap((m) => [getPageImage(m.layar.key), getPageImage(m.qr.key)]),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
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
            Volume Limas
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          {media.map((m, i) => (
            <div
              key={m.judul}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
            >
              <span
                className="text-sm font-bold"
                style={{ color: m.warna }}
              >
                {m.judul}
              </span>
              <EditablePageImage
                imageKey={m.layar.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i * 2 + 1)}
                src={gambar[i * 2]}
                alt={m.layar.alt}
                editable={editFoto}
                natural
                containerClassName="relative w-full min-h-24 rounded-[14px] overflow-hidden bg-[#F3F4F6]"
              />
              <div className="flex items-center gap-4">
                <EditablePageImage
                  imageKey={m.qr.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i * 2 + 2)}
                  src={gambar[i * 2 + 1]}
                  alt={m.qr.alt}
                  editable={editFoto}
                  containerClassName="relative w-24 h-24 rounded-xl overflow-hidden bg-white border border-[#E5E7EB] flex-shrink-0"
                  imageClassName="object-contain"
                />
                <span className="text-xs font-bold text-[#1D4ED8]">
                  {m.aksi}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {m.fitur.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16A34A"
                      strokeWidth="2.6"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151] leading-[1.5]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.4"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
