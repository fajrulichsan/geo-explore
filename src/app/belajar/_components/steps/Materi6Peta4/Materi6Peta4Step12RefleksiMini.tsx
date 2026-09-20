import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { HiddenFields, Nav, SectionTitle, TahapHeader, answerText, cardCls, inputCls } from "./Materi6Peta4Parts";

const refleksi = [
  { key: "refleksi_1", label: "Saya dapat membandingkan hasil GeoGebra 3D dan AR." },
  { key: "refleksi_2", label: "Saya melihat bahwa hasil kedua media menunjukkan pola yang sama." },
  { key: "refleksi_3", label: "Saya memahami bahwa volume bergantung pada luas penampang sejajar alas dan panjang/tingginya." },
  { key: "refleksi_4", label: "Saya dapat menemukan dugaan awal berdasarkan data yang diamati." },
  { key: "refleksi_5", label: "Saya belajar bekerja sama dengan kelompok untuk menyelesaikan tugas." },
];

const perasaan = [
  { nilai: "sangat-senang", emoji: "😄", label: "Sangat Senang" },
  { nilai: "senang", emoji: "🙂", label: "Senang" },
  { nilai: "biasa-saja", emoji: "😐", label: "Biasa Saja" },
  { nilai: "perlu-belajar-lagi", emoji: "😟", label: "Perlu Belajar Lagi" },
];

export default async function Materi6Peta4Step12RefleksiMini({ materi, peta, initialAnswers }: StepComponentProps) {
  const terpilih = answerText(initialAnswers, "perasaan");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={12} />
      <TahapHeader materi={materi} step={12} subtitle="Ayo Bereksplorasi 3 — Bandingkan Hasil dan Susun Dugaan Awal" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="M" judul="Refleksi Mini" hint="Centang (✓) pernyataan yang sesuai dengan pengalamanmu selama kegiatan ini." />
        <div className={`${cardCls} flex flex-col gap-3.5`}>
          {refleksi.map((r) => (
            <label key={r.key} className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name={`answers.${r.key}`}
                defaultChecked={Boolean(initialAnswers?.[r.key])}
                className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]"
              />
              <span className="text-sm text-[#374151] leading-[1.5]">{r.label}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className={`${cardCls} flex flex-col gap-2.5`}>
            <label className="text-sm font-bold text-[#111827]">Tuliskan satu hal menarik yang kamu pelajari hari ini!</label>
            <textarea
              name="answers.hal_menarik"
              defaultValue={answerText(initialAnswers, "hal_menarik")}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
          </div>
          <div className={`${cardCls} flex flex-col gap-3`}>
            <span className="text-sm font-bold text-[#111827]">Bagaimana perasaanmu hari ini?</span>
            <div className="grid grid-cols-4 gap-2">
              {perasaan.map((p, i) => (
                <label key={p.nilai} className="cursor-pointer">
                  <input
                    type="radio"
                    name="answers.perasaan"
                    value={p.nilai}
                    defaultChecked={terpilih === p.nilai}
                    required={i === 0}
                    className="peer sr-only"
                  />
                  <span className="flex flex-col items-center gap-1 rounded-2xl border border-[#E5E7EB] py-2.5 px-1 text-center peer-checked:border-[#2563EB] peer-checked:bg-[#EFF4FF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB] transition-colors">
                    <span className="text-2xl leading-none">{p.emoji}</span>
                    <span className="text-[11px] font-semibold text-[#374151] leading-[1.25]">{p.label}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-4 flex flex-col gap-2">
          <span className="text-sm font-bold text-[#92400E]">Sintesis Sementara</span>
          <span className="text-sm text-[#374151]">Dari kegiatan ini tampak bahwa:</span>
          <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.5] list-disc">
            <li>Jika luas alas/penampang tetap, volume bertambah ketika panjang/tinggi bertambah.</li>
            <li>Volume dipengaruhi oleh luas penampang sejajar alas dan panjang/tingginya.</li>
            <li>Rumus lengkap akan dipelajari pada tahap berikutnya.</li>
          </ul>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={12} last />
    </form>
  );
}
