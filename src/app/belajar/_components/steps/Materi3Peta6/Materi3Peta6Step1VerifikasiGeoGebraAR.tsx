import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const kegiatan = [
  "Buka kembali model bangun ruang pada GeoGebra 3D.",
  "Periksa ukuran setiap sisi.",
  "Hitung kembali luas masing-masing sisi.",
  "Bandingkan dengan hasil kelompokmu.",
  "Amati kembali model menggunakan AR.",
  "Pastikan tidak ada sisi yang terlewat.",
];

const alur = ["GeoGebra & AR", "Periksa Kembali", "Bandingkan", "Revisi"];

const bangunRuang = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma" },
];

export default async function Materi3Peta6Step1VerifikasiGeoGebraAR({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M3-P6-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hasil Penemuanmu</p>
      </div>

      <div className="rounded-[24px] bg-white border border-[#DBEAFE] overflow-hidden grid md:grid-cols-2 items-center">
        <div className="p-6 md:p-8 flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Kamu telah menemukan cara menentukan luas permukaan berdasarkan hasil eksplorasi dan
            pengolahan informasi. Sekarang saatnya memeriksa kembali apakah strategi dan hasil yang
            diperoleh <span className="font-bold text-[#16A34A]">sesuai dengan bukti</span>.
          </p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Gunakan <span className="font-bold text-[#2563EB]">GeoGebra 3D</span>,{" "}
            <span className="font-bold text-[#2563EB]">Augmented Reality (AR)</span>, serta diskusi
            dengan kelompok lain untuk memastikan hasil penemuanmu.
          </p>
        </div>
        <EditablePageImage
          imageKey="M3-P6-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa memverifikasi hasil penemuan dengan tablet, laptop, dan bangun ruang"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <ol className="m-0 p-0 list-none flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          {alur.map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              <span className="bg-[#EFF4FF] text-[#1E3A8A] rounded-full py-1.5 px-4 text-xs font-bold">{item}</span>
              {i < alur.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </li>
          ))}
        </ol>
        <p className="m-0 mt-3 text-center text-xs font-semibold text-[#2563EB]">
          Lakukan verifikasi, bandingkan dengan kelompok lain, lalu revisi jika diperlukan.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Verifikasi Menggunakan GeoGebra dan AR</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="m-0 text-sm font-semibold text-[#374151]">Lakukan kegiatan berikut.</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {kegiatan.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-3.5 flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
              </svg>
              <p className="m-0 text-xs text-[#92400E] leading-[1.5]">
                Pastikan seluruh sisi telah diperiksa kembali sebelum menyatakan hasilmu sesuai.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="m-0 text-center text-base font-bold text-[#111827]">Hasil Verifikasi</p>
            {bangunRuang.map((b) => (
              <div key={b.key} className="border border-[#D1E7D6] rounded-2xl p-4 flex flex-col gap-3 bg-[#F7FCF8]">
                <p className="m-0 text-sm font-extrabold text-[#166534]">{b.label}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#6B7280]">Sudah sesuai?</span>
                  {(
                    [
                      { value: "sesuai", label: "✓ Sesuai" },
                      { value: "perlu_diperbaiki", label: "Perlu diperbaiki" },
                    ] as const
                  ).map((opt) => (
                    <label key={opt.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name={`answers.sudah_sesuai_${b.key}`}
                        value={opt.value}
                        defaultChecked={getValue(`sudah_sesuai_${b.key}`) === opt.value}
                        required
                        className="peer sr-only"
                      />
                      <span className="inline-block rounded-full border border-[#D1D5DB] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4B5563] peer-checked:bg-[#16A34A] peer-checked:text-white peer-checked:border-[#16A34A] peer-focus-visible:ring-2 peer-focus-visible:ring-[#16A34A]">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
                <input
                  type="text"
                  name={`answers.perbaikan_${b.key}`}
                  defaultValue={getValue(`perbaikan_${b.key}`)}
                  placeholder="Jika belum, apa yang diperbaiki?"
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center">
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
