import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const petunjuk = [
  "Bacalah kembali konsep-konsep penting berikut.",
  "Perhatikan hubungan antara bangun ruang dan jaring-jaringnya.",
  "Bandingkan contoh jaring-jaring valid dan tidak valid.",
  "Gunakan rangkuman ini untuk mengingat kembali konsep yang telah kamu temukan.",
  "Jika ada bagian yang belum kamu pahami, tinjau kembali kegiatan sebelumnya.",
];

const bangunRuang = [
  { nama: "Kubus", shape: "kubus" as const, sisi: "Persegi", jumlah: 6 },
  { nama: "Balok", shape: "balok" as const, sisi: "Persegi panjang", jumlah: 6 },
  { nama: "Prisma Segitiga", shape: "prisma" as const, sisi: "Segitiga dan persegi panjang", jumlah: 5 },
  { nama: "Limas Segiempat", shape: "limas" as const, sisi: "Segitiga dan segiempat", jumlah: 5 },
];

const contohJaring = [
  { nama: "Kubus", warna: "#7C3AED" },
  { nama: "Balok", warna: "#2563EB" },
  { nama: "Prisma Segitiga", warna: "#16A34A" },
  { nama: "Limas Segiempat", warna: "#EA580C" },
];

const ciriValid = [
  "Seluruh sisi lengkap.",
  "Seluruh sisi saling terhubung (bertemu pada rusuk yang sama).",
  "Tidak ada sisi yang bertumpuk saat dilipat.",
  "Dapat dilipat.",
  "Membentuk bangun ruang secara utuh.",
];

function CrossNet({ warna }: { warna: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 3 4" className="flex-shrink-0">
      {[
        [1, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [1, 2],
        [1, 3],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={0.92} height={0.92} rx={0.1} fill={warna} opacity={0.85} />
      ))}
    </svg>
  );
}

export default async function Materi2Peta10Step1RangkumanKonsep({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const mascotImage = await getPageImage("M2-P10-L1-1");
  const shapeImages = {
    kubus: await getPageImage("shape-kubus"),
    balok: await getPageImage("shape-balok"),
    prisma: await getPageImage("shape-prisma"),
    limas: await getPageImage("shape-limas"),
  };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={2} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Jaring-Jaring Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 items-center">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
        <EditablePageImage
          imageKey="M2-P10-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot menjelaskan rangkuman"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-xl overflow-hidden bg-white/10"
        />
        <p className="relative m-0 text-sm sm:text-[15px] leading-[1.7] text-white/95 font-medium">
          Pada submateri ini, kamu telah belajar tentang{" "}
          <span className="font-extrabold">jaring-jaring bangun ruang sisi datar</span>. Kamu
          telah mengamati, berdiskusi, mengeksplorasi menggunakan GeoGebra 3D dan Augmented Reality
          (AR), mengolah informasi, memverifikasi, dan menyimpulkan konsep penting. Berikut
          rangkuman konsep utama yang telah kamu temukan!
        </p>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 flex flex-col gap-2.5">
        <p className="m-0 text-sm font-extrabold text-[#92400E] flex items-center gap-2">
          <span>💡</span> Petunjuk Rangkuman
        </p>
        <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#785900]">
          {petunjuk.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hubungan Bangun Ruang dengan Jaring-Jaring
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5">
          <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#F9FAFB] text-[#6B7280] text-xs uppercase tracking-wide">
                  <th className="text-left font-bold px-4 py-3">Bangun Ruang</th>
                  <th className="text-left font-bold px-4 py-3">Bentuk Sisi</th>
                  <th className="text-left font-bold px-4 py-3">Jumlah Sisi</th>
                </tr>
              </thead>
              <tbody>
                {bangunRuang.map((b) => (
                  <tr key={b.nama} className="border-t border-[#F3F4F6]">
                    <td className="px-4 py-3 flex items-center gap-2.5 font-bold text-[#111827]">
                      <img src={shapeImages[b.shape]} alt={b.nama} className="w-9 h-9 object-contain" />
                      {b.nama}
                    </td>
                    <td className="px-4 py-3 text-[#4B5563]">{b.sisi}</td>
                    <td className="px-4 py-3 text-[#4B5563] font-semibold">{b.jumlah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2.5 lg:w-64">
            <p className="m-0 text-sm font-extrabold text-[#111827]">📌 Ingat!</p>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#4B5563]">
              <li>Periksa jumlah dan bentuk sisinya.</li>
              <li>Pastikan seluruh sisi saling terhubung.</li>
              <li>Perhatikan posisi setiap sisi.</li>
              <li>Saat dilipat, tidak boleh ada sisi yang bertumpuk.</li>
              <li>Susunan harus dapat membentuk bangun ruang secara utuh.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Contoh Jaring-Jaring: Valid dan Tidak Valid
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan contoh berikut. Jaring-jaring yang valid dapat dilipat membentuk bangun ruang,
          sedangkan yang tidak valid tidak dapat membentuk bangun ruang dengan benar.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {contohJaring.map((c) => (
            <div key={c.nama} className="bg-white border border-[#E5E7EB] rounded-[16px] p-4 flex flex-col items-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="m-0 text-xs font-bold text-[#111827] text-center">{c.nama}</p>
              <div className="flex flex-col items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16A34A]">
                  Valid ✓
                </span>
                <CrossNet warna={c.warna} />
              </div>
              <div className="w-full h-px bg-[#F3F4F6]" />
              <div className="flex flex-col items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#DC2626]">
                  Tidak Valid ✕
                </span>
                <CrossNet warna="#D1D5DB" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-3.5 flex items-center gap-2.5">
          <span>⭐</span>
          <p className="m-0 text-sm text-[#785900]">
            <span className="font-extrabold">Kunci</span> jaring-jaring yang valid adalah seluruh
            sisi terhubung dan dapat dilipat membentuk bangun ruang tanpa saling bertumpuk.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Ciri-Ciri Jaring-Jaring yang Valid
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-2 sm:grid-cols-5 gap-4">
            {ciriValid.map((c, i) => (
              <div key={c} className="flex flex-col items-center text-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="m-0 text-xs text-[#4B5563] leading-[1.4]">{c}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-[20px] p-5 flex flex-col gap-2 lg:w-64 justify-center">
          <p className="m-0 text-sm font-extrabold text-[#92400E]">📌 Ingat!</p>
          <p className="m-0 text-sm text-[#785900]">
            Bentuk berbeda, hasil sama: tetap membentuk bangun ruang yang utuh!
          </p>
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
