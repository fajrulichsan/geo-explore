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
  { key: "paham_hubungan", label: "Saya memahami hubungan antara luas alas dan luas sisi tegak." },
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

  const [gambarRefleksi, gambarMotivasi] = await Promise.all([
    getPageImage("M4-P4-L6-1"),
    getPageImage("M4-P4-L6-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Baru
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 focus-within:border-[#2563EB] transition-colors">
            <label htmlFor="dugaan_baru" className="text-sm font-bold text-[#111827]">
              Menurut kelompok kami, luas permukaan limas kemungkinan diperoleh dengan cara ....
            </label>
            <textarea
              id="dugaan_baru"
              name="answers.dugaan_baru"
              defaultValue={getValue("dugaan_baru")}
              rows={5}
              placeholder="Tuliskan dugaanmu berdasarkan hasil eksplorasi yang telah dilakukan..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
              Refleksi Eksplorasi
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">Centang (&#10003;) pernyataan yang sesuai denganmu.</p>
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-start gap-3 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={isChecked(p.key)}
                  required
                  className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#DC2626]"
                />
                <span className="text-sm font-semibold text-[#374151] leading-[1.6] group-has-[:checked]:text-[#111827]">
                  {p.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#D97706" stroke="none">
              <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 16.9 6.2 20l1.1-6.5-4.8-4.6L9.1 8z" />
            </svg>
            <span className="text-sm font-bold text-[#92400E]">Ingat!</span>
          </div>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
            GeoGebra 3D dan AR membantumu mengumpulkan informasi dengan lebih baik. Jangan
            langsung membuat rumus. Gunakan hasil pengamatanmu sebagai dasar untuk menemukan pola
            pada tahap berikutnya.
          </p>
          <EditablePageImage
            imageKey="M4-P4-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarRefleksi}
            alt="Tiga siswa berdiskusi dengan bintang penanda semangat di atas kepala"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-video rounded-2xl overflow-hidden bg-white"
          />
        </div>

        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5 flex items-start gap-4">
          <EditablePageImage
            imageKey="M4-P4-L6-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarMotivasi}
            alt="Maskot siswi mengepalkan tangan penuh semangat sambil membaca buku"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-16 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#5B21B6]">Kotak Motivasi</span>
            <p className="m-0 text-sm text-[#4C1D95] leading-[1.6]">
              Penemuan besar selalu dimulai dari pengamatan kecil. Teruslah berpikir kritis,
              bertanya, dan menemukan keterkaitan! Kamu pasti bisa!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 4
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
