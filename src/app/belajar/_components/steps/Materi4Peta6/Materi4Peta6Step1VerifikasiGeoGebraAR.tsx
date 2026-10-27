import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { Fragment } from "react";
import FlowConnector from "@/app/belajar/_components/FlowConnector";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const alur = ["GeoGebra 3D & AR", "Periksa Kembali", "Bandingkan", "Revisi"];

const kegiatan = [
  { key: "buka_model", text: "Buka kembali model limas pada GeoGebra 3D." },
  { key: "amati_jaring", text: "Amati kembali jaring-jaring dan bentuk limas." },
  { key: "periksa_ukuran", text: "Periksa ukuran alas dan setiap sisi tegak." },
  { key: "hitung_alas", text: "Hitung kembali luas alas." },
  { key: "hitung_tegak", text: "Hitung kembali luas setiap sisi tegak (yang sama maupun yang berbeda)." },
  { key: "jumlahkan", text: "Jumlahkan luas alas dan luas seluruh sisi tegak.", highlight: true },
  { key: "cocokkan", text: "Cocokkan hasil perhitungan dengan jawaban kelompokmu." },
  { key: "periksa_ar", text: "Periksa kembali melalui Augmented Reality (AR)." },
];

const bangun = [
  { key: "limas_segiempat", label: "Limas Segiempat", note: "Wajib", required: true },
  { key: "limas_segitiga", label: "Limas Segitiga", note: "Opsional bila digunakan sebagai pembanding", required: false },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

export default async function Materi4Peta6Step1VerifikasiGeoGebraAR({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const gambarIngat = await getPageImage("M4-P6-L1-2");
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const isChecked = (key: string) => Boolean(answers[key]);
  const heroImage = await getPageImage("M4-P6-L1-1");
  const alurGambar = await Promise.all(alur.map((_, i) => getPageImage(`M4-P6-L1-${i + 3}` as PageImageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="grid sm:grid-cols-5 gap-5 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6">
        <div className="sm:col-span-3 flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Sekarang saatnya memeriksa kembali apakah strategi dan hasil yang diperoleh{" "}
            <span className="font-bold text-[#2563EB]">sesuai dengan bukti</span>.
          </p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Gunakan GeoGebra 3D, Augmented Reality (AR), dan diskusi dengan kelompok lain untuk memeriksa dan
            memperkuat hasil penemuanmu.
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P6-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa memverifikasi hasil penemuan dengan laptop dan AR"
          editable={editFoto}
          natural
          containerClassName="relative sm:col-span-2 w-full rounded-2xl overflow-hidden bg-white"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {alurGambar.map((src, i) => (
          <Fragment key={alur[i]}>
            <EditablePageImage
              imageKey={`M4-P6-L1-${i + 3}` as PageImageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={String(i + 3)}
              src={src}
              alt={alur[i]}
              editable={editFoto}
              natural
              containerClassName="relative w-full max-w-[200px] mx-auto sm:flex-1"
            />
            {i < alurGambar.length - 1 && <FlowConnector kind="arrow" panahGambar />}
          </Fragment>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#2563EB]">Verifikasi Menggunakan GeoGebra 3D dan AR</span>
          <span className="text-xs text-[#6B7280]">Lakukan langkah-langkah berikut untuk memeriksa kembali hasil kelompokmu.</span>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
        {kegiatan.map((k) => (
          <label key={k.key} className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name={`answers.cek_${k.key}`}
              defaultChecked={isChecked(`cek_${k.key}`)}
              required
              className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 accent-[#2563EB]"
            />
            <span
              className={`text-sm leading-[1.5] group-has-[:checked]:text-[#111827] ${
                k.highlight ? "font-bold text-[#2563EB]" : "font-semibold text-[#374151]"
              }`}
            >
              {k.text}
            </span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="m-0 text-lg font-bold text-[#111827]">Tabel Hasil Verifikasi</h2>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 flex flex-col gap-4">
          {bangun.map((b) => (
            <div key={b.key} className="grid sm:grid-cols-3 gap-3 items-start">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#111827]">{b.label}</span>
                <span className="text-xs font-semibold text-[#2563EB]">({b.note})</span>
              </div>
              <select
                name={`answers.${b.key}_status`}
                defaultValue={getValue(`${b.key}_status`)}
                required={b.required}
                aria-label={`Status verifikasi ${b.label}`}
                className={inputClass}
              >
                <option value="">Sudah sesuai?</option>
                <option value="Sudah sesuai">&#10003; Sudah sesuai</option>
                <option value="Perlu diperbaiki">Perlu diperbaiki</option>
              </select>
              <textarea
                name={`answers.${b.key}_perbaikan`}
                defaultValue={getValue(`${b.key}_perbaikan`)}
                rows={2}
                placeholder="Jika belum, apa yang diperbaiki?"
                aria-label={`Perbaikan ${b.label}`}
                className={`${inputClass} resize-y`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex items-start gap-3">
        <EditablePageImage imageKey="M4-P6-L1-2" materi={materi} peta={peta} step={step} urutan="1" src={gambarIngat} alt="Ikon lampu tanda ingat" editable={editFoto} imageClassName="object-contain" containerClassName="relative w-10 h-10 flex-shrink-0" />
        <div className="flex flex-col gap-1.5">
          <span className="text-base font-extrabold text-[#D97706]">Ingat!</span>
          <ul className="m-0 pl-5 list-disc text-sm text-[#78350F] leading-[1.6]">
            <li>Luas alas dihitung satu kali.</li>
            <li>Luas semua sisi tegak yang membatasi limas telah diperhitungkan.</li>
            <li>Tidak ada sisi yang terlewat.</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
