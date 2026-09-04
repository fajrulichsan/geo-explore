import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const kesimpulanIndividu = [
  { key: "arti_jaring_jaring", label: "Menurutku, jaring-jaring bangun ruang adalah ..." },
  { key: "syarat_susunan_valid", label: "Suatu susunan bidang datar dapat disebut jaring-jaring yang valid apabila ..." },
  { key: "banyak_jaring_karena", label: "Satu bangun ruang dapat memiliki ... karena ..." },
];

const generalisasi = [
  {
    key: "lebih_dari_satu_jaring",
    label: "Mengapa satu bangun ruang dapat mempunyai lebih dari satu jaring-jaring?",
  },
  {
    key: "tidak_semua_jaring",
    label: "Mengapa tidak semua susunan bidang datar dapat disebut jaring-jaring?",
  },
  {
    key: "hubungan_sisi_posisi",
    label:
      "Apa hubungan antara jumlah sisi, posisi sisi, dan hubungan antarsisi dengan keberhasilan suatu susunan membentuk bangun ruang?",
  },
];

export default async function Materi2Peta7Step1KesimpulanGeneralisasi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 6 dari 6
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M2-P7-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot menulis kesimpulan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan (Generalisasi)
          </h1>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md">
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Selamat! Kamu telah melalui proses mengamati, berdiskusi, mengeksplorasi, mengolah
              informasi, dan memverifikasi hasil. Sekarang saatnya menyusun{" "}
              <span className="font-bold">kesimpulan umum</span> berdasarkan seluruh pengalaman
              belajarmu.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-start gap-4">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
        <div>
          <p className="m-0 text-sm font-bold text-[#92400E] mb-1">Ingat!</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kesimpulan bukan berasal dari tebakan, tetapi berasal dari bukti yang telah kamu
            temukan.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kesimpulan Individu
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">Lengkapilah kalimat berikut.</p>
            {kesimpulanIndividu.map((k, i) => (
              <div key={k.key} className="flex flex-col gap-1.5">
                <label htmlFor={k.key} className="flex items-start gap-2 text-sm font-semibold text-[#111827]">
                  <span className="w-5 h-5 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {k.label}
                </label>
                <input
                  id={k.key}
                  type="text"
                  name={`answers.${k.key}`}
                  defaultValue={getValue(k.key)}
                  required
                  placeholder="Jawabanmu..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors ml-7"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Generalisasi
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut.</p>
            {generalisasi.map((g, i) => (
              <div key={g.key} className="flex flex-col gap-1.5">
                <label htmlFor={g.key} className="flex items-start gap-2 text-sm font-semibold text-[#111827]">
                  <span className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {g.label}
                </label>
                <textarea
                  id={g.key}
                  name={`answers.${g.key}`}
                  defaultValue={getValue(g.key)}
                  rows={2}
                  required
                  placeholder="Jawabanmu..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none ml-7"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
