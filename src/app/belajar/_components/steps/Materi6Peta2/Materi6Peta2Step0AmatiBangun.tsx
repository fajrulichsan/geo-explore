import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const diamati = [
  { color: "#2563EB", text: "bentuk bangun;" },
  { color: "#CA8A04", text: "ukuran bangun (panjang, lebar, tinggi);" },
  { color: "#16A34A", text: "bentuk satu lapisan atau penampang;" },
  { color: "#F97316", text: "banyaknya lapisan penyusun pada kubus dan balok, atau posisi penampang pada prisma." },
];

const perhatikan = [
  "Apa yang tampak mengisi bagian dalam setiap bangun?",
  "Apakah semua bangun memiliki bentuk alas yang sama?",
  "Bangun manakah yang memiliki alas berbentuk persegi?",
  "Bangun manakah yang memiliki alas berbentuk segitiga?",
];

const bangun = [
  {
    key: "M6-P2-L8-2" as const,
    urutan: "2",
    nama: "kubus",
    judul: "Kubus",
    alt: "Kubus biru dengan ukuran 3 satuan pada setiap rusuknya",
    warna: "#2563EB",
    bg: "#EFF4FF",
    border: "#BFDBFE",
    ukuran: ["s = 3 satuan"],
    tanya: "Bagaimana susunan kubus pada satu lapisan?",
    petunjuk: "Amati bentuk satu lapisan kubus.",
  },
  {
    key: "M6-P2-L8-3" as const,
    urutan: "3",
    nama: "balok",
    judul: "Balok",
    alt: "Balok hijau dengan ukuran 5 x 2 x 3 satuan",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    ukuran: ["p = 5 satuan", "l = 2 satuan", "t = 3 satuan"],
    tanya: "Apakah bentuk susunan setiap lapisan tampak sama?",
    petunjuk: "Amati setiap lapisan penyusunnya.",
  },
  {
    key: "M6-P2-L8-4" as const,
    urutan: "4",
    nama: "prisma",
    judul: "Prisma (segitiga)",
    alt: "Prisma segitiga dengan alas 4 satuan, tinggi 3 satuan, dan panjang prisma 4 satuan",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    ukuran: ["alas segitiga = 4 satuan", "tinggi segitiga = 3 satuan", "panjang prisma = 3 satuan (posisi dapat berbeda)"],
    tanya: "Bagaimana bentuk penampang yang sejajar dengan alas?",
    petunjuk: "Amati beberapa penampang pada posisi berbeda. Apakah bentuk dan ukurannya berubah atau tetap?",
  },
];

const inputCls =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

function Huruf({ huruf, judul, warna }: { huruf: string; judul: string; warna: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0"
        style={{ backgroundColor: warna }}
      >
        {huruf}
      </div>
      <div
        className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold"
        style={{ color: warna }}
      >
        {judul}
      </div>
    </div>
  );
}

export default async function Materi6Peta2Step0AmatiBangun({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const text = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [hero, ...gambarBangun] = await Promise.all([
    getPageImage("M6-P2-L8-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);
  const [siswa, satuan, hijab] = await Promise.all([
    getPageImage("M6-P2-L8-5"),
    getPageImage("M6-P2-L8-6"),
    getPageImage("M6-P2-L8-7"),
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
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Amati bentuk satu lapisan pada kubus dan balok serta penampang sejajar alas pada prisma. Kemudian perhatikan
          pola yang kamu temukan.
        </p>
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
        <EditablePageImage
          imageKey="M6-P2-L8-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={hero}
          alt="Tiga siswa mengamati kubus, balok, dan prisma di atas meja"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-3">
        <span className="w-fit rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1">Pengantar</span>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">Semua bangun ruang di bawah dapat kita amati melalui:</p>
        <ol className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.6] list-decimal">
          <li>Satu lapisan pada kubus dan balok; atau</li>
          <li>Penampang yang sejajar dengan alas pada prisma.</li>
        </ol>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">Amatilah hal-hal berikut:</p>
        <div className="flex flex-col gap-2">
          {diamati.map((d) => (
            <div key={d.text} className="flex items-start gap-2.5">
              <span className="mt-1 w-3.5 h-3.5 rounded-[4px] flex-shrink-0" style={{ backgroundColor: d.color }} />
              <span className="text-sm text-[#374151] leading-[1.5]">{d.text}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 flex flex-col gap-1">
          <span className="text-sm font-extrabold text-[#B45309]">Catatan penting:</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Dalam kegiatan ini, kubus dan balok diamati sebagai susunan lapisan kubus satuan, sedangkan prisma diamati
            melalui penampang yang sejajar dengan alas pada beberapa posisi.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Huruf huruf="A" judul="Amati Bangun Ruang Berikut" warna="#2563EB" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b, i) => (
            <div
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: b.warna }}
                >
                  {i + 1}
                </div>
                <span className="text-base font-extrabold" style={{ color: b.warna }}>
                  {b.judul}
                </span>
              </div>
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
                containerClassName="relative w-full min-h-24 overflow-hidden"
              />
              <div className="rounded-xl border bg-white px-3 py-2.5 text-xs text-[#374151] flex flex-col gap-0.5" style={{ borderColor: b.border }}>
                <span className="font-bold" style={{ color: b.warna }}>
                  {b.nama === "prisma" ? "Ukuran Penampang (sejajar alas)" : "Ukuran Bangun"}
                </span>
                {b.ukuran.map((u) => (
                  <span key={u}>{u}</span>
                ))}
              </div>
              <div className="rounded-2xl p-4 flex flex-col gap-2 border mt-auto" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                <p className="m-0 text-sm font-bold text-[#111827] leading-[1.5]">{b.tanya}</p>
                <p className="m-0 text-sm leading-[1.5]" style={{ color: b.warna }}>
                  {b.petunjuk}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-3.5">
          <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            i
          </span>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Ingat: Penampang diambil dari irisan yang sejajar dengan alas pada prisma, bukan lapisan penyusun prisma.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <Huruf huruf="B" judul="Apa yang Kamu Perhatikan?" warna="#2563EB" />
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 h-full">
            {perhatikan.map((q, i) => (
              <label key={q} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="flex flex-col gap-2 flex-1 text-sm text-[#374151] leading-[1.5]">
                  {q}
                  <textarea
                    name={`answers.perhatikan_${i + 1}`}
                    defaultValue={text(`perhatikan_${i + 1}`)}
                    rows={2}
                    placeholder="Ketik jawabanmu di sini..."
                    aria-label={q}
                    className={inputCls}
                  />
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Huruf huruf="C" judul="Dugaan Awal" warna="#CA8A04" />
          <div className="bg-[#FFFBEB] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4 items-center">
              <label className="flex flex-col gap-2 text-sm text-[#374151] leading-[1.5]">
                Menurutmu, bangun manakah yang memiliki isi paling banyak? Mengapa? Tuliskan dugaanmu.
                <textarea
                  name="answers.dugaan_awal"
                  defaultValue={text("dugaan_awal")}
                  rows={4}
                  placeholder="Ketik dugaanmu di sini..."
                  aria-label="Dugaan awal"
                  className={inputCls}
                />
              </label>
              <EditablePageImage
                imageKey="M6-P2-L8-5"
                materi={materi}
                peta={peta}
                step={step}
                urutan="5"
                src={siswa}
                alt="Siswa laki-laki berpikir dengan tanda tanya"
                editable={editFoto}
                natural
                imageClassName="object-contain mix-blend-multiply"
                containerClassName="relative w-28 sm:w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Huruf huruf="D" judul="Tahukah Kamu?" warna="#7C3AED" />
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr_120px] gap-5 items-center">
          <EditablePageImage
            imageKey="M6-P2-L8-6"
            materi={materi}
            peta={peta}
            step={step}
            urutan="6"
            src={satuan}
            alt="Kubus satuan disusun menjadi kubus yang lebih besar"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kubus satuan digunakan untuk membantu kita menghitung banyaknya ruang (volume) di dalam suatu bangun.
          </p>
          <EditablePageImage
            imageKey="M6-P2-L8-7"
            materi={materi}
            peta={peta}
            step={step}
            urutan="7"
            src={hijab}
            alt="Siswi berhijab menunjuk ke atas"
            editable={editFoto}
            natural
            imageClassName="object-contain mix-blend-multiply"
            containerClassName="relative w-24 md:w-full mx-auto"
          />
        </div>
      </div>

      <div className="rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-5 py-3.5 text-sm text-[#374151] leading-[1.6]">
        <span className="font-extrabold text-[#B45309]">Petunjuk: </span>
        Mulailah dengan mengamati bentuk satu lapisan (pada kubus dan balok) dan penampang yang sejajar dengan alas
        (pada prisma). Catat hasil pengamatanmu, kemudian lengkapi jawabannya pada bagian lain.
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
