import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const fields = [
  {
    key: "pemahaman_hari_ini",
    label: "Hari ini saya memahami bahwa ...",
    placeholder: "Tulis pemahamanmu di sini...",
    icon: <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" />,
  },
  {
    key: "kegiatan_paling_membantu",
    label: "Kegiatan yang paling membantuku belajar adalah ... karena ...",
    placeholder: "Ceritakan kegiatan tersebut...",
    icon: <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM22 2L15.5 8.5M15.5 8.5L9 2M9 2l6.5 6.5M22 2l-6.5 6.5M13 19l6-6" />,
  },
  {
    key: "ingin_tahu_lebih_lanjut",
    label: "Saya masih ingin mengetahui lebih banyak tentang ...",
    placeholder: "Apa yang ingin kamu pelajari lebih lanjut?",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 015.8 1c0 2-3 2.5-3 4M12 17h.01" /></>,
  },
];

export default async function Peta8Step2RefleksiPengalaman({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const bukuTanaman = await getPageImage("M1-P8-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#166534] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#166534]">
            Refleksi Pengalaman Belajar
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Tuliskan pengalaman belajarmu hari ini dengan jujur dan terbuka.</p>

        <div className="grid lg:grid-cols-[1fr_180px] gap-5 items-start">
          <div className="flex flex-col gap-4">
            {fields.map((f) => (
              <div
                key={f.key}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
              >
                <div className="flex items-center gap-2.5">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" className="flex-shrink-0">
                    {f.icon}
                  </svg>
                  <label className="text-sm font-bold text-[#111827]">{f.label}</label>
                </div>
                <textarea
                  name={`answers.${f.key}`}
                  defaultValue={getValue(f.key)}
                  rows={3}
                  placeholder={f.placeholder}
                  required
                  className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#166534] focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-col items-center gap-4 sticky top-4">
            <EditablePageImage
              imageKey="M1-P8-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={bukuTanaman}
              alt="Tumpukan buku berwarna dengan tanaman pot di sampingnya"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-[14px] overflow-hidden"
            />
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
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
