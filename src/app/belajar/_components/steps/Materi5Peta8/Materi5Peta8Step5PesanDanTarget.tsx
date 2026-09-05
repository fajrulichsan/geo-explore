import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const target = [
  { key: "target_alasan_lebih_jelas", text: "Menjelaskan alasan matematis dengan lebih jelas." },
  { key: "target_lebih_dari_satu_strategi", text: "Menggunakan lebih dari satu strategi penyelesaian." },
  { key: "target_hubungkan_konsep_geometri", text: "Menghubungkan skala dengan konsep geometri lainnya." },
  { key: "target_percaya_diri_diskusi", text: "Lebih percaya diri saat berdiskusi dan mempresentasikan alasan." },
];

export default function Materi5Peta8Step5PesanDanTarget({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 21s-7.5-4.9-10-9.3C.4 8.4 2 5 5.4 5 7.6 5 9 6.2 12 9.2 15 6.2 16.4 5 18.6 5 22 5 23.6 8.4 22 11.7 19.5 16.1 12 21 12 21z" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">E. Pesan untuk Diriku</h2>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <label className="text-sm font-bold text-[#111827]">Tuliskan satu kalimat penyemangat untuk dirimu sendiri.</label>
        <textarea
          name="answers.pesan_untuk_diri"
          defaultValue={getValue("pesan_untuk_diri")}
          rows={2}
          placeholder='"Hari ini saya berhasil..."'
          required
          className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
        />
      </div>

      <div className="relative bg-gradient-to-br from-[#FEF9E7] to-[#FDF3C7] border border-[#FDE9A6] rounded-[20px] p-7 flex items-center gap-6 overflow-hidden">
        <div className="w-11 h-11 rounded-full bg-[#F59E0B] text-white flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
        </div>
        <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
          <span className="font-bold text-[#92400E]">Hebat!</span> Hari ini kamu telah menemukan sendiri
          hubungan antara faktor skala dan luas permukaan bangun ruang sisi datar melalui proses
          mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi, dan menyimpulkan.
          Teruslah gunakan alasan matematis, bandingkan strategi, dan percaya pada kemampuanmu saat
          memecahkan berbagai masalah matematika.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" fill="#fff" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">Target Belajarku</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">
          Setelah pembelajaran hari ini, saya ingin meningkatkan kemampuan saya dalam:
        </p>

        <div className="flex flex-col gap-3">
          {target.map((t) => (
            <label
              key={t.key}
              className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#16A34A] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${t.key}`}
                value="true"
                defaultChecked={getValue(t.key) === "true"}
                className="peer sr-only"
              />
              <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#16A34A] peer-checked:border-[#16A34A] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#374151] group-hover:text-[#16A34A] transition-colors">
                {t.text}
              </span>
            </label>
          ))}

          <div className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="text-sm font-semibold text-[#374151] flex-shrink-0">Lainnya:</span>
            <input
              type="text"
              name="answers.target_lainnya"
              defaultValue={getValue("target_lainnya")}
              placeholder="Tuliskan target lainnya (opsional)"
              className="flex-1 border-0 border-b border-[#E5E7EB] bg-transparent px-1 py-1 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-[#EFF4FF] border border-[#DBE4FF] rounded-[20px] p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
            <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15z" />
            <path d="M4 20.5A2.5 2.5 0 016.5 18H20" />
          </svg>
        </div>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          <span className="font-bold text-[#1D4ED8]">Ingat!</span> Belajar matematika bukan sekadar
          menemukan jawaban yang benar, tetapi juga memahami mengapa jawaban tersebut benar, berani
          mencoba berbagai strategi, dan terus memperbaiki cara berpikir berdasarkan bukti.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto jurnal refleksimu (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
