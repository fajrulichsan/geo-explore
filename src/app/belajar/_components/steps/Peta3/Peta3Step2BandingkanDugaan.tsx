import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

type Bangun = "kubus" | "balok" | "limasSegiempat" | "prismaSegitiga" | "limasSegitiga";

const BANGUN_META: Record<Bangun, { label: string; color: string }> = {
  kubus: { label: "Kubus", color: "#22C55E" },
  balok: { label: "Balok", color: "#2563EB" },
  limasSegiempat: { label: "Limas Segiempat", color: "#8B5CF6" },
  prismaSegitiga: { label: "Prisma Segitiga", color: "#F97316" },
  limasSegitiga: { label: "Limas Segitiga", color: "#EAB308" },
};

function BangunIcon({ shape }: { shape: Bangun }) {
  const { label, color } = BANGUN_META[shape];
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width="44" height="40" viewBox="0 0 44 40" fill="none">
        {shape === "kubus" && (
          <>
            <path d="M8 12l14-6 14 6-14 6-14-6z" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.5" />
            <path d="M8 12v14l14 6V18L8 12z" fill={color} fillOpacity="0.75" stroke={color} strokeWidth="1.5" />
            <path d="M36 12v14l-14 6V18l14-6z" fill={color} fillOpacity="0.9" stroke={color} strokeWidth="1.5" />
          </>
        )}
        {shape === "balok" && (
          <>
            <path d="M6 10l16-5 16 5-16 5-16-5z" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.5" />
            <path d="M6 10v18l16 5V15L6 10z" fill={color} fillOpacity="0.75" stroke={color} strokeWidth="1.5" />
            <path d="M38 10v18l-16 5V15l16-5z" fill={color} fillOpacity="0.9" stroke={color} strokeWidth="1.5" />
          </>
        )}
        {shape === "limasSegiempat" && (
          <>
            <path d="M8 20l14-6 14 6-14 6-14-6z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.5" />
            <path d="M22 3l-14 17 14 6V3z" fill={color} fillOpacity="0.8" stroke={color} strokeWidth="1.5" />
            <path d="M22 3l14 17-14 6V3z" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="1.5" />
          </>
        )}
        {shape === "prismaSegitiga" && (
          <>
            <path d="M22 4l14 8-14 8-14-8 14-8z" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.5" />
            <path d="M8 12v14l14 8V20L8 12z" fill={color} fillOpacity="0.75" stroke={color} strokeWidth="1.5" />
            <path d="M36 12v14l-14 8V20l14-8z" fill={color} fillOpacity="0.9" stroke={color} strokeWidth="1.5" />
          </>
        )}
        {shape === "limasSegitiga" && (
          <>
            <path d="M22 5l16 12-16 6-16-6L22 5z" fill={color} fillOpacity="0.45" stroke={color} strokeWidth="1.5" />
            <path d="M6 17l16 6V5L6 17z" fill={color} fillOpacity="0.85" stroke={color} strokeWidth="1.5" />
            <path d="M38 17l-16 6V5l16 12z" fill={color} fillOpacity="0.65" stroke={color} strokeWidth="1.5" />
          </>
        )}
      </svg>
      <span className="text-[11px] font-bold text-center leading-tight" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

function KelompokBlok({
  nomor,
  keterangan,
  bangun,
  warna = "text-[#111827]",
}: {
  nomor: number;
  keterangan: string;
  bangun: Bangun[];
  warna?: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-dashed border-[#E5E7EB] pt-4 first:border-t-0 first:pt-0">
      <div>
        <p className={`m-0 text-xs font-bold uppercase tracking-wide ${warna}`}>Kelompok {nomor}</p>
        <p className="m-0 mt-0.5 text-xs leading-[1.5] text-[#6B7280]">{keterangan}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 bg-[#F9FAFB] rounded-xl py-3">
        {bangun.map((b) => (
          <BangunIcon key={b} shape={b} />
        ))}
      </div>
    </div>
  );
}

const dugaanKelompok = [
  {
    label: "Dugaan Pengelompokan Kelompok A",
    pendapat: "Menurut kami, bangun ruang dapat dikelompokkan berdasarkan bentuk alasnya.",
    dasar: "Bentuk alas",
    kelompok: [
      {
        nomor: 1,
        keterangan: "Alas berbentuk persegi/persegi panjang",
        bangun: ["kubus", "balok", "limasSegiempat"] as Bangun[],
      },
      {
        nomor: 2,
        keterangan:
          "Alas berbentuk segitiga (sisi yang dipilih sebagai alas ditentukan berdasarkan posisi bangun yang diamati.)",
        bangun: ["prismaSegitiga", "limasSegitiga"] as Bangun[],
      },
    ],
  },
  {
    label: "Dugaan Pengelompokan Kelompok B",
    pendapat: "Menurut kami, bangun ruang dapat dikelompokkan berdasarkan pasangan bidang sisi yang sejajar.",
    dasar: "Pasangan bidang sisi sejajar",
    kelompok: [
      {
        nomor: 1,
        keterangan: "Memiliki pasangan bidang sisi sejajar",
        bangun: ["kubus", "balok", "prismaSegitiga"] as Bangun[],
      },
      {
        nomor: 2,
        keterangan: "Tidak memiliki pasangan bidang sisi sejajar",
        bangun: ["limasSegiempat", "limasSegitiga"] as Bangun[],
        warna: "text-[#DC2626]",
      },
    ],
  },
  {
    label: "Dugaan Pengelompokan Kelompok C",
    pendapat: "Menurut kami, bangun ruang dapat dikelompokkan berdasarkan bentuk dan susunan sisi-sisinya.",
    dasar: "Bentuk dan susunan sisi",
    kelompok: [
      {
        nomor: 1,
        keterangan: "Seluruh sisinya berbentuk persegi/persegi panjang",
        bangun: ["kubus", "balok"] as Bangun[],
      },
      {
        nomor: 2,
        keterangan: "Memiliki dua sisi segitiga sejajar dan kongruen",
        bangun: ["prismaSegitiga"] as Bangun[],
      },
      {
        nomor: 3,
        keterangan: "Sisi tegaknya berbentuk segitiga dan bertemu di satu titik puncak",
        bangun: ["limasSegiempat", "limasSegitiga"] as Bangun[],
      },
    ],
  },
];

export default function Peta3Step2BandingkanDugaan({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Amati dugaan pengelompokan dari ketiga kelompok berikut. Bandingkan persamaan, perbedaan, serta
          alasan yang mereka gunakan.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Bandingkan Dugaan Kelompok
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {dugaanKelompok.map((k) => (
          <div
            key={k.label}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
          >
            <h3 className="m-0 text-sm font-bold text-[#2563EB] leading-snug">{k.label}</h3>
            <p className="m-0 flex items-start gap-2 text-xs leading-[1.6] text-[#6B7280] bg-[#F9FAFB] rounded-xl p-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              {k.pendapat}
            </p>

            <div className="flex flex-col gap-4">
              {k.kelompok.map((g) => (
                <KelompokBlok key={g.nomor} nomor={g.nomor} keterangan={g.keterangan} bangun={g.bangun} warna={g.warna} />
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5E7EB] text-center">
              <p className="m-0 text-xs font-bold text-[#374151]">Dasar pengelompokan:</p>
              <p className="m-0 mt-1 text-sm font-bold text-[#2563EB]">{k.dasar}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-4 px-5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
        </svg>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          <span className="font-bold">Catatan:</span> Sisi yang dipilih sebagai alas ditentukan berdasarkan
          posisi bangun yang sedang diamati.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
