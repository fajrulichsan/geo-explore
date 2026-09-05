import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const faktorSkala = ["2", "3", "½"];

export default async function Materi5Peta6Step3UjiHubunganAlasan({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M5-P6-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Skala dan Luas Bangun Ruang Sisi Datar</p>
      </div>

      <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden bg-[#EFF4FF] hidden lg:block h-40">
        <EditablePageImage
          imageKey="M5-P6-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa melakukan pemeriksaan terakhir hasil verifikasi"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full h-full"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Uji Hubungan Skala dan Luas</h2>
          </div>
          <p className="m-0 text-xs text-[#4B5563]">Lengkapilah tabel berikut.</p>

          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl p-3 flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-[11px] text-[#92400E] leading-[1.5]">
              Gunakan hasil verifikasi GeoGebra dan AR untuk memeriksa apakah hubungan tersebut
              konsisten pada bangun dan faktor skala yang telah diamati.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[420px]">
              <thead>
                <tr>
                  <th className="bg-[#EFF4FF] text-[#1D4ED8] text-xs font-bold px-3 py-2.5 rounded-l-lg">
                    Faktor Skala (k)
                  </th>
                  <th className="bg-[#EFF4FF] text-[#1D4ED8] text-xs font-bold px-3 py-2.5 border-l border-white">
                    Luas Awal (cm²)
                  </th>
                  <th className="bg-[#EFF4FF] text-[#1D4ED8] text-xs font-bold px-3 py-2.5 border-l border-white">
                    Luas Baru (cm²)
                  </th>
                  <th className="bg-[#EFF4FF] text-[#1D4ED8] text-xs font-bold px-3 py-2.5 border-l border-white rounded-r-lg">
                    Luas = k² × Luas Awal? (√/X)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {faktorSkala.map((k, idx) => (
                  <tr key={k}>
                    <td className="px-3 py-2 align-top">
                      <p className="m-0 text-sm font-bold text-[#111827]">{k}</p>
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        name={`answers.luas_awal_${idx}`}
                        defaultValue={getValue(`luas_awal_${idx}`)}
                        placeholder="Ketik..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        name={`answers.luas_baru_${idx}`}
                        defaultValue={getValue(`luas_baru_${idx}`)}
                        placeholder="Ketik..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        {(["sesuai", "tidak_sesuai"] as const).map((opt) => (
                          <label key={opt} className="flex flex-col items-center gap-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`answers.luas_konsisten_${idx}`}
                              value={opt}
                              defaultChecked={getValue(`luas_konsisten_${idx}`) === opt}
                              required
                              className="accent-[#16A34A]"
                            />
                            <span className="text-[10px] font-semibold text-[#6B7280]">
                              {opt === "sesuai" ? "√" : "X"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="temuan_pemeriksaan" className="text-xs font-semibold text-[#374151]">
              Apa yang kamu temukan setelah melakukan pemeriksaan ini?
            </label>
            <textarea
              id="temuan_pemeriksaan"
              name="answers.temuan_pemeriksaan"
              defaultValue={getValue("temuan_pemeriksaan")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Jelaskan Alasan Matematis</h2>
          </div>
          <p className="m-0 text-xs text-[#4B5563]">
            Mengapa perubahan setiap ukuran panjang dengan faktor skala <span className="font-semibold">k</span>{" "}
            menyebabkan perubahan luas permukaan seperti yang kamu peroleh? Jelaskan menggunakan hasil
            pengamatan, perhitungan, dan data hasil verifikasimu.
          </p>
          <textarea
            name="answers.alasan_matematis"
            defaultValue={getValue("alasan_matematis")}
            rows={9}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
