import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { label: "Kelompokkan Data", desc: "Kelompokkan bagian penyusun limas menjadi alas dan sisi tegak.", color: "#2563EB" },
  { label: "Hitung Luas Sisi", desc: "Hitung luas alas dan luas seluruh sisi tegak.", color: "#16A34A" },
  { label: "Cari Pola", desc: "Temukan pola dan hubungan antara luas alas, sisi tegak, dan luas permukaan.", color: "#EA580C" },
];

const jenisLimas = [
  { key: "segiempat", label: "Limas Segiempat", sub: "Wajib", required: true },
  { key: "segitiga", label: "Limas Segitiga", sub: "Opsional sebagai pembanding", required: false },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

function LimasKecil() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="#C5DDB0" stroke="#1F2937" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M22 4L5 38h34z" />
      <path d="M22 4L22 38" fill="none" strokeDasharray="3 2" />
    </svg>
  );
}

export default async function Materi4Peta5Step1MengelompokkanData({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarSiswa = await getPageImage("M4-P5-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 4 dari 6
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center rounded-[28px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-9">
        <div className="flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-white">Ayo Mengolah Informasi</h1>
          <p className="m-0 text-sm sm:text-base font-bold text-white/95">
            Sekarang saatnya mengolah informasi yang telah kamu kumpulkan pada Tahap 3 untuk menemukan hubungan dan
            strategi.
          </p>
          <p className="m-0 text-sm sm:text-[15px] leading-[1.7] text-white/90">
            Kamu telah mengumpulkan berbagai informasi melalui GeoGebra 3D dan Augmented Reality (AR). Kelompokkan
            bagian penyusun limas, hitung luas setiap sisinya, kemudian temukan sendiri bagaimana luas permukaan limas
            diperoleh.
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P5-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarSiswa}
          alt="Tiga siswa mengamati limas di laptop dan tablet"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {alur.map((a, i) => (
          <div key={a.label} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-2">
            <div
              className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm"
              style={{ backgroundColor: a.color }}
            >
              {i + 1}
            </div>
            <span className="text-sm font-bold" style={{ color: a.color }}>
              {a.label}
            </span>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.5]">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#2563EB]">Mengelompokkan Data</span>
            <span className="text-xs text-[#6B7280]">
              Kelompokkan bagian penyusun limas berdasarkan hasil eksplorasi.
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-2">
            <thead>
              <tr className="text-xs font-bold text-white">
                <th className="bg-[#1E3A8A] rounded-xl p-3 text-left">Jenis Limas</th>
                <th className="bg-[#1E3A8A] rounded-xl p-3">Alas (Bentuk &amp; Banyak)</th>
                <th className="bg-[#1E3A8A] rounded-xl p-3">Sisi Tegak (Bentuk &amp; Banyak)</th>
              </tr>
            </thead>
            <tbody>
              {jenisLimas.map((j) => (
                <tr key={j.key}>
                  <td className="p-2 align-middle">
                    <span className="block text-sm font-bold text-[#2563EB]">{j.label}</span>
                    <span className="block text-xs text-[#6B7280]">({j.sub})</span>
                  </td>
                  {(["alas", "tegak"] as const).map((kolom) => (
                    <td key={kolom} className="align-middle">
                      <input
                        name={`answers.${j.key}_${kolom}`}
                        defaultValue={getValue(`${j.key}_${kolom}`)}
                        required={j.required}
                        placeholder="Tulis bentuk & banyaknya"
                        aria-label={`${j.label} ${kolom === "alas" ? "alas" : "sisi tegak"}`}
                        className={inputClass}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#2563EB] transition-colors">
        <label htmlFor="alasan_dipisah" className="flex items-start gap-3 text-sm font-bold text-[#1E3A8A] leading-[1.5]">
          <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">
            ?
          </span>
          Mengapa alas dan sisi tegak dipisahkan? Jelaskan alasanmu.
        </label>
        <textarea
          id="alasan_dipisah"
          name="answers.alasan_dipisah"
          defaultValue={getValue("alasan_dipisah")}
          rows={3}
          placeholder="Tulis jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#C7D7FE] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex items-center gap-4">
        <div className="flex flex-col gap-1.5 flex-1">
          <span className="text-base font-extrabold text-[#D97706]">&#9733; Catatan Penting</span>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
            Jika sisi-sisi tegaknya tidak sama bentuk dan ukurannya, hitung luas setiap sisi tegak yang berbeda.
          </p>
        </div>
        <div className="flex gap-1 flex-shrink-0" aria-hidden="true">
          <LimasKecil />
          <LimasKecil />
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
