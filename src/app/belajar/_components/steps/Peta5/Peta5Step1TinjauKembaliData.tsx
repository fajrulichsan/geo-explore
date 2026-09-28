import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Bangun = { key: PageImageKey; urutan: string; label: string; ciri?: string };

const bangun: Bangun[] = [
  { key: "M1-P5-L1-1", urutan: "1", label: "Kubus" },
  { key: "M1-P5-L1-2", urutan: "2", label: "Balok" },
  { key: "M1-P5-L1-3", urutan: "3", label: "Prisma Segitiga", ciri: "dua alas segitiga sejajar dan kongruen" },
  { key: "M1-P5-L1-4", urutan: "4", label: "Limas Segiempat", ciri: "alas berbentuk persegi" },
  { key: "M1-P5-L1-5", urutan: "5", label: "Limas Segitiga", ciri: "alas berbentuk segitiga" },
];

const ingat = [
  "Analisis data dengan teliti.",
  "Cari pola yang muncul.",
  "Pastikan dugaanmu berdasarkan data, bukan sekadar perkiraan."
];

export default async function Peta5Step1TinjauKembaliData({ materi, peta, editFoto }: StepComponentProps) {
  const bangunUrls = await Promise.all(bangun.map((b) => getPageImage(b.key)));
  const siswa = await getPageImage("M1-P5-L1-6");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex items-start gap-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <rect x="4" y="4" width="13" height="17" rx="2" />
            <path d="M8 4V3h5v1M7 10h6M7 14h4M17 12l4-4 1.5 1.5-4 4-2 .5z" />
          </svg>
          <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
            Pada Tahap 3, kamu telah memperoleh data hasil eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR). Sekarang, lengkapi data
            kelompokmu dengan hasil pengamatan anggota atau kelompok lain yang telah dibagikan. Selanjutnya, organisasikan dan bandingkan data tersebut
            untuk menemukan persamaan, perbedaan, dan pola pada bangun ruang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" className="flex-shrink-0">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </svg>
              <p className="m-0 text-base font-extrabold text-[#92400E]">Ingat!</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((teks) => (
                <li key={teks} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
          <EditablePageImage
            imageKey="M1-P5-L1-6"
            materi={materi}
            peta={peta}
            step="1"
            urutan="6"
            src={siswa}
            alt="Tiga siswa berdiskusi sambil menulis di buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[280px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tinjau Kembali Data Eksplorasimu
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">Tampilkan kembali data setiap bangun untuk memastikan informasimu sudah lengkap.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {bangun.map((b, i) => (
            <div key={b.key} className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3 text-center">
              <span className="self-start w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold">{b.urutan}</span>
              <EditablePageImage
                imageKey={b.key}
                materi={materi}
                peta={peta}
                step="1"
                urutan={b.urutan}
                src={bangunUrls[i]}
                alt={b.label}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-square"
              />
              <div>
                <p className="m-0 text-sm font-bold text-[#2563EB]">{b.label}</p>
                {b.ciri && <p className="mt-1 mb-0 text-xs leading-[1.5] text-[#2563EB]">({b.ciri})</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-2xl py-3 px-4 flex items-start gap-3 text-[13px] leading-[1.6] text-[#1E3A8A]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M12 8v.01M12 11.5V17" strokeLinecap="round" />
          </svg>
          <p className="m-0">Pastikan kamu memiliki data untuk kelima bangun berikut. Jika ada yang belum, lengkapi dengan data yang telah dibagikan teman/kelompok lain.</p>
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
