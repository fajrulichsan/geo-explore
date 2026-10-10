import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";
import Peta5Step5BandingkanHasilKelompokForm from "./Peta5Step5BandingkanHasilKelompokForm";

const ingat = [
  "Analisis data dengan teliti.",
  "Cari pola yang muncul.",
  "Pastikan dugaanmu berdasarkan data, bukan sekadar perkiraan."
];

const KEYS = [
  "bentuk_sisi",
  "susunan_sisi",
  "pasangan_bidang",
  "bentuk_alas",
  "jumlah_sisi",
  "jumlah_rusuk",
  "jumlah_titik_sudut",
  "catatan_lain",
] as const;

type Isian = Record<(typeof KEYS)[number], string>;

function parseEntries(raw: unknown): Record<string, string>[] {
  if (typeof raw !== "string" || !raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Record<string, string>[]) : [];
  } catch {
    return [];
  }
}

export default async function Peta5Step5BandingkanHasilKelompok({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const siswa = await getPageImage("M1-P5-L5-1");

  // Data kelompokmu diambil otomatis dari hasil eksplorasi Tahap 3 (GeoGebra 3D + AR), Peta 4.
  const userId = await getSessionUserId();
  const rows = userId ? await getMateriProgress(userId, materi) : [];
  const eksplorasi = rows.filter((r) => r.peta === "4");
  const geoGebra = parseEntries(eksplorasi.find((r) => r.step === "3")?.answers?.pengamatan_bangun);
  const ar = parseEntries(eksplorasi.find((r) => r.step === "6")?.answers?.pengamatan_ar);

  const dataKelompokmu: Record<string, Isian> = {};
  for (const entry of geoGebra) {
    const arEntry = ar.find((a) => a.model_diamati === entry.model_diamati);
    const isian = {} as Isian;
    for (const key of KEYS) {
      isian[key] = entry[key] || (key === "catatan_lain" ? arEntry?.informasi_tambahan : arEntry?.[key]) || "";
    }
    dataKelompokmu[entry.model_diamati] = isian;
  }

  return (
    <Peta5Step5BandingkanHasilKelompokForm
      materi={materi}
      peta={peta}
      initialAnswers={initialAnswers ?? {}}
      dataKelompokmu={dataKelompokmu}
      header={
        <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      }
      ingat={
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" className="flex-shrink-0">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </svg>
              <p className="m-0 text-base font-extrabold text-[#92400E]">Ingat!</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((teks) => (
                <li key={teks} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
          <EditablePageImage
            imageKey="M1-P5-L5-1"
            materi={materi}
            peta={peta}
            step="5"
            urutan="1"
            src={siswa}
            alt="Tiga siswa berdiskusi sambil menulis di buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
          />
        </div>

      }
    />
  );
}
