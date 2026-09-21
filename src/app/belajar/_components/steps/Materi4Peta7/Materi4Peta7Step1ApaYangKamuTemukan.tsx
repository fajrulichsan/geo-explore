import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta7Step1ApaYangKamuTemukan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M4-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

<div className="flex flex-col sm:flex-row items-center gap-5 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5">
        <div className="flex-1 flex flex-col gap-2">
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kamu telah melalui tahap mengamati, berdiskusi, bereksplorasi, mengolah informasi, dan memverifikasi.
          </p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Sekarang saatnya menyusun kesimpulan berdasarkan <span className="font-bold text-[#2563EB]">seluruh kegiatan</span> yang telah kamu lakukan.
          </p>
          <p className="m-0 text-sm font-semibold text-[#111827]">Tuliskan temuanmu dan rumus umum luas permukaan limas beserta alasannya.</p>
        </div>
        <EditablePageImage
            imageKey="M4-P7-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa menyimpulkan dengan laptop dan tablet"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-72 aspect-[2/1] flex-shrink-0 rounded-2xl overflow-hidden"
          />
      </div>

<div className="flex flex-col lg:flex-row gap-4 items-stretch">
        <div className="flex-1 bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Kamu Temukan?
          </div>
        </div>
          <p className="m-0 text-sm text-[#4B5563]">Lengkapi pernyataan berikut berdasarkan hasil kegiatanmu.</p>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#111827]">Cara memperoleh luas permukaan limas adalah dengan</label>
            <textarea
            name="answers.cara_memperoleh"
            defaultValue={getValue("cara_memperoleh")}
            rows={2}
            required
            placeholder="Tuliskan jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          </div>
          <div className="flex flex-col gap-2">
            <p className="m-0 text-sm font-semibold text-[#111827]">Dalam jaring-jaring limas, terdapat</p>
            <input
            type="text"
            name="answers.jaring_alas"
            defaultValue={getValue("jaring_alas")}
            required
            placeholder="..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors "
          />
            <p className="m-0 text-sm text-[#4B5563]">sebagai alas dan</p>
            <input
            type="text"
            name="answers.jaring_sisi_tegak"
            defaultValue={getValue("jaring_sisi_tegak")}
            required
            placeholder="..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors "
          />
            <p className="m-0 text-sm text-[#4B5563]">sebagai sisi tegak.</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#111827]">Untuk menentukan luas permukaan limas, kita perlu</label>
            <textarea
            name="answers.untuk_menentukan"
            defaultValue={getValue("untuk_menentukan")}
            rows={2}
            required
            placeholder="Tuliskan jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          </div>
        </div>

        <div className="flex-[1.2] bg-[#F7FBF2] border border-[#D5E8C0] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#3F6B25] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#3F6B25]">
            Hubungan Jaring-Jaring dan Luas Permukaan
          </div>
        </div>
          <p className="m-0 text-sm text-[#4B5563]">Perhatikan hubungan antara jaring-jaring limas dan luas permukaannya!</p>
          <div className="bg-white border border-[#D5E8C0] rounded-xl p-3">
            <svg viewBox="0 0 600 190" className="w-full h-auto" role="img" aria-label="Limas, jaring-jaring limas, luas alas dan luas seluruh sisi tegak dijumlahkan menjadi luas permukaan">
              <g stroke="#3F6B25" strokeWidth="1.5" strokeLinejoin="round">
                <polygon points="40,30 8,130 70,150" fill="#7FB05A" />
                <polygon points="40,30 70,150 110,110" fill="#5E9439" />
                <polygon points="8,130 70,150 110,110 60,100" fill="#A9CB86" opacity="0.5" strokeDasharray="4 3" />
              </g>
              <path d="M125 90h26M144 82l8 8-8 8" stroke="#2563EB" strokeWidth="3" fill="none" strokeLinecap="round" />
              <g stroke="#3F6B25" strokeWidth="1.2" fill="#DDEBC8">
                <polygon points="215,15 190,55 240,55" />
                <polygon points="215,145 190,105 240,105" />
                <polygon points="160,80 190,55 190,105" />
                <polygon points="270,80 240,55 240,105" />
                <rect x="190" y="55" width="50" height="50" fill="#7FB05A" />
              </g>
              <path d="M292 70h30M316 62l8 8-8 8" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <rect x="345" y="20" width="44" height="44" fill="#7FB05A" stroke="#3F6B25" />
              <g fill="#7FB05A" stroke="#3F6B25">
                <polygon points="345,135 360,95 375,135" />
                <polygon points="380,135 395,95 410,135" />
                <polygon points="415,135 430,95 445,135" />
                <polygon points="450,135 465,95 480,135" />
              </g>
              <g fontSize="11" fill="#374151" textAnchor="middle">
                <text x="367" y="80">Luas alas (La)</text>
                <text x="412" y="155">Luas seluruh sisi tegak (Ls)</text>
                <text x="45" y="175">Limas</text>
                <text x="215" y="175">Jaring-jaring limas</text>
              </g>
              <path d="M492 40v50h12M492 140V90" stroke="#374151" strokeWidth="1.2" fill="none" />
              <rect x="510" y="55" width="80" height="70" rx="8" fill="#fff" stroke="#93C5FD" />
              <g fontSize="12" fill="#1E3A8A" textAnchor="middle" fontWeight="700">
                <text x="550" y="78">Jumlahkan</text>
                <text x="550" y="98">La + Ls</text>
                <text x="550" y="116">= LP</text>
              </g>
            </svg>
          </div>
          <p className="m-0 text-xs text-[#4B5563] bg-white border border-[#D5E8C0] rounded-xl px-3.5 py-2.5">
            <span className="font-bold">Keterangan:</span> Warna <span className="font-bold text-[#3F6B25]">hijau</span> menunjukkan bagian permukaan limas yang dihitung.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
