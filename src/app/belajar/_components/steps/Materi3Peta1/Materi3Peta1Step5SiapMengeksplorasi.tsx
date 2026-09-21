import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Luas permukaan adalah jumlah luas seluruh sisi bangun ruang.",
  "Jaring-jaring membantu melihat seluruh sisi secara utuh.",
  "Setiap sisi harus dihitung tepat satu kali.",
  "Rumus luas permukaan berasal dari sifat-sifat bangun ruang, bukan sekadar dihafal.",
];

const bangun = [
  { key: "M3-P1-L5-2", label: "Kubus" },
  { key: "M3-P1-L5-3", label: "Balok" },
  { key: "M3-P1-L5-4", label: "Prisma Segitiga" },
] as const;

export default async function Materi3Peta1Step5SiapMengeksplorasi({ materi, peta, step = "5", editFoto }: StepComponentProps) {
  const [gambarSiswa, ...gambarBangun] = await Promise.all([
    getPageImage("M3-P1-L5-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 12h16M12 4v16" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Pendahuluan: Luas Permukaan Kubus, Balok, dan Prisma
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat! dan Siap Mengeksplorasi?
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 items-stretch">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-4">
            <p className="m-0 text-base font-extrabold text-[#92400E]">Ingat!</p>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
              {ingat.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <EditablePageImage
          imageKey="M3-P1-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarSiswa}
          alt="Siswa menulis di buku dengan jaring-jaring warna-warni dan kalkulator di meja"
          editable={editFoto}
            natural
          containerClassName="relative w-full mt-auto rounded-2xl overflow-hidden bg-white"
        />
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-base font-extrabold text-[#111827]">Siap Mengeksplorasi?</p>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Gunakan pengamatan, logika, GeoGebra 3D, dan AR untuk menemukan sendiri bagaimana
              rumus luas permukaan terbentuk.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-auto">
              {bangun.map((b, i) => (
                <div key={b.label} className="flex flex-col items-center gap-2">
                  <div className="relative w-full aspect-square">
                    <EditablePageImage
                      imageKey={b.key}
                      materi={materi}
                      peta={peta}
                      step={step}
                      urutan={String(i + 2)}
                      src={gambarBangun[i]}
                      alt={b.label}
                      editable={editFoto}
                      imageClassName="object-contain"
                      containerClassName="relative w-full h-full"
                    />
                  </div>
                  <p className="m-0 text-xs font-bold text-[#374151] text-center">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-[20px] py-5 px-6 text-white">
          <p className="m-0 text-sm font-semibold text-white/90">Ayo mulai perjalanan penemuanmu!</p>
          <p className="m-0 mt-1 text-lg font-extrabold">Menuju Tahap 1: Ayo Mengamati dan Berpikir</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
