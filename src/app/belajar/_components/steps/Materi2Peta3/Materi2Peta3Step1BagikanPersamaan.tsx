import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const teman = [
  { n: 1, label: "Saya" },
  { n: 2, label: "Teman 1" },
  { n: 3, label: "Teman 2" },
  { n: 4, label: "Teman 3" },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors";

export default async function Materi2Peta3Step1BagikanPersamaan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const [mascotImage, kelompokImage] = await Promise.all([
    getPageImage("M2-P3-L1-1"),
    getPageImage("M2-P3-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-5 rounded-[28px] bg-white border border-[#DBE7FF] p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <EditablePageImage
            imageKey="M2-P3-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot mengajak berdiskusi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-24 sm:w-36 sm:h-28 flex-shrink-0"
          />
          <p className="lg:hidden m-0 text-sm leading-[1.6] text-[#374151]">
            Setiap anggota kelompok mungkin memiliki hasil pengamatan yang berbeda. Sekarang,{" "}
            <b className="text-[#2563EB]">ceritakan</b> hasil pengamatanmu kepada teman sekelompok dan{" "}
            <b className="text-[#2563EB]">dengarkan</b> pendapat mereka.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2.5 bg-white border border-[#E5E7EB] rounded-2xl py-4 px-5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Setiap anggota kelompok mungkin memiliki hasil pengamatan yang berbeda. Sekarang,{" "}
            <b className="text-[#2563EB]">ceritakan</b> hasil pengamatanmu kepada teman sekelompok dan{" "}
            <b className="text-[#2563EB]">dengarkan</b> pendapat mereka.
          </p>
        </div>
        <EditablePageImage
          imageKey="M2-P3-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={kelompokImage}
          alt="Ilustrasi empat siswa berdiskusi"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full sm:w-64 aspect-[3/2] mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Bagikan Hasil Pengamatanmu
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Tuliskan hasil pengamatanmu dan dengarkan pendapat temanmu. Lengkapi tabel berikut.
            </p>
            {teman.map((t) => (
              <div key={t.n} className="rounded-2xl border border-[#DBE7FF] bg-[#F8FAFF] p-4 flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563EB] text-white text-xs font-bold py-1 px-3">
                  {t.label}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#6B7280]">Susunan yang dianggap jaring-jaring</label>
                    <input
                      type="text"
                      name={`answers.teman_${t.n}_susunan`}
                      defaultValue={getValue(`teman_${t.n}_susunan`)}
                      placeholder="Ketik di sini..."
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#6B7280]">Alasannya</label>
                    <input
                      type="text"
                      name={`answers.teman_${t.n}_alasan`}
                      defaultValue={getValue(`teman_${t.n}_alasan`)}
                      placeholder="Ketik di sini..."
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Persamaan dan Perbedaan Pendapat
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Lengkapi bersama kelompokmu.</p>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#16A34A]">
                Persamaan <span className="font-semibold text-xs">(hal yang sama)</span>
              </span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="8" r="3" />
                <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
              </svg>
            </div>
            {[1, 2, 3].map((n) => (
              <input
                key={n}
                type="text"
                name={`answers.persamaan_${n}`}
                defaultValue={getValue(`persamaan_${n}`)}
                placeholder={`Persamaan ${n}...`}
                required
                className="w-full rounded-xl border border-[#BBF7D0] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors"
              />
            ))}
          </div>

          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#DC2626]">
                Perbedaan <span className="font-semibold text-xs">(hal yang berbeda)</span>
              </span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="8" r="3" />
                <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
              </svg>
            </div>
            {[1, 2, 3].map((n) => (
              <input
                key={n}
                type="text"
                name={`answers.perbedaan_${n}`}
                defaultValue={getValue(`perbedaan_${n}`)}
                placeholder={`Perbedaan ${n}...`}
                required
                className="w-full rounded-xl border border-[#FECACA] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors"
              />
            ))}
          </div>
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
