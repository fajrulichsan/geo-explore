import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, Hebat, HiddenFields, Nav, SectionTitle, TahapHeader, answerText, cardCls, inputCls } from "./Materi6Peta6Parts";

const temuan = [
  { key: "temuan_kesamaan", tanya: "Apa kesamaan hasil perhitungan dan hasil model pada ketiga bangun?" },
  {
    key: "temuan_pola",
    tanya: "Pola hubungan apa yang konsisten antara luas alas/penampang sejajar alas, tinggi kubus/balok atau panjang prisma, dan volume?",
  },
];

export default async function Materi6Peta6Step6HubunganTerverifikasi({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={6} />
      <TahapHeader materi={materi} step={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle huruf="J" judul="Apa yang Kamu Temukan?" />
          <div className={`${cardCls} flex flex-col gap-4`}>
            {temuan.map((t, i) => (
              <div key={t.key} className="flex flex-col gap-2">
                <label htmlFor={t.key} className="flex items-start gap-3 text-sm text-[#374151] leading-[1.5]">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {t.tanya}
                </label>
                <textarea
                  id={t.key}
                  name={`answers.${t.key}`}
                  defaultValue={answerText(initialAnswers, t.key)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className={`${inputCls} resize-y`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle huruf="K" judul="Hubungan yang Terverifikasi" warna="#B45309" />
          <div className={`${cardCls} flex flex-col gap-3`}>
            <label htmlFor="hubungan_terverifikasi" className="text-sm text-[#374151] leading-[1.5]">
              Berdasarkan hasil verifikasi, tuliskan dengan kata-katamu hubungan yang sama pada kubus, balok, dan prisma
              segitiga.
            </label>
            <textarea
              id="hubungan_terverifikasi"
              name="answers.hubungan_terverifikasi"
              defaultValue={answerText(initialAnswers, "hubungan_terverifikasi")}
              rows={4}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
            <p className="m-0 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] px-4 py-3 text-sm text-[#374151]">
              Gunakan hasil ini sebagai dasar untuk menyusun rumus umum pada Tahap 6.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="L" judul="Apa Buktinya?" warna="#B45309" />
        <div className={`${cardCls} flex flex-col gap-3`}>
          <label htmlFor="buktinya" className="text-sm text-[#374151] leading-[1.5]">
            Tuliskan bukti dari hasil perhitungan dan model yang mendukung hubungan yang kamu temukan. Misalnya, tuliskan
            hasil volume setiap bangun dan bagaimana hasil tersebut dengan pola yang kamu temukan.
          </label>
          <textarea
            id="buktinya"
            name="answers.buktinya"
            defaultValue={answerText(initialAnswers, "buktinya")}
            rows={4}
            placeholder="Ketik jawabanmu di sini..."
            required
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="M" judul="Siap ke Tahap 6" warna="#7C3AED" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-center bg-[#F5F3FF] border border-[#DDD6FE] rounded-[20px] p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] px-4 py-3">
                <span className="text-sm font-bold text-[#166534]">✓ Tahap 5</span>
                <p className="m-0 text-xs text-[#374151]">Memverifikasi Dugaan Hubungan Volume</p>
              </div>
              <span className="text-[#7C3AED] font-bold text-center">→</span>
              <div className="flex-1 rounded-2xl bg-[#7C3AED] px-4 py-3 text-white">
                <span className="text-sm font-bold">🎯 Tahap 6</span>
                <p className="m-0 text-xs">Menyusun Rumus Umum Volume</p>
              </div>
            </div>
            <p className="m-0 text-sm text-[#374151]">Kamu telah menyelesaikan verifikasi dugaan hubungan volume pada kubus, balok, dan prisma segitiga.</p>
            <p className="m-0 rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 text-sm font-bold text-[#92400E]">
              Sekarang, kita siap melanjutkan ke Tahap 6 untuk menyusun rumus umum volume!
            </p>
          </div>
          <Foto
            k="M6-P6-L6-1"
            src={img["M6-P6-L6-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut ke Tahap 6"
            className="relative w-56 mx-auto lg:w-full min-h-24 overflow-hidden"
          />
        </div>
      </div>

      <Hebat>
        Kamu telah menyelesaikan verifikasi dugaan hubungan volume pada kubus, balok, dan prisma segitiga. Hasil ini
        menjadi bekal penting untuk menyusun rumus umum pada tahap berikutnya.
      </Hebat>

      <Nav materi={materi} peta={peta} step={6} last />
    </form>
  );
}
