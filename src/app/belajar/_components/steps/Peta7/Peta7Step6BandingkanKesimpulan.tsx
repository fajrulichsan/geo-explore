import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { key: "dasar_pengelompokan", label: "Dasar pengelompokan" },
  { key: "bangun_lebih_dari_satu_kelompok", label: "Bangun yang dapat berada pada lebih dari satu kelompok" },
  { key: "syarat_klasifikasi_diterima", label: "Syarat klasifikasi yang dapat diterima" },
];

export default function Peta7Step6BandingkanKesimpulan({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Sampaikan kesimpulan awalmu kepada anggota kelompok. Bandingkan persamaan dan perbedaannya
          sebelum menyusun generalisasi bersama.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          F
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Bandingkan Kesimpulan Anggota Kelompok
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#EFF4FF]">
                <th className="p-3 text-sm font-bold text-[#2563EB] w-2/5 rounded-l-lg">Yang Dibandingkan</th>
                <th className="p-3 text-sm font-bold text-[#2563EB]">Pendapat 1</th>
                <th className="p-3 text-sm font-bold text-[#2563EB]">Pendapat 2</th>
                <th className="p-3 text-sm font-bold text-[#2563EB] rounded-r-lg">Hasil Kesepakatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b) => (
                <tr key={b.key}>
                  <td className="p-3 align-top text-sm font-semibold text-[#374151]">{b.label}</td>
                  <td className="p-3 align-top">
                    <input
                      type="text"
                      name={`answers.${b.key}_pendapat1`}
                      defaultValue={getValue(`${b.key}_pendapat1`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                  <td className="p-3 align-top">
                    <input
                      type="text"
                      name={`answers.${b.key}_pendapat2`}
                      defaultValue={getValue(`${b.key}_pendapat2`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                  <td className="p-3 align-top">
                    <input
                      type="text"
                      name={`answers.${b.key}_kesepakatan`}
                      defaultValue={getValue(`${b.key}_kesepakatan`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">👥</span>
          <h2 className="m-0 text-base font-bold text-[#111827]">Catatan Hasil Diskusi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#6B7280]">Persamaan pemikiran kami</label>
            <textarea
              name="answers.persamaan_pemikiran"
              defaultValue={getValue("persamaan_pemikiran")}
              rows={3}
              placeholder="Tuliskan persamaan pemikiran kelompokmu..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#6B7280]">Hal yang perlu kami sepakati</label>
            <textarea
              name="answers.hal_perlu_disepakati"
              defaultValue={getValue("hal_perlu_disepakati")}
              rows={3}
              placeholder="Tuliskan hal yang masih perlu disepakati..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
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
          href={`/belajar/${materi}/${peta}/5`}
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
