import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  {
    key: "data-tahap-3",
    label: "Data Tahap 3 (Pengamatan)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    key: "hasil-tahap-4",
    label: "Hasil Tahap 4 (Pengolahan)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    key: "hasil-tahap-5",
    label: "Hasil Tahap 5 (Verifikasi)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    key: "tahap-6",
    label: "Tahap 6 (Menyimpulkan)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
];

const kotak = [
  {
    n: 1,
    key: "pola_ditemukan",
    title: "Pola yang telah kami temukan",
    placeholder: "Ketik pola yang ditemukan di sini...",
  },
  {
    n: 2,
    key: "dasar_pengelompokan_didukung_data",
    title: "Dasar pengelompokan yang telah didukung data",
    placeholder: "Ketik dasar pengelompokan di sini...",
  },
  {
    n: 3,
    key: "hal_diperbaiki_setelah_verifikasi",
    title: "Hal yang telah kami perbaiki setelah verifikasi",
    placeholder: "Ketik hal yang diperbaiki di sini...",
  },
];

export default async function Peta7Step1TinjauKembali({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const siswaBerdiskusi = await getPageImage("M1-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7 bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            Ingat!
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#1E3A8A]">
            Pada Tahap 5, kamu telah memeriksa kembali dugaan dan klasifikasimu menggunakan data serta
            alasan matematis. Sekarang gunakan hasil verifikasi tersebut untuk menemukan prinsip umum
            tentang cara mengklasifikasikan bangun ruang.
          </p>
        </div>
        <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-[20px] p-3 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M1-P7-L1-1"
            materi={materi}
            peta={peta}
            step="1"
            urutan="1"
            src={siswaBerdiskusi}
            alt="Tiga siswa di meja berdiskusi sambil menunjuk ke atas"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[360px] mx-auto rounded-xl overflow-hidden"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Tinjau Kembali Hasil Verifikasimu
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Buka kembali Hasil Verifikasi Kelompok pada Tahap 5. Gunakan hasil tersebut sebagai dasar untuk
          menyusun kesimpulanmu.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {alur.map((a, i) => {
            const isLast = i === alur.length - 1;
            return (
              <div key={a.key} className="flex items-center gap-3 w-full md:w-1/4">
                <div
                  className={`bg-[#F9FAFB] rounded-xl p-4 border-2 text-center w-full flex flex-col items-center gap-2 ${
                    isLast ? "border-[#2563EB] bg-[#EFF4FF]" : "border-[#E5E7EB]"
                  }`}
                >
                  {a.icon}
                  <p className={`m-0 text-xs font-semibold ${isLast ? "text-[#2563EB]" : "text-[#374151]"}`}>
                    {a.label}
                  </p>
                </div>
                {!isLast && <span className="font-bold text-[#2563EB] rotate-90 md:rotate-0 flex-shrink-0">→</span>}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kotak.map((c) => (
            <div key={c.n} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {c.n}
                </div>
                <h4 className="m-0 text-sm font-bold text-[#111827]">{c.title}</h4>
              </div>
              <textarea
                name={`answers.${c.key}`}
                defaultValue={getValue(c.key)}
                rows={4}
                placeholder={c.placeholder}
                required
                className="w-full flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <p className="m-0 text-sm italic text-[#4B5563]">
            <strong className="not-italic text-[#111827]">Catatan:</strong> Gunakan hasil yang sudah
            diverifikasi. Kamu tidak perlu melakukan pengamatan baru pada tahap ini.
          </p>
        </div>

        <div className="pt-2 border-t border-[#E5E7EB]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil kerja (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
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
