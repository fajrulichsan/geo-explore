import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";

const petunjuk = [
  "Bacalah kembali konsep-konsep penting berikut.",
  "Perhatikan hubungan antara bangun ruang dan jaring-jaringnya.",
  "Bandingkan contoh jaring-jaring valid dan tidak valid.",
  "Gunakan rangkuman ini untuk mengingat kembali konsep yang telah kamu temukan.",
  "Jika ada bagian yang belum kamu pahami, tinjau kembali kegiatan sebelumnya.",
];

const ingat = [
  "Periksa jumlah dan bentuk sisinya.",
  "Pastikan seluruh sisi saling terhubung.",
  "Perhatikan posisi setiap sisi.",
  "Saat dilipat, tidak boleh ada sisi yang bertumpuk.",
  "Susunan harus dapat membentuk bangun ruang secara utuh.",
];

type Baris = {
  nama: string;
  sisi: string;
  jumlah: number;
  warna: string;
  ikon?: { key: PageImageKey; urutan: string };
  jaring: { key: PageImageKey; urutan: string }[];
};

const baris: Baris[] = [
  {
    nama: "Kubus",
    sisi: "Persegi",
    jumlah: 6,
    warna: "#7C3AED",
    jaring: [
      { key: "M2-P10-L1-2", urutan: "2" },
      { key: "M2-P10-L1-3", urutan: "3" },
      { key: "M2-P10-L1-4", urutan: "4" },
      { key: "M2-P10-L1-5", urutan: "5" },
    ],
  },
  {
    nama: "Balok",
    sisi: "Persegi panjang",
    jumlah: 6,
    warna: "#2563EB",
    jaring: [
      { key: "M2-P10-L1-6", urutan: "6" },
      { key: "M2-P10-L1-7", urutan: "7" },
      { key: "M2-P10-L1-8", urutan: "8" },
      { key: "M2-P10-L1-9", urutan: "9" },
    ],
  },
  {
    nama: "Prisma Segitiga",
    sisi: "Segitiga dan persegi panjang",
    jumlah: 5,
    warna: "#16A34A",
    ikon: { key: "M2-P10-L1-10", urutan: "10" },
    jaring: [
      { key: "M2-P10-L1-11", urutan: "11" },
      { key: "M2-P10-L1-12", urutan: "12" },
      { key: "M2-P10-L1-13", urutan: "13" },
      { key: "M2-P10-L1-14", urutan: "14" },
    ],
  },
  {
    nama: "Limas Segiempat",
    sisi: "Segitiga dan segiempat",
    jumlah: 5,
    warna: "#EA580C",
    ikon: { key: "M2-P10-L1-15", urutan: "15" },
    jaring: [
      { key: "M2-P10-L1-16", urutan: "16" },
      { key: "M2-P10-L1-17", urutan: "17" },
      { key: "M2-P10-L1-18", urutan: "18" },
      { key: "M2-P10-L1-19", urutan: "19" },
    ],
  },
];

function Kotak({ warna, lebar }: { warna: string; lebar: number }) {
  const w = lebar;
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" className="flex-shrink-0" aria-hidden>
      <polygon points={`4,14 ${4 + w},14 ${4 + w + 8},6 12,6`} fill={warna} opacity={0.55} />
      <rect x="4" y="14" width={w} height="26" fill={warna} opacity={0.85} />
      <polygon points={`${4 + w},14 ${4 + w + 8},6 ${4 + w + 8},32 ${4 + w},40`} fill={warna} opacity={0.65} />
    </svg>
  );
}

export default async function Materi2Peta10Step1HubunganJaring({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
          <span className="bg-[#FACC15] text-[#1E3A8A] rounded-full py-1 px-4 text-xs font-bold">
            Halaman 1 dari 2
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
        <div className="rounded-[20px] bg-[#EFF4FF] border border-[#DBEAFE] p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M2-P10-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={img["M2-P10-L1-1"]}
            alt="Maskot siswi berhijab menunjuk ke atas sambil menulis di buku"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0"
          />
          <p className="m-0 text-sm leading-[1.8] text-[#374151]">
            Pada submateri ini, kamu telah belajar tentang{" "}
            <span className="font-extrabold text-[#1E3A8A]">jaring-jaring bangun ruang sisi datar</span>.
            Kamu telah mengamati, berdiskusi, mengeksplorasi menggunakan GeoGebra 3D dan Augmented
            Reality (AR), mengolah informasi, memverifikasi, dan menyimpulkan konsep penting.
            <span className="block mt-2 font-extrabold text-[#1E3A8A]">
              Berikut rangkuman konsep utama yang telah kamu temukan!
            </span>
          </p>
        </div>

        <div className="rounded-[20px] bg-[#FEF9E7] border border-[#F5E6A8] p-5 flex flex-col gap-2.5">
          <p className="m-0 text-base font-extrabold text-[#1E3A8A] flex items-center gap-2">
            <span>💡</span> Petunjuk Rangkuman
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
            {petunjuk.map((t) => (
              <li key={t} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#374151]">
                <span className="text-[#2563EB] font-bold">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hubungan Bangun Ruang dengan Jaring-Jaring
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_16rem] gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="hidden md:grid grid-cols-[9rem_9rem_5rem_1fr] bg-[#EFF6FF] text-xs font-bold text-[#1E3A8A] text-center">
              <div className="p-3">Bangun Ruang</div>
              <div className="p-3">Bentuk Sisi</div>
              <div className="p-3">Jumlah Sisi</div>
              <div className="p-3">Contoh Beberapa Jaring-Jaring Valid</div>
            </div>
            {baris.map((b) => (
              <div
                key={b.nama}
                className="grid grid-cols-1 md:grid-cols-[9rem_9rem_5rem_1fr] items-center border-t border-[#E5E7EB] first:border-t-0 md:border-t"
              >
                <div className="p-3 flex items-center gap-3">
                  {b.ikon ? (
                    <EditablePageImage
                      imageKey={b.ikon.key}
                      materi={materi}
                      peta={peta}
                      step={step}
                      urutan={b.ikon.urutan}
                      src={img[b.ikon.key]}
                      alt={`Bangun ${b.nama.toLowerCase()}`}
                      editable={editFoto}
                      imageClassName="object-contain"
                      containerClassName="relative w-12 h-12 flex-shrink-0"
                    />
                  ) : (
                    <Kotak warna={b.warna} lebar={b.nama === "Kubus" ? 26 : 34} />
                  )}
                  <span className="text-sm font-extrabold text-[#1E3A8A]">{b.nama}</span>
                </div>
                <div className="px-3 pb-1 md:p-3 text-[13px] text-[#374151] md:text-center">
                  <span className="md:hidden font-bold">Sisi: </span>
                  {b.sisi}
                </div>
                <div className="px-3 pb-1 md:p-3 text-sm font-extrabold text-[#2563EB] md:text-center">
                  <span className="md:hidden text-[13px] font-bold text-[#374151]">Jumlah: </span>
                  {b.jumlah}
                </div>
                <div className="p-3 grid grid-cols-4 gap-2">
                  {b.jaring.map((j, i) => (
                    <EditablePageImage
                      key={j.key}
                      imageKey={j.key}
                      materi={materi}
                      peta={peta}
                      step={step}
                      urutan={j.urutan}
                      src={img[j.key]}
                      alt={`Contoh jaring-jaring ${b.nama.toLowerCase()} ${i + 1}`}
                      editable={editFoto}
                      imageClassName="object-contain"
                      containerClassName="relative aspect-square w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[20px] p-5 flex flex-col gap-3">
            <p className="m-0 text-base font-extrabold text-[#1E3A8A] text-center">📌 Ingat!</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {ingat.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#374151]">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <EditablePageImage
              imageKey="M2-P10-L1-20"
              materi={materi}
              peta={peta}
              step={step}
              urutan="20"
              src={img["M2-P10-L1-20"]}
              alt="Jaring-jaring kubus dilipat menjadi kubus"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-20"
            />
          </div>
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
