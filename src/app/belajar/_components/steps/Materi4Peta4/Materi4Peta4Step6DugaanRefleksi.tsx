import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "berhasil_jaring", label: "Saya berhasil membuka limas menjadi jaring-jaring." },
  { key: "paham_bentuk", label: "Saya memahami bentuk alas dan sisi tegak." },
  { key: "paham_hubungan", label: "Saya memahami hubungan luas alas dan luas sisi tegak." },
  { key: "bisa_menentukan", label: "Saya dapat menentukan luas permukaan limas." },
  { key: "paham_tersusun", label: "Saya memahami bahwa luas permukaan tersusun atas luas alas dan seluruh sisi tegak." },
  { key: "siap_mengolah", label: "Saya siap mengolah hasil eksplorasi pada tahap berikutnya." },
];

export default async function Materi4Peta4Step6DugaanRefleksi({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const isChecked = (key: string) => answers[key] === "true" || answers[key] === "on";

  const [gambarKelompok, gambarMaskot] = await Promise.all([getPageImage("M4-P4-L6-1"), getPageImage("M4-P4-L6-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <span className="text-sm font-bold text-[#2563EB]">Dugaan Baru</span>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#2563EB] transition-colors">
          <label htmlFor="dugaan_baru" className="text-sm font-bold text-[#111827]">
            Menurut kelompok kami, luas permukaan limas kemungkinan diperoleh dengan cara ....
          </label>
          <textarea
            id="dugaan_baru"
            name="answers.dugaan_baru"
            defaultValue={getValue("dugaan_baru")}
            rows={4}
            placeholder="Tuliskan dugaanmu berdasarkan hasil eksplorasi yang telah dilakukan..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <span className="text-sm font-bold text-[#DC2626]">Refleksi Eksplorasi</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6">
          <div className="flex flex-col gap-3.5">
            <p className="m-0 text-sm text-[#4B5563]">Centang (&#10003;) pernyataan yang sesuai denganmu.</p>
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
            imageKey="M4-P4-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarKelompok}
            alt="Tiga siswa berdiskusi dengan tiga bintang di atas kepala"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2">
          <span className="text-base font-extrabold text-[#D97706]">Ingat!</span>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
            GeoGebra 3D dan AR membantumu mengumpulkan informasi dengan lebih baik. Jangan langsung membuat rumus.
            Gunakan hasil pengamatanmu sebagai dasar untuk menemukan pola pada tahap berikutnya.
          </p>
        </div>
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex items-center gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <span className="text-base font-extrabold text-[#EA580C]">Kotak Motivasi</span>
            <p className="m-0 text-sm text-[#7C2D12] leading-[1.6]">
              Penemuan besar selalu dimulai dari pengamatan kecil. Teruslah berpikir kritis, bertanya, dan menemukan
              keterkaitan! Kamu pasti bisa!
            </p>
          </div>
          <EditablePageImage
            imageKey="M4-P4-L6-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarMaskot}
            alt="Siswi berhijab mengepalkan tangan penuh semangat sambil menulis di buku"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-32 flex-shrink-0"
          />
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
