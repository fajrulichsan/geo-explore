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

export default async function Materi3Peta6Step4RefleksiVerifikasi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const refleksiImage = await getPageImage("M3-P6-L4-1");
  const mascotImage = await getPageImage("M3-P6-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hasil Penemuanmu</p>
      </div>

      <div className="bg-white border border-[#DDD6FE] rounded-[20px] overflow-hidden grid md:grid-cols-2">
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#4338CA] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">E</div>
            <h2 className="m-0 text-lg font-bold text-[#3730A3]">Refleksi Verifikasi</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Centang (✓) pernyataan yang sesuai denganmu.</p>
          <div className="flex flex-col gap-2">
            {refleksi.map((r) => (
              <label key={r.key} className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.${r.key}`}
                  defaultChecked={checked(r.key)}
                  className="mt-0.5 w-4 h-4 accent-[#4338CA]"
                />
                <span className="text-sm text-[#374151]">{r.label}</span>
              </label>
            ))}
          </div>
        </div>
        <EditablePageImage
          imageKey="M3-P6-L4-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={refleksiImage}
          alt="Tiga siswa mengamati jaring-jaring dengan kaca pembesar"
          editable={editFoto}
          natural
          containerClassName="relative w-full self-end"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Ingat!</p>
            <p className="m-0 text-xs leading-[1.6] text-[#1E40AF]">
              Verifikasi bukan untuk mencari kesalahan teman, tetapi untuk memastikan bahwa setiap
              jawaban didukung oleh bukti dan alasan matematis yang logis.
            </p>
          </div>
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none" className="flex-shrink-0">
            <circle cx="28" cy="28" r="18" fill="#EFF6FF" stroke="#2563EB" strokeWidth="5" />
            <path d="M20 29l6 6 12-13" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M41 41l16 16" stroke="#1E3A8A" strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-extrabold text-[#B45309]">Kotak Motivasi</p>
            <p className="m-0 text-xs leading-[1.6] text-[#92400E]">
              Setiap perbaikan yang kamu lakukan menunjukkan bahwa proses berpikirmu semakin
              berkembang. Teruslah menggunakan bukti untuk memperkuat setiap jawabanmu!
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P6-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot siswi mengacungkan jempol"
            editable={false}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-32 flex-shrink-0"
          />
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-start gap-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
          <path d="M3 10v4h4l7 5V5L7 10H3zM17 9a4 4 0 010 6" />
        </svg>
        <div className="flex flex-col gap-1">
          <p className="m-0 text-base font-extrabold text-[#1E3A8A]">Hebat!</p>
          <p className="m-0 text-xs leading-[1.6] text-[#1E40AF]">
            Kamu telah memverifikasi hasil penemuanmu. Pada Tahap 6 kamu akan menyusun{" "}
            <span className="font-bold">generalisasi umum</span> tentang cara menentukan luas
            permukaan kubus, balok, dan prisma berdasarkan seluruh proses yang telah dilakukan.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
