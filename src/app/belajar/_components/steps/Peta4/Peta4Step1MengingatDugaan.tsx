import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangun: { key: PageImageKey; urutan: string; nama: string; keterangan?: string }[] = [
  { key: "M1-P4-L1-2", urutan: "2", nama: "Kubus" },
  { key: "M1-P4-L1-3", urutan: "3", nama: "Balok" },
  { key: "M1-P4-L1-4", urutan: "4", nama: "Prisma Segitiga", keterangan: "dua alas segitiga sejajar dan kongruen" },
  { key: "M1-P4-L1-5", urutan: "5", nama: "Limas Segiempat", keterangan: "alas berbentuk persegi" },
  { key: "M1-P4-L1-6", urutan: "6", nama: "Limas Segitiga", keterangan: "alas berbentuk segitiga" },
];

export default async function Peta4Step1MengingatDugaan({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [maskot, ...gambarBangun] = await Promise.all([
    getPageImage("M1-P4-L1-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengeksplorasi dengan GeoGebra 3D
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="inline-flex items-center gap-2 text-sm font-extrabold text-[#92400E]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
            </svg>
            Ingat!
          </div>
          <p className="m-0 text-sm leading-[1.7] text-[#78350F]">
            Pada tahap ini, kita mencari informasi yang diperlukan untuk menyelidiki dugaan kelompokmu, belum
            menyimpulkan kebenaran dugaan tersebut.
          </p>
        </div>
        <EditablePageImage
          imageKey="M1-P4-L1-1"
          materi={materi}
          peta={peta}
          step="1"
          urutan="1"
          src={maskot}
          alt="Maskot siswi berhijab menunjuk ke atas"
          editable={editFoto}
          imageClassName="object-cover"
          containerClassName="relative w-full md:w-1/2 aspect-[3/2] flex-shrink-0 rounded-2xl overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengingat Dugaan Kelompok
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div className="flex flex-col gap-3 text-[15px] leading-[1.7] text-[#374151]">
            <p className="m-0">Pada tahap sebelumnya, kelompokmu telah membuat dugaan tentang cara mengelompokkan bangun ruang.</p>
            <p className="m-0 font-semibold text-[#2563EB]">Sekarang saatnya mencari informasi yang diperlukan untuk menyelidiki dugaan tersebut.</p>
          </div>

          <div className="bg-[#FFF8E6] border border-[#FCE7B2] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              Informasi yang akan kami cari
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </div>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                <input
                  type="text"
                  name={`answers.informasi_dicari_${n}`}
                  defaultValue={getValue(`informasi_dicari_${n}`)}
                  required={n === 1}
                  placeholder={n === 1 ? "Tuliskan informasi yang akan dicari..." : "Informasi lainnya (opsional)"}
                  className="w-full bg-transparent border-0 border-b border-dashed border-[#D6C79B] px-1 py-1.5 text-sm text-[#374151] placeholder:text-[#B8AD8A] focus:border-[#2563EB] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-4">
          <div className="inline-flex items-center bg-[#EFF4FF] text-[#1E3A8A] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Bangun ruang yang akan kamu amati
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Pilih bangun yang perlu kamu amati sesuai dugaan kelompokmu. Ulangi pengamatan pada bangun lain jika diperlukan.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {bangun.map((b, i) => (
              <div key={b.key} className="flex flex-col items-center gap-2 rounded-2xl border border-[#E5E7EB] p-3 text-center">
                <span className="self-start w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <EditablePageImage
                  imageKey={b.key}
                  materi={materi}
                  peta={peta}
                  step="1"
                  urutan={b.urutan}
                  src={gambarBangun[i]}
                  alt={b.nama}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full aspect-square"
                />
                <p className="m-0 text-sm font-bold text-[#2563EB] leading-tight">{b.nama}</p>
                {b.keterangan && <p className="m-0 text-xs text-[#6B7280] leading-snug">({b.keterangan})</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <NextStepButton />
      </div>
    </form>
  );
}
