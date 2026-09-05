import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  { n: 1, label: "Bagian mana saja yang menurut kelompokmu harus dihitung untuk menentukan luas permukaan limas?" },
  { n: 2, label: "Apakah luas alas cukup dihitung satu kali? Mengapa?" },
  { n: 3, label: "Mengapa semua sisi tegak perlu diperhitungkan?" },
  { n: 4, label: "Apakah luas permukaan limas dapat ditentukan dengan cara yang sama seperti prisma? Jelaskan dugaan kelompokmu." },
];

export default async function Materi4Peta3Step2PertanyaanDugaan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M4-P3-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Diskusi
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Diskusikan pertanyaan berikut bersama kelompokmu.</p>
          <div className="flex flex-col gap-4">
            {pertanyaan.map((p) => (
              <div
                key={p.n}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {p.n}
                  </div>
                  <label htmlFor={`diskusi_${p.n}`} className="flex-1 text-sm font-bold text-[#111827] pt-0.5">
                    {p.label}
                  </label>
                </div>
                <textarea
                  id={`diskusi_${p.n}`}
                  name={`answers.diskusi_${p.n}`}
                  defaultValue={getValue(`diskusi_${p.n}`)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                C
              </div>
              <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
                Dugaan Kelompok
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-[#EFF4FF] w-full aspect-video">
              <EditablePageImage
                imageKey="M4-P3-L2-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={mascotImage}
                alt="Dua siswa menyusun dugaan bersama"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
            <label htmlFor="dugaan_kelompok" className="text-sm text-[#374151]">
              Lengkapi kalimat berikut. Menurut kelompok kami, luas permukaan limas diperoleh dengan...
            </label>
            <textarea
              id="dugaan_kelompok"
              name="answers.dugaan_kelompok"
              defaultValue={getValue("dugaan_kelompok")}
              rows={3}
              placeholder="Jawabanmu..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                D
              </div>
              <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#F97316]">
                Alasan Dugaan
              </div>
            </div>
            <label htmlFor="alasan_dugaan" className="text-sm text-[#374151]">
              Tuliskan alasan kelompokmu memiliki dugaan tersebut berdasarkan hasil pengamatan pada
              Tahap 1.
            </label>
            <textarea
              id="alasan_dugaan"
              name="answers.alasan_dugaan"
              defaultValue={getValue("alasan_dugaan")}
              rows={3}
              placeholder="Jawabanmu..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4 flex flex-col gap-2.5">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#111827]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            Kotak Ingat
          </p>
          {[
            "Dugaan yang baik harus disertai alasan.",
            "Tidak masalah apabila dugaanmu masih belum tepat.",
            "Semua dugaan akan dibuktikan menggunakan GeoGebra 3D dan Augmented Reality (AR) pada tahap berikutnya.",
          ].map((t) => (
            <p key={t} className="m-0 flex items-start gap-2 text-xs leading-[1.6] text-[#4B5563]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </p>
          ))}
        </div>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-2xl px-5 py-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#92400E]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.2">
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="8" r="3" />
              <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
            </svg>
            Langkah Selanjutnya
          </p>
          <p className="m-0 text-xs leading-[1.6] text-[#92400E]">
            Setelah dugaan dan alasan disusun, bandingkan dengan kelompok lain pada halaman berikutnya
            untuk menyempurnakan hipotesis sebelum tahap eksplorasi.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Lanjut ke halaman 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
