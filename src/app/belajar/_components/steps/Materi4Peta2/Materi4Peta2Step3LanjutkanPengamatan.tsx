import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const limasList = [
  { key: "segitiga", label: "Limas Segitiga", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
  { key: "segiempat", label: "Limas Segiempat", color: "#EA580C", bg: "#FFF7ED", border: "#FED7AA" },
  { key: "segilima", label: "Limas Segilima", color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
] as const;

function JaringLabeledSvg({ jenis, color }: { jenis: (typeof limasList)[number]["key"]; color: string }) {
  if (jenis === "segitiga") {
    return (
      <svg width="160" height="130" viewBox="0 0 160 130" fill="none">
        <path d="M80 12 L140 100 L20 100 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
        <path d="M80 12 L80 100 M50 56 L110 56 M50 56 L80 12 M110 56 L80 12" stroke={color} strokeWidth="1.3" />
        <text x="86" y="34" fontSize="9" fontWeight="700" fill={color}>sisi tegak</text>
        <path d="M100 40 L92 44" stroke={color} strokeWidth="1.3" markerEnd="url(#arrow)" />
        <text x="60" y="112" fontSize="9" fontWeight="700" fill={color}>alas</text>
        <path d="M75 108 L80 100" stroke={color} strokeWidth="1.3" />
      </svg>
    );
  }
  if (jenis === "segiempat") {
    return (
      <svg width="160" height="130" viewBox="0 0 160 130" fill="none">
        <path
          d="M80 10 L98 45 L134 45 L114 61 L134 77 L98 77 L80 112 L62 77 L26 77 L46 61 L26 45 L62 45 Z"
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="2"
        />
        <rect x="62" y="45" width="36" height="32" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.3" />
        <text x="100" y="34" fontSize="9" fontWeight="700" fill={color}>sisi tegak</text>
        <path d="M104 38 L92 46" stroke={color} strokeWidth="1.3" />
        <text x="106" y="66" fontSize="9" fontWeight="700" fill={color}>alas</text>
        <path d="M104 62 L98 61" stroke={color} strokeWidth="1.3" />
      </svg>
    );
  }
  const cx = 80;
  const cy = 63;
  const outerR = 52;
  const innerR = 22;
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
    <svg width="160" height="130" viewBox="0 0 160 130" fill="none">
      <polygon points={points.join(" ")} fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <polygon points={innerPoints.join(" ")} fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.3" />
      <text x="104" y="26" fontSize="9" fontWeight="700" fill={color}>sisi tegak</text>
      <path d="M108 30 L98 40" stroke={color} strokeWidth="1.3" />
      <text x="108" y="100" fontSize="9" fontWeight="700" fill={color}>alas</text>
      <path d="M106 96 L94 82" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}

export default async function Materi4Peta2Step3LanjutkanPengamatan({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengamati dan Berpikir
        </h1>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-start gap-3">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="mt-0.5 flex-shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <p className="m-0 text-sm font-bold text-[#1D4ED8]">Lanjutkan Pengamatanmu!</p>
      </div>
      <p className="m-0 text-sm leading-[1.6] text-[#374151]">
        Dari ketiga jaring-jaring di atas, tampak satu alas dan beberapa sisi tegak berbentuk
        segitiga.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Lanjutkan Pengamatan
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
              <JaringLabeledSvg jenis={limas.key} color={limas.color} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-center justify-center gap-2.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
        <p className="m-0 text-sm font-bold text-[#78350F] text-center">
          Setiap jaring-jaring terdiri dari 1 alas dan beberapa sisi tegak berbentuk segitiga.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
