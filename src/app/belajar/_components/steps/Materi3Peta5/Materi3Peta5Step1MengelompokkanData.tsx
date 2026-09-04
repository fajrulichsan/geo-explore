import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma" },
];

const proses = [
  { n: 1, label: "Mengelompokkan Data" },
  { n: 2, label: "Hitung Luas Sisi" },
  { n: 3, label: "Cari Pola" },
];

export default async function Materi3Peta5Step1MengelompokkanData({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M3-P5-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Luas Permukaan</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kamu telah mengumpulkan berbagai informasi melalui GeoGebra 3D dan Augmented Reality.
            Sekarang saatnya mengolah informasi tersebut.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kelompokkan sisi-sisi yang{" "}
            <span className="font-bold text-[#2563EB]">sama bentuk dan ukurannya</span>, hitung luas
            setiap sisi, kemudian temukan sendiri bagaimana luas permukaan suatu bangun ruang diperoleh.
          </p>
        </div>
        <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden bg-[#EFF4FF]">
          <EditablePageImage
            imageKey="M3-P5-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa mengolah data hasil eksplorasi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full min-h-[180px]"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4">
        {proses.map((p, i) => (
          <div key={p.n} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                  p.n === 1 ? "bg-[#16A34A] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
                }`}
              >
                {p.n}
              </div>
              <span className={`text-sm font-bold ${p.n === 1 ? "text-[#16A34A]" : "text-[#6B7280]"}`}>
                {p.label}
              </span>
            </div>
            {i < proses.length - 1 && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Mengelompokkan Data</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">Lengkapilah tabel berikut.</p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/4">
                  Bangun Ruang
                </th>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20">
                  Sisi-sisi yang sama bentuk dan ukurannya
                </th>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg w-32">
                  Banyak Sisi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {bangunRuang.map((b) => (
                <tr key={b.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{b.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.sisi_sama_${b.key}`}
                      defaultValue={getValue(`sisi_sama_${b.key}`)}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      name={`answers.banyak_sisi_${b.key}`}
                      defaultValue={getValue(`banyak_sisi_${b.key}`)}
                      placeholder="0"
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#EFFDF4] border border-[#BBF0D3] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#16A34A]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="manfaat_mengelompokkan" className="text-sm text-[#374151]">
            Apa manfaat mengelompokkan sisi-sisi yang sama bentuk dan ukurannya?
          </label>
          <textarea
            id="manfaat_mengelompokkan"
            name="answers.manfaat_mengelompokkan"
            defaultValue={getValue("manfaat_mengelompokkan")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#BBF0D3] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
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
