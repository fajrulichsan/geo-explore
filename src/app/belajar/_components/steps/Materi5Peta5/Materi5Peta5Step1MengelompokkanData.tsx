import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangun = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma Segitiga" },
  { key: "limas", label: "Limas Segiempat" },
];

const faktorSkala = [
  { key: "0_5", label: "1/2 (½)" },
  { key: "1", label: "1 (awal)" },
  { key: "2", label: "2" },
  { key: "3", label: "3" },
];

const alur = ["Kelompokkan Data", "Bandingkan Perubahan", "Cari Pola"];

const tips = [
  "Pastikan semua data dimasukkan dengan rapi dan benar.",
  "Bandingkan perubahan pada faktor skala yang sama antar bangun.",
  "Fokuslah menemukan pola, bukan menebak rumus.",
];

export default async function Materi5Peta5Step1MengelompokkanData({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M5-P5-L1-1");

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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Hubungan Skala dan Luas</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="bg-[#FFF7E6] border border-[#FCD9A0] rounded-[20px] p-6 flex flex-col gap-3">
          <p className="m-0 text-base font-bold text-[#1E3A8A]">Pengantar</p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Kamu telah mengumpulkan berbagai data melalui GeoGebra 3D dan Augmented Reality. Sekarang saatnya{" "}
            <span className="font-bold text-[#1E3A8A]">mengolah</span> data tersebut. Kelompokkan hasil
            pengamatanmu, bandingkan perubahan ukuran dengan perubahan luas permukaan, kemudian temukan{" "}
            <span className="font-bold text-[#1E3A8A]">pola hubungan</span> di antara keduanya.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P5-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa mengolah data hasil eksplorasi GeoGebra dan AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-[#FFF7E6] border border-[#FCD9A0] rounded-2xl px-5 py-4">
        <span className="text-sm font-bold text-[#92400E]">Alur Tahap</span>
        {alur.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                  i === 0 ? "bg-[#16A34A] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-sm font-bold ${i === 0 ? "text-[#16A34A]" : "text-[#6B7280]"}`}>{label}</span>
            </div>
            {i < alur.length - 1 && (
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
          <h2 className="m-0 text-lg font-bold text-[#16A34A]">Mengelompokkan Data</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Lengkapilah tabel berikut dengan data yang telah kamu peroleh pada Tahap 3.
        </p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th rowSpan={2} className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 rounded-tl-lg align-bottom w-28">
                  Faktor Skala (k)
                </th>
                <th colSpan={4} className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20 text-center">
                  Luas Permukaan (cm&sup2;)
                </th>
              </tr>
              <tr>
                {bangun.map((b, i) => (
                  <th
                    key={b.key}
                    className={`bg-[#16A34A]/90 text-white text-xs font-bold px-4 py-2 border-l border-white/20 ${
                      i === bangun.length - 1 ? "rounded-tr-lg" : ""
                    }`}
                  >
                    {b.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {faktorSkala.map((f) => (
                <tr key={f.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{f.label}</td>
                  {bangun.map((b) => (
                    <td key={b.key} className="px-4 py-3">
                      <input
                        type="text"
                        name={`answers.luas_${b.key}_k${f.key}`}
                        defaultValue={getValue(`luas_${b.key}_k${f.key}`)}
                        placeholder="..."
                        required
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#EFFDF4] border border-[#BBF0D3] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#16A34A]">Pertanyaan</p>
          <label htmlFor="manfaat_mengelompokkan" className="text-sm text-[#374151]">
            Apa manfaat mengelompokkan data berdasarkan faktor skala?
          </label>
          <textarea
            id="manfaat_mengelompokkan"
            name="answers.manfaat_mengelompokkan"
            defaultValue={getValue("manfaat_mengelompokkan")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#BBF0D3] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-4 flex flex-col gap-1.5">
        <p className="m-0 text-sm font-bold text-[#D97706]">Tips Mengolah Data</p>
        <ul className="m-0 pl-5 text-xs leading-[1.8] text-[#92400E] list-disc">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
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
