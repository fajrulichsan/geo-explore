import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const BANGUN = [
  { id: "kubus", label: "Kubus", rowBg: "bg-[#DCFCE7]", stroke: "#16A34A", path: "M12 3l8 4v10l-8 4-8-4V7z M4 7l8 4 8-4 M12 11v10", imageKey: "M8-P4-L4-1" },
  { id: "balok", label: "Balok", rowBg: "bg-[#FEF3C7]", stroke: "#F59E0B", path: "M3 9l5-4h13v9l-5 5H3z M3 9h13v10 M16 9l5-4", imageKey: "M8-P4-L4-2" },
  { id: "prisma", label: "Prisma Segitiga", rowBg: "bg-[#F3E8FF]", stroke: "#9333EA", path: "M12 3L4 19h16z M12 3l3 16", imageKey: "M8-P4-L4-3" },
  { id: "limas", label: "Limas Segiempat", rowBg: "bg-[#DBEAFE]", stroke: "#2563EB", path: "M12 3L3 19h18z M12 3v16", imageKey: "M8-P4-L4-4" },
] as const;

const FAKTOR = [
  { id: "setengah", label: "1/2" },
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
] as const;

const KOLOM = ["ukuran_awal", "ukuran_skala", "volume_skala", "faktor_volume"] as const;

const KOLOM_LABEL: Record<(typeof KOLOM)[number], string> = {
  ukuran_awal: "ukuran awal",
  ukuran_skala: "ukuran setelah diskala",
  volume_skala: "volume hasil skala",
  faktor_volume: "faktor perubahan volume",
};

export default async function Materi8Peta4Step4CatatanKelompok({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarBangun, gambarPensil] = await Promise.all([
    Promise.all(BANGUN.map((b) => getPageImage(b.imageKey))),
    getPageImage("M8-P4-L4-5"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Bereksplorasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Catatan Kelompok
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Lengkapilah tabel berikut berdasarkan hasil eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR). Pilihlah minimal dua jenis bangun ruang sisi datar dan dua faktor skala yang berbeda. Gunakan kedua faktor skala tersebut pada setiap bangun ruang yang dipilih, kemudian catat dan bandingkan hasil pengamatanmu pada tabel yang tersedia.
        </p>

        <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="bg-[#2563EB] text-white text-xs sm:text-sm">
                <th className="p-3 text-left font-bold">Bangun Ruang</th>
                <th className="p-3 font-bold">Faktor Skala (k)</th>
                <th className="p-3 font-bold">
                  Ukuran Awal (k = 1) (cm)
                  <span className="block text-[10px] font-normal">tuliskan semua ukuran yang diperlukan</span>
                </th>
                <th className="p-3 font-bold">
                  Ukuran Setelah Diskala (cm)
                  <span className="block text-[10px] font-normal">tuliskan semua ukuran yang diperlukan</span>
                </th>
                <th className="p-3 font-bold">Volume Hasil Skala (cm³)</th>
                <th className="p-3 font-bold">
                  Faktor Perubahan Volume (V<sub>baru</sub> : V<sub>awal</sub>)
                </th>
              </tr>
            </thead>
            <tbody>
              {BANGUN.map((b, bi) =>
                FAKTOR.map((f, i) => (
                  <tr key={`${b.id}-${f.id}`} className={i === 0 ? "border-t-2 border-[#93C5FD]" : "border-t border-[#DBEAFE]"}>
                    {i === 0 && (
                      <th scope="rowgroup" rowSpan={FAKTOR.length} className={`p-3 text-left align-middle w-[130px] ${b.rowBg}`}>
                        <span className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                          <EditablePageImage
                            imageKey={b.imageKey}
                            materi={materi}
                            peta={peta}
                            step={step}
                            urutan={String(bi + 1)}
                            src={gambarBangun[bi]}
                            alt={b.label}
                            editable={editFoto}
                            containerClassName="relative w-14 h-12 flex-shrink-0 overflow-hidden"
                            imageClassName="object-contain"
                          />
                          {b.label}
                        </span>
                      </th>
                    )}
                    <th scope="row" className="p-2 text-center text-sm font-bold text-[#1E3A8A]">{f.label}</th>
                    {KOLOM.map((kolom) => {
                      const key = `${b.id}_${f.id}_${kolom}`;
                      return (
                        <td key={kolom} className="p-1.5">
                          <input
                            type="text"
                            name={`answers.${key}`}
                            defaultValue={getValue(key)}
                            data-unit-group="catatan"
                            data-unit={`${b.id}_${f.id}`}
                            data-unit-parent={b.id}
                            data-unit-parent-min="2"
                            data-unit-per-parent-min="2"
                            aria-label={`${b.label}, k = ${f.label}, ${KOLOM_LABEL[kolom]}`}
                            className="w-full min-w-[90px] rounded-lg border border-[#E5E7EB] bg-white px-2 py-1.5 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors"
                          />
                        </td>
                      );
                    })}
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-4 bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl px-5 py-4">
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="m-0 text-sm font-bold text-[#92400E]">Catatan:</p>
          <ul className="m-0 pl-5 list-disc text-sm text-[#78350F] leading-[1.6] flex flex-col gap-1">
            <li>Ukuran awal (<span className="italic">k</span> = 1) adalah nilai ukuran dan volume sebelum perubahan skala.</li>
            <li>Ukuran hasil skala diperoleh setelah setiap ukuran dikalikan dengan faktor skala <span className="italic">k</span>.</li>
            <li>Volume hasil skala adalah volume bangun setelah diskala.</li>
            <li>Faktor perubahan volume = Volume Baru ÷ Volume Awal.</li>
            <li>Tuliskan semua ukuran yang diperlukan sesuai jenis bangun (misal: balok = p × l × t).</li>
            <li>Gunakan data hasil pengamatan dari GeoGebra 3D dan AR.</li>
            <li>Tuliskan hasil dengan jelas dan teliti.</li>
          </ul>
        </div>
          <EditablePageImage
            imageKey="M8-P4-L4-5"
            materi={materi}
            peta={peta}
            step={step}
            urutan="5"
            src={gambarPensil}
            alt="Pensil"
            editable={editFoto}
            containerClassName="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden hidden sm:block"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
