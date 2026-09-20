import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta10Step3MengapaDemikian({
  materi,
  peta,
  step = "3",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all((["M8-P10-L3-1"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Halaman 1 dari 2
        </div>
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
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Mengapa Demikian?
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 text-sm text-[#111827] leading-[1.7]">
          <p className="m-0">
            Volume merupakan besaran tiga dimensi. Pada balok, volume dapat dinyatakan sebagai <span className="italic">V</span> = <span className="italic">p</span> × <span className="italic">l</span> × <span className="italic">t</span>. Ketika setiap ukuran panjang yang bersesuaian diperbesar atau diperkecil dengan faktor skala <span className="italic">k</span>, maka ketiga ukuran tersebut masing-masing berubah menjadi <span className="italic">kp</span>, <span className="italic">kl</span>, dan <span className="italic">kt</span>. Oleh karena itu,
          </p>
          <p className="m-0 text-center text-base font-semibold">
            (<span className="italic">kp</span>)(<span className="italic">kl</span>)(<span className="italic">kt</span>) = <span className="italic">k</span><sup>3</sup>(<span className="italic">plt</span>),
          </p>
          <p className="m-0">sehingga volume berubah sebesar faktor <strong><span className="italic">k</span><sup>3</sup></strong>.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-[20px] bg-[#EFF4FF] border border-[#DBEAFE] p-4 flex flex-col gap-2 text-sm text-[#111827]">
            <p className="m-0 font-bold text-[#1E3A8A]">Bangun ruang awal (balok)</p>
            <p className="m-0">panjang = <span className="italic">p</span>, lebar = <span className="italic">l</span>, tinggi = <span className="italic">t</span></p>
            <p className="m-0">Volume awal <span className="italic">V</span> = <span className="italic">p</span> × <span className="italic">l</span> × <span className="italic">t</span></p>
          </div>
          <div className="rounded-[20px] bg-[#FAF5FF] border border-[#E9D5FF] p-4 flex flex-col gap-2 text-sm text-[#111827]">
            <p className="m-0 font-bold text-[#6B21A8]">Bangun ruang baru (balok hasil skala, diperbesar dengan faktor <span className="italic">k</span>)</p>
            <p className="m-0">panjang = <span className="italic">k</span> × <span className="italic">p</span>, lebar = <span className="italic">k</span> × <span className="italic">l</span>, tinggi = <span className="italic">k</span> × <span className="italic">t</span></p>
            <p className="m-0"><span className="italic">V</span>′ = (<span className="italic">kp</span>)(<span className="italic">kl</span>)(<span className="italic">kt</span>) = <span className="italic">k</span><sup>3</sup> × <span className="italic">V</span><sub>awal</sub></p>
          </div>
        </div>

        <div className="rounded-[20px] bg-[#FFFBEB] border border-[#FDE68A] p-4 text-sm text-[#111827] leading-[1.6]">
          <p className="m-0 font-extrabold text-[#C2410C]">Contoh pada Balok</p>
          <p className="m-0">Jika <span className="italic">k</span> = 2, maka 2<sup>3</sup> = 8. Volume menjadi 8 kali volume awal.</p>
        </div>
      </div>

      <div className="rounded-[20px] bg-[#EFF4FF] border border-[#DBEAFE] p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-base font-extrabold text-[#1E3A8A]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3 6.6 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.2l1.5-7L2 9.4l7-.8z" /></svg>
          Inti Konsep
        </div>
        <p className="m-0 text-sm text-[#111827] leading-[1.7]">
          Jika suatu bangun ruang diskala secara seragam dengan faktor <span className="italic">k</span>, sehingga setiap ukuran panjang yang bersesuaian menjadi <span className="italic">k</span> kali ukuran semula, maka volumenya berubah sebesar <strong><span className="italic">k</span><sup>3</sup></strong> kali.
        </p>
      </div>

      <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex flex-col gap-3">
        <h3 className="m-0 text-base font-extrabold text-[#C2410C]">Ingat!</h3>
        <ul className="m-0 pl-0 list-none flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5]">
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Hubungan ini diperoleh melalui hasil pengamatan, eksplorasi, pembuktian, dan penalaran, bukan sekadar menghafal rumus.</li>
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Berlaku untuk semua bangun ruang sisi datar yang sebangun, seperti kubus, balok, prisma, dan limas.</li>
        </ul>
        <EditablePageImage
            imageKey="M8-P10-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Kubus, balok, prisma, dan limas"
            editable={editFoto}
            natural
            
            containerClassName="relative w-full max-w-[360px] mx-auto overflow-hidden rounded-xl"
          />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
