import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alasan = [
  { key: "alasan_luas_alas", q: "Data atau pola apa yang mendukung dugaanmu tentang hubungan volume dengan luas alas?" },
  { key: "alasan_tinggi", q: "Data atau pola apa yang mendukung dugaanmu tentang hubungan volume dengan tinggi (atau panjang prisma)?" },
];

const diingat = [
  "Gunakan pola pada tabel untuk menyusun dugaan hubungan.",
  "Pada kubus dan balok, ukuran yang berubah adalah tinggi (banyak lapisan).",
  "Pada prisma segitiga, ukuran yang berubah adalah panjang prisma.",
  "Tuliskan dugaanmu dengan memperhatikan kesesuaian satuan.",
];

export default async function Materi6Peta5Step6AlasanKesimpulan({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarMaskot = await getPageImage("M6-P5-L6-1");

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
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Mengolah Data Hasil GeoGebra 3D dan Augmented Reality</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              K
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#1E3A8A]">
              Apa Alasan Dugaanmu?
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Gunakan data pada halaman 1 dan 2 untuk memberikan alasan dari dugaanmu. Lengkapi jawaban berikut.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            {alasan.map((a, i) => (
              <div key={a.key} className="flex items-start gap-2.5 rounded-2xl bg-[#EFF4FF] border border-[#BFDBFE] p-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1.5 w-full">
                  <label htmlFor={a.key} className="text-sm font-bold text-[#1E3A8A] leading-[1.4]">
                    {a.q}
                  </label>
                  <textarea
                    id={a.key}
                    name={`answers.${a.key}`}
                    defaultValue={getValue(a.key)}
                    rows={3}
                    placeholder="Ketik jawabanmu di sini..."
                    required
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              L
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
              Refleksi dan Kesimpulan Sementara
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Tuliskan kesimpulan sementara berdasarkan seluruh kegiatan pada Tahap 4. Gunakan kata-katamu sendiri.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2">
            <label htmlFor="kesimpulan" className="text-sm font-bold text-[#7C3AED]">
              Kesimpulan Sementara Saya:
            </label>
            <textarea
              id="kesimpulan"
              name="answers.kesimpulan_sementara"
              defaultValue={getValue("kesimpulan_sementara")}
              rows={9}
              placeholder="Ketik kesimpulanmu di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F5F3FF] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-5 items-end">
        <div className="flex flex-col gap-4">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-4 flex flex-col gap-2">
            <span className="text-sm font-extrabold text-[#111827]">Ingat!</span>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5] list-disc">
              {diingat.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex flex-col gap-1">
            <span className="text-sm font-extrabold text-[#2563EB]">Siap ke Tahap 5!</span>
            <p className="m-0 text-sm text-[#374151] leading-[1.5]">
              Pada Tahap 5, kita akan memverifikasi apakah dugaan hubungan volume yang telah kamu susun sesuai dengan
              data dan berlaku pada contoh lainnya.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M6-P5-L6-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarMaskot}
          alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut ke tahap berikutnya"
          editable={editFoto}
          natural
          containerClassName="relative w-48 mx-auto lg:w-full min-h-24 overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
