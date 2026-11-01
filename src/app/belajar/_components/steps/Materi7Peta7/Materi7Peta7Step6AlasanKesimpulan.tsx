import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import FileSubmission from "@/components/FileSubmission";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CheckItem,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta7Parts";

const STEP = 5;

const petunjuk = [
  "Gunakan hasil verifikasi bahwa tiga kali isi satu limas dapat memenuhi satu prisma.",
  "Perhatikan hubungan volume limas dan prisma yang memiliki luas alas dan tinggi yang sama.",
  "Jelaskan bagaimana hubungan tersebut menghasilkan rumus volume limas.",
  "Gunakan data, pola, atau model untuk mendukung alasanmu!",
];

const kesimpulan = [
  { key: "akhir_sepertiga", label: "Volume satu limas adalah sepertiga volume prisma yang memiliki luas alas dan tinggi yang sama." },
  { key: "akhir_diperoleh", label: "Rumus volume limas diperoleh berdasarkan hubungan volume limas dan prisma yang telah diverifikasi." },
  { key: "akhir_sehari", label: "Volume limas dapat ditentukan menggunakan luas alas dan tinggi limas." },
  { key: "akhir_jelaskan", label: "Rumus volume limas dapat digunakan untuk menyelesaikan berbagai masalah dalam kehidupan sehari-hari." },
];

const GRUP_KESIMPULAN = { name: "kesimpulan-akhir", min: 2 };

export default async function Materi7Peta7Step6AlasanKesimpulan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const [laki, perempuan, hebat, ikonBalon] = await Promise.all([
    getPageImage("M7-P7-L3-1"),
    getPageImage("M7-P7-L3-2"),
    getPageImage("M7-P7-L6-1"),
    getPageImage("M7-P7-L6-2"),
  ]);
  const fileHasilKerja = initialAnswers?.file_hasil_kerja;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menuliskan Rumus Umum Volume Limas" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Mengapa Rumus Itu Benar?" color="amber" />
        <p className="m-0 text-sm font-semibold text-[#111827]">
          Jelaskan dengan alasan matematis mengapa volume limas dapat ditentukan menggunakan rumus yang telah kamu temukan!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-5 items-stretch">
          <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-[20px] p-5 flex flex-col gap-2">
            <h3 className="m-0 text-sm font-extrabold text-[#BE185D]">Petunjuk:</h3>
            <ul className="m-0 pl-5 list-disc text-sm text-[#374151] leading-[1.6]">
              {petunjuk.slice(0, 3).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="flex items-center gap-2.5 mt-1">
              <EditablePageImage
                imageKey="M7-P7-L6-2"
                materi={materi}
                peta={peta}
                step="5"
                urutan="4"
                src={ikonBalon}
                alt="Ikon balon percakapan"
                editable={editFoto}
                containerClassName="relative w-9 h-8 flex-shrink-0"
                imageClassName="object-contain"
              />
              <span className="text-sm font-bold text-[#BE185D]">{petunjuk[3]}</span>
            </div>
          </div>
          <EditablePageImage
            imageKey="M7-P7-L3-1"
            materi={materi}
            peta={peta}
            step="5"
            urutan="1"
            src={laki}
            alt="Maskot laki-laki: Gunakan data, pola, atau gambar untuk menjelaskan alasanmu!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-48 sm:w-full sm:h-full sm:min-h-48 mx-auto"
          />
        </div>
        <div className={cardClass}>
          <TextAreaField
            name="alasan_rumus_umum"
            label="Tuliskan alasan matematis kelompokmu!"
            value={getValue("alasan_rumus_umum")}
            rows={5}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Kesimpulan" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan seluruh kegiatan yang telah kamu lakukan, berilah tanda centang (✓) pada setiap pernyataan yang sesuai dengan hasil pembelajaranmu!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-5 items-stretch">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {kesimpulan.map((k) => (
              <CheckItem key={k.key} name={k.key} label={k.label} checked={getChecked(k.key)} requireGroup={GRUP_KESIMPULAN} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P7-L3-2"
            materi={materi}
            peta={peta}
            step="5"
            urutan="2"
            src={perempuan}
            alt="Maskot perempuan: Kesimpulan ini akan kita gunakan pada tahap berikutnya!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-48 sm:w-full sm:h-full sm:min-h-48 mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <EditablePageImage
            imageKey="M7-P7-L6-2"
            materi={materi}
            peta={peta}
            step="5"
            urutan="5"
            src={ikonBalon}
            alt="Ikon balon percakapan"
            editable={editFoto}
            containerClassName="relative w-10 h-9 flex-shrink-0"
            imageClassName="object-contain"
          />
          <h3 className="m-0 text-base font-extrabold text-[#111827]">Refleksi singkat</h3>
        </div>
        <div className={cardClass}>
          <TextAreaField
            name="refleksi_singkat"
            label="Jelaskan dengan kata-katamu sendiri hal terpenting yang kamu pelajari tentang volume limas."
            value={getValue("refleksi_singkat")}
            rows={3}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-4 items-center bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] px-5 py-4">
        <div className="text-sm text-[#92400E] leading-[1.6] flex flex-col gap-2">
          <p className="m-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1.5 -mt-1" aria-hidden>
              <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
            </svg>
            <span className="font-extrabold text-lg">Hebat! </span>
            Kamu telah berhasil menuliskan rumus umum volume limas dengan sangat baik!
          </p>
          <p className="m-0 flex flex-col">
            <span className="font-extrabold text-lg">Lanjut ke Tantangan</span>
            <span>Sekarang kamu siap menyelesaikan berbagai masalah yang lebih menantang!</span>
          </p>
        </div>
        <EditablePageImage
          imageKey="M7-P7-L6-1"
          materi={materi}
          peta={peta}
          step="5"
          urutan="3"
          src={hebat}
          alt="Maskot laki-laki bersemangat mengepalkan tangan"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 aspect-[555/595] mx-auto"
        />
      </div>

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof fileHasilKerja === "string" ? fileHasilKerja : undefined}
      />

      <StepFooter materi={materi} peta={peta} step={STEP} final="Lanjut ke Refleksi Diri" />
    </form>
  );
}
