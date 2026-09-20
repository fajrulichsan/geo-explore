import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangun = [
  { nama: "kubus", judul: "Kubus", warna: "#2563EB" },
  { nama: "balok", judul: "Balok", warna: "#16A34A" },
  { nama: "prisma", judul: "Prisma Segitiga", warna: "#DC2626" },
];

const pilihan = [
  "hubungan volume dengan luas alas",
  "hubungan volume dengan tinggi kubus/balok",
  "hubungan volume dengan panjang prisma",
  "hubungan ketiga besaran (luas alas, tinggi/panjang, dan volume)",
  "bentuk bangun (kubus, balok, prisma segitiga)",
];

const diingat = [
  "Dalam data yang kamu kumpulkan, luas alas kubus/balok dan luas penampang sejajar alas prisma dibuat tetap.",
  "Sedangkan tinggi kubus/balok atau panjang prisma divariasikan.",
  "Hasil pengolahan data pada tahap ini akan digunakan untuk menemukan pola pada halaman berikutnya.",
];

export default async function Materi6Peta5Step2ApaYangBerubah({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getChecked = (key: string) => Boolean(answers[key]);

  const gambarMaskot = await getPageImage("M6-P5-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Mengolah Data Hasil GeoGebra 3D dan Augmented Reality</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#1E3A8A]">
            Apa yang Berubah?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut: besaran yang berubah sesuai data yang kamu temukan.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b) => (
            <label
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2"
            >
              <span className="text-base font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </span>
              <input
                type="text"
                name={`answers.berubah_${b.nama}`}
                defaultValue={getValue(`berubah_${b.nama}`)}
                placeholder="Besaran yang berubah..."
                required
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#EA580C]">
            Apa yang Perlu Kita Selidiki?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan data yang telah kamu kelompokkan, hubungan apa yang perlu kamu selidiki lebih lanjut? (Pilih semua yang sesuai)
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3.5">
          {pilihan.map((p, i) => (
            <label key={p} className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name={`answers.selidiki_${i + 1}`}
                defaultChecked={getChecked(`selidiki_${i + 1}`)}
                className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]"
              />
              <span className="text-sm text-[#374151] leading-[1.5]">{p}</span>
            </label>
          ))}
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-[#374151]">Faktor lain:</span>
            <input
              type="text"
              name="answers.selidiki_lain"
              defaultValue={getValue("selidiki_lain")}
              placeholder="Ketik di sini (jika ada)..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
            />
          </label>
          <div className="flex flex-col gap-1.5 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-4">
            <label htmlFor="alasan-selidiki" className="text-sm font-bold text-[#6D28D9]">
              Mengapa kamu memilihnya? Jelaskan dengan kata-katamu sendiri.
            </label>
            <textarea
              id="alasan-selidiki"
              name="answers.selidiki_alasan"
              defaultValue={getValue("selidiki_alasan")}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-5 items-end">
        <div className="flex flex-col gap-4">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-4 flex flex-col gap-2">
            <span className="text-sm font-extrabold text-[#111827]">Ingat!</span>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5] list-disc">
              {diingat.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex flex-col gap-1">
            <span className="text-sm font-extrabold text-[#2563EB]">Lanjutkan Menemukan Pola!</span>
            <p className="m-0 text-sm text-[#374151] leading-[1.5]">
              Pada halaman berikutnya (Halaman 2), kita akan mencari pola dari data yang telah kamu olah untuk menyusun
              dugaan hubungan volume setiap bangun.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M6-P5-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarMaskot}
          alt="Siswa menunjuk ke depan sambil berkata Ayo lanjut ke halaman berikutnya"
          editable={editFoto}
          natural
          containerClassName="relative w-48 mx-auto lg:w-full min-h-24 overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
