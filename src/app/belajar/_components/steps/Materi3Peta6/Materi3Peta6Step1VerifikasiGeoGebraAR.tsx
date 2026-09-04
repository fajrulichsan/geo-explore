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
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hasil Penemuanmu</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kamu telah menemukan cara menentukan luas permukaan berdasarkan hasil eksplorasi dan
            pengolahan informasi. Sekarang saatnya memeriksa kembali apakah strategi dan hasil yang
            diperoleh sesuai dengan bukti.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Gunakan{" "}
            <span className="font-bold text-[#2563EB]">GeoGebra 3D</span>,{" "}
            <span className="font-bold text-[#2563EB]">Augmented Reality (AR)</span>, serta diskusi
            dengan kelompok lain untuk memastikan hasil penemuanmu.
          </p>
        </div>
        <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden bg-[#EFF4FF]">
          <EditablePageImage
            imageKey="M3-P6-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Tiga siswa memverifikasi hasil penemuan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full h-full min-h-[180px]"
          />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Verifikasi Menggunakan GeoGebra dan AR</h2>
        </div>

        <div className="px-6 pt-4">
          <p className="m-0 mb-2 text-sm font-semibold text-[#374151]">Lakukan kegiatan berikut.</p>
          <ul className="m-0 pl-0 flex flex-col gap-1.5">
            {kegiatan.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-3.5 flex items-start gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-xs text-[#92400E] leading-[1.5]">
              Pastikan seluruh sisi telah diperiksa kembali sebelum menyatakan hasilmu sesuai.
            </p>
          </div>
        </div>

        <div className="px-6 py-5 overflow-x-auto">
          <p className="m-0 mb-3 text-sm font-bold text-[#111827]">Hasil Verifikasi</p>
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/5">
                  Bangun Ruang
                </th>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20 w-48">
                  Sudah Sesuai?
                </th>
                <th className="bg-[#16A34A] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Jika Belum, Apa yang Diperbaiki?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {bangunRuang.map((b) => (
                <tr key={b.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{b.label}</td>
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-3">
                      {(["sesuai", "perlu_diperbaiki"] as const).map((opt) => (
                        <label key={opt} className="flex flex-col items-center gap-1 cursor-pointer">
                          <input
                            type="radio"
                            name={`answers.sudah_sesuai_${b.key}`}
                            value={opt}
                            defaultChecked={getValue(`sudah_sesuai_${b.key}`) === opt}
                            required
                            className="accent-[#16A34A]"
                          />
                          <span className="text-[10px] font-semibold text-[#6B7280]">
                            {opt === "sesuai" ? "Sesuai" : "Diperbaiki"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.perbaikan_${b.key}`}
                      defaultValue={getValue(`perbaikan_${b.key}`)}
                      placeholder="Ketik di sini (jika ada)..."
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
