import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const pilihan = [
  { grup: null, warna: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE", item: [{ key: "uji_strategi", teks: "Ada lebih dari satu cara untuk menentukan volume suatu bangun tanpa menghitung kubus satuan satu per satu. (dugaan strategi)" }] },
  {
    grup: "Untuk kubus dan balok:",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    item: [
      { key: "uji_kubus_satuan", teks: "Volume kubus dan balok diduga berkaitan dengan banyak kubus satuan pada satu lapisan." },
      { key: "uji_kubus_lapisan", teks: "Volume kubus dan balok diduga berkaitan dengan banyak lapisan penyusunnya." },
    ],
  },
  {
    grup: "Untuk prisma (segitiga):",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    item: [
      { key: "uji_prisma_luas", teks: "Volume prisma segitiga diduga berkaitan dengan luas penampang sejajar alas." },
      { key: "uji_prisma_panjang", teks: "Volume prisma segitiga diduga berkaitan dengan panjang prisma." },
    ],
  },
];

export default async function Materi6Peta3Step5HipotesisUji({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const getChecked = (key: string) => Boolean(answers[key]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Mengapa volume dapat ditentukan tanpa menghitung kubus satuan satu per satu?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hipotesis Kelompok
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm text-[#374151]">Menurut kelompok kami,</p>
          <label className="text-sm font-bold text-[#111827] leading-[1.5]">
            Volume kubus, balok, dan prisma diduga dapat ditentukan dengan cara
          </label>
          <textarea
                  name={`answers.hipotesis`}
                  defaultValue={getValue("hipotesis")}
                  rows={5}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
        </div>
      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
          <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Ingat!</span> Rumuskan dugaan yang dapat digunakan untuk kubus, balok, dan prisma yang sedang kamu pelajari.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Akan Diuji?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Pilih dugaan yang akan diuji oleh kelompokmu melalui eksplorasi menggunakan GeoGebra 3D dan Augmented Reality
          (AR). <span className="font-semibold text-[#2563EB]">(Kamu dapat memilih lebih dari satu.)</span>
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          {pilihan.map((g) => (
            <div key={g.grup ?? "umum"} className="rounded-2xl border p-4 flex flex-col gap-2.5" style={{ backgroundColor: g.bg, borderColor: g.border }}>
              {g.grup && (
                <span className="text-sm font-bold" style={{ color: g.warna }}>
                  {g.grup}
                </span>
              )}
              {g.item.map((it) => (
                <label key={it.key} className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name={`answers.${it.key}`}
                    defaultChecked={getChecked(it.key)}
                    className="mt-0.5 w-4 h-4 flex-shrink-0"
                    style={{ accentColor: g.warna }}
                  />
                  <span className="text-sm text-[#374151] leading-[1.5]">{it.teks}</span>
                </label>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#111827]">Dugaan lain yang ingin kami uji:</label>
            <input
              type="text"
              name="answers.uji_lain"
              defaultValue={getValue("uji_lain")}
              placeholder="Ketik dugaan lain (opsional)..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
