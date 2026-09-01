export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(180deg,#EEF2FF 0%,#F3F4F6 340px,#F3F4F6 100%)" }}
    >
      <div className="w-8 h-8 rounded-full border-4 border-[#DCE6FB] border-t-[#2563EB] animate-spin" />
    </div>
  );
}
