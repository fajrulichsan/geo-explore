import Image from "next/image";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import QrPopupButton from "@/app/belajar/_components/steps/Peta2/QrPopupButton";
import { getPageImage } from "@/lib/pageImages";

const arGestur = ["Putar", "Geser", "Perbesar / Perkecil", "Lihat dari berbagai arah"];

const gambarBullets = [
  "Membandingkan bentuk sisi dan bentuk keseluruhan",
  "Mengamati kemiripan, perbedaan, dan pola dari berbagai arah",
];

function Bullets({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="m-0 p-0 flex flex-col gap-2 list-none">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2 text-sm text-[#4B5563]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" className="mt-1 flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          {b}
        </li>
      ))}
    </ul>
  );
}

export default async function Peta2Step5PilihMedia({ materi, peta, step = "5", editFoto }: StepComponentProps) {
  const [geogebraImg, arImg, gambarImg, qrGeogebra, qrAr] = await Promise.all([
    getPageImage("M1-P2-L5-1"),
    getPageImage("M1-P2-L5-2"),
    getPageImage("M1-P2-L5-3"),
    getPageImage("qr-geogebra"),
    getPageImage("qr-ar"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pilih Media Pengamatan
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
          Pilih salah satu media berikut untuk mengamati model-model bangun ruang pada halaman sebelumnya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-white border border-[#DBE5FB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="m-0 text-lg font-bold text-[#2563EB]">GeoGebra 3D</h3>
            <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
              Amati model bangun ruang secara interaktif menggunakan GeoGebra 3D.
            </p>
          </div>
          <EditablePageImage
            imageKey="M1-P2-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={geogebraImg}
            alt="Tampilan GeoGebra 3D Calculator di laptop"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
          <div className="flex items-center gap-3 bg-[#EFF4FF] border border-[#DBE5FB] rounded-2xl p-3">
            <Image src={qrGeogebra} alt="QR code GeoGebra 3D" width={72} height={72} className="rounded-lg bg-white flex-shrink-0" />
            <div className="flex flex-col gap-2 items-start">
              <span className="text-[13px] font-bold text-[#1E3A8A]">Pindai untuk membuka GeoGebra 3D</span>
              <QrPopupButton
                title="GeoGebra 3D"
                accent="#2563EB"
                qrImage={qrGeogebra}
                webHref="/geogebra"
                label="atau klik di sini"
                className="rounded-full py-1.5 px-4 text-xs font-bold text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="m-0 text-xs font-bold text-[#374151]">Kamu dapat:</h4>
            <Bullets
              color="#2563EB"
              items={["Melihat model dari berbagai arah", "Memutar model", "Memperbesar / memperkecil model"]}
            />
          </div>
        </div>

        <div className="bg-white border border-[#CDEBD5] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="m-0 text-lg font-bold text-[#16A34A]">Augmented Reality (AR)</h3>
            <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
              Amati model bangun ruang virtual di lingkungan sekitarmu menggunakan Augmented Reality.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <EditablePageImage
              imageKey="M1-P2-L5-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={arImg}
              alt="Model kubus hijau pada layar ponsel dengan Augmented Reality"
              editable={editFoto}
              natural
              containerClassName="relative w-1/2 flex-shrink-0"
            />
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {arGestur.map((g) => (
                <li key={g} className="flex items-center gap-2 text-[13px] font-semibold text-[#374151]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3 bg-[#F0FBF3] border border-[#CDEBD5] rounded-2xl p-3">
            <Image src={qrAr} alt="QR code Augmented Reality" width={72} height={72} className="rounded-lg bg-white flex-shrink-0" />
            <div className="flex flex-col gap-2 items-start">
              <span className="text-[13px] font-bold text-[#166534]">Pindai untuk membuka Augmented Reality</span>
              <QrPopupButton
                title="Augmented Reality"
                accent="#16A34A"
                qrImage={qrAr}
                webHref="https://ar.geo-explore.my.id"
                label="atau klik di sini"
                className="rounded-full py-1.5 px-4 text-xs font-bold text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="m-0 text-xs font-bold text-[#374151]">Kamu dapat:</h4>
            <Bullets
              color="#16A34A"
              items={[
                "Melihat model dari berbagai arah",
                "Memutar, menggeser, dan memperbesar model",
                "Mengamati bentuk sisi dan bentuk keseluruhan",
              ]}
            />
          </div>
          <p className="m-0 text-xs font-semibold text-[#166534] bg-[#F0FBF3] rounded-xl py-2 px-3">
            Pastikan pencahayaan cukup dan permukaan datar.
          </p>
        </div>

        <div className="bg-white border border-[#F5E3A0] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="m-0 text-lg font-bold text-[#D97706]">Gambar</h3>
            <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
              Amati model bangun ruang melalui gambar tampak dari beberapa arah. (Ini bukan gambar 3D perspektif.)
            </p>
          </div>
          <EditablePageImage
            imageKey="M1-P2-L5-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={gambarImg}
            alt="Tabel tampak depan, samping, dan atas kubus, balok, prisma segitiga, dan limas"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
          <div className="flex flex-col gap-2">
            <h4 className="m-0 text-xs font-bold text-[#374151]">Kamu dapat:</h4>
            <Bullets color="#D97706" items={gambarBullets} />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
