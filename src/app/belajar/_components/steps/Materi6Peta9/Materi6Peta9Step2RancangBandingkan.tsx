import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, SectionTitle, TahapHeader, Tulis, cardCls } from "./Materi6Peta9Parts";

const tuliskan = ["Bangun yang dipilih", "Ukuran bangun", "Cara menghitung volume", "Alasan memilih ukuran tersebut"];

const banding = [
  { key: "banding_ukuran_lain", tanya: "Apakah ada ukuran lain yang memiliki volume sama?" },
  { key: "banding_bangun_lain", tanya: "Apakah ada bangun berbeda yang juga memiliki volume sama?" },
  { key: "banding_alasan", tanya: "Mengapa kamu memilih strategi tersebut?" },
];

export default async function Materi6Peta9Step2RancangBandingkan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={2} />
      <TahapHeader materi={materi} step={2} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="B" judul="Rancang Strategi Penyelesaianmu" warna="#1E3A8A" />
        <div className={`${cardCls} grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5 items-start`}>
          <div className="text-sm text-[#374151] leading-[1.6]">
            <p className="m-0 font-bold">Tuliskan:</p>
            <ul className="m-0 mt-1 pl-5 list-disc flex flex-col gap-1">
              {tuliskan.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-[#93C5FD] bg-[#F8FBFF] p-3">
            <Tulis name="strategi" answers={initialAnswers} rows={7} label="Langkah-langkah strategi penyelesaianmu" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="C" judul="Bandingkan Strategimu" warna="#1E3A8A" />
        <div className={`${cardCls} grid grid-cols-1 md:grid-cols-[1fr_200px] gap-5 items-center`}>
          <ol className="m-0 p-0 list-none flex flex-col gap-4">
            {banding.map((q, i) => (
              <li key={q.key} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-sm text-[#374151] leading-[1.5]">{q.tanya}</span>
                  <Tulis name={q.key} answers={initialAnswers} rows={2} label={q.tanya} />
                </div>
              </li>
            ))}
          </ol>
          <Foto
            k="M6-P9-L2-1"
            src={img["M6-P9-L2-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Siswa berpikir dengan gelembung pikiran kubus bertanda tanya"
            className="relative w-40 mx-auto md:w-full overflow-hidden"
          />
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={2} />
    </form>
  );
}
