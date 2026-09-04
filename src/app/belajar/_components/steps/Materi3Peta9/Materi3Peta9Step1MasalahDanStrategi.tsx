import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ukuran = [
  { label: "Panjang", value: "12 cm" },
  { label: "Lebar", value: "8 cm" },
  { label: "Tinggi", value: "5 cm" },
];

const strategiFields = [
  { key: "cara", label: "Cara yang saya gunakan", rows: 2 },
  { key: "perhitungan", label: "Perhitungan", rows: 3 },
  { key: "alasan", label: "Alasan mengapa strategi ini benar", rows: 2 },
] as const;

export default async function Materi3Peta9Step1MasalahDanStrategi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M3-P9-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 16.5V7.5a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 7.5v9a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z" />
            <path d="M3.27 6.96L12 12l8.73-5.04M12 22V12" />
          </svg>
          Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
              Tantangan Open-Ended
            </h1>
            <p className="m-0 text-sm font-bold text-[#2563EB]">
              Saatnya menunjukkan berbagai strategimu!
            </p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Kamu telah menemukan bagaimana luas permukaan diperoleh melalui pengamatan terhadap
              seluruh sisi bangun ruang. Sekarang saatnya menggunakan pengetahuan tersebut untuk
              menyelesaikan sebuah tantangan terbuka.{" "}
              <span className="font-bold text-[#16A34A]">
                Tidak hanya satu cara yang dapat digunakan.
              </span>{" "}
              Yang penting, kamu dapat menjelaskan alasan matematis dari strategi yang kamu pilih.
            </p>
          </div>
          <EditablePageImage
            imageKey="M3-P9-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa berdiskusi strategi menyelesaikan tantangan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-64 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-white/60"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Masalah Open-Ended
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Sebuah <span className="font-bold">balok</span> memiliki ukuran:
            </p>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1.5">
                {ukuran.map((u) => (
                  <div key={u.label} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                    <span className="text-[#374151]">{u.label} =</span>
                    <span className="font-bold text-[#2563EB]">{u.value}</span>
                  </div>
                ))}
              </div>
              <svg width="88" height="72" viewBox="0 0 88 72" fill="none" className="flex-shrink-0">
                <path d="M10 22L44 8l34 14-34 14z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M10 22v32l34 14V36z" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
                <path d="M78 22v32L44 68V36z" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="m-0 text-sm font-bold text-[#111827]">
              Tentukan luas permukaan balok tersebut.
            </p>
            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-start gap-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <path d="M11 15h2v2h-2zM11 7h2v6h-2z" />
                <path d="M12 2l10 18H2z" />
              </svg>
              <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.5]">
                Temukan sedikitnya dua strategi berbeda untuk menentukan luas permukaan balok
                tersebut. Tidak hanya satu cara yang dapat digunakan — tunjukkan strategimu dan
                jelaskan alasan matematisnya!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Tampilkan Strategimu
            </div>
            <p className="m-0 text-xs text-[#6B7280]">
              Minimal dua strategi berbeda secara matematis.
            </p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((n) => (
                <div key={n} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3">
                  <p className="m-0 text-sm font-bold text-[#111827]">Strategi {n}</p>
                  {strategiFields.map((f) => (
                    <div key={f.key} className="flex flex-col gap-1">
                      <label htmlFor={`strategi${n}${f.key}`} className="text-xs font-semibold text-[#374151]">
                        {f.label}:
                      </label>
                      <textarea
                        id={`strategi${n}${f.key}`}
                        name={`answers.strategi_${n}_${f.key}`}
                        defaultValue={getValue(`strategi_${n}_${f.key}`)}
                        rows={f.rows}
                        required
                        placeholder="Jawabanmu..."
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="strategiLain" className="text-xs font-semibold text-[#111827] flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                  <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
                </svg>
                Strategi Lain (jika ada)
              </label>
              <textarea
                id="strategiLain"
                name="answers.strategi_lain"
                defaultValue={getValue("strategi_lain")}
                rows={2}
                placeholder="Jawabanmu (opsional)..."
                className="w-full rounded-xl border border-dashed border-[#D1D5DB] bg-[#F9FAFB] p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5 flex items-start gap-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M12 17.5a1 1 0 100-2 1 1 0 000 2z" />
          <path d="M6 9a6 6 0 1112 0c0 3-2.5 3.5-2.5 6h-7c0-2.5-2.5-3-2.5-6z" />
        </svg>
        <div className="flex flex-col gap-1.5">
          <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
          <ul className="m-0 pl-4 flex flex-col gap-1">
            <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
              Open-Ended berarti membuka kesempatan munculnya berbagai strategi.
            </li>
            <li className="text-xs font-semibold text-[#78350F] leading-[1.5]">
              Yang dinilai bukan hanya hasil akhir, tetapi juga cara berpikir, alasan matematis,
              kemampuan membandingkan strategi, dan kemampuan memperbaiki penyelesaian.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
