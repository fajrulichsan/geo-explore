import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const target = [
  { key: "target_faktor_skala", teks: "Menjelaskan hubungan faktor skala dengan perubahan volume." },
  { key: "target_k3", teks: "Menjelaskan mengapa volume berubah sebesar faktor k³." },
  { key: "target_strategi", teks: "Menyelesaikan masalah skala dan volume dengan berbagai strategi." },
  { key: "target_alasan", teks: "Memberikan alasan matematis terhadap solusi yang dipilih." },
  { key: "target_konsep_lain", teks: "Menghubungkan konsep skala dan volume dengan bangun ruang lainnya." },
];

export default async function Materi8Peta8Step6PesanUntukDiriku({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const gambar = await getPageImage("M8-P8-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Setelah Tahap 6 – Ayo Menyimpulkan
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pesan untuk Diriku
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">Tuliskan satu kalimat penyemangat untuk dirimu sendiri.</p>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="inline-flex w-fit bg-[#FEF9E7] border border-[#F5E3A0] rounded-full px-4 py-1.5 text-[#92400E]">“Hari ini saya berhasil …”</span>
              <textarea
                name="answers.pesan_untuk_diri"
                required
                rows={3}
                defaultValue={answers.pesan_untuk_diri ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-4 items-center bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5">
          <div className="flex flex-col gap-2.5">
            <h3 className="m-0 text-xl font-extrabold text-[#C2410C]">Hebat!</h3>
            <p className="m-0 flex items-start gap-2 text-sm text-[#374151] leading-[1.6]"><span className="text-[#16A34A] font-bold">✓</span>Hari ini kamu telah menemukan sendiri bahwa ketika setiap ukuran panjang yang bersesuaian suatu bangun ruang diperbesar atau diperkecil dengan faktor skala k, volumenya berubah sebesar faktor k³ melalui proses mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi, dan menyimpulkan.</p>
            <p className="m-0 flex items-start gap-2 text-sm text-[#374151] leading-[1.6]"><span className="text-[#16A34A] font-bold">✓</span>Teruslah menggunakan alasan matematis, membandingkan berbagai strategi, dan percaya pada kemampuanmu dalam memecahkan berbagai masalah matematika.</p>
          </div>
          <EditablePageImage
          imageKey="M8-P8-L6-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambar}
          alt="Siswi mengepalkan tangan dikelilingi bintang"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[170px] mx-auto overflow-hidden"
        />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-3">
            <h3 className="m-0 text-base font-extrabold text-[#166534]">Target Belajarku</h3>
            <p className="m-0 text-sm text-[#374151]">Pilih satu atau dua kemampuan yang paling ingin kamu tingkatkan.</p>
            {target.map((t) => (
              <label key={t.key} className="flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5] cursor-pointer">
                <input type="checkbox" name={`answers.${t.key}`} value="ya" defaultChecked={answers[t.key] === "ya"} className="mt-0.5 accent-[#16A34A]" />
                {t.teks}
              </label>
            ))}
            <label className="flex items-center gap-2.5 text-sm text-[#374151]">
              Lainnya:
              <input type="text" name="answers.target_lainnya" defaultValue={answers.target_lainnya ?? ""} className="flex-1 min-w-0 border-b border-dashed border-[#9CA3AF] bg-transparent px-1 py-0.5 outline-none focus:border-[#16A34A]" />
            </label>
          </div>
          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex flex-col gap-3 justify-center">
            <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">Ingat!</h3>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">Belajar matematika bukan sekadar menghafal bahwa</p>
            <div className="self-start bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-2 text-base font-bold text-[#111827]">
              V<sub>hasil skala</sub> = k³ V<sub>awal</sub>
            </div>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">tetapi memahami mengapa setiap ukuran panjang yang diperbesar atau diperkecil dengan faktor skala k menyebabkan volume berubah sebesar faktor k³.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit cursor-pointer bg-[#16A34A] shadow-[0_4px_10px_rgba(22,163,74,0.3)]">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
