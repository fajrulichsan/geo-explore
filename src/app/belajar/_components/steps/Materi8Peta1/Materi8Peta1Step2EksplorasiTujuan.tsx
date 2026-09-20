import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const eksplorasi = [
  {
    judul: "Eksplorasi dengan GeoGebra 3D",
    key: "M8-P1-L2-1" as const,
    alt: "Layar GeoGebra 3D dengan slider skala k = 2 yang menampilkan kubus asli dan kubus hasil skala",
    langkah: [
      "Ubah faktor skala menggunakan slider.",
      "Amati perubahan ukuran bangun.",
      "Hitung volume secara otomatis.",
      "Bandingkan volume sebelum dan sesudah perubahan.",
      "Temukan pola perubahan volume.",
    ],
  },
  {
    judul: "Eksplorasi dengan Augmented Reality (AR)",
    key: "M8-P1-L2-2" as const,
    alt: "Tampilan AR kubus asli berusuk 2 cm dan hasil skala k = 2 berusuk 4 cm",
    langkah: [
      "Tampilkan bangun asli.",
      "Tampilkan hasil skala.",
      "Amati perubahan ukuran bangun.",
      "Bandingkan volumenya.",
      "Cocokkan dengan dugaanmu.",
    ],
  },
];

const tujuanPembelajaran = [
  "Menemukan hubungan antara faktor skala dan perubahan volume kubus, balok, prisma, dan limas.",
  "Menentukan volume bangun setelah diperbesar atau diperkecil dengan faktor skala tertentu.",
  "Mencoba berbagai strategi dan memberikan alasan matematis terhadap strategi yang digunakan.",
  "Mengevaluasi dan memperbaiki strategi penyelesaian masalah.",
  "Menunjukkan rasa percaya diri dalam menyelesaikan masalah skala dan volume serta menerapkannya pada situasi lain.",
];

export default async function Materi8Peta1Step2EksplorasiTujuan({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarGeogebra, gambarAr, gambarMaskot] = await Promise.all([
    getPageImage("M8-P1-L2-1"),
    getPageImage("M8-P1-L2-2"),
    getPageImage("M8-P1-L2-3"),
  ]);
  const gambar = [gambarGeogebra, gambarAr];

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
            Skala dan Volume Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan GeoGebra 3D dan AR
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {eksplorasi.map((e, i) => (
            <div
              key={e.judul}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
            >
              <span className="text-sm font-bold text-[#1D4ED8]">
                {e.judul}
              </span>
              <EditablePageImage
                imageKey={e.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 1)}
                src={gambar[i]}
                alt={e.alt}
                editable={editFoto}
                natural
                containerClassName="relative w-full min-h-24 rounded-[14px] overflow-hidden"
              />
              <div className="flex flex-col gap-2">
                {e.langkah.map((l) => (
                  <div key={l} className="flex items-start gap-2.5">
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
                      {l}
                    </span>
                  </div>
                ))}
              </div>
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
            Tujuan Pembelajaran
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Setelah mempelajari submateri ini, kamu diharapkan mampu:
        </p>
        <div className="flex items-center gap-5">
          <div className="grid grid-cols-1 gap-3 flex-1">
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
            imageKey="M8-P1-L2-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarMaskot}
            alt="Siswa laki-laki tersenyum sambil menulis di buku"
            editable={editFoto}
            containerClassName="relative w-32 h-40 lg:w-40 lg:h-48 rounded-2xl overflow-hidden bg-white flex-shrink-0 hidden md:block"
            imageClassName="object-contain"
          />
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
