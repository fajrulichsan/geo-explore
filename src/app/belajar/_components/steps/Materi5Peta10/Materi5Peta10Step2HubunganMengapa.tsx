import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

function SectionTitle({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
        {letter}
      </div>
      <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
        {title}
      </div>
    </div>
  );
}


const tabel = [
  ["½", "¼ kali"],
  ["2", "4 kali"],
  ["3", "9 kali"],
  ["4", "16 kali"],
  ["…", "…"],
];

export default async function Materi5Peta10Step2HubunganMengapa({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const diagram = await getPageImage("M5-P10-L2-1");
  const book = await getPageImage("M5-P10-L2-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman: Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Hubungan yang Kamu Temukan" />
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">
            Tabel berikut merangkum hubungan antara faktor skala (<i>k</i>) dan luas permukaan.
          </p>
          <div className="overflow-hidden rounded-xl border-2 border-[#1E3A8A] max-w-xl">
            <div className="grid grid-cols-2 bg-[#1E3A8A] text-white text-sm font-bold text-center">
              <div className="py-2.5">Faktor Skala (<i>k</i>)</div>
              <div className="py-2.5">Luas Permukaan Menjadi</div>
            </div>
            {[...tabel, ["k", "k² kali"]].map(([k, l]) => (
              <div key={k} className="grid grid-cols-2 text-center text-[15px] font-semibold text-[#111827] border-t border-[#E5E7EB]">
                <div className="py-3 border-r border-[#E5E7EB]">{k === "k" ? <i>k</i> : k}</div>
                <div className="py-3">{l.startsWith("k²") ? <><i>k</i>² kali</> : l}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-xl px-4 py-3 flex items-center gap-3">
            <span className="flex-shrink-0">💡</span>
            <p className="m-0 text-sm text-[#785900]">
              <span className="font-extrabold">Catatan:</span> berlaku untuk semua nilai <i>k</i> &gt; 0,
              baik 0 &lt; <i>k</i> &lt; 1 (pengecilan) maupun <i>k</i> &gt; 1 (pembesaran).
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Mengapa Demikian?" />
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 text-sm sm:text-[15px] leading-[1.7] text-[#374151]">
          <p className="m-0">
            Setiap sisi bangun ruang merupakan bangun datar. Ketika semua ukuran panjang pada suatu
            bangun diskalakan dengan faktor <i>k</i>, setiap ukuran panjang pada sisi-sisinya juga
            menjadi <i>k</i> kali ukuran semula.
          </p>
          <p className="m-0">
            Karena luas adalah besaran dua dimensi, maka luas setiap sisi menjadi <i>k</i> × <i>k</i> = <i>k</i>² kali
            luas semula. Oleh karena itu, jumlah luas seluruh sisi atau luas permukaan juga
            menjadi <i>k</i>² kali luas permukaan semula.
          </p>
          <EditablePageImage
            imageKey="M5-P10-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={diagram}
            alt="Persegi berukuran a dikalikan k menjadi persegi berukuran k·a"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
            <div className="rounded-xl border border-[#FCD34D] bg-[#FFFBEB] px-4 py-3">
              <p className="m-0 font-bold">Sebelum diskalakan</p>
              <p className="m-0">Panjang sisi = <i>a</i> = 3</p>
              <p className="m-0">Luas = <i>a</i>² = 3²</p>
            </div>
            <div className="rounded-xl border border-[#FCD34D] bg-[#FFFBEB] px-4 py-3">
              <p className="m-0 font-bold">Sesudah diskalakan (<i>k</i> = 2)</p>
              <p className="m-0">Panjang sisi = <i>k</i>·<i>a</i> = 6</p>
              <p className="m-0">Luas = (<i>k</i>·<i>a</i>)² = <i>k</i>²<i>a</i>² = 6² = 3² × 2²</p>
            </div>
          </div>
          <div className="rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-3 text-center">
            <p className="m-0 text-sm text-[#1D4ED8] font-semibold">Secara umum:</p>
            <p className="m-0 text-lg font-serif italic text-[#DC2626]">
              L′ = (<i>k</i>·<i>a</i>)² = <i>k</i>²<i>a</i>² = <i>k</i>²L
            </p>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-xl px-4 py-3 flex items-start gap-3">
            <span className="flex-shrink-0">💡</span>
            <p className="m-0 text-sm text-[#785900]">
              Prinsip yang sama berlaku pada setiap sisi yang mengalami penskalaan seragam. Karena
              itu, luas diperoleh dari hasil perkalian dua ukuran panjang, faktor skala pada luas
              selalu menjadi <i>k</i>².
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-[20px] bg-[#EFF6FF] border border-[#BFDBFE] p-6 flex flex-col gap-3">
          <span className="self-start rounded-full bg-[#2563EB] text-white text-sm font-bold px-4 py-1.5">⭐ Inti Konsep</span>
          <p className="m-0 text-[15px] leading-[1.7] text-[#1F2937]">
            Jika setiap ukuran panjang suatu bangun ruang dikalikan dengan faktor skala <i className="text-[#DC2626]">k</i>,
            maka luas permukaannya menjadi <b className="text-[#DC2626]"><i>k</i>²</b> kali luas permukaan semula.
          </p>
        </div>
        <div className="rounded-[20px] bg-[#FFF1F0] border border-[#FECACA] p-6 flex items-center gap-4">
          <div className="flex-1">
            <p className="m-0 mb-1 text-lg font-extrabold text-[#DC2626]">💡 Ingat!</p>
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">
              Hubungan ini diperoleh melalui hasil pengamatan, eksplorasi, verifikasi, dan alasan
              matematis, bukan sekadar menghafal rumus.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P10-L2-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={book}
            alt="Buku terbuka dengan bintang berkilau"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-20 flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
