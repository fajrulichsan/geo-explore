import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const pernyataan: { key: string; label: string; imageKey: PageImageKey; urutan: string; alt: string }[] = [
  { key: "aktif_pendapat", label: "Saya aktif menyampaikan pendapat.", imageKey: "M5-P3-L7-1", urutan: "1", alt: "Siswa menunjuk ke atas sambil berbicara" },
  { key: "dengar_teman", label: "Saya mendengarkan pendapat teman.", imageKey: "M5-P3-L7-2", urutan: "2", alt: "Dua siswa saling mendengarkan" },
  { key: "alasan_pengamatan", label: "Saya memberikan alasan berdasarkan hasil pengamatan.", imageKey: "M5-P3-L7-3", urutan: "3", alt: "Siswa menunjukkan catatan hasil pengamatan" },
  { key: "siap_membuktikan", label: "Saya siap membuktikan dugaan melalui eksplorasi.", imageKey: "M5-P3-L7-4", urutan: "4", alt: "Siswa memegang kaca pembesar dan dugaan" },
];

export default async function Materi5Peta3Step7RefleksiSingkat({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};

  const [laptopImage, ...pernyataanImages] = await Promise.all([
    getPageImage("M5-P3-L3-1"),
    ...pernyataan.map((p) => getPageImage(p.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8z" />
          </svg>
          Tahap 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          H
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Refleksi Singkat
        </div>
      </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">
            Centang (&#10003;) sesuai dengan pengalamanmu selama berdiskusi bersama kelompok.
          </p>
          {pernyataan.map((p, i) => (
            <label
              key={p.key}
              className="flex items-center gap-3 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0 cursor-pointer"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                value="ya"
                defaultChecked={answers[p.key] === "ya"}
                className="w-5 h-5 accent-[#2563EB] flex-shrink-0"
              />
              <span className="flex-1 text-sm font-semibold text-[#374151]">{p.label}</span>
              <EditablePageImage
                imageKey={p.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={p.urutan}
                src={pernyataanImages[i]}
                alt={p.alt}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
              />
            </label>
          ))}
        </div>
      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl py-2.5 px-4 flex items-center gap-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0">
          <path d="M5 13l4 4L19 7" />
        </svg>
        <p className="m-0 text-xs text-[#166534]">
          <span className="font-bold">Tips:</span> Refleksi membantumu menjadi anggota kelompok yang lebih baik dan berdiskusi secara efektif.
        </p>
      </div>
      </div>

      <div className="bg-gradient-to-br from-[#FEF9E7] to-[#FFF7ED] border border-[#F5E3A0] rounded-[24px] p-5 sm:p-6 flex flex-col gap-2">
        <p className="m-0 text-sm font-bold text-[#B91C1C] flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M12 17.8l-6.2 3.3 1.2-6.9L2 9.6l7-1L12 2l3 6.6 7 1-5 4.6 1.2 6.9z" />
          </svg>
          Motivasi
        </p>
        <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
          Dugaan yang baik didasarkan pada data dan alasan yang logis. Melalui eksplorasi, kita akan membuktikan
          apakah dugaan kita benar atau perlu diperbaiki.
        </p>
        <p className="m-0 text-sm font-bold text-[#1D4ED8]">Tetap semangat mengeksplorasi!</p>
      </div>

      <div className="grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_160px] gap-4 items-center bg-gradient-to-br from-[#FEF9E7] to-[#FFF7ED] border border-[#F5E3A0] rounded-[24px] p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm font-bold text-[#78350F]">Ingat!</p>
          <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
            Belum tentu dugaanmu benar. Pada tahap berikutnya kalian akan membuktikannya menggunakan GeoGebra 3D dan
            Augmented Reality.
          </p>
        </div>
        <EditablePageImage
          imageKey="M5-P3-L3-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={laptopImage}
          alt="Laptop menampilkan kubus 3D GeoGebra"
          editable={editFoto}
          natural
          imageClassName="mix-blend-multiply"
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
