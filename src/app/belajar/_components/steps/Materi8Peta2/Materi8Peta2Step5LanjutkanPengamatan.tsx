import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import type { PageImageKey } from "@/lib/pageImages";

type Hitung = {
  key: PageImageKey;
  imgStep: string;
  imgUrutan: string;
  judul: string;
  alt: string;
  kecil: { name: string; label: string };
  besar: { name: string; label: string };
};

const hitung: Hitung[] = [
  {
    key: "M8-P2-L5-2",
    imgStep: "5",
    imgUrutan: "2",
    judul: "Kubus",
    alt: "Kubus kecil rusuk 2 cm dan kubus besar rusuk 4 cm",
    kecil: { name: "v_kubus_kecil", label: "Kubus kecil" },
    besar: { name: "v_kubus_besar", label: "Kubus besar" },
  },
  {
    key: "M8-P2-L1-3",
    imgStep: "1",
    imgUrutan: "3",
    judul: "Balok",
    alt: "Balok kecil 2 × 3 × 4 dan balok besar 4 × 6 × 8",
    kecil: { name: "v_balok_kecil", label: "Balok kecil" },
    besar: { name: "v_balok_besar", label: "Balok besar" },
  },
  {
    key: "M8-P2-L1-4",
    imgStep: "1",
    imgUrutan: "4",
    judul: "Prisma Segitiga",
    alt: "Prisma segitiga kecil dan prisma segitiga besar hasil skala k = 2",
    kecil: { name: "v_prisma_kecil", label: "Prisma kecil" },
    besar: { name: "v_prisma_besar", label: "Prisma besar" },
  },
  {
    key: "M8-P2-L1-5",
    imgStep: "1",
    imgUrutan: "5",
    judul: "Limas Segiempat",
    alt: "Limas segiempat kecil dan limas segiempat besar hasil skala k = 2",
    kecil: { name: "v_limas_kecil", label: "Limas kecil" },
    besar: { name: "v_limas_besar", label: "Limas besar" },
  },
];

export default async function Materi8Peta2Step5LanjutkanPengamatan({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarHero, ...gambarHitung] = await Promise.all([
    getPageImage("M8-P2-L5-1"),
    ...hitung.map((h) => getPageImage(h.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={8} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-[#FEF9E7] border border-[#F5E3A0] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[1fr_240px] gap-5 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
            </svg>
            <h2 className="m-0 text-lg font-extrabold text-[#92400E]">Ingat!</h2>
          </div>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Faktor skala <span className="font-bold text-[#2563EB]">k = 2</span> berarti setiap ukuran panjang pada bangun hasil skala menjadi <span className="font-bold text-[#2563EB]">2</span> kali ukuran semula.
          </p>
          <div className="bg-white border border-[#F5E3A0] rounded-full py-2 px-4 text-sm font-bold text-[#1E3A8A] w-fit">
            Ukuran baru = <span className="italic">k</span> × ukuran lama (<span className="italic">k</span> = 2)
          </div>
        </div>
        <EditablePageImage
          imageKey="M8-P2-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Dua siswa mengamati bangun ruang dengan kaca pembesar"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Lanjutkan Pengamatanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Hitunglah volume masing-masing bangun, kemudian bandingkan hasilnya.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {hitung.map((h, i) => (
            <div key={h.key} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <span className="inline-flex w-fit bg-[#2563EB] text-white rounded-full py-1 px-3.5 text-xs font-bold">
                {h.judul}
              </span>
              <EditablePageImage
                imageKey={h.key}
                materi={materi}
                peta={peta}
                step={h.imgStep}
                urutan={h.imgUrutan}
                src={gambarHitung[i]}
                alt={h.alt}
                editable={editFoto}
                natural
                containerClassName="relative w-full overflow-hidden"
              />
              <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3 flex flex-col gap-2">
                <p className="m-0 text-xs font-bold text-[#166534]">Hitunglah volume:</p>
                {[h.kecil, h.besar].map((v) => (
                  <label key={v.name} className="flex flex-wrap items-center gap-2 text-sm text-[#374151]">
                    <span className="w-24 font-semibold">{v.label}</span>
                    V =
                    <input
                      name={`answers.${v.name}`}
                      defaultValue={getValue(v.name)}
                      inputMode="decimal"
                      required
                      className="w-24 rounded-xl border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                    cm³
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-3">
          <label htmlFor="pola_sama" className="flex items-start gap-2.5 text-sm font-bold text-[#166534] leading-[1.5]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Apakah semua pasangan bangun menunjukkan pola perubahan volume yang sama? Tuliskan hasil pengamatanmu.
          </label>
          <textarea
            id="pola_sama"
            name="answers.pola_sama"
            defaultValue={getValue("pola_sama")}
            rows={3}
            placeholder="Ketik hasil pengamatanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y bg-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
