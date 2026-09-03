import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import QrPopupButton from "@/app/belajar/_components/steps/Peta2/QrPopupButton";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const cards = [
  {
    key: "geogebra",
    imageKey: "M1-P2-L5-1",
    accent: "#2563EB",
    accentBg: "#EFF4FF",
    title: "GeoGebra 3D",
    desc: "Amati model bangun ruang secara interaktif menggunakan GeoGebra 3D. Kamu dapat memutar dan memperbesar model sesuka hati.",
    action: "Buka GeoGebra",
    qrImageKey: "qr-geogebra",
    webHref: "/geogebra",
    bullets: [
      "Melihat model dari berbagai arah",
      "Memutar model secara bebas",
      "Memperbesar / memperkecil model",
    ],
  },
  {
    key: "ar",
    imageKey: "M1-P2-L5-2",
    accent: "#D97706",
    accentBg: "#FEF9E7",
    title: "Augmented Reality",
    desc: "Amati model bangun ruang virtual di lingkungan sekitarmu menggunakan teknologi Augmented Reality (AR).",
    action: "Buka Kamera AR",
    qrImageKey: "qr-ar",
    webHref: "https://ar.geo-explore.my.id",
    note: "Butuh cahaya terang",
    bullets: [
      "Menempatkan model di meja/lantai",
      "Berjalan mengelilingi model",
      "Melihat proporsi ukuran nyata",
    ],
  },
  {
    key: "2d",
    imageKey: "M1-P2-L5-3",
    accent: "#374151",
    accentBg: "#F3F4F6",
    title: "Gambar (2D)",
    desc: "Amati model bangun ruang melalui gambar tampak dari beberapa arah (Depan, Samping, Atas).",
    action: null,
    qrImageKey: null,
    webHref: null,
    bullets: [
      "Membandingkan bentuk sisi dari arah berbeda",
      "Mengamati pola proyeksi 2D dari objek 3D",
    ],
  },
] satisfies {
  key: string;
  imageKey: PageImageKey;
  accent: string;
  accentBg: string;
  title: string;
  desc: string;
  action: string | null;
  qrImageKey: PageImageKey | null;
  webHref: string | null;
  note?: string;
  bullets: string[];
}[];

export default async function Peta2Step5PilihMedia({ materi, peta, step = "5", editFoto }: StepComponentProps) {
  const cardImages = await Promise.all(cards.map((card) => getPageImage(card.imageKey)));
  const qrImages = await Promise.all(
    cards.map((card) => (card.qrImageKey ? getPageImage(card.qrImageKey) : Promise.resolve(null)))
  );
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Pilih media berikut untuk mengamati model-model bangun ruang. Gunakan imajinasimu untuk
          mengeksplorasi bentuk dan strukturnya.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          F
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Pilih Media
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <div
            key={card.key}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: card.accent }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 className="m-0 text-base font-bold text-[#111827]">{card.title}</h3>
            </div>
            <p className="m-0 text-sm leading-[1.6] text-[#4B5563] flex-1">{card.desc}</p>
            <div
              className="rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-[#E5E7EB] relative overflow-hidden"
              style={{ background: card.accentBg }}
            >
              <div className="h-5 flex items-center justify-end w-full">
                {card.note && (
                  <div className="flex items-center gap-1 bg-white/80 rounded px-2 py-1">
                    <span className="text-[10px] text-[#DC2626] font-semibold">{card.note}</span>
                  </div>
                )}
              </div>
              {card.qrImageKey && qrImages[i] ? (
                <QrPopupButton
                  title={card.title}
                  accent={card.accent}
                  qrImage={qrImages[i]!}
                  webHref={card.webHref!}
                  label=""
                  className="relative w-full h-40 rounded-lg overflow-hidden p-0 border-0 cursor-pointer"
                >
                  <EditablePageImage
                    imageKey={card.imageKey}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={String(i + 1)}
                    src={cardImages[i]}
                    alt={card.title}
                    editable={editFoto}
                    containerClassName="relative w-full h-40 rounded-lg overflow-hidden"
                  />
                </QrPopupButton>
              ) : (
                <EditablePageImage
                  imageKey={card.imageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 1)}
                  src={cardImages[i]}
                  alt={card.title}
                  editable={editFoto}
                  containerClassName="relative w-full h-40 rounded-lg overflow-hidden"
                />
              )}
              <span className="text-xs text-center text-[#6B7280]">
                Pindai atau klik untuk membuka
              </span>
              <div className="mt-1 w-full h-9">
                {card.action && card.qrImageKey && qrImages[i] && (
                  <QrPopupButton
                    title={card.title}
                    accent={card.accent}
                    qrImage={qrImages[i]!}
                    webHref={card.webHref!}
                    label={card.action}
                    className="w-full h-full rounded-full text-sm font-bold text-white shadow-sm"
                  />
                )}
              </div>
            </div>
            <div>
              <h4 className="m-0 mb-2 text-xs font-bold text-[#374151]">Kamu dapat:</h4>
              <ul className="m-0 p-0 flex flex-col gap-2 list-none">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={card.accent}
                      strokeWidth="3"
                      className="mt-1 flex-shrink-0"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
