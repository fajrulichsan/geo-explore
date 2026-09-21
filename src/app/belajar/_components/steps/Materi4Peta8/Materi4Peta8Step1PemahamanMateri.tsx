import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";
import LikertMatrix from "./LikertMatrix";

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

export default async function Materi4Peta8Step1PemahamanMateri({ materi, peta, step = "1", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const gambarSiswa = await getPageImage("M4-P8-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#FEF9E7] border border-[#DBEAFE] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5 items-center">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Setelah melakukan seluruh kegiatan pada{" "}
            <span className="font-bold text-[#1E3A8A]">Submateri 4 – Luas Permukaan Limas</span>, luangkan waktu
            sejenak untuk <span className="font-bold">merefleksikan diri</span>.
          </p>
          <p className="m-0 text-sm font-bold text-[#2563EB]">Isi dengan jujur sesuai pengalamanmu.</p>
        </div>
        <EditablePageImage
          imageKey="M4-P8-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarSiswa}
          alt="Tiga siswa belajar dengan laptop, buku, dan tablet berisi limas"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[300px] mx-auto overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">Pemahaman Materi</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Berilah tanda centang (✓) pada kolom yang sesuai dengan pemahamanmu.</p>
        <LikertMatrix prefix="pemahaman" pernyataan={pernyataan} opsi={opsi} answers={answers} />
      </div>

      <div className="flex justify-between items-center">
        <span />
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
