import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const faktorSkala = ["k = 2", "k = 3", "k = ½"] as const;

const petunjuk = [
  "Gunakan lebih dari satu strategi jika memungkinkan.",
  "Jelaskan alasan matematis pada setiap strategi.",
  "Bandingkan strategi yang kamu gunakan.",
  "Pilih strategi yang menurutmu paling efisien beserta alasannya.",
];

export default async function Materi5Peta9Step1MasalahOpenEnded({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [heroImage, diagramImage] = await Promise.all([
    getPageImage("M5-P9-L1-1"),
    getPageImage("M5-P9-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <StepHeader materi={materi} currentStep={1} totalSteps={5} />

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Tantangan Open-Ended
          </h1>
          <p className="m-0 text-sm font-bold text-[#2563EB]">
            Saatnya menunjukkan berbagai strategimu!
          </p>
          <div className="bg-white/80 border border-[#FED7AA] rounded-2xl p-4 flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#C2410C]">Pengantar</p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Kamu telah menemukan hubungan antara faktor skala dan luas permukaan. Sekarang
              gunakan pengetahuan tersebut untuk menyelesaikan sebuah masalah terbuka. Tidak hanya
              satu strategi yang benar. Yang terpenting adalah bagaimana kamu menjelaskan alasan
              matematis dari strategi yang digunakan.
            </p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M5-P9-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa berdiskusi di depan laptop dengan bangun ruang di sekitarnya"
          editable={editFoto}
          natural
          containerClassName="relative w-full md:w-[340px] flex-shrink-0 rounded-2xl overflow-hidden"
        />
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2.5">
        <p className="m-0 text-sm font-bold text-[#1E3A8A]">Petunjuk Pengerjaan</p>
        <ol className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-2">
          {petunjuk.map((t, i) => (
            <li key={t} className="flex items-start gap-2.5 text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Masalah Open-Ended
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Sebuah <span className="font-bold">miniatur limas segiempat</span> mempunyai panjang
              sisi alas <span className="font-bold">8 cm</span> dengan luas permukaan{" "}
              <span className="font-bold">320 cm²</span>.
            </p>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Miniatur tersebut akan{" "}
              <span className="font-bold text-[#2563EB]">diskalakan/diubah ukurannya</span> dengan
              beberapa pilihan faktor skala berikut.
            </p>
            <div className="flex flex-col gap-2">
              <p className="m-0 text-xs font-bold text-[#2563EB]">Pilihan faktor skala (k)</p>
              <div className="flex flex-wrap gap-2.5">
                {faktorSkala.map((f) => (
                  <div
                    key={f}
                    className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-2 px-5 text-sm font-bold text-[#92400E]"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Cobalah menggunakan lebih dari satu strategi untuk menentukan luas permukaan model
              baru apabila faktor skala (k) dipilih menjadi k = 2, k = 3, dan k = ½. Tidak harus
              menghitung dengan satu cara saja.{" "}
              <span className="font-bold text-[#2563EB]">
                Jelaskan alasan matematis pada setiap strategi yang kamu gunakan.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <EditablePageImage
              imageKey="M5-P9-L1-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={diagramImage}
              alt="Model awal miniatur limas dipilih faktor skala k lalu menjadi model hasil penskalaan"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-4 flex flex-col gap-1.5">
              <p className="m-0 text-xs font-bold text-[#5B21B6]">Keterangan:</p>
              <ul className="m-0 pl-4 flex flex-col gap-0.5 list-disc">
                <li className="text-xs font-semibold text-[#6B21A8] leading-[1.5]">
                  Jika k &gt; 1, model hasil menjadi lebih besar.
                </li>
                <li className="text-xs font-semibold text-[#6B21A8] leading-[1.5]">
                  Jika 0 &lt; k &lt; 1, model hasil menjadi lebih kecil.
                </li>
                <li className="text-xs font-semibold text-[#6B21A8] leading-[1.5]">
                  Ukuran model hasil tergantung pada nilai k yang dipilih.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <label htmlFor="catatanPenting" className="text-sm font-bold text-[#1E3A8A]">
            Catatan
          </label>
          <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.5]">
            Tuliskan semua informasi penting yang kamu gunakan selama proses berpikir dan
            perhitungan.
          </p>
          <textarea
            id="catatanPenting"
            name="answers.catatan_penting"
            defaultValue={getValue("catatan_penting")}
            rows={4}
            required
            placeholder="Tuliskan catatanmu..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#C2410C]">Ingat!</p>
          <p className="m-0 text-xs font-semibold text-[#9A3412] leading-[1.5]">
            Tidak hanya satu strategi yang benar. Yang dinilai adalah:
          </p>
          <ul className="m-0 pl-4 flex flex-col gap-0.5 list-disc">
            <li className="text-xs font-semibold text-[#9A3412]">cara berpikir</li>
            <li className="text-xs font-semibold text-[#9A3412]">alasan matematis</li>
            <li className="text-xs font-semibold text-[#9A3412]">kemampuan membandingkan strategi</li>
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
