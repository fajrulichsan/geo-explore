import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const checklist = [
  { key: "paham_luas_permukaan_jumlah_sisi", text: "Saya memahami bahwa luas permukaan merupakan jumlah luas seluruh sisi bangun ruang." },
  { key: "paham_hubungan_jaring_luas", text: "Saya dapat menjelaskan hubungan antara jaring-jaring dan luas permukaan." },
  {
    key: "paham_lebih_dari_satu_cara",
    text: "Saya dapat menentukan luas permukaan kubus, balok, dan prisma menggunakan lebih dari satu cara.",
  },
  { key: "paham_alasan_matematis", text: "Saya dapat memberikan alasan matematis terhadap cara yang saya gunakan." },
  {
    key: "paham_asal_rumus_bukan_hafalan",
    text: "Saya memahami bagaimana rumus luas permukaan diperoleh dari hubungan antara jaring-jaring dan luas seluruh sisi, bukan sekadar dihafalkan.",
  },
];

export default async function Materi3Peta8Step1RefleksiPemahaman({ materi, peta, step = "1", editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarSiswa = await getPageImage("M3-P8-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-3">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <p className="m-0 text-[15px] font-semibold text-[#2563EB]">Apa yang Sudah Kamu Pelajari Hari Ini?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-5 items-center bg-gradient-to-br from-[#EFF4FF] to-[#DCE6FB] border border-[#DBE4FF] rounded-[20px] p-6">
        <div className="flex items-start gap-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="1.8" className="flex-shrink-0">
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M9 4h6v2H9zM8.5 10l1 1 2-2M8.5 14l1 1 2-2M8.5 18l1 1 2-2M13.5 10h2.5M13.5 14h2.5M13.5 18h2.5" />
          </svg>
          <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
            Luangkan waktu sejenak untuk mengingat kembali apa yang kamu pelajari, strategi yang kamu
            gunakan, alasan matematis yang kamu berikan, dan bagaimana keyakinanmu selama pembelajaran.
          </p>
        </div>
        <EditablePageImage
          imageKey="M3-P8-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarSiswa}
          alt="Tiga siswa berdiskusi dengan tablet, laptop, dan bangun ruang"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-[16px]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#166534]">
            Refleksi Pemahaman
          </div>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">
          Centang (✓) semua pernyataan yang sesuai dengan pengalaman belajarmu hari ini.
        </p>

        <div className="flex flex-col gap-3">
          {checklist.map((c) => (
            <label
              key={c.key}
              className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#16A34A] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${c.key}`}
                value="true"
                defaultChecked={getValue(c.key) === "true"}
                data-require-group="materi3peta8step1"
                className="peer sr-only"
              />
              <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#16A34A] peer-checked:border-[#16A34A] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#374151]">{c.text}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end items-center">
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
