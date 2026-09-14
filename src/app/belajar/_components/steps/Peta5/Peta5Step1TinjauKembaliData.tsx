import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kolomBangun = ["Kubus", "Balok", "Prisma Segitiga", "Limas Segiempat", "Limas Segitiga"];

const baris = [
  "Bentuk sisi",
  "Susunan sisi",
  "Pasangan bidang sisi sejajar",
  "Bentuk sisi yang dipilih sebagai alas",
  "Jumlah sisi",
  "Jumlah rusuk",
  "Jumlah titik sudut",
];

export default function Peta5Step1TinjauKembaliData({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 4 dari 6 – Discovery Learning
        </div>
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Pada Tahap 3, kamu telah memperoleh data hasil eksplorasi menggunakan GeoGebra 3D dan Augmented
          Reality (AR). Sekarang, lengkapi data kelompokmu dengan hasil pengamatan anggota atau kelompok
          lain yang telah dibagikan. Selanjutnya, organisasikan dan bandingkan data tersebut untuk
          menemukan persamaan, perbedaan, dan pola pada bangun ruang.
        </p>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
          </svg>
          <h3 className="m-0 text-sm font-bold text-[#92400E]">Ingat!</h3>
        </div>
        <ul className="m-0 p-0 flex flex-col gap-2 list-none">
          {["Analisis data dengan teliti.", "Cari pola yang muncul.", "Pastikan dugaanmu berdasarkan data, bukan sekadar perkiraan."].map(
            (c) => (
              <li key={c} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 flex-shrink-0" />
                <span className="text-sm leading-[1.6] text-[#92400E]">{c}</span>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Organisasikan Data Hasil Pengamatan
        </div>
      </div>
      <p className="m-0 -mt-6 text-sm text-[#4B5563]">
        Lengkapi tabel berikut berdasarkan data Tahap 3 (GeoGebra 3D dan AR) serta data yang kamu peroleh
        dari teman/kelompok lain. Sisi yang dipilih sebagai alas ditetapkan berdasarkan posisi bangun yang
        sedang diamati.
      </p>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 w-1/4">Yang Dibandingkan</th>
                {kolomBangun.map((k) => (
                  <th key={k} className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 text-center border-l border-white/20">
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b, i) => (
                <tr key={b} className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-[#2563EB] align-top">{b}</td>
                  {kolomBangun.map((k, j) => (
                    <td key={k} className="px-4 py-3">
                      <input
                        type="text"
                        name={`answers.perbandingan_${i}_${j}`}
                        defaultValue={getValue(`perbandingan_${i}_${j}`)}
                        required
                        placeholder="..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-center text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 pt-0">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil tabel organisasi data (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/3/10`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
