import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

export default function Peta6Step1TinjauVerifikasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 6 – AYO MENYIMPULKAN
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Tinjau Kembali Hasil Verifikasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 6 dari 6 – Discovery Learning
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
          <div className="bg-white rounded-xl p-4 border-2 border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-center w-full md:w-1/4">
            <div className="text-[#2b3d44] text-xl mb-1">📊</div>
            <p className="m-0 text-xs font-semibold text-[#374151]">Data Tahap 3</p>
          </div>
          <span className="text-[#9CA3AF] font-bold rotate-90 md:rotate-0">+</span>
          <div className="bg-white rounded-xl p-4 border-2 border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-center w-full md:w-1/4">
            <div className="text-[#2b3d44] text-xl mb-1">📈</div>
            <p className="m-0 text-xs font-semibold text-[#374151]">Hasil Tahap 4</p>
          </div>
          <span className="text-[#2563EB] font-bold rotate-90 md:rotate-0">→</span>
          <div className="bg-white rounded-xl p-4 border-2 border-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-center w-full md:w-1/4">
            <div className="text-[#2563EB] text-xl mb-1">✔️</div>
            <p className="m-0 text-xs font-bold text-[#2563EB]">Hasil Tahap 5</p>
          </div>
          <span className="text-[#2563EB] font-bold text-lg rotate-90 md:rotate-0">→</span>
          <div className="bg-[#2563EB] text-white rounded-xl p-4 shadow-[0_4px_10px_rgba(37,99,235,0.3)] text-center w-full md:w-1/4 md:scale-110">
            <div className="text-xl mb-1">💡</div>
            <p className="m-0 text-xs font-bold">Tahap 6 (Kesimpulan)</p>
          </div>
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
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
