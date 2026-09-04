import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "periksa_perhitungan", label: "Saya memeriksa kembali hasil perhitungan." },
  { key: "perbaiki_kesalahan", label: "Saya memperbaiki kesalahan yang ditemukan." },
  { key: "jelaskan_alasan", label: "Saya dapat menjelaskan alasan matematis." },
  { key: "hargai_pendapat", label: "Saya menghargai pendapat kelompok lain." },
  { key: "yakin_hasil", label: "Saya semakin yakin terhadap hasil yang diperoleh." },
];

export default async function Materi3Peta6Step3RevisiHasilRefleksi({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const mascotImage = await getPageImage("M3-P6-L3-1");
  const refleksiImage = await getPageImage("M3-P6-L3-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hasil Penemuanmu</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[30px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              C
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Revisi Jawaban</p>
          </div>
          <p className="m-0 text-xs text-[#4B5563]">
            Apabila setelah berdiskusi terdapat cara yang lebih tepat, tuliskan hasil revisimu.
          </p>

          <label htmlFor="yang_direvisi" className="text-xs font-semibold text-[#374151] mt-1">
            Yang direvisi
          </label>
          <textarea
            id="yang_direvisi"
            name="answers.yang_direvisi"
            defaultValue={getValue("yang_direvisi")}
            rows={2}
            placeholder="Tuliskan (jika ada)..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-none"
          />

          <label htmlFor="alasan_revisi" className="text-xs font-semibold text-[#374151] mt-1">
            Alasan revisi
          </label>
          <textarea
            id="alasan_revisi"
            name="answers.alasan_revisi"
            defaultValue={getValue("alasan_revisi")}
            rows={2}
            placeholder="Tuliskan (jika ada)..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-none"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              D
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">Hasil Verifikasi</p>
          </div>
          <p className="m-0 text-xs text-[#4B5563]">Lengkapilah kalimat berikut.</p>
          <label htmlFor="hasil_verifikasi" className="text-xs font-semibold text-[#374151] mt-1">
            Berdasarkan hasil verifikasi, kami menemukan bahwa hasil yang kamu peroleh ...
          </label>
          <textarea
            id="hasil_verifikasi"
            name="answers.hasil_verifikasi"
            defaultValue={getValue("hasil_verifikasi")}
            rows={6}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          <div className="mt-1 bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl p-3 flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-[11px] text-[#1D4ED8] leading-[1.5]">
              Gunakan hasil verifikasi untuk memastikan bahwa hasil yang kamu peroleh didukung oleh
              bukti dan alasan matematis.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Refleksi Verifikasi
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Centang (✓) pernyataan yang sesuai denganmu.</p>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {refleksi.map((r) => (
              <label key={r.key} className="flex items-center gap-3 text-sm text-[#374151] cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.refleksi_${r.key}`}
                  defaultChecked={checked(`refleksi_${r.key}`)}
                  className="w-4 h-4 rounded accent-[#7C3AED] flex-shrink-0"
                />
                {r.label}
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M3-P6-L3-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={refleksiImage}
            alt="Tiga siswa merefleksikan hasil verifikasi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-32 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#F3E8FF] self-start"
          />
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
        <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
          <span className="font-bold">Ingat!</span> Verifikasi bukan untuk mencari kesalahan teman,
          tetapi untuk memastikan bahwa setiap jawaban didukung oleh bukti dan alasan matematis yang
          logis.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute -right-4 bottom-[-40px] w-32 h-32 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-4">
          <EditablePageImage
            imageKey="M3-P6-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot memberi semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-20 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white/10"
          />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="flex-shrink-0">
                <path d="M8 21h8M12 17v4M12 3a5 5 0 015 5c0 2.5-1.5 3.5-2 5-.3.8-.5 1.5-.5 2.5h-5c0-1-.2-1.7-.5-2.5-.5-1.5-2-2.5-2-5a5 5 0 015-5z" />
              </svg>
              <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
                Kotak Motivasi
              </div>
            </div>
            <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
              Setiap perbaikan yang kamu lakukan menunjukkan bahwa proses berpikirmu semakin
              berkembang. Teruslah menggunakan bukti untuk memperkuat setiap jawabanmu!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex items-start gap-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18 2l4 4-11 11H7v-4L18 2z" />
        </svg>
        <p className="m-0 text-xs text-[#1D4ED8] leading-[1.5]">
          Kamu telah memverifikasi hasil penemuanmu. Pada Tahap 6 kamu akan menyusun generalisasi
          umum tentang cara menentukan luas permukaan kubus, balok, dan prisma berdasarkan seluruh
          proses yang telah dilakukan.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 6
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
