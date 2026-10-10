import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "dasar_pengelompokan", label: "Dasar pengelompokan" },
  { key: "bangun_lebih_dari_satu_kelompok", label: "Bangun yang dapat berada pada lebih dari satu kelompok" },
  { key: "syarat_klasifikasi_diterima", label: "Syarat klasifikasi yang dapat diterima" },
];

export default async function Peta7Step6BandingkanKesimpulan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const siswaBerdiskusi = await getPageImage("M1-P7-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-6 bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            Ingat!
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#1E3A8A]">
            Kesimpulan yang baik tidak hanya menyebutkan jawaban, tetapi menjelaskan pola, hubungan, dan
            alasan matematis yang didukung oleh data.
          </p>
        </div>
        <div className="lg:col-span-6 bg-white border border-[#E5E7EB] rounded-[20px] p-3 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M1-P7-L6-1"
            materi={materi}
            peta={peta}
            step="6"
            urutan="1"
            src={siswaBerdiskusi}
            alt="Tiga siswa di meja berdiskusi sambil menunjuk ke atas"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-xl overflow-hidden"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Bandingkan Kesimpulan Anggota Kelompok
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Sampaikan kesimpulan awalmu kepada anggota kelompok. Bandingkan persamaan dan perbedaannya
          sebelum menyusun generalisasi bersama.
        </p>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#EFF4FF]">
                <th className="p-3 text-sm font-bold text-[#2563EB] rounded-l-lg">Yang Dibandingkan</th>
                <th className="p-3 text-sm font-bold text-[#2563EB]">Pendapat 1</th>
                <th className="p-3 text-sm font-bold text-[#2563EB]">Pendapat 2</th>
                <th className="p-3 text-sm font-bold text-[#2563EB] rounded-r-lg">Hasil Kesepakatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b) => (
                <tr key={b.key}>
                  <td className="p-3 align-top text-sm font-semibold text-[#374151] w-1/4">{b.label}</td>
                  <td className="p-3 align-top">
                    <input
                      type="text"
                      name={`answers.${b.key}_pendapat_1`}
                      defaultValue={getValue(`${b.key}_pendapat_1`)}
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                  <td className="p-3 align-top">
                    <input
                      type="text"
                      name={`answers.${b.key}_pendapat_2`}
                      defaultValue={getValue(`${b.key}_pendapat_2`)}
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                  <td className="p-3 align-top">
                    <input
                      type="text"
                      name={`answers.${b.key}_hasil_kesepakatan`}
                      defaultValue={getValue(`${b.key}_hasil_kesepakatan`)}
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <circle cx="9" cy="8" r="3" />
              <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
              <circle cx="17" cy="8" r="3" />
              <path d="M14 15.5c3.2.5 5 2.3 5 4.5" />
            </svg>
            <h3 className="m-0 text-sm font-bold text-[#111827]">Catatan Hasil Diskusi</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#6B7280]">Persamaan pemikiran kami</label>
              <textarea
                name="answers.persamaan_pemikiran"
                defaultValue={getValue("persamaan_pemikiran")}
                rows={3}
                placeholder="Tulis persamaan pemikiran kelompok..."
                required
                className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#6B7280]">Hal yang perlu kami sepakati</label>
              <textarea
                name="answers.hal_perlu_disepakati"
                defaultValue={getValue("hal_perlu_disepakati")}
                rows={3}
                placeholder="Tulis hal yang perlu disepakati..."
                required
                className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
