import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const diingat = [
  "satu lapisan pada kubus dan balok;",
  "penampang sejajar alas pada prisma;",
  "banyaknya lapisan pada kubus dan balok serta beberapa posisi penampang yang diamati pada prisma;",
  "hubungannya dengan volume.",
];

const bangun = [
  { nama: "kubus", judul: "Kubus", warna: "#2563EB", bg: "#EFF4FF", border: "#BFDBFE" },
  { nama: "balok", judul: "Balok", warna: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
  { nama: "prisma", judul: "Prisma (segitiga)", warna: "#EA580C", bg: "#FFF7ED", border: "#FED7AA" },
];

const kolom = [
  { key: "pengamatan", label: "Hasil Pengamatan", hint: "Kubus dan balok: satu lapisan & banyak lapisan. Prisma: penampang sejajar alas & beberapa posisi." },
  { key: "persamaan", label: "Persamaan", hint: "Antar bangun" },
  { key: "perbedaan", label: "Perbedaan", hint: "Antar bangun" },
];

export default async function Materi6Peta3Step1BandingkanHasil({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarHero = await getPageImage("M6-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
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

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1">
            Mengingat Kembali Tahap 1
          </span>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">Pada tahap sebelumnya kamu telah mengamati:</p>
          <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5] list-disc">
            {diingat.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Sekarang, diskusikan hasil pengamatanmu bersama kelompok. Bandingkan pendapat teman, tentukan dugaan yang
            akan kalian uji, dan siapkan alasan yang mendukungnya.
          </p>
        </div>
        <EditablePageImage
          imageKey="M6-P3-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarHero}
          alt="Tiga siswa berdiskusi dengan kubus, balok, dan prisma di atas meja"
          editable={editFoto}
          natural
          containerClassName="relative w-full min-h-24 rounded-[20px] overflow-hidden bg-[#EFF4FF]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapi tabel berikut berdasarkan hasil pengamatan kelompokmu.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b) => (
            <div key={b.nama} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
              <span className="text-base font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </span>
              {kolom.map((k) => (
                <div key={k.key} className="flex flex-col gap-1.5 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                  <label className="text-sm font-bold" style={{ color: b.warna }}>
                    {k.label}
                  </label>
                  <span className="text-xs text-[#6B7280] leading-[1.4]">{k.hint}</span>
                  <textarea
                    name={`answers.tabel_${b.nama}_${k.key}`}
                    defaultValue={getValue(`tabel_${b.nama}_${k.key}`)}
                    rows={3}
                    placeholder="Ketik jawabanmu di sini..."
                    required
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
        <p className="m-0 text-sm text-[#374151] leading-[1.5]"><span className="font-bold text-[#111827]">Perhatikan:</span> Banyaknya posisi penampang yang diamati bukan faktor penentu volume prisma.</p>
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
