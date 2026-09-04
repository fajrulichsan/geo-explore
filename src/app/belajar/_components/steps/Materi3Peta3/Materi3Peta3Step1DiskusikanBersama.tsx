import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangunRuang = [
  {
    letter: "A1",
    imageKey: "M3-P2-L4-1" as PageImageKey,
    nama: "Kubus",
    keterangan: "s = panjang rusuk kubus",
    tint: "bg-[#F5F3FF]",
  },
  {
    letter: "A2",
    imageKey: "M3-P2-L4-2" as PageImageKey,
    nama: "Balok",
    keterangan: "p = panjang, l = lebar, t = tinggi",
    tint: "bg-[#EFF4FF]",
  },
  {
    letter: "A3",
    imageKey: "M3-P2-L4-3" as PageImageKey,
    nama: "Prisma Segitiga",
    keterangan: "a, b, c = sisi alas prisma, t = tinggi prisma",
    tint: "bg-[#F0FDF4]",
  },
];

const pertanyaan = [
  { n: 1, label: "Jika semua sisi dibuka menjadi jaring-jaring, apa yang sebenarnya harus dihitung?" },
  { n: 2, label: "Apakah luas permukaan cukup dihitung dari satu sisi saja? Mengapa?" },
  { n: 3, label: "Mengapa semua sisi harus diperhatikan?" },
  { n: 4, label: "Menurut kelompokmu, bagaimana cara memperoleh luas permukaan?" },
];

export default async function Materi3Peta3Step1DiskusikanBersama({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [mascotImage, ...bangunImages] = await Promise.all([
    getPageImage("M3-P3-L1-1"),
    ...bangunRuang.map((b) => getPageImage(b.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 &ndash; Ayo Berdiskusi
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M3-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Tiga siswa berdiskusi di meja belajar"
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
          <p className="m-0 text-lg font-bold text-[#2563EB]">Dari Mana Luas Permukaan Berasal?</p>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Berdiskusilah bersama teman kelompokmu. Gunakan hasil pengamatan pada tahap sebelumnya
              untuk menyusun dugaan tentang bagaimana luas permukaan suatu bangun ruang diperoleh.
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
            Diskusikan Bersama
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan kembali jaring-jaring berikut.</p>

        <div className="grid sm:grid-cols-3 gap-5">
          {bangunRuang.map((b, i) => (
            <div
              key={b.letter}
              className="flex flex-col border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <p className="m-0 text-sm font-bold text-[#111827] px-4 pt-4">{b.nama}</p>
              <div className={`relative w-full aspect-[4/3] mt-3 ${b.tint}`}>
                <EditablePageImage
                  imageKey={b.imageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 2)}
                  src={bangunImages[i]}
                  alt={`Jaring-jaring ${b.nama} dengan ukuran sisi`}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-full"
                />
              </div>
              <p className="m-0 text-xs leading-[1.6] text-[#4B5563] px-4 py-3">{b.keterangan}</p>
            </div>
          ))}
        </div>

        <p className="m-0 text-sm font-bold text-[#111827] mt-2">Diskusikan pertanyaan berikut.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {pertanyaan.map((p) => (
            <div
              key={p.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {p.n}
                </div>
                <label htmlFor={`diskusi_${p.n}`} className="flex-1 text-sm font-bold text-[#111827] pt-0.5">
                  {p.label}
                </label>
              </div>
              <textarea
                id={`diskusi_${p.n}`}
                name={`answers.diskusi_${p.n}`}
                defaultValue={getValue(`diskusi_${p.n}`)}
                rows={2}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
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
