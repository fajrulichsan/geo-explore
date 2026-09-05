import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Menjelaskan hubungan faktor skala dan perubahan panjang.",
  "Menemukan pola perubahan luas permukaan.",
  "Menentukan luas permukaan setelah diskalakan.",
  "Menggunakan lebih dari satu strategi penyelesaian.",
  "Menjelaskan dan membandingkan alasan matematis.",
  "Lebih yakin menyelesaikan masalah skala dan luas secara logis.",
];

const ingatPoin = [
  "Perubahan ukuran panjang memengaruhi luas permukaan.",
  "Hubungan tersebut dapat ditemukan melalui pengamatan.",
  "Rumus diperoleh dari pola yang ditemukan melalui pengamatan, bukan sekadar dihafal.",
];

const bangunRuang = [
  { key: "M5-P1-L2-4" as const, label: "Kubus" },
  { key: "M5-P1-L2-5" as const, label: "Balok" },
  { key: "M5-P1-L2-6" as const, label: "Prisma Segitiga" },
  { key: "M5-P1-L2-7" as const, label: "Limas Segiempat" },
];

export default async function Materi5Peta1Step2EksplorasiProses({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const [gambarGeoGebra, gambarAR, gambarMaskot, ...gambarBangun] = await Promise.all([
    getPageImage("M5-P1-L2-1"),
    getPageImage("M5-P1-L2-2"),
    getPageImage("M5-P1-L2-3"),
    ...bangunRuang.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="10" width="7" height="7" rx="1" />
            <rect x="14" y="4" width="10" height="10" rx="1" />
            <path d="M14 20h7" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Skala dan Luas Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan GeoGebra 3D &amp; Augmented Reality (AR)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M8 20h8" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#111827]">Eksplorasi dengan GeoGebra 3D</span>
            </div>
            <EditablePageImage
              imageKey="M5-P1-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarGeoGebra}
              alt="Tangkapan layar slider faktor skala pada model kubus di GeoGebra 3D"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
            />
            <div className="flex flex-col gap-2">
              {[
                "Ubah faktor skala menggunakan slider.",
                "Amati perubahan ukuran bangun.",
                "Ukur luas setiap sisi secara interaktif.",
                "Bandingkan hasilnya untuk berbagai nilai k.",
              ].map((a) => (
                <div key={a} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-1 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#374151] leading-[1.5]">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#2B3D44] flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#111827]">Eksplorasi dengan Augmented Reality (AR)</span>
            </div>
            <EditablePageImage
              imageKey="M5-P1-L2-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambarAR}
              alt="Model asli dan model hasil skala limas ditampilkan melalui Augmented Reality"
              editable={editFoto}
              containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]"
              imageClassName="object-cover"
            />
            <div className="flex flex-col gap-2">
              {[
                "Tampilkan model asli dan model hasil skala.",
                "Bandingkan ukuran secara visual.",
                "Amati perubahan luas permukaan.",
                "Periksa kembali dugaanmu.",
              ].map((a) => (
                <div key={a} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-1 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#374151] leading-[1.5]">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Tujuan Pembelajaran
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {tujuanPembelajaran.map((tujuan, i) => (
              <div
                key={tujuan}
                className="bg-white border border-[#E5E7EB] rounded-[16px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-3"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm leading-[1.6] text-[#374151] pt-1">{tujuan}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Ingat!
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {ingatPoin.map((poin) => (
              <div key={poin} className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#374151] leading-[1.5]">{poin}</span>
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M5-P1-L2-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarMaskot}
            alt="Maskot siswa laki-laki menulis catatan sambil memegang kubus"
            editable={editFoto}
            containerClassName="relative w-24 h-24 self-end rounded-2xl overflow-hidden bg-[#EFF4FF] hidden sm:block"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Siap Mengeksplorasi?</h2>
          <p className="m-0 text-sm text-white/90 max-w-xl">
            Gunakan kemampuan mengamati, berpikir logis, GeoGebra 3D, dan Augmented Reality (AR)
            untuk menemukan sendiri hubungan antara skala dan luas permukaan bangun ruang sisi
            datar.
          </p>
        </div>
        <div className="relative flex flex-wrap items-center gap-4">
          {bangunRuang.map((bangun, i) => (
            <div key={bangun.key} className="flex flex-col items-center gap-2">
              <EditablePageImage
                imageKey={bangun.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 4)}
                src={gambarBangun[i]}
                alt={bangun.label}
                editable={editFoto}
                containerClassName="relative w-20 h-20 rounded-xl overflow-hidden bg-white/15"
                imageClassName="object-contain"
              />
              <span className="text-xs font-semibold text-white/90">{bangun.label}</span>
              <span className="text-[10px] font-bold text-white/70">k = 2</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
