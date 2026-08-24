import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

const baris = [
  { icon: "🔷", label: "Bentuk dan susunan sisi", key: "bentuk_susunan_sisi" },
  { icon: "📐", label: "Pasangan bidang sisi sejajar", key: "pasangan_bidang_sejajar" },
  { icon: "🧱", label: "Bentuk sisi yang dipilih sebagai alas", key: "bentuk_sisi_alas" },
  { icon: "🔢", label: "Jumlah sisi/rusuk/titik sudut", key: "jumlah_sisi_rusuk_titik_sudut" },
];

export default function Peta6Step3HubungkanDasarPengelompokan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 6 – AYO MENYIMPULKAN
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Hubungkan Dasar Pengelompokan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Perhatikan kembali beberapa dasar pengelompokan yang telah kamu gunakan. Lengkapi hubungan
          berikut.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#EFF4FF]">
                <th className="p-3 text-sm font-bold text-[#2563EB] w-1/3 rounded-l-lg">
                  Dasar Pengelompokan
                </th>
                <th className="p-3 text-sm font-bold text-[#2563EB] w-1/3">
                  Contoh Bangun yang Memiliki Kemiripan
                </th>
                <th className="p-3 text-sm font-bold text-[#2563EB] w-1/3 rounded-r-lg">
                  Apa yang Dapat Kamu Simpulkan?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b) => (
                <tr key={b.label}>
                  <td className="p-3 align-top">
                    <div className="flex gap-2 items-start text-sm font-semibold text-[#374151]">
                      <span>{b.icon}</span>
                      <span>{b.label}</span>
                    </div>
                  </td>
                  <td className="p-3 align-top">
                    <textarea
                      name={`answers.${b.key}_contoh_bangun`}
                      defaultValue={getValue(`${b.key}_contoh_bangun`)}
                      rows={3}
                      placeholder="Tuliskan bangun..."
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                    />
                  </td>
                  <td className="p-3 align-top">
                    <textarea
                      name={`answers.${b.key}_kesimpulan`}
                      defaultValue={getValue(`${b.key}_kesimpulan`)}
                      rows={3}
                      placeholder="Kesimpulanmu..."
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-3 align-top">
                  <div className="flex flex-col gap-2 text-sm font-semibold text-[#374151]">
                    <div className="flex gap-2 items-start">
                      <span>➕</span>
                      <span>Dasar lain:</span>
                    </div>
                    <input
                      type="text"
                      name="answers.dasar_lain"
                      defaultValue={getValue("dasar_lain")}
                      placeholder="..."
                      className="w-full bg-transparent border-b border-[#E5E7EB] p-1 text-sm focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </div>
                </td>
                <td className="p-3 align-top">
                  <textarea
                    name="answers.dasar_lain_contoh_bangun"
                    defaultValue={getValue("dasar_lain_contoh_bangun")}
                    rows={3}
                    placeholder="Tuliskan bangun..."
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-3 align-top">
                  <textarea
                    name="answers.dasar_lain_kesimpulan"
                    defaultValue={getValue("dasar_lain_kesimpulan")}
                    rows={3}
                    placeholder="Kesimpulanmu..."
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm text-[#4B5563]">
            <strong className="text-[#111827]">Catatan:</strong> Sisi yang dipilih sebagai alas ditentukan
            berdasarkan posisi bangun yang sedang diamati.
          </p>
        </div>

        <div className="pt-2 border-t border-[#E5E7EB]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil kerja (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
