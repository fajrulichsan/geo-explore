import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const contohLimas = [
  {
    key: "M7-P1-L1-3" as const,
    label: "Atap rumah",
    catatan: "Memperkirakan ruang di dalam atap.",
    alt: "Rumah dengan atap berbentuk limas",
  },
  {
    key: "M7-P1-L1-4" as const,
    label: "Tenda",
    catatan: "Memperkirakan kapasitas ruangnya.",
    alt: "Tenda berbentuk limas di area berumput",
  },
  {
    key: "M7-P1-L1-5" as const,
    label: "Piramida Mesir",
    catatan: "Contoh limas yang terkenal.",
    alt: "Piramida Mesir di gurun",
  },
];

export default async function Materi7Peta1Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarHero, gambarStrip, gambarJenis, ...gambarContoh] =
    await Promise.all([
      getPageImage("M7-P1-L1-1"),
      getPageImage("M7-P1-L1-2"),
      getPageImage("M7-P1-L1-6"),
      ...contohLimas.map((c) => getPageImage(c.key)),
    ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 7
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
            Volume Limas
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-5 sm:p-7 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <p className="relative m-0 text-sm sm:text-base font-semibold text-white/95 leading-[1.6] max-w-2xl">
          Kita akan menemukan sendiri rumus volume limas melalui pengamatan dan
          perbandingan limas prisma yang memiliki luas alas dan tinggi yang
          sama.
        </p>
        <EditablePageImage
          imageKey="M7-P1-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa di perpustakaan sedang berdiskusi tentang hubungan volume limas dan prisma"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[16px] overflow-hidden bg-[#EFF4FF]"
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl py-3.5 px-4 flex flex-col gap-2">
            <span className="text-sm font-extrabold text-[#D97706]">
              Ayo, Pikirkan!
            </span>
            <p className="m-0 text-sm font-semibold text-[#374151] leading-[1.5]">
              Menurutmu, bagaimana cara menentukan banyak ruang di dalam limas?
              Apa yang bisa kita lakukan untuk menemukannya?
            </p>
            <span className="text-sm font-bold text-[#D97706]">
              Ayo, kita eksplorasi bersama!
            </span>
          </div>
          <div className="bg-white rounded-2xl py-3.5 px-4 flex flex-col justify-center gap-2">
            <p className="m-0 text-base font-extrabold text-[#1D4ED8] leading-[1.4]">
              Apakah ada hubungan antara volume limas dan prisma?
            </p>
          </div>
          <div className="bg-white rounded-2xl py-3.5 px-4 flex flex-col gap-2">
            <span className="text-sm font-extrabold text-[#DC2626]">
              Ingat!
            </span>
            <p className="m-0 text-sm font-semibold text-[#374151] leading-[1.5]">
              Saat membandingkan volume limas dan prisma, pastikan luas alas
              sama (L) dan tinggi sama (t).
            </p>
            <span className="text-sm font-bold text-[#6D28D9]">
              Apa hubungan volumenya? Yuk, kita temukan!
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <EditablePageImage
          imageKey="M7-P1-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambarStrip}
          alt="Limas di dalam prisma dan tiga limas dengan luas alas L dan tinggi t yang sama dibandingkan dengan satu prisma"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengapa Volume Limas Perlu Dipelajari?
          </div>
        </div>

        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Bangun berbentuk limas banyak kita temui dalam kehidupan sehari-hari,
          seperti atap rumah, tenda, dan piramida. Mengetahui volumenya membantu
          kita memperkirakan banyaknya ruang yang dapat digunakan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contohLimas.map((c, i) => (
            <div
              key={c.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <div className="relative">
                <EditablePageImage
                  imageKey={c.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 3)}
                  src={gambarContoh[i]}
                  alt={c.alt}
                  editable={editFoto}
                  containerClassName="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden"
                  imageClassName="object-contain"
                />
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow">
                  {i + 1}
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center">
                <p className="m-0 text-sm font-bold text-[#1D4ED8]">
                  {c.label}
                </p>
                <p className="m-0 text-xs text-[#6B7280]">{c.catatan}</p>
              </div>
            </div>
          ))}
        </div>

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
            Kita akan mempelajari volume limas melalui pengamatan, diskusi, dan
            eksplorasi menggunakan GeoGebra 3D serta Augmented Reality (AR).
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengenal Berbagai Jenis Limas
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Limas dapat dibedakan berdasarkan bentuk alasnya. Berikut beberapa
          contohnya.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 sm:p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M7-P1-L1-6"
            materi={materi}
            peta={peta}
            step={step}
            urutan="6"
            src={gambarJenis}
            alt="Tiga jenis limas: limas segiempat, limas segitiga, dan limas segi-n beserta cirinya"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <label
            htmlFor="dugaan_jenis_limas"
            className="text-sm font-bold text-[#111827]"
          >
            Apakah cara menentukan volume berbagai jenis limas tersebut akan
            sama? Jelaskan dugaanmu.
          </label>
          <textarea
            id="dugaan_jenis_limas"
            name="answers.dugaan_jenis_limas"
            defaultValue={getValue("dugaan_jenis_limas")}
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
