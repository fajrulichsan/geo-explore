import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "periksa_ukuran", label: "Saya memeriksa kembali ukuran dan jaring-jaring limas menggunakan GeoGebra 3D atau AR." },
  { key: "hitung_ulang", label: "Saya menghitung ulang luas alas dan setiap sisi tegak." },
  { key: "bandingkan", label: "Saya membandingkan hasil dengan kelompok lain." },
  { key: "temukan_bagian", label: "Saya dapat menemukan bagian yang perlu diperbaiki." },
  { key: "perbaiki_jawaban", label: "Saya memperbaiki jawaban berdasarkan bukti dan alasan matematis." },
  { key: "jelaskan", label: "Saya dapat menjelaskan mengapa hasil yang kami peroleh sesuai dengan bukti." },
  { key: "hargai_teman", label: "Saya menghargai pendapat teman dan bekerja sama saat berdiskusi." },
  { key: "yakin", label: "Saya semakin yakin terhadap hasil yang diperoleh setelah diverifikasi." },
];

export default async function Materi4Peta6Step5RefleksiVerifikasi({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => Boolean(answers[key]);
  const refleksiImage = await getPageImage("M4-P6-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          E
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#DC2626]">Refleksi Verifikasi</span>
          <span className="text-xs text-[#6B7280]">
            Berilah tanda centang (&#10003;) pada pernyataan yang sesuai dengan pengalamanmu pada Tahap 5.
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-5 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6">
        <div className="md:col-span-3 flex flex-col gap-3">
          {pernyataan.map((p) => (
            <label key={p.key} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                defaultChecked={isChecked(p.key)}
                required
                className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#DC2626]"
              />
              <span className="text-sm font-semibold text-[#374151] leading-[1.5] group-has-[:checked]:text-[#111827]">
                {p.label}
              </span>
            </label>
          ))}
        </div>
        <EditablePageImage
          imageKey="M4-P6-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={refleksiImage}
          alt="Tiga siswa berdiskusi merefleksikan hasil verifikasi"
          editable={editFoto}
          natural
          containerClassName="relative md:col-span-2 w-full max-w-[320px] mx-auto overflow-hidden bg-white"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex items-start gap-3">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" className="flex-shrink-0" aria-hidden="true">
            <path d="M9 21h6M10 17h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <span className="text-base font-extrabold text-[#D97706]">Ingat!</span>
            <ul className="m-0 pl-5 list-disc text-sm text-[#78350F] leading-[1.6]">
              <li>Luas alas dihitung satu kali.</li>
              <li>Luas semua sisi tegak yang membatasi limas telah diperhitungkan.</li>
              <li>Tidak ada sisi yang terlewat.</li>
              <li>Verifikasi memastikan jawaban didukung oleh bukti dan alasan matematis.</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-[20px] p-5 flex items-start gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#DB2777" className="flex-shrink-0" aria-hidden="true">
            <path d="M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9L12 2z" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <span className="text-base font-extrabold text-[#BE185D]">Motivasi</span>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Kamu telah berusaha memeriksa, membandingkan, dan memperbaiki jawabanmu. Setiap langkah verifikasi yang
              kamu lakukan membuat pemahamanmu semakin akurat dan kuat. Teruslah berpikir kritis dan teliti!
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#16A34A] to-[#15803D] px-7 py-8 sm:px-10">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex items-start gap-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="flex-shrink-0" aria-hidden="true">
            <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" />
          </svg>
          <div>
            <div className="inline-block bg-white/15 border border-white/25 rounded-full py-1.5 px-5 text-sm font-bold text-white mb-2">
              Hebat!
            </div>
            <p className="m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
              Hasil verifikasi yang kamu lakukan akan menjadi dasar penting untuk menyusun kesimpulan umum mengenai cara
              menentukan luas permukaan limas. Siapkan dirimu untuk menyimpulkan dan menggeneralisasi hasil belajar hari
              ini!
            </p>
          </div>
        </div>
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
