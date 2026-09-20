import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta3Step6BandingkanDugaanKelompok({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarHero = await getPageImage("M8-P3-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_320px] gap-5 items-center">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg font-extrabold text-white">Ingat!</h2>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Faktor skala <span className="font-bold text-white">k = 2</span> berarti setiap ukuran panjang pada bangun hasil skala menjadi 2 kali ukuran semula.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Pada Tahap 1, kamu telah menghitung volume beberapa bangun. Sekarang bandingkan hasilnya dengan kelompok lain.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Apakah ada pola tertentu antara perubahan ukuran panjang dan perubahan volume? Simpan dugaanmu, karena pada tahap berikutnya kita akan membuktikannya dengan GeoGebra 3D dan <span className="italic">Augmented Reality</span> (AR).
          </p>
        </div>
        <EditablePageImage
          imageKey="M8-P3-L6-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa berdiskusi dengan tabel hasil pengamatan Kelompok A dan Kelompok B"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Dugaan Kelompok
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Tuliskan hasil diskusi setelah membandingkan dugaan kelompokmu dengan kelompok lain.
        </p>
        <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr className="bg-[#2563EB] text-white text-xs sm:text-sm">
                <th className="p-3 text-left font-bold">Hal yang Dibandingkan</th>
                <th className="p-3 font-bold">Kelompok Kami</th>
                <th className="p-3 font-bold">Kelompok Lain</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-left align-top text-sm font-bold text-[#1E3A8A] w-[34%]">Dugaan hubungan faktor skala dan volume</th>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_dugaan_kami"
                    defaultValue={getValue("bandingkan_dugaan_kami")}
                    rows={2}
                    required
                    aria-label="Dugaan hubungan faktor skala dan volume kelompok kami"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_dugaan_lain"
                    defaultValue={getValue("bandingkan_dugaan_lain")}
                    rows={2}
                    required
                    aria-label="Dugaan hubungan faktor skala dan volume kelompok lain"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-left align-top text-sm font-bold text-[#1E3A8A] w-[34%]">Alasan yang digunakan</th>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_alasan_kami"
                    defaultValue={getValue("bandingkan_alasan_kami")}
                    rows={2}
                    required
                    aria-label="Alasan yang digunakan kelompok kami"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_alasan_lain"
                    defaultValue={getValue("bandingkan_alasan_lain")}
                    rows={2}
                    required
                    aria-label="Alasan yang digunakan kelompok lain"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-left align-top text-sm font-bold text-[#1E3A8A] w-[34%]">Persamaan</th>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_persamaan_kami"
                    defaultValue={getValue("bandingkan_persamaan_kami")}
                    rows={2}
                    required
                    aria-label="Persamaan kelompok kami"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_persamaan_lain"
                    defaultValue={getValue("bandingkan_persamaan_lain")}
                    rows={2}
                    required
                    aria-label="Persamaan kelompok lain"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-left align-top text-sm font-bold text-[#1E3A8A] w-[34%]">Perbedaan</th>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_perbedaan_kami"
                    defaultValue={getValue("bandingkan_perbedaan_kami")}
                    rows={2}
                    required
                    aria-label="Perbedaan kelompok kami"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.bandingkan_perbedaan_lain"
                    defaultValue={getValue("bandingkan_perbedaan_lain")}
                    rows={2}
                    required
                    aria-label="Perbedaan kelompok lain"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="m-0 text-sm text-[#166534] leading-[1.5]">Tuliskan hasil diskusi dengan jelas pada setiap bagian.</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
