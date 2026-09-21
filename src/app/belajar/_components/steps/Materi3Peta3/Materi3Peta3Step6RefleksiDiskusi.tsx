import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pernyataan = [
  { key: "berani", label: "Saya berani menyampaikan pendapat." },
  { key: "punya_pertanyaan", label: "Saya masih memiliki pertanyaan." },
  { key: "beri_alasan", label: "Saya dapat memberikan alasan." },
  { key: "buktikan_dugaan", label: "Saya ingin membuktikan dugaan kami." },
  { key: "dengarkan_teman", label: "Saya mendengarkan pendapat teman." },
  { key: "yakin_uji", label: "Saya yakin dapat ikut menguji dugaan kelompok kami." },
];

export default async function Materi3Peta3Step6RefleksiDiskusi({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getChecked = (key: string) => answers[key] === "on" || answers[key] === true;
  const gambarMotivasi = await getPageImage("M3-P3-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 &ndash; Ayo Berdiskusi
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Diskusi
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">
            Berilah tanda centang (&#10003;) pada pernyataan yang sesuai dengan pengalamanmu selama berdiskusi.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {pernyataan.map((p) => (
              <label
                key={p.key}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.refleksi_${p.key}`}
                  defaultChecked={getChecked(`refleksi_${p.key}`)}
                  className="w-4 h-4 accent-[#2563EB] flex-shrink-0"
                />
                <span className="text-sm font-semibold text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-[#FEF9E7] border border-[#F5E3A0] px-6 py-6 flex flex-col sm:flex-row items-center gap-5">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 2l3 6.5 7 .9-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.9z" />
            </svg>
            <p className="m-0 text-sm font-extrabold text-[#92400E]">Kotak Motivasi</p>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Perbedaan pendapat adalah hal yang wajar dalam belajar matematika. Alasan yang kuat perlu diuji
            melalui eksplorasi menggunakan GeoGebra 3D dan Augmented Reality. Temukan informasi sebanyak
            mungkin untuk memeriksa dugaan kelompokmu pada tahap berikutnya!
          </p>
        </div>
        <EditablePageImage
            imageKey="M3-P3-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMotivasi}
            alt="Layar GeoGebra 3D di laptop dan tablet dengan Augmented Reality"
            editable={editFoto}
            natural
            containerClassName="relative w-48 sm:w-56 flex-shrink-0 overflow-hidden rounded-2xl bg-white"
          />
      </div>

      <div className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="8" r="3" />
          <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
        </svg>
        <p className="m-0 text-xs leading-[1.7] text-[#374151]">
          Pastikan seluruh anggota kelompok telah menyepakati hasil diskusi sebelum melanjutkan ke tahap berikutnya.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
