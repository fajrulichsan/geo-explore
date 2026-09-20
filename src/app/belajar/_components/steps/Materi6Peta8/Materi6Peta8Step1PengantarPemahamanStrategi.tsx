import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, RefleksiHeader, SectionTitle, TabelCentang, Tip, answerText, cardCls, inputCls } from "./Materi6Peta8Parts";

const pemahaman = [
  "Saya memahami hubungan antara luas alas atau luas penampang sejajar alas, tinggi kubus/balok atau panjang prisma, dan volume.",
  "Saya dapat menjelaskan mengapa volume dapat dihitung dengan mengalikan luas alas atau luas penampang sejajar alas dengan tinggi kubus/balok atau panjang prisma.",
  "Saya dapat menuliskan rumus volume kubus, balok, dan prisma segitiga dengan benar.",
  "Saya dapat menggunakan rumus volume untuk menyelesaikan soal.",
];

const strategi = ["Pengamatan", "Diskusi", "GeoGebra 3D", "Augmented Reality", "Verifikasi", "Menyimpulkan"];

export default async function Materi6Peta8Step1PengantarPemahamanStrategi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <RefleksiHeader materi={materi} step={1} />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#F59E0B] text-white text-xs font-bold px-4 py-1">Pengantar</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Selamat! Kamu telah menemukan sendiri rumus volume kubus, balok, dan prisma segitiga melalui kegiatan
            mengamati, berdiskusi, mengeksplorasi, memverifikasi, dan menyimpulkan. Sekarang, luangkan waktu sejenak
            untuk merefleksikan pengalaman belajarmu. Refleksi ini akan membantumu menyadari apa yang sudah kamu
            pahami, strategi yang efektif, seberapa yakin kamu, dan apa yang perlu kamu tingkatkan.
          </p>
          <Tip>Jawablah dengan jujur. Karena refleksi yang baik akan membuatmu semakin berkembang!</Tip>
        </div>
        <Foto
          k="M6-P8-L1-1"
          src={img["M6-P8-L1-1"]}
          ctx={ctx}
          alt="Tiga siswa memegang Lembar Refleksi Diri dengan model kubus, balok, GeoGebra 3D, dan AR"
          className="relative w-full self-center overflow-hidden rounded-[20px]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="A"
          judul="Refleksi Pemahaman"
          hint="Beri tanda centang (✓) pada jawaban yang paling sesuai."
          warna="#1E3A8A"
        />
        <div className={cardCls}>
          <TabelCentang
            prefix="pemahaman"
            pernyataan={pemahaman}
            answers={initialAnswers}
            opsi={[
              { value: "ya", label: "Ya" },
              { value: "perlu_latihan", label: "Masih Perlu Latihan" },
              { value: "belum", label: "Belum Memahami" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="B" judul="Refleksi Strategi" hint="Jawablah dengan bahasamu sendiri." warna="#166534" />
        <div className={`${cardCls} flex flex-col gap-6`}>
          <fieldset className="m-0 border-0 p-0 flex flex-col gap-3">
            <legend className="flex items-start gap-3 text-sm text-[#374151] leading-[1.5] p-0">
              <span className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                1
              </span>
              Strategi apa yang paling membantumu menemukan sendiri rumus volume?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {strategi.map((s) => (
                <label
                  key={s}
                  className="cursor-pointer rounded-full border border-[#D1D5DB] bg-white px-4 py-2 text-sm font-semibold text-[#4B5563] has-[:checked]:bg-[#166534] has-[:checked]:border-[#166534] has-[:checked]:text-white"
                >
                  <input
                    type="radio"
                    name="answers.strategi_terbantu"
                    value={s}
                    defaultChecked={answerText(initialAnswers, "strategi_terbantu") === s}
                    required
                    className="sr-only"
                  />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-col gap-2">
            <label htmlFor="strategi_alasan" className="flex items-start gap-3 text-sm text-[#374151] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                2
              </span>
              Mengapa strategi tersebut membantumu?
            </label>
            <textarea
              id="strategi_alasan"
              name="answers.strategi_alasan"
              defaultValue={answerText(initialAnswers, "strategi_alasan")}
              rows={5}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
