import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma" },
];

export default async function Materi3Peta5Step3CariPola({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const cubeImage = await getPageImage("M3-P5-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Luas Permukaan</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#4C1D95] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Cari Pola</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Perhatikan hasil perhitunganmu. Lengkapilah tabel berikut.
        </p>

        <div className="px-6 pt-4 flex flex-col gap-3">
          {bangunRuang.map((b) => (
            <div key={b.key} className="flex flex-col gap-1.5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl p-3.5">
              <label htmlFor={`pola_${b.key}`} className="text-sm font-bold text-[#4C1D95]">
                Pola yang ditemukan pada {b.label}
              </label>
              <input
                id={`pola_${b.key}`}
                type="text"
                name={`answers.pola_${b.key}`}
                defaultValue={getValue(`pola_${b.key}`)}
                placeholder="Ketik pola yang kamu temukan..."
                required
                className="w-full rounded-lg border border-[#DDD6FE] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#4C1D95] focus:outline-none transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="m-6 mt-5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#4C1D95]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4C1D95" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="hubungan_luas" className="text-sm font-semibold text-[#374151]">
            Pola apa yang kamu temukan tentang hubungan antara luas setiap sisi dan luas permukaan
            berdasarkan hasil perhitunganmu?
          </label>
          <textarea
            id="hubungan_luas"
            name="answers.hubungan_luas"
            defaultValue={getValue("hubungan_luas")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#DDD6FE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#4C1D95] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z" />
        </svg>
        <p className="m-0 text-xs leading-[1.7] text-[#374151]">
          Pola yang kamu temukan akan digunakan untuk menyusun strategi dan rumus sementara pada
          halaman berikutnya.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#DC2626]">Refleksi Mini</p>
          <label htmlFor="refleksi_mini" className="text-xs font-semibold text-[#1E3A8A]">
            Hari ini aku mulai memahami bahwa...
          </label>
          <textarea
            id="refleksi_mini"
            name="answers.refleksi_mini"
            defaultValue={getValue("refleksi_mini")}
            rows={3}
            required
            placeholder="Tuliskan refleksimu..."
            className="w-full rounded-xl border border-[#FECACA] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#D97706]">Ingat!</p>
            <p className="m-0 text-xs leading-[1.7] text-[#374151]">
              Sebelum menggunakan rumus, pahamilah mengapa rumus tersebut terbentuk.{" "}
              <span className="font-bold text-[#1E3A8A]">Rumus berasal dari pola yang kamu temukan sendiri.</span>
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P5-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={cubeImage}
            alt="Kubus biru"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-24 flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
