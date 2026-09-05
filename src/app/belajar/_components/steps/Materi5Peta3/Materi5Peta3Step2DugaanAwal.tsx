import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaanDiskusi = [
  { n: 1, key: "ukuran_berubah", label: "Apa saja ukuran yang berubah ketika faktor skala k = 2 diterapkan?" },
  { n: 2, key: "bentuk_berubah", label: "Apakah bentuk bangunnya berubah setelah diskala? Jelaskan." },
  { n: 3, key: "jumlah_sisi_berubah", label: "Apakah jumlah sisi berubah? Jelaskan." },
  { n: 4, key: "semua_ukuran_faktor_sama", label: "Menurut kelompokmu, apakah semua ukuran berubah dengan faktor yang sama? Jelaskan." },
];

export default async function Materi5Peta3Step2DugaanAwal({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const laptopImage = await getPageImage("M5-P3-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-base font-bold text-[#111827]">Dugaan Awal Kelompok</h2>
          </div>
          <p className="m-0 text-xs text-[#6B7280]">
            Tuliskan dugaan awal kelompokmu. Menurut kelompok kami, jika setiap ukuran panjang
            diperbesar 2 kali (k = 2), maka luas permukaan bangun ruang akan &hellip;
          </p>
          <textarea
            name="answers.dugaan_awal"
            defaultValue={getValue("dugaan_awal")}
            rows={5}
            required
            placeholder="Tuliskan dugaan awal kelompokmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-base font-bold text-[#111827]">Alasan Dugaan</h2>
          </div>
          <p className="m-0 text-xs text-[#6B7280]">
            Mengapa kelompokmu memiliki dugaan tersebut? Tuliskan alasan berdasarkan hasil pengamatan.
          </p>
          <textarea
            name="answers.alasan_dugaan"
            defaultValue={getValue("alasan_dugaan")}
            rows={5}
            required
            placeholder="Tuliskan alasannya..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-4">
        <p className="m-0 text-sm font-bold text-[#1E3A8A]">Pertanyaan Diskusi</p>
        <p className="m-0 -mt-2 text-xs text-[#374151]">
          Gunakan data hasil pengamatan untuk berdiskusi dan menjawab pertanyaan berikut.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {pertanyaanDiskusi.map((p) => (
            <div key={p.n} className="bg-white border border-[#BFDBFE] rounded-2xl p-4">
              <div className="flex items-start gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {p.n}
                </div>
                <label htmlFor={p.key} className="flex-1 text-sm font-semibold text-[#111827] pt-0.5">
                  {p.label}
                </label>
              </div>
              <input
                id={p.key}
                type="text"
                name={`answers.${p.key}`}
                defaultValue={getValue(p.key)}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-center gap-4">
        <EditablePageImage
          imageKey="M5-P3-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={laptopImage}
          alt="Laptop menampilkan kubus 3D untuk pembuktian dugaan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white"
        />
        <div className="flex flex-col gap-1">
          <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
            Belum tentu dugaanmu benar. Pada tahap berikutnya kalian akan membuktikannya
            menggunakan GeoGebra 3D dan Augmented Reality.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
