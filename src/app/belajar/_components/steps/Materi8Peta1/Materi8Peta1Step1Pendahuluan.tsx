import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pilihan = [
  { value: "2_kali", label: "menjadi 2 kali" },
  { value: "4_kali", label: "menjadi 4 kali" },
  { value: "6_kali", label: "menjadi 6 kali" },
  { value: "8_kali", label: "menjadi 8 kali" },
  { value: "lain", label: "dugaan lain" },
];

export default async function Materi8Peta1Step1Pendahuluan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarHero, gambarAlur] = await Promise.all([
    getPageImage("M8-P1-L1-1"),
    getPageImage("M8-P1-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 8
        </div>
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
          >
            <path d="M12 2l9 5v10l-9 5-9-5V7z" />
            <path d="M3 7l9 5 9-5M12 12v10" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Skala dan Volume Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-5 sm:p-7 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <EditablePageImage
          imageKey="M8-P1-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa mengamati GeoGebra 3D dan AR sambil bertanya apakah volume ikut menjadi dua kali saat setiap rusuk diperbesar dua kali"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[16px] overflow-hidden bg-[#EFF4FF]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pengantar
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3 text-[15px] leading-[1.6] text-[#374151]">
          <p className="m-0">
            Pernahkah kamu melihat miniatur bangunan, maket perumahan, atau
            model bangun ruang yang diperbesar?
          </p>
          <p className="m-0">
            Ketika ukuran setiap rusuk diperbesar menggunakan suatu faktor
            skala, ternyata perubahan volumenya tidak sesederhana yang
            dibayangkan.
          </p>
          <p className="m-0">
            Pada submateri ini kamu akan menemukan hubungan antara faktor skala
            dan volume bangun ruang sisi datar melalui pengamatan, diskusi,
            eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR), serta
            menyelesaikan berbagai masalah secara logis.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D97706"
            strokeWidth="2.2"
          >
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
          </svg>
          <span className="text-base font-extrabold text-[#DC2626]">
            Menurutmu...
          </span>
        </div>
        <p className="m-0 text-sm font-bold text-[#111827] leading-[1.6]">
          Jika panjang setiap rusuk kubus diperbesar menjadi 2 kali, bagaimana
          perubahan volumenya?
        </p>
        <div className="flex flex-wrap gap-2">
          {pilihan.map((p) => (
            <label
              key={p.value}
              className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
            >
              <input
                type="radio"
                name="answers.perubahan_volume"
                value={p.value}
                defaultChecked={getValue("perubahan_volume") === p.value}
                required
                className="accent-[#2563EB]"
              />
              {p.label}
            </label>
          ))}
        </div>
        <label
          htmlFor="alasan_perubahan_volume"
          className="text-sm font-bold text-[#2563EB]"
        >
          Tuliskan alasanmu atau dugaanmu jika berbeda.
        </label>
        <textarea
          id="alasan_perubahan_volume"
          name="answers.alasan_perubahan_volume"
          defaultValue={getValue("alasan_perubahan_volume")}
          rows={3}
          placeholder="Ketik jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bagaimana Skala Mempengaruhi Volume?
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 sm:p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M8-P1-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambarAlur}
            alt="Lima langkah: bangun asli, ubah ukuran dengan faktor skala k, setiap panjang menjadi k kali, volume bangun berubah, temukan polanya"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>
        <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#D97706"
            stroke="#D97706"
            strokeWidth="1.6"
            className="mt-0.5 flex-shrink-0"
          >
            <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8z" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Perhatikan kedua bangun di atas. Bagaimana hubungan faktor skala
            dengan volume?
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.4"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
