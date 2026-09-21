import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Limas = {
  label: string;
  color: string;
  bg: string;
  border: string;
  limasKey: PageImageKey;
  jaringKey: PageImageKey;
  limasUrutan: string;
  jaringUrutan: string;
  keterangan: string[];
};

const limasList: Limas[] = [
  {
    label: "Limas Segitiga",
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    limasKey: "M4-P2-L1-2",
    jaringKey: "M4-P2-L1-3",
    limasUrutan: "2",
    jaringUrutan: "3",
    keterangan: ["memiliki 1 alas berbentuk segitiga;", "memiliki 3 sisi tegak berbentuk segitiga."],
  },
  {
    label: "Limas Segiempat",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    limasKey: "M4-P2-L1-4",
    jaringKey: "M4-P2-L1-5",
    limasUrutan: "4",
    jaringUrutan: "5",
    keterangan: ["memiliki 1 alas berbentuk persegi;", "memiliki 4 sisi tegak berbentuk segitiga."],
  },
  {
    label: "Limas Segilima",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    limasKey: "M4-P2-L1-6",
    jaringKey: "M4-P2-L1-7",
    limasUrutan: "6",
    jaringUrutan: "7",
    keterangan: ["memiliki 1 alas berbentuk segilima;", "memiliki 5 sisi tegak berbentuk segitiga."],
  },
];

export default async function Materi4Peta2Step1AyoMengamati({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [heroImage, ...limasImages] = await Promise.all([
    getPageImage("M4-P2-L1-1"),
    ...limasList.flatMap((l) => [getPageImage(l.limasKey), getPageImage(l.jaringKey)]),
  ]);

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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-5 items-center bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-base font-bold text-[#2563EB]">Ayo Mengamati!</p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Perhatikan bentuk alas dan sisi-sisi tegak pada setiap limas.{" "}
            <span className="font-bold text-[#111827]">Apa yang sama dan apa yang berbeda?</span>
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P2-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa mengamati model limas dan jaring-jaringnya dengan laptop"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-2xl"
        />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {limasList.map((l, i) => (
            <div
              key={l.label}
              className="rounded-[20px] p-4 flex flex-col items-center gap-3 border"
              style={{ backgroundColor: l.bg, borderColor: l.border }}
            >
              <p className="m-0 text-sm font-bold" style={{ color: l.color }}>
                {l.label}
              </p>
              <EditablePageImage
                imageKey={l.limasKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={l.limasUrutan}
                src={limasImages[i * 2]}
                alt={`${l.label} tertutup`}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-square max-w-[200px] rounded-xl overflow-hidden bg-white"
              />
              <div className="flex flex-col items-center gap-1 text-xs font-semibold text-[#6B7280]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.4">
                  <path d="M12 5v14M5 13l7 7 7-7" />
                </svg>
                Jaring-jaring
              </div>
              <EditablePageImage
                imageKey={l.jaringKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={l.jaringUrutan}
                src={limasImages[i * 2 + 1]}
                alt={`Jaring-jaring ${l.label}`}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-square max-w-[200px] rounded-xl overflow-hidden bg-white"
              />
              <div className="w-full bg-white/80 rounded-2xl p-3.5 flex flex-col gap-1.5">
                <p className="m-0 text-xs font-bold text-[#374151]">Keterangan:</p>
                {l.keterangan.map((k) => (
                  <div key={k} className="flex items-start gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={l.color} strokeWidth="3" className="mt-0.5 flex-shrink-0">
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
