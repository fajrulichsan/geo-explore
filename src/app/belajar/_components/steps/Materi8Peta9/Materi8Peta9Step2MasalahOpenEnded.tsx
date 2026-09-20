import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { HiddenStepFields, RevealImage, SectionTitle, StepFooter, StepTitle, SUBTITLE, TextAreaField, cardClass, readAnswers } from "./Materi8Peta9Parts";

const STEP = 2;

const faktor = [
  { v: "2", l: "× 2" },
  { v: "3", l: "× 3" },
  { v: "1/2", l: "× ½" },
];

const perhatikan = [
  "Faktor skala × 2 dan × 3 membuat model lebih besar, sedangkan faktor skala × ½ membuat model lebih kecil.",
  "Setiap ukuran panjang (rusuk/sisi) pada model hasil skala berubah dengan faktor k.",
  "Akibatnya, volume juga berubah dengan faktor k³.",
  "Semua pilihan (2, 3, atau ½) dapat digunakan.",
];

export default async function Materi8Peta9Step2MasalahOpenEnded({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const [prisma, pengingat] = await Promise.all([getPageImage("M8-P9-L2-1"), getPageImage("M8-P9-L2-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Masalah Open-Ended" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4">
          <div className={`${cardClass} flex flex-col gap-4`}>
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Sebuah miniatur prisma segitiga mempunyai volume <strong>96 cm³</strong>.
            </p>
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Miniatur tersebut akan <strong>diubah skalanya</strong> menjadi model hasil skala dengan beberapa pilihan faktor skala berikut.
            </p>
            <fieldset className="m-0 border border-[#FDE68A] bg-[#FEF9E7] rounded-xl px-4 py-3 flex flex-col gap-2.5">
              <legend className="px-1 text-sm font-extrabold text-[#92400E]">Pilih salah satu faktor skala:</legend>
              <div className="flex gap-2.5">
                {faktor.map((f) => (
                  <label key={f.v} className="cursor-pointer flex-1">
                    <input type="radio" name="answers.faktor_skala" value={f.v} defaultChecked={getValue("faktor_skala") === f.v} required className="peer sr-only" />
                    <span className="block text-center rounded-xl border border-[#2563EB] bg-white px-3 py-2 text-lg font-extrabold text-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#93C5FD]">
                      {f.l}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Gunakan lebih dari satu strategi untuk menentukan volume hasil skala model baru untuk faktor skala yang kamu pilih.
            </p>
            <p className="m-0 text-sm font-semibold text-[#2563EB] leading-[1.7]">
              Tidak harus menghitung dengan satu cara saja. Jelaskan alasan matematis pada setiap strategi yang kamu gunakan.
            </p>
          </div>

          <div className="bg-white border border-[#BBF7D0] rounded-[20px] p-4 flex flex-col gap-3">
            <p className="m-0 text-center text-xs font-bold text-[#1E3A8A]">Model hasil skala (akan berubah sesuai pilihan k)</p>
            <EditablePageImage
              imageKey="M8-P9-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={prisma}
              alt="Prisma segitiga miniatur dengan volume awal 96 cm³ diskala dengan faktor k menjadi model hasil skala"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-square"
            />
            <p className="m-0 text-xs text-[#92400E] bg-[#FEF9E7] rounded-lg px-3 py-2">Ukuran model pada gambar akan berubah setelah kamu memilih faktor skala.</p>
          </div>
        </div>

        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-5 flex flex-col gap-2.5">
          <h3 className="m-0 text-base font-extrabold text-[#DC2626]">Perhatikan!</h3>
          <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {perhatikan.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#DC2626] flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <RevealImage label="Lihat Pengingat" hint="Butuh pengingat tentang hubungan faktor skala dan volume?">
          <EditablePageImage
            imageKey="M8-P9-L2-2"
            materi={materi}
            peta={peta}
            step="2"
            urutan="2"
            src={pengingat}
            alt="Ingat kembali: faktor skala memengaruhi setiap ukuran panjang, volume berubah k³, rumus V hasil skala = k³ × V awal"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-xl"
          />
        </RevealImage>

        <div className={cardClass}>
          <TextAreaField name="catatan" label="Catatan: tuliskan semua informasi penting dari masalah ini." value={getValue("catatan")} rows={4} />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
