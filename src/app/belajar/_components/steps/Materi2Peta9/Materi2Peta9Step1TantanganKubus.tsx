import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const petunjuk = [
  "Gunakan berbagai cara dan strategi.",
  "Tunjukkan proses berpikir dan alasanmu.",
  "Buatlah lebih dari satu alternatif jawaban.",
  "Kamu boleh menggunakan gambar, tabel, sketsa, atau model.",
  "Kerjakan secara mandiri terlebih dahulu, lalu bandingkan dengan teman kelompok.",
];

const ingat = [
  "Ada lebih dari satu jawaban yang benar.",
  "Berbagai ide menunjukkan beragam cara berpikir matematis.",
  "Setiap jawaban perlu didukung alasan yang jelas.",
];

const tantangan = [
  "Gambarlah minimal 4 jaring-jaring yang berbeda.",
  "Jelaskan bagaimana kamu memastikan bahwa jaring tersebut valid.",
  "Apakah ada pola yang kamu temukan?",
  "Adakah cara lain untuk membuat jaring-jaring kubus?",
];

const tips = [
  "Pindahkan posisi salah satu persegi.",
  "Ubah susunan atau hubungan antarsisi.",
  "Coba posisi persegi yang berbeda.",
  "Periksa apakah susunannya benar-benar berbeda.",
  "Gunakan GeoGebra 3D atau AR untuk menguji.",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default async function Materi2Peta9Step1TantanganKubus({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const mascotImage = await getPageImage("M2-P9-L1-1");
  const cubeImage = await getPageImage("M2-P9-L1-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] via-white to-[#FEF9E7] border border-[#DBE5FB] p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-6">
        <EditablePageImage
          imageKey="M2-P9-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Siswi berhijab menunjuk ke atas dengan buku terbuka di meja"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-48 sm:w-56 aspect-[576/528] flex-shrink-0"
        />
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1.5">
            <p className="m-0 text-lg font-extrabold text-[#1E3A8A]">Tunjukkan kemampuanmu!</p>
            <p className="m-0 text-sm leading-[1.65] text-[#374151]">
              Selesaikan masalah berikut dengan sebanyak-banyaknya cara, strategi, jawaban, atau
              ide yang berbeda. Gunakan GeoGebra 3D atau Augmented Reality (AR) jika diperlukan.
            </p>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-start gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBBF24" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l3 6.6 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.4l7-.8z" />
            </svg>
            <div className="flex flex-col gap-1.5">
              <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
              <ul className="m-0 pl-0 list-none flex flex-col gap-1">
                {ingat.map((it) => (
                  <li key={it} className="text-xs font-semibold text-[#78350F] leading-[1.5]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2">
            <path d="M12 2a5 5 0 00-3 9v2a1 1 0 001 1h4a1 1 0 001-1v-2a5 5 0 00-3-9z" />
            <path d="M9 21h6" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#111827]">Petunjuk Tantangan</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {petunjuk.map((p) => (
            <div key={p} className="flex items-start gap-2.5">
              <CheckIcon />
              <p className="m-0 text-sm text-[#374151] leading-[1.5]">{p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Masalah Open-Ended
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-5 items-center">
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <EditablePageImage
                imageKey="M2-P9-L1-2"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={cubeImage}
                alt="Kubus berwarna ungu"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-32 sm:w-40 aspect-[457/492]"
              />
              <p className="m-0 text-xs text-[#6B7280] text-center">
                Diberikan sebuah bangun ruang berbentuk <span className="font-bold text-[#7C3AED]">KUBUS</span>.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="m-0 text-sm font-bold text-[#111827]">
                Tantanganmu: Temukan sebanyak-banyaknya jaring-jaring kubus yang berbeda!
              </p>
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                {tantangan.map((t, i) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5]">
                    <span className="w-5 h-5 rounded-full bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#F0FDF4] border border-[#BBF0D3] rounded-[20px] p-6 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#166534]">Tips</p>
            <div className="flex flex-col gap-2">
              {tips.map((t) => (
                <div key={t} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <p className="m-0 text-sm text-[#374151] leading-[1.5]">{t}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl p-3.5 flex items-start gap-2.5 mt-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                <path d="M12 9v4M12 17h.01" />
                <path d="M10.3 3.9L2.5 17a1.6 1.6 0 001.4 2.4h16.2a1.6 1.6 0 001.4-2.4L13.7 3.9a1.6 1.6 0 00-2.8 0z" />
              </svg>
              <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
                <span className="font-bold">Catatan Penting:</span> Susunan yang hanya diputar
                (rotasi) atau dicerminkan (refleksi) tidak dihitung sebagai bentuk jaring-jaring
                baru.
              </p>
            </div>
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
