import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaanPemantik = [
  "Pernahkah kamu melihat kotak yang lebih besar mampu menampung lebih banyak benda?",
  "Bagaimana cara menentukan banyaknya ruang di dalam suatu bangun?",
  "Ayo selidiki cara menentukan banyaknya ruang dalam suatu bangun melalui pengamatan, diskusi, GeoGebra 3D, dan Augmented Reality (AR).",
];

const situasi = [
  {
    key: "M6-P1-L1-2" as const,
    label: "Kotak penyimpanan mainan",
    alt: "Kotak penyimpanan mainan berisi bola dan kubus kecil",
  },
  {
    key: "M6-P1-L1-3" as const,
    label: "Akuarium",
    alt: "Dua akuarium berisi ikan dan tanaman air",
  },
  {
    key: "M6-P1-L1-4" as const,
    label: "Gudang kardus",
    alt: "Tumpukan kardus di dalam gudang",
  },
];

export default async function Materi6Peta1Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarHero, ...gambarSituasi] = await Promise.all([
    getPageImage("M6-P1-L1-1"),
    ...situasi.map((s) => getPageImage(s.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={2} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 6
        </div>
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

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-5 sm:p-7 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <EditablePageImage
          imageKey="M6-P1-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa menyusun kubus satuan menjadi balok dan mengamati prisma"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[16px] overflow-hidden bg-[#EFF4FF]"
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl py-3.5 px-4 flex items-start gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
              className="mt-0.5 flex-shrink-0"
            >
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm font-semibold text-[#374151] leading-[1.5]">
              Menurutmu, bagaimana cara mengetahui banyaknya ruang di dalam
              sebuah bangun?
            </p>
          </div>
          <div className="bg-white rounded-2xl py-3.5 px-4 flex items-start gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
              className="mt-0.5 flex-shrink-0"
            >
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm font-semibold text-[#374151] leading-[1.5]">
              Bisakah volume suatu bangun ditentukan tanpa menghitung kubus
              satuan satu per satu?{" "}
              <span className="text-[#DC2626] font-bold">
                Ayo, kita selidiki!
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Pada submateri ini kamu akan menyelidiki hubungan antara ukuran alas
          atau penampang, banyak lapisan pada kubus dan balok, panjang prisma,
          dan <span className="text-[#DC2626] font-bold">volume</span> bangun
          melalui pengamatan, diskusi, GeoGebra 3D, dan{" "}
          <em>Augmented Reality (AR)</em>.
        </p>
        <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D97706"
            strokeWidth="2"
            className="mt-0.5 flex-shrink-0"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Tidak hanya ada satu cara untuk menentukan volume suatu bangun.
            Kemukakan dugaan dan coba berbagai strategi melalui kegiatan
            berikut.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengapa Bangun Ruang Memiliki Volume?
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
          {pertanyaanPemantik.map((teks) => (
            <div key={teks} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D97706] flex-shrink-0" />
              <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
                {teks}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati dan Bandingkan Situasi Berikut
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {situasi.map((s, i) => (
            <div
              key={s.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <div className="relative">
                <EditablePageImage
                  imageKey={s.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 2)}
                  src={gambarSituasi[i]}
                  alt={s.alt}
                  editable={editFoto}
                  containerClassName="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden"
                  imageClassName="object-contain"
                />
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow">
                  {i + 1}
                </div>
              </div>
              <p className="m-0 text-center text-sm font-bold text-[#1D4ED8]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <label
            htmlFor="informasi_ukuran"
            className="text-sm font-bold text-[#111827]"
          >
            Informasi ukuran apa yang menurutmu diperlukan untuk menentukan
            banyaknya ruang yang tersedia pada ketiga benda tersebut?
          </label>
          <textarea
            id="informasi_ukuran"
            name="answers.informasi_ukuran"
            defaultValue={getValue("informasi_ukuran")}
            rows={3}
            placeholder="Ketik jawabanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
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
