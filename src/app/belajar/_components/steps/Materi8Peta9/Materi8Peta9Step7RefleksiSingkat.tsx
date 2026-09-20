import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { CheckItem, HiddenStepFields, SectionTitle, StepFooter, StepTitle, SUBTITLE, readAnswers } from "./Materi8Peta9Parts";

const STEP = 7;

const pernyataan = [
  { key: "cek_lebih_satu", label: "Saya menemukan lebih dari satu strategi." },
  { key: "cek_alasan", label: "Saya dapat menjelaskan alasan matematis." },
  { key: "cek_bandingkan", label: "Saya dapat membandingkan strategi penyelesaian." },
  { key: "cek_skala", label: "Saya dapat menggunakan konsep skala pada situasi baru." },
  { key: "cek_percaya_diri", label: "Saya percaya diri menjelaskan jawaban kepada teman." },
];

const intiOpenEnded = [
  "menggunakan berbagai strategi;",
  "memberikan alasan matematis;",
  "membandingkan efektivitas strategi;",
  "memperbaiki strategi apabila diperlukan;",
  "menerapkan konsep pada situasi baru.",
];

export default async function Materi8Peta9Step7RefleksiSingkat({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const { getChecked } = readAnswers(initialAnswers);
  const [duo, siswi] = await Promise.all([getPageImage("M8-P9-L7-1"), getPageImage("M8-P9-L7-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Refleksi Singkat" color="amber" />
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
          Centang (✓) semua pernyataan yang sesuai dengan pengalamanmu saat menyelesaikan Tantangan Open-Ended.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-3">
            {pernyataan.map((p) => (
              <CheckItem key={p.key} name={p.key} label={p.label} checked={getChecked(p.key)} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M8-P9-L7-1"
            materi={materi}
            peta={peta}
            step="7"
            urutan="1"
            src={duo}
            alt="Siswa dan siswi mengepalkan tangan: setiap strategi yang didukung alasan matematis adalah jawaban yang bermakna"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-[20px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 grid grid-cols-[1fr_110px] gap-3 items-center">
          <div className="flex flex-col gap-2">
            <h3 className="m-0 text-base font-extrabold text-[#C2410C]">Teruslah Berpikir Kreatif!</h3>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Dalam matematika, satu masalah dapat diselesaikan dengan berbagai strategi yang sama-sama benar apabila didukung oleh alasan matematis yang logis.
            </p>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Perbandingan strategi membantumu menemukan cara yang lebih efektif dan efisien.
            </p>
          </div>
          <EditablePageImage
            imageKey="M8-P9-L7-2"
            materi={materi}
            peta={peta}
            step="7"
            urutan="2"
            src={siswi}
            alt="Siswi menunjuk ke atas dengan lampu ide"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[457/600] rounded-xl bg-white overflow-hidden"
          />
        </div>
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-2.5">
          <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">Inti Open-Ended</h3>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Open-Ended bukan sekadar mencari jawaban. Yang paling penting adalah:
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {intiOpenEnded.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
