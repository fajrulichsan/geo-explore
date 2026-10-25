import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";

const ingat = [
  "Jaring-jaring merupakan susunan sisi-sisi bangun ruang pada bidang datar.",
  "Jaring-jaring valid dapat dilipat membentuk bangun ruang tanpa saling bertumpuk.",
  "Satu bangun ruang dapat memiliki lebih dari satu jaring-jaring.",
  "Keempat syarat di atas harus terpenuhi bersama-sama.",
];

const temuan = [
  { ikon: "👁️", teks: "Dari pengamatan, bentuk susunan bidang mempengaruhi hasil lipatan." },
  { ikon: "👥", teks: "Diskusi menunjukkan satu bangun ruang dapat memiliki beberapa bentuk jaring-jaring." },
  { ikon: "💻", teks: "GeoGebra 3D membantu melihat proses membuka bangun ruang menjadi jaring-jaring." },
  { ikon: "📱", teks: "Augmented Reality (AR) membantu memeriksa apakah lipatan benar-benar membentuk bangun ruang." },
  { ikon: "💡", teks: "Verifikasi membantu memastikan jaring-jaring valid dapat dilipat menjadi bangun ruang tanpa ada sisi yang bertumpuk atau terlepas." },
];

const kataKunci = [
  { label: "Jaring-jaring", ikon: "✚" },
  { label: "Garis lipatan", ikon: "┄" },
  { label: "Garis potong", ikon: "✂️" },
];

export default async function Materi2Peta10Step3PetaKonsepKataKunci({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();

  function ikon({ kunci, urutan, alt }: { kunci: PageImageKey; urutan: string; alt: string }) {
    return (
      <EditablePageImage
        imageKey={kunci}
        materi={materi}
        peta={peta}
        step={step}
        urutan={urutan}
        src={img[kunci]}
        alt={alt}
        editable={editFoto}
        imageClassName="object-contain"
        containerClassName="relative w-full h-14"
      />
    );
  }

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mini Peta Konsep
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <EditablePageImage
              imageKey="M2-P10-L3-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={img["M2-P10-L3-3"]}
              alt="Peta konsep: bangun ruang sisi datar, jaring-jaring, empat syarat, bangun ruang utuh, banyak jaring-jaring"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 flex flex-col gap-2.5">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">💡 Ingat!</p>
            <EditablePageImage
              imageKey="M2-P10-L3-4"
              materi={materi}
              peta={peta}
              step={step}
              urutan="4"
              src={img["M2-P10-L3-4"]}
              alt="Potongan puzzle ungu dengan bintang dan roda gigi"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-24"
            />
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#374151]">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hal yang Ditemukan Selama Belajar
          </div>
        </div>
          <ul className="m-0 p-4 list-none flex flex-col gap-3 bg-white border border-[#E5E7EB] rounded-[20px]">
            {temuan.map((t) => (
              <li key={t.teks} className="flex items-center gap-3 border-b border-dashed border-[#DBEAFE] pb-3 last:border-0 last:pb-0">
                <span className="w-10 h-10 rounded-full bg-[#EFF4FF] flex items-center justify-center text-xl flex-shrink-0">{t.ikon}</span>
                <p className="m-0 text-[13px] leading-[1.5] font-semibold text-[#1E3A8A]">{t.teks}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kata Kunci
          </div>
        </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {kataKunci.slice(0, 2).map((k) => (
              <div key={k.label} className="rounded-xl bg-[#F8FAFF] border border-[#E5E7EB] p-2 flex flex-col items-center gap-1">
                <p className="m-0 text-[11px] font-bold text-[#1E3A8A] text-center">{k.label}</p>
                <span className="text-2xl h-14 flex items-center">{k.ikon}</span>
              </div>
            ))}
            <div className="rounded-xl bg-[#F8FAFF] border border-[#E5E7EB] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A] text-center">Lipatan</p>
              {ikon({ kunci: "M2-P10-L3-5", urutan: "5", alt: "Lipatan jaring-jaring" })}
            </div>
            <div className="rounded-xl bg-[#F8FAFF] border border-[#E5E7EB] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A] text-center">{kataKunci[2].label}</p>
              <span className="text-2xl h-14 flex items-center">{kataKunci[2].ikon}</span>
            </div>
            <div className="col-span-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-3 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Jaring-jaring valid</p>
              {ikon({ kunci: "M2-P10-L3-6", urutan: "6", alt: "Tanda centang hijau" })}
            </div>
            <div className="col-span-2 rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-3 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Jaring-jaring tidak valid</p>
              {ikon({ kunci: "M2-P10-L3-7", urutan: "7", alt: "Tanda silang merah" })}
            </div>
            <div className="rounded-xl bg-[#F5F0FF] border border-[#DDD0FA] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Kubus</p>
              {ikon({ kunci: "M2-P10-L3-8", urutan: "8", alt: "Bangun kubus" })}
            </div>
            <div className="rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Balok</p>
              {ikon({ kunci: "M2-P10-L3-9", urutan: "9", alt: "Bangun balok" })}
            </div>
            <div className="rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Prisma</p>
              {ikon({ kunci: "M2-P10-L3-1", urutan: "1", alt: "Bangun prisma segitiga" })}
            </div>
            <div className="rounded-xl bg-[#FFF7ED] border border-[#FED7AA] p-2 flex flex-col items-center gap-1">
              <p className="m-0 text-[11px] font-bold text-[#1E3A8A]">Limas</p>
              {ikon({ kunci: "M2-P10-L3-2", urutan: "2", alt: "Bangun limas segiempat" })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
