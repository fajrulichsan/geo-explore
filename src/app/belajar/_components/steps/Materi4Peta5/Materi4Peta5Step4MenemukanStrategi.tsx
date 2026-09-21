import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const cara = [
  { key: "cara1", label: "Cara 1", color: "#7C3AED" },
  { key: "cara2", label: "Cara 2", color: "#2563EB" },
];

const fokus = [
  "Cari pola dan hubungan.",
  "Susun strategi.",
  "Tuliskan rumus sementara dalam bentuk kalimat.",
  "Refleksikan ide kelompokmu.",
];

export default async function Materi4Peta5Step4MenemukanStrategi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarSiswa = await getPageImage("M4-P5-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Gunakan hasil pengamatan dan keterkaitan awal yang kamu temukan untuk menyusun strategi serta membuat rumus
          sementara sebelum memeriksanya pada tahap berikutnya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#7C3AED]">Menemukan Strategi</span>
              <span className="text-xs text-[#6B7280]">
                Tuliskan dua cara berbeda untuk menentukan luas permukaan limas berdasarkan hasil pengamatan dan
                keterkaitan awal yang kamu temukan.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cara.map((c) => (
              <div
                key={c.key}
                className="bg-white border-2 rounded-[20px] p-5 flex flex-col gap-3"
                style={{ borderColor: c.color }}
              >
                <span
                  className="inline-flex w-fit rounded-full px-4 py-1 text-sm font-extrabold text-white"
                  style={{ backgroundColor: c.color }}
                >
                  {c.label}
                </span>
                {[1, 2, 3, 4].map((n) => (
                  <label key={n} className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: c.color }}
                    >
                      {n}
                    </span>
                    <input
                      name={`answers.${c.key}_langkah${n}`}
                      defaultValue={getValue(`${c.key}_langkah${n}`)}
                      required={n === 1}
                      aria-label={`${c.label} langkah ${n}`}
                      placeholder={`Langkah ${n}`}
                      className="w-full border-0 border-b border-dashed border-[#9CA3AF] bg-transparent py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-solid focus:border-b-[#7C3AED] focus:outline-none"
                    />
                  </label>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-5 items-center bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 sm:p-6 focus-within:border-[#7C3AED] transition-colors">
            <div className="flex flex-col gap-3">
              <label htmlFor="bandingkan_strategi" className="text-sm font-bold text-[#4C1D95] leading-[1.5]">
                Bandingkan Strategimu: strategi mana yang menurut kelompokmu lebih mudah digunakan? Mengapa?
              </label>
              <textarea
                id="bandingkan_strategi"
                name="answers.bandingkan_strategi"
                defaultValue={getValue("bandingkan_strategi")}
                rows={3}
                placeholder="Tulis jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#DDD6FE] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
              />
            </div>
            <EditablePageImage
              imageKey="M4-P5-L4-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambarSiswa}
              alt="Tiga siswa berdiskusi membandingkan strategi di meja belajar"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
            />
          </div>
        </div>

        <aside className="flex flex-col gap-5">
          <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-[20px] p-5 flex flex-col gap-3">
            <span className="text-sm font-extrabold text-[#1E3A8A]">Fokus Kegiatan Tahap 4</span>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {fokus.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2">
            <span className="text-base font-extrabold text-[#D97706]">Ingat!</span>
            <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
              Rumus bukan untuk dihafal. Rumus muncul dari pola yang kamu temukan sendiri.
            </p>
          </div>
        </aside>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
