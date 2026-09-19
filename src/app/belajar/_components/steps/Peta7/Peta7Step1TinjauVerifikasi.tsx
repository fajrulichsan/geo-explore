import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const alurData = [
  { key: "data-tahap-3", imageKey: "M1-P7-L1-1" as PageImageKey, label: "Data Tahap 3" },
  { key: "hasil-tahap-4", imageKey: "M1-P7-L1-2" as PageImageKey, label: "Hasil Tahap 4" },
  { key: "hasil-tahap-5", imageKey: "M1-P7-L1-3" as PageImageKey, label: "Hasil Tahap 5" },
  { key: "tahap-6", imageKey: "M1-P7-L1-4" as PageImageKey, label: "Tahap 6 (Kesimpulan)" },
];

export default async function Peta7Step1TinjauVerifikasi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const alurDataImages = await Promise.all(alurData.map((a) => getPageImage(a.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Tinjau Kembali Hasil Verifikasi
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] relative overflow-hidden">
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Buka kembali Hasil Verifikasi Kelompok pada Tahap 5. Gunakan hasil tersebut sebagai dasar untuk
          menyusun kesimpulanmu.
        </p>
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
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="m-0 text-lg font-bold text-[#111827]">Alur Data</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {alurData.map((a, i) => {
            const isLast = i === alurData.length - 1;
            return (
              <div key={a.key} className="flex items-center gap-3 w-full md:w-1/4">
                <div
                  className={`bg-white rounded-xl p-4 border-2 text-center w-full shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${
                    isLast ? "border-[#2563EB]" : "border-[#E5E7EB]"
                  }`}
                >
                  <EditablePageImage
                    imageKey={a.imageKey}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={String(i + 1)}
                    src={alurDataImages[i]}
                    alt={a.label}
                    editable={editFoto}
                    imageClassName="object-contain"
                    containerClassName="relative w-40 h-40 max-w-full mx-auto mb-1"
                  />
                  <p className={`m-0 text-xs font-semibold ${isLast ? "font-bold text-[#2563EB]" : "text-[#374151]"}`}>
                    {a.label}
                  </p>
                </div>
                {!isLast && (
                  <span className="font-bold text-[#2563EB] rotate-90 md:rotate-0 flex-shrink-0">→</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="m-0 text-lg font-bold text-[#111827]">Area Penyusunan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              n: 1,
              key: "pola_ditemukan",
              title: "Pola yang telah kami temukan",
              desc: "Identifikasi pola utama berdasarkan data yang telah diverifikasi.",
              placeholder: "Ketik pola yang ditemukan di sini...",
            },
            {
              n: 2,
              key: "dasar_pengelompokan_didukung_data",
              title: "Dasar pengelompokan yang telah didukung data",
              desc: "Sebutkan kriteria yang terbukti valid dari tahap sebelumnya.",
              placeholder: "Ketik dasar pengelompokan di sini...",
            },
            {
              n: 3,
              key: "hal_diperbaiki_setelah_verifikasi",
              title: "Hal yang telah kami perbaiki setelah verifikasi",
              desc: "Catat koreksi atau penyesuaian yang dilakukan pada Tahap 5.",
              placeholder: "Ketik hal yang diperbaiki di sini...",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {c.n}
                </div>
                <h4 className="m-0 text-sm font-bold text-[#111827]">{c.title}</h4>
              </div>
              <p className="m-0 text-xs text-[#6B7280]">{c.desc}</p>
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

        <div className="mt-2 pt-6 border-t border-[#E5E7EB]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil kerja (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/5/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
