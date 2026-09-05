import Image from "next/image";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
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

export default async function Materi5Peta8Step1RefleksiPemahaman({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarSiswa = await getPageImage("M5-P8-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Apa yang Kamu Pelajari tentang Skala dan Luas Hari Ini?
        </p>
      </div>

      <div className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center gap-6 flex-wrap">
        <p className="m-0 flex-1 min-w-[220px] text-sm leading-[1.7] text-[#4B5563]">
          Setiap proses belajar memberikan pengalaman baru. Sekarang luangkan waktu sejenak untuk
          mengingat kembali bagaimana kamu menemukan hubungan antara faktor skala dan luas permukaan
          melalui kegiatan mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi,
          dan menyimpulkan.{" "}
          <span className="font-bold text-[#2563EB]">Jawablah dengan jujur sesuai pengalaman belajarmu hari ini.</span>
        </p>
        <div className="relative w-[160px] h-[120px] flex-shrink-0 rounded-[14px] overflow-hidden bg-[#EFF4FF]">
          <Image src={gambarSiswa} alt="Dua siswa mencatat hasil belajar" fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
              <path d="M9 11l3 3L22 4M22 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h11" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">A. Refleksi Pemahaman</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Centang (✓) semua pernyataan yang sesuai.</p>

        <div className="flex flex-col gap-3">
          {checklist.map((c) => (
            <label
              key={c.key}
              className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#2563EB] transition-colors"
            >
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
              <span className="text-sm font-semibold text-[#374151] group-hover:text-[#2563EB] transition-colors">
                {c.text}
              </span>
            </label>
          ))}
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto jurnal refleksimu (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
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
