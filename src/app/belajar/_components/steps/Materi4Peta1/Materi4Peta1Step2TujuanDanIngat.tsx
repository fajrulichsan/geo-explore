import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Menemukan hubungan antara jaring-jaring limas dan luas permukaannya.",
  "Menentukan luas permukaan limas dari luas alas dan sisi-sisi tegaknya.",
  "Menggunakan lebih dari satu strategi untuk menentukan luas permukaan limas.",
  "Menjelaskan alasan matematis dari strategi yang digunakan.",
  "Membandingkan dan memperbaiki strategi penyelesaian.",
  "Menunjukkan keyakinan diri dalam menyelesaikan masalah.",
];

const ingatPoin = [
  "Luas permukaan suatu bangun ruang diperoleh dengan menjumlahkan luas seluruh sisi yang membatasinya.",
  "Limas memiliki satu alas dan beberapa sisi tegak berbentuk segitiga.",
  "Setiap sisi harus dihitung tepat satu kali.",
  "Rumus luas permukaan dapat ditemukan melalui hubungan jaring-jaring dan luas seluruh sisinya, bukan sekadar dihafalkan.",
];

const jenisLimas = [
  { key: "M4-P1-L1-5" as const, label: "Limas Segitiga" },
  { key: "M4-P1-L1-6" as const, label: "Limas Segiempat" },
  { key: "M4-P1-L1-7" as const, label: "Limas Segilima" },
];

export default async function Materi4Peta1Step2TujuanDanIngat({ materi, peta, step = "2", editFoto }: StepComponentProps) {
  const [gambarMaskot, ...gambarJenisLimas] = await Promise.all([
    getPageImage("M4-P1-L1-4"),
    ...jenisLimas.map((j) => getPageImage(j.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <StepHeader materi={materi} currentStep={2} totalSteps={2} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Tujuan Pembelajaran
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {tujuanPembelajaran.map((tujuan, i) => (
              <div
                key={tujuan}
                className="bg-white border border-[#E5E7EB] rounded-[16px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-3"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-sm leading-[1.6] text-[#374151] pt-1">{tujuan}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Ingat!
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {ingatPoin.map((poin) => (
              <div key={poin} className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#374151] leading-[1.5]">{poin}</span>
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M4-P1-L1-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={gambarMaskot}
            alt="Maskot siswa bersiap mengeksplorasi limas"
            editable={editFoto}
            containerClassName="relative w-24 h-24 self-end rounded-2xl overflow-hidden bg-[#EFF4FF] hidden sm:block"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Siap Mengeksplorasi?</h2>
          <p className="m-0 text-sm text-white/90 max-w-xl">
            Gunakan pengetahuan, logika, dan kreativitasmu untuk menemukan berbagai jaring-jaring
            limas dan luas permukaannya! Ada beberapa jenis limas yang akan kamu jumpai.
          </p>
        </div>
        <div className="relative flex flex-wrap items-center gap-4">
          {jenisLimas.map((jenis, i) => (
            <div key={jenis.key} className="flex flex-col items-center gap-2">
              <EditablePageImage
                imageKey={jenis.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 5)}
                src={gambarJenisLimas[i]}
                alt={jenis.label}
                editable={editFoto}
                containerClassName="relative w-20 h-20 rounded-xl overflow-hidden bg-white/15"
                imageClassName="object-contain"
              />
              <span className="text-xs font-semibold text-white/90">{jenis.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          MULAI BELAJAR
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
