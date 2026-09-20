import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, SectionTitle, TahapHeader, Tulis, cardCls } from "./Materi6Peta9Parts";

const analisis = [
  { key: "analisis_efisien", tanya: "Strategi mana yang menurutmu paling efisien? Jelaskan alasanmu.", rows: 3 },
  { key: "analisis_bagian_beda", tanya: "Bagian mana dari kedua strategi yang berbeda?", rows: 2 },
  { key: "analisis_perbedaan", tanya: "Apa perbedaan kedua strategi yang kamu gunakan?", rows: 3 },
];

export default async function Materi6Peta9Step4AnalisisDiskusi({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={4} />
      <TahapHeader materi={materi} step={4} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="E" judul="Analisis Strategi" warna="#1E3A8A" />
        <div className={`${cardCls} grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-6 items-start`}>
          <Foto
            k="M6-P9-L4-1"
            src={img["M6-P9-L4-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa berkata Strateginya bisa berbeda, tetapi jawabannya tetap benar"
            className="relative w-full overflow-hidden rounded-2xl"
          />
          <ol className="m-0 p-0 list-none flex flex-col gap-4">
            {analisis.map((q, i) => (
              <li key={q.key} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-sm text-[#374151] leading-[1.5]">{q.tanya}</span>
                  <Tulis name={q.key} answers={initialAnswers} rows={q.rows} label={q.tanya} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="F" judul="Diskusi Open-Ended" warna="#B45309" />
        <div className="rounded-[20px] border border-[#F5E3A0] bg-[#FFFBEB] p-5 flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] gap-5 items-center">
            <Foto
              k="M6-P9-L4-2"
              src={img["M6-P9-L4-2"]}
              ctx={ctx}
              urutan="2"
              natural
              alt="Tiga siswa berdiskusi dengan gelembung kubus, balok, dan prisma"
              className="relative w-full overflow-hidden rounded-2xl"
            />
            <div className="flex flex-col gap-3 text-sm text-[#374151] leading-[1.6]">
              <p className="m-0">Diskusikan bersama temanmu. Apakah jawaban kalian sama? Jika berbeda,</p>
              <ul className="m-0 pl-5 list-disc">
                <li>Apakah semuanya benar?</li>
                <li>Mengapa?</li>
              </ul>
              <div className="rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] px-4 py-3">
                <span className="font-extrabold text-[#1E3A8A]">Ingat! </span>
                Tidak ada satu jawaban tunggal pada soal terbuka. Lebih dari satu jawaban dapat benar!
              </div>
            </div>
          </div>
          <label className="flex flex-col gap-2 text-sm font-bold text-[#1E3A8A]">
            Tuliskan kesimpulan kelompok.
            <Tulis name="diskusi_kesimpulan" answers={initialAnswers} rows={4} label="Kesimpulan kelompok" />
          </label>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={4} />
    </form>
  );
}
