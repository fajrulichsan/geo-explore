import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const strategi = [
  {
    no: 1,
    judul: "Menghitung Satu per Satu",
    teks: "Hitung luas alas, kemudian hitung luas setiap sisi tegak satu per satu, lalu jumlahkan.",
    rumus: "LP = Lₐ + Ls₁ + Ls₂ + Ls₃ + …",
    sorot: false,
  },
  {
    no: 2,
    judul: "Mengelompokkan Sisi yang Sama (jika ada)",
    teks: "Jika ada sisi-sisi tegak yang kongruen, kelompokkan dan hitung luas satu sisi sebagai perwakilan. Kalikan dengan banyak sisi yang sama, kemudian tambahkan luas alas.",
    rumus: "LP = Lₐ + (L satu sisi tegak × banyak sisi tegak)",
    catatan: "Jika tidak kongruen, hitung setiap sisi tegak sesuai ukurannya masing-masing, jumlahkan, lalu + Lₐ.",
    sorot: false,
  },
  {
    no: 3,
    judul: "Menggunakan Jaring-jaring",
    teks: "Hitung luas semua bangun datar pada jaring-jaring, kemudian jumlahkan.",
    rumus: "LP = Lₐ + jumlahkan seluruh sisi tegak",
    sorot: false,
  },
  {
    no: 4,
    judul: "Menggunakan Rumus Hasil Penemuan",
    teks: "Gunakan rumus LP = Lₐ + Ls dengan menghitung luas alas dan jumlah luas sisi tegak.",
    rumus: "LP = Lₐ + jumlahkan seluruh sisi tegak",
    sorot: false,
  },
  {
    no: 5,
    judul: "Menggunakan Rumus Sisi Tegak (bila diketahui apotema)",
    teks: "Jika sisi-sisi tegaknya kongruen, luas satu sisi tegak dapat dihitung menggunakan apotema (tinggi sisi tegak).",
    rumus: "L satu sisi tegak = ½ × alas × a\nLs (jumlah sisi tegak) = L satu sisi tegak × banyak sisi tegak\nLP = Lₐ + Ls",
    catatan: "Jika tidak kongruen, hitung setiap sisi tegak sesuai ukurannya masing-masing, jumlahkan, lalu + Lₐ.",
    sorot: true,
  },
  {
    no: 6,
    judul: "Memanfaatkan Simetri",
    teks: "Gunakan sifat simetri limas untuk menentukan sisi yang sama, sehingga perhitungan menjadi lebih efisien.",
    sorot: false,
  },
];

export default async function Materi4Peta10Step3StrategiPenutup({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const mascotImage = await getPageImage("M4-P10-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Limas
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Strategi Menentukan Luas Permukaan Limas
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Masalah luas permukaan limas dapat diselesaikan dengan berbagai cara. Berikut beberapa
          strategi yang dapat kamu gunakan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategi.map((s) => (
            <div
              key={s.no}
              className={`flex flex-col gap-2.5 rounded-2xl border p-4 ${
                s.sorot ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB] bg-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {s.no}
                </div>
                <p className="m-0 text-sm font-extrabold text-[#111827] leading-[1.3]">{s.judul}</p>
              </div>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">{s.teks}</p>
              {s.rumus && (
                <div className="bg-[#F9FAFB] rounded-lg px-3 py-2">
                  <p className="m-0 text-[11px] font-bold text-[#1E3A8A] whitespace-pre-line leading-[1.6]">
                    {s.rumus}
                  </p>
                </div>
              )}
              {s.catatan && (
                <p className="m-0 text-[11px] text-[#9CA3AF] leading-[1.4]">
                  <span className="font-bold">Catatan:</span> {s.catatan}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-3.5 flex items-center gap-3">
          <span className="text-lg flex-shrink-0">⭐</span>
          <p className="m-0 text-sm text-[#785900]">
            <span className="font-extrabold">Ingat!</span> Pilih strategi yang paling sesuai
            dengan informasi yang kamu miliki dan yang paling mudah kamu pahami.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-5">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col items-center gap-3 text-center lg:w-56">
          <EditablePageImage
            imageKey="M4-P10-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Maskot anak laki-laki memberi jempol tanda semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-20 h-28 flex-shrink-0"
          />
          <p className="m-0 text-sm font-extrabold text-[#1E3A8A]">Kamu Hebat!</p>
          <p className="m-0 text-xs text-[#374151] leading-[1.5]">
            Kamu telah menemukan konsep penting ini melalui berbagai aktivitas yang bermakna.
            Teruslah belajar dan berlatih!
          </p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2.5">
          <p className="m-0 text-sm font-extrabold text-[#111827]">
            Pada halaman berikutnya, kamu akan menemukan:
          </p>
          <ul className="m-0 pl-0 flex flex-col gap-1.5 text-xs text-[#4B5563] list-none">
            {[
              "Langkah umum menentukan luas permukaan limas",
              "Ringkasan konsep dalam peta konsep",
              "Poin penting sebagai penguat pemahamanmu",
              "Kata kunci untuk memudahkan mengingat konsep",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-[#16A34A] font-bold flex-shrink-0">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#111827] rounded-[20px] p-5 flex flex-col gap-2.5 justify-center">
          <p className="m-0 text-sm font-extrabold text-white">Selanjutnya:</p>
          <p className="m-0 text-xs text-white/80 leading-[1.6]">
            Setelah memahami rangkuman, kamu akan melanjutkan ke Submateri 5 – Volume Limas.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE HALAMAN 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
