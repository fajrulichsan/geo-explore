import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import type { PageImageKey } from "@/lib/pageImages";

export default async function Materi8Peta10Step7KataKunciDanPenutup({
  materi,
  peta,
  step = "7",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all(
    (Array.from({ length: 14 }, (_, i) => `M8-P10-L7-${i + 1}`) as PageImageKey[]).map((k) => getPageImage(k)),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 2z M20 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Rangkuman
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kata Kunci
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-6"
              materi={materi}
              peta={peta}
              step={step}
              urutan="6"
              src={gambar[5]}
              alt="Skala"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Skala</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-7"
              materi={materi}
              peta={peta}
              step={step}
              urutan="7"
              src={gambar[6]}
              alt="Faktor Skala"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Faktor Skala (<span className="italic">k</span>)</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-8"
              materi={materi}
              peta={peta}
              step={step}
              urutan="8"
              src={gambar[7]}
              alt="Bangun Sebangun"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Bangun Sebangun</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-9"
              materi={materi}
              peta={peta}
              step={step}
              urutan="9"
              src={gambar[8]}
              alt="Panjang Rusuk atau Sisi"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Panjang Rusuk/Sisi</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-10"
              materi={materi}
              peta={peta}
              step={step}
              urutan="10"
              src={gambar[9]}
              alt="Volume"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Volume</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-11"
              materi={materi}
              peta={peta}
              step={step}
              urutan="11"
              src={gambar[10]}
              alt="Perubahan Volume"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Perubahan Volume</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-12"
              materi={materi}
              peta={peta}
              step={step}
              urutan="12"
              src={gambar[11]}
              alt="Pangkat Tiga Faktor Skala"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Pangkat Tiga Faktor Skala (<span className="italic">k</span><sup>3</sup>)</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-13"
              materi={materi}
              peta={peta}
              step={step}
              urutan="13"
              src={gambar[12]}
              alt="Strategi Penyelesaian"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Strategi Penyelesaian</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1.5 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <EditablePageImage
              imageKey="M8-P10-L7-14"
              materi={materi}
              peta={peta}
              step={step}
              urutan="14"
              src={gambar[13]}
              alt="Alasan Matematis"
              editable={editFoto}
              containerClassName="relative w-12 h-12 overflow-hidden"
              imageClassName="object-contain"
            />
            <span>Alasan Matematis</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
      <EditablePageImage
        imageKey="M8-P10-L7-5"
        materi={materi}
        peta={peta}
        step={step}
        urutan="5"
        src={gambar[4]}
        alt="Selamat! Kamu hebat! Kamu telah berhasil menuntaskan seluruh pembelajaran Bangun Ruang Sisi Datar"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <EditablePageImage
              imageKey="M8-P10-L7-3"
              materi={materi}
              peta={peta}
              step={step}
              urutan="3"
              src={gambar[2]}
              alt="Piala"
              editable={editFoto}
              containerClassName="relative w-9 h-11 flex-shrink-0 overflow-hidden"
              imageClassName="object-contain"
            />
            <h3 className="m-0 text-base font-extrabold text-[#C2410C]">Hebat!</h3>
          </div>
          <div className="grid grid-cols-[3fr_2fr] gap-3 items-center">
            <div className="flex flex-col gap-2">
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">
                Kamu telah menemukan sendiri bahwa ketika setiap ukuran panjang (rusuk/sisi yang bersesuaian) diperbesar atau diperkecil dengan faktor skala <span className="italic">k</span>, volume bangun ruang berubah sebesar faktor <strong><span className="italic">k</span><sup>3</sup></strong>.
              </p>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">Teruslah berpikir kritis, menggunakan berbagai strategi, dan memberikan alasan matematis yang tepat!</p>
            </div>
            <EditablePageImage
              imageKey="M8-P10-L7-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={gambar[0]}
              alt="Siswa mengepalkan tangan tanda semangat"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <EditablePageImage
              imageKey="M8-P10-L7-4"
              materi={materi}
              peta={peta}
              step={step}
              urutan="4"
              src={gambar[3]}
              alt="Roket"
              editable={editFoto}
              containerClassName="relative w-9 h-11 flex-shrink-0 overflow-hidden"
              imageClassName="object-contain"
            />
            <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">Akhir Perjalanan Belajar</h3>
          </div>
          <div className="grid grid-cols-[3fr_2fr] gap-3 items-center">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Selamat! Kamu telah menyelesaikan seluruh materi Bangun Ruang Sisi Datar. Kini kamu memahami sifat-sifat bangun ruang, luas permukaan, volume, serta hubungan faktor skala terhadap luas permukaan (<span className="italic">k</span><sup>2</sup>) dan volume (<span className="italic">k</span><sup>3</sup>). Terus gunakan penalaran adaptif, berbagai strategi penyelesaian, serta alasan matematis dalam menghadapi berbagai permasalahan geometri!
            </p>
            <EditablePageImage
              imageKey="M8-P10-L7-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={gambar[1]}
              alt="Bangun ruang dengan tulisan Matematika membuatmu lebih hebat!"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden rounded-xl"
            />
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/6`} />
        <NextStepButton variant="green" icon="check">Selesai</NextStepButton>
      </div>
    </form>
  );
}
