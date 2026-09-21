import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const checklist = [
  { key: "paham_perubahan_skala_pengaruhi_luas", text: "Saya memahami bahwa perubahan faktor skala memengaruhi luas permukaan bangun ruang." },
  { key: "paham_luas_ikuti_kuadrat_skala", text: "Saya memahami bahwa luas permukaan berubah mengikuti kuadrat faktor skala." },
  { key: "paham_hubungan_perubahan_panjang_luas", text: "Saya dapat menjelaskan hubungan antara perubahan panjang dan perubahan luas permukaan." },
  { key: "paham_gunakan_penemuan_masalah_baru", text: "Saya dapat menggunakan hasil penemuan untuk menyelesaikan masalah baru." },
  {
    key: "paham_ditemukan_bukan_dihafal",
    text: "Saya memahami bahwa hubungan tersebut ditemukan melalui pengamatan dan verifikasi, bukan sekadar menghafal rumus.",
  },
];

export default async function Materi5Peta8Step1PengantarPemahaman({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [header, siswa, siswi] = await Promise.all(
    (["M5-P8-L1-1", "M5-P8-L1-2", "M5-P8-L1-3"] as const).map((k) => getPageImage(k)),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Setelah Tahap 6 – Ayo Menyimpulkan
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center bg-white border border-[#DBEAFE] rounded-[20px] p-4 sm:p-5">
        <h2 className="m-0 text-lg font-extrabold text-[#1E3A8A]">
          Apa yang Kamu Pelajari tentang Skala dan Luas Hari Ini?
        </h2>
        <EditablePageImage
          imageKey="M5-P8-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={header}
          alt="Kaca pembesar, lampu ide, kubus, balok, limas, dan prisma"
          editable={editFoto}
          natural
          containerClassName="relative w-full sm:w-[300px] overflow-hidden"
        />
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#FEF9E7] border border-[#DBEAFE] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[150px_1fr_170px] gap-5 items-center">
        <EditablePageImage
          imageKey="M5-P8-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={siswa}
          alt="Siswa berpikir sambil memegang pena di depan buku"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[150px] mx-auto overflow-hidden"
        />
        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Setiap proses belajar memberikan pengalaman baru. Sekarang luangkan waktu sejenak untuk
            mengingat kembali bagaimana kamu menemukan hubungan antara faktor skala dan luas permukaan
            melalui kegiatan mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi,
            dan menyimpulkan.
          </p>
          <p className="m-0 text-sm font-bold text-[#2563EB]">Jawablah dengan jujur sesuai pengalaman belajarmu hari ini.</p>
        </div>
        <EditablePageImage
          imageKey="M5-P8-L1-3"
          materi={materi}
          peta={peta}
          step={step}
          urutan="3"
          src={siswi}
          alt="Siswi menulis di buku dengan pena"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[170px] mx-auto overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">Refleksi Pemahaman</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Centang (✓) semua pernyataan yang sesuai.</p>

        <div className="flex flex-col gap-3">
          {checklist.map((c) => (
            <label key={c.key} className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#2563EB] transition-colors">
              <input
                type="checkbox"
                name={`answers.${c.key}`}
                value="true"
                defaultChecked={getValue(c.key) === "true"}
                data-require-group="materi5peta8step1"
                className="peer sr-only"
              />
              <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
              <span className="text-sm font-semibold text-[#374151] group-hover:text-[#2563EB] transition-colors">{c.text}</span>
            </label>
          ))}
        </div>
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
