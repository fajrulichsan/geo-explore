import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Isi, Nav, SectionTitle, TahapHeader, Tulis, answerText, cardCls } from "./Materi6Peta7Parts";

const pernyataan = [
  "Saya dapat menemukan hubungan volume pada kubus, balok, dan prisma segitiga berdasarkan hasil verifikasi.",
  "Saya dapat menyusun rumus volume setiap bangun dengan benar.",
  "Saya memahami hubungan volume dengan luas alas, tinggi kubus/balok atau panjang prisma.",
  "Saya dapat menjelaskan kembali proses verifikasi dengan kata-kataku sendiri.",
  "Saya percaya diri menggunakan rumus volume untuk menyelesaikan masalah sehari-hari.",
];

const pilihan = [
  { v: "ya", label: "Ya" },
  { v: "latihan", label: "Masih perlu latihan" },
  { v: "belum", label: "Belum memahami" },
];

export default async function Materi6Peta7Step5RefleksiEvaluasi({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={5} />
      <TahapHeader materi={materi} step={5} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle
            huruf="K"
            judul="Refleksi dan Evaluasi"
            hint="Berilah tanda centang (✓) pada pernyataan berikut sesuai dengan dirimu setelah mempelajari submateri ini."
          />
          <div className={`${cardCls} flex flex-col gap-4`}>
            {pernyataan.map((t, i) => {
              const nama = `refleksi_${i + 1}`;
              const nilai = answerText(initialAnswers, nama);
              return (
                <div key={nama} className="flex flex-col gap-2.5 rounded-2xl bg-[#EFF4FF] p-3.5">
                  <p className="m-0 flex items-start gap-3 text-sm text-[#374151] leading-[1.5]">
                    <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {t}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pilihan.map((p) => (
                      <label
                        key={p.v}
                        className="cursor-pointer rounded-full border border-[#D1D5DB] bg-white px-4 py-1.5 text-sm font-semibold text-[#4B5563] has-[:checked]:bg-[#2563EB] has-[:checked]:border-[#2563EB] has-[:checked]:text-white"
                      >
                        <input type="radio" name={`answers.${nama}`} value={p.v} defaultChecked={nilai === p.v} required className="sr-only" />
                        {p.label}
                      </label>
                    ))}
                  </div>
                  <Isi name={`${nama}_alasan`} answers={initialAnswers} label={`Alasan singkat pernyataan ${i + 1}`} placeholder="Alasan singkat..." className="text-left" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Foto
            k="M6-P7-L5-1"
            src={img["M6-P7-L5-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa berkata Yuk, tulis kesimpulanmu dengan kata-katamu sendiri"
            className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
          />
          <div className="flex flex-col gap-3">
            <SectionTitle huruf="L" judul="Kesimpulan Pribadi" warna="#C2410C" />
            <div className={`${cardCls} flex flex-col gap-3`} style={{ borderColor: "#FED7AA" }}>
              <p className="m-0 text-sm text-[#374151] leading-[1.5]">
                Jelaskan dengan bahasamu sendiri bagaimana kamu menemukan rumus volume bangun ruang sisi datar pada
                submateri ini.
              </p>
              <Tulis name="kesimpulan_pribadi" answers={initialAnswers} rows={6} label="Kesimpulan pribadi" />
            </div>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={5} />
    </form>
  );
}
