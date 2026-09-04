import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { key: "persamaan_jaring", label: "Apa persamaan jaring-jaring yang berhasil dilipat menjadi bangun ruang?" },
  { key: "perbedaan_gagal", label: "Apa perbedaan jaring-jaring yang gagal dilipat?" },
  {
    key: "bagian_menentukan",
    label:
      "Menurutmu, bagian atau hubungan apa yang paling menentukan apakah suatu susunan bidang datar dapat menjadi jaring-jaring yang valid?",
  },
  {
    key: "jumlah_sisi_sama",
    label: "Apakah semua jaring-jaring dengan jumlah sisi yang sama pasti dapat dilipat? Jelaskan alasanmu.",
  },
];

const klasifikasi = [
  { key: "jaring_valid", label: "Jaring-jaring valid" },
  { key: "susunan_tidak_valid", label: "Susunan yang tidak valid sebagai jaring-jaring" },
  { key: "lebih_dari_satu", label: "Memiliki lebih dari satu alternatif jaring-jaring" },
  { key: "satu_alternatif", label: "Memiliki satu alternatif jaring-jaring" },
  { key: "cara_lain", label: "Cara lain menurut kelompok" },
];

export default async function Materi2Peta5Step3HubunganKlasifikasi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Temukan Hubungan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            <p className="m-0 text-sm text-[#4B5563]">
              Jawablah pertanyaan berikut berdasarkan hasil eksplorasi dan informasi yang telah kalian
              kumpulkan.
            </p>
            {pertanyaan.map((p, i) => (
              <div key={p.key} className="flex flex-col gap-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <label htmlFor={`pertanyaan-${p.key}`} className="text-sm font-bold text-[#111827] leading-[1.5]">
                    {p.label}
                  </label>
                </div>
                <textarea
                  id={`pertanyaan-${p.key}`}
                  name={`answers.hubungan_${p.key}`}
                  defaultValue={getValue(`hubungan_${p.key}`)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Susun Klasifikasi Awal
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Lengkapilah tabel klasifikasi awal berdasarkan hasil pengolahan informasimu.
            </p>
            <div className="flex flex-col gap-3">
              {klasifikasi.map((k) => (
                <div key={k.key} className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-2 sm:gap-4 items-start rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                  <span className="text-sm font-bold text-[#111827]">{k.label}</span>
                  <input
                    type="text"
                    name={`answers.klasifikasi_${k.key}`}
                    defaultValue={getValue(`klasifikasi_${k.key}`)}
                    placeholder="Contoh (tuliskan/tempel gambar)..."
                    required
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
