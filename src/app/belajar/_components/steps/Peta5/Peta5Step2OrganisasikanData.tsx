import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Bangun = { key: PageImageKey; label: string };

const bangun: Bangun[] = [
  { key: "M1-P5-L1-1", label: "Kubus" },
  { key: "M1-P5-L1-2", label: "Balok" },
  { key: "M1-P5-L1-3", label: "Prisma Segitiga" },
  { key: "M1-P5-L1-4", label: "Limas Segiempat" },
  { key: "M1-P5-L1-5", label: "Limas Segitiga" },
];

const shapeKeys = ["kubus","balok","prisma_segitiga","limas_segiempat","limas_segitiga"];

const rows = [
  { key: "bentuk_sisi", label: "Bentuk sisi" },
  { key: "susunan_sisi", label: "Susunan sisi" },
  { key: "pasangan_sejajar", label: "Pasangan bidang sisi sejajar" },
  { key: "bentuk_alas", label: "Bentuk sisi yang dipilih sebagai alas" },
  { key: "jumlah_sisi", label: "Jumlah sisi" },
  { key: "jumlah_rusuk", label: "Jumlah rusuk" },
  { key: "jumlah_titik_sudut", label: "Jumlah titik sudut" },
];

export default async function Peta5Step2OrganisasikanData({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const bangunUrls = await Promise.all(bangun.map((b) => getPageImage(b.key)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={9} />
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Organisasikan Data Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Lengkapi tabel berikut berdasarkan data Tahap 3 (GeoGebra 3D dan AR) serta data yang kamu peroleh dari teman/kelompok lain.
        </p>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3 px-4 flex items-start gap-3 text-[13px] leading-[1.6] text-[#374151]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0">Sisi yang dipilih sebagai alas ditetapkan berdasarkan posisi bangun yang sedang diamati.</p>
        </div>

        <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[820px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left text-sm font-bold py-3 px-4 w-[190px]">Yang Dibandingkan</th>
                {bangun.map((b, i) => (
                  <th key={b.key} className="py-3 px-2 text-sm font-bold">
                    <span className="flex items-center justify-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={bangunUrls[i]} alt="" className="w-7 h-7 object-contain bg-white rounded-md p-0.5" />
                      {b.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} className="border-t border-[#E5E7EB]">
                  <th scope="row" className="text-left text-[13px] font-bold text-[#1E3A8A] py-2.5 px-4">{r.label}</th>
                  {shapeKeys.map((s, i) => (
                    <td key={s} className="py-2 px-2">
                      <input
                        name={`answers.b_${r.key}_${s}`}
                        defaultValue={getValue(`b_${r.key}_${s}`)}
                        type="text"
                        required
                        aria-label={`${r.label} ${bangun[i].label}`}
                        placeholder="..."
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
