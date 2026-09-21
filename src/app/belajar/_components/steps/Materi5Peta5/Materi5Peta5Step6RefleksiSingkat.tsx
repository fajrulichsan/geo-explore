import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "temukan_pola", label: "Saya menemukan pola hubungan skala dengan luas." },
  { key: "jelaskan_pola", label: "Saya dapat menjelaskan pola tersebut." },
  { key: "bandingkan_strategi", label: "Saya dapat membandingkan beberapa strategi." },
  { key: "dugaan_hubungan", label: "Saya dapat membuat dugaan hubungan antara faktor skala dan perubahan luas." },
  { key: "siap_verifikasi", label: "Saya siap memverifikasi hubungan tersebut menggunakan bukti pada tahap berikutnya." },
];

export default async function Materi5Peta5Step6RefleksiSingkat({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === true;
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [tampakImage, motivasiImage] = await Promise.all([getPageImage("M5-P5-L6-1"), getPageImage("M5-P5-L6-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Hubungan Skala dan Luas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#7C3AED]">Refleksi Singkat</h2>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="m-0 text-sm font-bold text-[#16A34A]">Refleksi Belajar</p>
          <p className="m-0 text-sm text-[#4B5563]">
            Centang (&#10003;) pernyataan yang sesuai dengan hasil belajarmu hari ini.
          </p>
          {pernyataan.map((p) => (
            <label
              key={p.key}
              className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer has-[:checked]:bg-[#EFFDF4] has-[:checked]:border-[#16A34A] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                defaultChecked={getChecked(p.key)}
                className="w-4 h-4 accent-[#16A34A] flex-shrink-0"
              />
              <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
            </label>
          ))}
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex flex-col-reverse sm:flex-row sm:items-end gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#2563EB]">Tampak Berlaku pada Bangun yang Diamati</p>
            <label htmlFor="tampak_berlaku" className="text-sm text-[#374151]">
              Berdasarkan data dan strategi yang kami gunakan, hubungan antara faktor skala (k) dan luas permukaan:
            </label>
            <textarea
              id="tampak_berlaku"
              name="answers.tampak_berlaku"
              defaultValue={getValue("tampak_berlaku")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <EditablePageImage
            imageKey="M5-P5-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={tampakImage}
            alt="Siswa mengacungkan jempol sambil berkata: tampak berlaku pada bangun ruang yang telah diamati"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[260px] mx-auto sm:mx-0 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-[#FFF7E6] border border-[#FCD9A0] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-bold text-[#D97706]">Motivasi</p>
            <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
              Setiap data yang kamu olah hari ini adalah langkah menuju pemahaman yang lebih dalam! Teruslah berpikir
              kritis dan teliti. Kamu hebat!
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P5-L6-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={motivasiImage}
            alt="Siswi menunjuk ke atas dengan lampu ide"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
        </div>

        <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-[20px] p-5 flex flex-col gap-1.5">
          <p className="m-0 text-base font-bold text-[#DC2626]">Ingat!</p>
          <p className="m-0 text-sm leading-[1.6] text-[#7F1D1D]">
            Hubungan matematika yang kamu tuliskan masih berupa dugaan sementara. Gunakan bukti pada tahap verifikasi
            selanjutnya sebelum menyimpulkannya sebagai aturan umum.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
