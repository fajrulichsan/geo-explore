import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, RefleksiHeader, SectionTitle, TabelCentang, answerText, cardCls, inputCls } from "./Materi6Peta8Parts";

const keyakinan = [
  "Saya yakin dapat menghitung volume kubus.",
  "Saya yakin dapat menghitung volume balok.",
  "Saya yakin dapat menghitung volume prisma segitiga.",
  "Saya yakin dapat menjelaskan alasan penggunaan rumus volume kepada teman.",
];

export default async function Materi6Peta8Step2KeyakinanTarget({
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
      <RefleksiHeader materi={materi} step={2} />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="C"
          judul="Refleksi Keyakinan Diri"
          hint="Beri tanda centang (✓) pada jawaban yang paling sesuai."
          warna="#B91C1C"
        />
        <div className={cardCls}>
          <TabelCentang
            prefix="keyakinan"
            pernyataan={keyakinan}
            answers={initialAnswers}
            opsi={[
              { value: "yakin", label: "Yakin" },
              { value: "perlu_latihan", label: "Masih Perlu Latihan" },
              { value: "belum_yakin", label: "Belum Yakin" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="D"
          judul="Target Belajarku"
          hint="Tuliskan satu hal yang masih ingin kamu pelajari atau tingkatkan tentang volume bangun ruang serta bagaimana cara kamu akan mencapainya."
          warna="#EA580C"
        />
        <div className={`${cardCls} flex flex-col gap-3`}>
          <textarea
            name="answers.target_belajar"
            aria-label="Target belajarku"
            defaultValue={answerText(initialAnswers, "target_belajar")}
            rows={5}
            placeholder="Ketik jawabanmu di sini..."
            required
            className={`${inputCls} resize-y`}
          />
          <p className="m-0 rounded-2xl bg-[#EFF4FF] border border-[#BFDBFE] px-4 py-3 text-sm text-[#1D4ED8]">
            Contoh: Saya akan berlatih mengerjakan soal volume yang masih sulit bagi saya agar lebih percaya diri.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" className="flex-shrink-0">
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" />
        </svg>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#92400E]">Hebat!</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kamu telah menyelesaikan seluruh kegiatan pada Submateri 6 dan berhasil menemukan sendiri rumus volume
            kubus, balok, dan prisma segitiga melalui proses penemuan. Teruslah berefleksi, berpikir kritis, dan teliti!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 items-center bg-white border border-[#BFDBFE] rounded-[20px] p-5">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Selanjutnya</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Pada bagian berikutnya, kamu akan mengerjakan Latihan Open-Ended yang menerapkan rumus volume dalam berbagai
            situasi dan menyelesaikan masalah dengan lebih dari satu strategi.
          </p>
        </div>
        <Foto
          k="M6-P8-L2-1"
          src={img["M6-P8-L2-1"]}
          ctx={ctx}
          alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut dan capai target belajarmu"
          className="relative w-56 mx-auto lg:w-full min-h-24 overflow-hidden"
        />
      </div>

      <Nav materi={materi} peta={peta} step={2} last />
    </form>
  );
}
