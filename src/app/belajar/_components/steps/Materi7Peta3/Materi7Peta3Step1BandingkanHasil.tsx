import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta3Step1BandingkanHasil({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarHero, gambarLimasPrisma] = await Promise.all([
    getPageImage("M7-P3-L1-1"),
    getPageImage("M7-P3-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <circle cx="9" cy="12" r="0.6" />
            <circle cx="12.5" cy="12" r="0.6" />
            <circle cx="16" cy="12" r="0.6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Benarkah tiga limas identik dapat mengisi tepat satu prisma?</h2>
          <p className="m-0 text-sm text-white/90 max-w-2xl leading-[1.6]">Ayo bandingkan hasil pengamatan, diskusikan, dan rumuskan dugaanmu!</p>
        </div>
        <div className="relative bg-white rounded-2xl p-3 sm:p-4">
          <EditablePageImage
              imageKey="M7-P3-L1-1"
              materi={materi}
              peta={peta}
              step="1"
              urutan="1"
              src={gambarHero}
              alt="Tiga siswa berdiskusi di perpustakaan dengan tiga limas identik dan satu prisma di atas meja"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
        </div>
        <div className="relative flex flex-wrap gap-2">
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Hasil pengamatan kita sama atau berbeda, ya?</span>
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Menurut kalian, apa hubungan volume satu limas dengan volume prisma?</span>
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Mari kita bandingkan hasilnya dan rumuskan dugaan kita!</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#EFF4FF] border border-[#DBE7FF] rounded-[20px] p-5 sm:p-6">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Pada Tahap 1, kamu telah mengamati bahwa:</h3>
        <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.6]">
          <li>tiga limas identik mempunyai luas alas dan tinggi yang sama dengan sebuah prisma pembanding,</li>
          <li>tiga kali isi limas dapat mengisi prisma hingga penuh.</li>
        </ul>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">Sekarang, diskusikan hasil pengamatan dengan kelompokmu. Bandingkan temuan, dengarkan pendapat teman, lalu susun dugaan yang akan dibuktikan melalui eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR) pada tahap berikutnya.</p>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm font-semibold text-[#92400E]">
          Dugaan awal dapat berbeda; setiap dugaan perlu didukung alasan.
        </div>
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
          Lengkapilah tabel berikut dengan hasil pengamatan kelompokmu, kemudian bandingkan dengan kelompok lain.
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
              imageKey="M7-P3-L1-2"
              materi={materi}
              peta={peta}
              step="1"
              urutan="2"
              src={gambarLimasPrisma}
              alt="Tiga limas identik dan satu prisma dengan luas alas dan tinggi yang sama"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-20 overflow-hidden"
            />
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#111827]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
              Luas alas limas
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris1_kami" className="text-xs font-semibold text-[#4B5563]">Hasil pengamatan kelompok kami</label>
                <textarea id="baris1_kami" name="answers.baris1_kami" defaultValue={getValue("baris1_kami")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris1_beda" className="text-xs font-semibold text-[#4B5563]">Persamaan dan perbedaan dengan kelompok lain</label>
                <textarea id="baris1_beda" name="answers.baris1_beda" defaultValue={getValue("baris1_beda")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris1_catatan" className="text-xs font-semibold text-[#4B5563]">Catatan hasil pengamatan</label>
                <textarea id="baris1_catatan" name="answers.baris1_catatan" defaultValue={getValue("baris1_catatan")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#111827]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">2</span>
              Tinggi limas
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris2_kami" className="text-xs font-semibold text-[#4B5563]">Hasil pengamatan kelompok kami</label>
                <textarea id="baris2_kami" name="answers.baris2_kami" defaultValue={getValue("baris2_kami")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris2_beda" className="text-xs font-semibold text-[#4B5563]">Persamaan dan perbedaan dengan kelompok lain</label>
                <textarea id="baris2_beda" name="answers.baris2_beda" defaultValue={getValue("baris2_beda")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris2_catatan" className="text-xs font-semibold text-[#4B5563]">Catatan hasil pengamatan</label>
                <textarea id="baris2_catatan" name="answers.baris2_catatan" defaultValue={getValue("baris2_catatan")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#111827]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">3</span>
              Luas alas prisma
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris3_kami" className="text-xs font-semibold text-[#4B5563]">Hasil pengamatan kelompok kami</label>
                <textarea id="baris3_kami" name="answers.baris3_kami" defaultValue={getValue("baris3_kami")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris3_beda" className="text-xs font-semibold text-[#4B5563]">Persamaan dan perbedaan dengan kelompok lain</label>
                <textarea id="baris3_beda" name="answers.baris3_beda" defaultValue={getValue("baris3_beda")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris3_catatan" className="text-xs font-semibold text-[#4B5563]">Catatan hasil pengamatan</label>
                <textarea id="baris3_catatan" name="answers.baris3_catatan" defaultValue={getValue("baris3_catatan")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#111827]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">4</span>
              Tinggi prisma
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris4_kami" className="text-xs font-semibold text-[#4B5563]">Hasil pengamatan kelompok kami</label>
                <textarea id="baris4_kami" name="answers.baris4_kami" defaultValue={getValue("baris4_kami")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris4_beda" className="text-xs font-semibold text-[#4B5563]">Persamaan dan perbedaan dengan kelompok lain</label>
                <textarea id="baris4_beda" name="answers.baris4_beda" defaultValue={getValue("baris4_beda")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris4_catatan" className="text-xs font-semibold text-[#4B5563]">Catatan hasil pengamatan</label>
                <textarea id="baris4_catatan" name="answers.baris4_catatan" defaultValue={getValue("baris4_catatan")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#111827]">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">5</span>
              Banyak kali penuangan isi satu limas agar prisma penuh
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris5_kami" className="text-xs font-semibold text-[#4B5563]">Hasil pengamatan kelompok kami</label>
                <textarea id="baris5_kami" name="answers.baris5_kami" defaultValue={getValue("baris5_kami")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris5_beda" className="text-xs font-semibold text-[#4B5563]">Persamaan dan perbedaan dengan kelompok lain</label>
                <textarea id="baris5_beda" name="answers.baris5_beda" defaultValue={getValue("baris5_beda")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="baris5_catatan" className="text-xs font-semibold text-[#4B5563]">Catatan hasil pengamatan</label>
                <textarea id="baris5_catatan" name="answers.baris5_catatan" defaultValue={getValue("baris5_catatan")} rows={2} placeholder="Ketik di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
