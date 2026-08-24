import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

const kolomBangun = ["Kubus", "Balok", "Prisma Segitiga", "Limas Segiempat", "Limas Segitiga"];

const baris = [
  "Bentuk sisi",
  "Susunan sisi",
  "Pasangan bidang sisi sejajar",
  "Bentuk alas",
  "Jumlah sisi",
  "Jumlah rusuk",
  "Jumlah titik sudut",
];

export default function Peta4Step2OrganisasikanData({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 4 – AYO MENGOLAH INFORMASI
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            B
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Organisasikan Data Hasil Pengamatan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Berdasarkan pengamatanmu sebelumnya, lengkapilah tabel perbandingan karakteristik bangun ruang
          sisi datar berikut ini.
        </p>
      </div>

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
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
