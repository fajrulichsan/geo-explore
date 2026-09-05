import Image from "next/image";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { n: 1, label: "Saya memahami bahwa luas permukaan limas merupakan jumlah luas seluruh sisi yang membatasi limas." },
  { n: 2, label: "Saya memahami cara menentukan luas alas limas." },
  { n: 3, label: "Saya memahami cara menentukan jumlah luas seluruh sisi tegak limas." },
  { n: 4, label: "Saya dapat menentukan luas permukaan berbagai jenis limas." },
  { n: 5, label: "Saya memahami hubungan limas, jaring-jaring limas, luas alas, dan luas sisi tegak." },
  { n: 6, label: "Saya dapat menjelaskan alasan mengapa rumus LP = La + Ls benar." },
];

const opsi = [
  { value: "sangat_paham", label: "Sangat Paham" },
  { value: "paham", label: "Paham" },
  { value: "cukup_paham", label: "Cukup Paham" },
  { value: "perlu_belajar_lagi", label: "Perlu Belajar Lagi" },
];

export default async function Materi4Peta8Step1PemahamanMateri({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarSiswa = await getPageImage("M4-P8-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
      </div>

      <div className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center gap-6 flex-wrap">
        <p className="m-0 flex-1 min-w-[220px] text-sm leading-[1.7] text-[#4B5563]">
          Setelah melakukan seluruh kegiatan pada <span className="font-bold text-[#111827]">Submateri 4 – Luas Permukaan Limas</span>,
          luangkan waktu sejenak untuk merefleksikan diri. Isi dengan jujur sesuai pengalamanmu.
        </p>
        <div className="relative w-[160px] h-[120px] flex-shrink-0 rounded-[14px] overflow-hidden bg-[#EFF4FF]">
          <Image src={gambarSiswa} alt="Tiga siswa berdiskusi hasil belajar" fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">A. Pemahaman Materi</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">
          Berilah tanda pada pilihan yang sesuai dengan pemahamanmu untuk setiap pernyataan.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          {pernyataan.map((p) => (
            <div key={p.n} className="flex flex-col gap-3 border-b border-[#F3F4F6] last:border-0 pb-5 last:pb-0">
              <p className="m-0 text-sm font-semibold text-[#374151]">
                <span className="text-[#9CA3AF] font-bold mr-1.5">{p.n}.</span>
                {p.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {opsi.map((o) => (
                  <label
                    key={o.value}
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.pemahaman_${p.n}`}
                      value={o.value}
                      defaultChecked={getValue(`pemahaman_${p.n}`) === o.value}
                      required
                      className="accent-[#2563EB]"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
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
