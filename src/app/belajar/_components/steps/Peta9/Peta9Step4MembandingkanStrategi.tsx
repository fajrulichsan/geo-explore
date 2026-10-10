import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "dasar", label: "Dasar klasifikasi" },
  { key: "kelompok", label: "Kelompok yang terbentuk" },
  { key: "kelebihan", label: "Kelebihan" },
  { key: "kekurangan", label: "Kekurangan" },
];

export default async function Peta9Step4MembandingkanStrategi({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const hero = await getPageImage("M1-P9-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        <div className="md:col-span-6 bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-2.5 relative">
          <h3 className="m-0 text-sm font-bold text-[#1D4ED8]">Mengembangkan Strategi Klasifikasi</h3>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Sekarang bandingkan berbagai strategi yang telah kamu gunakan. Pilih strategi yang menurutmu paling
            sesuai untuk tujuan pengelompokanmu, dan jelaskan alasan serta buktinya menggunakan data hasil
            pengamatan.
          </p>
        </div>
        <div className="md:col-span-6 bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] relative min-h-[260px] overflow-hidden">
          <EditablePageImage
            imageKey="M1-P9-L4-1"
            materi={materi}
            peta={peta}
            step="4"
            urutan="1"
            src={hero}
            alt="Tiga siswa berdiskusi membandingkan strategi klasifikasi"
            editable={editFoto}
            imageClassName="object-cover"
            containerClassName="absolute inset-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Tantangan 4. Membandingkan Strategi
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
          Perhatikan kembali tiga cara klasifikasi yang telah kamu buat pada halaman sebelumnya. Lengkapilah
          tabel berikut.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] !p-0 overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left font-bold px-4 py-3 w-[26%]">Yang Dibandingkan</th>
                <th className="text-left font-bold px-4 py-3">Cara 1</th>
                <th className="text-left font-bold px-4 py-3">Cara 2</th>
                <th className="text-left font-bold px-4 py-3">Cara 3</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((b) => (
                <tr key={b.key} className="border-t border-[#E5E7EB] align-top">
                  <th scope="row" className="text-left font-bold text-[#111827] px-4 py-2.5 align-top">
                    {b.label}
                  </th>
                  {[1, 2, 3].map((n) => (
                    <td key={n} className="px-2 py-2">
                      <textarea
                        name={`answers.banding_${b.key}_${n}`}
                        defaultValue={getValue(`banding_${b.key}_${n}`)}
                        rows={2}
                        placeholder="..."
                        required
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm resize-y focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
