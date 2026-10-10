import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const checklist = [
  { key: "yakin_mengelompokkan_berbagai_sifat", text: "mengelompokkan bangun ruang berdasarkan berbagai sifat." },
  {
    key: "yakin_menjelaskan_alasan_matematis",
    text: "menjelaskan alasan matematis dari pengelompokan yang saya buat.",
  },
  { key: "yakin_mendiskusikan_strategi", text: "mendiskusikan strategi pengelompokan dengan teman." },
  {
    key: "yakin_menyampaikan_pendapat",
    text: "menyampaikan dan mempertahankan pendapat dengan alasan yang tepat.",
  },
  {
    key: "yakin_memperbaiki_jawaban",
    text: "memperbaiki jawaban apabila menemukan bukti atau alasan yang lebih kuat.",
  },
  {
    key: "yakin_menerapkan_cara_berpikir_baru",
    text: "menggunakan cara berpikir ini untuk mengelompokkan bangun ruang pada masalah yang berbeda.",
  },
];

export default async function Peta8Step3KeyakinanDiriku({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const bintang = await getPageImage("M1-P8-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#C2410C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#C2410C]">
            Keyakinan Diriku
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Centang (&#10003;) setiap pernyataan yang sesuai dengan keyakinanmu saat ini.</p>

        <div className="grid sm:grid-cols-[1fr_240px] gap-5 items-start">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#FFF1E9] border border-[#FED7AA] rounded-full py-2 px-5 text-sm font-bold text-[#C2410C] w-fit">
              Saya yakin dapat ...
            </div>
            {checklist.map((c) => (
              <label
                key={c.key}
                className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#C2410C] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.${c.key}`}
                  value="true"
                  defaultChecked={getValue(c.key) === "true"}
                  data-require-group="peta8step3"
                  className="peer sr-only"
                />
                <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#C2410C] peer-checked:border-[#C2410C] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#374151] group-hover:text-[#C2410C] transition-colors">
                  {c.text}
                </span>
              </label>
            ))}
          </div>

          <div className="hidden sm:flex flex-col items-center gap-3">
            <EditablePageImage
              imageKey="M1-P8-L3-1"
              materi={materi}
              peta={peta}
              step="3"
              urutan="1"
              src={bintang}
              alt="Karakter bintang kuning tersenyum, bertaburan bintang kecil di sekitarnya"
              editable={editFoto}
              imageClassName="object-cover"
              containerClassName="relative w-full h-64 rounded-[20px] overflow-hidden bg-[#FFF1E9]"
            />
            <div className="bg-[#FFF1E9] border border-[#FED7AA] rounded-[16px] p-4 text-center">
              <p className="m-0 text-xs font-bold text-[#C2410C] leading-[1.6]">
                Percaya pada kemampuan diri adalah langkah penting untuk terus berkembang. Kamu pasti bisa!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto jurnal refleksimu (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
