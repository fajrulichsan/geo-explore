import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { label: "GeoGebra & AR", color: "#2563EB" },
  { label: "Periksa Data", color: "#16A34A" },
  { label: "Bandingkan", color: "#2563EB" },
  { label: "Perbaiki", color: "#DC2626" },
];

const kegiatan = [
  "Buka kembali model bangun ruang pada GeoGebra 3D.",
  "Ubah faktor skala menjadi beberapa nilai (misalnya 2, 3, dan ½).",
  "Periksa kembali luas permukaan yang diperoleh.",
  "Bandingkan dengan hubungan yang telah kamu temukan.",
  "Pastikan semua data telah dihitung dengan benar.",
];

const faktorSkala = ["2", "3", "½"];

const cellInput =
  "w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors";
const textArea =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none";

export default async function Materi5Peta6Step1VerifikasiGeoGebraAR({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const heroImage = await getPageImage("M5-P6-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hubungan Skala dan Luas</p>
      </div>

      <div className="grid md:grid-cols-5 gap-5 items-stretch">
        <div className="md:col-span-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
          <h2 className="m-0 text-lg font-bold text-[#1D4ED8]">Pengantar</h2>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kamu telah menemukan dugaan tentang{" "}
            <span className="font-bold text-[#2563EB]">hubungan antara faktor skala dan luas permukaan</span>.
            Sekarang saatnya memeriksa apakah dugaan tersebut benar.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Gunakan kembali <span className="font-bold text-[#2563EB]">GeoGebra 3D</span>,{" "}
            <span className="font-bold text-[#2563EB]">Augmented Reality (AR)</span>, serta hasil perhitungan
            kelompokmu untuk memastikan bahwa hubungan yang kamu temukan sesuai dengan data.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P6-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa memverifikasi hasil penemuan dengan tablet dan buku catatan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative md:col-span-2 w-full aspect-[5/4] md:aspect-auto md:min-h-[200px] bg-white rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <p className="m-0 text-sm font-bold text-[#1E3A8A] text-center">Alur Verifikasi</p>
        <ol className="m-0 p-0 list-none flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {alur.map((a, i) => (
            <li key={a.label} className="flex items-center gap-2 sm:gap-3">
              <span
                className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold bg-white border-2"
                style={{ color: a.color, borderColor: a.color }}
              >
                {a.label}
              </span>
              {i < alur.length - 1 && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </li>
          ))}
        </ol>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-3.5 flex items-start gap-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8v.01" />
          </svg>
          <p className="m-0 text-xs text-[#1D4ED8] leading-[1.6]">
            Gunakan GeoGebra untuk memeriksa nilai luas permukaan secara akurat. Gunakan AR untuk melihat
            perubahan model secara visual dan memastikan jenis bangun yang kamu gunakan.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Verifikasi Menggunakan GeoGebra dan AR
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm font-semibold text-[#374151]">Lakukan kegiatan berikut.</p>
          {kegiatan.map((item, idx) => (
            <label key={item} className="flex items-start gap-3 text-sm text-[#374151] cursor-pointer">
              <input
                type="checkbox"
                name={`answers.kegiatan_${idx}`}
                defaultChecked={checked(`kegiatan_${idx}`)}
                className="w-4 h-4 mt-0.5 rounded accent-[#2563EB] flex-shrink-0"
              />
              {item}
            </label>
          ))}
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm font-bold text-[#1E3A8A]">Hasil Verifikasi</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#1E3A8A] text-white text-xs font-bold">
                  <th className="px-3 py-3 rounded-l-lg">Faktor Skala (k)</th>
                  <th className="px-3 py-3 border-l border-white/20">Prediksi Luas (k² × Luas Awal) (cm²)</th>
                  <th className="px-3 py-3 border-l border-white/20">Hasil GeoGebra (cm²)</th>
                  <th className="px-3 py-3 border-l border-white/20">Hasil AR (Visual)</th>
                  <th className="px-3 py-3 border-l border-white/20 rounded-r-lg">Sesuai Dugaan? (✓/✗)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {faktorSkala.map((k, idx) => (
                  <tr key={k}>
                    <td className="px-3 py-3 text-sm font-bold text-[#111827]">{k}</td>
                    {(["prediksi_luas", "hasil_geogebra", "hasil_ar"] as const).map((field) => (
                      <td key={field} className="px-3 py-3">
                        <input
                          type="text"
                          name={`answers.${field}_${idx}`}
                          defaultValue={getValue(`${field}_${idx}`)}
                          required
                          placeholder="Ketik di sini..."
                          className={cellInput}
                        />
                      </td>
                    ))}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-4">
                        {(["sesuai", "tidak_sesuai"] as const).map((opt) => (
                          <label key={opt} className="flex items-center gap-1.5 cursor-pointer text-sm font-semibold text-[#374151]">
                            <input
                              type="radio"
                              name={`answers.sesuai_dugaan_${idx}`}
                              value={opt}
                              defaultChecked={getValue(`sesuai_dugaan_${idx}`) === opt}
                              required
                              className="accent-[#2563EB]"
                            />
                            {opt === "sesuai" ? "✓" : "✗"}
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-3.5 flex items-start gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
            </svg>
            <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
              <span className="font-bold">Catatan AR (Visual):</span> Amati perubahan ukuran bangun secara
              visual. Gunakan GeoGebra untuk mendapatkan nilai luas permukaan secara akurat.
            </p>
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold">?</div>
            <p className="m-0 text-sm font-bold text-[#1D4ED8]">Pertanyaan</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pertanyaan_sesuai" className="text-sm font-semibold text-[#374151]">
              1. Apakah hasil GeoGebra sesuai dengan dugaan kelompokmu?
            </label>
            <textarea
              id="pertanyaan_sesuai"
              name="answers.pertanyaan_sesuai"
              defaultValue={getValue("pertanyaan_sesuai")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className={textArea}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pertanyaan_perbaikan" className="text-sm font-semibold text-[#374151]">
              2. Jika belum sesuai, bagian mana yang harus diperbaiki?
            </label>
            <textarea
              id="pertanyaan_perbaikan"
              name="answers.pertanyaan_perbaikan"
              defaultValue={getValue("pertanyaan_perbaikan")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className={textArea}
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
