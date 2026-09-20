import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta6Step7RefleksiSingkat({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "ya";
  const gambar = await Promise.all((["M8-P6-L7-1", "M8-P6-L7-2", "M8-P6-L7-3"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l3 3 5-6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Verifikasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_130px] gap-4 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang (✓) pernyataan yang sesuai.</p>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_memeriksa" value="ya" defaultChecked={isChecked("refleksi_memeriksa")} className="mt-0.5 accent-[#2563EB]" />
              Saya dapat memeriksa kembali hasil perhitungan.
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_menjelaskan" value="ya" defaultChecked={isChecked("refleksi_menjelaskan")} className="mt-0.5 accent-[#2563EB]" />
              Saya dapat menjelaskan hubungan faktor skala dan perubahan volume berdasarkan data.
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_memperbaiki" value="ya" defaultChecked={isChecked("refleksi_memperbaiki")} className="mt-0.5 accent-[#2563EB]" />
              Saya bersedia memperbaiki jawaban jika ditemukan kesalahan.
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
              <input type="checkbox" name="answers.refleksi_yakin" value="ya" defaultChecked={isChecked("refleksi_yakin")} className="mt-0.5 accent-[#2563EB]" />
              Saya yakin hubungan yang ditemukan sesuai berdasarkan hasil verifikasi.
            </label>
          </div>
          <EditablePageImage
            imageKey="M8-P6-L7-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Siswi mengacungkan jempol sambil membawa map"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[130px] mx-auto overflow-hidden"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 grid grid-cols-[1fr_110px] gap-3 items-center">
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-base font-extrabold text-[#C2410C]">Motivasi</h3>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">Dalam matematika, dugaan menjadi lebih kuat apabila didukung oleh:</p>
              <ul className="m-0 pl-0 list-none flex flex-col gap-1 text-sm text-[#374151]">
                <li className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>data,</li>
                <li className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>alasan matematis,</li>
                <li className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>dan hasil yang konsisten.</li>
              </ul>
            </div>
            <EditablePageImage
              imageKey="M8-P6-L7-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambar[1]}
              alt="Siswi menunjuk ke atas dengan lampu ide"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </div>
          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 grid grid-cols-[1fr_110px] gap-3 items-center">
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">Pesan Penting</h3>
              <ul className="m-0 pl-0 list-none flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5]">
                <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Dugaan tidak cukup hanya diyakini.</li>
                <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Dugaan perlu diverifikasi menggunakan data dan alasan matematis.</li>
                <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Hubungan faktor skala dan perubahan volume perlu konsisten dengan seluruh hasil pengamatan.</li>
                <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Kesalahan merupakan bagian dari proses menemukan konsep.</li>
              </ul>
            </div>
            <EditablePageImage
              imageKey="M8-P6-L7-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={gambar[2]}
              alt="Kaca pembesar dengan diagram batang"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
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
