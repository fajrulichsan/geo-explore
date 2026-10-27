import { Btn, Note, Prompt, StageTitle } from "../../shared/ui";

export default function ObserveStage({
  label,
  onOpen,
  onNext,
  opened,
}: {
  label: string;
  onOpen: () => void;
  onNext: () => void;
  opened: boolean;
}) {
  return (
    <>
      <StageTitle>Eksplorasi Model {label}</StageTitle>
      <Note>↻ Putar model · 🔍 Perbesar/perkecil · 👁 Lihat dari berbagai arah</Note>
      <Prompt>
        Putar model dan amati seluruh sisinya. Perhatikan bentuk, ukuran, dan
        sisinya.
      </Prompt>
      {opened ? (
        <>
          <Note>
            Amati bagaimana setiap sisi bangun ruang berubah posisi hingga
            membentuk jaring-jaring. Gunakan slider di bawah model untuk
            menggerakkannya.
          </Note>
          <div>
            <Btn variant="primary" onClick={onNext}>
              Lanjut: Apa yang Ingin Kamu Selidiki?
            </Btn>
          </div>
        </>
      ) : (
        <div>
          <Btn variant="primary" onClick={onOpen}>
            Buka Bangun
          </Btn>
        </div>
      )}
    </>
  );
}
