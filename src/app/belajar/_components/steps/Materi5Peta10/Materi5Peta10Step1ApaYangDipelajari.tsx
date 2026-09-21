import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { text: <>Bangun Ruang</>, box: "bg-[#DBEAFE] border-[#93C5FD] text-[#1E3A8A]" },
  { text: <>Faktor Skala <i>k</i></>, box: "bg-[#DCFCE7] border-[#86EFAC] text-[#14532D]" },
  { text: <>Setiap ukuran panjang menjadi <b className="text-[#DC2626]"><i>k</i></b> kali ukuran semula.</>, box: "bg-[#FFEDD5] border-[#FDBA74] text-[#7C2D12]" },
  { text: <>Luas setiap sisi menjadi <b className="text-[#DC2626]"><i>k</i><sup>2</sup></b> kali luas semula.</>, box: "bg-[#FEE2E2] border-[#FCA5A5] text-[#7F1D1D]" },
  { text: <>Luas Permukaan menjadi <b className="text-[#DC2626]"><i>k</i><sup>2</sup></b> kali luas semula.</>, box: "bg-[#F3E8FF] border-[#D8B4FE] text-[#581C87]" },
];

function SectionTitle({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
        {letter}
      </div>
      <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
        {title}
      </div>
    </div>
  );
}

export default async function Materi5Peta10Step1ApaYangDipelajari({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const heroImage = await getPageImage("M5-P10-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman: Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Apa yang Telah Kamu Pelajari?" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-5 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-3 text-sm sm:text-[15px] leading-[1.7] text-[#374151]">
            <p className="m-0">
              Pada submateri ini kamu telah menemukan bahwa perubahan skala bangun ruang tidak
              hanya mengubah <span className="font-semibold text-[#2563EB]">setiap ukuran panjang</span>,
              tetapi juga mengubah <span className="font-semibold text-[#2563EB]">luas permukaannya</span>.
            </p>
            <p className="m-0">
              Melalui kegiatan mengamati, berdiskusi, bereksplorasi menggunakan GeoGebra 3D dan{" "}
              <i>Augmented Reality</i> (AR), mengolah informasi, memverifikasi, dan menyimpulkan,
              kamu menemukan sendiri hubungan antara faktor skala dan luas permukaan bangun ruang
              sisi datar.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P10-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa berdiskusi dengan laptop dan buku catatan"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-xl overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Konsep Dasar" />
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-2">
          <p className="m-0 mb-2 text-sm text-[#4B5563] self-start">
            Perhatikan alur hubungan perubahan skala terhadap luas permukaan.
          </p>
          {alur.map((a, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-full max-w-md">
              <div className={`w-full rounded-xl border px-4 py-3 text-center text-sm font-semibold ${a.box}`}>
                {a.text}
              </div>
              {i < alur.length - 1 && (
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="#1D4ED8" strokeWidth="2.2">
                  <path d="M8 1v16M2 11l6 6 6-6" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-3.5 flex items-center gap-3">
          <span className="text-lg flex-shrink-0">💡</span>
          <p className="m-0 text-sm text-[#785900]">
            <span className="font-extrabold">Catatan:</span> hubungan ini berlaku untuk semua nilai{" "}
            <i>k</i> &gt; 0, baik 0 &lt; <i>k</i> &lt; 1 (pengecilan) maupun <i>k</i> &gt; 1
            (pembesaran).
          </p>
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
