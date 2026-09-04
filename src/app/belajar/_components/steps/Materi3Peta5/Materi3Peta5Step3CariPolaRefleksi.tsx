import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma" },
];

export default async function Materi3Peta5Step3CariPolaRefleksi({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const cubeImage = await getPageImage("M3-P5-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Luas Permukaan</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Cari Pola</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Perhatikan hasil perhitunganmu. Lengkapilah tabel berikut.
        </p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-[#7C3AED] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/4">
                  Bangun
                </th>
                <th className="bg-[#7C3AED] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Pola yang Ditemukan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {bangunRuang.map((b) => (
                <tr key={b.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{b.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.pola_${b.key}`}
                      defaultValue={getValue(`pola_${b.key}`)}
                      placeholder="Ketik di sini..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#7C3AED]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="pola_hubungan" className="text-sm text-[#374151]">
            Pola apa yang kamu temukan tentang hubungan antara luas setiap sisi dan luas permukaan
            berdasarkan hasil perhitunganmu?
          </label>
          <textarea
            id="pola_hubungan"
            name="answers.pola_hubungan"
            defaultValue={getValue("pola_hubungan")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#DDD6FE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
        </svg>
        <p className="m-0 text-xs leading-[1.7] text-[#374151]">
          Pola yang kamu temukan akan digunakan untuk menyusun strategi dan rumus sementara pada
          halaman berikutnya.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#D97706]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2">
              <path d="M9 18h6M10 22h4M12 2a6 6 0 00-3.4 10.9c.6.4 1 1.1 1 1.8v.3h4.8v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 2z" />
            </svg>
            Refleksi Mini
          </p>
          <label htmlFor="hari_ini_memahami" className="text-xs text-[#92400E] font-semibold">
            Hari ini aku mulai memahami bahwa...
          </label>
          <textarea
            id="hari_ini_memahami"
            name="answers.hari_ini_memahami"
            defaultValue={getValue("hari_ini_memahami")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#FDE68A] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDE68A">
                <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
              </svg>
              Ingat!
            </p>
            <p className="m-0 text-xs leading-[1.6] text-white/90">
              Sebelum menggunakan rumus, pahamilah mengapa rumus tersebut terbentuk. Rumus berasal
              dari pola yang kamu temukan sendiri.
            </p>
          </div>
          <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
            <EditablePageImage
              imageKey="M3-P5-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={cubeImage}
              alt="Ilustrasi kubus 3D"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE HALAMAN 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
