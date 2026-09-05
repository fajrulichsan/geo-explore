import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const jenisLimas = [
  { key: "segiempat", label: "Limas Segiempat", sub: "(Wajib)" },
  { key: "segitiga", label: "Limas Segitiga", sub: "(Opsional sebagai pembanding)" },
];

const proses = [
  { n: 1, label: "Kelompokkan Data" },
  { n: 2, label: "Hitung Luas Sisi" },
  { n: 3, label: "Cari Pola" },
];

export default async function Materi4Peta5Step1MengelompokkanData({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M4-P5-L1-1");
  const catatanImage = await getPageImage("M4-P5-L1-2");

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
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Sekarang saatnya mengolah informasi yang telah kamu kumpulkan pada Tahap 3 untuk
          menemukan hubungan dan strategi.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kamu telah mengumpulkan berbagai informasi melalui GeoGebra 3D dan Augmented Reality
            (AR). Sekarang saatnya mengolah informasi tersebut.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kelompokkan bagian penyusun limas, hitung luas setiap sisinya, kemudian temukan sendiri
            bagaimana{" "}
            <span className="font-bold text-[#2563EB]">luas permukaan limas</span> diperoleh.
          </p>
        </div>
        <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden bg-[#EFF4FF]">
          <EditablePageImage
            imageKey="M4-P5-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa mengolah data hasil eksplorasi GeoGebra dan AR"
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
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Kelompokkan bagian penyusun limas berdasarkan hasil eksplorasimu.
        </p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/3">
                  Jenis Limas
                </th>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20">
                  Alas (Bentuk &amp; Banyak)
                </th>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Sisi Tegak (Bentuk &amp; Banyak)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {jenisLimas.map((j) => (
                <tr key={j.key}>
                  <td className="px-4 py-3 align-top">
                    <p className="m-0 text-sm font-bold text-[#111827]">{j.label}</p>
                    <p className="m-0 text-xs text-[#9CA3AF] italic">{j.sub}</p>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.alas_${j.key}`}
                      defaultValue={getValue(`alas_${j.key}`)}
                      placeholder="Ketik di sini..."
                      required={j.key === "segiempat"}
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.sisi_tegak_${j.key}`}
                      defaultValue={getValue(`sisi_tegak_${j.key}`)}
                      placeholder="Ketik di sini..."
                      required={j.key === "segiempat"}
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
          <label htmlFor="alasan_pisah" className="text-sm text-[#374151]">
            Mengapa alas dan sisi tegak dipisahkan? Jelaskan alasanmu.
          </label>
          <textarea
            id="alasan_pisah"
            name="answers.alasan_pisah"
            defaultValue={getValue("alasan_pisah")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#BBF0D3] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="m-6 mt-0 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-4 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#D97706]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706">
                <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
              </svg>
              Catatan Penting
            </p>
            <p className="m-0 text-xs leading-[1.7] text-[#92400E]">
              Jika sisi-sisi tegaknya tidak sama bentuk dan ukurannya, hitung luas setiap sisi
              tegak yang berbeda.
            </p>
          </div>
          <div className="relative w-24 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white">
            <EditablePageImage
              imageKey="M4-P5-L1-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={catatanImage}
              alt="Dua bentuk limas dengan sisi tegak berbeda"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
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
