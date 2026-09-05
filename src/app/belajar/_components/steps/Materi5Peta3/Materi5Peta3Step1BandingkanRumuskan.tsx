import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangunRuang = [
  {
    imageKey: "M5-P3-L1-2" as PageImageKey,
    nama: "Kubus",
    awal: "Rusuk = 4 cm",
    hasil: "Rusuk = 8 cm",
    tint: "bg-[#F0FDF4]",
  },
  {
    imageKey: "M5-P3-L1-3" as PageImageKey,
    nama: "Balok",
    awal: "p × l × t = 6 × 4 × 3",
    hasil: "p × l × t = 12 × 8 × 6",
    tint: "bg-[#EFF4FF]",
  },
  {
    imageKey: "M5-P3-L1-4" as PageImageKey,
    nama: "Prisma Segitiga",
    awal: "Panjang = 6 cm, sisi alas = 4 cm, tinggi alas = 3 cm",
    hasil: "Panjang = 12 cm, sisi alas = 8 cm, tinggi alas = 6 cm",
    tint: "bg-[#FFF7ED]",
  },
  {
    imageKey: "M5-P3-L1-5" as PageImageKey,
    nama: "Limas Segiempat",
    awal: "Sisi alas = 3 cm, apotema = 5 cm",
    hasil: "Sisi alas = 6 cm, apotema = 10 cm",
    tint: "bg-[#F5F3FF]",
  },
];

const pertanyaan = [
  { key: "faktor_skala_luas", label: "Bagaimana faktor skala memengaruhi luas permukaan bangun ruang?" },
  { key: "perubahan_sama_panjang", label: "Apakah perubahan luas permukaan mengikuti faktor yang sama dengan perubahan ukuran panjang?" },
  { key: "pola_sama_semua_bangun", label: "Apakah pola perubahan luas permukaan sama untuk kubus, balok, prisma segitiga, dan limas segiempat?" },
];

export default async function Materi5Peta3Step1BandingkanRumuskan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [mascotImage, ...bangunImages] = await Promise.all([
    getPageImage("M5-P3-L1-1"),
    ...bangunRuang.map((b) => getPageImage(b.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 &ndash; Ayo Berdiskusi
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M5-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Tiga siswa berdiskusi membandingkan hasil pengamatan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3.5">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Diskusikan hasil pengamatan yang telah kalian lakukan pada Tahap 1 bersama teman
            satu kelompok. Bandingkan jawaban setiap anggota. Jika terdapat perbedaan pendapat,
            berikan alasan berdasarkan hasil pengamatan yang telah dilakukan.
          </p>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3 px-4 flex items-start gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.6]">
              Ingat: Faktor skala k = 2 berarti setiap ukuran panjang pada bangun hasil skala
              menjadi 2 kali ukuran semula.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan kembali hasil pengamatan pada Tahap 1. Fokus kita pada kasus k = 2.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {bangunRuang.map((b, i) => (
            <div
              key={b.nama}
              className="flex flex-col border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <p className="m-0 text-sm font-bold text-[#111827] px-4 pt-4">{b.nama}</p>
              <div className={`relative w-full aspect-[16/9] mt-3 ${b.tint}`}>
                <EditablePageImage
                  imageKey={b.imageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 2)}
                  src={bangunImages[i]}
                  alt={`${b.nama} sebelum dan sesudah skala k=2`}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-full"
                />
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#E5E7EB] border-t border-[#E5E7EB] mt-3">
                <div className="px-4 py-3">
                  <p className="m-0 text-[11px] font-bold uppercase tracking-wide text-[#9CA3AF]">Awal</p>
                  <p className="m-0 mt-1 text-xs text-[#4B5563]">{b.awal}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="m-0 text-[11px] font-bold uppercase tracking-wide text-[#9CA3AF]">Hasil Skala (k=2)</p>
                  <p className="m-0 mt-1 text-xs text-[#4B5563]">{b.hasil}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Rumuskan Permasalahan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Centang (&#10003;) satu atau lebih pertanyaan yang menurut kelompokmu perlu diselidiki lebih lanjut.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          {pertanyaan.map((p) => (
            <label
              key={p.key}
              className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                value="ya"
                defaultChecked={getValue(p.key) === "ya"}
                data-require-group="rumuskan_permasalahan"
                className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0"
              />
              <span className="text-sm text-[#374151] leading-[1.5]">{p.label}</span>
            </label>
          ))}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="pertanyaan_lain" className="text-sm font-semibold text-[#374151]">
              Pertanyaan lain:
            </label>
            <input
              id="pertanyaan_lain"
              type="text"
              name="answers.pertanyaan_lain"
              defaultValue={getValue("pertanyaan_lain")}
              placeholder="Tuliskan pertanyaan tambahan (opsional)..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
            />
          </div>
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
