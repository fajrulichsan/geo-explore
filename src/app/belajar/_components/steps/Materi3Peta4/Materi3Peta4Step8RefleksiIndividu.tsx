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
  { key: "mencatat_info", label: "Saya mencatat semua informasi penting." },
  { key: "siap_mengolah", label: "Saya siap mengolah hasil pengamatan saya pada tahap berikutnya." },
];

export default async function Materi3Peta4Step8RefleksiIndividu({
  materi,
  peta,
  step = "8",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "true" || answers[key] === "on";

  const [gambarSiswi, gambarSiswa, gambarEksplorasi] = await Promise.all([
    getPageImage("M3-P4-L8-1"),
    getPageImage("M3-P4-L8-2"),
    getPageImage("M3-P4-L8-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={8} />
        <div className="flex items-center gap-3.5 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
          <span className="rounded-full bg-[#EFF4FF] text-[#2563EB] text-xs font-bold py-1 px-3">Tahap 3 dari 6</span>
        </div>
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
        <p className="m-0 text-sm text-[#4B5563]">Centang pernyataan berikut sesuai dengan dirimu.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 items-center">
          <div className="flex flex-col gap-2.5">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-2xl py-3 px-4 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#7C3AED] has-[:checked]:bg-[#F5F3FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={isChecked(p.key)}
                  className="w-4 h-4 mt-0.5 accent-[#7C3AED] flex-shrink-0"
                />
                {p.label}
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
            alt="Siswi berhijab menulis di buku dengan ide lampu menyala"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full max-w-[300px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden bg-white"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#92400E] leading-[1.5]">
            Refleksi membantumu mengenali langkah yang sudah baik dan hal yang perlu ditingkatkan
            sebelum ke Tahap 4!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
          <p className="m-0 text-lg font-extrabold text-[#92400E]">Ingat!</p>
          <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.6]">
            Semakin lengkap datamu, semakin kuat dasar untuk memeriksa dugaan kelompokmu.
          </p>
          <EditablePageImage
            imageKey="M3-P4-L8-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarEksplorasi}
            alt="Tiga siswa mengamati kubus AR pada tablet dan laptop"
            editable={editFoto}
            natural
            containerClassName="relative w-full mt-auto rounded-2xl overflow-hidden bg-white"
          />
        </div>

        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex flex-col gap-3">
          <p className="m-0 text-lg font-extrabold text-[#9A3412]">Kotak Motivasi</p>
          <p className="m-0 text-sm text-[#7C2D12] leading-[1.6]">
            Penemuan besar selalu dimulai dari pengamatan kecil. Teruslah mengamati dengan cermat,
            bertanya, dan mencatat temuanmu. Kamu pasti bisa!
          </p>
          <EditablePageImage
            imageKey="M3-P4-L8-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarSiswa}
            alt="Siswa mengepalkan tangan semangat sambil membaca buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[260px] mt-auto self-end rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#C7D7FE] rounded-2xl py-4 px-5">
        <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
          Data yang telah kamu kumpulkan akan diolah pada Tahap 4 untuk menentukan luas permukaan kubus, balok, dan prisma.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/7`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
