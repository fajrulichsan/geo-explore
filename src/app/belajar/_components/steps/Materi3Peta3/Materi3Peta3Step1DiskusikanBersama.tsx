import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const jaring = [
  { key: "M3-P3-L1-2" as const, nama: "1. Kubus", ket: "s = panjang rusuk kubus", warna: "bg-[#A78BCA]", alt: "Jaring-jaring kubus dengan sisi s" },
  { key: "M3-P3-L1-3" as const, nama: "2. Balok", ket: "p = panjang, l = lebar, t = tinggi", warna: "bg-[#2563EB]", alt: "Jaring-jaring balok dengan ukuran p, l, t" },
  { key: "M3-P3-L1-4" as const, nama: "3. Prisma Segitiga", ket: "a, b, c = panjang sisi alas prisma; t = tinggi prisma", warna: "bg-[#16A34A]", alt: "Jaring-jaring prisma segitiga dengan sisi a, b, c dan tinggi t" },
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

  const [mascot, ...gambarJaring] = await Promise.all([
    getPageImage("M3-P3-L1-1"),
    ...jaring.map((j) => getPageImage(j.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 items-center">
          <div className="flex flex-col gap-4">
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 &ndash; Ayo Berdiskusi
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
            <p className="m-0 text-lg font-bold text-[#2563EB]">Dari Mana Luas Permukaan Berasal?</p>
            <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-2xl py-4 px-5 flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                <path d="M3 11v3a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zM15 9a4 4 0 010 6M18 6a8 8 0 010 12" />
              </svg>
              <div>
                <p className="m-0 text-sm font-bold text-[#1D4ED8]">Pengantar</p>
                <p className="m-0 mt-1 text-sm leading-[1.6] text-[#374151]">
                  Berdiskusilah bersama teman kelompokmu. Gunakan hasil pengamatan pada tahap sebelumnya
                  untuk menyusun dugaan tentang bagaimana luas permukaan suatu bangun ruang diperoleh.
                </p>
              </div>
            </div>
          </div>
          <EditablePageImage
            imageKey="M3-P3-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascot}
            alt="Tiga siswa berdiskusi di meja belajar"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-[20px] bg-white border border-[#E5E7EB]"
          />
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
          {jaring.map((j, i) => (
            <div
              key={j.key}
              className="flex flex-col border border-[#E5E7EB] rounded-[20px] overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <p className={`m-0 mx-auto mt-4 rounded-full ${j.warna} px-4 py-1 text-sm font-bold text-white`}>{j.nama}</p>
              <div className="relative w-full aspect-[4/3] mt-3">
                <EditablePageImage
                  imageKey={j.key}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 2)}
                  src={gambarJaring[i]}
                  alt={j.alt}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-full"
                />
              </div>
              <p className="m-0 text-xs leading-[1.6] text-[#4B5563] px-4 py-3">{j.ket}</p>
            </div>
          ))}
        </div>

        <p className="m-0 text-sm font-bold text-[#111827] mt-2">Diskusikan pertanyaan berikut.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {pertanyaan.map((p) => (
            <div key={p.n} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">{p.n}</div>
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

        <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-2xl px-5 py-4">
          <p className="m-0 text-sm leading-[1.7] text-[#1D4ED8] font-semibold">
            Diskusikan dengan teman sekelompokmu (3&ndash;4 orang). Dengarkan pendapat semua anggota dan
            tuliskan hasil diskusi kelompokmu.
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
