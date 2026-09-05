import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const limasList = [
  {
    key: "segitiga",
    label: "Limas Segitiga",
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    keterangan: ["memiliki 1 alas berbentuk segitiga;", "memiliki 3 sisi tegak berbentuk segitiga."],
  },
  {
    key: "segiempat",
    label: "Limas Segiempat",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    keterangan: ["memiliki 1 alas berbentuk persegi;", "memiliki 4 sisi tegak berbentuk segitiga."],
  },
  {
    key: "segilima",
    label: "Limas Segilima",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    keterangan: ["memiliki 1 alas berbentuk segilima;", "memiliki 5 sisi tegak berbentuk segitiga."],
  },
] as const;

function BangunSvg({ jenis, color }: { jenis: (typeof limasList)[number]["key"]; color: string }) {
  if (jenis === "segitiga") {
    return (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M45 6 L82 62 L8 62 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" />
        <path d="M45 6 L45 62 M45 6 L26.5 62 M45 62 L26.5 62" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>
    );
  }
  if (jenis === "segiempat") {
    return (
      <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
        <path d="M45 6 L82 62 L45 66 L8 62 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" />
        <path d="M45 6 L45 66 M8 62 L82 62" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>
    );
  }
  return (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
      <path d="M45 6 L78 34 L64 64 L26 64 L12 34 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" />
      <path d="M45 6 L45 47 M45 47 L64 64 M45 47 L26 64 M45 47 L12 34 M45 47 L78 34" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
    </svg>
  );
}

function JaringSvg({ jenis, color }: { jenis: (typeof limasList)[number]["key"]; color: string }) {
  if (jenis === "segitiga") {
    return (
      <svg width="140" height="110" viewBox="0 0 140 110" fill="none">
        <path d="M70 10 L130 95 L10 95 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
        <path d="M70 10 L70 95 M40 52.5 L100 52.5 M40 52.5 L70 10 M100 52.5 L70 10" stroke={color} strokeWidth="1.3" />
      </svg>
    );
  }
  if (jenis === "segiempat") {
    return (
      <svg width="140" height="110" viewBox="0 0 140 110" fill="none">
        <path
          d="M70 8 L86 40 L118 40 L100 55 L118 70 L86 70 L70 100 L54 70 L22 70 L40 55 L22 40 L54 40 Z"
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="2"
        />
        <rect x="54" y="40" width="32" height="30" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.3" />
      </svg>
    );
  }
  const cx = 70;
  const cy = 55;
  const outerR = 48;
  const innerR = 20;
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  const innerPoints: string[] = [];
  for (let i = 0; i < 5; i++) {
    const angle = ((2 * Math.PI) / 5) * i - Math.PI / 2;
    innerPoints.push(`${cx + innerR * Math.cos(angle)},${cy + innerR * Math.sin(angle)}`);
  }
  return (
    <svg width="140" height="110" viewBox="0 0 140 110" fill="none">
      <polygon points={points.join(" ")} fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <polygon points={innerPoints.join(" ")} fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}

export default async function Materi4Peta2Step1AmatiBangunRuang({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const heroImage = await getPageImage("M4-P2-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengamati dan Berpikir
        </h1>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#2563EB] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              Ayo Mengamati!
            </p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Perhatikan bentuk alas dan sisi-sisi tegak pada setiap limas.{" "}
              <span className="font-bold text-[#111827]">
                Apa yang sama dan apa yang berbeda?
              </span>
            </p>
          </div>
          <EditablePageImage
            imageKey="M4-P2-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa mengamati bangun ruang limas dan jaring-jaringnya di laptop"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-64 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-white/60"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Bangun Ruang Berikut
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {limasList.map((limas) => (
            <div
              key={limas.key}
              className="rounded-[20px] p-5 flex flex-col items-center gap-3 border"
              style={{ backgroundColor: limas.bg, borderColor: limas.border }}
            >
              <p className="m-0 text-sm font-bold" style={{ color: limas.color }}>
                {limas.label}
              </p>
              <BangunSvg jenis={limas.key} color={limas.color} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
                <path d="M12 5v14M5 13l7 7 7-7" />
              </svg>
              <p className="m-0 text-xs font-semibold text-[#6B7280]">Jaring-jaring</p>
              <JaringSvg jenis={limas.key} color={limas.color} />
              <div className="w-full bg-white/70 rounded-2xl p-3.5 flex flex-col gap-1.5">
                <p className="m-0 text-xs font-bold text-[#374151]">Keterangan:</p>
                {limas.keterangan.map((k) => (
                  <div key={k} className="flex items-start gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={limas.color} strokeWidth="3" className="mt-0.5 flex-shrink-0">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-[#374151] leading-[1.4]">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
