import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const inputKecil =
  "w-24 rounded-lg border border-[#BFDBFE] bg-white px-2.5 py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

const textareaClass =
  "w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

function Nomor({ n }: { n: number }) {
  return (
    <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
      {n}
    </div>
  );
}

export default async function Materi5Peta5Step5HubunganMatematika({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [bangunImage, ingatImage] = await Promise.all([getPageImage("M5-P5-L5-1"), getPageImage("M5-P5-L5-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Hubungan Skala dan Luas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h2 className="m-0 text-lg font-bold text-[#2563EB]">Merumuskan Dugaan Matematis</h2>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-3 text-sm leading-[1.6] text-[#78350F]">
          Gunakan pola yang telah kamu temukan pada Panel C dan strategi yang telah kamu jelaskan pada Panel D untuk
          merumuskan dugaanmu tentang hubungan faktor skala (<em>k</em>) dengan luas permukaan bangun ruang.
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Nomor n={1} />
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Lengkapi Dugaan Kelompokmu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 items-center">
            <p className="m-0 text-sm leading-[2.2] text-[#111827]">
              Menurut kelompok kami, jika seluruh ukuran panjang suatu bangun ruang dikalikan dengan faktor skala{" "}
              <em>k</em>, maka luas permukaannya menjadi{" "}
              <input
                type="text"
                name="answers.luas_dikalikan"
                defaultValue={getValue("luas_dikalikan")}
                required
                placeholder="..."
                aria-label="Luas permukaan menjadi berapa kali luas semula"
                className={inputKecil}
              />{" "}
              kali luas semula.
            </p>
            <EditablePageImage
              imageKey="M5-P5-L5-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={bangunImage}
              alt="Kubus, balok, prisma segitiga, dan limas segiempat"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[200px] mx-auto"
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Nomor n={2} />
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Tuliskan Hubungan Matematisnya</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4 items-start">
            <div className="flex flex-col gap-2">
              <label htmlFor="hubungan_matematis" className="text-sm text-[#374151] leading-[1.6]">
                Gunakan simbol <em>LP</em>
                <sub>awal</sub>, <em>LP</em>
                <sub>baru</sub>, dan <em>k</em> untuk menuliskan dugaanmu dalam bentuk persamaan.
              </label>
              <textarea
                id="hubungan_matematis"
                name="answers.hubungan_matematis"
                defaultValue={getValue("hubungan_matematis")}
                rows={3}
                required
                placeholder="Jawabanmu..."
                className={textareaClass}
              />
            </div>
            <EditablePageImage
              imageKey="M5-P5-L5-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={ingatImage}
              alt="Ingat: LP awal adalah luas permukaan sebelum diskalakan, LP baru adalah luas permukaan setelah diskalakan, k adalah faktor skala"
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[220px] mx-auto"
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Nomor n={3} />
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Jelaskan Alasan Dugaanmu</p>
          </div>
          <label htmlFor="alasan_dugaan" className="text-sm text-[#374151] leading-[1.6]">
            Mengapa hubungan tersebut berlaku untuk kubus, balok, prisma segitiga, dan limas segiempat meskipun bentuk
            sisinya berbeda? Jelaskan berdasarkan pola atau strategi yang kamu temukan.
          </label>
          <textarea
            id="alasan_dugaan"
            name="answers.alasan_dugaan"
            defaultValue={getValue("alasan_dugaan")}
            rows={4}
            required
            placeholder="Jawabanmu..."
            className={textareaClass}
          />
        </div>

        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-5 flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#C2410C]">Untuk Dipikirkan</p>
          <label htmlFor="untuk_dipikirkan" className="text-sm text-[#374151] leading-[1.6]">
            Apakah menurutmu hubungan tersebut selalu berlaku jika semua ukuran panjang bangun ruang berubah dengan
            faktor skala yang sama?
          </label>
          <textarea
            id="untuk_dipikirkan"
            name="answers.untuk_dipikirkan"
            defaultValue={getValue("untuk_dipikirkan")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#FED7AA] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
