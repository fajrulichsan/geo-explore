import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Bangun = { key: PageImageKey; urutan: string; label: string };

const kubus: Bangun = { key: "M1-P3-L2-1", urutan: "1", label: "Kubus" };
const balok: Bangun = { key: "M1-P3-L2-2", urutan: "2", label: "Balok" };
const limasSegiempat: Bangun = { key: "M1-P3-L2-3", urutan: "3", label: "Limas Segiempat" };
const prismaSegitiga: Bangun = { key: "M1-P3-L2-4", urutan: "4", label: "Prisma Segitiga" };
const limasSegitiga: Bangun = { key: "M1-P3-L2-5", urutan: "5", label: "Limas Segitiga" };
const semuaBangun = [kubus, balok, limasSegiempat, prismaSegitiga, limasSegitiga];

type Kelompok = { judul: string; ciri: string; bangun: Bangun[]; tanpaCiri?: boolean };
type Dugaan = { id: string; klaim: string; dasar: string; kelompok: Kelompok[] };

const dugaan: Dugaan[] = [
  {
    id: "A",
    klaim: "Menurut kami, bangun ruang dapat dikelompokkan berdasarkan bentuk alasnya.",
    dasar: "Bentuk alas",
    kelompok: [
      { judul: "Kelompok 1", ciri: "Alas berbentuk persegi/persegi panjang", bangun: [kubus, balok, limasSegiempat] },
      {
        judul: "Kelompok 2",
        ciri: "Alas berbentuk segitiga (sisi yang dipilih sebagai alas ditentukan berdasarkan posisi bangun yang diamati)",
        bangun: [prismaSegitiga, limasSegitiga],
      },
    ],
  },
  {
    id: "B",
    klaim: "Menurut kami, bangun ruang dapat dikelompokkan berdasarkan pasangan bidang sisi yang sejajar.",
    dasar: "Pasangan bidang sisi sejajar",
    kelompok: [
      { judul: "Kelompok 1", ciri: "Memiliki pasangan bidang sisi sejajar", bangun: [kubus, balok, prismaSegitiga] },
      { judul: "Kelompok 2", ciri: "Tidak memiliki pasangan bidang sisi sejajar", bangun: [limasSegiempat, limasSegitiga], tanpaCiri: true },
    ],
  },
  {
    id: "C",
    klaim: "Menurut kami, bangun ruang dapat dikelompokkan berdasarkan bentuk dan susunan sisi-sisinya.",
    dasar: "Bentuk dan susunan sisi",
    kelompok: [
      { judul: "Kelompok 1", ciri: "Seluruh sisinya berbentuk persegi/persegi panjang", bangun: [kubus, balok] },
      { judul: "Kelompok 2", ciri: "Memiliki dua sisi segitiga sejajar dan kongruen", bangun: [prismaSegitiga] },
      { judul: "Kelompok 3", ciri: "Sisi tegaknya berbentuk segitiga dan bertemu di satu titik puncak", bangun: [limasSegiempat, limasSegitiga] },
    ],
  },
];

export default async function Peta3Step2BandingkanDugaan({ materi, peta, editFoto }: StepComponentProps) {
  const urls = await Promise.all(semuaBangun.map((b) => getPageImage(b.key)));
  const srcOf = (b: Bangun) => urls[semuaBangun.indexOf(b)];

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Dugaan Kelompok
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Amati dugaan pengelompokan dari ketiga kelompok berikut. Bandingkan persamaan, perbedaan, serta alasan yang mereka gunakan.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {dugaan.map((d) => (
            <div key={d.id} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
              <div>
                <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Dugaan Pengelompokan Kelompok {d.id}</h2>
                <p className="mt-2 mb-0 text-[13px] leading-[1.6] text-[#374151]">{d.klaim}</p>
              </div>
              {d.kelompok.map((k) => (
                <div
                  key={k.judul}
                  className={`rounded-2xl border p-4 flex flex-col gap-3 ${k.tanpaCiri ? "border-[#FECACA] bg-white" : "border-[#DBE5FB] bg-white"}`}
                >
                  <div>
                    <p className={`m-0 text-sm font-bold ${k.tanpaCiri ? "text-[#DC2626]" : "text-[#1E3A8A]"}`}>{k.judul}</p>
                    <p className="mt-1 mb-0 text-xs leading-[1.5] text-[#4B5563]">{k.ciri}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {k.bangun.map((b) => (
                      <div key={b.label} className="flex flex-col items-center gap-1 w-[76px]">
                        <EditablePageImage
                          imageKey={b.key}
                          materi={materi}
                          peta={peta}
                          step="2"
                          urutan={b.urutan}
                          src={srcOf(b)}
                          alt={b.label}
                          editable={editFoto && d.id === "A"}
                          imageClassName="object-contain"
                          containerClassName="relative w-full aspect-square"
                        />
                        <span className="text-[11px] font-semibold text-center text-[#374151] leading-tight">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <p className="m-0 text-sm font-bold text-[#1E3A8A] text-center">
                Dasar pengelompokan: <span className="text-[#2563EB]">{d.dasar}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3 px-4 flex items-start gap-3 text-[13px] leading-[1.6] text-[#374151]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0">
            <strong>Catatan:</strong> Sisi yang dipilih sebagai alas ditentukan berdasarkan posisi bangun yang sedang diamati.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
