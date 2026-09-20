import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import type { PageImageKey } from "@/lib/pageImages";

type Bangun = {
  key: PageImageKey;
  urutan: string;
  judul: string;
  alt: string;
  tanya?: { judul: string; opsi: { name: string; label: string }[] };
  catatan: string;
};

const bangun: Bangun[] = [
  {
    key: "M8-P2-L1-2",
    urutan: "2",
    judul: "1. Kubus",
    alt: "Kubus kecil rusuk 2 cm diperbesar dengan k = 2 menjadi kubus besar rusuk 4 cm",
    tanya: {
      judul: "Apa yang berubah?",
      opsi: [
        { name: "kubus_panjang_rusuk", label: "panjang rusuk" },
        { name: "kubus_jumlah_sisi", label: "jumlah sisi" },
        { name: "kubus_bentuk", label: "bentuk bangun" },
        { name: "kubus_volume", label: "volume" },
      ],
    },
    catatan: "4 cm = 2 × 2 cm → Semua rusuk diperbesar 2 kali.",
  },
  {
    key: "M8-P2-L1-3",
    urutan: "3",
    judul: "2. Balok",
    alt: "Balok kecil 2 × 3 × 4 diperbesar dengan k = 2 menjadi balok besar 4 × 6 × 8",
    tanya: {
      judul: "Bagian mana yang bertambah?",
      opsi: [
        { name: "balok_panjang", label: "panjang" },
        { name: "balok_lebar", label: "lebar" },
        { name: "balok_tinggi", label: "tinggi" },
      ],
    },
    catatan: "4 = 2 × 2 ; 6 = 2 × 3 ; 8 = 2 × 4 → Semua ukuran diperbesar 2 kali.",
  },
  {
    key: "M8-P2-L1-4",
    urutan: "4",
    judul: "3. Prisma Segitiga",
    alt: "Prisma segitiga kecil diperbesar dengan k = 2",
    catatan: "Semua ukuran panjang diperbesar 2 kali.",
  },
  {
    key: "M8-P2-L1-5",
    urutan: "5",
    judul: "4. Limas Segiempat",
    alt: "Limas segiempat kecil diperbesar dengan k = 2",
    catatan: "Semua ukuran panjang diperbesar 2 kali.",
  },
];

export default async function Materi8Peta2Step1PengantarAmati({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "ya";

  const [gambarHero, ...gambarBangun] = await Promise.all([
    getPageImage("M8-P2-L1-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={8} />
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

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-5 items-center">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg font-extrabold text-white">Pengantar</h2>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Perhatikan setiap pasangan bangun ruang berikut. Masing-masing bangun memiliki bentuk yang
            sama, tetapi ukurannya berbeda karena diperbesar dengan faktor skala{" "}
            <span className="font-bold text-white">k = 2</span>.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Amati perubahan panjang setiap ukuran bangun, kemudian pikirkan apakah perubahan tersebut
            juga memengaruhi volumenya.
          </p>
        </div>
        <EditablePageImage
          imageKey="M8-P2-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Dua siswa mengamati bangun ruang di atas meja"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Perubahan Ukuran Bangun
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {bangun.map((b, i) => (
            <div
              key={b.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <span className="inline-flex w-fit bg-[#2563EB] text-white rounded-full py-1 px-3.5 text-xs font-bold">
                {b.judul}
              </span>
              <EditablePageImage
                imageKey={b.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={b.urutan}
                src={gambarBangun[i]}
                alt={b.alt}
                editable={editFoto}
                natural
                containerClassName="relative w-full overflow-hidden"
              />
              {b.tanya && (
                <div className="flex flex-col gap-2 rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] p-3">
                  <p className="m-0 text-xs font-bold text-[#1E3A8A]">{b.tanya.judul}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {b.tanya.opsi.map((o) => (
                      <label key={o.name} className="inline-flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
                        <input
                          type="checkbox"
                          name={`answers.${o.name}`}
                          value="ya"
                          defaultChecked={isChecked(o.name)}
                          className="accent-[#2563EB]"
                        />
                        {o.label}
                      </label>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-start gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-3.5 py-2.5 mt-auto">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="m-0 text-sm text-[#166534] leading-[1.5]">{b.catatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/1/3`}
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
