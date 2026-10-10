import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const checklist = [
  {
    key: "paham_cara_mengelompokkan",
    text: "Saya dapat menjelaskan berbagai cara mengelompokkan bangun ruang sisi datar.",
    icon: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
    ),
  },
  {
    key: "paham_alasan_matematis",
    text: "Saya dapat memberikan alasan matematis terhadap hasil klasifikasi yang saya buat.",
    icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />,
  },
  {
    key: "paham_hubungan_dasar_kelompok",
    text: "Saya memahami hubungan antara dasar pengelompokan dengan kelompok bangun ruang yang terbentuk.",
    icon: <><circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" /></>,
  },
  {
    key: "paham_syarat_diterima",
    text: "Saya dapat menjelaskan syarat agar suatu cara pengelompokan bangun ruang dapat diterima.",
    icon: <><rect x="4" y="3" width="16" height="4" rx="1" /><path d="M8 9v4a2 2 0 002 2h2M16 9v10M8 15h4" /></>,
  },
  {
    key: "paham_gunakan_data",
    text: "Saya menggunakan data hasil pengamatan untuk mendukung alasan saya.",
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  },
  {
    key: "paham_bandingkan_strategi",
    text: "Saya membandingkan strategi saya dengan strategi teman dan memilih alasan yang lebih kuat.",
    icon: <><circle cx="9" cy="7" r="3" /><path d="M2 21v-1a6 6 0 016-6h2a6 6 0 016 6v1" /><circle cx="18" cy="7" r="2.5" /></>,
  },
  {
    key: "paham_transfer_cara_berpikir",
    text: "Saya dapat menggunakan cara berpikir ini pada masalah atau situasi yang berbeda.",
    icon: <path d="M3 12a9 9 0 0115.4-6.4M21 12a9 9 0 01-15.4 6.4M17 2v4h-4M7 22v-4h4" />,
  },
];

export default async function Peta8Step1RefleksiPemahaman({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [siswa, maskot, otakIde] = await Promise.all([
    getPageImage("M1-P8-L1-1"),
    getPageImage("M1-P8-L1-2"),
    getPageImage("M1-P8-L1-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-[24px] p-6 sm:p-7 flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="flex items-center gap-4 sm:gap-6">
          <EditablePageImage
            imageKey="M1-P8-L1-1"
            materi={materi}
            peta={peta}
            step="1"
            urutan="1"
            src={siswa}
            alt="Tiga siswa dalam lingkaran biru dengan bubble percakapan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full bg-white/90 overflow-hidden"
          />
          <div className="flex-1 min-w-0">
            <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-white">Refleksi Diri</h1>
            <p className="m-0 mt-1 text-sm font-semibold text-[#DBE4FF]">Submateri 1 &ndash; Bangun Ruang Sisi Datar</p>
          </div>
          <EditablePageImage
            imageKey="M1-P8-L1-2"
            materi={materi}
            peta={peta}
            step="1"
            urutan="2"
            src={maskot}
            alt="Maskot siswi berhijab dengan bubble hati, merenungkan proses belajar"
            editable={editFoto}
            imageClassName="object-cover"
            containerClassName="relative w-28 h-32 sm:w-40 sm:h-48 flex-shrink-0 rounded-[24px] overflow-hidden bg-white/90"
          />
        </div>
        <p className="m-0 text-sm leading-[1.7] text-[#DBE4FF] max-w-2xl">
          Setiap proses belajar memberimu pengalaman yang berharga. Sekarang, renungkan kembali apa yang telah kamu
          pelajari, bagaimana kamu menemukan konsep, serta bagaimana perasaanmu selama mengikuti kegiatan
          pembelajaran.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Pemahaman
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Centang (&#10003;) semua pernyataan yang sesuai dengan pemahamanmu setelah belajar hari ini.
        </p>

        <div className="grid sm:grid-cols-[1fr_240px] gap-5 items-start">
          <div className="flex flex-col gap-3">
            {checklist.map((c) => (
              <label
                key={c.key}
                className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#2563EB] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  data-require-group="peta8step1"
                  className="peer sr-only"
                />
                <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151] group-hover:text-[#2563EB] transition-colors flex-1">
                  {c.text}
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93A5C9" strokeWidth="2" className="flex-shrink-0 hidden sm:block">
                  {c.icon}
                </svg>
              </label>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 sm:w-full">
            <EditablePageImage
              imageKey="M1-P8-L1-3"
              materi={materi}
              peta={peta}
              step="1"
              urutan="3"
              src={otakIde}
              alt="Karakter otak berkacamata memegang bohlam ide"
              editable={editFoto}
              imageClassName="object-cover"
              containerClassName="relative w-40 h-40 sm:w-full sm:h-60 flex-shrink-0 rounded-[24px] overflow-hidden bg-[#EFF4FF]"
            />
            <div className="bg-[#FEF9E7] border border-[#F5E4A8] rounded-[16px] p-4 text-center">
              <p className="m-0 text-xs font-bold text-[#92400E] leading-[1.6]">
                Memahami konsep, memberi alasan, dan menggunakan data akan membuatmu siap untuk tantangan
                berikutnya!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#EFF4FF] border border-[#DBE4FF] rounded-[20px] py-5 px-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M12 2l2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1L12 2z" />
          </svg>
        </div>
        <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.6]">
          Semakin banyak yang kamu pahami, semakin kuat kemampuan matematikmu!
        </p>
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
