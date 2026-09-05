import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const petunjuk = [
  "Buka model bangun ruang pada GeoGebra 3D.",
  "Pilih salah satu bangun ruang (kubus, balok, prisma, atau limas).",
  "Ubah faktor skala menggunakan slider (k). Misalnya: k = 1/2, 1, 2, atau 3.",
  "Ukur ukuran yang diminta.",
  "Hitung luas permukaan bangun berdasarkan ukuran yang kamu peroleh.",
  "Cocokkan dengan informasi dinamis GeoGebra.",
];

const alurKerja = [
  { n: 1, label: "Pilih Model", desc: "Pilih salah satu bangun ruang." },
  { n: 2, label: "Ubah Skala", desc: "Geser slider faktor skala." },
  { n: 3, label: "Ukur Ukuran", desc: "Ukur ukuran yang diminta (rusuk, panjang, tinggi, dll)." },
  { n: 4, label: "Hitung Luas", desc: "Hitung luas permukaan berdasarkan ukuran." },
  { n: 5, label: "Catat Hasil", desc: "Catat pada tabel untuk setiap faktor skala (k)." },
];

const faktorSkala = ["1/2", "1", "2", "3"];

export default async function Materi5Peta4Step2EksplorasiGeoGebra({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [gambarGeoGebra, gambarQr] = await Promise.all([
    getPageImage("M5-P4-L2-1"),
    getPageImage("qr-geogebra"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi Menggunakan GeoGebra 3D
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#111827]">Petunjuk</span>
              <div className="flex flex-col gap-2.5">
                {petunjuk.map((l, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#1D4ED8]">Model GeoGebra 3D (Contoh: Kubus)</span>
              <EditablePageImage
                imageKey="M5-P4-L2-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambarGeoGebra}
                alt="Model kubus pada GeoGebra 3D dengan slider faktor skala k = 2"
                editable={editFoto}
                containerClassName="relative w-full aspect-video rounded-[14px] overflow-hidden bg-white"
              />

              <div className="flex flex-col items-center gap-2 pt-2 border-t border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#2563EB]">Scan GeoGebra 3D</span>
                <EditablePageImage
                  imageKey="qr-geogebra"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="2"
                  src={gambarQr}
                  alt="QR code menuju model GeoGebra 3D bangun ruang"
                  editable={editFoto}
                  imageClassName="object-contain p-2"
                  containerClassName="relative w-28 h-28 rounded-xl overflow-hidden bg-white border border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#111827] mb-2 block">Alur Kerja</span>
            <div className="flex flex-wrap items-start gap-2">
              {alurKerja.map((a, i) => (
                <div key={a.n} className="flex items-start gap-2">
                  <div className="flex flex-col items-center gap-1.5 min-w-[100px] max-w-[130px]">
                    <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                      {a.n}
                    </div>
                    <p className="m-0 text-center text-[11px] font-bold text-[#111827]">{a.label}</p>
                    <p className="m-0 text-center text-[10px] text-[#6B7280] leading-[1.4]">{a.desc}</p>
                  </div>
                  {i < alurKerja.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0 mt-1.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <span className="text-xs font-bold text-[#111827] mb-2 block">Tabel Pengamatan GeoGebra 3D</span>
            <table className="w-full text-left border-collapse min-w-[480px]">
              <thead>
                <tr>
                  <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/4">
                    Faktor Skala (k)
                  </th>
                  <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20">
                    Ukuran yang Diamati (cm)
                  </th>
                  <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                    Luas Permukaan (cm&sup2;)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {faktorSkala.map((k) => (
                  <tr key={k}>
                    <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">k = {k}</td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        name={`answers.geogebra_ukuran_${k.replace("/", "-")}`}
                        defaultValue={getValue(`geogebra_ukuran_${k.replace("/", "-")}`)}
                        placeholder="..."
                        required
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        name={`answers.geogebra_luas_${k.replace("/", "-")}`}
                        defaultValue={getValue(`geogebra_luas_${k.replace("/", "-")}`)}
                        placeholder="..."
                        required
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FEF9E7] rounded-xl py-3.5 px-[18px] flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#92400E]">Catatan</p>
            <ul className="m-0 pl-4 flex flex-col gap-1 text-xs text-[#78350F] leading-[1.5] list-disc">
              <li>Kubus: panjang rusuk (s)</li>
              <li>Balok: panjang, lebar, tinggi (p, l, t)</li>
              <li>Prisma Segitiga: panjang prisma, alas segitiga (p, a, t<sub>a</sub>)</li>
              <li>Limas Segiempat: sisi alas (a), apotema (a)</li>
              <li>Catat panjang/ukuran dan luas permukaan untuk setiap faktor skala (k).</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
