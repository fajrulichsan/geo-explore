import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta6Parts";

const STEP = 6;

const faktor = [
  { v: "luas", l: "luas alas" },
  { v: "tinggi", l: "tinggi" },
  { v: "keduanya", l: "keduanya, yaitu luas alas dan tinggi" },
];

export default async function Materi7Peta6Step6HubunganVolume({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const ilustrasi = await getPageImage("M7-P6-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menarik Kesimpulan Verifikasi" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Hubungan Volume Limas dan Prisma" color="purple" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan seluruh hasil verifikasi, isilah kotak berikut dengan rasio yang kamu peroleh.
        </p>

        <div className={`${cardClass} flex flex-col gap-5`}>
          <div className="flex flex-wrap items-center gap-3 text-sm font-extrabold text-[#1E3A8A] bg-[#FEF9E7] rounded-xl px-4 py-3">
            <span>Volume satu limas</span>
            <span>=</span>
            <input
              type="text"
              name="answers.rasio"
              defaultValue={getValue("rasio")}
              aria-label="Rasio volume satu limas terhadap volume prisma"
              placeholder="..."
              required
              className="w-24 rounded-lg border-2 border-dashed border-[#2563EB] bg-white px-3 py-1.5 text-center text-sm text-[#374151] focus:outline-none focus:border-solid"
            />
            <span>×</span>
            <span>volume prisma</span>
          </div>
          <TipBox>Isilah dengan bilangan/rasio (pada bentuk sederhana), misalnya 1/3.</TipBox>

          <div className="flex flex-col gap-2">
            <h3 className="m-0 text-sm font-extrabold text-[#166534]">Faktor yang Memengaruhi Volume Satu Limas</h3>
            <p className="m-0 text-sm text-[#374151]">Berdasarkan hasil verifikasi, volume satu limas dipengaruhi oleh:</p>
            {faktor.map((f) => (
              <label key={f.v} className="flex items-center gap-2.5 py-1 cursor-pointer">
                <input
                  type="radio"
                  name="answers.faktor"
                  value={f.v}
                  defaultChecked={getValue("faktor") === f.v}
                  required
                  className="w-4 h-4 accent-[#2563EB]"
                />
                <span className="text-sm text-[#374151]">{f.l}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={`${cardClass} flex flex-col gap-3`}>
          <h3 className="m-0 text-sm font-extrabold text-[#166534]">Ilustrasi Verifikasi</h3>
          <EditablePageImage
            imageKey="M7-P6-L6-1"
            materi={materi}
            peta={peta}
            step="6"
            urutan="1"
            src={ilustrasi}
            alt="Tiga limas yang sama dituangkan berulang memenuhi satu prisma"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full max-w-xl mx-auto aspect-[898/252]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <p className="m-0 text-xs font-semibold text-[#92400E] bg-[#FEF9E7] rounded-lg px-3 py-2 text-center">
              Satu limas yang sama digunakan berulang tiga kali.
            </p>
            <p className="m-0 text-xs font-semibold text-[#166534] bg-[#ECFDF5] rounded-lg px-3 py-2 text-center">
              Satu prisma dengan alas dan tinggi yang sama. Tiga kali isi satu limas dapat memenuhi satu prisma ketika luas alas dan tingginya sama.
            </p>
          </div>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
