import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "membuka_jaring", label: "Saya berhasil membuka jaring-jaring." },
  { key: "tahu_ukuran", label: "Saya mengetahui ukuran setiap sisi." },
  { key: "sisi_sama", label: "Saya menemukan sisi-sisi yang sama bentuk dan ukurannya." },
  {
    key: "hubungan_ditemukan",
    label: "Saya menemukan hubungan antara jaring-jaring, ukuran sisi, dan luas setiap sisi.",
  },
  { key: "siap_mengolah", label: "Saya siap mengolah hasil pengamatan saya pada tahap berikutnya." },
];

export default async function Materi3Peta4Step8RefleksiEksplorasi({
  materi,
  peta,
  step = "8",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "true" || answers[key] === "on";

  const [gambarSiswi, gambarSiswa] = await Promise.all([
    getPageImage("M3-P4-L8-1"),
    getPageImage("M3-P4-L8-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={8} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Refleksi Eksplorasi (Individu)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-5 items-start">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Centang (&#10003;) pernyataan berikut sesuai dengan dirimu.
            </p>
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={isChecked(p.key)}
                  required
                  className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#7C3AED]"
                />
                <span className="text-sm font-semibold text-[#374151] leading-[1.6] group-has-[:checked]:text-[#111827]">
                  {p.label}
                </span>
              </label>
            ))}
          </div>

          <EditablePageImage
            imageKey="M3-P4-L8-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswi}
            alt="Maskot siswi menulis refleksi di buku catatan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-[#F5F3FF] hidden lg:block"
          />
        </div>

        <div className="bg-[#EFF4FF] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.5]">
            Refleksi membantumu mengenali langkah yang sudah baik dan hal yang perlu ditingkatkan
            sebelum ke Tahap 4!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#D97706" stroke="none">
              <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 16.9 6.2 20l1.1-6.5-4.8-4.6L9.1 8z" />
            </svg>
            <span className="text-sm font-bold text-[#92400E]">Ingat!</span>
          </div>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
            Semakin lengkap datamu, semakin kuat dasar untuk memeriksa dugaan kelompokmu.
          </p>
        </div>

        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 flex items-start gap-4">
          <EditablePageImage
            imageKey="M3-P4-L8-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarSiswa}
            alt="Maskot siswa mengepalkan tangan penuh semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#5B21B6]">Kotak Motivasi</span>
            <p className="m-0 text-sm text-[#4C1D95] leading-[1.6]">
              Penemuan besar selalu dimulai dari pengamatan kecil. Teruslah mengamati dengan
              cermat, bertanya, dan mencatat temuanmu. Kamu pasti bisa!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
        <p className="m-0 text-sm font-semibold text-[#374151] leading-[1.5]">
          Data yang telah kamu kumpulkan akan diolah pada Tahap 4 untuk menentukan luas permukaan.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/7`}
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
