import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";

const contoh = [
  { nama: "1. Kubus", warna: "#7C3AED", bg: "#F5F0FF", valid: ["M2-P10-L2-1", "1"], tidak: ["M2-P10-L2-2", "2"] },
  { nama: "2. Balok", warna: "#2563EB", bg: "#EFF6FF", valid: ["M2-P10-L2-3", "3"], tidak: ["M2-P10-L2-4", "4"] },
  { nama: "3. Prisma Segitiga", warna: "#16A34A", bg: "#F0FDF4", valid: ["M2-P10-L2-5", "5"], tidak: ["M2-P10-L2-6", "6"] },
  { nama: "4. Limas Segiempat", warna: "#EA580C", bg: "#FFF7ED", valid: ["M2-P10-L2-7", "7"], tidak: ["M2-P10-L2-8", "8"] },
] as const;

const ciri = [
  { ikon: "🧩", teks: "Seluruh sisi lengkap." },
  { ikon: "🔗", teks: "Seluruh sisi saling terhubung (bertemu pada rusuk yang sama)." },
  { ikon: "🧊", teks: "Tidak ada sisi yang bertumpuk saat dilipat." },
  { ikon: "↩️", teks: "Dapat dilipat." },
  { ikon: "✨", teks: "Membentuk bangun ruang secara utuh." },
];

export default async function Materi2Peta10Step2ValidTidakValid({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();

  function gambar({ kunci, alt }: { kunci: readonly [string, string]; alt: string }) {
    const key = kunci[0] as PageImageKey;
    return (
      <EditablePageImage
        imageKey={key}
        materi={materi}
        peta={peta}
        step={step}
        urutan={kunci[1]}
        src={img[key]}
        alt={alt}
        editable={editFoto}
        imageClassName="object-contain"
        containerClassName="relative w-full h-24"
      />
    );
  }

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
          <span className="bg-[#FACC15] text-[#1E3A8A] rounded-full py-1 px-4 text-xs font-bold">
            Halaman 1 dari 2
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Contoh Jaring-Jaring: Valid dan Tidak Valid
          </div>
        </div>
        <p className="m-0 text-sm leading-[1.7] text-[#4B5563]">
          Perhatikan contoh berikut. Jaring-jaring yang valid dapat dilipat membentuk bangun ruang,
          sedangkan yang tidak valid tidak dapat membentuk bangun ruang dengan benar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {contoh.map((c) => (
            <div key={c.nama} className="rounded-2xl border-2 bg-white overflow-hidden" style={{ borderColor: c.bg }}>
              <p className="m-0 py-2 px-3 text-sm font-extrabold text-center" style={{ background: c.bg, color: c.warna }}>
                {c.nama}
              </p>
              <div className="p-3 flex flex-col gap-2">
                <p className="m-0 text-xs font-bold text-[#16A34A]">✔ Valid</p>
                {gambar({ kunci: c.valid, alt: `Contoh jaring-jaring ${c.nama} yang valid` })}
                <p className="m-0 text-[13px] font-semibold text-[#16A34A] text-center">✓ Dapat dilipat</p>
                <div className="border-t border-dashed border-[#D1D5DB]" />
                <p className="m-0 text-xs font-bold text-[#DC2626]">✖ Tidak Valid</p>
                {gambar({ kunci: c.tidak, alt: `Contoh jaring-jaring ${c.nama} yang tidak valid` })}
                <p className="m-0 text-[13px] font-semibold text-[#DC2626] text-center">✕ Tidak dapat dilipat</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-full py-3 px-5 flex items-center gap-3">
          <span className="text-lg">⭐</span>
          <p className="m-0 text-sm text-[#1E3A8A]">
            <span className="font-extrabold">Kunci</span> jaring-jaring yang valid adalah{" "}
            <span className="font-extrabold">seluruh sisi terhubung</span> dan dapat dilipat membentuk
            bangun ruang <span className="font-extrabold">tanpa saling bertumpuk</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ciri-Ciri Jaring-Jaring yang Valid
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_16rem] gap-5">
          <ol className="m-0 p-0 list-none grid grid-cols-2 md:grid-cols-5 gap-3">
            {ciri.map((c, i) => (
              <li
                key={c.teks}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center text-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="w-14 h-14 rounded-full bg-[#EFF4FF] flex items-center justify-center text-2xl">{c.ikon}</div>
                <p className="m-0 text-[13px] leading-[1.5] font-semibold text-[#1E3A8A]">
                  <span className="inline-flex w-5 h-5 mr-1 rounded-full bg-[#1E3A8A] text-white text-[11px] items-center justify-center">
                    {i + 1}
                  </span>
                  {c.teks}
                </p>
              </li>
            ))}
          </ol>
          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 flex flex-col gap-2 justify-center">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A]">📌 Ingat!</p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151] font-semibold">
              Bentuk berbeda, hasil sama: tetap membentuk bangun ruang yang utuh! 🙂
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
