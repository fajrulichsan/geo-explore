import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangunList: { nama: string; color: string; imageKey: PageImageKey; urutan: string; alt: string }[] = [
  { nama: "Kubus", color: "#16A34A", imageKey: "M5-P3-L1-2", urutan: "2", alt: "Kubus rusuk 4 cm menjadi kubus rusuk 8 cm dengan k = 2" },
  { nama: "Balok", color: "#2563EB", imageKey: "M5-P3-L1-3", urutan: "3", alt: "Balok 6 × 4 × 3 menjadi balok 12 × 8 × 6 dengan k = 2" },
  { nama: "Prisma Segitiga", color: "#EA580C", imageKey: "M5-P3-L1-4", urutan: "4", alt: "Prisma segitiga panjang 6 cm menjadi panjang 12 cm dengan k = 2" },
  { nama: "Limas Segiempat", color: "#7C3AED", imageKey: "M5-P3-L1-5", urutan: "5", alt: "Limas segiempat sisi alas 3 cm menjadi 6 cm dengan k = 2" },
];

const pertanyaan = [
  { key: "ukuran_berubah", label: "Apa saja ukuran yang berubah ketika faktor skala k = 2 diterapkan?" },
  { key: "bentuk_berubah", label: "Apakah bentuk bangunnya berubah setelah diskala?" },
  { key: "jumlah_sisi_berubah", label: "Apakah jumlah sisi berubah? Jelaskan." },
  { key: "semua_ukuran_sama", label: "Menurut kelompokku, apakah semua ukuran berubah dengan faktor yang sama? Jelaskan." },
];

export default async function Materi5Peta3Step1AyoBerdiskusi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [heroImage, ...bangunImages] = await Promise.all([
    getPageImage("M5-P3-L1-1"),
    ...bangunList.map((b) => getPageImage(b.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8z" />
          </svg>
          Tahap 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid sm:grid-cols-[1fr_1.1fr] gap-5 items-center bg-gradient-to-br from-[#EFF4FF] to-white border border-[#DBEAFE] rounded-[24px] p-5 sm:p-6">
        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#1E3A8A]">Ayo Berdiskusi!</p>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Diskusikan hasil pengamatan yang telah kalian lakukan pada Tahap 1 bersama teman satu kelompok.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Bandingkan jawaban setiap anggota. Jika terdapat perbedaan pendapat, berikan alasan berdasarkan hasil
            pengamatan yang telah dilakukan.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa berdiskusi mengelilingi meja berisi tabel hasil pengamatan"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden"
        />
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3 px-4 flex items-start gap-2.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
        </svg>
        <p className="m-0 text-xs font-semibold text-[#92400E] leading-[1.6]">
          Ingat: Faktor skala k = 2 berarti setiap ukuran panjang pada bangun hasil skala menjadi 2 kali ukuran semula.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan kembali hasil pengamatan pada Tahap 1. Fokus kita pada kasus k = 2.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {bangunList.map((b, i) => (
            <div
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              style={{ borderTop: `4px solid ${b.color}` }}
            >
              <EditablePageImage
                imageKey={b.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={b.urutan}
                src={bangunImages[i]}
                alt={b.alt}
                editable={editFoto}
                natural
                containerClassName="relative w-full"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl py-2.5 px-4 flex items-center gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="m-0 text-xs text-[#166534]">
            <span className="font-bold">Tips:</span> Gunakan data di atas untuk berdiskusi dan menjawab pertanyaan di bawah ini.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="m-0 text-base font-bold text-[#1E3A8A]">Pertanyaan Diskusi</p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          {pertanyaan.map((p, i) => (
            <div key={p.key} className="flex flex-col gap-2">
              <label htmlFor={p.key} className="flex items-start gap-3 text-sm font-semibold text-[#374151] leading-[1.5]">
                <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {p.label}
              </label>
              <textarea
                id={p.key}
                name={`answers.${p.key}`}
                required
                rows={2}
                defaultValue={getValue(p.key)}
                placeholder="Tuliskan jawaban kelompokmu..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
              />
            </div>
          ))}
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
