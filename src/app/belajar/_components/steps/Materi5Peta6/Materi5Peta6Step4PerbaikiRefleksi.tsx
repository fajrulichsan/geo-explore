import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const refleksi = [
  { key: "periksa_hitungan", label: "Saya dapat memeriksa kembali hasil perhitungan." },
  { key: "jelaskan_alasan", label: "Saya dapat menjelaskan alasan matematis berdasarkan data." },
  { key: "bersedia_perbaiki", label: "Saya bersedia memperbaiki jawaban jika ditemukan kesalahan." },
  { key: "yakin_hubungan", label: "Saya yakin hubungan yang ditemukan sesuai berdasarkan bukti yang telah diperiksa." },
];

const pesanPenting = [
  "Verifikasi adalah langkah penting untuk memastikan kebenaran.",
  "Dugaan perlu diperiksa menggunakan data dan alasan matematis.",
  "Kesalahan merupakan bagian dari proses menemukan konsep.",
];

export default async function Materi5Peta6Step4PerbaikiRefleksi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;
  const thumbsUpImage = await getPageImage("M5-P6-L4-1");
  const mascotImage = await getPageImage("M5-P6-L4-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Skala dan Luas Bangun Ruang Sisi Datar</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Perbaiki Dugaan Jika Diperlukan</h2>
        </div>
        <p className="m-0 text-sm text-[#374151]">Apakah dugaan kelompokmu perlu diperbaiki?</p>
        <div className="flex items-center gap-6">
          {(["tidak", "ya"] as const).map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="answers.perlu_diperbaiki"
                value={opt}
                defaultChecked={getValue("perlu_diperbaiki") === opt}
                required
                className="accent-[#16A34A]"
              />
              <span className="text-sm font-semibold text-[#374151]">{opt === "tidak" ? "Tidak" : "Ya"}</span>
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dugaan_diperbaiki" className="text-xs font-semibold text-[#374151]">
            Jika Ya, tuliskan dugaan yang telah diperbaiki.
          </label>
          <textarea
            id="dugaan_diperbaiki"
            name="answers.dugaan_diperbaiki"
            defaultValue={getValue("dugaan_diperbaiki")}
            rows={3}
            placeholder="Tuliskan (jika ada)..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Refleksi Singkat
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Centang (✓) pernyataan yang sesuai dengan hasil belajarmu hari ini.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {refleksi.map((r) => (
              <label key={r.key} className="flex items-center gap-3 text-sm text-[#374151] cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.refleksi_${r.key}`}
                  defaultChecked={checked(`refleksi_${r.key}`)}
                  className="w-4 h-4 rounded accent-[#7C3AED] flex-shrink-0"
                />
                {r.label}
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M5-P6-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={thumbsUpImage}
            alt="Siswa memberi jempol tanda semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-32 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#F3E8FF] self-start"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M12 17.3l-6.2 3.6 1.6-7-5.4-4.6 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.6 1.6 7z" />
          </svg>
          <div className="flex flex-col gap-1 flex-1">
            <p className="m-0 text-xs font-bold text-[#92400E]">Motivasi</p>
            <p className="m-0 text-xs text-[#374151] leading-[1.6]">
              Ketelitian dalam memverifikasi akan membuat pemahamanmu semakin kuat dan hasilmu semakin
              meyakinkan! Teruslah berpikir kritis dan teliti.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P6-L4-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={mascotImage}
            alt="Maskot memberi semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/40"
          />
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
              <path d="M12 2l2.4 6.9L22 9.2l-5.8 4.2L18.2 21 12 16.9 5.8 21l2-7.6L2 9.2l7.6-.3z" />
            </svg>
            <p className="m-0 text-xs font-bold text-[#1D4ED8]">Pesan Penting</p>
          </div>
          <ul className="m-0 pl-4 flex flex-col gap-0.5 list-disc">
            {pesanPenting.map((item) => (
              <li key={item} className="text-xs text-[#1D4ED8] leading-[1.5]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4 flex items-start gap-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18 2l4 4-11 11H7v-4L18 2z" />
        </svg>
        <p className="m-0 text-xs text-[#374151] leading-[1.5]">
          Kamu telah memverifikasi hubungan antara faktor skala dan luas permukaan. Pada{" "}
          <span className="font-bold">Tahap 6 - Ayo Menyimpulkan</span>, kamu akan menyusun generalisasi
          umum berdasarkan seluruh proses yang telah dilakukan.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 6
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
