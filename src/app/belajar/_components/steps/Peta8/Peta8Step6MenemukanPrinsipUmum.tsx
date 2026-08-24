import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const pertanyaan = [
  { n: 1, key: "syarat_klasifikasi_diterima", label: "Apa syarat agar suatu cara klasifikasi dapat diterima?" },
  {
    n: 2,
    key: "alasan_lebih_dari_satu_kelompok",
    label: "Mengapa satu bangun ruang dapat berada pada lebih dari satu kelompok?",
  },
  {
    n: 3,
    key: "hubungan_dasar_kelompok_terbentuk",
    label: "Bagaimana hubungan antara dasar klasifikasi dengan kelompok yang terbentuk?",
  },
];

const checklist = [
  { key: "bekal_lebih_dari_satu_dasar", text: "menggunakan lebih dari satu dasar klasifikasi." },
  { key: "bekal_alasan_matematis", text: "memberikan alasan matematis." },
  { key: "bekal_bandingkan_strategi", text: "membandingkan beberapa strategi." },
  { key: "bekal_memilih_strategi", text: "memilih strategi yang paling sesuai." },
  { key: "bekal_terapkan_situasi_baru", text: "menerapkan konsep klasifikasi pada situasi baru." },
];

export default function Peta8Step6MenemukanPrinsipUmum({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            <path d="M9 18h6M10 22h4" />
          </svg>
          TANTANGAN 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            <path d="M9 18h6M10 22h4" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Menemukan Prinsip Umum
          </h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Jawablah pertanyaan berikut berdasarkan seluruh jawabanmu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-4">
          {pertanyaan.map((p) => (
            <div
              key={p.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {p.n}
              </div>
              <div className="flex-grow flex flex-col gap-3">
                <label className="text-sm font-bold text-[#111827]">{p.label}</label>
                <textarea
                  name={`answers.${p.key}`}
                  defaultValue={getValue(p.key)}
                  rows={3}
                  placeholder="Tuliskan jawabanmu di sini..."
                  required
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none p-4 text-sm text-[#374151] resize-none"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] border-l-4 border-l-[#FDC003] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 sticky top-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FDF3C7] flex items-center justify-center font-bold text-[#92400E]">
                E
              </div>
              <h2 className="m-0 text-lg font-bold text-[#111827]">Bekalku Setelah Tantangan</h2>
            </div>
            <p className="m-0 text-sm text-[#6B7280]">
              Setelah menyelesaikan Tantangan Open-Ended, saya sudah mampu:
            </p>
            <div className="flex flex-col gap-2">
              {checklist.map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer border border-transparent hover:border-[#E5E7EB]"
                >
                  <input
                    type="checkbox"
                    name={`answers.${item.key}`}
                    value="true"
                    defaultChecked={getValue(item.key) === "true"}
                    data-require-group="peta8step6"
                    className="w-4 h-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <span className="text-sm text-[#374151] flex-grow">{item.text}</span>
                </label>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <PhotoUpload
                name="answers.foto_bukti"
                label="Unggah foto hasil kerja (opsional)"
                defaultValue={getValue("foto_bukti")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Selesai
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
