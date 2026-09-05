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
  {
    key: "dugaan_hubungan",
    label: "Saya dapat membuat dugaan hubungan antara faktor skala dan perubahan luas.",
  },
  {
    key: "siap_verifikasi",
    label: "Saya siap memverifikasi hubungan tersebut menggunakan bukti pada tahap berikutnya.",
  },
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
  const tampakImage = await getPageImage("M5-P5-L6-1");
  const motivasiImage = await getPageImage("M5-P5-L6-2");

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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Centang (&#10003;) pernyataan yang sesuai dengan hasil belajarmu hari ini.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Refleksi Singkat</h2>
        </div>

        <div className="flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#16A34A]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Refleksi Belajar
          </p>
          <div className="flex flex-col gap-2.5">
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
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#2563EB]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Tampak Berlaku pada Bangun yang Diamati
            </p>
            <label htmlFor="tampak_berlaku" className="text-xs text-[#374151]">
              Berdasarkan data dan strategi yang kami gunakan, hubungan antara faktor skala (k) dan
              luas permukaan:
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
            <p className="m-0 text-xs text-[#2563EB]">tampak berlaku pada bangun ruang yang telah diamati.</p>
          </div>
          <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white">
            <EditablePageImage
              imageKey="M5-P5-L6-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={tampakImage}
              alt="Maskot memberi jempol pada bangun yang diamati"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D97706] to-[#B45309] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FDE68A">
                <path d="M8 21h8l-1-5H9zM12 3a5 5 0 00-5 5v1a5 5 0 0010 0V8a5 5 0 00-5-5zM4 6h3M20 6h-3" />
              </svg>
              Motivasi
            </p>
            <p className="m-0 text-xs leading-[1.6] text-white/90">
              Setiap data yang kamu olah hari ini adalah langkah menuju pemahaman yang lebih
              dalam! Teruslah berpikir kritis dan teliti. Kamu hebat!
            </p>
          </div>
          <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
            <EditablePageImage
              imageKey="M5-P5-L6-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={motivasiImage}
              alt="Maskot memberi semangat"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#B91C1C] p-5 flex flex-col gap-1.5">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FEE2E2">
              <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
            </svg>
            Ingat!
          </p>
          <p className="m-0 text-xs leading-[1.6] text-white/90">
            Hubungan matematika yang kamu tuliskan masih berupa dugaan sementara. Gunakan bukti
            pada tahap verifikasi selanjutnya sebelum menyimpulkannya sebagai aturan umum.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 5
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
