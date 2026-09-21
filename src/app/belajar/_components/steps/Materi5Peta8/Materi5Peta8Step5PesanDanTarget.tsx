import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const target = [
  { key: "target_alasan_lebih_jelas", text: "Menjelaskan alasan matematis dengan lebih jelas." },
  { key: "target_lebih_dari_satu_strategi", text: "Menggunakan lebih dari satu strategi penyelesaian." },
  { key: "target_hubungkan_konsep_geometri", text: "Menghubungkan skala dengan konsep geometri lainnya." },
  { key: "target_percaya_diri_diskusi", text: "Lebih percaya diri saat berdiskusi dan mempresentasikan alasan." },
];

export default async function Materi5Peta8Step5PesanDanTarget({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [siswa, siswi] = await Promise.all((["M5-P8-L5-1", "M5-P8-L5-2"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">E</div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">Pesan untuk Diriku</h2>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-[1fr_130px] gap-5 items-center">
        <div className="flex flex-col gap-3">
          <label htmlFor="pesan_untuk_diri" className="text-sm font-bold text-[#111827]">
            Tuliskan satu kalimat penyemangat untuk dirimu sendiri.
          </label>
          <textarea
            id="pesan_untuk_diri"
            name="answers.pesan_untuk_diri"
            defaultValue={getValue("pesan_untuk_diri")}
            rows={3}
            placeholder="Hari ini saya berhasil..."
            required
            className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
          />
        </div>
        <EditablePageImage
          imageKey="M5-P8-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={siswa}
          alt="Siswa mengacungkan jempol"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[130px] mx-auto overflow-hidden order-first sm:order-last"
        />
      </div>

      <div className="relative bg-gradient-to-br from-[#FEF9E7] to-[#FDF3C7] border border-[#FDE9A6] rounded-[20px] p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-[1fr_130px] gap-5 items-center overflow-hidden">
        <div className="flex flex-col gap-3">
          <p className="m-0 text-xl font-extrabold text-[#DC2626]">Hebat!</p>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Hari ini kamu telah menemukan sendiri hubungan antara faktor skala dan luas permukaan bangun
            ruang sisi datar melalui proses mengamati, berdiskusi, bereksplorasi, mengolah informasi,
            memverifikasi, dan menyimpulkan.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Terus gunakan alasan matematis, bandingkan strategi, dan percaya pada kemampuanmu saat
            memecahkan berbagai masalah matematika.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P8-L5-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={siswi}
          alt="Siswi mengepalkan tangan dikelilingi bintang"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[130px] mx-auto overflow-hidden"
        />
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
            <label htmlFor="target_lainnya" className="text-sm font-semibold text-[#374151] flex-shrink-0">Lainnya:</label>
            <input
              id="target_lainnya"
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
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
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
