import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangun = [
  { key: "M1-P9-L1-1", label: "Kubus" },
  { key: "M1-P9-L1-2", label: "Balok" },
  { key: "M1-P9-L1-3", label: "Prisma Segitiga" },
  { key: "M1-P9-L1-4", label: "Prisma Segi Lima" },
  { key: "M1-P9-L1-5", label: "Limas Segitiga" },
  { key: "M1-P9-L1-6", label: "Limas Segiempat" },
] as const;

const petunjuk = [
  "Gunakan lebih dari satu dasar klasifikasi.",
  "Pastikan dasar klasifikasi yang kamu gunakan berlaku untuk semua bangun.",
  "Berikan alasan matematis yang logis.",
  "Gunakan data hasil pengamatanmu.",
];

const baris = [1, 2, 3];

export default async function Peta9Step1MengelompokkanBangunRuang({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const images = await Promise.all(bangun.map((b) => getPageImage(b.key)));
  const hero = await getPageImage("M1-P9-L1-7");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        <div className="md:col-span-6 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2.5">
          <h3 className="m-0 text-sm font-bold text-[#111827]">Saatnya Mencoba!</h3>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Selama enam tahap Discovery Learning, kamu telah menemukan bahwa bangun ruang dapat dikelompokkan
            dengan berbagai cara. Sekarang gunakan seluruh pengetahuanmu untuk menyelesaikan tantangan berikut.
          </p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Tidak hanya satu jawaban yang benar. Yang terpenting adalah dasar klasifikasi yang jelas, diterapkan
            secara konsisten, serta didukung alasan matematis yang logis.
          </p>
        </div>
        <div className="md:col-span-6 bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] relative min-h-[260px] overflow-hidden">
          <EditablePageImage
            imageKey="M1-P9-L1-7"
            materi={materi}
            peta={peta}
            step="1"
            urutan="7"
            src={hero}
            alt="Tiga siswa berdiskusi bersemangat mengerjakan tantangan open-ended"
            editable={editFoto}
            imageClassName="object-cover"
            containerClassName="absolute inset-0"
          />
        </div>
      </div>

      <div className="bg-white border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-2.5">
        <h3 className="m-0 text-sm font-bold text-[#1D4ED8]">Petunjuk Umum</h3>
        <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2">
          {petunjuk.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-0.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tantangan 1. Mengelompokkan Bangun Ruang
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
          Perhatikan keenam bangun berikut, lalu kelompokkan menggunakan minimal tiga dasar klasifikasi yang
          berbeda.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {bangun.map((b, i) => (
            <div key={b.key} className="bg-white border border-[#E5E7EB] rounded-[16px] p-2.5 flex flex-col items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <EditablePageImage
                imageKey={b.key}
                materi={materi}
                peta={peta}
                step="1"
                urutan={String(i + 1)}
                src={images[i]}
                alt={b.label}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-square"
              />
              <span className="text-xs font-bold text-[#111827] text-center">{b.label}</span>
            </div>
          ))}
        </div>

        <div className={"bg-white border border-[#E5E7EB] rounded-[20px] !p-0 overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]"}>
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left font-bold px-4 py-3 w-[8%]"> </th>
                <th className="text-left font-bold px-4 py-3 w-[28%]">Dasar Klasifikasi</th>
                <th className="text-left font-bold px-4 py-3 w-[36%]">Kelompok yang Terbentuk</th>
                <th className="text-left font-bold px-4 py-3">Alasan Matematis</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((n) => (
                <tr key={n} className="border-t border-[#E5E7EB] align-top">
                  <td className="px-4 py-3 font-bold text-[#2563EB]">{n}</td>
                  <td className="px-2 py-2">
                    <input
                      type="text"
                      name={`answers.klasifikasi_${n}_dasar`}
                      defaultValue={getValue(`klasifikasi_${n}_dasar`)}
                      placeholder="Dasar klasifikasi..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <textarea
                      name={`answers.klasifikasi_${n}_kelompok`}
                      defaultValue={getValue(`klasifikasi_${n}_kelompok`)}
                      rows={2}
                      placeholder="Kelompok yang terbentuk..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm resize-y focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <textarea
                      name={`answers.klasifikasi_${n}_alasan`}
                      defaultValue={getValue(`klasifikasi_${n}_alasan`)}
                      rows={2}
                      placeholder="Alasan matematis..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm resize-y focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm font-semibold text-[#92400E] leading-[1.6]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0 mt-0.5">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l7.1-1.01z" />
          </svg>
          Catatan: Pastikan dasar klasifikasi yang kamu gunakan diterapkan secara konsisten pada semua bangun.
        </div>
      </div>

      <div className="flex justify-end items-center">
        <NextStepButton />
      </div>
    </form>
  );
}
