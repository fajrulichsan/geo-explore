import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const kesimpulanIndividu = [
  { key: "arti_jaring_jaring", label: "Menurutku, jaring-jaring bangun ruang adalah ..." },
  { key: "syarat_susunan_valid", label: "Suatu susunan bidang datar dapat disebut jaring-jaring yang valid apabila ..." },
  { key: "banyak_jaring_karena", label: "Satu bangun ruang dapat memiliki ... karena ..." },
];

const generalisasi = [
  { key: "lebih_dari_satu_jaring", label: "Mengapa satu bangun ruang dapat mempunyai lebih dari satu jaring-jaring?" },
  { key: "tidak_semua_jaring", label: "Mengapa tidak semua susunan bidang datar dapat disebut jaring-jaring?" },
  {
    key: "hubungan_sisi_posisi",
    label: "Apa hubungan antara jumlah sisi, posisi sisi, dan hubungan antarsisi dengan keberhasilan suatu susunan membentuk bangun ruang?",
  },
];

const validCells: [number, number][] = [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]];
const invalidCells: [number, number][] = [[0, 0], [1, 0], [0, 1], [1, 1], [1, 2], [1, 3]];

function NetCross({ fill, stroke, cells }: { fill: string; stroke: string; cells: [number, number][] }) {
  return (
    <svg width="56" height="72" viewBox="0 0 60 80" aria-hidden="true">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x * 20} y={y * 20} width="20" height="20" fill={fill} stroke={stroke} strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export default async function Materi2Peta7Step1KesimpulanGeneralisasi({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const mascotImage = await getPageImage("M2-P7-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan (Generalisasi)</h1>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        <div className="md:col-span-3 rounded-[24px] bg-white border border-[#BFDBFE] p-5 flex items-center gap-4">
          <EditablePageImage
            imageKey="M2-P7-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Siswi berhijab menulis di buku sambil menunjuk ke atas"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-28 sm:w-40 sm:h-36 flex-shrink-0"
          />
          <p className="m-0 text-sm leading-[1.7] text-[#1E3A8A]">
            Selamat! Kamu telah melalui proses mengamati, berdiskusi, mengeksplorasi, mengolah informasi, dan
            memverifikasi hasil. Sekarang saatnya menyusun <span className="font-bold">kesimpulan umum</span>{" "}
            berdasarkan seluruh pengalaman belajarmu.
          </p>
        </div>
        <div className="md:col-span-2 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[24px] p-5 flex items-center gap-3">
          <div className="flex-1 flex flex-col gap-1.5">
            <p className="m-0 text-base font-extrabold text-[#B45309]">Ingat!</p>
            <p className="m-0 text-xs leading-[1.6] text-[#92400E]">
              Kesimpulan bukan berasal dari tebakan, tetapi berasal dari bukti yang telah kamu temukan.
            </p>
          </div>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" className="flex-shrink-0" aria-hidden="true">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" fill="#FDE68A" />
          </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
            <h2 className="m-0 text-lg font-bold text-[#1E3A8A]">Kesimpulan Individu</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Lengkapilah kalimat berikut.</p>
          {kesimpulanIndividu.map((k, i) => (
            <label key={k.key} className="flex flex-col gap-2">
              <span className="flex items-start gap-3 text-sm font-semibold text-[#1F2937]">
                <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                {k.label}
              </span>
              <textarea
                name={`answers.${k.key}`}
                defaultValue={getValue(k.key)}
                required
                rows={2}
                className="w-full rounded-xl border border-[#E5E7EB] px-3.5 py-2.5 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none resize-y"
              />
            </label>
          ))}
        </div>

        <div className="bg-white border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">B</div>
            <h2 className="m-0 text-lg font-bold text-[#166534]">Generalisasi</h2>
          </div>
          <div className="flex items-center gap-3 bg-[#F0FDF4] rounded-xl px-4 py-3">
            <NetCross cells={validCells} fill="#BBF7D0" stroke="#16A34A" />
            <span className="text-xs text-[#166534] font-semibold">Jaring-jaring valid</span>
            <NetCross cells={invalidCells} fill="#FBCFE8" stroke="#DB2777" />
            <span className="text-xs text-[#9D174D] font-semibold">Belum tentu valid</span>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut.</p>
          {generalisasi.map((g, i) => (
            <label key={g.key} className="flex flex-col gap-2">
              <span className="flex items-start gap-3 text-sm font-semibold text-[#1F2937]">
                <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                {g.label}
              </span>
              <textarea
                name={`answers.${g.key}`}
                defaultValue={getValue(g.key)}
                required
                rows={2}
                className="w-full rounded-xl border border-[#E5E7EB] px-3.5 py-2.5 text-sm text-[#374151] focus:border-[#16A34A] focus:outline-none resize-y"
              />
            </label>
          ))}
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
